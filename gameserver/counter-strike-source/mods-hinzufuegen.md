---
description: Mods und Plugins auf einem Counter-Strike Source Server hinzufügen
---

# So fügst du Mods zu deinem Counter-Strike Source Server hinzu

Plugins laufen auf einem Counter-Strike Source Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

:::: info Hinweis
Deine Mitspieler müssen nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt, es sind keine Downloads auf Spielerseite nötig.
::::

## Metamod:Source installieren

1. <b>Metamod:Source herunterladen</b><br>
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /cstrike/
   ```

   Danach existiert der Ordner `/cstrike/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: info Hinweis
Eine eigene `metamod.vdf` musst du nicht anlegen — seit Metamod:Source 1.10.0 liegt die passende Datei dem Paket bereits bei.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /cstrike/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/cstrike/addons/sourcemod/`.

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
   /cstrike/addons/sourcemod/plugins/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Eigene Maps hinzufügen

1. <b>Map herunterladen</b><br>
   Lade die gewünschte Map herunter. Maps liegen als `.bsp`-Datei vor, teilweise zusammen mit weiteren Dateien wie Sounds oder Modellen.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Map hochladen</b><br>
   Lade die `.bsp`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /cstrike/maps/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Mit `changelevel <Mapname>` in der Serverkonsole wechselst du auf die neue Map.

:::: warning Achtung
Eigene Maps liegen nur auf dem Server. Deine Mitspieler benötigen die Map ebenfalls, sonst können sie nicht beitreten. Damit sie automatisch heruntergeladen wird, richtest du FastDL ein.
::::

## FastDL einrichten

Über FastDL laden deine Mitspieler eigene Maps und Zusatzdateien beim Verbinden automatisch von einem Webspace herunter, statt sie manuell installieren zu müssen.

1. <b>Dateien auf den Webspace legen</b><br>
   Lege auf deinem Webspace einen Ordner an und bilde darin die Ordnerstruktur des Servers nach, zum Beispiel `maps/`, `sound/` und `models/`. Kopiere die benötigten Dateien in die passenden Ordner.

2. <b>Dateien komprimieren</b><br>
   Komprimiere die Dateien auf dem Webspace im `.bz2`-Format. Aus `de_beispiel.bsp` wird so `de_beispiel.bsp.bz2`.

3. <b>Download-Adresse eintragen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei und trage die Adresse deines FastDL-Ordners ein:

   ```
   /cstrike/cfg/server.cfg
   ```

   ```
   sv_downloadurl "https://deine-domain.de/fastdl/"
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server neu.

:::: info Hinweis
Die Dateien müssen auf dem Server **und** auf dem Webspace liegen. Der Server lädt die Map selbst aus `/cstrike/maps/`, deine Mitspieler holen sie sich über die FastDL-Adresse.
::::

## Ordnerstruktur im Überblick

```
/cstrike/addons/metamod/
/cstrike/addons/sourcemod/
/cstrike/addons/sourcemod/plugins/     <- .smx-Plugindateien
/cstrike/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/cstrike/maps/                         <- Maps
/cstrike/cfg/                          <- server.cfg und weitere Konfigurationen
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/cstrike/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
