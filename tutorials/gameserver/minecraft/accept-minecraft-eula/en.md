---
slug: "accept-minecraft-eula"
language: "en"
title: "How to Accept the Minecraft EULA on Your Minecraft Java Edition Server"
description: "Step-by-step instructions on how to accept the Minecraft EULA on your Minecraft Java Edition server."
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Accept Minecraft EULA"
sort: 1
related: ["gameserver/minecraft/change-modpack", "gameserver/minecraft/change-motd", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance"]
---

## Requirements

- Access to the server folder (either via an SFTP connection or direct access to the server files)
  - You can find the SFTP access data in the overview of your game server.

## Steps

1. **Locate EULA File**\
   Look for the `eula.txt` file in the main directory of the Minecraft server. If the file is not there, start the server once so it is created automatically.

2. **Open EULA File**\
   Open the `eula.txt` file with a text editor like Notepad or Notepad++.

3. **Change EULA Value**\
   Search for the line `eula=false`.
   Change this to `eula=true` to accept the [Minecraft EULA](https://www.minecraft.net/eula).

4. **Save Changes**\
   Save the file and close the editor.

5. **Restart Server**\
   After saving the EULA change.
