---
description: "Use RCON on an Insurgency: Sandstorm server"
---

# How to Use RCON on Your Insurgency: Sandstorm Server

RCON lets you remotely control and moderate your server — for example to kick or ban players, change the map or send messages. The commands can be run via an RCON tool or directly in the server console in the dashboard.

## Step 1: Enable RCON

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   The `Game.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. <b>Add the RCON section</b><br>
   Add the following section and replace `YOUR_RCON_PASSWORD` with a secure password:

   ```ini
   [Rcon]
   bEnabled=True
   Password=YOUR_RCON_PASSWORD
   ListenPort=27015
   ```

   | Setting | Description |
   |---------|-------------|
   | `bEnabled` | Enables RCON (`True`/`False`) |
   | `Password` | Password for the RCON connection |
   | `ListenPort` | Port RCON listens on — choose a free port from your port overview in the dashboard |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
Treat the RCON password like an admin password and only share it with trusted people. Only edit `Game.ini` while the server is stopped.
::::

## Step 2: Connect with an RCON tool

1. <b>Open an RCON tool</b><br>
   Open an RCON tool such as **mcrcon** or a comparable RCON client.

2. <b>Enter the connection details</b><br>
   - **Host:** your server's IP address (without the port)
   - **Port:** the RCON port set in `ListenPort`
   - **Password:** your RCON password from step 1

3. <b>Run commands</b><br>
   Once connected, you can run the commands below.

:::: tip Tip
You can also enter RCON commands directly in the **server console** in the dashboard — without any external tool.
::::

## RCON commands

| Command | Description |
|---------|-------------|
| `help` | Displays a list of all commands |
| `listplayers` | Lists all connected players |
| `kick [id/netid/name] [reason]` | Kicks a player from the server |
| `ban [id/netid/name] [minutes] [reason]` | Bans a player for the given time |
| `permaban [id/netid/name] [reason]` | Bans a player permanently |
| `unban [id/netid/name]` | Unbans a player |
| `listban` | Displays the list of banned players |
| `say [message]` | Sends a message to all players |
| `travel [travel URL]` | Changes the server to a different map |
| `travelscenario [scenario]` | Changes to a different scenario |
| `restartround [0, 1]` | Restarts the current round (`1` also swaps the teams) |
| `maps [filter]` | Lists available maps |
| `scenarios [filter]` | Lists available scenarios |
| `listgamemodeproperties [filter]` | Lists all properties of the current game mode |
| `gamemodeproperty [property] [value]` | Sets or displays a game mode property |
