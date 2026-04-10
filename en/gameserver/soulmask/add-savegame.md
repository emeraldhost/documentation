---
description: Upload a savegame to a Soulmask server
---

# How to Upload a Savegame to Your Soulmask Server

You can transfer your local savegame to your server and continue playing there.

## Find your savegame

You can find your Soulmask savegames on your PC at:

```
%LocalAppData%\WS\<SteamID>\2646460\AutoGames\<InviteCode>\
```

Replace `<SteamID>` with your Steam ID and `<InviteCode>` with the invite code of your world.

## Upload the savegame

:::: warning Warning
Stop your server before uploading files, otherwise they will be overwritten by the server.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Upload world data</b><br>
   Upload the `world.db` file to the following directory on the server:

   ```
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. <b>Upload settings (optional)</b><br>
   If you want to transfer your gameplay settings as well, upload the `GameXishu.json` file to:

   ```
   /WS/Saved/GameplaySettings/
   ```

5. <b>Start the server</b><br>
   Start your server. Your savegame will now be loaded.

:::: warning Warning
Uploading files will overwrite any existing savegame on the server.
::::

:::: tip Tip
If your local settings file is named `GameXishu_2.json`, rename it to `GameXishu.json` before uploading.
::::
