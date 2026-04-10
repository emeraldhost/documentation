---
description: Add mods to a Core Keeper server
---

# How to Add Mods to Your Core Keeper Server

Core Keeper uses **mod.io** for mods. You can download mods manually and upload them via SFTP.

:::: warning Warning
Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.
::::

## Set up mod.io

1. <b>Create mod.io account</b><br>
   Create an account on [mod.io](https://mod.io/) or log in.

2. <b>Create API Key</b><br>
   Go to [mod.io/me/access](https://mod.io/me/access) and create an **API Key**. Copy the key and the **API URL** (e.g. `https://u-*.modapi.io/v1`).

3. <b>Create OAuth Token</b><br>
   Under **OAuth Access**, create a new token with **Read + Write** permissions. Copy the token immediately — it is only shown once.

## Download and upload mods

1. <b>Download mods</b><br>
   Download the desired mods from [mod.io/g/corekeeper](https://mod.io/g/corekeeper). Use the **Download File** button on the mod page.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload mods</b><br>
   Extract each mod into its own subfolder in the directory:

   ```
   /Mods/
   ```

   :::: info Note
   If the `Mods` folder does not exist yet, create it in the root directory of your server.
   ::::

5. <b>Start the server</b><br>
   Start your server.

:::: danger Important
All players must have the **same mods** installed to be able to join the server.
::::
