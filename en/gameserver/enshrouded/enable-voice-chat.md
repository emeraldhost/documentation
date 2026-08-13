---
description: Enable voice chat on an Enshrouded server
---

# How to Enable Voice Chat on Your Enshrouded Server

Enshrouded comes with its own voice chat. On a server it is **disabled** by default and is enabled via the `enshrouded_server.json` file. There you also decide whether players only hear each other nearby or server-wide.

## Enable voice chat

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open enshrouded_server.json</b><br>
   Open the file `enshrouded_server.json` in the main directory.

4. <b>Turn on voice chat</b><br>
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

5. <b>Start the server</b><br>
   Save the file and start your server.

## Voice chat modes

| Value | Description |
|-------|-------------|
| `Proximity` | Only players near you can hear you (default) |
| `Global` | All players on the server can hear you |

:::: warning Warning
Changes to `enshrouded_server.json` are overwritten if the server is running when you save. Always stop the server before editing.
::::

:::: info Note
The `enableVoiceChat` and `voiceChatMode` keys have been available since Update 5 "Pact of the Flame" (version 0.8.0.0) from 28 January 2025. If they are missing from your file, simply add them yourself at the top level.
::::

:::: tip Tip
The dashboard only rewrites `name`, `slotCount`, `queryPort` and `gameSettingsPreset` on every start. Your voice chat settings therefore stay in place permanently.
::::

## In game

Once voice chat is active, players can mute their microphone, switch between push-to-talk and an open microphone and adjust the microphone input volume. On the **Social** page in the menu they can also lower the volume of individual players or mute them.

:::: tip Tip
Check the JSON file for syntax errors before starting the server – a single missing comma can cause the server to discard your settings.
::::

Since you are opening `enshrouded_server.json` for this change anyway, you can also [Change Server Password](change-server-password.md) or [Enable Text Chat](enable-text-chat.md) at the same time.
