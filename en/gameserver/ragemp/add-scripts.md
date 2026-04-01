---
description: Add scripts to a RAGE:MP server
---

# How to Add Scripts to Your RAGE:MP Server

You can install server-side and client-side scripts on your RAGE:MP server.

## Folder structure

RAGE:MP uses two folders for scripts:

| Folder | Description |
|--------|-------------|
| `packages/` | Server-side scripts (logic, database, authentication) |
| `client_packages/` | Client-side scripts (UI, rendering, inputs) |

## Add scripts

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload scripts</b><br>
   Upload the scripts to the appropriate folder:

   - **Server-side scripts** go into the `packages/` folder
   - **Client-side scripts** go into the `client_packages/` folder

   :::: tip Example
   ```
   /
   ├── packages/
   │   └── my-gamemode/
   │       └── index.js
   └── client_packages/
       └── index.js
   ```
   ::::

4. <b>Start the server</b><br>
   Start your server.

:::: info Note
Server-side scripts are placed in their own subfolder within `packages/`. Each subfolder needs an `index.js` file as entry point.
::::

:::: warning Warning
Client-side scripts are automatically downloaded by all players joining the server. Make sure not to store any sensitive data in `client_packages/`.
::::
