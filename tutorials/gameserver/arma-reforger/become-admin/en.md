---
slug: "become-admin"
language: "en"
title: "How to Become an Admin on an Arma Reforger Server"
description: "Become an admin on an Arma Reforger server"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Become Admin"
sort: 4
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/download-savegame", "gameserver/arma-reforger/kick-ban-players"]
---

There are two ways to get admin rights on your Arma Reforger server: via an admin password or via your Steam64 ID.

## Set Admin Password

1. **Open dashboard**\
   Open your dashboard and select your Arma Reforger server.

2. **Set password**\
   Navigate to the settings and enter your desired password under `Admin Password`.

3. **Restart server**\
   Save the settings and restart the server.

> [!WARNING]
> **Important**
>
> The admin password must be at least 3 characters long and cannot contain spaces.

## Permanent Admins via Steam64 ID

Alternatively, you can permanently add players as admins so they don't need to log in each time.

1. **Open config**\
   Open the file `config.json` and find the `"admins"` entry in the `"game"` section.

2. **Add Steam64 IDs**\
   Add the Steam64 IDs of the desired admins:

    ```json
    "game": {
      "admins": [
        "76561198XXXXXXXXX",
        "76561198YYYYYYYYY"
      ]
    }
    ```

    > [!TIP]
    > Check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing – a single missing or extra comma is enough to prevent the server from starting.

3. **Restart server**\
   Save the changes and restart the server.

> [!TIP]
> You can find your Steam64 ID using our guide [Find your SteamID64](/tutorials/gameserver/steamid64-find-out).

## Log In as Admin In-Game

1. **Open chat**\
   Join your server and open the chat with the `/` key.

2. **Enter command**\
   Enter the following command:

    ```text
    #login YourAdminPassword
    ```

3. **Confirm login**\
   A confirmation message will appear upon successful login.

> [!NOTE]
> Use `#logout` to log out from admin status. Use `#roles` to check which permissions you currently have.

## Useful Admin Commands

| Command | Description |
|---------|-------------|
| `#login <password>` | Log in as admin |
| `#logout` | Log out from admin status |
| `#roles` | Show current permissions |
| `#players` | List all players with IDs |
| `#id` | Show your own player ID |
| `#restart` | Restart the running scenario |
| `#shutdown` | Shut down the server |
