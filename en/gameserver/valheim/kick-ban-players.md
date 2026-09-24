---
description: Kick and ban players on a Valheim server
---

# How to Kick and Ban Players on Your Valheim Server

You can kick and ban players using the in-game console or edit the ban list manually via SFTP.

## Kick and ban players via console

Open the console with `F5` and enter the following commands. The commands only work if you are listed in `adminlist.txt` – see [Add Admin](add-admin.md).

### Kick a player

```
kick <name>
```

The player is removed from the server but can rejoin.

### Ban a player

```
ban <name>
```

The player is permanently banned from the server. If they are currently online, the server adds their player ID to `bannedlist.txt`, otherwise the name you entered.

### Unban a player

```
unban <ID>
```

Enter the entry exactly as it appears in the ban list. You can display all banned entries with the command `banned`.

## Edit ban list manually

You can also edit the ban list and permitted list directly via SFTP:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Edit files</b><br>
   Open the files at `/.config/unity3d/IronGate/Valheim/`:

   - `bannedlist.txt` – Banned players (one player ID per line)
   - `permittedlist.txt` – Permitted players (one player ID per line), see [Enable the Whitelist](enable-whitelist.md)

4. <b>Add or remove the player ID</b><br>
   Add the player's ID on a new line or remove it. To unban a player, remove every line that belongs to them – a Steam player can be listed in several forms. Copy the ID exactly as it appears in the player list (`F2`) or in the server log, including the prefix and upper and lower case, e.g. `V_76561198012345678`. For Steam players, the older form `Steam_76561198012345678` and the plain SteamID64 also work. Crossplay players (e.g. on Xbox, PlayStation 5 or Nintendo Switch 2) do not have a SteamID64, so for them you always need the ID from the player list or the server log.

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
Here you can find a guide on how to find your [SteamID64](../steamid64-find-out.md).
::::

## All commands

| Command | Description |
|---------|-------------|
| `kick <name>` | Kick a player |
| `ban <name>` | Ban a player |
| `unban <ID>` | Unban a player |
| `banned` | Show banned players |
