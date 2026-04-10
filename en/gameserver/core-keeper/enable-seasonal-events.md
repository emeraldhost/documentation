---
description: Enable seasonal events on a Core Keeper server
---

# How to Enable Seasonal Events on Your Core Keeper Server

By default, Core Keeper follows the real calendar for seasonal events. However, you can manually force a specific event.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Select event</b><br>
   Enter the following in the **Additional Startup Parameters**:

   ```
   -season EVENTNAME
   ```

   | Event | Value |
   |-------|-------|
   | No override (default) | `None` |
   | Easter | `Easter` |
   | Halloween | `Halloween` |
   | Christmas | `Christmas` |
   | Valentine's Day | `Valentine` |
   | Anniversary | `Anniversary` |
   | Cherry Blossom | `CherryBlossom` |
   | Lunar New Year | `LunarNewYear` |

   :::: tip Example
   ```
   -season Halloween
   ```
   ::::

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: info Note
To return to the normal calendar, remove the `-season` parameter or set it to `None`.
::::
