---
description: Set up automatic backups on a Space Engineers server
---

# How to Set Up Automatic Backups on Your Space Engineers Server

Your server automatically saves the world at regular intervals and creates a backup each time. Here is how to set how often this happens.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set the interval</b><br>
   Enter the desired interval in minutes in the **Automatic Backup Interval** field — this is how often the server saves the world (default: `5`). After every successful save, the server creates a backup in the `/config/Saves/World/Backup/` folder.

4. <b>Restart the server</b><br>
   Save the settings and restart your server for the changes to take effect.

:::: warning Caution
With the value `0`, the server no longer saves the world automatically and therefore no longer creates automatic backups either. If the server crashes, everything that happened since the last save is lost.
::::

:::: info Note
The **Automatic Backup** option does **not** turn off automatic saving — even with `false`, the server keeps saving at the set interval. It sets the `EnableSaving` value, which Keen calls "Enable Saving from Menu". This value only controls whether saving via the menu is possible in a self-hosted game. Leave the option at its default value `true`.
::::

To learn how to restore your world from one of these backups and how many backups your server keeps, see [Restore an Automatic Backup](restore-automatic-backup.md).

:::: tip Tip
You can also create a manual backup at any time via the [backup function](../create-backup.md) in the dashboard.
::::
