---
description: Kick and ban players on a Factorio server
---

# How to Kick and Ban Players on Your Factorio Server

You can kick and ban players via the server console in the dashboard or in-game via chat commands. Players are always identified by their **Factorio username**.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

:::: tip Tip
In the server console the commands are entered **with** a leading slash, e.g. `/kick PlayerName`.
::::

## Kick a player

```
/kick <Username> <Reason>
```

The player is removed from the server but can rejoin.

## Ban a player

```
/ban <Username> <Reason>
```

The player is banned from the server and added to the ban list.

## Unban a player

```
/unban <Username>
```

## View and manage the ban list

```
/bans
```

```
/banlist <add/remove/get/clear> <Username>
```

## Edit the ban list manually

The ban list is stored as the file `server-banlist.json` in the main directory of your server and is created automatically when you ban someone. You can edit it via [SFTP](../establish-sftp-connection.md):

```json
[
  "Player1",
  "Player2"
]
```

Restart the server after editing so the list is read in again.

## Mute a player

```
/mute <Username>
```

```
/unmute <Username>
```

With `/purge <Username>` you can additionally remove a player's chat messages.

## Command overview

| Command | Description |
|---------|-------------|
| `/players [online/count]` | List players on the server |
| `/kick <Username> <Reason>` | Kick a player |
| `/ban <Username> <Reason>` | Ban a player |
| `/unban <Username>` | Unban a player |
| `/bans` | Show the ban list |
| `/banlist <add/remove/get/clear> <Username>` | Manage the ban list |
| `/mute <Username>` | Mute a player |
| `/unmute <Username>` | Unmute a player |
| `/purge <Username>` | Remove a player's chat messages |
| `/server-save` | Save the game immediately |

:::: warning Whitelist
The command `/whitelist <add/remove/get/clear> [Username]` does exist, but the whitelist is **not active** with the default start command: it additionally requires the startup parameters `--server-whitelist` and `--use-server-whitelist`. Without them a whitelist set in-game is also not written to the file and is lost when the server stops. To lock out individual players, use the ban list instead.
::::

:::: tip Tip
Run `/server-save` after a ban so the current state is saved.
::::
