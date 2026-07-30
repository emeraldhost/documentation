---
description: Add mods to a Factorio server
---

# How to Add Mods to Your Factorio Server

Factorio has its own mod system and does **not** use the Steam Workshop. Mods come as `.zip` files from the official mod portal [mods.factorio.com](https://mods.factorio.com/) or from the in-game mod portal.

:::: warning Warning
Stop your server before adding or removing mods. After a game update, mods may be incompatible and prevent the server from starting.
::::

## Download a mod

1. <b>Open the mod portal</b><br>
   Open [mods.factorio.com](https://mods.factorio.com/) and search for the mod you want.

2. <b>Choose the matching version</b><br>
   Download the `.zip` file that matches the game version of your server.

3. <b>Do not unzip the file</b><br>
   The mod stays a `.zip` file – Factorio loads mods directly from the archive.

## Upload mods to the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload mods</b><br>
   Upload the `.zip` files to the following directory. If the folder does not exist yet, create it:

   ```
   /mods/
   ```

4. <b>Start the server</b><br>
   Start your server.

## Enable and disable mods

Which mods are loaded is controlled by the file `mods/mod-list.json`. It is created automatically on the first server start once the `mods` folder exists. Each mod is listed there with its name and the `enabled` status:

```json
{
  "mods":
  [
    {
      "name": "base",
      "enabled": true
    },
    {
      "name": "my-mod",
      "enabled": false
    }
  ]
}
```

Set `enabled` to `false` to disable a mod without deleting it. Restart the server after making changes.

:::: warning Warning
Make sure the file stays valid JSON – a missing comma or an extra bracket can cause the server to discard the file or fail to start.
::::

:::: danger Important
All players need **exactly the same mods in the same versions** as the server, otherwise the checksum check fails when joining.
::::

:::: tip Automatic mod sync
When joining a server that uses mods, Factorio offers to synchronize the mods with the server. Confirming the mod sync automatically downloads and enables all required mods.
::::

:::: info Space Age and other expansions
The server already ships with the mods `base`, `elevated-rails`, `quality` and `space-age`. If the expansion mods are active, players **without** the DLC cannot join. They can be set to `"enabled": false` via `mods/mod-list.json`. However, there are reports of the server re-enabling the expansion mods on startup – so far there is no official fix for this. After a restart, check the `mod-list.json` to see whether your setting was kept.
::::
