---
description: Add an admin to a Minecraft PocketMine Edition server
---

# How to Add an Admin to Your Minecraft PocketMine Edition Server

In PocketMine-MP admin rights are called **operator rights** (short: "OP"). They are granted with the `op` command. What you enter is the player's **Minecraft or Xbox player name** – not a UUID and not an XUID.

:::: info Note
All operators are stored in the `ops.txt` file in the main folder of your server, one line per player. PocketMine-MP saves the names there in lower case automatically; when checking permissions, capitalisation does not matter.
::::

## Add an admin via the console

This is the usual way if you do not have operator rights yourself yet.

1. <b>Open the console</b><br>
   Open the **dashboard** of your server and switch to the console.

2. <b>Enter the command</b><br>
   Enter the following command with the player name:

   ```
   op <PlayerName>
   ```

3. <b>Wait for the confirmation</b><br>
   The server confirms the change. If the player is online at that moment, they receive their operator rights immediately.

:::: info Note
If the server does not react to the command in the console, try it with a leading `/` as well – so `/op <PlayerName>`.
::::

## Add an admin in the game

:::: warning Warning
To use this method you have to be an operator yourself already. Otherwise use the console.
::::

1. <b>Join the server</b><br>
   Connect to your server.

2. <b>Open the chat</b><br>
   Open the chat with the key matching your device or through the chat icon.

3. <b>Enter the command</b><br>
   Enter the following command:

   ```
   /op <PlayerName>
   ```

## Remove admin rights

```
/deop <PlayerName>
```

This removes the player's operator rights again and takes them out of `ops.txt`.

## Command overview

| Command | Description |
|---------|-------------|
| `/op <PlayerName>` | Gives the specified player operator status |
| `/deop <PlayerName>` | Takes the specified player's operator status |

:::: tip Tip
The player does **not** have to be online. You can also make a player an operator while they are away from the server – the only thing that matters is that the name is spelled correctly.
::::

## Edit ops.txt directly

Alternatively you can edit the file yourself.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open ops.txt</b><br>
   In the main folder of your server, open the file:

   ```
   ops.txt
   ```

4. <b>Enter the player names</b><br>
   Enter exactly one player name per line:

   ```
   steve
   alex
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
The file is read on server start. Changes you make directly in the file while the server is running do not apply reliably and may be overwritten by the server. During operation, always use the `op` and `deop` commands.
::::

## Fine-grained permissions

Operators receive all admin permissions in one bundle through the permission group `pocketmine.group.operator`, for example the `pocketmine.command.op.give` permission for granting operator rights to others.

:::: info Note
PocketMine-MP itself offers no way to grant individual permissions – there is only "operator" or "not operator". If you want graded ranks or individual commands unlocked for specific players, you need a permission plugin for that. See [Add Mods](add-mods.md).
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
