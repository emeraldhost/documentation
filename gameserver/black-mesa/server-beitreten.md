---
description: Einem Black Mesa Server beitreten
---

# So trittst du deinem Black Mesa Server bei

Black Mesa kennt kein Matchmaking und keinen Lobby-Zwang. Du verbindest dich direkt mit deinem Server — über die Entwicklerkonsole, über die Steam-Favoriten oder über den Serverbrowser im Spiel.

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Black Mesa nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Ports wie `27005`, die in allgemeinen Source-Anleitungen auftauchen, sind lokale Client-Ports deines Spiels und dürfen nicht als Serveradresse verwendet werden.
::::

## Entwicklerkonsole aktivieren

Die Konsole ist in Black Mesa standardmäßig deaktiviert.

1. <b>Black Mesa starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Optionen öffnen</b><br>
   Öffne im Hauptmenü die **Optionen**.

3. <b>Konsole aktivieren</b><br>
   Aktiviere dort die Einstellung **Entwicklerkonsole** (**Developer Console**).

## Über die Spielkonsole verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server.

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   Zeigt dir die Verwaltung die IP `123.45.67.89` und den Game Port `28015`, lautet der Befehl:

   ```
   connect 123.45.67.89:28015
   ```

   Setze hier immer die Werte aus deiner eigenen Verwaltung ein.
   ::::

## Über die Steam-Favoriten

Hinterlegst du deinen Server in Steam, findest du ihn dauerhaft wieder.

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den Game Port deines Servers ein und bestätige.

5. <b>Beitreten</b><br>
   Wähle den Server aus und verbinde dich. Der Server erscheint anschließend auch im Spiel im Favoriten-Bereich.

## Über den Serverbrowser im Spiel

1. <b>Serverliste öffnen</b><br>
   Wähle im Hauptmenü **Play Online**. Black Mesa öffnet daraufhin die Serverliste.

2. <b>Server suchen</b><br>
   Suche über das Suchfeld nach dem Namen deines Servers oder wechsle in den Reiter **Favoriten**, wenn du den Server zuvor in Steam hinterlegt hast.

:::: warning Achtung
Damit dein Server in der öffentlichen Liste auftaucht, muss er erreichbar und gestartet sein — und je nach Konfiguration einen gültigen Login-Token besitzen (siehe unten). Die Direktverbindung über die Konsole funktioniert unabhängig davon.
::::

:::: info Server erscheint nicht in der öffentlichen Serverliste?
Ohne gültigen Steam Game Server Login Token (GSLT) wird ein Source-Server unter Umständen nicht in der öffentlichen Serverliste geführt. Einen Token erstellst du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) — dort gibst du die App-ID von Black Mesa an. Trage den Token anschließend in der **Verwaltung** deines Servers im Feld für den **GSL Token** ein und starte den Server neu. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Game Port funktioniert auch ohne Token.
::::

:::: tip Tipp
Wie du dir auf deinem Server Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
