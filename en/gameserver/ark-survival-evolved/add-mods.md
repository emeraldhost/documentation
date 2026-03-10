---
description: Add mods to an ARK Survival Evolved server
---

# How to Add Mods to Your ARK Survival Evolved Server

You can add Steam Workshop mods to your server to enhance the gameplay experience.

:::: warning Warning
After a game update, mods may be incompatible and cause crashes.
::::

## Find the mod ID

1. <b>Open Steam Workshop</b><br>
   Open the [Steam Workshop for ARK](https://steamcommunity.com/app/346110/workshop/) and find the desired mod.

2. <b>Copy mod ID</b><br>
   You can find the mod ID in the URL of the Workshop page. Copy the number after `?id=`.

   :::: tip Example
   In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=1785800853`, the mod ID is `1785800853`.
   ::::

## Add mods to the server

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter mod IDs</b><br>
   Enter the mod IDs in the **Mods** field, separated by commas.

   :::: tip Example
   ```
   1785800853,731604991,889745138
   ```
   ::::

4. <b>Restart the server</b><br>
   Save the setting and restart your server. The mods will be downloaded and installed automatically on startup.

:::: info Note
The order of the mod IDs determines the load order. The first mod is loaded as the main mod.
::::

:::: danger Important
All players must **subscribe to the same mods** via the Steam Workshop to be able to join the server.
::::
