---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your CryoFall Server"
description: "Add an admin to a CryoFall server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/cryofall/add-mods", "gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

Admins are called **operators** in CryoFall. What you enter is not a SteamID64 but the **in-game name** of the player – written exactly as it is shown in the bottom right corner of the main menu.

> [!IMPORTANT]
> The operator commands in the game only work once you already are an operator. That means you cannot grant yourself the **first** operator rank from inside the game – use the console in the dashboard or the configuration file of your server for that.

## Find your name

1. **Start CryoFall**\
   Launch CryoFall and stay in the main menu.

2. **Read your name**\
   Your account name is displayed in the bottom right corner of the main menu. Use exactly that spelling, including upper and lower case.

## Add an operator via the console

This is the quickest way and works while the server is running.

1. **Open the console**\
   Open the console of your server via the dashboard.

2. **Enter the command**\
   Enter the command **without** a leading slash and confirm with Enter:

   ```text
   opAdd YourName
   ```

   > [!WARNING]
   > **Caution**
   >
   > `opAdd` only knows players who have already joined your server at least once. If your server is brand new, connect to it once first – or add yourself directly in the configuration file.

3. **Check the result**\
   The following command lists all registered operators:

   ```text
   opList
   ```

## Add an operator via the configuration file

Alternatively you can add operators directly to the server configuration.

1. **Stop the server**\
   Stop your server via the dashboard. The lists are read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open the configuration**\
   Open the following file:

   ```text
   /Data/SettingsServer.xml
   ```

4. **Enter the names**\
   Add the names inside the `<server>` section, separated by commas:

   ```xml
   <server_operators_list>YourName,SecondName</server_operators_list>
   ```

5. **Start the server**\
   Save the file and start your server.

## Add more operators in the game

Once you are an operator yourself you can grant further rights directly in the game.

1. **Open the console**\
   Press the `~` key in the game to open the console.

2. **Enter the command**\
   In the game every command starts with `/`:

   ```text
   /opAdd PlayerName
   ```

   > [!TIP]
   > The console auto-completes commands with the Tab key, so you do not have to memorise every command.

## Moderators

Moderators can manage players – kick, ban and mute them – but do not have full operator access.

```xml
<server_moderators_list>Name1,Name2</server_moderators_list>
```

> [!NOTE]
> Operators have moderator rights automatically. There is no need to add them to the moderator list as well.

## Command overview

| Command | Description |
|---------|-------------|
| `/opAdd <playerName>` | Promote a player to operator |
| `/opList` | List all operators |
| `/opRemove <playerName>` | Revoke operator rights |
| `/moderatorAdd <playerName>` | Promote a player to moderator |
| `/moderatorList` | List all moderators |
| `/moderatorRemove <playerName>` | Revoke moderator rights |

> [!NOTE]
> **Long form of the commands**
>
> Every one of these commands also has a written-out variant, for example `/admin.operator.add` instead of `/opAdd`. Both do the same thing.

## What operators can do on top

As an operator you can open the in-game menu (`Esc` key) and use the **Edit** button to adjust things like the description, the welcome message and the game rates of your server without editing any files.

> [!WARNING]
> **Settings managed by the dashboard**
>
> Server name, description, server list, maximum players, autosave interval and the number of saved states are written from the **dashboard** into `SettingsServer.xml` on every start. If you change these values in the file or in the game they are lost on the next start – only change them in the dashboard.

> [!TIP]
> To learn how to remove players from your server as an operator or moderator, see [Kick & Ban Players](/tutorials/gameserver/cryofall/kick-ban-players).
