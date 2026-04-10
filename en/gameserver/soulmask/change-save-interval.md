---
description: Change save interval on a Soulmask server
---

# How to Change the Save Interval on Your Soulmask Server

You can configure how often the server saves the game state. There are two intervals:

- **Save Time Interval** — How often the server saves the world state to an in-memory database
- **Backup Interval** — How often the server writes the in-memory database to the `world.db` file on disk

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Adjust intervals</b><br>
   Adjust the values in the following fields (in seconds):

   | Field | Default | Description |
   |-------|---------|-------------|
   | **Save Time Interval** | `600` (10 minutes) | Saves the world state to the in-memory database |
   | **Backup Interval** | `900` (15 minutes) | Writes the database to the `world.db` file |

4. <b>Restart the server</b><br>
   Save the settings and restart your server.

:::: tip Tip
Lower values mean more frequent saves and less data loss in case of a crash, but may affect performance. The default values are recommended for most servers.
::::
