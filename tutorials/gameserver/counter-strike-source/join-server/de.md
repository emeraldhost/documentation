---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Counter-Strike Source Server bei"
description: "Einem Counter-Strike Source Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-source"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/counter-strike-source/add-admin", "gameserver/counter-strike-source/add-mods", "gameserver/counter-strike-source/create-backup", "gameserver/counter-strike-source/kick-ban-players"]
---

Auf Deinen Counter-Strike Source Server kommst Du auf drei Wegen: über den **Serverbrowser im Spiel**, über die **Steam-Favoriten** oder per **Direktverbindung** in der Spielkonsole.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Counter-Strike Source nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Über den Serverbrowser im Spiel

1. **Counter-Strike Source starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serversuche öffnen**\
   Wähle im Hauptmenü **Find Servers**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favorites** und klicke auf **Add a Server**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:27015
   > ```
   >
   > Setze hier die IP-Adresse und den Game Port aus Deiner Verwaltung ein.

5. **Server beitreten**\
   Bestätige die Eingabe. Dein Server erscheint anschließend in der Favoritenliste und Du kannst ihn von dort auswählen und beitreten.

## Über die Steam-Favoriten

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Game Port Deines Servers ein und bestätige.

5. **Beitreten**\
   Wähle den Server aus und verbinde Dich. Der Server erscheint anschließend auch im Spiel unter **Find Servers** im Tab **Favorites**.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Counter-Strike Source standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. **Counter-Strike Source starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Einstellungen öffnen**\
   Öffne die **Optionen** und wechsle zu **Tastatur**.

3. **Konsole aktivieren**\
   Öffne **Erweitert** und aktiviere dort die **Entwicklerkonsole**.

> [!TIP]
> Alternativ kannst Du die Konsole dauerhaft über den Startparameter `-console` aktivieren. Diesen trägst Du in Steam über einen Rechtsklick auf das Spiel unter **Eigenschaften** bei den **Startoptionen** ein.

## Über die Spielkonsole verbinden

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
   > ```text
   > connect 123.45.67.89:27015
   > ```
   >
   > Setze hier die IP-Adresse und den Game Port aus Deiner Verwaltung ein.

> [!NOTE]
> **Server erscheint nicht in der öffentlichen Serverliste?**
>
> Ohne gültigen Steam Game Server Login Token (GSLT) wird Dein Server unter Umständen nicht in der öffentlichen Serverliste geführt und nutzt kein VAC. Einen Token erstellst Du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `240`. Trage ihn anschließend in der **Verwaltung** Deines Servers ein und starte den Server neu. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Game Port funktioniert auch ohne Token.
