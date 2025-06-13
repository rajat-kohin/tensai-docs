---
sidebar_position: 3
title: Setup & Initialize Your Agent
---

## 🧠 Initialize Your Agent

Create an agent using Viem for wallet integration, LangChain for LLM orchestration, and TensaiKit for protocol actions.

```tsx
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, http } from "viem";
import { ChatOpenAI } from "@langchain/openai";
import {
  TensaiKit,
  sushiSwapActionProvider,
  vertexActionProvider,
} from "tensai-kit-sdk";
import { ViemWalletProvider } from "tensai-kit-sdk/wallet";
import { createReactAgent, tool, MemorySaver, HumanMessage } from "langchain";

// Initialize your agent
async function initializeAgent() {
  try {
    const llm = new ChatOpenAI({
      model: "gpt-4o-mini",
      apiKey: process.env.OPENAI_API_KEY,
    });

    const account = privateKeyToAccount(
      (process.env.WALLET_PRIVATE_KEY as `0x{string}`) ?? ""
    );

    const client = createWalletClient({
      account,
      chain: arbitrumSepolia,
      transport: http(),
    });

    const walletProvider = new ViemWalletProvider(client);

    const agentkit = await TensaiKit.from({
      walletProvider,
      actionProviders: [sushiSwapActionProvider(), vertexActionProvider()],
    });

    const tools = await getMyLangChainTools(agentkit);
    const memory = new MemorySaver();

    const agentConfig = {
      configurable: { thread_id: "CDP AgentKit Chatbot Example 4" },
    };

    const agent = createReactAgent({
      llm,
      tools,
      checkpointSaver: memory,
      messageModifier: `
        You are a helpful onchain agent using Coinbase Developer Platform AgentKit. If you're on base-sepolia, use the faucet for funds. Otherwise, ask the user for funding.
        Be clear, concise, and only use tools when needed. Refer users to docs.cdp.coinbase.com for unsupported actions.
      `,
    });

    return {
      agent,
      config: agentConfig,
    };
  } catch (error) {
    console.error("Failed to initialize agent:", error);
    throw error;
  }
}

const agentPromise = initializeAgent();
export default agentPromise;
```

## 🛠️ LangChain Tool Wrapping

Wrap your `TensaiKit` actions into LangChain-compatible tools.

```tsx
async function getMyLangChainTools(agentKit: TensaiKit) {
  const actions = agentKit.getActions();

  return actions.map((action) =>
    tool(async (arg) => await action.invoke(arg), {
      name: action.name,
      description: action.description,
      schema: action.schema,
    })
  );
}
```
