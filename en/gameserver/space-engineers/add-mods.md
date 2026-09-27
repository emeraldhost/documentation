---
description: Add mods from the Steam Workshop or mod.io to a Space Engineers server
---

# How to Add Mods to Your Space Engineers Server

You can add mods from the **Steam Workshop** or from **mod.io** to your server to add blocks, vehicles, gameplay mechanics and more. Mods are added by their **ID** in your world's config file — the server downloads them automatically on startup. You do not need to upload any mod files manually.

:::: warning Caution
Stop your server before editing the config file. A running server can overwrite your changes when it saves or stops.
::::

## Steam Workshop or mod.io?

Which mod service you can use depends on whether [crossplay](enable-crossplay.md) is enabled on your server:

| Server | Mod service | `PublishedServiceName` |
| --- | --- | --- |
| Without crossplay | Steam Workshop or mod.io | `Steam` or `mod.io` |
| With crossplay | mod.io only | `mod.io` |

Without crossplay, you can mix mods from both services in the same mod list.

:::: info Crossplay servers
A crossplay server only loads mods from mod.io. If a Steam Workshop mod is in the mod list, the world does not start. In addition, your mods must not exceed **3 GB** in total — otherwise the server switches console compatibility off while loading.
::::

## Find the mod ID

### Steam Workshop

1. <b>Open the mod in the Steam Workshop</b><br>
   Open the [Steam Workshop for Space Engineers](https://steamcommunity.com/app/244850/workshop/) and go to the mod you want.

2. <b>Copy the ID from the URL</b><br>
   The Workshop ID is the number at the end of the URL after `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   The ID here is `123456789`.

### mod.io

1. <b>Open the mod on mod.io</b><br>
   Open [mod.io for Space Engineers](https://mod.io/g/spaceengineers) and go to the mod you want.

2. <b>Copy the ID from the sidebar</b><br>
   The mod.io ID is shown in the mod's right sidebar under **ID**, for example `1234567`. Use the copy icon next to it to copy it.

   :::: info Note
   Unlike the Steam Workshop, the ID is not part of the URL. The address of a mod.io mod only contains its short name, for example `https://mod.io/g/spaceengineers/m/example-mod`.
   ::::

## Add the mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md), or use the file browser in the dashboard.

3. <b>Open the config file</b><br>
   In your world folder `/config/Saves/World/` open the file `Sandbox_config.sbc`.

4. <b>Insert the mod list</b><br>
   Look for the `<Mods>` block (on a new world it reads `<Mods />`) and add one `<ModItem>` per mod. Replace the example IDs with the IDs of your mods.

   Mods from the **Steam Workshop**:

   ```xml
   <Mods>
     <ModItem FriendlyName="First Mod">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Second Mod">
       <Name>987654321.sbm</Name>
       <PublishedFileId>987654321</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   Mods from **mod.io**:

   ```xml
   <Mods>
     <ModItem FriendlyName="First Mod">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Second Mod">
       <Name>7654321.sbm</Name>
       <PublishedFileId>7654321</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` is the ID with the `.sbm` extension.
   - `<PublishedFileId>` is the bare ID without an extension.
   - `<PublishedServiceName>` sets the mod service: `Steam` for the Steam Workshop, `mod.io` for mod.io. Mind the exact spelling — if the entry is missing, a server without crossplay looks for the mod in the Steam Workshop.
   - `FriendlyName` is optional and is only a display name.

5. <b>Start the server</b><br>
   Save the file and start your server. On startup the server downloads the mods automatically from the Steam Workshop or mod.io — you can watch the progress in the server console.

:::: info Mind the order
The order determines priority: mods **higher** in the list override mods further down when both change the same definition. Order overlapping mods accordingly.
::::

:::: tip Experimental mode & scripts
Since Update 1.206, mods no longer require [experimental mode](enable-experimental-mode.md) — mods with their own code (script mods) also run without it.

Scripts for **Programmable Blocks** are not mods and are not added to the mod list — see [Allow In-Game Scripts](enable-ingame-scripts.md).
::::

:::: warning Mods missing after a restart?
With the server stopped, open `/config/Saves/World/Sandbox_config.sbc` again and check that your `<Mods>` block is still present. If not, re-add the mods and restart the server.
::::

:::: danger Important
Players do not need to download anything manually — the client loads the server mods automatically when joining. However, Steam Workshop mods only work with crossplay **disabled** — on a crossplay server, use mods from mod.io.
::::
