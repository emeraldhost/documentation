---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Avorion Server"
description: "Add an admin to an Avorion server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/avorion/add-mods", "gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

Administrators on an Avorion server are defined by their **SteamID64** – a 17-digit number starting with `7656`. You have three ways to do this: the dashboard, the file `admin.xml` or a command during operation.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Via the dashboard

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **settings**.

2. **Enter the SteamID64**\
   Enter the SteamID64 of the person you want in the **Admin ID** field. The field takes a single SteamID64 and has to be filled in for your server to start.

3. **Restart the server**\
   Save the change and restart your server. The admin rights only take effect after a restart.

> [!NOTE]
> **Several admins**
>
> Via the dashboard you define exactly one admin. If you want to make further people admins, use the next section and enter them directly in the `admin.xml`.

## Via the admin.xml

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) or use the file browser in the dashboard.

3. **Open admin.xml**\
   Navigate to the folder of your galaxy – where `server.ini` and `modconfig.lua` are located as well – and open the file:

   ```text
   /galaxy/<galaxy name>/admin.xml
   ```

   > [!NOTE]
   > If the file does not exist yet, start your server once so the folder structure is created, then stop it again.

4. **Add the admins**\
   Add one line per admin with the player name and the SteamID64:

   ```xml
   <administrators>
       <admin name="PlayerName" id="76561198012345678"/>
       <admin name="SecondAdmin" id="76561198087654321"/>
   </administrators>
   ```

5. **Start the server**\
   Save the file and start your server.

## During operation

You can also grant admin rights without a restart – either through the console in the dashboard or in the in-game chat with a leading `/`:

```text
/admin -a --name <player name> --id <SteamID64>
```

Remove admin rights again:

```text
/admin -r --name <player name> --id <SteamID64>
```

> [!NOTE]
> The player has to have been connected to your server at least once before they can be added this way.

> [!WARNING]
> Admin rights include kicking and banning players as well as stopping the server. Only grant them to people you trust.

> [!TIP]
> To learn which commands are available to you as an admin and how to remove players, see [Kick & Ban Players](/tutorials/gameserver/avorion/kick-ban-players).
