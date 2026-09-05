---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Left 4 Dead Server bei"
description: "Einem Left 4 Dead Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/left-4-dead/add-admin", "gameserver/left-4-dead/add-mods", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/kick-ban-players"]
---

Left 4 Dead ist auf Lobbys ausgelegt. Auf einen eigenen Server kommst Du am zuverlässigsten über die **Direktverbindung** mit der Spielkonsole oder über die **Steam-Favoriten**.

> [!IMPORTANT]
> Damit Spieler direkt beitreten können, muss in der `server.cfg` die Zeile `sv_allow_lobby_connect_only "0"` gesetzt sein. Der Standardwert ist `1` – dann ist der Beitritt ausschließlich über eine Matchmaking-Lobby möglich und jede Direktverbindung schlägt fehl. Wie Du das einträgst, steht weiter unten.

## Verbindungsdaten finden

> [!NOTE]
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Left 4 Dead nutzt für den Spielbetrieb und für Serverabfragen denselben Port – es gibt **keinen separaten Query Port**.

> [!WARNING]
> Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port Deines Spiels und darf nicht als Serveradresse verwendet werden.

## Direktverbindung auf dem Server erlauben

Diesen Schritt musst Du nur einmal erledigen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **server.cfg öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /left4dead/cfg/server.cfg
   ```

4. **Direktverbindung freigeben**\
   Trage folgende Zeile ein beziehungsweise setze sie auf `0`:

   ```text
   sv_allow_lobby_connect_only "0"
   ```

   > [!NOTE]
   > Die Engine beschreibt den Wert so: Steht er auf `1`, dürfen Spieler dem Server nur aus einer Matchmaking-Lobby heraus beitreten und sich nicht direkt verbinden.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Left 4 Dead standardmäßig deaktiviert.

1. **Left 4 Dead starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Einstellungen öffnen**\
   Öffne die **Optionen** und wechsle zu **Tastatur/Maus**.

3. **Konsole aktivieren**\
   Aktiviere dort die **Entwicklerkonsole**.

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
   Wähle den Server aus und verbinde Dich. Der Server erscheint anschließend auch im Spiel im Favoriten-Bereich.

## Mit einer Lobby auf den eigenen Server

Möchtest Du eine Kampagne wie gewohnt aus einer Lobby heraus starten, aber auf Deinem eigenen Server spielen, gibt es zwei Wege.

### Suchschlüssel setzen

Mit einem Suchschlüssel wird die Serversuche aus der Lobby auf Server mit demselben Schlüssel beschränkt.

1. **Schlüssel auf dem Server eintragen**\
   Trage in `/left4dead/cfg/server.cfg` folgende Zeile ein und starte den Server neu:

   ```text
   sv_search_key "meinschluessel"
   ```

2. **Schlüssel im Spiel setzen**\
   Alle Spieler der Lobby geben denselben Wert in der Spielkonsole ein:

   ```text
   sv_search_key "meinschluessel"
   ```

3. **Kampagne starten**\
   Startet die Lobby anschließend eine Kampagne, wird nur noch nach Servern mit diesem Schlüssel gesucht.

### Server fest vorgeben

Alternativ gibt der Lobby-Leiter den Server direkt vor. Der Befehl wird in der **Spielkonsole** eingegeben, nicht auf dem Server:

```text
mm_dedicated_force_servers 123.45.67.89:27015
```

> [!NOTE]
> Der Befehl erwartet eine durch Kommas getrennte Liste aus `IP:Port`. Statt nach öffentlichen Servern zu suchen, verwendet die Lobby dann ausschließlich die dort eingetragenen Server. Setze auch hier die IP-Adresse und den Game Port aus Deiner Verwaltung ein.

> [!WARNING]
> Der Suchschlüssel wirkt ausschließlich bei der Serversuche aus einer Lobby heraus. In der öffentlichen Serverliste kannst Du nicht nach ihm suchen – nutze im Zweifel die Direktverbindung oder die Steam-Favoriten.
