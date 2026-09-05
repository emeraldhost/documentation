---
slug: "send-chat-messages"
language: "en"
title: "How to Send Chat Messages on a The Bus Server"
description: "Send chat messages on a The Bus server"
tags: []
date: "2026-02-24"
visibility: "public"
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

As an admin you can send messages in the chat or send private messages to individual players.

## Send a chat message

Enter one of the following commands in the in-game chat:

```text
/say <message>
```

or:

```text
/send <message>
```

Both commands send a message to all players on the server.

## Send a private message

```text
/whisper <playername> <message>
```

The message is only visible to the specified player.

## All commands

| Command | Description |
|---------|-------------|
| `/say <message>` | Send message to all |
| `/send <message>` | Send message to all |
| `/whisper <player> <message>` | Send private message |

> [!TIP]
> These commands require Owner or Admin permissions.
