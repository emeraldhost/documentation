---
description: Set up administrators on a FiveM server
---

# How to Add an Admin on Your FiveM Server

A FiveM server has two permission systems that work independently of each other:

- **txAdmin admins** — access to the txAdmin web interface and to the txAdmin in-game menu.
- **ACE permissions** in the `server.cfg` — they define who is allowed to run which server and script commands.

:::: info Note
The two systems are completely separate. A txAdmin admin does **not** automatically get ACE permissions on the server — and the other way around. If a player needs both, you have to add them in both systems.
::::

## Option 1: Create an admin in txAdmin

txAdmin is already included in FXServer. To start it, the **txAdmin** field in the **Settings** of your server dashboard has to be set to `1`.

The first admin (the **Master admin**) is created during the initial txAdmin setup and is linked to a Cfx.re account — the procedure is described under [Enable txAdmin](enable-txadmin.md). Every additional admin is created afterwards in the **Admin Manager**.

1. <b>Open txAdmin</b><br>
   Open the txAdmin web interface and log in.

2. <b>Open the Admin Manager</b><br>
   Click **Admins** in the top navigation. This takes you to the **Admin Manager** page.

   :::: info Note
   You can only open this entry if your account is the Master admin or holds the `all_permissions` or `manage.admins` permission. Otherwise it is greyed out.
   ::::

3. <b>Create a new admin</b><br>
   Click **Add** in the top right corner. The **New Admin** window opens.

4. <b>Enter the details</b><br>
   Fill in the fields:

   | Field | Meaning |
   |-------|---------|
   | **Username** | Required. The admin's login name in txAdmin. |
   | **Cfx.re ID** | Optional. The admin's username on the [Cfx.re forum](https://forum.cfx.re/). Required if the admin should log in using the Cfx.re button. |
   | **Discord ID** | Optional. The admin's Discord User ID. |

5. <b>Set the permissions</b><br>
   Below that, tick the boxes under **Permissions** for the rights the admin should receive.

6. <b>Save</b><br>
   Click **Save**. txAdmin then shows a temporary password (*Please copy the following temporary password*). Copy it and pass it on to the admin — they will be prompted to change it on their first login.

:::: warning Warning
Admins are stored in the `txData/admins.json` file. Do not edit it via SFTP, use the Admin Manager instead.
::::

### Available permissions

| Permission | Meaning |
|------------|---------|
| `all_permissions` | Full access. Setting this removes all other permissions. |
| `manage.admins` | Create, edit and remove admin accounts |
| `settings.view` | View settings (no tokens) |
| `settings.write` | Change settings |
| `console.view` | View console |
| `console.write` | Run console commands |
| `control.server` | Start, stop and restart the server |
| `announcement` | Send announcements |
| `commands.resources` | Start and stop resources |
| `server.cfg.editor` | Read and write the `server.cfg` |
| `txadmin.log.view` | View the txAdmin log |
| `server.log.view` | View server logs |
| `menu.vehicle` | Spawn and fix vehicles |
| `menu.clear_area` | Reset a world area |
| `menu.viewids` | Show player IDs in-game |
| `players.direct_message` | Send direct messages to players |
| `players.whitelist` | Whitelist a player |
| `players.warn` | Warn a player |
| `players.kick` | Kick a player |
| `players.ban` | Ban and unban players |
| `players.freeze` | Freeze a player |
| `players.heal` | Heal yourself or everyone |
| `players.playermode` | Toggle NoClip, God Mode or Superjump |
| `players.spectate` | Spectate a player |
| `players.teleport` | Teleport yourself or a player |
| `players.troll` | Use the troll menu |
| `players.remove_ids` | Remove a player's IDs and HWIDs from the database |

:::: tip Tip
Only grant the permissions that are actually needed. An admin can, for example, view the console and kick players without being allowed to restart the server.
::::

### Using the in-game menu

You open the txAdmin menu in-game with the command `/tx` or `/txadmin`. Alternatively you can assign a key under `Game Settings > Key Bindings > FiveM` for **(txAdmin) Menu: Open Main Page**.

:::: warning Warning
For an admin to be able to open the menu in-game, their txAdmin account needs either the **Discord ID** or the **Cfx.re ID** attached to it. Without one of these identifiers they will not get access to the menu.
::::

:::: info Note
If nothing happens when you use `/tx`, the menu is most likely disabled. If you get a red error message instead, you can type `/txAdmin-reauth` in the chat to retry the authentication.
::::

## Option 2: ACE permissions in the server.cfg

The ACE system (*Access Control Entries*) of FXServer controls who is allowed to run which commands. It consists of two building blocks:

- **Principal** — who: a group (e.g. `group.admin`) or a single player (`identifier.license:...`)
- **Object** — what: usually a command written as `command.<name>`

Commands that a resource registers as *restricted* via `RegisterCommand` can only be used by a player if the matching `command.<name>` object is allowed for them.

### The most important commands

| Command | Function |
|---------|----------|
| `add_ace [principal] [object] [allow/deny]` | Adds an entry to the access control list |
| `add_principal [child_principal] [parent_principal]` | Makes a principal inherit from another one (e.g. player → group) |
| `remove_ace [principal] [object] [allow/deny]` | Removes an entry from the access control list |
| `remove_principal [child_principal] [parent_principal]` | Removes an inheritance entry |
| `test_ace [principal] [object]` | Tests whether a principal may access an object |

### Finding the identifier

For `add_principal` you need the player's identifier. FiveM knows these types:

| Type | Provider |
|------|----------|
| `license` | Rockstar Online Services (hash) |
| `license2` | Rockstar Online Services (hash). The ROS license for Steam users, it can have the same value as `license`. |
| `steam` | Steam ID (hex) |
| `discord` | Discord User ID |
| `fivem` | Cfx.re User ID |
| `ip` | IPv4 address |

There are two ways to get a player's identifier:

- **Via txAdmin** — Open the **Players** page, click the player and switch to the **IDs** tab in the window. All known identifiers are listed there.
- **Via the console** — Run the command `status`. It lists all connected players with their primary identifier, server ID, name, endpoint and ping. The command is provided by the **rconlog** resource — if it is not running, the command is not available.

:::: info Note
If your server runs with txAdmin, you enter commands such as `status` in the **Live Console** of the txAdmin web interface. Without txAdmin you use the console in your server dashboard.
::::

:::: info Note
The `steam:` identifier is only returned if a **Steam Web API Key** is set. You can find the field for it in the **Settings** of your server dashboard.
::::

### Adding an admin to the server.cfg

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open server.cfg</b><br>
   Open the `server.cfg` your server executes on startup. Where it is located depending on your txAdmin setup is explained in the guide [Set Port](set-port.md).

4. <b>Add the group and the admin</b><br>
   Add the following lines. This is also how the block looks in the example configuration by Cfx.re — you only replace the identifier with your own:

   ```
   add_ace group.admin command allow
   add_ace group.admin command.quit deny
   add_principal identifier.license:YOUR_IDENTIFIER group.admin
   ```

   The first line allows the group `group.admin` to use every command, the second one takes the `quit` command (shutting down the server) back out. The third line makes a specific player a member of the group.

   :::: info Note
   The identifier is always prefixed with `identifier.`. In the Cfx.re documentation a complete entry looks like this, for example: `add_principal identifier.steam:110000112345678 group.admin`. The same works with `identifier.discord:...`, `identifier.fivem:...` and `identifier.license:...`.
   ::::

5. <b>Add more admins</b><br>
   For every additional admin you add another `add_principal` line:

   ```
   add_principal identifier.license:SECOND_IDENTIFIER group.admin
   add_principal identifier.license:THIRD_IDENTIFIER group.admin
   ```

6. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
You can also edit the `server.cfg` directly via the **CFG Editor** in the txAdmin web interface. This requires the `server.cfg.editor` permission.
::::

:::: info Note
On startup the dashboard rewrites some lines of the `server.cfg` — among them `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` and `sv_maxclients`. Your `add_ace` and `add_principal` lines are not affected and stay as they are.
::::

:::: tip Tip
If your admin list gets longer, you can move it into a separate file (e.g. `permissions.cfg`) and load it from the `server.cfg` with `exec permissions.cfg`. The path is relative to the server data directory.
::::

:::: danger Important
`add_ace group.admin command allow` allows **every** command — including the ones that can shut down or reconfigure your server. Only add people you fully trust, and create a [Backup](create-backup.md) beforehand.
::::

## Testing permissions

You can check whether an entry works in the console — with txAdmin in the **Live Console**, without txAdmin in the console of your dashboard:

```
test_ace identifier.license:YOUR_IDENTIFIER command.quit
```

The command returns whether the principal is allowed to access the given object.
