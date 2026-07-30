---
description: Add a savegame to a Don’t Starve Together server
---

# How to Add a Savegame to Your Don’t Starve Together Server

You can transfer a world you played locally to your server to continue with the existing save there.

## Find the cluster folder on the server

:::: info Note
The name of the cluster folder is not defined by the game. It is set when the server starts and can differ from server to server. Search for the `cluster.ini` file via [SFTP](../establish-sftp-connection.md) or in the file browser — the folder it sits in is your cluster folder.
::::

The cluster folder has the following structure:

```
<cluster folder>/
├── Master/            # shard of the overworld (contains the save folder)
├── Caves/             # shard of the caves (only if caves are enabled)
├── cluster.ini
├── cluster_token.txt
├── adminlist.txt      # only present once created
├── whitelist.txt      # only present once created
└── blocklist.txt      # only present once created
```

The actual save is stored in the folders `Master/save/` (overworld) and `Caves/save/` (caves). These are folders, not a single file.

## Find the local savegame

1. <b>Open the data folder</b><br>
   Start Don’t Starve Together and click **Data** in the bottom left of the main menu. The folder containing your local worlds opens. Alternatively you can reach it on your PC via this path:

   ```
   C:\Users\<YourUser>\Documents\Klei\DoNotStarveTogether\<number folder>\
   ```

2. <b>Identify the right world</b><br>
   Each local world has its own folder named `Cluster_1`, `Cluster_2` and so on. Open the `cluster.ini` inside and check the `cluster_name` value — this tells you which folder belongs to which world.

3. <b>Open the save folder</b><br>
   Your world folder uses the same structure as the server, so `Master\` and – if you played with caves – `Caves\`. The save itself is stored in the subfolders `Master\save\` and `Caves\save\`.

## Upload the savegame

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Remove the old save</b><br>
   Navigate to `<cluster folder>/Master/save/` and delete the entire content of the folder.

4. <b>Upload the new save</b><br>
   Upload the complete content of your local `Master\save\` folder into the now empty `<cluster folder>/Master/save/` directory.

5. <b>Transfer the caves</b><br>
   If the caves are enabled on your server, repeat steps 3 and 4 for the folder `<cluster folder>/Caves/save/` using the content of your local `Caves\save\` folder.

6. <b>Start the server</b><br>
   Start your server again.

:::: warning Warning
Only transfer the content of the `save` folders. If you also replace files such as `cluster.ini`, `server.ini` or `cluster_token.txt`, you overwrite the ports and the cluster token of your server and it will no longer be reachable.
::::

:::: danger Important
As long as a save exists in the `save` folder, the server will not generate a new world. This also means a server that has already been running has a save stored there which must be removed before uploading.
::::

:::: tip Tip
Create a [backup](create-backup.md) of your existing server save before uploading, in case you want to switch back later.
::::

:::: info Mods
If your local world used mods, you need to set them up on the server as well. You can find out how under [Add Mods](add-mods.md).
::::
