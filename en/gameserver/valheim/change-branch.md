---
description: Change the branch on a Valheim server
---

# How to Change the Branch on Your Valheim Server

You can change the branch of your server to use an older version of Valheim.

## Available branches

| Branch | Description |
|--------|-------------|
| `public` | Official default branch |
| `default_old` | Last stable build before the latest version |
| `default_pre1_0` | Last stable build before Valheim 1.0 (version 0.221.12) |
| `default_preml` | Last stable build before the Mistlands update |
| `default_precta` | Last stable build before the Call-To-Arms update |
| `default_prebw` | Last stable build before the Bog Witch update |
| `default_preal` | Last stable build before the Ashlands update |

:::: info Note
You can find all available branches on [SteamDB](https://steamdb.info/app/896660/depots/).
::::

## Keep playing a world on the version before Valheim 1.0

The `default_pre1_0` branch lets you keep playing your world on the last version before Valheim 1.0. Your players also have to select the `default_pre1_0` branch in Steam, because Valheim 1.0 cannot connect to this version.

:::: warning Warning
If your server has already saved your world with Valheim 1.0, it cannot load that world on this branch and creates a new world instead. In this case, change the branch first and only then restore the backup from before the switch to 1.0, see [Backups from before Valheim 1.0](restore-automatic-backup.md#backups-from-before-valheim-1-0). If the server loads the backup while it is still on Valheim 1.0, it converts the world again the first time it saves.
::::

## Change branch

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter branch</b><br>
   Enter the desired branch in the **Steam Beta Branch** field.

   :::: tip Tip
   To return to the default branch, leave the field empty.
   ::::

4. <b>Reinstall the server</b><br>
   Click the **three-dot menu** of your server (next to the **Update** button) and select **Reinstall**.

:::: warning Warning
Hidden branches (e.g. `public-test`) cannot be selected.
::::
