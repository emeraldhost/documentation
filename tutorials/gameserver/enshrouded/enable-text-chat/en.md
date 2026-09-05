---
slug: "enable-text-chat"
language: "en"
title: "How to Enable Text Chat on Your Enshrouded Server"
description: "Enable text chat on an Enshrouded server"
tags: []
date: "2026-08-13"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable Text Chat"
sort: 8
related: ["gameserver/enshrouded/create-backup", "gameserver/enshrouded/download-savegame", "gameserver/enshrouded/enable-voice-chat", "gameserver/enshrouded/join-server"]
---

Enshrouded comes with its own text chat. On a server it is **disabled** by default and is enabled via the `enableTextChat` key in the `enshrouded_server.json` file.

## Enable text chat

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open enshrouded_server.json**\
   Open the file `enshrouded_server.json` in the main directory.

4. **Turn on text chat**\
   Set the `enableTextChat` key to `true`. It sits at the **top level** of the file – right next to `name` and `gameSettingsPreset`, and **not** inside the `gameSettings` section:

   ```json
   {
       "name": "Enshrouded Server",
       "saveDirectory": "./savegame",
       "logDirectory": "./logs",
       "enableTextChat": true,
       "gameSettingsPreset": "Default"
   }
   ```

   This excerpt is shortened – your file contains further keys, including the `gameSettings` and `userGroups` sections further down. Only change the `enableTextChat` line and leave the rest untouched. Do not paste the excerpt over your file, or you will lose all your other settings.

5. **Start the server**\
   Save the file and start your server.

## Possible values

| Value | Description |
|-------|-------------|
| `true` | Text chat is active |
| `false` | Text chat is completely disabled (default) |

> [!WARNING]
> Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.

> [!NOTE]
> The `enableTextChat` key has been available since Update 5 "Pact of the Flame" (version 0.8.0.0) from 28 January 2025. If it is missing from your file, simply add it yourself at the top level.

> [!TIP]
> The dashboard only rewrites `name`, `slotCount`, `queryPort` and `gameSettingsPreset` on every start. Your text chat setting therefore stays in place permanently.

## In game

Once text chat is active, you will find the chat log on the **Social** page in the menu. Players can select individual players there and mute their messages.

> [!TIP]
> Check the JSON file for syntax errors with a JSON formatter like [JSONLint](https://jsonlint.com/) before starting the server – a single missing comma can cause the server to discard your settings.

Voice chat is controlled by its own keys. You can read how that works under [Enable Voice Chat](/tutorials/gameserver/enshrouded/enable-voice-chat).
