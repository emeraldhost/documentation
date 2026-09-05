---
slug: "add-admins"
language: "en"
title: "How to Add Admins to Your Insurgency: Sandstorm Server"
description: "Add admins to an Insurgency: Sandstorm server"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admins"
sort: 1
related: ["gameserver/insurgency-sandstorm/add-bots", "gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters"]
---

Admins are set via the `Admins.txt` file by adding each player's **SteamID64**. An admin can then open the admin menu in-game (bound by default to the **Minus** key on the numpad).

## Add an admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Create the folder**\
   Go to the folder `Insurgency/Config/Server/`. If the `Config` and `Server` folders do not exist yet, create them.

4. **Create Admins.txt**\
   In this folder, create the file `Admins.txt` (if it does not already exist).

5. **Enter the SteamID64**\
   Enter the [SteamID64](/tutorials/gameserver/steamid64-find-out) of each admin – **one ID per line**:

   ```text
   76561198000000000
   76561198000000001
   ```

6. **Start the server**\
   Save the file and start your server. Changes only take effect after a restart (or map change).

> [!TIP]
> You can create multiple admin lists with different names and choose which one loads via the launch parameter `-AdminList=FileName` (file name without `.txt`). This lets you switch quickly between different admin teams, for example.

> [!NOTE]
> Make sure the file is named exactly `Admins.txt` (not `Admins.txt.txt` – Windows hides known file extensions by default).
