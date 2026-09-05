---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your Palworld Server"
description: "Add an admin on a Palworld server"
tags: []
date: "2026-02-28"
visibility: "public"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/palworld/broadcast-message", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

You can grant admin rights to yourself and other players using an Admin Password.

## Set Admin Password

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set Admin Password**\
   Enter the desired Admin Password and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

> [!WARNING]
> Do not set the Admin Password directly in the `PalWorldSettings.ini`, as it will be overwritten by the dashboard on the next server start.

## Log in as admin

1. **Join the server**\
   Join your server.

2. **Open chat**\
   Press `Enter` to open the chat.

3. **Admin login**\
   Enter the following command:

   ```text
   /AdminPassword YourAdminPassword
   ```

> [!NOTE]
> The admin login only lasts for the current session. After reconnecting you need to enter the command again.

> [!TIP]
> Only share the Admin Password with trusted players. Anyone with the password can grant themselves admin rights.
