---
slug: "use-console"
language: "en"
title: "How to Use the Console of Your Game Server"
description: "Open the live console of your game server, follow its output and send commands directly to the server"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Console"
sort: 16
related: ["gameserver/set-up-scheduled-tasks", "gameserver/use-config-editor", "gameserver/view-metrics", "gameserver/establish-sftp-connection"]
---

In the **Konsole** (Console) of your server's dashboard you see live what your server outputs, and you can send commands directly to it. This lets you check whether your server starts cleanly, find error messages or run admin commands without being in the game yourself.

## Open the Live Console

Open your server's dashboard and switch to the **Konsole** (Console). There you find the **Live Konsole** (Live console) box with your server's current output.

You also see the **Live Konsole** (Live console) in your server's **Übersicht** (Overview). You can enter commands directly there as well.

> [!TIP]
> Use the icon at the top right of the **Live Konsole** (Live console) box to open the console in a separate window. This way you keep an eye on the output while you continue working in the dashboard.

## Send a Command

1. **Enter the command**\
   Click the **Befehl eingeben…** (Enter command…) input field of the **Live Konsole** (Live console) and type your command.

2. **Enter it without a slash**\
   Enter the command without a `/` at the beginning – just the command itself. If you hover over the "/" to the left of the input field, you see the hint **Befehle ohne Slash (/) eingeben – nur der Befehl** (Enter commands without a slash (/) – just the command).

3. **Send it**\
   Click the send button on the right. The command is sent to your server and the response appears in the console.

Which commands are available depends on the game. In Minecraft, for example, this command sends a message to all players:

```text
say The server restarts in 5 minutes
```

> [!NOTE]
> In the game you type many commands into the chat with a `/` in front, e.g. `/op`. In the console you leave out the `/` and only enter `op`.

## Dashboard Actions in the Console

Some areas of the dashboard send your changes to the console as a command, e.g. the **Spieler** (Players) page for Minecraft. If you make a player an operator there, you see a message like this in the console:

```text
System chat: Made <Name> a server operator
```

This lets you check in the console whether an action has reached your server. To learn more about operators, see [Minecraft Grant OP Rights](/tutorials/gameserver/minecraft/grant-op-rights).

> [!TIP]
> You don't have to enter commands that should run regularly by hand every time. With the **Befehl senden** (Send command) action you can run them automatically – to learn more, see [Set Up Scheduled Tasks](/tutorials/gameserver/set-up-scheduled-tasks).
