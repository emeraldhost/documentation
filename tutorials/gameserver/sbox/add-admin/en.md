---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your s&box Server"
description: "Add an admin to an s&box server"
tags: []
date: "2026-07-31"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

On an s&box server you grant admin rights through the file `users.json`. What you enter is the player's **SteamID64** – a 17-digit number starting with `7656`.

> [!TIP]
> Here you can find a guide on how to find your [SteamID64](/tutorials/gameserver/steamid64-find-out).

## Add an admin

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open users.json**\
   Open the following file. If it does not exist yet, create it:

   ```text
   /config/users.json
   ```

4. **Add the player**\
   The file contains a list of players. Enter the SteamID64 and the permissions you want to grant:

   ```json
   [
     {
       "SteamId": "76561198012345678",
       "Claims": [ "admin" ],
       "Name": "Example player"
     }
   ]
   ```

5. **Start the server**\
   Save the file and start your server.

## Structure of the file

| Field | Meaning |
|-------|---------|
| `SteamId` | SteamID64 of the player. It determines who receives the permissions. |
| `Claims` | List of permissions assigned to the player |
| `Name` | A label for your own reference – it has no effect on the permissions |

Additional admins are added as further entries in the same list, separated by a comma:

```json
[
  {
    "SteamId": "76561198012345678",
    "Claims": [ "admin" ],
    "Name": "Player 1"
  },
  {
    "SteamId": "76561198087654321",
    "Claims": [ "admin" ],
    "Name": "Player 2"
  }
]
```

> [!WARNING]
> The file has to be valid JSON. A single missing or extra comma is enough to make the entire list unreadable, and nobody will receive admin rights. Therefore check the file with a JSON formatter like [JSONLint](https://jsonlint.com/) after editing.

## Which claims are there?

The entries under `Claims` are free-form text values. Which of them actually do anything is decided by the game mode running on your server.

> [!IMPORTANT]
> The official sandbox mode (`facepunch.sandbox`) only evaluates the claim `admin`. Among other things it unlocks kicking and banning in-game as well as cleaning up the world. The official documentation shows examples such as `kick`, `ban` or `restart` – those are purely illustrative and have no effect in sandbox mode. Therefore use `"Claims": [ "admin" ]`.

> [!NOTE]
> If you run a community game mode, check its documentation for the claims it expects. You can also give a player several claims at once: `"Claims": [ "admin", "moderator" ]`.

## Changes while the server is running

The server watches the file `users.json` and applies changes to it without a restart.

> [!WARNING]
> That watcher is only set up if the file already existed when the server started. If you create `users.json` for the first time while the server is running, you have to restart it once. After that, saving the file is enough.

> [!NOTE]
> The permissions from `users.json` only apply on a dedicated server like yours. When playing through a locally hosted session, the host is always the admin instead.

> [!TIP]
> To learn how to remove players from your server as an admin, see [Kick & Ban Players](/tutorials/gameserver/sbox/kick-ban-players).
