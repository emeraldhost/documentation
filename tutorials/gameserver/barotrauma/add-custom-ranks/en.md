---
slug: "add-custom-ranks"
language: "en"
title: "How to Add Custom Ranks on Your Barotrauma Server"
description: "Add custom ranks on a Barotrauma server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Custom Ranks"
sort: 3
related: ["gameserver/barotrauma/add-admin", "gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

You can create custom permission ranks in the file `permissionpresets.xml` to assign specific permissions to players.

> [!WARNING]
> Make sure your server is stopped before editing the config file.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open permissionpresets.xml**\
   Open the file `permissionpresets.xml` at:

   ```text
   /config/permissionpresets.xml
   ```

4. **Add a custom rank**\
   Add a new `<Preset>` entry inside the `<PermissionPresets>` root element. Here is an example of a custom rank:

   ```xml
   <Preset
     name="Builder"
     description="Allowed to manage the round and use a few console commands."
     permissions="ManageRound,ConsoleCommands">
     <Command name="spawn"/>
     <Command name="teleportcharacter"/>
   </Preset>
   ```

   Adjust the following attributes to your needs:

   | Attribute | Description |
   |-----------|-------------|
   | `name` | The name of the rank |
   | `description` | The description shown for the rank |
   | `permissions` | Comma-separated list of permissions |
   | `<Command name="…"/>` | One entry per permitted console command |

   Console commands only take effect if the rank also has the `ConsoleCommands` permission.

5. **Start the server**\
   Save the file and start your server.

> [!TIP]
> You can then assign the new rank to a player in `clientpermissions.xml` by using `preset="Builder"`.

> [!NOTE]
> Available permissions include: `ManageRound`, `Kick`, `Ban`, `Unban`, `SelectSub`, `SelectMode`, `ManageCampaign`, `ConsoleCommands`, `ServerLog`, `ManageSettings`, `ManagePermissions`, `ManageMoney` and `All`.

> [!NOTE]
> Barotrauma ships a second file, `permissionpresets_player.xml`, for your own presets. Ranks placed there survive a game update, while `permissionpresets.xml` can be overwritten by one.
