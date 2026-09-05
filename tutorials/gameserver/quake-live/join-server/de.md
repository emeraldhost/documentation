---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Quake Live Server bei"
description: "Einem Quake Live Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/kick-ban-players"]
---

Quake Live kennt kein Matchmaking. Du verbindest Dich entweder direkt über die Konsole des Spiels mit IP-Adresse und Port oder Du suchst Deinen Server im Serverbrowser.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Quake Live nutzt für den Spielbetrieb und für Serverabfragen denselben Port – einen separaten **Query Port** gibt es nicht.

## Konsole im Spiel öffnen

Die Konsole ist der zuverlässigste Weg auf Deinen Server.

1. **Quake Live starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Konsole öffnen**\
   Drücke `~`, um die Konsole zu öffnen.

> [!NOTE]
> **Konsole öffnet sich nicht?**
>
> Die Konsolentaste liegt links neben der `1` – auf einer deutschen Tastatur ist das die `^`-Taste. Ob die Konsole verfügbar ist, steuert die Clientvariable `com_allowConsole`, die ab Werk auf `1` steht.

## Direkt über die IP verbinden

1. **Konsole öffnen**\
   Öffne im Spiel die Konsole.

2. **Verbinden**\
   Gib folgenden Befehl ein:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Beispiel**
   >
   > Zeigt Dir die Verwaltung die IP `123.45.67.89` und den Game Port `27043`, lautet der Befehl:
   >
   > ```text
   > connect 123.45.67.89:27043
   > ```
   >
   > Setze hier immer die Werte aus Deiner eigenen Verwaltung ein.

3. **Server betreten**\
   Nach dem Verbinden landest Du zunächst als Zuschauer im laufenden Spiel und kannst einem Team beitreten.

## Auf einen passwortgeschützten Server verbinden

Hast Du in der Verwaltung ein **Server Password** hinterlegt, musst Du es im Spiel setzen, bevor Du Dich verbindest.

1. **Passwort setzen**\
   Gib in der Konsole folgenden Befehl ein:

   ```text
   password DEINPASSWORT
   ```

2. **Verbinden**\
   Verbinde Dich anschließend wie gewohnt:

   ```text
   connect 123.45.67.89:27043
   ```

> [!NOTE]
> **Reservierte Plätze**
>
> Neben dem Serverpasswort kennt Quake Live reservierte Slots. Über `sv_privateClients` legst Du fest, wie viele Plätze reserviert bleiben, über `sv_privatePassword` das zugehörige Passwort. Spieler, die dieses Passwort mit `password` setzen, kommen auch dann auf den Server, wenn die regulären Plätze belegt sind.

## Über den Serverbrowser

1. **Serverliste öffnen**\
   Öffne im Hauptmenü die Serverliste.

2. **Server suchen**\
   Suche nach dem Namen, den Du in der Verwaltung als **Server Name** hinterlegt hast.

> [!WARNING]
> Damit Dein Server öffentlich gelistet wird, muss in der Verwaltung der **Server Type** auf `2` (Internet) stehen. `0` bedeutet Offline, `1` beschränkt den Server auf das lokale Netzwerk. Zusätzlich muss `sv_master "1"` gesetzt sein – nur dann meldet sich der Server beim Masterserver an und beantwortet Abfragen. Die Direktverbindung über die Konsole funktioniert unabhängig davon.

> [!TIP]
> Über die Servertags findest Du Deinen Server im Browser schneller wieder. Trage sie in `/baseq3/server.cfg` ein, zum Beispiel:
>
> ```text
> set sv_tags "classic, custom"
> ```
>
> Die Tags werden im Serverbrowser des Spiels als Filter angeboten.

> [!TIP]
> Wie Du Dir auf Deinem Server Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/quake-live/add-admin).
