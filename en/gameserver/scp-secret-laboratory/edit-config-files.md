---
description: "Edit the configuration files on a SCP: Secret Laboratory server"
---

# How to Edit the Configuration Files on Your SCP: Secret Laboratory Server

On SCP: Secret Laboratory, the entire server configuration is handled through text files. This guide shows you where the files are located, which file is responsible for what, and how to make changes safely.

## Where are the configuration files?

All game configuration files are located in the following directory — replace `<Port>` with the game port of your server:

```
/.config/SCP Secret Laboratory/config/<Port>/
```

You can find the game port in the dashboard under **Overview**.

:::: warning Warning
The game port is assigned automatically. Because of this, multiple port folders can exist under `/.config/SCP Secret Laboratory/config/`, for example from a previous port assignment. The server only reads the folder whose name matches the current game port — changes made in an old port folder have no effect. Always check the current game port in the **Overview** of the dashboard before making changes.
::::

## Which file does what?

| File | Purpose |
|------|---------|
| `config_gameplay.txt` | Gameplay settings of the server, e.g. game rules and round behavior |
| `config_remoteadmin.txt` | Ranks and permissions — see [Assign ranks](assign-ranks.md) |
| `UserIDWhitelist.txt` | Whitelisted players — see [Set up whitelist](set-up-whitelist.md) |

:::: info Note
Plugin configurations are not stored in this directory. EXILED keeps its plugin configs under `/.config/EXILED/Configs/` — see the guide [Install EXILED plugins](install-exiled-plugins.md) for more details.
::::

## File format

Settings are written in the format `key: value`, one setting per line. Lines starting with `#` are comments and are ignored by the server:

```
# This line is a comment
friendly_fire: false
```

Only change the value after the colon and leave the key name untouched.

## Edit a configuration file

:::: danger Important
Always stop your server before editing a configuration file. This is the only way to make sure the server reliably applies your changes on the next start.
::::

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Navigate to the following directory — replace `<Port>` with your game port — and open the file you want to edit:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

5. <b>Make your changes</b><br>
   Adjust the values you want to change using the `key: value` format and save the file.

6. <b>Start the server</b><br>
   Start your server via the dashboard. The changes only take effect with this start.

:::: info Note
There is no hot-reload — changes to the configuration files are only applied after a restart via the dashboard.
::::
