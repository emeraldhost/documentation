---
description: Einem Soldat Server beitreten
---

# So trittst du deinem Soldat Server bei

Auf deinen Soldat Server kommst du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit IP-Adresse und Port. Beide Wege laufen über denselben Port – einen separaten Query Port gibt es bei Soldat nicht.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Hat dein Server ein Spielpasswort, brauchst du zusätzlich dieses.
::::

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server, weil sie unabhängig von der öffentlichen Serverliste funktioniert.

1. <b>Soldat starten</b><br>
   Starte Soldat auf deinem PC und warte, bis das Hauptmenü geladen ist.

2. <b>Join Game öffnen</b><br>
   Wähle im Hauptmenü **Join Game**.

3. <b>Verbindungsdaten eintragen</b><br>
   Trage in die Felder für **IP**, **Port** und **Password** die Daten deines Servers ein:

   ```
   IP:       123.45.67.89
   Port:     <Game Port aus der Verwaltung>
   Password: <Spielpasswort, falls gesetzt>
   ```

   :::: info Hinweis
   Das Feld **Password** ist das Spielpasswort des Servers, nicht das Adminpasswort. Ist auf deinem Server kein Spielpasswort gesetzt, bleibt das Feld leer.
   ::::

4. <b>Verbinden</b><br>
   Bestätige die Eingabe und du landest direkt auf deinem Server.

## Über den Serverbrowser

1. <b>Join Game öffnen</b><br>
   Starte Soldat und wähle im Hauptmenü **Join Game**.

2. <b>Serverliste abrufen</b><br>
   Klicke auf **Request Servers**. Soldat lädt daraufhin die Liste der Internet- und LAN-Server.

3. <b>Server auswählen</b><br>
   Suche deinen Server anhand seines Namens in der Liste und verbinde dich.

:::: warning Achtung
Im Serverbrowser erscheint dein Server nur, wenn er sich in der Lobby registriert. Wie du das einstellst, steht weiter unten unter [Server in der Serverliste anzeigen](#server-in-der-serverliste-anzeigen). Findest du deinen Server nicht, nutze die Direktverbindung – sie funktioniert immer.
::::

## Über eine Verknüpfung oder die Kommandozeile

Soldat kann sich beim Start direkt mit einem Server verbinden. Das eignet sich gut für eine Desktop-Verknüpfung, die du deinen Mitspielern gibst.

1. <b>Startparameter verwenden</b><br>
   Hänge an die Verknüpfung deines Soldat-Clients folgenden Parameter an:

   ```
   -join <IP-Adresse> <Game Port> <Passwort>
   ```

2. <b>Alternativ eine soldat-Adresse verwenden</b><br>
   Statt der Einzelparameter kannst du auch eine vollständige Adresse übergeben:

   ```
   -joinurl soldat://<IP-Adresse>:<Game Port>/<Passwort>
   ```

:::: info Hinweis
Port und Passwort sind optional. Lässt du sie weg, greift Soldat auf feste Vorgabewerte zurück und landet dadurch meist nicht auf deinem Server – trage deshalb immer den Game Port aus deiner **Verwaltung** ein.
::::

## Server in der Serverliste anzeigen

Damit dein Server im Serverbrowser auftaucht, muss er sich bei der Lobby anmelden. Wie du das einstellst, hängt von deiner Serverversion ab.

:::: info Zwei Serverversionen
Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei dir läuft, erkennst du im Dateimanager beziehungsweise per [SFTP](../sftp-verbindung-herstellen.md):

| Datei im Hauptverzeichnis | Version |
|---------------------------|---------|
| `soldat.ini` und `server.ini` | klassischer Soldat-Server |
| `configs/server.cfg` | OpenSoldat |
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfiguration öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Konfigurationsdatei deiner Serverversion.

3. <b>Lobby-Eintrag aktivieren</b><br>
   Klassischer Server – im Abschnitt `[NETWORK]` der `soldat.ini`:

   ```
   Lobby_Register=1
   ```

   OpenSoldat – in der `configs/server.cfg`:

   ```
   set sv_lobby 1
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Lobby-Registrierung ist bei **beiden** Serverversionen standardmäßig deaktiviert. Ein frisch aufgesetzter Server ist also zunächst nur über die Direktverbindung erreichbar.
::::

## Welche Ports nutzt Soldat?

:::: info Hinweis
Ein Soldat-Server nutzt seinen Game Port mehrfach:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| **Game Port** | UDP | Spielbetrieb – dieser Port wird beim Beitritt eingetragen |
| **Game Port** | TCP | Remote-Admin-Konsole |
| **Game Port + 10** | TCP | Übertragung von Maps, Szenerie und Texturen an die Spieler |

Einen separaten Query Port gibt es nicht. Welche Ports für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: tip Tipp
Kommen Spieler auf den Server, laden aber deine eigenen Karten nicht herunter, prüfe die Einstellung für Datei-Downloads. Mehr dazu unter [Mods hinzufügen](mods-hinzufuegen.md).
::::
