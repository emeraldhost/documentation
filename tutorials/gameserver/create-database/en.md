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
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/change-resources"]
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

A prefix of the form `s<number>_` is automatically added in front of your database name. For example, `Test` becomes `s51018_Test`.

> [!NOTE]
> The badge at the top of the page shows how many databases you can still create, e.g. "noch 3 von 3 Datenbanken möglich" (3 of 3 databases still available). If you need more, you can book additional slots – see "Expand database slots" further below.

## Use the credentials

The table on the **Datenbanken** page shows these columns for each database:

| Column | Meaning |
| --- | --- |
| **Datenbankname** (Database name) | Name of the database with the prefix `s<number>_` (e.g. `s51018_Test`), with the database ID below it |
| **Benutzername** (Username) | User for logging in to the database (e.g. `u51018_…`) |
| **Passwort** (Password) | Password of the database user – hidden, click the eye icon to reveal it |
| **Datenbank-Host** (Database host) | Address of the database server including the port, e.g. `db1.cgn1.emeraldhost.de:3306` |
| **Fernzugriff** (Remote access) | Allowed IP addresses (e.g. `%`) |
| **phpMyAdmin** | **phpMyAdmin** button, opens phpMyAdmin in the browser |

Enter the credentials in the configuration of your plugin or mod. The **Datenbank-Host** contains host and port, separated by a colon. If your configuration expects them in separate fields, enter e.g. `db1.cgn1.emeraldhost.de` as the host and `3306` as the port.

> [!NOTE]
> Many Java-based applications, for example Minecraft plugins, expect the connection details as a JDBC URL. It is made up of host, port and database name, e.g. `jdbc:mysql://db1.cgn1.emeraldhost.de:3306/s51018_Test`. Username and password usually go into separate fields.

## Manage a database

The menu (**…**) at the end of a table row offers these actions:

- **Verbindung kopieren** (Copy connection) – copies the connection details of the database so you can paste them straight into your configuration.
- **Passwort ändern** (Change password) – generates a new password for the database.
- **Löschen** (Delete) – removes the database.

> [!WARNING]
> **Löschen** removes the database including its content. Export important data via phpMyAdmin first.

### Change the password

1. **Open the menu**\
   In the row of your database, click the menu (**…**) and select **Passwort ändern**.

2. **Confirm**\
   The **Passwort ändern** dialog shows the notice "Dies generiert ein neues Passwort. Das alte Passwort funktioniert nicht mehr." (This generates a new password. The old password will no longer work.) Click **Passwort ändern** to generate the new password, or **Abbrechen** (Cancel) to leave everything unchanged.

3. **Use the new password**\
   Reveal the new password in the **Passwort** column via the eye icon and enter it everywhere the database is used.

> [!WARNING]
> After the change, the old password no longer works. Update it in every plugin, mod and tool that accesses the database – otherwise they can no longer connect.

## Expand database slots

3 databases are included by default. If they are not enough, you can book additional slots:

1. **Start the expansion**\
   On the **Datenbanken** page, click **Datenbank-Plätze erweitern** (Expand database slots). The **Ressourcen ändern** (Change resources) dialog opens.

2. **Choose the number**\
   In the **Konfiguration** (Configuration) step, use the **Datenbanken** slider to set the number you want. The available steps are 3, 4, 5, 10, 15 and 20 – 3 are included, further steps cost extra. At the bottom of the dialog you see the price change and the new **Monatlicher Preis** (Monthly price).

3. **Review and finish**\
   Go to the **Übersicht** (Overview) step, check your selection and complete the change.

You can find more about the **Ressourcen ändern** dialog in [Change resources](/tutorials/gameserver/change-resources).

## Open phpMyAdmin

1. **Open phpMyAdmin**\
   In the row of your database, click the **phpMyAdmin** button. phpMyAdmin opens directly in the browser.

2. **Manage the database**\
   In phpMyAdmin you can view and edit tables, run SQL commands and import or export data. If phpMyAdmin asks for credentials, use the **Benutzername** (Username) and **Passwort** (Password) from the table.

> [!TIP]
> If you want to back up the content of your database separately, export it as an SQL file via phpMyAdmin.
