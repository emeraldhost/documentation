---
slug: "create-database"
language: "en"
title: "How to Create a Database and Access phpMyAdmin"
description: "Create a database and access phpMyAdmin"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Database"
sort: 2
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

You can create your own MySQL databases for your game server, for example for plugins, mods or web interfaces. Through phpMyAdmin you can then conveniently manage your database in the browser.

## Create a database

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open databases**\
   In the left sidebar, click on **Databases**.

3. **Create new database**\
   Click the **plus icon** in the top right to create a new database.

4. **Set a name**\
   Enter a name for your database (e.g. `test`) and click **Create Database**.

   > [!NOTE]
   > In the **Connections From** field you can optionally restrict which IPs are allowed to connect to the database. Leave the field empty or set to `%` to allow connections from anywhere.

## Show connection details

Click the **eye icon** next to your database to view all connection details:

- **Database Host** (e.g. `db1.cgn1.emeraldhost.de`)
- **Database Port** (default: `3306`)
- **Database Username**
- **Database Password**
- **Database Name**
- **JDBC Connection String**

> [!NOTE]
> The **JDBC Connection String** bundles all connection details in a single line and is used by Java-based applications (e.g. many Minecraft plugins) for direct connection.

Use the **Generate New Password** button to create a new password for the database at any time.

## Open phpMyAdmin

1. **Open phpMyAdmin**\
   Click the **external icon** (arrow pointing outward) next to your database. You will be redirected to the phpMyAdmin login page.

2. **Enter credentials**\
   Enter the **Database Username** and **Database Password** and click **Log in**. You can find the credentials via the eye icon next to your database.

## Delete a database

Click the **trash icon** next to your database to delete the database along with all its content.

> [!WARNING]
> Deleting a database cannot be undone. All stored data will be lost. If needed, create a backup via phpMyAdmin beforehand.
