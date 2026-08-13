---
description: Enable text chat on an Enshrouded server
---

# How to Enable Text Chat on Your Enshrouded Server

Enshrouded comes with its own text chat. On a server it is **disabled** by default and is enabled via the `enableTextChat` key in the `enshrouded_server.json` file.

## Enable text chat

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open enshrouded_server.json</b><br>
   Open the file `enshrouded_server.json` in the main directory.

4. <b>Turn on text chat</b><br>
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

5. <b>Start the server</b><br>
   Save the file and start your server.

## Possible values

| Value | Description |
|-------|-------------|
| `true` | Text chat is active |
| `false` | Text chat is completely disabled (default) |

:::: warning Warning
Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.
::::

:::: info Note
The `enableTextChat` key has been available since Update 5 "Pact of the Flame" (version 0.8.0.0) from 28 January 2025. If it is missing from your file, simply add it yourself at the top level.
::::

:::: tip Tip
The dashboard only rewrites `name`, `slotCount`, `queryPort` and `gameSettingsPreset` on every start. Your text chat setting therefore stays in place permanently.
::::

## In game

Once text chat is active, you will find the chat log on the **Social** page in the menu. Players can select individual players there and mute their messages.

:::: tip Tip
Check the JSON file for syntax errors before starting the server – a single missing comma can cause the server to discard your settings.
::::

Voice chat is controlled by its own keys. You can read how that works under [Enable Voice Chat](enable-voice-chat.md).
