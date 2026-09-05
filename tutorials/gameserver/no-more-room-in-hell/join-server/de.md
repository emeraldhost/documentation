---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem No More Room in Hell Server bei"
description: "Einem No More Room in Hell Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["no-more-room-in-hell"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/no-more-room-in-hell/add-admin", "gameserver/no-more-room-in-hell/add-mods", "gameserver/no-more-room-in-hell/create-backup", "gameserver/no-more-room-in-hell/kick-ban-players"]
---

Auf Deinen No More Room in Hell Server kommst Du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit der Entwicklerkonsole. Eine Lobby wie in anderen Koop-Shootern gibt es nicht – der Beitritt über IP und Port funktioniert immer.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. No More Room in Hell nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. **No More Room in Hell starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Optionen öffnen**\
   Öffne die **Optionen** und wechsle auf den Tab **Keyboard** (Tastatur).

3. **Erweiterte Einstellungen öffnen**\
   Klicke auf **Advanced**.

4. **Konsole aktivieren**\
   Setze den Haken bei **Enable developer console** und bestätige mit **OK**.

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

## Über den Serverbrowser im Spiel

1. **Serverbrowser öffnen**\
   Starte No More Room in Hell und öffne im Hauptmenü den Serverbrowser.

2. **Server suchen**\
   Wechsle auf den Reiter **Internet** und suche nach dem Namen Deines Servers.

3. **Beitreten**\
   Wähle Deinen Server aus und verbinde Dich.

## Über die Steam-Favoriten

Findest Du Deinen Server nicht in der Liste, trägst Du ihn direkt in Steam ein.

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Game Port Deines Servers ein und bestätige.

5. **Beitreten**\
   Wähle den Server aus und verbinde Dich. Der Server erscheint anschließend auch im Serverbrowser des Spiels unter den Favoriten.

## Server in der öffentlichen Serverliste anzeigen

Damit Dein Server dauerhaft in der öffentlichen Serverliste geführt wird, benötigt er einen **Steam Game Server Login Token (GSLT)**.

1. **Token erstellen**\
   Erstelle unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) einen Token mit der App-ID `224260`.

   > [!NOTE]
   > `224260` ist die App-ID des Spiels und die richtige ID für den Token. Der Server selbst wird über eine andere App-ID installiert – für den GSLT ist immer `224260` einzutragen.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **autoexec.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /nmrih/cfg/autoexec.cfg
   ```

   > [!NOTE]
   > Der Token gehört laut offizieller Dokumentation in die `autoexec.cfg`, weil diese Datei bereits beim Start des Servers ausgeführt wird – also bevor sich der Server bei Steam anmeldet.

4. **Token eintragen**\
   Trage folgende Zeile ein:

   ```text
   sv_setsteamaccount "DEIN-TOKEN"
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. In der Serverkonsole erscheint anschließend die Meldung `Assigned persistent gameserver Steam ID`.

> [!NOTE]
> Bietet die Verwaltung Deines Servers ein eigenes Feld für den **GSL Token**, kannst Du den Token auch dort eintragen. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Port funktioniert auch ohne Token.

## Welche Ports nutzt No More Room in Hell?

> [!NOTE]
>
> | Port | Verwendung |
> |------|------------|
> | **Game Port** (UDP) | Spielbetrieb und Serverabfragen – dieser Port wird für den Beitritt eingetragen |
> | Client Port `27005` | Lokaler Port auf dem PC des Spielers, keine Serveradresse |
> | SourceTV Port | Nur relevant, wenn Du SourceTV nutzt |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.
