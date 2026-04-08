---
description: Adjust loot distribution on a DayZ server
---

# How to Adjust the Loot Distribution on Your DayZ Server

You can adjust the spawn rates and quantities of items via the `types.xml` file.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open types.xml</b><br>
   Open the file `types.xml` in the directory:

   ```
   /mpmissions/dayzOffline.chernarusplus/db/types.xml
   ```

   :::: info Note
   For Livonia, the file is located at `/mpmissions/dayzOffline.enoch/db/types.xml`.
   ::::

4. <b>Adjust item</b><br>
   Find the desired item and adjust the values. Example for ammunition:

   ```xml
   <type name="Ammo_545x39">
       <nominal>120</nominal>
       <lifetime>14400</lifetime>
       <restock>1800</restock>
       <min>80</min>
       <quantmin>20</quantmin>
       <quantmax>60</quantmax>
       <cost>100</cost>
   </type>
   ```

   | Setting | Description |
   |---------|-------------|
   | `nominal` | Maximum amount on the map |
   | `min` | Minimum amount on the map |
   | `lifetime` | Lifetime in seconds |
   | `restock` | Time until respawn |
   | `quantmin` / `quantmax` | Min/max stack size |
   | `cost` | Spawn priority |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: warning Warning
A faulty `types.xml` can prevent your server from starting. Always make a backup of the file before making changes.
::::

:::: tip Tip
There are online tools like [DayZ Editor](https://dayzeditor.com/) or the [DayZ Loot Editor](https://www.dayz-loot-editor.com/) that make editing the `types.xml` easier.
::::
