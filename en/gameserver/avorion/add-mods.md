---
description: Add mods to an Avorion server
---

# How to Add Mods to Your Avorion Server

Avorion comes with its own mod system. You do not have to upload the mods yourself — your server downloads them from the Steam Workshop on startup. All of this is controlled by a single file: the `modconfig.lua` in the folder of your galaxy.

:::: warning Warning
Stop your server before adding or removing mods. After a game update, mods may be incompatible and cause crashes. Also create a [backup](create-backup.md) of your galaxy beforehand.
::::

## Find the Workshop ID

1. <b>Open the mod in the Steam Workshop</b><br>
   Open the [Steam Workshop for Avorion](https://steamcommunity.com/app/445220/workshop/) and look up the mod you want.

2. <b>Read the ID from the address</b><br>
   The Workshop ID is the number at the end of the URL. For `https://steamcommunity.com/sharedfiles/filedetails/?id=1691539727` the ID is `1691539727`.

## Add the mods

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) or use the file browser in the dashboard.

3. <b>Open modconfig.lua</b><br>
   Navigate to the folder of your galaxy – where `server.ini` and `admin.xml` are located as well – and open the file:

   ```
   /galaxy/<galaxy name>/modconfig.lua
   ```

   :::: info Note
   The galaxy folder is named exactly like the galaxy name configured in the **dashboard** (**Galaxy Name**). If the file does not exist yet, start your server once so the folder structure is created, then stop it again.
   ::::

4. <b>Enter the mods</b><br>
   Add each mod with its Workshop ID inside the `mods` block:

   ```lua
   modLocation = ""
   forceEnabling = false
   mods =
   {
       {workshopid = "1691539727"},
       {workshopid = "1691591293"},
   }
   allowed =
   {
       {workshopid = "1691539727"},
   }
   ```

   The `allowed` block uses the same notation as `mods`. If you do not need it, simply leave it empty.

5. <b>Save and start</b><br>
   Save the file and start your server. On startup it downloads the configured mods and activates them – the first start can therefore take a little longer.

## The blocks at a glance

| Block | Meaning |
|-------|---------|
| `mods` | The mods your server loads. One entry per mod with its Workshop ID. |
| `allowed` | Optional list of client-side mods (mostly UI mods) that are allowed on your server. Can be left empty. |
| `forceEnabling` | Forces the mods to be enabled. The value stays at `false`. |
| `modLocation` | Alternative location for the mods folder. If the value stays empty, your server uses the default folder `mods`. |

:::: warning Leave forceEnabling at false
The developers of Avorion explicitly recommend leaving `forceEnabling` turned off: the option is aimed primarily at mod developers and can lead to broken or corrupted savegames.
::::

## Do players have to do anything?

When joining, players are shown the mod list of your server. Via the **connect & download** button the client automatically downloads and installs the matching Workshop mods before joining.

:::: tip Tip
Your server stores downloaded Workshop mods inside the galaxy under `workshop/content/445220/`. That is how you can check whether a mod was actually loaded.
::::

:::: danger Important
Watch the commas and the curly brackets. If the `modconfig.lua` is faulty, your server cannot read the file and will not start properly. When testing, comment out mods one at a time instead of changing several at once.
::::
