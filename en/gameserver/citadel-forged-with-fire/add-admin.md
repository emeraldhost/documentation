---
description: Add an admin to a Citadel Forged with Fire server
---

# How to Add an Admin to Your Citadel Forged with Fire Server

Citadel Forged with Fire does **not** work with an admin list of SteamIDs but with an **admin password**: whoever logs in with that password in the game has admin rights. So you do not have to collect any IDs – you simply share the password with the people who should get admin rights.

:::: danger Important
Out of the box every server uses the default password `citadel123`. Make sure to change it before your server is publicly reachable – otherwise anyone who knows this widely known password can grant themselves admin rights.
::::

## Set the admin password

1. <b>Open the dashboard</b><br>
   Open the **dashboard** of your server and switch to the **settings**.

2. <b>Enter the password</b><br>
   Enter your desired password in the field for the **admin password**.

3. <b>Restart the server</b><br>
   Save the change and restart your server so the new password is applied.

:::: danger Set the password in the dashboard
The admin password is stored in `Game.ini` in the section `[/script/citadel.socialmanager]` under the value `Password=`. If your dashboard offers a field for it, your server can rewrite that value from the dashboard on startup – a change made directly in the file or in the game via `/admin_update <new password>` would then be overwritten again after the next restart. Therefore always set the admin password in the **dashboard** first and only use the file if there is no field for it there.
::::

:::: warning Warning
Anyone who knows the admin password has full admin rights on your server – including commands to kick, ban and delete characters. Only share it with people you trust, and use a different password than the join password of your server.
::::

## Log in as an admin

1. <b>Join the server</b><br>
   Join your server. See [Join Server](join-server.md) for how to find it.

2. <b>Open the chat</b><br>
   Open the chat window in the game.

3. <b>Log in</b><br>
   Enter the following command together with your admin password:

   ```
   /admin_login <password>
   ```

   :::: info Note
   The command `/iamgod <password>` does the same thing – it is just an alternative name for the same command.
   ::::

4. <b>Use your rights</b><br>
   The admin commands are now available to you, for example `/who` for a list of all logged-in players.

## Give up admin rights

If you want to drop your admin rights for the current session, enter the following in the chat:

```
/admin_logout
```

:::: info Note
Admin rights apply per session. After a lost connection or a server restart you have to log in again with `/admin_login`.
::::

## Use the Remote Console in the browser

As an alternative to the in-game chat you can run admin commands through the built-in Remote Console in your browser – handy when you are not in the game right now.

:::: danger Allocate an additional port
The Remote Console needs its **own port**. Allocate an additional port for it in the **dashboard**. Without an allocated port the interface is not reachable from the outside.
::::

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the following file:

   ```
   /Config/Game.ini
   ```

4. <b>Add the section</b><br>
   Add the following section and set the additional port from your dashboard as `WebServerPort`:

   ```ini
   [/script/citadel.remoteconsole]
   WebServerPort=<additional port>
   WebServerUsername=<username>
   WebServerPass=<password>
   ```

5. <b>Start the server</b><br>
   Save the file and start your server.

6. <b>Open the interface</b><br>
   Open the IP address of your server together with the configured port in your browser:

   ```
   http://<server IP>:<port>
   ```

   Log in with the credentials you set above. Use `list` or `help` to show the available commands.

:::: warning Warning
If you do not set any credentials, the defaults built into the server apply. Therefore always set your own username and password before you expose the port.
::::

:::: info The configuration file looks cleaned up
On startup your server removes sections from the `.ini` that you have not modified. That is normal and not an error – your own entries are kept.
::::

:::: info Where is the configuration?
The folder `/Config/` and the path `/Citadel/Saved/Config/LinuxServer/` point to the same files. You can use either way.
::::

:::: tip Tip
To learn which commands are available to you as an admin and how to remove players, see [Kick & Ban Players](kick-ban-players.md).
::::
