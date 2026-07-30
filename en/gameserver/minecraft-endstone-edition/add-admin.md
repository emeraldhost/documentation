---
description: Add an admin to a Minecraft Endstone Edition server
---

# How to Add an Admin to Your Minecraft Endstone Edition Server

Endstone does not come with an admin system of its own, it uses the operator levels of the Bedrock Dedicated Server. All Endstone admin commands – such as `/ban` or `/reload` – are tied to the **operator** level.

## Permission levels at a glance

| Level | Meaning |
|-------|---------|
| `visitor` | Can only look at the world – no building and no interaction |
| `member` | Default level – can build, mine and craft |
| `operator` | Full admin rights including all admin commands |

:::: danger Important
For commands to be usable **in the in-game chat**, the following entry has to be set in the `server.properties` file in the main folder of your server:

```
allow-cheats=true
```

If it is set to `false`, even a player with the operator level cannot run commands in the chat. In the console of your server the commands are available regardless of this setting.
::::

## Add an admin via the console

This is the usual way if you do not have operator rights yourself yet.

1. <b>Open the console</b><br>
   Open the **dashboard** of your server and switch to the console.

2. <b>Enter the command</b><br>
   Enter the following command with the player name:

   ```
   op <playername>
   ```

3. <b>Wait for the confirmation</b><br>
   The server confirms the change. If the player is online, they receive their operator rights immediately.

:::: info Note
In the console of your server you enter commands without a leading `/`. In the in-game chat you write them with `/`.
::::

## Add an admin in the game

:::: warning Caution
To use this method you have to be an operator yourself already. Otherwise use the console.
::::

1. <b>Join the server</b><br>
   Connect to your server.

2. <b>Open the chat</b><br>
   Open the chat with the key matching your device or through the chat icon.

3. <b>Enter the command</b><br>
   Enter the following command:

   ```
   /op <playername>
   ```

## Revoke admin rights

```
/deop <playername>
```

This removes the operator rights from the player again.

## Commands at a glance

| Command | Description |
|---------|-------------|
| `/op <playername>` | Grants operator rights to the given player |
| `/deop <playername>` | Removes the operator rights from the given player |

## Add an admin through permissions.json

Alternatively you can add a player to the permission file directly. That file uses the player's **XUID**, not their name.

:::: tip Tip
The XUID of a player is shown in the console of your server as soon as the player joins.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open permissions.json</b><br>
   In the main folder of your server, open the file:

   ```
   permissions.json
   ```

4. <b>Add the entry</b><br>
   Add the following entry inside the square brackets:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       }
   ]
   ```

   :::: info Note
   If you want to add several players, separate the entries with a comma:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       },
       {
           "permission": "member",
           "xuid": "2535413418839841"
       }
   ]
   ```
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Caution
Make sure the JSON stays valid: every entry sits in curly brackets, entries are separated by commas, and there is **no** comma after the last entry. If the file is malformed, the server cannot read it.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
