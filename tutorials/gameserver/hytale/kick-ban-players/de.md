---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf einem Hytale Server"
description: "Spieler auf einem Hytale Server kicken und bannen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken und bannen"
sort: 18
related: ["gameserver/hytale/item-loss-on-death", "gameserver/hytale/join-server", "gameserver/hytale/pause-game-time", "gameserver/hytale/set-password"]
---

Die folgenden Befehle gibst Du in die Konsole Deiner Verwaltung ein. Admins können sie auch im Spiel nutzen, dort mit vorangestelltem `/`. Wie Du Admin-Rechte vergibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/hytale/add-admin).

## So kickst Du einen Spieler

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   kick <Spielername>
   ```

Der Spieler muss dafür online sein. Er wird vom Server getrennt, kann aber sofort wieder beitreten.

## So bannst Du einen Spieler

```text
ban <Spielername> <Grund>
```

Den Grund kannst Du auch weglassen. Statt des Namens funktioniert auch die UUID des Spielers, und der Spieler muss nicht online sein. Der Bann gilt dauerhaft. Ist der Spieler gerade online, wird er sofort vom Server getrennt.

Beispiel:

```text
ban Spieler123 Griefing am Spawn
```

## So entbannst Du einen Spieler

```text
unban <Spielername>
```

Auch hier kannst Du statt des Namens die UUID angeben.

## Alle Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `kick <Spieler>` | Spieler vom Server kicken |
| `ban <Spieler> [Grund]` | Spieler dauerhaft bannen, optional mit Grund |
| `unban <Spieler>` | Spieler entbannen |

> [!NOTE]
> Gebannte Spieler speichert der Server in der Datei `bans.json` im Hauptverzeichnis. Auch Admins (OPs) kannst Du direkt bannen, ohne ihnen vorher die Rechte zu entziehen.
