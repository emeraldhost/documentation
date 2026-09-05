---
slug: "enable-voice-chat"
language: "en"
title: "How to Enable Voice Chat on Your Enshrouded Server"
description: "Enable voice chat on an Enshrouded server"
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
short_title: "Enable Voice Chat"
sort: 9
related: ["gameserver/enshrouded/download-savegame", "gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players"]
---

Enshrouded comes with its own voice chat. On a server it is **disabled** by default and is enabled via the `enshrouded_server.json` file. There you also decide whether players only hear each other nearby or server-wide.

## Enable voice chat

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open enshrouded_server.json**\
   Open the file `enshrouded_server.json` in the main directory.

4. **Turn on voice chat**\
   Set the `enableVoiceChat` key to `true` and choose the desired mode in `voiceChatMode`. Both keys sit at the **top level** of the file – right next to `name` and `gameSettingsPreset`, and **not** inside the `gameSettings` section:

   ```json
   {
       "name": "Enshrouded Server",
       "saveDirectory": "./savegame",
       "logDirectory": "./logs",
       "voiceChatMode": "Proximity",
       "enableVoiceChat": true,
       "enableTextChat": false,
       "gameSettingsPreset": "Default"
   }
   ```

   This excerpt shows only part of the file – further keys such as `userGroups` and `gameSettings` sit in between and below. Only change the `enableVoiceChat` and `voiceChatMode` lines and leave the rest untouched.

5. **Start the server**\
   Save the file and start your server.

## Voice chat modes

| Value | Description |
|-------|-------------|
| `Proximity` | Only players near you can hear you (default) |
| `Global` | All players on the server can hear you |

> [!WARNING]
> Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.

> [!NOTE]
> The `enableVoiceChat` and `voiceChatMode` keys have been available since Update 5 "Pact of the Flame" (version 0.8.0.0) from 28 January 2025. If they are missing from your file, simply add them yourself at the top level.

> [!TIP]
> The dashboard only rewrites `name`, `slotCount`, `queryPort` and `gameSettingsPreset` on every start. Your voice chat settings therefore stay in place permanently.

## In game

Once voice chat is active, players can mute their microphone, switch between push-to-talk and an open microphone and adjust the microphone input volume. On the **Social** page in the menu they can also lower the volume of individual players or mute them.

> [!TIP]
> Check the JSON file for syntax errors with a JSON formatter like [JSONLint](https://jsonlint.com/) before starting the server – a single missing comma can cause the server to discard your settings.

Since you are opening `enshrouded_server.json` for this change anyway, you can also [Change Server Password](/tutorials/gameserver/enshrouded/change-server-password) or [Enable Text Chat](/tutorials/gameserver/enshrouded/enable-text-chat) at the same time.
