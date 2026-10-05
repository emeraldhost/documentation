---
slug: "send-chat-messages"
language: "en"
title: "How to Send Chat Messages on a The Bus Server"
description: "Send chat messages and private messages on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Send Chat Messages"
sort: 18
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/spawn-bus", "gameserver/the-bus/teleport"]
---

You use the in-game chat of The Bus to write with the other players on your server. With commands, you can also send server messages to all players or private messages to individual players.

> [!NOTE]
> Enter messages and commands only in the in-game chat. On our servers, the console in the dashboard only shows the server output and does not accept any input – so messages cannot be sent from the dashboard.

> [!TIP]
> You need Owner or Admin permissions for the commands in this guide. To learn how to assign ranks, see [Add Admin](/tutorials/gameserver/the-bus/add-admin).

## How to Send a Message to All Players

Enter one of the following commands in the in-game chat and replace `<message>` with your text:

```text
/say <message>
```

or

```text
/send <message>
```

Both commands send the message to the chat.

## How to Send a Private Message

```text
/whisper <player> <message>
```

Replace `<player>` with the player's name. Only this player receives the message. `/list` shows you the names of all players on the server.

## Command Overview

| Command | Description |
|---------|-------------|
| `/say <message>` | Send a message to the chat |
| `/send <message>` | Send a message to the chat |
| `/whisper <player> <message>` | Send a private message to a player |
| `/list` | Show all players |

Use `/commands` to show all available commands.

## Highlighting in the Chat

Since Update 3.2 (Early Access), admins and moderators are highlighted in the chat. This way, the players on your server can recognize messages from admins and moderators right away.
