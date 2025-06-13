---
sidebar_position: 6
title: Adding Custom Protocol
---

## 🔌 Adding Your Own Protocols

To add your custom protocol:

1. Inside `src/actionProvider/yourAgent/`, define your action(s).
2. Export your custom action provider.
3. Import it in your agent setup:

```tsx
import { myCustomActionProvider } from "./actionProvider/yourAgent";

const agentkit = await TensaiKit.from({
  walletProvider,
  actionProviders: [
    sushiSwapActionProvider(),
    vertexActionProvider(),
    myCustomActionProvider(), // your provider
  ],
});
```
