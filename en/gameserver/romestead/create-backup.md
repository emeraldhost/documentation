---
description: Create a backup of a Romestead server
---

# How to Create a Backup of Your Romestead Server

Regular backups of your Romestead server protect you from data loss — whether due to a failed update, a corrupted world file or an accidentally regenerated world.

## When should you create a backup?

- Before updating the server version
- Before major changes to the configuration
- Before creating a new world
- Before cleaning up the world, for example demolishing large builds
- At regular intervals so you always have a safe state to return to

## Create a backup

You can find the exact process for creating, managing and restoring a backup in the general guide: [Create Backup](../create-backup.md).

:::: tip Save first
Run the `save` command in your server's **console** before creating the backup. This makes the server write the current state to disk in full, so your backup really contains everything.

```
save
```

The server is frozen briefly while this save runs. `quicksave` saves in the background and lets the server keep running instead – which is why `save` is the safe choice for a backup.
::::

:::: warning Caution
Stop your server before creating or restoring a backup. Romestead saves automatically every six minutes — a backup taken during operation can land in the middle of a save and end up incomplete.
::::

:::: info Note
The server additionally keeps its own rolling backup of your world and restores it automatically if the latest save cannot be loaded. This does not replace your own backup: it sits on the same server and only covers the previous save state.
::::

:::: info Note
If you only want to save the world itself, you can also download the world folder separately: [Download savegame](download-savegame.md).
::::

:::: tip Tip
Lock important backups (e.g. before major changes) so they cannot be overwritten by automatic backups. Also download especially important backups to your PC in case your backup limit is reached.
::::

:::: info Info
Automatic backups as well as restarts can be requested free of charge via a support ticket. The "Scheduled Tasks" feature is currently in development and will be released this year.
::::
