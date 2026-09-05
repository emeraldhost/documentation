---
slug: "delete-world"
language: "en"
title: "How to Delete a World on Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to delete a world on your Minecraft Bedrock Edition server."
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Delete World"
sort: 7
related: ["gameserver/minecraft-bedrock/change-world-seed", "gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/disable-end", "gameserver/minecraft-bedrock/disable-locator-bar"]
---

> [!CAUTION]
> **Attention**
>
> If you delete the world, it cannot be restored. Create a backup beforehand in case you need the world again later.

1. **Stop server**\
   Stop your Minecraft Bedrock Edition server.

2. **Open file browser**\
   Open your dashboard, select your server and go to the file browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP connection](/tutorials/gameserver/establish-sftp-connection).

3. **Locate folder**\
   Find the `worlds` folder in the main directory.

4. **Delete world**\
   Delete the `Bedrock level` folder.

5. **Restart server**\
   Restart your server. A new world will then be generated automatically.
