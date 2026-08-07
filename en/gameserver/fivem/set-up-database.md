---
description: Create a MySQL database for a FiveM server and connect it correctly
---

# How to Set Up a Database for Your FiveM Server

Many FiveM scripts and frameworks store their data in a MySQL database. For your server to access it, you need two things: a database including its credentials, and a database resource that establishes the connection.

We recommend **oxmysql**. It is actively maintained and replaces the outdated resources `mysql-async` and `ghmattimysql`, whose functionality it also provides.

## Create the database

1. <b>Create a database</b><br>
   In the dashboard, go to **Databases** and create a new database using the **plus icon**. You can find the detailed instructions under [Create Database](../create-database.md).

2. <b>Read the credentials</b><br>
   Click the **eye icon** next to your database. You will need these values in a moment:

   - **Database Host** (e.g. `db1.cgn1.emeraldhost.de`)
   - **Database Port** (default: `3306`)
   - **Database Username**
   - **Database Password**
   - **Database Name**

:::: danger Important
Never share your database credentials with anyone, and never post them in screenshots, console logs or third-party support tickets. Anyone with these credentials can read and delete all data on your server.
::::

## Upload oxmysql

1. <b>Download the resource</b><br>
   Download the latest release of [oxmysql](https://github.com/overextended/oxmysql/releases/latest). Use the `oxmysql.zip` file and **not** the source code download.

2. <b>Extract the archive</b><br>
   Extract the archive. You will get a folder named `oxmysql`.

   :::: warning Warning
   The folder name must be exactly `oxmysql`. If you rename it, FiveM will not find the resource.
   ::::

3. <b>Stop the server</b><br>
   Stop your server via the dashboard.

4. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

5. <b>Upload the folder</b><br>
   Upload the `oxmysql` folder into the `resources` folder located next to your server's `server.cfg`.

   | Setup | Path |
   |-------|------|
   | Default (recommended) | `/home/container/resources` |
   | txAdmin Recipe / Deployer | `/home/container/txData/<ProfileName>/resources` |

## Enter the connection string

The connection string bundles all credentials in a single line. oxmysql reads it from the convar `mysql_connection_string`.

1. <b>Open server.cfg</b><br>
   Open the `server.cfg` your server uses. Which one that is depends on your txAdmin setup – you can find the overview under [Set Port](set-port.md).

2. <b>Set the connection string</b><br>
   Add the following line and replace the placeholders with your credentials from the eye icon:

   ```
   set mysql_connection_string "mysql://USERNAME:PASSWORD@HOST:PORT/DATABASENAME"
   ```

   Alternatively, oxmysql also accepts the semicolon-separated format:

   ```
   set mysql_connection_string "user=USERNAME;password=PASSWORD;host=HOST;port=PORT;database=DATABASENAME"
   ```

3. <b>Only use set</b><br>
   Always define the convar with `set`.

   :::: danger Important
   Never use `setr` or `sets` for the connection string. `setr` sends the value to all connected players, and `sets` displays it publicly in the server list and in your server's `info.json`. In both cases your database password would be visible to everyone.
   ::::

4. <b>Start oxmysql</b><br>
   Below the connection string, add the start line for the resource:

   ```
   ensure oxmysql
   ```

   :::: warning Warning
   The order in the `server.cfg` matters. The `set mysql_connection_string` must be placed **before** all `ensure` lines, and `ensure oxmysql` must be placed **before** any script that uses the database. Otherwise those scripts start before the database connection is ready.
   ::::

5. <b>Start the server</b><br>
   Save the `server.cfg` and start your server via the dashboard.

:::: info Note
On every server start, the dashboard automatically rewrites some lines of the `server.cfg`, among them `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` and `sv_maxclients`. Your `set mysql_connection_string` and `ensure oxmysql` lines are not affected and will not be lost.
::::

## Verify the connection

After the start, open the **console** of your server in the dashboard. If the connection succeeded, you will find this message:

```
Database server connection established!
```

It is preceded by the version of your database server in square brackets.

If the connection fails, oxmysql prints a message in this form instead:

```
Unable to establish a connection to the database (ERRORCODE)!
```

In that case, double-check the username, password, host, port and database name via the eye icon in the dashboard.

## Special characters in the password

Depending on the format you use, certain special characters are reserved or unsupported. If your database password contains one of these characters, the connection may fail:

```
; , / ? : @ & = + $ #
```

:::: tip Tip
If your generated password contains one of these characters, use **Generate New Password** in the dashboard until you get a password without them. Alternatively, you can switch to the other connection string format.
::::

:::: warning Warning
Do not encode the password (for example `%40` instead of `@`). oxmysql does not decode such encodings and passes them to the database unchanged, so the login will fail as well.
::::

## Additional convars

For troubleshooting, oxmysql offers additional convars that you also add to the `server.cfg` using `set`:

| Convar | Description |
|--------|-------------|
| `set mysql_debug true` | Prints all database queries in the console |
| `set mysql_slow_query_warning 150` | Warns if a query takes longer than the given time in milliseconds |

:::: tip Tip
Create a [Backup](../create-backup.md) of your server before making larger changes to your database. The content of the database itself is backed up via phpMyAdmin.
::::

## What comes next?

Your database is connected now, but still empty. Most frameworks and scripts ship with a `.sql` file that creates the required tables. How to import it is explained under [Import Database](import-database.md).
