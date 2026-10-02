---
slug: "set-server-password"
language: "en"
title: "How to Protect Your SCP: Secret Laboratory Server Without a Server Password"
description: "Restrict access to a SCP: Secret Laboratory server without a built-in server password"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Server Password"
sort: 17
related: ["gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/set-up-geoblocking", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/join-server"]
---
SCP: Secret Laboratory has no built-in server password. There is no entry for it in any configuration file, and you cannot set a password in the dashboard either. If you want to control who can join your server, use the whitelist instead. This guide shows you which options you have and what they do.

> [!WARNING]
> The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## Whitelist instead of a password

The whitelist is the real replacement for a server password: only players whose ID you add can join. Everyone else is rejected.

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Enable the whitelist**\
   In the file `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`, set the `enable_whitelist` entry to `true`:

   ```text
   enable_whitelist: true
   ```

5. **Add players**\
   In the file `/.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt`, add each allowed ID on its own line, e.g.:

   ```text
   76561198000000001@steam
   ```

   > [!TIP]
   > Add your own ID as well, otherwise you will lock yourself out.

6. **Start the server**\
   Save both files and start your server via the dashboard.

   > [!NOTE]
   > Later changes to the whitelist only take effect after restarting the server.

You can find all details, e.g. on Discord IDs and comments in the list, in the [Set up a whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) guide.

## Additionally filter by country

As an additional filter, you can allow or block connections by country of origin – you can find out how in the [Set up geoblocking](/tutorials/gameserver/scp-secret-laboratory/set-up-geoblocking) guide.

## Hide the server from the server list

An unverified server never appears in the public server list. Your server is only shown there after it has been [verified](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

If your server is verified and you still want to hide it from the list, enter the following command in the console of the dashboard:

```text
!private
```

To show the server in the list again, enter the following command:

```text
!public
```

> [!IMPORTANT]
> Hiding does not protect your server. Anyone who knows the IP address and port can still join via **Direct Connect** (see [Join the server](/tutorials/gameserver/scp-secret-laboratory/join-server)). Only the whitelist actually restricts access.

## Password plugins

A join password can only be added via a plugin. We recommend the whitelist instead, as it works without additional plugins.

> [!NOTE]
> If you use your own plugin or modification that restricts access to your server (other than the whitelist), you must mark this in `config_gameplay.txt` on a verified server (see the Verified Server Rules):
>
> ```text
> server_access_restriction: true
> ```
>
> If a plugin provides its own whitelist instead, set:
>
> ```text
> custom_whitelist: true
> ```
>
> These entries only mark your server in the public server list. If your server is not verified, you can ignore these entries.

## Not a join password: override_password

> [!WARNING]
> The file `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` contains the entry `override_password`. This is **not** a password for joining, but a login for the [Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin) that grants the rank set in `override_password_role`. Northwood itself explicitly advises against it in the file and recommends assigning ranks by ID instead (see [Assign ranks](/tutorials/gameserver/scp-secret-laboratory/assign-ranks)). So leave the entry at its default value:
>
> ```text
> override_password: none
> ```
