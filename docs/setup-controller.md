---
sidebar_position: 5
title: Setup Controller Function
---

## 🌐 Express Controller Integration

The Express controller handles incoming chat requests and connects them to your onchain agent. It processes user prompts and returns the agent’s response as an API response.

```tsx
const agentController = async (req: Request, res: Response): Promise<any> => {
  try {
    const { agent, config } = await agentPromise;
    const { prompt } = req.body;

    const response = await runChatMode(prompt, agent, config);
    return res.status(200).send({ result: response });
  } catch (err: any) {
    return res.status(500).json({
      error: "An error occurred while processing your request.",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

export default agentController;
```
