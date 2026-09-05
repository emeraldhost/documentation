---
slug: "broadcast-message"
language: "en"
title: "How to Send a Broadcast Message on Your Palworld Server"
description: "Send a broadcast message to all players on a Palworld server"
tags: []
date: "2026-03-05"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Broadcast Message"
sort: 2
related: ["gameserver/palworld/add-admin", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

With the `/Broadcast` command you can send a message to all players on the server.

> [!NOTE]
> You need admin rights to use this command. See [Add Admin](/tutorials/gameserver/palworld/add-admin).

## Send a broadcast

1. **Open chat**\
   Press `Enter` to open the chat.

2. **Enter command**\
   Enter the following command:

   ```text
   /Broadcast <MessageText>
   ```

   Replace `<MessageText>` with the desired text.

> [!WARNING]
> **Caution**
>
> The message is cut off at the first **space** – of `Server will restart` only `Server` would be sent. Use underscores instead.

> [!TIP]
> **Example**
>
> ```text
> /Broadcast Server_restart_in_10_minutes!
> ```
