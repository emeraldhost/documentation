---
description: Enable whitelist on a Hytale server
---

# How to Enable the Whitelist on a Hytale Server

With the whitelist, you can control who can join your server. Only players on the whitelist can connect.

## How to Enable the Whitelist

1. <b>Open Server Management</b><br>
   Open the management panel of your Hytale server.

2. <b>Enable the Whitelist</b><br>
   Enter the following command in the console:
   ```
   whitelist enable
   ```

## How to Add Players

```
whitelist add <playername>
```

## How to Remove Players

```
whitelist remove <playername>
```

## All Commands

| Command | Description |
| ------- | ----------- |
| `whitelist enable` | Enable the whitelist |
| `whitelist disable` | Disable the whitelist |
| `whitelist add <player>` | Add player to the whitelist |
| `whitelist remove <player>` | Remove player from the whitelist |
| `whitelist list` | Show all players on the whitelist |
| `whitelist status` | Show whitelist status |
| `whitelist clear` | Clear the whitelist |

:::: tip Note
Administrators (OPs) can always join, even when the whitelist is active.
::::
