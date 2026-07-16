---
description: Kick and ban players on a Palworld server
---

# How to Kick and Ban Players on Your Palworld Server

As an admin you can kick or permanently ban players using commands.

:::: info Note
You need admin rights to use these commands. See [Add Admin](add-admin.md).
::::

## Show player list

Enter the following command in the chat to display all connected players with their SteamID:

```
/ShowPlayers
```

## Kick a player

```
/KickPlayer <SteamID>
```

The player is removed from the server but can rejoin.

## Ban a player

```
/BanPlayer <SteamID>
```

The player is permanently banned from the server.

## Unban a player

```
/UnBanPlayer <SteamID>
```

You can find the player's SteamID in the `banlist.txt` or from a previously noted `/ShowPlayers` output.

### Alternative: edit the ban list manually

If no admin is currently online, you can also edit the ban list directly:

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open banlist.txt</b><br>
   Open the file `banlist.txt` at:

   ```
   /Pal/Saved/SaveGames/banlist.txt
   ```

4. <b>Remove player</b><br>
   Delete the line with the player's SteamID (format: `steam_76561198000000000`).

5. <b>Start the server</b><br>
   Start your server.

## All commands

| Command | Description |
|---------|-------------|
| `/ShowPlayers` | Show player list |
| `/KickPlayer <SteamID>` | Kick a player |
| `/BanPlayer <SteamID>` | Ban a player |
| `/UnBanPlayer <SteamID>` | Unban a player |
