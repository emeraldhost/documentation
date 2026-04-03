---
description: Add workshop maps to a Counter-Strike 2 server
---

# How to Add Workshop Maps to Your Counter-Strike 2 Server

You can load maps from the Steam Workshop on your server.

## Find workshop map ID

1. <b>Open Steam Workshop</b><br>
   Open the [Steam Workshop for CS2](https://steamcommunity.com/app/730/workshop/) and find the desired map.

2. <b>Copy map ID</b><br>
   You can find the map ID in the URL of the Workshop page. Copy the number after `?id=`.

   :::: tip Example
   In the URL `https://steamcommunity.com/sharedfiles/filedetails/?id=3070288532`, the map ID is `3070288532`.
   ::::

## Load a single workshop map

Load a single workshop map via the RCON console:

```
host_workshop_map 3070288532
```

The server will automatically download the map and switch to it.

## Load a workshop collection

You can also load an entire collection of maps:

1. <b>Create collection</b><br>
   Create a [Steam Workshop Collection](https://steamcommunity.com/workshop/browse/?appid=730&section=collections) and add the desired maps. The collection must be **public**.

2. <b>Copy collection ID</b><br>
   Copy the collection ID from the URL.

3. <b>Set startup parameters</b><br>
   In the dashboard under **Settings**, enter the following in **Additional Startup Parameters**:

   ```
   +host_workshop_collection COLLECTION_ID
   ```

4. <b>Restart the server</b><br>
   Restart your server. The maps will be downloaded automatically.

:::: info Note
You can display all available workshop maps on the server with the console command `ds_workshop_listmaps`.
::::

:::: warning Warning
Collections are limited to a maximum of 100 maps. If there are more than 100 maps, the entire collection will fail to load.
::::
