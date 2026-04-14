---
description: Create a database and access phpMyAdmin
---

# How to Create a Database and Access phpMyAdmin

You can create your own MySQL databases for your game server, for example for plugins, mods or web interfaces. Through phpMyAdmin you can then conveniently manage your database in the browser.

## Create a database

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open databases</b><br>
   In the left sidebar, click on **Databases**.

3. <b>Create new database</b><br>
   Click the **plus icon** in the top right to create a new database.

4. <b>Set a name</b><br>
   Enter a name for your database (e.g. `test`) and click **Create Database**.

   :::: info Note
   In the **Connections From** field you can optionally restrict which IPs are allowed to connect to the database. Leave the field empty or set to `%` to allow connections from anywhere.
   ::::

## Show connection details

Click the **eye icon** next to your database to view all connection details:

- **Database Host** (e.g. `db1.cgn1.emeraldhost.de`)
- **Database Port** (default: `3306`)
- **Database Username**
- **Database Password**
- **Database Name**
- **JDBC Connection String**

:::: info Note
The **JDBC Connection String** bundles all connection details in a single line and is used by Java-based applications (e.g. many Minecraft plugins) for direct connection.
::::

Use the **Generate New Password** button to create a new password for the database at any time.

## Open phpMyAdmin

1. <b>Open phpMyAdmin</b><br>
   Click the **external icon** (arrow pointing outward) next to your database. You will be redirected to the phpMyAdmin login page.

2. <b>Enter credentials</b><br>
   Enter the **Database Username** and **Database Password** and click **Log in**. You can find the credentials via the eye icon next to your database.

## Delete a database

Click the **trash icon** next to your database to delete the database along with all its content.

:::: warning Warning
Deleting a database cannot be undone. All stored data will be lost. If needed, create a backup via phpMyAdmin beforehand.
::::
