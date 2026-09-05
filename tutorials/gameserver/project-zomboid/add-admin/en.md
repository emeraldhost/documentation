---
slug: "add-admin"
language: "en"
title: "How to Add an Admin on Your Project Zomboid Server"
description: "Add an admin on a Project Zomboid server"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["project-zomboid"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/project-zomboid/add-mods", "gameserver/project-zomboid/add-savegame", "gameserver/project-zomboid/change-max-players", "gameserver/project-zomboid/change-server-description"]
---

## Set admin user and password

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enter admin details**\
   Enter the desired **admin username** and **admin password** in the corresponding fields.

4. **Restart the server**\
   Save the settings and restart your server.

## Log in as admin

1. **Join the server**\
   Join your server.

2. **Log in**\
   Log in with the admin username and admin password.

## Access levels

You can grant other players access via the `/setaccesslevel` command in the chat:

```text
/setaccesslevel PlayerName admin
```

| Access Level | Description |
|--------------|-------------|
| `admin` | Full access to all commands and settings |
| `moderator` | Can kick, ban and manage players |
| `overseer` | Can monitor players and manage with limited permissions |
| `gm` | Game Master with limited management rights |
| `observer` | Can observe the server but cannot make changes |
