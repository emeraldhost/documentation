---
description: Restrict crossplay on a RuneScape Dragonwilds server
---

# How to Restrict Crossplay on Your RuneScape: Dragonwilds Server

Since the 1.0 update, your server is automatically a crossplay server. Players on PC, PlayStation 5, Xbox Series X|S and Nintendo Switch 2 can [join](join-server.md) together without you having to configure anything in the dashboard. If you want to limit your server to a single platform, you can optionally do so via SFTP in the configuration file.

:::: info Note
There is no crossplay field in the settings of the dashboard. The restriction is done exclusively via the `DedicatedServer.ini` file. If only a specific group of players should be able to join, you can additionally set a [server password](set-server-password.md).
::::

## Possible values

The `PlatformPolicy` setting defines which platform is allowed to join your server:

| Value | Meaning |
| ----- | ------- |
| `Crossplay` | All platforms can join (default) |
| `PC` | Only PC players can join |
| `PlayStation` | Only PlayStation players can join |
| `Xbox` | Only Xbox players can join |
| `Nintendo` | Only Nintendo Switch players can join |

## Restrict crossplay

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open configuration file</b><br>
   Open the following file:

   ```
   /RSDragonwilds/Saved/Config/LinuxServer/DedicatedServer.ini
   ```

4. <b>Enter PlatformPolicy</b><br>
   Under the `[/Script/Dominion.DedicatedServerSettings]` section, add the line `PlatformPolicy=` with the desired value from the table. If the line already exists, only change the value.

   :::: tip Example
   ```
   [/Script/Dominion.DedicatedServerSettings]
   PlatformPolicy=PC
   ```
   ::::

   :::: warning Warning
   Use exactly the spelling from the table. With an invalid value, the server will not start and the log shows the message `The [PlatformPolicy] value [...] is invalid. Valid values: ...` with the valid values. In this case, correct the value and restart the server.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
On startup, the dashboard only writes the values from the settings (Owner ID, names and passwords) to the file. Your `PlatformPolicy` line is kept.
::::

## Verify the setting

You can check whether the setting has been applied in the log of your server at `/RSDragonwilds/Saved/Logs/RSDragonwilds.log`:

- `Session crossplay set to [...]` – shows the active crossplay setting of your server
- `PlatformPolicy not set - defaulting to Crossplay` – no value is set, all platforms can join

## Re-open crossplay for everyone

Set the value back to `PlatformPolicy=Crossplay` or remove the line from the file and restart your server.

:::: tip Troubleshooting
If a player is rejected from your crossplay server with a crossplay error message, they have disabled crossplay in the settings of the game and need to enable it there again. In this case, the log of your server shows `PreLogin rejected crossplay-disabled client from a crossplay server`.
::::
