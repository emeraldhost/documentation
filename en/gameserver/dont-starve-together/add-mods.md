---
description: Add mods to a Don’t Starve Together server
---

# How to Add Mods to Your Don’t Starve Together Server

Don’t Starve Together comes with a full mod system for servers. You do not have to upload the mods yourself — the server downloads them from the Steam Workshop on its own. Two files are responsible for this:

- `dedicated_server_mods_setup.lua` defines **which** mods are downloaded.
- `modoverrides.lua` defines **which** mods are active in the world — per shard.

:::: warning Warning
Stop your server before adding mods. After a game update, mods may be incompatible and cause crashes.
::::

## Find the Workshop ID

1. <b>Open the mod in the Steam Workshop</b><br>
   Open the [Steam Workshop for Don’t Starve Together](https://steamcommunity.com/app/322330/workshop/) and look up the mod you want.

2. <b>Read the ID from the address</b><br>
   The Workshop ID is the number at the end of the URL. For `https://steamcommunity.com/sharedfiles/filedetails/?id=350811795` the ID is `350811795`.

## Add mods for download

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open the file</b><br>
   In the main directory of your server, open the following file:

   ```
   mods/dedicated_server_mods_setup.lua
   ```

4. <b>Enter the mods</b><br>
   Add one line per mod with its Workshop ID:

   ```lua
   ServerModSetup("350811795")
   ServerModSetup("2902364746")
   ```

5. <b>Add collections</b><br>
   If you want to load a complete Workshop collection, use this command with the ID of the collection instead:

   ```lua
   ServerModCollectionSetup("379114180")
   ```

6. <b>Save</b><br>
   Save the file.

## Enable mods in the world

1. <b>Open the cluster folder</b><br>
   Navigate to the folder that contains the `cluster.ini` file. That is your cluster folder. Inside you will find the shard folders `Master` (overworld) and, if the caves are enabled, `Caves`.

2. <b>Open modoverrides.lua</b><br>
   Open the `modoverrides.lua` file in the `Master` folder. If it does not exist yet, create it:

   ```
   <cluster folder>/Master/modoverrides.lua
   ```

3. <b>Enter the mods</b><br>
   Add each mod with its Workshop ID in the format `workshop-<ID>`:

   ```lua
   return {
     ["workshop-350811795"] = { enabled = true },
     ["workshop-2902364746"] = { enabled = true },
   }
   ```

4. <b>Set mod options</b><br>
   If a mod offers its own options, add them via `configuration_options`. The valid names and values are listed in the `modinfo.lua` file of the mod in question:

   ```lua
   return {
     ["workshop-2902364746"] = {
       enabled = true,
       configuration_options = { mode = "Easy Cartography" },
     },
   }
   ```

5. <b>Cover the caves</b><br>
   If the caves are enabled on your server, copy the same file to `<cluster folder>/Caves/modoverrides.lua` as well. Every shard has its own mod list.

6. <b>Start the server</b><br>
   Start your server. On startup it downloads the listed mods and enables them, so the first start can take a little longer.

:::: danger Important
Both files belong together: every mod you enable in `modoverrides.lua` also needs a matching `ServerModSetup()` line in `dedicated_server_mods_setup.lua` — and the other way around. If one of the two entries is missing, the mod will not be loaded.
::::

:::: info Do players have to do anything?
No. Server-only mods do not have to be downloaded by joining players at all. Mods that also have to run on the client are downloaded and enabled automatically through the Steam Workshop when players join.
::::

:::: tip Tip
Downloaded mods are stored by the server as `mods/workshop-<ID>/` folders. You can use this to check whether a mod was actually loaded. Also create a [backup](create-backup.md) of your world before changing mods.
::::
