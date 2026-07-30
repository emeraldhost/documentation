---
description: Add an admin to a Terraria tShock server
---

# How to Add an Admin to Your Terraria tShock Server

tShock manages permissions through **accounts and groups**. An admin is therefore not an entry in a file but a user account consisting of a user name and a password that belongs to a group with far-reaching permissions. You do not need a SteamID or any other player ID for this.

:::: info Note
The accounts are stored in the database `/tshock/tshock.sqlite`. Passwords are stored encrypted there and cannot be read back – a forgotten password is reset through the server console.
::::

## Create an admin via the server console

This is the fastest way because it requires neither a setup code nor an existing account. The server console always has the highest permissions on a tShock server.

1. <b>Start the server</b><br>
   Start your server via the dashboard.

2. <b>Open the console</b><br>
   Open the server console in the dashboard.

3. <b>Create the account</b><br>
   Enter the following command:

   ```
   user add <username> <password> owner
   ```

   Replace `<username>` and `<password>` with your own values and keep `owner` as the group.

   :::: info Note
   In the server console you enter commands **without** a leading forward slash. In the in-game chat you always need it, so `/user add ...`.
   ::::

4. <b>Join the server</b><br>
   Join your server: [Join server](join-server.md).

5. <b>Log in</b><br>
   Log in through the in-game chat:

   ```
   /login <username> <password>
   ```

   You now have admin rights and can use all commands of your group.

   :::: warning Turn off the setup code
   If tShock printed a setup code on startup, that code stays valid until the next server start – even if you created your account through the console. So after logging in, enter `/setup` once in the in-game chat. This disables the setup system immediately and deletes the code.
   ::::

## Create an admin via the setup code

Alternatively you can use the setup assistant that tShock provides on the first start.

1. <b>Read the setup code</b><br>
   Open the server console in the dashboard. On startup you will find a message like this:

   ```
   To setup the server, join the game and type /setup <code>
   ```

   :::: tip Tip
   The code is also stored in the file `/tshock/setup-code.txt`, which you can open via [SFTP](../establish-sftp-connection.md).
   ::::

2. <b>Enter the setup command</b><br>
   Join your server and enter the following in the in-game chat:

   ```
   /setup <code>
   ```

   :::: warning Caution
   This command only works in the game, not in the server console.
   ::::

3. <b>Create the account</b><br>
   Now create your account:

   ```
   /user add <username> <password> owner
   ```

4. <b>Log in</b><br>
   Log in with your new account:

   ```
   /login <username> <password>
   ```

5. <b>Finish the setup</b><br>
   Finally, enter once more:

   ```
   /setup
   ```

   This permanently disables the setup system and deletes the setup code.

   :::: danger Important
   Always finish the setup. As long as the setup system is active, anyone who knows the code can grant themselves full permissions on your server.
   ::::

## Manage accounts

All commands work in the in-game chat (with `/`) and in the server console (without `/`).

| Command | Description |
|---------|-------------|
| `user add <user> <password> <group>` | Create a new account |
| `user del <user>` | Delete an account |
| `user password <user> <new password>` | Change the password |
| `user group <user> <new group>` | Move an account to another group |

:::: info Note
By default passwords have to be at least four characters long. This value is controlled by `MinimumPasswordLength` in the file `/tshock/config.json`.
::::

:::: tip Automatic login
After your first login tShock remembers the device identifier of your client and logs you in automatically whenever you join the server. This behaviour is controlled by the value `DisableUUIDLogin` in the file `/tshock/config.json`.
::::

## Groups and permissions

tShock ships with several groups whose permissions increase from bottom to top:

| Group | Role |
|-------|------|
| `guest` | Guests without a login |
| `default` | Logged-in players without special rights |
| `vip` | Players with individual extra rights |
| `newadmin` | Entry-level moderation, e.g. kicking |
| `admin` | Full moderation including bans |
| `trustedadmin` | Additional administrative rights |
| `owner` | Almost all rights – the right choice for you as the operator |
| `superadmin` | Unrestricted rights, hard-coded into tShock |

You manage your own groups and permissions with the following commands:

| Command | Description |
|---------|-------------|
| `group list` | Show all groups |
| `group listperm <group>` | Show the permissions of a group |
| `group add <name> [permissions]` | Create a new group |
| `group del <name>` | Delete a group |
| `group addperm <group> <permission...>` | Add permissions |
| `group delperm <group> <permission...>` | Remove permissions |
| `group parent <group> <parent group>` | Inherit the permissions of another group |
| `group prefix <group> <text>` | Set a chat prefix |
| `group color <group> <R,G,B>` | Set a chat color |

:::: warning Caution
Only assign the `owner` group to people you fully trust. For moderators `newadmin` or `admin` is usually enough.
::::

:::: tip Tip
To learn how to remove players from your server as an admin, see [Kick & Ban Players](kick-ban-players.md).
::::
