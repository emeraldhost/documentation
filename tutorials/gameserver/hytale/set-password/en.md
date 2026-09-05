---
slug: "set-password"
language: "en"
title: "How to Set a Password on a Hytale Server"
description: "Set password on a Hytale server"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Password"
sort: 22
related: ["gameserver/hytale/kick-ban-players", "gameserver/hytale/pause-game-time", "gameserver/hytale/set-spawn-point", "gameserver/hytale/upload-world"]
---

> [!TIP]
> **Note**
>
> Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.

## How to Set a Password

1. **Stop the Server**\
   Stop your server via the dashboard.

2. **Open the Configuration File**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the `config.json` file in the root directory.

3. **Set the Password**\
   Find the `Password` setting and set your desired password:

   ```json
   "Password": "YourPassword123"
   ```

   > [!TIP]
   > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to stop the server from loading the configuration.

4. **Start the Server**\
   Start your server for the changes to take effect.

Players will now need to enter the password to join the server.

## How to Remove the Password

To remove the password, set the value to empty:

```json
"Password": ""
```

> [!TIP]
> **Note**
>
> A password is a simple alternative to the whitelist. You can share the password with friends without having to add each one to the whitelist.
