---
sidebar_position: 4
title: Setup Chat-Mode Function
---

## 💬 Chat Mode Execution

The runChatMode function streams responses from your onchain agent based on user prompts. It enables natural language interaction and real-time execution of blockchain actions.

```tsx
export async function runChatMode(prompt: string, agent: any, config: any) {
  try {
    const stream = await agent.stream(
      { messages: [new HumanMessage(prompt)] },
      config
    );

    let output;

    for await (const chunk of stream) {
      if ("agent" in chunk) {
        output = chunk.agent.messages[0].content;
      } else if ("tools" in chunk) {
        output = chunk.tools.messages[0].content;
      }
    }

    return output;
  } catch (error) {
    throw new Error("Error in chat mode");
  }
}
```
