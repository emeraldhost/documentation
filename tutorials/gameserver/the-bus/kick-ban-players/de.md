---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf einem The Bus Server"
description: "Spieler auf einem The Bus Server kicken und bannen"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 15
related: ["gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

## Spielerliste anzeigen

Um alle Spieler auf dem Server anzuzeigen, gib folgenden Befehl ein:

```text
/list
```

## So kickst Du einen Spieler

```text
/kick <spielername>
```

Der Spieler wird sofort vom Server entfernt.

## So bannst Du einen Spieler

```text
/ban <spielername>
```

Der Spieler wird permanent gebannt und automatisch vom Server gekickt.

## So bannst Du einen Spieler temporär

```text
/tempban <spielername> <minuten>
```

**Beispiele:**

```text
/tempban SpielerName 60
/tempban SpielerName 1440
```

| Dauer | Minuten |
|-------|---------|
| 1 Stunde | `60` |
| 24 Stunden | `1440` |
| 7 Tage | `10080` |

## So entbannst Du einen Spieler

```text
/unban <spielername>
```

Alternativ kannst Du die Datei `TheBus/Saved/PlayerData.json` per [SFTP](/tutorials/gameserver/establish-sftp-connection) öffnen und den Wert `"banned"` auf `false` setzen:

```json
{
    "name": "SpielerName",
    "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "perms": "User",
    "banned": false,
    "unbanDate": "0001.01.01-00.00.00",
    "adminPasswordUsed": ""
}
```

Starte den Server anschließend neu.

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.

## So mutest Du einen Spieler

```text
/mute <spielername>
```

Der Spieler kann keine Nachrichten mehr im Chat senden.

## So entmutest Du einen Spieler

```text
/unmute <spielername>
```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Alle Spieler anzeigen |
| `/kick <spieler>` | Spieler vom Server kicken |
| `/ban <spieler>` | Spieler permanent bannen |
| `/tempban <spieler> <minuten>` | Spieler temporär bannen |
| `/unban <spieler>` | Spieler entbannen |
| `/mute <spieler>` | Spieler stummschalten |
| `/unmute <spieler>` | Stummschaltung aufheben |

> [!TIP]
> Diese Befehle erfordern Owner- oder Admin-Rechte.
