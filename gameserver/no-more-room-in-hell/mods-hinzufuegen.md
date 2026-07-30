---
description: Mods und Plugins auf einem No More Room in Hell Server hinzufügen
---

# So fügst du Mods zu deinem No More Room in Hell Server hinzu

Plugins laufen auf einem No More Room in Hell Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt No More Room in Hell offiziell und bringt die passenden Spieldaten für den Linux-Server bereits mit.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

:::: info Hinweis
Deine Mitspieler müssen nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt, es sind keine Downloads auf Spielerseite nötig.
::::

## Metamod:Source installieren

1. <b>Metamod:Source herunterladen</b><br>
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /nmrih/
   ```

   Danach existiert der Ordner `/nmrih/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: info Hinweis
Eine eigene `metamod.vdf` musst du nicht anlegen — die passende Datei liegt dem Paket seit Metamod:Source 1.10 bereits bei. Der VDF-Generator der Metamod-Dokumentation ist nur für Left 4 Dead 1, für Drittanbieter-Mods auf Source SDK Base und für nicht-englische Listen-Server gedacht; No More Room in Hell ist dort nicht aufgeführt.
::::

:::: warning Metamod wird nicht geladen?
Antwortet der Server auf `meta version` mit `Unknown command`, kannst du Metamod:Source alternativ über die `gameinfo.txt` einbinden. Öffne dazu die Datei `/nmrih/gameinfo.txt` und trage im Block `SearchPaths` als erste Zeile Folgendes ein:

```
GameBin	|gameinfo_path|addons/metamod/bin
```

Starte den Server anschließend neu.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) als **Linux**-Paket (`.tar.gz`) herunter.

   :::: info Hinweis
   Die Spielunterstützung für No More Room in Hell wurde zuletzt mit **SourceMod 1.11** aktualisiert. Nutze deshalb mindestens diese Version, besser die aktuelle stabile Reihe.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /nmrih/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/nmrih/addons/sourcemod/`.

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `sm version`, ob SourceMod geladen wurde.

## Plugins installieren

1. <b>Plugin herunterladen</b><br>
   Lade das gewünschte Plugin herunter. Fertige Plugins liegen als `.smx`-Datei vor.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Plugin hochladen</b><br>
   Lade die `.smx`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /nmrih/addons/sourcemod/plugins/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Eigene Maps hinzufügen

1. <b>Map herunterladen</b><br>
   Custom Maps liegen als `.bsp`-Datei vor.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Map hochladen</b><br>
   Lade die `.bsp`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /nmrih/maps/
   ```

4. <b>Map starten</b><br>
   Starte deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben.

:::: info Steam Workshop
Für No More Room in Hell gibt es einen [Steam Workshop](https://steamcommunity.com/app/224260/workshop/) mit Objective- und Survival-Maps, Skins, Sounds und Mutatoren. Wie Workshop-Inhalte serverseitig eingebunden werden, ist offiziell nicht dokumentiert — lade Karten deshalb als `.bsp`-Datei in den Ordner `/nmrih/maps/` hoch.
::::

## Ordnerstruktur im Überblick

```
/nmrih/addons/metamod/
/nmrih/addons/sourcemod/
/nmrih/addons/sourcemod/plugins/     <- .smx-Plugindateien
/nmrih/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/nmrih/cfg/                          <- server.cfg und weitere Konfigurationen
/nmrih/maps/                         <- .bsp-Kartendateien
```

## Installation prüfen

Gib die folgenden Befehle in der Serverkonsole ein:

| Befehl | Beschreibung |
|--------|-------------|
| `meta version` | Version von Metamod:Source anzeigen |
| `meta list` | Von Metamod geladene Erweiterungen anzeigen |
| `sm version` | Version von SourceMod anzeigen |
| `sm plugins list` | Geladene SourceMod-Plugins anzeigen |

:::: warning Achtung
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/nmrih/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
