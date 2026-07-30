---
description: Gamemodes, Filterscripts, Plugins und eigene Modelle auf einem GTA San Andreas Server hinzufügen
---

# So fügst du Mods zu deinem GTA San Andreas Server hinzu

Ein SA-MP- beziehungsweise open.mp-Server hat kein klassisches Mod-System. Erweitert wird er über vier Wege:

| Weg | Was es ist | Zielordner |
|-----|------------|------------|
| **Gamemode** | Das Hauptskript, das bestimmt, was auf dem Server passiert (Rollenspiel, Rennen, Freeroam …) | `/gamemodes/` |
| **Filterscript** | Kleines Zusatzskript, das parallel zum Gamemode läuft | `/filterscripts/` |
| **Plugin** | Native Erweiterung des Servers, z.B. für MySQL oder den Streamer | `/plugins/` |
| **Custom Models / Artwork** | Eigene 3D-Modelle und Texturen als `.dff`- und `.txd`-Dateien | `/models/` |

:::: info Hinweis
Es gibt zwei Server-Varianten mit unterschiedlichen Konfigurationsdateien: **SA-MP** nutzt `server.cfg`, **open.mp** nutzt `config.json`. open.mp liest `server.cfg` weiterhin, empfiehlt aber `config.json`, weil dort mehr Einstellungen verfügbar sind. Welche Datei bei dir liegt, siehst du per [SFTP](../sftp-verbindung-herstellen.md) im Hauptverzeichnis deines Servers.
::::

:::: warning Achtung
Stoppe deinen Server über die Verwaltung, bevor du Dateien hochlädst oder die Konfiguration änderst.
::::

## Gamemode installieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Gamemode hochladen</b><br>
   Lade die `.amx`-Datei deines Gamemodes in folgendes Verzeichnis hoch:

   ```
   /gamemodes/
   ```

   :::: info Hinweis
   Auf den Server gehört immer die kompilierte `.amx`-Datei. Die zugehörige `.pwn`-Datei ist nur der Quelltext und wird vom Server nicht gestartet.
   ::::

4. <b>Gamemode eintragen</b><br>
   Trage den Dateinamen **ohne** die Endung `.amx` in deiner Konfiguration ein.

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "main_scripts": ["mein-gamemode 1"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   gamemode0 mein-gamemode 1
   ```

   Die Zahl dahinter gibt an, wie viele Runden der Gamemode läuft, bevor der Server zum nächsten Eintrag wechselt.

5. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server.

:::: tip Tipp
Möchtest du mehrere Gamemodes im Wechsel laufen lassen, trägst du sie in `main_scripts` als weitere Einträge ein beziehungsweise nutzt in der `server.cfg` fortlaufend `gamemode0`, `gamemode1`, `gamemode2` und so weiter.
::::

## Filterscript installieren

Filterscripts laufen zusätzlich zum Gamemode und lassen sich beliebig kombinieren.

1. <b>Filterscript hochladen</b><br>
   Lade die `.amx`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /filterscripts/
   ```

2. <b>Filterscript eintragen</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "side_scripts": ["filterscripts/Race_System"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   filterscripts Race_System Anticheat Adminspec
   ```

   In der `server.cfg` trennst du mehrere Filterscripts durch Leerzeichen.

3. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server.

## Plugin installieren

:::: danger Wichtig
Dein Server läuft unter **Linux** und benötigt Plugins deshalb zwingend als `.so`-Datei. Windows-Plugins im `.dll`-Format funktionieren **nicht**. Viele Plugins werden für beide Systeme angeboten — achte beim Download auf die Linux-Version.
::::

1. <b>Plugin hochladen</b><br>
   Lade die `.so`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /plugins/
   ```

2. <b>Include ablegen</b><br>
   Bringt das Plugin eine Include-Datei mit (z.B. `streamer.inc` oder `sscanf2.inc`), gehört diese in folgendes Verzeichnis, damit du deinen Gamemode damit kompilieren kannst:

   ```
   /qawno/include/
   ```

3. <b>Plugin eintragen</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "pawn": {
           "legacy_plugins": ["mysql", "streamer"]
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   plugins mysql.so streamer.so
   ```

4. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server.

:::: info Hinweis
open.mp bringt zusätzlich eigene Komponenten mit, die im Ordner `/components/` liegen. Diese sind nicht mit den klassischen SA-MP-Plugins identisch und werden nicht in `legacy_plugins` eingetragen.
::::

## Eigene Modelle (Custom Models) einbinden

Mit Custom Models bringst du eigene Fahrzeuge, Objekte oder Skins auf den Server. Die Spieler laden diese Dateien beim Verbinden automatisch herunter — sie müssen bei sich **nichts** installieren.

1. <b>Modelle hochladen</b><br>
   Lade deine `.dff`- und `.txd`-Dateien per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /models/
   ```

2. <b>Artwork aktivieren</b><br>

   **open.mp — `config.json`:**

   ```json
   {
       "artwork": {
           "enable": true,
           "models_path": "models"
       }
   }
   ```

   **SA-MP — `server.cfg`:**

   ```
   useartwork 1
   artpath models
   ```

3. <b>Modelle im Skript registrieren</b><br>
   Die Dateien allein reichen nicht. Dein Gamemode muss die Modelle in `OnGameModeInit` über `AddSimpleModel` beziehungsweise `AddCharModel` registrieren. Erst dadurch werden sie an die Spieler ausgeliefert.

4. <b>Server starten</b><br>
   Speichere die Änderungen und starte deinen Server.

:::: warning Achtung
Custom Models wurden mit SA-MP 0.3.DL R1 eingeführt und funktionieren in älteren Versionen nicht. Zusätzlich muss `useartwork` beziehungsweise `artwork.enable` aktiviert sein, sonst werden die Modelle ignoriert.
::::

:::: info Hinweis
Die heruntergeladenen Modelle landen bei deinen Spielern im Cache unter `Dokumente\GTA San Andreas User Files\SAMP\cache` in einem Unterordner pro Server-IP und Port. Bei Anzeigefehlern nach einem Modell-Update hilft es den Spielern, diesen Ordner zu leeren.
::::

:::: tip Tipp
Kommen die Modelle bei deinen Spielern nicht an, kannst du sie bei open.mp alternativ von einem externen Webserver ausliefern lassen. Trage dessen HTTP-Adresse in `artwork.cdn` ein — die Dateien werden dann von dort geladen statt vom Server selbst.
::::

## Wo speichern Skripte ihre Daten?

Alles, was ein Gamemode dauerhaft speichert — Accounts, Häuser, Fahrzeuge, Statistiken — legt er selbst an. Der einzige Ordner, in den Pawn-Skripte schreiben dürfen, ist:

```
/scriptfiles/
```

:::: info Hinweis
Skripte können nicht auf Dateien außerhalb von `scriptfiles` zugreifen. Viele größere Gamemodes speichern ihre Daten stattdessen in einer MySQL- oder SQLite-Datenbank. Wie du diese Daten sicherst, steht unter [Backup erstellen](backup-erstellen.md).
::::

:::: danger Wichtig
Singleplayer-Mods für GTA San Andreas (`.asi`-Plugins, CLEO-Skripte, ausgetauschte Modelle) sind **keine** Servermods. Sie gehören nicht auf den Server und verhindern auf dem PC deiner Spieler sogar den Start des Multiplayer-Clients.
::::
