---
slug: "upload-world"
language: "en"
title: "How to Upload a World on a Minecraft Java Edition Server"
description: "Upload a world to a Minecraft Java Edition server"
tags: []
date: "2025-08-18"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Upload World"
sort: 27
related: ["gameserver/minecraft/delete-world", "gameserver/minecraft/create-backup", "gameserver/minecraft/join-server", "gameserver/minecraft/link-java-with-bedrock"]
---

The easiest way to upload a world is the **Worlds** page in your dashboard. For very large worlds over 2 GB, use SFTP instead.

## Prepare the world

A Minecraft world is a folder that contains a `level.dat` file. Only folders with a `level.dat` count as a world.

You can find singleplayer worlds on your PC in the `.minecraft/saves` folder. Each subfolder there is a separate world.

## Upload the world via the Worlds page

1. **Pack the world**\
   On your PC, pack the world folder with the `level.dat` as `.zip` or `.tar.gz`. A single file may be at most 2 GB.

2. **Open Worlds**\
   Open your server in the dashboard and select **Worlds** in the sidebar. It lists all worlds on your server.

3. **Start the upload**\
   Click **Upload**. The **Upload world** dialog opens. Existing worlds are kept until you decide otherwise.

4. **Select the file**\
   Click **Choose file** or drop the file into the dialog, then confirm with **Upload**.

5. **Set the world as standard**\
   Which world the server loads is set in `server.properties` under `level-name`. On the **Worlds** page, click **Show in the config editor**. There, set the value of the setting with the key `level-name` to the name of the uploaded world, e.g. `NewWorld`.

6. **Restart the server**\
   Save the change and restart the server. The server then loads the new world.

> [!NOTE]
> The Nether and the End belong to the world. They are renamed, downloaded and deleted together with it.

## Rename the uploaded world

If your uploaded world has an unwanted name, you can rename it on the **Worlds** page.

1. **Choose Rename**\
   Open the menu (…) in the row of the world and choose **Rename**. The **Rename world** dialog opens.

2. **Enter a new name**\
   Enter the name under **New name**. Letters, digits, `.`, `_` and `-` are allowed, with a maximum of 32 characters.

3. **Start the server afterwards**\
   Leave **Start the server again afterwards** enabled. The server is stopped briefly for the rename and started again afterwards.

4. **Rename the world**\
   Click **Stop, rename and start**. The server is stopped, the world is renamed and the server is started again.

> [!TIP]
> If you rename your standard world, the new name is also written as `level-name` into `server.properties`, so the server keeps loading it.

## Alternative: upload the world via SFTP

If your world is larger than 2 GB, upload it via SFTP.

> [!CAUTION]
> **Attention**
>
> Via SFTP, the world must not be an archive such as `.zip`. Unzip the world first.

1. **Stop the server**\
   Stop your Minecraft Java Edition server.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload the world folder**\
   Upload your new world in the main folder, which also contains the `world` folder.

4. **Open server.properties**\
   Open the file `server.properties` and look for the following entry:

   ```text
   level-name=world
   ```

5. **Change the value**\
   Change the value to the name of your uploaded world (e.g. `level-name=NewWorld`).

6. **Start the server**\
   Save the changes and start the server again.

> [!TIP]
> You can also run several worlds in parallel on your server, e.g. with plugins such as [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
