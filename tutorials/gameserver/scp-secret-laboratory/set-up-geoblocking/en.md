---
slug: "set-up-geoblocking"
language: "en"
title: "How to Set Up Geoblocking on Your SCP: Secret Laboratory Server"
description: "Set up geoblocking on a SCP: Secret Laboratory server"
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
short_title: "Set Up Geoblocking"
sort: 25
related: ["gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/set-server-password", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/read-server-log"]
---
With geoblocking, you decide from which countries players may join your server. You can either allow only certain countries or block individual countries. All settings for this are in the `config_gameplay.txt` file. You can find the basics of editing the configuration files in the [Edit configuration files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) guide.

> [!WARNING]
> The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.

## The geoblocking settings

In `config_gameplay.txt` you will find the `#Geoblocking` section. By default, it looks like this:

```text
#Geoblocking
#If your server is on the public list, please refer to Verified Server Rules for more details.
#Modes: none, whitelist, blacklist
geoblocking_mode: none

#If enabled, players on the whitelist are able to ignore geoblocking.
geoblocking_ignore_whitelisted: true

#ISO country codes, eg. PL, US, DE
geoblocking_whitelist:
 - AA
 - AB
 - AC

geoblocking_blacklist:
 - AA
 - AB
 - AC
```

| Setting | Meaning |
|---------|---------|
| `geoblocking_mode` | `none` (default) – geoblocking is off.<br>`whitelist` – only players from the countries in `geoblocking_whitelist` may join.<br>`blacklist` – players from the countries in `geoblocking_blacklist` are rejected, everyone else may join. |
| `geoblocking_ignore_whitelisted` | If `true` (default), players from your `UserIDWhitelist.txt` bypass geoblocking. |
| `geoblocking_whitelist` | List of allowed countries for the `whitelist` mode |
| `geoblocking_blacklist` | List of blocked countries for the `blacklist` mode |

You enter the countries as two-letter ISO country codes, e.g. `DE` for Germany, `AT` for Austria, `CH` for Switzerland, `PL` for Poland or `US` for the USA. Each country goes on its own line, indented by one space and preceded by a hyphen. The entries `AA`, `AB` and `AC` are only placeholders and must be replaced.

> [!NOTE]
> Only the list that matches the selected mode is used. In `whitelist` mode, `geoblocking_blacklist` therefore has no effect, and vice versa.

## Set up geoblocking

1. **Find out the game port**\
   Open the dashboard of your server and note the game port shown under **Overview**.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open the configuration file**\
   Open the following file – replace `<Port>` with your game port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Find the `#Geoblocking` section in it.

5. **Choose the mode**\
   Set `geoblocking_mode` to `whitelist` if you only want to allow certain countries, or to `blacklist` if you want to block certain countries:

   ```text
   geoblocking_mode: whitelist
   ```

6. **Enter the countries**\
   In the matching list, replace the placeholders `AA`, `AB` and `AC` with the country codes you want. You can add or remove as many lines as you like.

7. **Start the server**\
   Save the file and start your server via the dashboard.

> [!TIP]
> **Example**
>
> This is how you only allow players from Germany, Austria and Switzerland on your server:
>
> ```text
> geoblocking_mode: whitelist
>
> geoblocking_ignore_whitelisted: true
>
> geoblocking_whitelist:
>  - DE
>  - AT
>  - CH
> ```

> [!WARNING]
> With the `whitelist` mode, you also lock yourself out if you are currently in a country that is not on the list. It is best to add your own ID to `UserIDWhitelist.txt` and leave `geoblocking_ignore_whitelisted` set to `true` – then you can still get onto your server. You do not need to enable `enable_whitelist` for this.

## Exceptions to geoblocking

**Players on the whitelist:** If `geoblocking_ignore_whitelisted` is set to `true`, all players from `UserIDWhitelist.txt` may join regardless of their country. This lets you allow individual friends from abroad without opening up their whole country.

For the geoblocking exception it is enough to add the ID to `UserIDWhitelist.txt` in the same port folder (one ID per line, e.g. `76561198000000001@steam`). You do not need to enable `enable_whitelist` – if you leave it on `false`, all other players from allowed countries can still join.

> [!WARNING]
> The [Set up a whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) guide shows you the format of `UserIDWhitelist.txt`. If you only want the geoblocking exception, skip the step there that sets `enable_whitelist` to `true`. Otherwise, only players from `UserIDWhitelist.txt` can join.

**Northwood ban team:** The `config_remoteadmin.txt` file in the same port folder has the setting (default `true`):

```text
enable_banteam_bypass_geoblocking: true
```

This allows members of Northwood's official ban team to bypass your geoblocking. Leave this setting set to `true`.

> [!IMPORTANT]
> If your server is verified and visible on the public server list, Northwood's Verified Server Rules apply to geoblocking. The comment in `config_gameplay.txt` explicitly points this out. Check the rules before enabling geoblocking on a public server. You can find more about verification in the [Get your server verified](/tutorials/gameserver/scp-secret-laboratory/get-server-verified) guide.

## Detect rejected players

If a player tries to join from a blocked country, they are rejected and the server records the attempt in the console of the dashboard and in the server log, e.g.:

```text
Player 76561198000000001@steam (203.0.113.10) tried joined from blocked country US.
```

This lets you check whether your geoblocking works as intended. The [Read the server log](/tutorials/gameserver/scp-secret-laboratory/read-server-log) guide explains how to read the log.

> [!NOTE]
> Geoblocking is only checked when a player joins. Players who are already connected are not removed after a change – the new rules only apply once they reconnect.

## Further options

Geoblocking restricts access by country. If you want to restrict access to individual players, use the [whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist). The [Protect your server without a password](/tutorials/gameserver/scp-secret-laboratory/set-server-password) guide explains why there is no server password and which alternatives you have.
