---
slug: "import-database"
language: "en"
title: "How to Import an .sql File Into Your FiveM Server Database"
description: "Import an SQL file into your FiveM server database using phpMyAdmin"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Import Database"
sort: 5
related: ["gameserver/fivem/create-backup", "gameserver/fivem/enable-txadmin", "gameserver/fivem/join-server", "gameserver/fivem/kick-ban-players"]
---

Many FiveM frameworks and scripts ship with an `.sql` file that creates all the tables they need. You load this file into your database using **phpMyAdmin**.

> [!NOTE]
> You need an existing database for this. How to create one, read the credentials and open phpMyAdmin is explained in [Create Database](/tutorials/gameserver/create-database).

## Before you start

1. **Stop the server**\
   Stop your server via the dashboard. That way no resource writes to the database while the import is running.

2. **Review the SQL file**\
   Open the `.sql` file in a text editor and check whether it contains lines such as `CREATE DATABASE` or `USE`.

   > [!WARNING]
   > The database user from the dashboard only has permissions for its own database and is not allowed to create another one. If the file contains such lines, the import stops with a permission error. Remove those lines and import directly into your existing database.

3. **Watch out for overwritten tables**\
   Also check the file for lines containing `DROP TABLE IF EXISTS`. Existing tables with the same name are deleted along with their content during the import. Back up your data beforehand.

## Back up existing tables

If your database already holds data, export it before importing.

> [!NOTE]
> A [backup](/tutorials/gameserver/create-backup) from the dashboard covers the files of your server. Your database has to be backed up separately through phpMyAdmin.

1. **Open phpMyAdmin**\
   In the dashboard, go to **Databases** and click the **external icon** next to your database, then log in.

2. **Select the database**\
   Click your database in the left sidebar.

3. **Open the Export tab**\
   Click **Export** at the top.

4. **Download the export**\
   Leave the **Export method** on **Quick - display only the minimal options** and the **Format** on **SQL**. Click **Export** to download the file to your PC.

   > [!TIP]
   > With **Custom - display all possible options** you can pick individual tables and have the output saved directly as ZIP or GZIP under **Compression**.

## Import the SQL file

1. **Select the database**\
   In phpMyAdmin, click the database you want to import into in the left sidebar.

   > [!WARNING]
   > Make sure you select the database first. Without a selected database, phpMyAdmin does not know where the tables belong and the import fails.

2. **Open the Import tab**\
   Click **Import** at the top.

3. **Choose the file**\
   Under **File to import**, use **Browse your computer** to select your `.sql` file. The maximum file size you are allowed to upload is shown right next to that label.

4. **Check the character set**\
   Leave **Character set of the file** on `utf-8` unless your file explicitly uses a different encoding. Otherwise special characters end up broken in the database.

5. **Check the format**\
   **SQL** has to be selected under **Format**. phpMyAdmin usually detects this automatically from the file extension.

6. **Start the import**\
   Click **Import** at the bottom and wait until the page has finished loading. Do not close the browser tab in the meantime.

## Check the result

1. **Read the message**\
   After a successful import, the message "Import has been successfully finished, X queries executed." appears at the top.

2. **Verify the tables**\
   Click your database on the left and then on **Structure**. The tables from the `.sql` file should now be listed there.

3. **Start the server**\
   Start your server via the dashboard and check the console for database errors.

> [!TIP]
> For your server to actually use the new tables, the database connection has to be stored in your `server.cfg`. How to do that is explained in [Set Up Database](/tutorials/gameserver/fivem/set-up-database).

## Importing large SQL files

The upload limit on the import page is a setting of the web server phpMyAdmin runs on. You cannot change it yourself. If your file is too large or the import stops after a while, you have these options:

1. **Compress the file**\
   phpMyAdmin reads compressed files directly, and only the compressed size counts towards the upload limit. The file name has to end in `.[format].[compression]`, for example `database.sql.zip`. Which compression formats are supported is shown in the note at the top of the import page.

2. **Allow a partial import**\
   Under **Partial import**, tick **Allow the interruption of an import in case the script detects it is close to the PHP timeout limit.** phpMyAdmin then stops the import in a controlled way before the PHP time limit hits and continues from the stored position when you submit again.

   > [!WARNING]
   > phpMyAdmin itself points out that this option can break transactions. Back up your tables first.

3. **Split the file**\
   Split the `.sql` file into several smaller files and import them one after another in their original order. Make sure you do not cut a statement in half.

## Common errors

| Symptom | Cause and solution |
|---------|--------------------|
| Permission error (Access denied) | The file contains `CREATE DATABASE` or `USE`. Remove those lines and import into your existing database. |
| Error while creating a foreign key | Remove the tick from **Enable foreign key checks** under **Other options** and repeat the import. |
| The file cannot be selected or is too large | The upload limit is exceeded. See **Importing large SQL files**. |
| The import stops without a success message | Usually a timeout. See **Importing large SQL files**. |
| Table already exists | The table was imported before. Back it up and delete it before repeating the import. |
