---
description: Mods, eigene Karten und Scripts auf einem Soldat Server hinzufügen
---

# So fügst du Mods zu deinem Soldat Server hinzu

Bei Soldat gibt es zwei völlig unterschiedliche Arten von Mods. Klassische Mods – also andere Gostek-Grafiken, Waffenbilder, Sounds und Menüs – sind **reine Client-Sache**: Sie liegen im Soldat-Ordner auf dem PC des Spielers und werden dort über einen Startparameter geladen. Auf deinen Server gehören sie nicht.

Serverseitig erweiterst du dein Spiel über drei Wege:

- **Eigene Karten**, die der Server automatisch an die Spieler überträgt
- **Server-Scripting** (ScriptCore 3) für eigene Spielregeln und Verwaltungsfunktionen
- **Mod-Pakete** (`.smod`) – diese Möglichkeit gibt es nur bei OpenSoldat

:::: info Zwei Serverversionen
Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei dir läuft, erkennst du im Dateimanager beziehungsweise per [SFTP](../sftp-verbindung-herstellen.md):

| Datei im Hauptverzeichnis | Version |
|---------------------------|---------|
| `soldat.ini` und `server.ini` | klassischer Soldat-Server |
| `configs/server.cfg` | OpenSoldat |
::::

## Eigene Karten hinzufügen

Karten sind der praktischste Weg, deinen Server individuell zu gestalten. Sie liegen als `.pms`-Datei vor.

1. <b>Karte herunterladen</b><br>
   Lade die gewünschte Karte herunter. Du benötigst die `.pms`-Datei.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Karte hochladen</b><br>
   Lade die `.pms`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in den Maps-Ordner deines Servers hoch. Bei OpenSoldat ist das der Ordner `maps/`.

4. <b>Karte in die Rotation eintragen</b><br>
   Öffne die Datei `mapslist.txt` im Hauptverzeichnis deines Servers und trage die Karte ein – eine Karte pro Zeile:

   ```
   ctf_Ash
   ctf_Laos
   ctf_Run
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Der Kartenname wird **ohne Pfad und ohne die Endung `.pms`** eingetragen, aber **mit dem Präfix des Spielmodus** (zum Beispiel `ctf_`). Die Schreibweise unterscheidet Groß- und Kleinschreibung – auf deinem Linux-Server ist das entscheidend. Heißt die Datei `ctf_Laos.pms`, muss in der Liste exakt `ctf_Laos` stehen.
::::

:::: warning Achtung
**Leerzeilen** in der `mapslist.txt` führen zu Ladefehlern, und Einträge für Karten, die gar nicht auf dem Server liegen, können den Server zum Absturz bringen. Prüfe nach jeder Änderung, ob jede Zeile einer vorhandenen Datei entspricht.
::::

### Karten im laufenden Betrieb verwalten

Als angemeldeter Admin kannst du die Rotation auch im Spiel anpassen:

| Befehl | Beschreibung |
|--------|-------------|
| `/addmap <Mapname>` | Karte zur laufenden Rotation hinzufügen |
| `/delmap <Mapname>` | Karte aus der Rotation entfernen |
| `/map <Mapname>` | Sofort auf eine bestimmte Karte wechseln |
| `/nextmap` | Zur nächsten Karte wechseln |
| `/restart` | Aktuelle Runde neu starten |

:::: info Hinweis
Mit `/delmap` lassen sich nur Karten entfernen, die zuvor mit `/addmap` hinzugefügt wurden. Dauerhafte Änderungen nimmst du in der `mapslist.txt` vor.
::::

## Karten automatisch an die Spieler übertragen

Damit Mitspieler deine eigenen Karten nicht selbst installieren müssen, überträgt der Server sie beim Beitritt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Einstellung setzen</b><br>
   Klassischer Server – im Abschnitt `[NETWORK]` der `soldat.ini`:

   ```
   Allow_Download=1
   ```

   OpenSoldat – in der `configs/server.cfg`:

   ```
   set net_allowdownload 1
   set fileserver_enable 1
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Beim klassischen Server ist `Allow_Download` von Haus aus auf `1` gesetzt – du musst es also nur prüfen, wenn Downloads nicht funktionieren. Die Übertragung von Karten, Szenerie und Texturen läuft über TCP auf dem **Game Port + 10**. Welche Ports für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: tip Tipp
OpenSoldat kann fehlende Dateien alternativ von einer eigenen Webadresse laden lassen. Dafür trägst du in der `configs/server.cfg` die Option `sv_downloadurl` ein.
::::

## Server-Scripting aktivieren

Das eigentliche Mod-System für Soldat-Server ist das serverseitige Scripting (ScriptCore 3). Damit lassen sich eigene Spielmodi, Statistiken, Automatisierungen und Verwaltungsbefehle umsetzen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Scripting einschalten</b><br>
   Klassischer Server – im Abschnitt `[NETWORK]` der `server.ini`:

   ```
   Scripting=1
   ```

   OpenSoldat – in der `configs/server.cfg`. Dort ist Scripting bereits ab Werk aktiv, der Eintrag dient nur zur Kontrolle:

   ```
   set sc_enable 1
   ```

3. <b>Script hochladen</b><br>
   Lade dein Script per [SFTP](../sftp-verbindung-herstellen.md) in einen eigenen Unterordner hoch:

   ```
   scripts/<Scriptname>/
   ```

4. <b>Konfigurationsdatei anlegen</b><br>
   Lege im Scriptordner die Datei `sc3.cfg` an:

   ```
   [Config]
   Name=MeinScript
   MainFile=main.pas
   Sandboxed=2
   ```

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole, ob das Script fehlerfrei kompiliert wurde.

### Optionen der sc3.cfg

| Option | Bedeutung |
|--------|-----------|
| `Name` | Pflichtfeld, maximal 20 Zeichen – erscheint in allen Konsolenausgaben zu diesem Script |
| `MainFile` | Einstiegsdatei des Scripts, standardmäßig `main.pas` |
| `Debug` | Zusätzliche Debug-Ausgaben aktivieren |
| `Sandboxed` | Dateizugriff des Scripts: `0` gesamtes Laufwerk, `1` Serverordner, `2` nur die eigenen Scriptdaten (Standard) |
| `AllowDlls` | Erlaubt dem Script das Einbinden externer Bibliotheken |
| `AllowIniEdit` | Erlaubt dem Script das Lesen und Schreiben von `soldat.ini` und `server.ini` – wirkt nur mit `Sandboxed=1` |
| `Gamemod` | Meldet den Server in der Lobby als Gamemod-Server |
| `Legacy` | Kompatibilitätsmodus für ältere Scripts (ScriptCore 2) |

Zusätzlich kennt die Datei die Abschnitte `[SearchPaths]` und `[Defines]`.

:::: danger Wichtig
Belasse `Sandboxed` möglichst auf `2`. Mit `0` darf ein Script auf das gesamte Laufwerk zugreifen – installiere nur Scripts aus Quellen, denen du vertraust.
::::

:::: tip Verhalten bei Fehlern
Stürzt ein Script ab, steuert `OnScriptCrash` (klassisch) beziehungsweise `sc_onscriptcrash` (OpenSoldat), was passiert: neu kompilieren, Server herunterfahren, ignorieren oder das Script deaktivieren.
::::

## Mod-Pakete bei OpenSoldat

Nur OpenSoldat kann serverseitig ein Mod-Paket laden. Mods liegen dort als `.smod`-Datei vor.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Mod hochladen</b><br>
   Lade die `.smod`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in den Ordner `mods/` hoch.

3. <b>Mod eintragen</b><br>
   Trage in der `configs/server.cfg` den Dateinamen **ohne die Endung `.smod`** ein:

   ```
   set fs_mod MeinMod
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Mit `sv_pure` verlangst du, dass alle Spieler dieselbe `.smod`-Datei verwenden wie der Server. Ohne diese Einstellung können Spieler mit abweichenden Dateien auf den Server – mit ihr benötigen deine Mitspieler die Moddatei. Damit sie fehlende Dateien beziehen können, kannst du zusätzlich `sv_downloadurl` setzen.
::::

## Was nicht auf den Server gehört

:::: info Hinweis
Klassische Soldat-Mods aus dem Ordner `mods/` des **Spiels** werden über den Client-Startparameter `-mod <Name>` geladen. Sie verändern nur die Darstellung auf dem PC des Spielers und lassen sich beim klassischen Soldat-Server nicht serverseitig erzwingen. Für den klassischen Server ist kein Mod-Parameter dokumentiert – nutze dort eigene Karten und Server-Scripting.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst oder Konfigurationsdateien bearbeitest. Änderungen an `mapslist.txt`, `soldat.ini`, `server.ini` und `configs/server.cfg` werden erst beim Serverstart eingelesen.
::::

:::: tip Tipp
Wie du dir anschließend Adminrechte gibst, um Karten und Spielmodi im Spiel umzuschalten, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
