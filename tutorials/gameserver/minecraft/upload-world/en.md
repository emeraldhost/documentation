---
slug: "upload-world"
language: "en"
title: "How to Upload a World on a Minecraft Java Edition Server"
description: "Upload a world to a Minecraft Java Edition server"
tags: []
date: "2025-08-18"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Upload World"
sort: 27
related: ["gameserver/minecraft/join-server", "gameserver/minecraft/kick-ban-players", "gameserver/minecraft/use-tp-command", "gameserver/minecraft/link-java-with-bedrock"]
---

> [!CAUTION]
> **Attention**
>
> The world files must not be an archive such as `.zip`. Unzip the world first.

1. **Stop the server**\
   Stop your Minecraft Java Edition server.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the world**\
   Upload your new world in the main folder, which also contains the `world` folder.

4. **Open server.properties**\
   Open the file `server.properties` and look for the following entry:

   ```text
   level-name=world
   ```

5. **Change the value**\
   Change the value to the name of your uploaded world (e.g. `level-name=NewWorld`).

6. **Restart the server**\
   Save the changes and restart the server.

> [!TIP]
> You can also run several worlds in parallel on your server, e.g. with plugins such as [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
