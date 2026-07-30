---
description: Add mods to a Kerbal Space Program server
---

# How to Add Mods to Your Kerbal Space Program Server

In Kerbal Space Program mods only run inside the game itself – the DarkMultiPlayer server does **not** load any KSP mods. Its job is a different one: through the file `mod-control.txt` it defines which mods players are allowed to use, and it can optionally distribute a ready-made modpack to them.

:::: danger Important
All players need the same mods locally in their `GameData` folder. If a player is missing a mod from the server list or has an additional one installed, the connection is rejected.
::::

:::: warning Warning
Create a [backup](create-backup.md) before changing the mod list. Vessels built with parts from a mod stop working as soon as that mod is removed.
::::

## Generate and upload the mod list

You do not write the mod list by hand – you generate it in the game: the DMP client reads your `GameData` folder and writes the finished file from it.

1. <b>Set up KSP with the mods you want</b><br>
   Install all mods that should be allowed on the server on your PC and start Kerbal Space Program.

2. <b>Open Mod Control</b><br>
   In the DMP window in the main menu click on **Options** and switch to the **Advanced** tab. It contains the **Mod Control** section.

3. <b>Generate the file</b><br>
   In the **Mod Control** section click on **Whitelist** or **Blacklist**. The file is written directly into your KSP folder:

   ```
   [KSP folder]/mod-control.txt
   ```

4. <b>Stop the server</b><br>
   Stop your server via the dashboard. The mod list is only read on server start.

5. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

6. <b>Upload the file</b><br>
   Upload the file into the following directory and replace the existing one:

   ```
   /Config/mod-control.txt
   ```

7. <b>Start the server</b><br>
   Start your server. From now on it checks the `GameData` folder of every joining player against this list.

:::: info Whitelist or blacklist?
| Variant | Meaning |
|---------|---------|
| **Whitelist** | Only the mods from your installation are allowed. The usual choice for a server with a fixed mod list. |
| **Blacklist** | Players may use any mods. Only explicitly blocked files and resources are forbidden. |
::::

:::: info Note
If the file is missing, your server automatically generates a `mod-control.txt` on startup that only contains the stock parts of the game. If an old file is still present at that point, it is renamed to `mod-control.txt.bak` first. This does not happen when you upload the file via SFTP – there you overwrite the file yourself, so keep a copy beforehand.
::::

## Structure of mod-control.txt

The file consists of sections, each starting with a `!`. Lines starting with `#` are comments.

| Section | Meaning |
|---------|---------|
| `!required-files` | Files every player must have installed |
| `!optional-files` | Files that may be installed but are not required |
| `!partslist` | All parts that may be used on the server |
| `!resource-whitelist` | Only the listed files are allowed (whitelist variant) |
| `!resource-blacklist` | The listed files are forbidden (blacklist variant) |

Entries are written as a path relative to the `GameData` folder, optionally followed by a checksum:

```
DarkMultiPlayer/Plugins/DarkMultiPlayer.dll=6a1c9a...
```

:::: warning Warning
`!resource-whitelist` and `!resource-blacklist` are mutually exclusive. Only one of the two sections may contain entries.
::::

## Configure mod control

How strictly your server checks is controlled by the value `modControl` in the file `/Config/Settings.txt`. Stop your server before editing the file.

| Value | Meaning |
|-------|---------|
| `ENABLED_STOP_INVALID_PART_SYNC` | Default. Vessels using forbidden parts are not synchronized to the other players. |
| `ENABLED_STOP_INVALID_PART_LAUNCH` | Vessels using forbidden parts cannot be launched at all. |
| `DISABLED` | No checks. Every player can use any mods. |

:::: danger Important
Only disable mod control if you know what you are doing. Without checks, vessels with parts other players cannot load end up in the universe.
::::

## Distribute a modpack to your players

Optionally your server can provide the matching mods to your players so nobody has to collect them one by one.

1. <b>Choose the mode</b><br>
   Open the **dashboard**, go to the **settings** and set the field **Mod Pack Mode**:

   | Value | Meaning |
   |-------|---------|
   | `NONE` | Default. The server does not distribute any mods. |
   | `CKAN` | The server sends a CKAN file containing the mod list to the players. |
   | `GAMEDATA` | The server sends the complete mod files to the players. |

2. <b>Upload the modpack</b><br>
   Upload the mods via [SFTP](../establish-sftp-connection.md) into the matching location:

   ```
   /Config/GameData/            (for GAMEDATA)
   /Config/DarkMultiPlayer.ckan (for CKAN)
   ```

   :::: tip Tip
   Alternatively an admin can upload their complete `GameData` straight from the game: the command `/upload` in the DMP chat is enough. Without admin rights the message *"You are not an admin, unable to upload"* appears – see [Add Admin](add-admin.md).
   ::::

3. <b>Refresh the file list</b><br>
   If you uploaded the files via SFTP, run the following command in the **console** of your dashboard afterwards:

   ```
   /reloadmods
   ```

   :::: info Note
   Without this command, players report the message *"DMP Server has an out of date hash list. Tell the admin to run /reloadmods"*.
   ::::

4. <b>Inform your players</b><br>
   To install the pack, players need the additional tool **DMP Modpack Updater** from [d-mp.org/downloads](https://d-mp.org/downloads). Kerbal Space Program has to be closed for that – the `GameData` folder cannot be modified while the game is running.

:::: warning Warning
The values **Mod Pack Mode**, **Warp Mode**, **Game Mode**, **Game Difficulty** and **Server Name** are written from the dashboard into `Settings.txt` on every server start. Only change them in the **dashboard** – changes made directly in the file are overwritten on the next start.
::::

:::: info Note
Distributing a modpack does not replace the `mod-control.txt`. It only makes sure players get the files – the actual checking still happens through the mod list.
::::
