---
description: Einem Left 4 Dead Server beitreten
---

# So trittst du deinem Left 4 Dead Server bei

Left 4 Dead ist auf Lobbys ausgelegt. Auf einen eigenen Server kommst du am zuverlässigsten über die **Direktverbindung** mit der Spielkonsole oder über die **Steam-Favoriten**.

:::: danger Wichtig
Damit Spieler direkt beitreten können, muss in der `server.cfg` die Zeile `sv_allow_lobby_connect_only "0"` gesetzt sein. Der Standardwert ist `1` — dann ist der Beitritt ausschließlich über eine Matchmaking-Lobby möglich und jede Direktverbindung schlägt fehl. Wie du das einträgst, steht weiter unten.
::::

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Left 4 Dead nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

## Direktverbindung auf dem Server erlauben

Diesen Schritt musst du nur einmal erledigen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server.cfg öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /left4dead/cfg/server.cfg
   ```

4. <b>Direktverbindung freigeben</b><br>
   Trage folgende Zeile ein beziehungsweise setze sie auf `0`:

   ```
   sv_allow_lobby_connect_only "0"
   ```

   :::: info Hinweis
   Die Engine beschreibt den Wert so: Steht er auf `1`, dürfen Spieler dem Server nur aus einer Matchmaking-Lobby heraus beitreten und sich nicht direkt verbinden.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Left 4 Dead standardmäßig deaktiviert.

1. <b>Left 4 Dead starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Einstellungen öffnen</b><br>
   Öffne die **Optionen** und wechsle zu **Tastatur/Maus**.

3. <b>Konsole aktivieren</b><br>
   Aktiviere dort die **Entwicklerkonsole**.

## Über die Spielkonsole verbinden

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   ```
   connect 123.45.67.89:27015
   ```

   Setze hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
   ::::

## Über die Steam-Favoriten

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

## Mit einer Lobby auf den eigenen Server

Möchtest du eine Kampagne wie gewohnt aus einer Lobby heraus starten, aber auf deinem eigenen Server spielen, gibt es zwei Wege.

### Suchschlüssel setzen

Mit einem Suchschlüssel wird die Serversuche aus der Lobby auf Server mit demselben Schlüssel beschränkt.

1. <b>Schlüssel auf dem Server eintragen</b><br>
   Trage in `/left4dead/cfg/server.cfg` folgende Zeile ein und starte den Server neu:

   ```
   sv_search_key "meinschluessel"
   ```

2. <b>Schlüssel im Spiel setzen</b><br>
   Alle Spieler der Lobby geben denselben Wert in der Spielkonsole ein:

   ```
   sv_search_key "meinschluessel"
   ```

3. <b>Kampagne starten</b><br>
   Startet die Lobby anschließend eine Kampagne, wird nur noch nach Servern mit diesem Schlüssel gesucht.

### Server fest vorgeben

Alternativ gibt der Lobby-Leiter den Server direkt vor. Der Befehl wird in der **Spielkonsole** eingegeben, nicht auf dem Server:

```
mm_dedicated_force_servers 123.45.67.89:27015
```

:::: info Hinweis
Der Befehl erwartet eine durch Kommas getrennte Liste aus `IP:Port`. Statt nach öffentlichen Servern zu suchen, verwendet die Lobby dann ausschließlich die dort eingetragenen Server. Setze auch hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
::::

:::: warning Achtung
Der Suchschlüssel wirkt ausschließlich bei der Serversuche aus einer Lobby heraus. In der öffentlichen Serverliste kannst du nicht nach ihm suchen — nutze im Zweifel die Direktverbindung oder die Steam-Favoriten.
::::
