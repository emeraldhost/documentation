---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Kerbal Space Program Server"
description: "Spieler auf einem Kerbal Space Program Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame", "gameserver/kerbal-space-program/join-server"]
---

Spieler entfernst Du auf einem DarkMultiPlayer-Server über Befehle – entweder in der **Konsole** Deiner Verwaltung oder direkt im Spiel, wenn Du Admin bist. Angegeben wird immer der **DMP-Spielername**, nicht die SteamID64.

> [!WARNING]
> In der Konsole der Verwaltung brauchen alle Befehle einen führenden Schrägstrich. Text ohne `/` wird als Chatnachricht an alle verbundenen Spieler gesendet.

> [!NOTE]
> Um die Befehle im Spiel zu nutzen, benötigst Du Adminrechte. Siehe [Admin hinzufügen](/tutorials/gameserver/kerbal-space-program/add-admin). Im Kanal `#Server` des DMP-Chats gibst Du die Befehle dann **ohne** `/` ein.

## Spieler kicken

```text
/kick <Spielername> [Grund]
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Grund ist optional und wird dem Spieler angezeigt.

> [!TIP]
> Die Namen der aktuell verbundenen Spieler zeigt Dir der Befehl `/listclients`.

## Spieler bannen

Ein Bann ist dauerhaft – DarkMultiPlayer kennt keine zeitlich begrenzten Sperren. Es gibt drei voneinander unabhängige Arten:

| Befehl | Wirkung |
|--------|---------|
| `/ban <Spielername> [Grund]` | Sperrt den Spielernamen |
| `/banip <IP-Adresse> [Grund]` | Sperrt die IP-Adresse |
| `/bankey <Öffentlicher Schlüssel> [Grund]` | Sperrt den Schlüssel des Spielers |

> [!IMPORTANT]
> Die drei Bann-Arten wirken getrennt voneinander. Ein Bann des Spielernamens hindert niemanden daran, mit einem anderen Namen zurückzukommen. Für eine zuverlässige Sperre nutzt Du zusätzlich `/bankey`.

> [!NOTE]
> **Öffentlichen Schlüssel finden**
>
> Den Schlüssel eines Spielers findest Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) in der Datei:
>
> ```text
> /Universe/Players/<Spielername>.txt
> ```

## Bann-Listen

Alle Sperren landen in je einer Datei im Verzeichnis `/Config/` – eine Zeile pro Eintrag:

| Datei | Inhalt |
|-------|--------|
| `banned-players.txt` | Gesperrte Spielernamen |
| `banned-ips.txt` | Gesperrte IP-Adressen |
| `banned-keys.txt` | Gesperrte öffentliche Schlüssel |

## Bann aufheben

Einen Befehl zum Entbannen gibt es bei DarkMultiPlayer nicht. Du entfernst den Eintrag direkt aus der jeweiligen Datei.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne die passende Datei im Verzeichnis `/Config/`:

   ```text
   /Config/banned-players.txt
   ```

4. **Zeile löschen**\
   Entferne die Zeile mit dem Eintrag und speichere die Datei.

5. **Server starten**\
   Starte Deinen Server. Der Eintrag ist damit aufgehoben.

> [!WARNING]
> Die Bann-Listen werden nur beim Serverstart eingelesen und bei jeder Änderung komplett aus dem Speicher neu geschrieben. Bearbeitest Du die Dateien im laufenden Betrieb, werden Deine Änderungen überschrieben. Stoppe Deinen Server deshalb immer vorher.

## Weitere nützliche Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/help` | Alle verfügbaren Befehle anzeigen |
| `/listclients` | Verbundene Spieler anzeigen |
| `/countclients` | Anzahl der verbundenen Spieler anzeigen |
| `/connectionstats` | Verbindungsstatistik anzeigen |
| `/say <Text>` | Nachricht an alle Spieler senden |
| `/pm <Spielername> <Text>` | Private Nachricht an einen Spieler senden |
| `/dekessler` | Herrenlose Trümmerteile aus dem Orbit entfernen |
| `/nukeksc` | Alle Schiffe rund um das Kerbal Space Center entfernen |
| `/restart` | Server neu starten |

> [!IMPORTANT]
> `/nukeksc` und `/dekessler` löschen Schiffe unwiderruflich. Erstelle vorher ein [Backup](/tutorials/gameserver/kerbal-space-program/create-backup).
