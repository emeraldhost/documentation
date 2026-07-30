---
description: Add an admin to a Factorio server
---

# How to Add an Admin to Your Factorio Server

Admins are allowed to run commands such as `/kick`, `/ban` or `/config` on your server. A Factorio server initially starts with **no admins at all** – you define them via the server console or via the file `server-adminlist.json`.

:::: info Note
An admin is identified by the **factorio.com username** the player uses to join the server – **not** by a SteamID64. Players who bought Factorio via Steam also have a linked Factorio account.
::::

## Add an admin via the server console

1. <b>Open the server console</b><br>
   Open the console of your server via the dashboard.

2. <b>Promote the player</b><br>
   Enter the following command – the player should be on the server for this:

   ```
   /promote Username
   ```

3. <b>Verify the result</b><br>
   Use `/admins` to display all registered admins.

:::: tip Tip
The command creates the file `server-adminlist.json` automatically and stores the change permanently. The admin status therefore survives a restart.
::::

## Add an admin via the file server-adminlist.json

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open or create the file</b><br>
   In the main directory of your server – the same directory that contains `factorio-current.log` – open the file `server-adminlist.json`. If it does not exist yet, create it.

4. <b>Add the usernames</b><br>
   Enter the usernames as a simple list:

   ```json
   [
     "Player1",
     "Player2"
   ]
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Do **not** add admins in the file `data/server-settings.json`. The `admins` field in that file is ignored by a headless server – only the server console and the file `server-adminlist.json` work.
::::

## Remove admin rights

Open the server console and enter the following command:

```
/demote Username
```

## Command overview

| Command | Description |
|---------|-------------|
| `/promote <Username>` | Make a player an admin |
| `/demote <Username>` | Remove admin rights |
| `/admins` | List all admins |

:::: info Note
By default `allow_commands` is set to `admins-only` on a Factorio server, so only admins can run commands.
::::
