---
description: Create a new world on a Hytale server
---

# How to Create a New World on a Hytale Server

You can create multiple worlds on your Hytale server. Each world runs independently and can have its own settings.

## Available World Types

| Type | Description |
| ---- | ----------- |
| `normal` | Standard world with natural terrain |
| `flat` | Flat world without terrain |
| `void` | Empty world without blocks |

## How to Create a New World via Command

1. <b>Open Server Management</b><br>
   Open the management panel of your Hytale server.

2. <b>Enter the Command</b><br>
   Enter the following command in the console:
   ```
   world create <name> [type]
   ```
   Replace `<name>` with the name of the new world and `[type]` with the desired world type.

**Examples:**
```
world create arena flat
world create survival normal
world create creative void
```

:::: tip Note
Console commands are entered without `/`. In-game with admin rights, you need the `/` (e.g., `/world create arena flat`).
::::

## How to Switch to the New World

After creating, you can switch to the world:

```
world tp <name>
```

## How to Set the New World as Default

To make players automatically spawn in the new world when joining:

```
world setdefault <name>
```

Or in the `config.json` in the root directory:
```json
"Defaults": {
  "World": "arena",
  "GameMode": "Adventure"
}
```

## All World Commands

| Command | Description |
| ------- | ----------- |
| `world list` | Show all worlds |
| `world create <name> [type]` | Create a new world |
| `world load <name>` | Load a world |
| `world unload <name>` | Unload a world |
| `world delete <name>` | Delete a world (irreversible!) |
| `world tp <name>` | Teleport to a world |
| `world setdefault <name>` | Set world as default |
| `world config <setting> <value>` | Change world setting |

:::: warning Warning
`world delete` permanently deletes the world. Create a backup first!
::::
