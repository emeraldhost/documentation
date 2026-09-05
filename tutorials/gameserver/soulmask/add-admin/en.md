---
slug: "add-admin"
language: "en"
title: "How to Become an Admin on Your Soulmask Server"
description: "Add an admin to a Soulmask server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/soulmask/add-mods", "gameserver/soulmask/add-savegame", "gameserver/soulmask/change-map", "gameserver/soulmask/change-max-players"]
---

You can grant yourself admin rights ingame using the admin password.

## Prerequisites

Before you can become an admin, an admin password must be set on the server. Follow the guide [Set Admin Password](/tutorials/gameserver/soulmask/set-admin-password) to configure one.

## Log in as admin

1. **Join the server**\
   Join your Soulmask server.

2. **Open console**\
   Press `~` to open the ingame console.

3. **Enter command**\
   Enter the following command to grant yourself admin rights:

   ```text
   gm key YourAdminPassword
   ```

   Replace `YourAdminPassword` with the admin password you set on the server.

> [!NOTE]
> Admin rights are session-based. After disconnecting from the server, you need to enter the command again when you rejoin.
