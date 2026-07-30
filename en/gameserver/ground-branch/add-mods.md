---
description: Add mods to a Ground Branch server
---

# How to Add Mods to Your Ground Branch Server

Mods for Ground Branch are distributed through the **Steam Workshop**. On the server you only enter the **Workshop IDs** into the file `mods.txt` — the server takes care of the rest on the next start.

:::: info From version 1035.2
The `mods.txt` method applies since update **V1035.2**. Older guides describe different approaches that no longer work.
::::

## Find the Workshop ID

1. <b>Open the mod in the Workshop</b><br>
   Open the mod you want in the [Ground Branch Workshop](https://steamcommunity.com/app/16900/workshop/).

2. <b>Read the ID from the address bar</b><br>
   The Workshop ID is the number at the end of the address after `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=1234567890
   ```

   In this example the ID is `1234567890`.

## Add the mods on the server

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The mod list is only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open mods.txt</b><br>
   Open the following file. If it does not exist yet, create it:

   ```
   /GroundBranch/ServerConfig/mods.txt
   ```

   :::: info Note
   The `ServerConfig` folder is only created on the first server start. Start your server once if you cannot find it.
   ::::

4. <b>Enter the IDs</b><br>
   Enter exactly one Workshop ID per line:

   ```
   1234567890
   9876543210
   ```

5. <b>Start the server</b><br>
   Save the file and start your server. On startup it downloads the listed mods and places them in the `GroundBranch/Mods` folder.

:::: warning Warning
The first start after adding new mods takes longer because the content has to be downloaded first. Wait for that to finish before joining.
::::

## What players have to do

Nothing manually. When joining a server with mods, the Server Browser automatically performs a **mod sync**: the client subscribes to the required Workshop content and downloads it.

:::: info Note
Players first see a notice that the server uses mods and that these will be downloaded before joining. After the download they join as usual — see [Join Server](join-server.md).
::::

## Remove or update mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Remove the line</b><br>
   Delete the corresponding Workshop ID from the `mods.txt`.

3. <b>Start the server</b><br>
   Start your server. Changes to the mod list only take effect after a restart — nothing happens while the server is running.

## Troubleshooting

If the server does not load any mods, check the following:

- Does the `mods.txt` contain **one ID per line**, without commas, quotes or spaces?
- Is it the ID of the Workshop item and not the one of its creator?
- Is the mod still available in the Workshop and compatible with the current game version?
- Was the server **restarted** after the change?
- If a mod keeps causing trouble, remove the IDs one at a time to narrow down which mod is responsible.

:::: info Note
Ground Branch has two kinds of mods: content made with **Quick Create** (game modes, missions, kits, translations) and asset based mods built with the **Mod Kit**. Both are loaded through the same `mods.txt`. Details on the mod types can be found in the [official modding wiki](https://wiki.groundbranch.com/en/modding).
::::

:::: tip Tip
Back up your `mods.txt` together with the rest of the `ServerConfig` folder before making larger changes — see [Create Backup](create-backup.md).
::::
