---
description: Enable whitelist on a Hytale server
---

# How to Enable the Whitelist on a Hytale Server

With the whitelist, you can control who can join your server. Only players on the whitelist can connect.

## How to Enable the Whitelist

1. <b>Open dashboard</b><br>
   Open the dashboard of your Hytale server.

2. <b>Enable the Whitelist</b><br>
   Enter the following command in the console:
   ```
   whitelist enable
   ```

The server saves this setting in `config.json` right away (`"RequireJoinPermission": true`). So the whitelist stays active after a restart.

## How to Add Players

```
whitelist add <playername>
```

Instead of the name, you can also use the player's UUID. The player does not have to be online for this.

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

## Where Does Hytale Store the Whitelist?

Since Update 6, there is no separate `whitelist.json` anymore. Instead, every player on the whitelist receives the permission `hytale.server.join`, which the server stores in `permissions.json` in the main directory. If you still have an old `whitelist.json`, the server takes it over automatically on startup and renames it to `whitelist.json.migrated`.

:::: info Note
Administrators (OPs) can always join, even when the whitelist is active. Their group `hytale:Admin` has all permissions, including `hytale.server.join`. This applies to every group that has this permission: its members can join despite the whitelist, even if you remove them with `whitelist remove`. In that case, the server tells you with the message "... can still join, because a group or a wildcard grants them the permission!".
::::
