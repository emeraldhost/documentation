---
slug: "add-savegame"
language: "en"
title: "How to Add a Savegame to Your Enshrouded Server"
description: "Step-by-step instructions on how to add a savegame to your Enshrouded server."
tags: []
date: "2024-03-05"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Savegame"
sort: 2
related: ["gameserver/enshrouded/add-admin", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
  - You can find the SFTP access data in the overview of your game server.

## Steps

1. **Open SFTP Client**\
   On the left you see your local files, on the right the files of your server.

2. **Prepare Files**\
   Locate your Enshrouded game save files on your computer. These are typically located in the Steam `userdata` folder under: `C:\Program Files (x86)\Steam\userdata\[YourSteamID]\1203620\remote`.
   Replace `[YourSteamID]` with your SteamID64.
   Identify the files representative of your world, usually named like `3bd85c7d` and `3bd85c7d_info`.

3. **Rename Files**\
   Rename the files for compatibility with your server. `3bd85c7d` should be renamed to `3ad85aea` and `3bd85c7d_info` should be renamed to `3ad85aea_info`.

4. **Stop Server**\
   Stop your server via the dashboard to prevent the server from automatically overwriting your upload.

5. **Navigate to Folder**\
   Navigate to the save folder `savegame`.
   If you have changed the default folder, navigate to the folder you selected for the saves.

6. **Upload Files**\
   Transfer the renamed files (`3ad85aea` and `3ad85aea_info`) from your computer to the server's save directory, replacing existing files if necessary.

7. **Restart Server**\
   Restart your Enshrouded server. Your server should now load your world so that you can continue your adventure where you left off. All progress will be saved and can now be shared with friends or the community.

Now you can continue your Enshrouded adventure on the server! With these steps you should be able to successfully transfer your Enshrouded savegame to the server.
