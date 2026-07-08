---
description: Add Steam Workshop mods to a Space Engineers server
---

# How to Add Mods to Your Space Engineers Server

You can add Steam Workshop mods to your server to add blocks, vehicles, gameplay mechanics and more. Mods are added by their **Workshop ID** in your world's config file — the server downloads them automatically from the Steam Workshop on startup. You do not need to upload any mod files manually.

:::: warning Caution
Stop your server before editing the config file. A running server can overwrite your changes when it saves or stops.
::::

## Find the Workshop ID

1. <b>Open the mod in the Steam Workshop</b><br>
   Open the [Steam Workshop for Space Engineers](https://steamcommunity.com/app/244850/workshop/) and go to the mod you want.

2. <b>Copy the ID from the URL</b><br>
   The Workshop ID is the number at the end of the URL after `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   The ID here is `123456789`.

## Add the mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser in the dashboard.

3. <b>Open the config file</b><br>
   In your world folder `Saves/World/` open the file `Sandbox_config.sbc`.

4. <b>Insert the mod list</b><br>
   Look for the `<Mods>` block (on a new world it reads `<Mods />`) and add one `<ModItem>` per mod. Replace `123456789` with the respective Workshop ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` is the Workshop ID with the `.sbm` extension.
   - `<PublishedFileId>` is the bare Workshop ID without an extension.
   - `FriendlyName` is optional and is only a display name.

5. <b>Start the server</b><br>
   Save the file and start your server. On startup the server downloads the mods automatically from the Steam Workshop — you can watch the progress in the server console.

:::: info Mind the order
The order determines priority: mods **higher** in the list override mods further down when both change the same definition. Order overlapping mods accordingly.
::::

:::: tip Experimental mode & scripts
Many mods require [experimental mode](enable-experimental-mode.md) to be enabled — mods with their own code (script mods) require it **without exception**. Enable it whenever you use Workshop mods.

Scripts for **Programmable Blocks** are not mods and are not added to the mod list — see [Allow In-Game Scripts](enable-ingame-scripts.md).
::::

:::: warning Mods missing after a restart?
With the server stopped, open `Saves/World/Sandbox_config.sbc` again and check that your `<Mods>` block is still present. If not, re-add the mods and restart the server.
::::

:::: danger Important
Players do not need to download anything manually — the client loads the server mods automatically when joining. However, Steam Workshop mods require crossplay to be **disabled**.
::::
