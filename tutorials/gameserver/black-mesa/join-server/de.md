---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Black Mesa Server bei"
description: "Einem Black Mesa Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["black-mesa"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/black-mesa/add-admin", "gameserver/black-mesa/add-mods", "gameserver/black-mesa/create-backup", "gameserver/black-mesa/kick-ban-players"]
---

Black Mesa kennt kein Matchmaking und keinen Lobby-Zwang. Du verbindest Dich direkt mit Deinem Server – über die Entwicklerkonsole, über die Steam-Favoriten oder über den Serverbrowser im Spiel.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Black Mesa nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Ports wie `27005`, die in allgemeinen Source-Anleitungen auftauchen, sind lokale Client-Ports Deines Spiels und dürfen nicht als Serveradresse verwendet werden.

## Entwicklerkonsole aktivieren

Die Konsole ist in Black Mesa standardmäßig deaktiviert.

1. **Black Mesa starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Optionen öffnen**\
   Öffne im Hauptmenü die **Optionen**.

3. **Konsole aktivieren**\
   Aktiviere dort die Einstellung **Entwicklerkonsole** (**Developer Console**).

## Über die Spielkonsole verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server.

1. **Konsole öffnen**\
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. **Verbinden**\
   Gib folgenden Befehl ein:

   ```text
   connect IP:Port
   ```

   > [!TIP]
   > **Beispiel**
   >
   > Zeigt Dir die Verwaltung die IP `123.45.67.89` und den Game Port `28015`, lautet der Befehl:
   >
   > ```text
   > connect 123.45.67.89:28015
   > ```
   >
   > Setze hier immer die Werte aus Deiner eigenen Verwaltung ein.

## Über die Steam-Favoriten

Hinterlegst Du Deinen Server in Steam, findest Du ihn dauerhaft wieder.

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Game Port Deines Servers ein und bestätige.

5. **Beitreten**\
   Wähle den Server aus und verbinde Dich. Der Server erscheint anschließend auch im Spiel im Favoriten-Bereich.

## Über den Serverbrowser im Spiel

1. **Serverliste öffnen**\
   Wähle im Hauptmenü **Play Online**. Black Mesa öffnet daraufhin die Serverliste.

2. **Server suchen**\
   Suche über das Suchfeld nach dem Namen Deines Servers oder wechsle in den Reiter **Favoriten**, wenn Du den Server zuvor in Steam hinterlegt hast.

> [!WARNING]
> Damit Dein Server in der öffentlichen Liste auftaucht, muss er erreichbar und gestartet sein – und je nach Konfiguration einen gültigen Login-Token besitzen (siehe unten). Die Direktverbindung über die Konsole funktioniert unabhängig davon.

> [!NOTE]
> **Server erscheint nicht in der öffentlichen Serverliste?**
>
> Ohne gültigen Steam Game Server Login Token (GSLT) wird ein Source-Server unter Umständen nicht in der öffentlichen Serverliste geführt. Einen Token erstellst Du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) – dort gibst Du die App-ID von Black Mesa an. Trage den Token anschließend in der **Verwaltung** Deines Servers im Feld für den **GSL Token** ein und starte den Server neu. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Game Port funktioniert auch ohne Token.

> [!TIP]
> Wie Du Dir auf Deinem Server Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/black-mesa/add-admin).
