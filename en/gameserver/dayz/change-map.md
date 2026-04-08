---
description: Change the map on a DayZ server
---

# How to Change the Map on Your DayZ Server

You can switch between the official maps **Chernarus** and **Livonia**.

:::: warning Warning
For the Livonia map you need the **Livonia DLC** in DayZ. Players without the DLC cannot join the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open serverDZ.cfg</b><br>
   Open the file `serverDZ.cfg` in the root directory of your server.

4. <b>Set the map</b><br>
   Find the `class Missions` section and change the `template` value:

   ```
   class Missions
   {
       class Mission1
       {
           template="dayzOffline.chernarusplus";
       };
   };
   ```

   | Value | Map |
   |-------|-----|
   | `dayzOffline.chernarusplus` | Chernarus (default) |
   | `dayzOffline.enoch` | Livonia (DLC) |

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
On first startup with a new map, a new world is automatically generated. Your previous progress on the old map is preserved.
::::
