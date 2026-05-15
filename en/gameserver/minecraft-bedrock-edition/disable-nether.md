---
description: Disable the Nether on a Minecraft Bedrock Edition server
---

# How to Disable the Nether on a Minecraft Bedrock Server

Unlike Java Edition, Bedrock servers have **no setting in `server.properties`** to disable the Nether. Instead, you have to block access to the dimension in a different way.

## Options

### Behavior pack
You can create or install a behavior pack that blocks Nether portals from being created or disables their functionality. Upload behavior packs as described in [Add Behavior and Resource Packs](add-behavior-und-resource-packs.md) and enable them for the world.

### Command block
With a command block in a loaded chunk you can automatically teleport players back to the overworld whenever they enter the Nether. Example:

```
/execute as @a[m=!c] in minecraft:nether run tp @s ~ ~ ~ minecraft:overworld
```

The command block must run in **Repeat** mode with **Always Active** enabled so the command is executed continuously.

:::: info Note
Both methods are workarounds — the Nether itself cannot be fully disabled on Bedrock, only access to it can be restricted.
::::
