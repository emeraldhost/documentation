---
description: Upload an existing world to a Space Engineers server
---

# How to Upload a World to Your Space Engineers Server

You can transfer a locally created or existing world to your server and continue playing there. A Space Engineers world is a **folder** that contains, among others, the files `Sandbox.sbc` and `Sandbox_config.sbc`.

:::: info Note
The world name on your server is fixed to **World** and cannot be changed (visible in the **Settings**). Your world is therefore always loaded from the `Saves/World/` folder — you upload the **contents** of your world into exactly this folder.
::::

## Find the world folder

You can find your local worlds on your PC under:

```
%APPDATA%\SpaceEngineers\Saves\<SteamID>\
```

Each world is its own folder (named after the world). You need the **contents** of this folder — among others `Sandbox.sbc`, `Sandbox_config.sbc` and the `.sbs` files.

## Upload the world

:::: warning Caution
Stop your server before uploading files. A running server saves automatically and can corrupt the uploaded world.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser.

3. <b>Open the world folder</b><br>
   Go to the `Saves/World/` folder on the server.

4. <b>Upload the world data</b><br>
   Upload the **contents** of your local world folder directly into `Saves/World/`, overwriting the existing files. Upload the files directly into the folder — **not** as another subfolder.

5. <b>Start the server</b><br>
   Start your server. The server console should show "Loading world …" and then "Game ready".

:::: warning Caution
Existing files in the `Saves/World/` folder will be overwritten. Create a [backup](../create-backup.md) first if you want to keep the current world. Also, do not store your own backups inside the folder — the server removes unrecognized files when it saves.
::::
