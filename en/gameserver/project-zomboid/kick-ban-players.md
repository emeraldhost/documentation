---
description: Kick and ban players on a Project Zomboid server
---

# How to Kick and Ban Players on Your Project Zomboid Server

As an admin you can kick or permanently ban players using commands.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Show player list

Enter the following command to display all connected players:

```
/players
```

## Kick a player

```
/kick <name>
```

The player is removed from the server but can rejoin.

## Ban a player

By player name:

```
/banuser <name>
```

By SteamID64:

```
/banid <SteamID64>
```

The player is permanently banned from the server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Unban a player

By player name:

```
/unbanuser <name>
```

By SteamID64:

```
/unbanid <SteamID64>
```

## All commands

| Command | Description |
|---------|-------------|
| `/players` | Show player list |
| `/kick <name>` | Kick a player |
| `/banuser <name>` | Ban a player by name |
| `/banid <SteamID64>` | Ban a player by SteamID64 |
| `/unbanuser <name>` | Unban a player by name |
| `/unbanid <SteamID64>` | Unban a player by SteamID64 |
