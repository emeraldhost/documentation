---
description: Mods und Plugins auf einem Left 4 Dead 2 Server hinzufügen
---

# So fügst du Mods zu deinem Left 4 Dead 2 Server hinzu

Plugins laufen auf einem Left 4 Dead 2 Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

:::: info Hinweis
Deine Mitspieler müssen nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt, es sind keine Downloads auf Spielerseite nötig.
::::

## Metamod:Source installieren

1. <b>Metamod:Source herunterladen</b><br>
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) für Left 4 Dead 2 als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /left4dead2/
   ```

   Danach existiert der Ordner `/left4dead2/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: info Hinweis
Eine eigene `metamod.vdf` musst du für Left 4 Dead 2 nicht anlegen — die passende Datei liegt dem Paket bereits bei. Laut Metamod-Dokumentation ist eine selbst erstellte VDF-Datei nur für Left 4 Dead 1 und Drittanbieter-Mods nötig.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /left4dead2/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/left4dead2/addons/sourcemod/`.

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
   /left4dead2/addons/sourcemod/plugins/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Ordnerstruktur im Überblick

```
/left4dead2/addons/metamod/
/left4dead2/addons/sourcemod/
/left4dead2/addons/sourcemod/plugins/     <- .smx-Plugindateien
/left4dead2/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/left4dead2/cfg/                          <- server.cfg und weitere Konfigurationen
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/left4dead2/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
