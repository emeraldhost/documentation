---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Citadel Forged with Fire Server"
description: "Add an admin to a Citadel Forged with Fire server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Citadel Forged with Fire does **not** work with an admin list of SteamIDs but with an **admin password**: whoever logs in with that password in the game has admin rights. So you do not have to collect any IDs – you simply share the password with the people who should get admin rights.

> [!IMPORTANT]
> Out of the box every server uses the default password `citadel123`. Make sure to change it before your server is publicly reachable – otherwise anyone who knows this widely known password can grant themselves admin rights.

## Set the admin password

1. **Open the dashboard**\
   Open the **dashboard** of your server and switch to the **settings**.

2. **Enter the password**\
   Enter your desired password in the field for the **admin password**.

3. **Restart the server**\
   Save the change and restart your server so the new password is applied.

> [!CAUTION]
> **Set the password in the dashboard**
>
> The admin password is stored in `Game.ini` in the section `[/script/citadel.socialmanager]` under the value `Password=`. If your dashboard offers a field for it, your server can rewrite that value from the dashboard on startup – a change made directly in the file or in the game via `/admin_update <new password>` would then be overwritten again after the next restart. Therefore always set the admin password in the **dashboard** first and only use the file if there is no field for it there.

> [!WARNING]
> Anyone who knows the admin password has full admin rights on your server – including commands to kick, ban and delete characters. Only share it with people you trust, and use a different password than the join password of your server.

## Log in as an admin

1. **Join the server**\
   Join your server. See [Join Server](/tutorials/gameserver/citadel-forged-with-fire/join-server) for how to find it.

2. **Open the chat**\
   Open the chat window in the game.

3. **Log in**\
   Enter the following command together with your admin password:

   ```text
   /admin_login <password>
   ```

   > [!NOTE]
   > The command `/iamgod <password>` does the same thing – it is just an alternative name for the same command.

4. **Use your rights**\
   The admin commands are now available to you, for example `/who` for a list of all logged-in players.

## Give up admin rights

If you want to drop your admin rights for the current session, enter the following in the chat:

```text
/admin_logout
```

> [!NOTE]
> Admin rights apply per session. After a lost connection or a server restart you have to log in again with `/admin_login`.

## Use the Remote Console in the browser

As an alternative to the in-game chat you can run admin commands through the built-in Remote Console in your browser – handy when you are not in the game right now.

> [!CAUTION]
> **Allocate an additional port**
>
> The Remote Console needs its **own port**. Allocate an additional port for it in the **dashboard**. Without an allocated port the interface is not reachable from the outside.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the following file:

   ```text
   /Config/Game.ini
   ```

4. **Add the section**\
   Add the following section and set the additional port from your dashboard as `WebServerPort`:

   ```ini
   [/script/citadel.remoteconsole]
   WebServerPort=<additional port>
   WebServerUsername=<username>
   WebServerPass=<password>
   ```

5. **Start the server**\
   Save the file and start your server.

6. **Open the interface**\
   Open the IP address of your server together with the configured port in your browser:

   ```text
   http://<server IP>:<port>
   ```

   Log in with the credentials you set above. Use `list` or `help` to show the available commands.

> [!WARNING]
> If you do not set any credentials, the defaults built into the server apply. Therefore always set your own username and password before you expose the port.

> [!NOTE]
> **The configuration file looks cleaned up**
>
> On startup your server removes sections from the `.ini` that you have not modified. That is normal and not an error – your own entries are kept.

> [!NOTE]
> **Where is the configuration?**
>
> The folder `/Config/` and the path `/Citadel/Saved/Config/LinuxServer/` point to the same files. You can use either way.

> [!TIP]
> To learn which commands are available to you as an admin and how to remove players, see [Kick & Ban Players](/tutorials/gameserver/citadel-forged-with-fire/kick-ban-players).
