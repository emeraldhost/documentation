---
slug: "troubleshoot-server"
language: "en"
title: "How to Troubleshoot Common Problems on Your Arma Reforger Server"
description: "Find and fix common problems on an Arma Reforger server – startup errors, server browser, versions, mods, crossplay, RCON and admin login"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Troubleshoot Problems"
sort: 13
related: ["gameserver/arma-reforger/read-server-log", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/enable-crossplay", "gameserver/arma-reforger/control-automatic-updates"]
---
If your Arma Reforger server does not start, does not show up in the server browser or players cannot join, the cause is usually one of a few typical problems. This guide shows you the most common problems, their cause and the matching solution.

> [!IMPORTANT]
> Create a [backup](/tutorials/gameserver/create-backup) before every change to your server. This way you can always return to the last working state.

## Check the logs first

Almost every problem leaves traces in the server output. Before you change anything, take a look at it:

- **Console**: In the dashboard you can see the server output live. The last lines before a crash or abort are usually the important ones.
- **Log files**: The complete logs are located in the `profile` folder in the root directory of your server. How to find and read them is shown in [Read Server Log](/tutorials/gameserver/arma-reforger/read-server-log).

> [!TIP]
> When you create a support ticket, attach the relevant log file right away – this helps the team help you much faster.

## Server does not start after a change to config.json

**Cause:** The `config.json` is no longer valid JSON – a single missing or extra comma, a missing bracket or a missing quotation mark is enough.

If the server starts but a setting has no effect, the spelling is often the cause: the server distinguishes between upper and lower case in the parameters in `config.json`. A key with the wrong spelling, e.g. `vonDisableUI` instead of `VONDisableUI`, is a different parameter for the server and does not work as intended.

**Solution:**

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Check config.json**\
   Open the file `config.json` in the root directory of your server and copy its content into a JSON formatter like [JSONLint](https://jsonlint.com/). The formatter shows you the line that contains the error.

4. **Fix the error**\
   Correct the reported spot and also check the spelling of the keys you changed. You can find the correct spelling in [Configure Server](/tutorials/gameserver/arma-reforger/configure-server).

5. **Start the server**\
   Save the file and start your server. Check in the console whether it now starts without errors.

> [!NOTE]
> Some values in `config.json` – e.g. server name, passwords, scenario ID, maximum number of players, visibility, third person and Battle-Eye – are overwritten by the dashboard with the values from the **Settings** on every server start. Always change these values in the dashboard, not in the file.

## Server is not shown in the server browser

**Cause:** In the settings, **Visible in Server Browser** is set to `false`. Also check in the console whether the start has finished before you look for the server in the list.

**Solution:**

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable visibility**\
   Set the **Visible in Server Browser** field to `true`.

4. **Restart the server**\
   Save the setting and restart your server. Wait until the server has fully started in the console, then refresh the server list in the game.

> [!TIP]
> Regardless of the server browser, your players can also join directly via IP and port. How this works is shown in [Join Server](/tutorials/gameserver/arma-reforger/join-server).

## Version mismatch when joining

**Cause:** Players get a message about a mismatching version when joining, or the server stays on an old version although the game has already been updated. Usually **Auto Update** is set to `0` in the settings – then the server is not updated on start.

**Solution:**

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Enable Auto Update**\
   Set the **Auto Update** field to `1`.

4. **Restart the server**\
   Save the setting and restart your server. The server is brought to the current version in the process.

You can find more about this in [Control Automatic Updates](/tutorials/gameserver/arma-reforger/control-automatic-updates).

## Mod download fails and the server does not start

**Cause:** A `modId` is misspelled or an entered `version` does not exist (anymore) in the Workshop. By default, every listed mod is required for the server to start – if it cannot be loaded, the server does not start.

**Solution:**

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Check mod entries**\
   Open the file `config.json` and compare the `modId` and `version` of each mod with the information in the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop). You can see which mod is affected in the console or in the [server log](/tutorials/gameserver/arma-reforger/read-server-log).

4. **Start the server**\
   Save the file and start your server.

### Mark optional mods

You can mark mods that your server can also run without as optional with `"required": false`. If such a mod cannot be loaded from the Workshop, the server automatically removes it from the list, writes a warning to the log and starts anyway.

> [!TIP]
> **Example**
>
> ```json
> "mods": [
>   {
>     "modId": "59655E11FDD04B97",
>     "name": "Raid on Saint Pierre",
>     "required": false
>   }
> ]
> ```

> [!WARNING]
> Only mark mods as optional that are not needed for your scenario. If, for example, the mod containing your workshop scenario is missing, the server cannot load the scenario.

### Bring mods to the latest version

If a mod has a fixed `"version"` in `config.json`, your server stays on exactly this mod version – even if a newer one has long been released in the Workshop. If you want to use the latest version, you have two options:

- **Update the version:** Enter the current version number from the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) – just as [Change Scenario](/tutorials/gameserver/arma-reforger/change-scenario) describes for workshop scenarios.
- **Leave out the version:** The `"version"` parameter is optional. If it is missing, the server automatically uses the latest version of the mod.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Adjust the mod version**\
   Open the file `config.json` and update the `"version"` of the mod in the `"mods"` section or remove the line completely.

   > [!TIP]
   > **Example**
   >
   > ```json
   > "mods": [
   >   {
   >     "modId": "596338F447D34E39",
   >     "name": "NightOps - Everon 1985"
   >   }
   > ]
   > ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – if you remove the last line of an entry, the comma in the line before it must go as well.

4. **Start the server**\
   Save the file and start your server.

How to add mods is shown in [Add Mods](/tutorials/gameserver/arma-reforger/add-mods).

## Console players cannot join

**Cause:** The dashboard enables crossplay automatically on every server start. If players on Xbox or PlayStation 5 still cannot join, the mods of your server can be the cause: not every mod is available on every platform.

**Solution:**

- Check in the [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) whether all mods of your server are available on your players' platform, and remove mods that are not.
- If in doubt, briefly test without mods whether console players can join then. This shows you whether the mods are the cause.
- Keep **Battle-Eye** enabled (`true`) in the settings. Without BattlEye, your server does not appear in the server browser on PlayStation 5.

You can find more about this in [Enable Crossplay](/tutorials/gameserver/arma-reforger/enable-crossplay).

## RCON does not work

**Cause:** RCON only starts if a valid password is set. The password must be at least 3 characters long and must not contain spaces – otherwise RCON does not start.

**Solution:**

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust RCON password**\
   Enter a password with at least 3 characters and without spaces in the **RCON Password** field, e.g. `MyRconPassword123`.

4. **Restart the server**\
   Save the setting and restart your server.

How to connect with RCON afterwards is shown in [Use RCON](/tutorials/gameserver/arma-reforger/use-rcon).

## Admin login with #login fails

**Cause:** The admin password does not support spaces. If the **Admin Password** field contains a space, logging in with `#login` does not work.

**Solution:**

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Adjust admin password**\
   Enter a password without spaces in the **Admin Password** field, e.g. `MyAdminPassword123`.

4. **Restart the server**\
   Save the setting and restart your server.

How to log in as admin afterwards is shown in [Become Admin](/tutorials/gameserver/arma-reforger/become-admin).

> [!TIP]
> Players whose SteamID64 is listed in the `"admins"` list in `config.json` do not need the admin password to log in with `#login`. How to add them is shown in [Add Admin](/tutorials/gameserver/arma-reforger/add-admin).

## Server shuts down when the backend connection is lost

**Cause:** If the server loses the connection to the Arma Reforger backend, it shuts down automatically by default. This is triggered by errors in the so-called room requests – the server's requests to the backend.

**Solution:** With the `disableServerShutdown` parameter in the `"operating"` section, you prevent the server from shutting down in this case.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Add parameter**\
   Open the file `config.json`. If there is no `"operating"` section yet, add it at the top level – e.g. directly after the `"game"` section, separated by a comma:

   ```json
   "operating": {
     "disableServerShutdown": true
   }
   ```

   If the `"operating"` section already exists, only add the line `"disableServerShutdown": true` there.

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> This setting only applies to connection problems with the backend. For other causes, e.g. a corrupted `config.json`, the server still shuts down.

## Wrong player count in the server browser

**Cause:** If the player count shown in the server browser differs from the actual one, the `lobbyPlayerSynchronise` parameter in the `"operating"` section may be set to `false`. When it is enabled, the server regularly reports the list of connected players to the backend – exactly this fixes the discrepancy between the real and the reported player count.

**Solution:** The parameter is enabled by default. This is how you check whether it has been switched off in your `config.json`:

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Check lobbyPlayerSynchronise**\
   Open the file `config.json` and check whether the value `"lobbyPlayerSynchronise": false` is set in the `"operating"` section. If so, set it to `true` or remove the line.

   > [!TIP]
   > **Example**
   >
   > ```json
   > "operating": {
   >   "lobbyPlayerSynchronise": true
   > }
   > ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

4. **Start the server**\
   Save the file and start your server.

## Server is overloaded or lagging

**Cause:** Many players, AI units, large view distances or extensive mods can put a heavy load on your server. The result is stuttering, delays or a low server FPS value.

**Solution:** How to reduce the load – e.g. via **Max FPS**, view distances or an AI limit – is shown in [Improve Performance](/tutorials/gameserver/arma-reforger/improve-performance).
