---
description: Kick and ban players on a Soulmask server
---

# How to Kick and Ban Players on Your Soulmask Server

As an admin you can kick or permanently ban players using GM commands.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Enable ban list

Before you can ban players, you need to enable the ban list. Open the console with `~` and enter:

```
gm EnableServerPermissionList 1 1
```

## Kick a player

```
gm KickPlayer <SteamID64>
```

The player is removed from the server but can rejoin.

## Ban a player

```
gm AddServerPermissionList 1 <SteamID64>
```

The player is immediately kicked and permanently banned from the server.

## Unban a player

```
gm RemoveServerPermissionList 1 <SteamID64>
```

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## Edit ban list manually

You can also edit the ban list directly via [SFTP](../establish-sftp-connection.md). The file is located at:

```
/WS/Saved/BlackAccountList.txt
```

Each line contains a SteamID64 of a banned player.

## All commands

| Command | Description |
|---------|-------------|
| `gm EnableServerPermissionList 1 1` | Enable ban list |
| `gm KickPlayer <SteamID64>` | Kick a player |
| `gm AddServerPermissionList 1 <SteamID64>` | Ban a player |
| `gm RemoveServerPermissionList 1 <SteamID64>` | Unban a player |
