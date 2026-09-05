---
slug: "change-motd"
language: "en"
title: "How to Change the MOTD on a Minecraft Java Edition Server"
description: "Change MOTD on a Minecraft Java Edition server"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change MOTD"
sort: 3
related: ["gameserver/minecraft/accept-minecraft-eula", "gameserver/minecraft/change-modpack", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance"]
---

The MOTD (Message of the Day) of a Minecraft server is a message that is displayed on the multiplayer server when you try to connect. It is used to provide players with information about the server, such as the server name, rules, welcome messages or even links to resources.

## How do I change the MOTD?

1. **Open server.properties**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the file `server.properties`.

2. **Find the entry**\
   Search for the following entry:

   ```text
   motd=Your message here.
   ```

3. **Change the MOTD**\
   Change the value to your desired message. For example:

   ```text
   motd=Welcome to our server!
   ```

4. **Restart the server**\
   Save the changes and restart the server.
