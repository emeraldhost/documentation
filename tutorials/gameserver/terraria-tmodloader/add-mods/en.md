---
slug: "add-mods"
language: "en"
title: "How to Add Mods to Your Terraria tModLoader Server"
description: "Step-by-step instructions on how to add mods to your Terraria tModLoader server."
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/terraria-tmodloader/add-admin", "gameserver/terraria-tmodloader/add-savegame", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
  - You can find the SFTP access data in the overview of your game server.

## Steps

1. **Download Mods**\
   Search for and download the desired mods (`.tmod files`) from the official tModloader website or another trustworthy source.

   > [!WARNING]
   > Please make sure that the mods are compatible with your current server version. Otherwise your game server may no longer start.

2. **Upload and Activate**\
   Establish a connection to the server via SFTP (e.g. via FileZilla or WinSCP).
   Create a folder called "**mods**" in the Terraria server directory (usually `/home/mods`).
   Upload the downloaded mods (`.tmod files`) via SFTP to the "**mods**" folder on your server.
   Create a new file named "**enabled.json**" in the "**mods**" folder on your server.
   Copy the following text and paste it into the "**enabled.json**" file:

      enabled.json Example:

      ```text
      [
      "ModName",
      "ModName"
      ]
      ```

      Replace all entries with "**ModName**" with your mod file name (Example: If the mod file is called **Calamity** then enter this name under **ModName**.)

      > [!WARNING]
      > Make sure you add a comma to all but the last dot if you want to add another mod to include it.

3. **Start Server**\
   Go back to the dashboard and start your Terraria server.
   Connect to your server via the Terraria game and check that the mods have been loaded correctly.

4. **Enable Player Mods**\
   Make sure that all players who want to join your server have the same mods installed and activated so that they can play on the server without any problems.

That's it! With these steps, you should be able to install and use mods on your Terraria: tModloader server.
