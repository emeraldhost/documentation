---
description: Change the world border (worldborder) on a Minecraft Bedrock Edition server
---

# How to Change the World Border on a Minecraft Bedrock Server

Unlike Java Edition, Bedrock servers have **no native `/worldborder` command**. To enforce a boundary, you have to restrict players' movement in a different way.

## Options

### Command block
With a command block in a loaded chunk you can teleport players back to the center whenever they cross a certain coordinate. Example — pull all players further than 500 blocks from `0, 0` back to the center:

```
/execute as @a[rm=500] run tp @s 0 ~ 0
```

The command block must run in **Repeat** mode with **Always Active** enabled so the command is executed continuously.

### Behavior pack
You can create or install a behavior pack that enforces the desired boundary — for example with damage outside the area or an automatic teleport. Upload behavior packs as described in [Add Behavior and Resource Packs](add-behavior-und-resource-packs.md) and enable them for the world.

:::: info Note
Both methods are workarounds — a true world border with warning, damage and animation like in Java Edition cannot be implemented natively on Bedrock.
::::
