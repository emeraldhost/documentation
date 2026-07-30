---
description: Kick and ban players on a The Lord of the Rings Return to Moria server
---

# How to Kick and Ban Players on Your The Lord of the Rings Return to Moria Server

Return to Moria has **no admin or role system**: there is no admin list, no admin password and no admin commands inside the game. Instead you manage players through the file `MoriaServerPermissions.txt` in the main directory of your server.

:::: info Note
You always enter the **account name of the player** as it is shown on the server – **not** a SteamID64 and not an Epic ID.
::::

## Block a player

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The file may only be edited while the server is stopped – during operation the server overwrites it.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the permissions file</b><br>
   Open the following file in the main directory of your server:

   ```
   MoriaServerPermissions.txt
   ```

   :::: info Note
   If the file does not exist yet, start your server once completely. The configuration files are created on the first start.
   ::::

4. <b>Add the player</b><br>
   Add one line per player you want to lock out, following this pattern:

   ```
   Durin = Blocked
   ```

   All lines starting with `;` are comments and are ignored.

5. <b>Start the server</b><br>
   Save the file and start your server. The listed player can no longer join.

:::: tip Tip
You can also add players **in advance**, before they have ever connected – the entry takes effect as soon as somebody tries to join with that account name.
::::

## Remove a block

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Remove the line</b><br>
   Open the file `MoriaServerPermissions.txt` and delete the player's line completely.

3. <b>Start the server</b><br>
   Save the file and start your server. The player can join again.

:::: warning Caution
The list is overwritten by the server as soon as somebody is blocked in-game. Only edit the file while the server is stopped – otherwise your changes are lost.
::::

:::: warning Caution
Changes to the file only take effect after a server restart. A player who is already connected stays online until then.
::::

## What Return to Moria does not offer

:::: info Note
Return to Moria has no **temporary bans** and no **ban reasons**, no bans via a Steam or Epic ID and no ban list in the dashboard. A block stays in place until you remove the line from the permissions file again.
::::

:::: tip Limit the server to a fixed group
The permissions file locks out individual players. If you instead want to restrict access to specific people, set a server password in your server settings and share it only with those players – see [Join Server](join-server.md).
::::

## Additional permission levels

Besides `Blocked`, the permissions file offers levels that restrict the building and storage rights of individual players. Every line follows the pattern `Name = Option,Option`:

| Level | Meaning |
|-------|---------|
| `Blocked` | The player with that account name cannot join the server |
| `Default` | The player gets the default permissions |
| `NoConstruction` | The player may not build, quick-build or deconstruct |
| `QuickBuild` | The player may only quick-build platforms and rope ladders |
| `AllConstruction` | The player may build and deconstruct without restrictions |
| `NoStorage` | The player may not use storage containers or craft from shared base storage |
| `AllStorage` | The player may use all storage containers and their contents |

An example with several entries:

```
Default = QuickBuild,NoStorage
Durin = Blocked
Gimli = AllConstruction,AllStorage
Thorin = Default
```

:::: info Note
`Default` is not a player name – it defines the permissions for every player without an entry of their own. The file ships with `Default = AllConstruction,AllStorage`.
::::

:::: tip Tip
Create a [backup](create-backup.md) before making larger changes to the permissions file so you can always go back.
::::

## Console commands

The server ships with its own server console that allows managing players while it runs:

| Command | Description |
|---------|-------------|
| `players` | Show all connected players |
| `status` | Show the status of the server |
| `kick <name>` | Disconnect a player from the server |
| `block <name>` | Block a connected player |
| `unblock <name>` | Remove a block |
| `regenerateinvitecode` | Generate a new invite code on the next start |
| `rename world <name>` | Rename the world |
| `difficulty` | Show the current difficulty |
| `setdifficulty <preset>` | Set all difficulty settings to a preset |
| `setcustomdifficulty` | Set one specific difficulty setting |
| `help` | Show a list of all commands |
| `exit` | Save the world and shut down the server |

:::: danger Important
For Return to Moria the console in the dashboard only shows the output of the server – the invite code appears there, for example. The server does **not** accept commands through the dashboard because the server program runs in the background. To lock players out, use the file `MoriaServerPermissions.txt` instead.
::::

:::: info Note
A `kick` only disconnects a player from the running session. They can rejoin the same session afterwards – only players listed in the permissions file are locked out permanently.
::::

## Show server rules

You can display a freely written set of rules to your players when they join.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Edit the rules file</b><br>
   Open the following file in the main directory of your server via [SFTP](../establish-sftp-connection.md) and enter your text:

   ```
   MoriaServerRules.txt
   ```

3. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Caution
The rules text may be **1024 characters** long at most.
::::
