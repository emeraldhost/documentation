---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Terraria tShock Server"
description: "Add an admin to a Terraria tShock server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

tShock manages permissions through **accounts and groups**. An admin is therefore not an entry in a file but a user account consisting of a user name and a password that belongs to a group with far-reaching permissions. You do not need a SteamID or any other player ID for this.

> [!NOTE]
> The accounts are stored in the database `/tshock/tshock.sqlite`. Passwords are stored encrypted there and cannot be read back – a forgotten password is reset through the server console.

## Create an admin via the server console

This is the fastest way because it requires neither a setup code nor an existing account. The server console always has the highest permissions on a tShock server.

1. **Start the server**\
   Start your server via the dashboard.

2. **Open the console**\
   Open the server console in the dashboard.

3. **Create the account**\
   Enter the following command:

   ```text
   user add <username> <password> owner
   ```

   Replace `<username>` and `<password>` with your own values and keep `owner` as the group.

   > [!NOTE]
   > In the server console you enter commands **without** a leading forward slash. In the in-game chat you always need it, so `/user add ...`.

4. **Join the server**\
   Join your server: [Join server](/tutorials/gameserver/terraria-tshock/join-server).

5. **Log in**\
   Log in through the in-game chat:

   ```text
   /login <username> <password>
   ```

   You now have admin rights and can use all commands of your group.

   > [!WARNING]
   > **Turn off the setup code**
   >
   > If tShock printed a setup code on startup, that code stays valid until the next server start – even if you created your account through the console. So after logging in, enter `/setup` once in the in-game chat. This disables the setup system immediately and deletes the code.

## Create an admin via the setup code

Alternatively you can use the setup assistant that tShock provides on the first start.

1. **Read the setup code**\
   Open the server console in the dashboard. On startup you will find a message like this:

   ```text
   To setup the server, join the game and type /setup <code>
   ```

   > [!TIP]
   > The code is also stored in the file `/tshock/setup-code.txt`, which you can open via [SFTP](/tutorials/gameserver/establish-sftp-connection).

2. **Enter the setup command**\
   Join your server and enter the following in the in-game chat:

   ```text
   /setup <code>
   ```

   > [!WARNING]
   > **Caution**
   >
   > This command only works in the game, not in the server console.

3. **Create the account**\
   Now create your account:

   ```text
   /user add <username> <password> owner
   ```

4. **Log in**\
   Log in with your new account:

   ```text
   /login <username> <password>
   ```

5. **Finish the setup**\
   Finally, enter once more:

   ```text
   /setup
   ```

   This permanently disables the setup system and deletes the setup code.

   > [!IMPORTANT]
   > Always finish the setup. As long as the setup system is active, anyone who knows the code can grant themselves full permissions on your server.

## Manage accounts

All commands work in the in-game chat (with `/`) and in the server console (without `/`).

| Command | Description |
|---------|-------------|
| `user add <user> <password> <group>` | Create a new account |
| `user del <user>` | Delete an account |
| `user password <user> <new password>` | Change the password |
| `user group <user> <new group>` | Move an account to another group |

> [!NOTE]
> By default passwords have to be at least four characters long. This value is controlled by `MinimumPasswordLength` in the file `/tshock/config.json`.

> [!TIP]
> **Automatic login**
>
> After your first login tShock remembers the device identifier of your client and logs you in automatically whenever you join the server. This behaviour is controlled by the value `DisableUUIDLogin` in the file `/tshock/config.json`.

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

> [!WARNING]
> **Caution**
>
> Only assign the `owner` group to people you fully trust. For moderators `newadmin` or `admin` is usually enough.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/terraria-tshock/kick-ban-players).
