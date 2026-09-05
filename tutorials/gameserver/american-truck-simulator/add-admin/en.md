---
slug: "add-admin"
language: "en"
title: "How to Add Admins to Your American Truck Simulator Server"
description: "Step-by-step instructions on how to add admins to your American Truck Simulator server."
tags: []
date: "2025-07-27"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["american-truck-simulator"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/american-truck-simulator/add-mods", "gameserver/american-truck-simulator/create-backup", "gameserver/american-truck-simulator/deactivate-player-damage", "gameserver/american-truck-simulator/join-server"]
---

## Requirements

- Access to the server folder (either via an SFTP connection or direct access to the server files)
  - You can find the SFTP access data in the overview of your game server.
- Steam64_ID of the users to be added as admins
- Text editor (such as Notepad, Notepad++, Windows Editor or Visual Studio Code)

## Steps

1. **Locate Config File**\
   Establish an SFTP connection to your server.
   Navigate to the path "`.local/share/American Truck Simulator`".

2. **Edit Config File**\
   Search for the file named "`server_config.sii`".
   Open this file in a text editor.

3. **Add New Admins**\
   Search for the line starting with "`moderator_list:`".
   Change the number in the line "`moderator_list:`" to match the number of admins.
   Add the Steam64\_IDs of the users you want to add as admin. Each Steam64\_ID should be on a new line and look like this: "`moderator_list[X]:  Steam64_ID`". X stands for the corresponding position in the list.

      An example could look like this:

      ```text
      moderator_list: 3
      moderator_list[0]: Steam64_ID
      moderator_list[1]: Steam64_ID
      moderator_list[2]: Steam64_ID
      ```

4. **Save and Restart**\
   Save the changes to the configuration file and close the text editor.
   Restart the server via the dashboard.

That was it! With these steps you should be able to add new admins to your American Truck Simulator server. Have fun playing.
