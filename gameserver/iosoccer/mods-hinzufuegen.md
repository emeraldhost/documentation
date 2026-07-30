---
description: Mods und Plugins auf einem IOSoccer Server hinzufügen
---

# So fügst du Mods zu deinem IOSoccer Server hinzu

Plugins laufen auf einem IOSoccer Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt IOSoccer offiziell und bringt die passenden Spieldaten für den Linux-Server bereits mit.

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
   /iosoccer/
   ```

   Danach existiert der Ordner `/iosoccer/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: warning Metamod wird nicht geladen?
Antwortet der Server auf `meta version` mit `Unknown command`, kannst du Metamod:Source alternativ über die `gameinfo.txt` einbinden. Öffne dazu die Datei `/iosoccer/gameinfo.txt` und trage im Block `SearchPaths` als erste Zeile Folgendes ein:

```
GameBin	|gameinfo_path|addons/metamod/bin
```

Starte den Server anschließend neu.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) als **Linux**-Paket (`.tar.gz`) herunter.

   :::: info Hinweis
   SourceMod bringt eigene Spieldaten für IOSoccer mit. Nutze immer die aktuelle stabile Reihe — sie enthält die aktuellsten Spieldaten für das Spiel.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /iosoccer/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/iosoccer/addons/sourcemod/`.

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
   /iosoccer/addons/sourcemod/plugins/
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
   /iosoccer/maps/
   ```

4. <b>Map starten</b><br>
   Starte deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben. Der Befehl `maps *` listet dir alle vorhandenen Karten auf.

:::: info Hinweis
Einen Steam Workshop gibt es für IOSoccer nicht. Eigene Karten lädst du deshalb immer als `.bsp`-Datei in den Ordner `/iosoccer/maps/` hoch.
::::

## Kartenrotation anpassen

Die Kartenrotation steht in einer Textdatei mit einem Kartennamen pro Zeile, jeweils ohne die Endung `.bsp`:

```
/iosoccer/mapcycle.txt
```

Welche Datei verwendet wird, legst du in der `/iosoccer/cfg/server.cfg` fest:

```
mapcyclefile "mapcycle.txt"
```

:::: info Hinweis
Die Mapcycle-Datei liegt direkt im Spielordner `/iosoccer/` und **nicht** im Unterordner `cfg`. Der Server sucht sie ausschließlich dort — eine Datei unter `/iosoccer/cfg/` wird nicht gelesen.
::::

:::: tip Tipp
Trage eigene Karten zusätzlich in die verwendete Mapcycle-Datei ein, damit sie auch in der regulären Rotation auftauchen und nicht nur per `changelevel` erreichbar sind.
::::

:::: info Hinweis
Mit welcher Karte dein Server startet, legt das Feld **Map** in der **Verwaltung** fest — dieser Wert wird bei jedem Start übergeben. Die Mapcycle-Datei bestimmt nur, welche Karte danach als Nächstes an der Reihe ist.
::::

## Eigene Karten an Spieler ausliefern

Spieler, die eine eigene Karte nicht besitzen, können den Server nicht betreten. Über einen Download-Server (FastDL) laden sie die Dateien beim Verbinden automatisch herunter. Trage dafür in der `/iosoccer/cfg/server.cfg` folgende Zeilen ein:

```
sv_allowdownload 1
sv_downloadurl "https://deine-domain.de/fastdl/"
```

:::: info Hinweis
Der Webspeicher hinter `sv_downloadurl` ist nicht Teil des Gameservers — du benötigst dafür einen eigenen Webserver oder Webspace, auf dem die Kartendateien in derselben Ordnerstruktur liegen wie auf dem Server. Ohne FastDL musst du deine Karten stattdessen an deine Mitspieler verteilen.
::::

## Trikots und Teamnamen festlegen

Die Mannschaften eines Matches stellst du über Servereinstellungen ein — dafür brauchst du keine Plugins:

| Einstellung | Bedeutung |
|-------------|-----------|
| `mp_teamkits <Heim> <Auswärts>` | Legt die Trikots beider Mannschaften fest. Die erste Angabe gilt für das Heimteam, die zweite für das Auswärtsteam. Statt einer Nummer kannst du auch nach einem Teamnamen suchen, zum Beispiel `mp_teamkits barcelona`. |
| `mp_teamnames` | Überschreibt die Teamnamen, zum Beispiel `mp_teamnames "FCB:FC Barcelona,RMA:Real Madrid"` |

## Clientseitige Mods

:::: warning Achtung
Die bekannten IOSoccer-Mods aus der Community — eigene Bälle, Tornetze, Torwarthandschuhe, Schuhe, Skyboxes oder HUD- und Chat-Anpassungen — sind **rein clientseitig**. Sie werden von jedem Spieler selbst in sein lokales Steam-Spielverzeichnis installiert und lassen sich nicht über den Server verteilen. Auf dem Server bringen sie nichts.
::::

## Ordnerstruktur im Überblick

```
/iosoccer/addons/metamod/
/iosoccer/addons/sourcemod/
/iosoccer/addons/sourcemod/plugins/     <- .smx-Plugindateien
/iosoccer/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/iosoccer/cfg/                          <- server.cfg und autoexec.cfg
/iosoccer/maps/                         <- .bsp-Kartendateien
/iosoccer/mapcycle.txt                  <- Kartenrotation
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/iosoccer/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
