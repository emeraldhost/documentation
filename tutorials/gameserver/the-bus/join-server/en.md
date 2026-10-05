---
slug: "join-server"
language: "en"
title: "How to Join Your The Bus Server"
description: "Join a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 16
related: ["gameserver/the-bus/add-mods", "gameserver/the-bus/add-savegame", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages"]
---

The easiest way to connect is via the **server GUID**. Your server shows this ID in the console after every start. Alternatively, you can find your server in the public server list in the game.

> [!WARNING]
> Multiplayer in The Bus is only available on PC. Players on PlayStation 5 or Xbox Series X|S cannot join your server.

## Join via the Server GUID

1. **Copy the server GUID**\
   Open the dashboard of your server and switch to the **Console**. After the start, a line like this appears there:

   ```text
   Server can be reached with the GUID: "ABCDEF1234567890"
   ```

   Copy the ID between the quotation marks.

   > [!NOTE]
   > The ID above is only an example. Always use the GUID shown in the console of your server.

2. **Launch The Bus**\
   Launch The Bus and open the **Multiplayer** menu.

3. **Add server**\
   Open the window for adding a server and paste the copied GUID there.

4. **Connect**\
   Connect to the server. If a server password is set, enter it when joining.

> [!TIP]
> If the GUID does not work, restart your server once and copy the GUID from the console again. In older versions, a wrong GUID was shown on the first start – this bug was fixed in version 1.1. Also always keep your game up to date. You can find more solutions under [Troubleshoot Server](/tutorials/gameserver/the-bus/troubleshoot-server).

## Join via the Server List

You can also find your server by its name in the public server list in the **Multiplayer** menu. For it to appear there, it must be shown in the server list:

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enable the server list**\
   Set the **Server List** field to `1`. With `0`, your server is not shown in the public list.

4. **Save and restart**\
   Save the setting and restart your server.

5. **Find the server in the list**\
   Launch The Bus, open the **Multiplayer** menu and search for your server by its name. If a server password is set, enter it when joining.

> [!NOTE]
> You set the name of your server in the **Settings** in the **Server Name** field. You can find more information under [Configure Server](/tutorials/gameserver/the-bus/configure-server).
