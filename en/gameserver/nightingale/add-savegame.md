---
description: Add a savegame to a Nightingale server
---

# How to Add a Savegame to Your Nightingale Server

Nightingale has **no world or save name**. The server always loads whatever is stored in the `Offline` folder. That folder holds your realms and your characters:

| Directory | Content |
|-----------|---------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | The realms, meaning all worlds including their buildings |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | The character data of a player. `<PlatformID>` is the Steam or Epic ID of that player. |

:::: tip Tip
Create a [backup](create-backup.md) of your current server save before transferring anything, in case you want to switch back later.
::::

## Option 1: Transfer directly from the game

This is the official and easiest way. The very first time you join a still empty server, your client automatically uploads your character **and all realms belonging to it**.

1. <b>Prepare the server</b><br>
   The server has to be empty, meaning it must not contain a save yet. If a save already exists, reset it first as described further below.

2. <b>Start the server</b><br>
   Start your server via the dashboard and wait until it is fully up.

3. <b>Join with the character you want</b><br>
   Be the first to connect, using exactly the character whose progress you want to transfer. How to join your server is described in [Join Server](join-server.md).

4. <b>Wait for the transfer</b><br>
   Character and realms are uploaded while you join. Depending on the size of your worlds this can take a moment.

:::: danger Important
The first character to connect determines the content of the server. If you do **not** want a save to be uploaded, connect with a **newly created character** first.
::::

## Option 2: Upload the save via SFTP

Use this route for a save that already comes from a Nightingale server – for example from a [backup](create-backup.md) or from another server.

:::: warning Warning
For a save from your own PC, use **Option 1**. A server stores its realms in the `DedicatedServer/Deploy` subfolder – a local save from your client is structured differently and cannot simply be copied into that directory.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. While the server is running it writes to the save files itself.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open the directory</b><br>
   Switch to the following directory:

   ```
   /NWX/Saved/
   ```

   :::: info Note
   If the folder does not exist yet, start the server once so the folder structure is created. Then stop it again before uploading your files.
   ::::

4. <b>Remove the current save</b><br>
   Delete the existing `Offline` folder on the server so the old and the new save do not get mixed up.

5. <b>Upload the folder</b><br>
   Upload the complete `Offline` folder including all subfolders into the `/NWX/Saved/` directory.

6. <b>Start the server</b><br>
   Start your server. On startup it now loads the save you uploaded.

:::: warning Warning
Always upload realms and characters together. If the `Profiles` folder of the matching player is missing, the character belonging to those worlds is missing too.
::::

## Reset the save

If you want to start over on your server, delete the stored state completely:

1. <b>Create a backup</b><br>
   Create a [backup](create-backup.md) first. This step cannot be undone.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Delete the folders</b><br>
   Delete the following two folders completely:

   ```
   /NWX/Saved/Offline/
   /NWX/Saved/Config/
   ```

5. <b>Start the server</b><br>
   Start your server. It recreates the folders on startup and is empty again.

:::: warning Warning
Deleting `/NWX/Saved/Config/` also removes the server state – including the list of banned players. After the reset all bans are lifted.
::::

## Difficulty of the first world

:::: info Note
You set the starting difficulty in the **dashboard** using the **Difficulty** variable (`easy`, `medium`, `hard` or `extreme`). It only affects the **very first world** the server creates itself – so only if no character with its own realms is imported. Existing realms remain unchanged.
::::
