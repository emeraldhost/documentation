---
slug: "upload-world"
language: "en"
title: "How to Upload a World to Your Minecraft Bedrock Edition Server"
description: "Step-by-step instructions on how to upload a world to your Minecraft Bedrock Edition server."
tags: []
date: "2025-08-26"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Upload World"
sort: 17
related: ["gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server", "gameserver/minecraft-bedrock/kick-ban-players", "gameserver/minecraft-bedrock/use-tp-command"]
---

> [!CAUTION]
> **Attention**
>
> The world files must not be an archive such as `.zip` or `.mcworld`. Unzip the world beforehand. Make sure that the folder name remains unchanged.

1. **Stop server**\
   Stop your Minecraft Bedrock Edition server.

2. **Open file browser**\
   Open your dashboard, select your server and go to the file browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP connection](/tutorials/gameserver/establish-sftp-connection).

3. **Upload world**\
   Upload your new world into the `worlds` folder.

4. **Open config**\
   Open the file `server.properties` in the main folder of your server.

5. **Find entry**\
   Look for the following entry:

    ```text
    level-name=Bedrock level
    ```

6. **Change value**\
   Change the value to the name of your uploaded world (e.g. `level-name=New World`).

7. **Save & restart**\
   Save the file and restart your server.
