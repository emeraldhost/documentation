---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your PixARK Server"
description: "Add a savegame to a PixARK server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 3
related: ["gameserver/pixark/add-admin", "gameserver/pixark/add-mods", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

The complete save of a PixARK server lives in the `Saved` folder. To transfer a save, you download this folder from one server and upload it to your server.

> [!IMPORTANT]
> This guide transfers a save **from one server to another server**. For PixARK there is no documented way to move a single player save from your own PC to a dedicated server. Do not attempt it blindly – only work with saves that originate from a server.

## Check first

A foreign save only loads if it matches the configuration of your server:

| Requirement | Explanation |
|-------------|-------------|
| Same map | The save has to come from the same map your server starts. If your server starts a different map, the save will not be loaded. |
| Same world name | PixARK stores the world under the world name defined at server start. If the save comes from a provider that used a different world name, your server will not find it and generates a new world instead. |

> [!WARNING]
> **Caution**
>
> If your server starts with a freshly generated world instead of your save after uploading, one of these two requirements is not met. In that case do not keep playing – stop the server right away, otherwise you overwrite the uploaded save.

## Upload the savegame

1. **Create a backup**\
   Create a [backup](/tutorials/gameserver/pixark/create-backup) of your server or download the existing state: [Download Savegame](/tutorials/gameserver/pixark/download-savegame). That way you can always go back.

2. **Stop the server**\
   Stop your server via the dashboard. While the server is running it constantly writes to the save and will overwrite your files.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the directory**\
   Navigate to the following directory:

   ```text
   /ShooterGame/
   ```

5. **Move the old save aside**\
   Rename the existing `Saved` folder, for example to `Saved_old`. This way no leftovers of the old state remain that could mix with the new one – and you can go back if needed.

6. **Upload the savegame**\
   Upload the `Saved` folder of the other server so that it ends up at the following path again:

   ```text
   /ShooterGame/Saved/
   ```

7. **Start the server**\
   Start your server. The new save is now loaded.

> [!TIP]
> **Keep your own settings**
>
> The `Saved` folder also contains the subfolder `Config/WindowsServer/` with the configuration files. If you only want to take over the world and players but keep your own server settings, copy the `Config` folder from your old `Saved` folder back after uploading.

> [!NOTE]
> Once the server runs with the new save and everything works, you can delete the renamed `Saved_old` folder. Download it to your PC beforehand if you want to keep it.
