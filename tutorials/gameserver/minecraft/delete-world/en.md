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
> If you delete or reset the world, it cannot be restored. Create a [backup](/tutorials/gameserver/create-backup) beforehand in case you need the world again later.

The **Worlds** page in your dashboard lists all worlds on your server. Via the menu (…) in the row of a world you can choose **Rename**, **Download**, **Reset** and **Delete**. There you can also create a new world.

## Reset the world

If you want to start over with a fresh world under the same name, reset the world. It is deleted and Minecraft creates a new world with the seed from `server.properties` on the next start.

1. **Open Worlds**\
   Open your server in the dashboard and select **Worlds** in the sidebar.

2. **Choose Reset**\
   Open the menu (…) in the row of the world and choose **Reset**. The **Reset world** dialog opens. It shows a summary of the world that is deleted and its size.

3. **Create a backup first**\
   Leave **Create a backup first** enabled. Your whole server is then saved before the world is reset.

4. **Start the server afterwards**\
   Leave **Start the server again afterwards** enabled if the server should start right after the reset.

5. **Reset the world**\
   Click **Stop, reset and start**. The server is stopped, a backup is created if the backup switch is on, then the world is deleted and the server is started again. Minecraft then creates the new world and loads it.

> [!WARNING]
> Everything in this world is lost – buildings, inventories and the progress of all players. Without a backup it cannot be brought back.

> [!TIP]
> Want a different world with a new seed? Change the seed first, see [Change the world seed](/tutorials/gameserver/minecraft/change-world-seed), and then reset the world.

## Create a new world

If you want to keep the old world, create a new world instead. The old world is kept until you delete it.

1. **Open Worlds**\
   Select **Worlds** in the sidebar.

2. **Start a new world**\
   Click **New world**. The **Create new world** dialog opens. Minecraft creates the world itself on start, you only give it a name.

3. **Enter a name**\
   Enter a name under **Name**. Letters, digits, `_` and `-` are allowed, with a maximum of 32 characters. The name becomes the folder name of the world.

4. **Set a seed (optional)**\
   Enter a seed under **Seed** if you want to generate a specific world. It is written as `level-seed` into `server.properties`. You can find more options via **More options in the config editor**.

5. **Set as standard**\
   Enable **Set as standard afterwards**. The server is then stopped, the new world is set as standard and the server is started again. Minecraft creates the world on that start.

6. **Create the world**\
   Confirm the dialog. The new world then appears on the **Worlds** page.

## Delete a world via the Worlds page

1. **Open Worlds**\
   Select **Worlds** in the sidebar.

2. **Choose Delete**\
   Open the menu (…) in the row of the world you want to remove and choose **Delete**.

3. **Confirm**\
   Confirm the deletion.

> [!IMPORTANT]
> You cannot delete your standard world, the world the server currently loads. **Delete** is disabled for it until you set another world as standard, for example with **Set as standard afterwards** when creating a new world. To start over with the standard world, use **Reset** instead.

> [!NOTE]
> The Nether and the End belong to their world and are deleted together with it.

## Alternative: delete the world via SFTP

1. **Stop the server**\
   Stop your Minecraft Java Edition server.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete the world folder**\
   In the main folder, locate the folder of the world set in `server.properties` under `level-name` (by default `world`) and delete it. On Paper or Spigot servers, the Nether and the End are stored in separate folders – also delete `<name>_nether` and `<name>_the_end` there.

4. **Start the server**\
   Start your server again. A new world will then be generated automatically.
