---
slug: "delete-world"
language: "en"
title: "How to Delete a World on a Minecraft Java Edition Server"
description: "Delete a world on a Minecraft Java Edition server"
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Delete World"
sort: 13
related: ["gameserver/minecraft/upload-world", "gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup", "gameserver/minecraft/disable-nether"]
---

> [!CAUTION]
> **Attention**
>
> If you delete the world, it cannot be restored. Create a [backup](/tutorials/gameserver/create-backup) beforehand in case you need the world again later.

The **Welten** (Worlds) page in your dashboard lists all worlds on your server. There you can create a new world and delete old ones.

## Create a new world

If you simply want to start over with a fresh world, create a new world first. The old world is kept until you delete it.

1. **Open Welten**\
   Open your server in the dashboard and select **Welten** (Worlds) in the sidebar.

2. **Start a new world**\
   Click **Neue Welt** (New world). The **Neue Welt anlegen** (Create new world) dialog opens. Minecraft generates the world itself on startup, you only give it a name.

3. **Enter a name**\
   Enter a name under **Name**. Letters, digits, `.`, `_` and `-` are allowed, with a maximum of 32 characters. The name becomes the folder name of the world.

4. **Set a seed (optional)**\
   Enter a seed under **Seed** if you want to generate a specific world. It is written as `level-seed` into `server.properties`. You can find more options via **Weitere Optionen im Config-Editor** (More options in the Config-Editor).

5. **Set as default**\
   Enable **Danach als Standard festlegen** (Set as default afterwards). The server then generates the new world on the next start and loads it from then on.

6. **Create the world**\
   Click **Welt anlegen** (Create world) and restart your server.

## Delete a world via the Welten page

1. **Open Welten**\
   Select **Welten** (Worlds) in the sidebar.

2. **Delete the world**\
   In the row of the world you want to remove, choose the delete option and confirm.

> [!NOTE]
> The Nether and the End belong to the world and are deleted together with it.

> [!TIP]
> Which world the server currently loads is set in `server.properties` under `level-name`. Only delete worlds the server no longer uses, or set a new world as default first.

## Alternative: delete the world via SFTP

1. **Stop the server**\
   Stop your Minecraft Java Edition server.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete the world folder**\
   In the main folder, locate the folder of the world set in `server.properties` under `level-name` (by default `world`) and delete it. On Paper or Spigot servers, the Nether and the End are stored in separate folders – also delete `<name>_nether` and `<name>_the_end` there.

4. **Start the server**\
   Start your server again. A new world will then be generated automatically.
