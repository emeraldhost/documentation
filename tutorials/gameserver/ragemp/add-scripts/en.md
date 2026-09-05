---
slug: "add-scripts"
language: "en"
title: "How to Add Scripts to Your RAGE:MP Server"
description: "Add scripts to a RAGE:MP server"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "gameserver"
product_keys: ["ragemp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add scripts"
sort: 1
related: ["gameserver/ragemp/create-backup", "gameserver/ragemp/join-server"]
---

You can install server-side and client-side scripts on your RAGE:MP server.

## Folder structure

RAGE:MP uses two folders for scripts:

| Folder | Description |
|--------|-------------|
| `packages/` | Server-side scripts (logic, database, authentication) |
| `client_packages/` | Client-side scripts (UI, rendering, inputs) |

## Add scripts

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Upload scripts**\
   Upload the scripts to the appropriate folder:

   - **Server-side scripts** go into the `packages/` folder
   - **Client-side scripts** go into the `client_packages/` folder

   > [!NOTE]
   > **Example**
   >
   > ```text
   > /
   > ├── packages/
   > │   └── my-gamemode/
   > │       └── index.js
   > └── client_packages/
   >     └── index.js
   > ```

4. **Start the server**\
   Start your server.

> [!NOTE]
> Server-side scripts are placed in their own subfolder within `packages/`. Each subfolder needs an `index.js` file as entry point.

> [!WARNING]
> Client-side scripts are automatically downloaded by all players joining the server. Make sure not to store any sensitive data in `client_packages/`.
