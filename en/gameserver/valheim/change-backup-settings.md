---
description: Change backup settings on a Valheim server
---

# How to Change the Backup Settings on Your Valheim Server

You can configure how often and how many backups the server creates.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Adjust backup settings</b><br>
   Adjust the following fields:

   | Field | Description | Default |
   |-------|-------------|---------|
   | **Backup Interval** | How often the server saves the world (in seconds). Despite its name, this is not the time between backups. | `1800` (30 minutes) |
   | **Backup Count** | Number of automatic backups to keep. The first backup follows the interval from **Backup Shorttime**, all further ones follow the interval from **Backup Longtime**. | `4` |
   | **Backup Shorttime** | Interval between the first automatic backups (in seconds) | `7200` (2 hours) |
   | **Backup Longtime** | Interval between the subsequent automatic backups (in seconds) | `43200` (12 hours) |

4. <b>Restart the server</b><br>
   Save the settings and restart your server.

:::: info Note
The server stores the automatic backups as separate folders in the directory `/.config/unity3d/IronGate/Valheim/worlds_local/`, right next to your world. To learn how to restore one of them, see [Restore an automatic backup](restore-automatic-backup.md).
::::
