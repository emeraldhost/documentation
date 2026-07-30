---
description: Add an admin to a GTA San Andreas server
---

# How to Add an Admin to Your GTA San Andreas Server

SA-MP and open.mp have **no admin system based on player IDs**. There is no admin file you add an ID to and no permission system with multiple levels. The only built-in administration feature is **RCON** — whoever knows the RCON password is an admin.

:::: info Note
Graded admin levels, logging in with an account or commands such as `/setadmin` always come from the **gamemode**, not from the server itself. How to add admins there is documented by the respective gamemode.
::::

## Set the RCON password

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the configuration</b><br>
   Open the configuration file in the main directory of your server. On **open.mp** this is `config.json`, on **SA-MP** it is `server.cfg`.

4. <b>Enter the password</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "rcon": {
           "password": "your-secure-password"
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   rcon_password your-secure-password
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: danger Important
The default value is `changeme`. As long as this value is set, your server **will not start**. Always set a password of your own.
::::

:::: warning Caution
The RCON password is not the server password. The RCON password gives anyone full control over your server — only share it with people you trust and use a different password than the join password of your server.
::::

## Log in as admin in the game

1. <b>Join the server</b><br>
   Connect to your server as usual. See [Join Server](join-server.md).

2. <b>Open the chat</b><br>
   Press `T` to open the chat.

3. <b>Log in</b><br>
   Log in with your RCON password:

   ```
   /rcon login your-secure-password
   ```

4. <b>Use commands</b><br>
   After logging in you run RCON commands with a leading `/rcon`:

   ```
   /rcon players
   ```

## Useful RCON commands

| Command | Description |
|---------|-------------|
| `/rcon players` | Lists all connected players with ID, name, IP address and ping |
| `/rcon say <text>` | Sends a message to all players |
| `/rcon hostname <name>` | Changes the displayed server name |
| `/rcon password <password>` | Sets a join password — `password 0` removes it again |
| `/rcon mapname <name>` | Changes the map name shown in the server browser |
| `/rcon gmx` | Restarts the gamemode and loads the next entry from your gamemode list |
| `/rcon changemode <gamemode>` | Switches the gamemode |
| `/rcon weather <id>` | Changes the weather |
| `/rcon gravity <value>` | Changes the gravity |
| `/rcon exit` | Shuts the server down |

:::: tip Tip
How to remove players from your server with RCON is described under [Kick and Ban Players](kick-ban-players.md).
::::

## External remote console

Besides the chat there is the external remote console. It lets you issue RCON commands without being in the game — there the commands are entered **without** the `/rcon` prefix.

Whether this external access is active is controlled by two settings:

**open.mp — `config.json`:**

```json
{
    "rcon": {
        "enable": true
    }
}
```

**SA-MP — `server.cfg`:**

```
rcon 1
```

:::: info Note
On open.mp, `rcon.enable` defaults to `false` and is only read on server start. Since the documentation does not clearly separate whether this setting also affects the in-game login, you should set it and then test whether `/rcon login` still works.
::::

:::: warning Caution
An enabled external RCON access is reachable from the internet. Only use it with a strong password and turn it off when you do not need it.
::::
