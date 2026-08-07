---
description: Import an SQL file into your FiveM server database using phpMyAdmin
---

# How to Import an .sql File Into Your FiveM Server Database

Many FiveM frameworks and scripts ship with an `.sql` file that creates all the tables they need. You load this file into your database using **phpMyAdmin**.

:::: info Note
You need an existing database for this. How to create one, read the credentials and open phpMyAdmin is explained in [Create Database](../create-database.md).
::::

## Before you start

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. That way no resource writes to the database while the import is running.

2. <b>Review the SQL file</b><br>
   Open the `.sql` file in a text editor and check whether it contains lines such as `CREATE DATABASE` or `USE`.

   :::: warning Warning
   The database user from the dashboard only has permissions for its own database and is not allowed to create another one. If the file contains such lines, the import stops with a permission error. Remove those lines and import directly into your existing database.
   ::::

3. <b>Watch out for overwritten tables</b><br>
   Also check the file for lines containing `DROP TABLE IF EXISTS`. Existing tables with the same name are deleted along with their content during the import. Back up your data beforehand.

## Back up existing tables

If your database already holds data, export it before importing.

:::: info Note
A [backup](../create-backup.md) from the dashboard covers the files of your server. Your database has to be backed up separately through phpMyAdmin.
::::

1. <b>Open phpMyAdmin</b><br>
   In the dashboard, go to **Databases** and click the **external icon** next to your database, then log in.

2. <b>Select the database</b><br>
   Click your database in the left sidebar.

3. <b>Open the Export tab</b><br>
   Click **Export** at the top.

4. <b>Download the export</b><br>
   Leave the **Export method** on **Quick - display only the minimal options** and the **Format** on **SQL**. Click **Export** to download the file to your PC.

   :::: tip Tip
   With **Custom - display all possible options** you can pick individual tables and have the output saved directly as ZIP or GZIP under **Compression**.
   ::::

## Import the SQL file

1. <b>Select the database</b><br>
   In phpMyAdmin, click the database you want to import into in the left sidebar.

   :::: warning Warning
   Make sure you select the database first. Without a selected database, phpMyAdmin does not know where the tables belong and the import fails.
   ::::

2. <b>Open the Import tab</b><br>
   Click **Import** at the top.

3. <b>Choose the file</b><br>
   Under **File to import**, use **Browse your computer** to select your `.sql` file. The maximum file size you are allowed to upload is shown right next to that label.

4. <b>Check the character set</b><br>
   Leave **Character set of the file** on `utf-8` unless your file explicitly uses a different encoding. Otherwise special characters end up broken in the database.

5. <b>Check the format</b><br>
   **SQL** has to be selected under **Format**. phpMyAdmin usually detects this automatically from the file extension.

6. <b>Start the import</b><br>
   Click **Import** at the bottom and wait until the page has finished loading. Do not close the browser tab in the meantime.

## Check the result

1. <b>Read the message</b><br>
   After a successful import, the message "Import has been successfully finished, X queries executed." appears at the top.

2. <b>Verify the tables</b><br>
   Click your database on the left and then on **Structure**. The tables from the `.sql` file should now be listed there.

3. <b>Start the server</b><br>
   Start your server via the dashboard and check the console for database errors.

:::: tip Tip
For your server to actually use the new tables, the database connection has to be stored in your `server.cfg`. How to do that is explained in [Set Up Database](set-up-database.md).
::::

## Importing large SQL files

The upload limit on the import page is a setting of the web server phpMyAdmin runs on. You cannot change it yourself. If your file is too large or the import stops after a while, you have these options:

1. <b>Compress the file</b><br>
   phpMyAdmin reads compressed files directly, and only the compressed size counts towards the upload limit. The file name has to end in `.[format].[compression]`, for example `database.sql.zip`. Which compression formats are supported is shown in the note at the top of the import page.

2. <b>Allow a partial import</b><br>
   Under **Partial import**, tick **Allow the interruption of an import in case the script detects it is close to the PHP timeout limit.** phpMyAdmin then stops the import in a controlled way before the PHP time limit hits and continues from the stored position when you submit again.

   :::: warning Warning
   phpMyAdmin itself points out that this option can break transactions. Back up your tables first.
   ::::

3. <b>Split the file</b><br>
   Split the `.sql` file into several smaller files and import them one after another in their original order. Make sure you do not cut a statement in half.

## Common errors

| Symptom | Cause and solution |
|---------|--------------------|
| Permission error (Access denied) | The file contains `CREATE DATABASE` or `USE`. Remove those lines and import into your existing database. |
| Error while creating a foreign key | Remove the tick from **Enable foreign key checks** under **Other options** and repeat the import. |
| The file cannot be selected or is too large | The upload limit is exceeded. See **Importing large SQL files**. |
| The import stops without a success message | Usually a timeout. See **Importing large SQL files**. |
| Table already exists | The table was imported before. Back it up and delete it before repeating the import. |
