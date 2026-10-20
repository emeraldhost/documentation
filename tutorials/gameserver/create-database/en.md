---
slug: "create-database"
language: "en"
title: "How to Create a Database and Access phpMyAdmin"
description: "Create a MySQL database for your game server and manage it with phpMyAdmin"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Create Database"
sort: 2
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/steamid64-find-out"]
---

You can create your own MySQL databases for your game server, for example for plugins, mods or web interfaces. You copy credentials such as host, port and user directly from the dashboard, and phpMyAdmin lets you manage your database conveniently in the browser.

## Create a database

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open databases**\
   In the left sidebar, click **Datenbanken** (Databases).

3. **Create a new database**\
   Click **Datenbank erstellen** (Create database). The **Datenbank erstellen** dialog opens.

4. **Enter the database name**\
   Enter a name for your database in the required **Datenbankname** (Database name) field, e.g. `plugins`. The name can be at most 48 characters long.

5. **Set remote access**\
   In the **Fernzugriff** (Remote access) field you define from which IP addresses connections to the database are allowed. The default is `%` – this allows connections from any IP address.

6. **Create**\
   Click **Datenbank erstellen**. The new database then appears in the table.

> [!NOTE]
> The badge at the top of the page shows how many databases you can still create, e.g. "noch 3 von 3 Datenbanken möglich" (3 of 3 databases still available). If you need more, you can book additional slots via **Datenbank-Plätze erweitern** (Expand database slots).

## Use the credentials

The table on the **Datenbanken** page shows these columns for each database:

| Column | Meaning |
| --- | --- |
| **Datenbankname** (Database name) | Name of the database |
| **Benutzername** (Username) | User for logging in to the database |
| **Passwort** (Password) | Password of the database user |
| **Datenbank-Host** (Database host) | Address of the database server |
| **Fernzugriff** (Remote access) | Allowed IP addresses (e.g. `%`) |
| **phpMyAdmin** | Opens phpMyAdmin in the browser |

You can copy the credentials directly from the table and enter them in the configuration of your plugin or mod. Use the port shown in the dashboard (MySQL's general default is `3306`).

On the **Datenbanken** page you can also rotate the password of a database at any time, i.e. replace it with a new one.

> [!WARNING]
> After rotating the password, you have to update it everywhere the database is used. Otherwise your plugins or mods can no longer connect.

> [!NOTE]
> Many Java-based applications, for example Minecraft plugins, expect the connection details as a JDBC URL. It is made up of host, port and database name, e.g. `jdbc:mysql://<host>:<port>/<database name>`. Username and password usually go into separate fields.

## Open phpMyAdmin

1. **Open phpMyAdmin**\
   In the row of your database, click the entry in the **phpMyAdmin** column. phpMyAdmin opens directly in the browser.

2. **Manage the database**\
   In phpMyAdmin you can view and edit tables, run SQL commands and import or export data. If phpMyAdmin asks for credentials, use the **Benutzername** (Username) and **Passwort** (Password) from the table.

> [!TIP]
> If you want to back up the content of your database separately, export it as an SQL file via phpMyAdmin.
