---
description: Mods und Plugins auf einem Fistful of Frags Server hinzufügen
---

# So fügst du Mods zu deinem Fistful of Frags Server hinzu

Plugins laufen auf einem Fistful of Frags Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. SourceMod unterstützt Fistful of Frags offiziell und bringt die passenden Spieldaten bereits mit.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

:::: info Hinweis
Deine Mitspieler müssen für Plugins nichts installieren. Plugins werden ausschließlich serverseitig ausgeführt. Nur bei eigenen Karten brauchen deine Mitspieler die Dateien ebenfalls.
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
   /fof/
   ```

   Danach existiert der Ordner `/fof/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: info Hinweis
Eine eigene `metamod.vdf` musst du nicht anlegen — die passende Datei liegt dem Paket bereits bei und landet beim Hochladen automatisch unter `/fof/addons/metamod.vdf`. Antwortet der Server auf `meta version` mit `Unknown command`, prüfe zuerst, ob diese Datei und der Ordner `/fof/addons/metamod/` wirklich vorhanden sind und ob du das Linux-Paket verwendet hast.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) als **Linux**-Paket (`.tar.gz`) herunter.

   :::: info Hinweis
   SourceMod bringt eigene Spieldaten für Fistful of Frags mit. Nutze immer die aktuelle stabile Reihe — sie enthält die aktuellsten Spieldaten für das Spiel.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /fof/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/fof/addons/sourcemod/`.

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
   /fof/addons/sourcemod/plugins/
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
   /fof/maps/
   ```

4. <b>Map starten</b><br>
   Starte deinen Server und wechsle in der Serverkonsole mit `changelevel <Mapname>` auf die neue Karte. Der Mapname wird ohne die Endung `.bsp` angegeben.

:::: info Steam Workshop
Der [Steam Workshop von Fistful of Frags](https://steamcommunity.com/app/265630/workshop/) enthält Waffen- und Charakter-Skins, Modelle, Sounds, HUD-Anpassungen sowie Karten. Skins und Sounds sind **rein clientseitig** und werden von jedem Spieler selbst abonniert — auf dem Server bringen sie nichts. Für Workshop-Karten gibt es keine serverseitige Anbindung: Lade die Karte als `.bsp`-Datei in den Ordner `/fof/maps/` hoch.
::::

## Kartenrotation anpassen

Die Mapcycle-Dateien liegen **nicht** im `cfg`-Ordner, sondern direkt im Spielordner:

```
/fof/mapcycle.txt         <- Standardrotation
/fof/mapcycle_12.txt      <- Rotation für kleine Server
/fof/mapcycle_32.txt      <- Rotation für große Server
/fof/mapcycle_tp.txt      <- Teamplay
```

In jeder Datei steht ein Kartenname pro Zeile, jeweils ohne die Endung `.bsp`. Welche Datei verwendet wird, legst du in der `/fof/cfg/server.cfg` fest:

```
mapcyclefile "mapcycle.txt"
```

:::: info Hinweis
Zusätzlich legen die Einstellungen `fof_sv_mapcycle_dm`, `fof_sv_mapcycle_dm_12`, `fof_sv_mapcycle_dm_32` und `fof_sv_mapcycle_tp` fest, welche der vier Dateien zu welcher Slotgröße beziehungsweise zu welchem Modus gehört. Eine eigene Rotation speicherst du als zusätzliche `.txt`-Datei im selben Ordner und trägst den Dateinamen bei `mapcyclefile` ein.
::::

:::: tip Tipp
Trage eigene Karten zusätzlich in die verwendete Mapcycle-Datei ein, damit sie auch in der regulären Rotation auftauchen und nicht nur per `changelevel` erreichbar sind.
::::

## Eigene Karten an Spieler ausliefern

Spieler, die eine eigene Karte nicht besitzen, können den Server nicht betreten. Über einen Download-Server (FastDL) laden sie die Dateien beim Verbinden automatisch herunter. Trage dafür in der `/fof/cfg/server.cfg` folgende Zeilen ein:

```
sv_allowdownload 1
sv_downloadurl "https://deine-domain.de/fastdl/"
```

:::: info Hinweis
Der Webspeicher hinter `sv_downloadurl` ist nicht Teil des Gameservers — du benötigst dafür einen eigenen Webserver oder Webspace, auf dem die Kartendateien in derselben Ordnerstruktur liegen wie auf dem Server. Ohne FastDL musst du deine Karten stattdessen an deine Mitspieler verteilen.
::::

## Ordnerstruktur im Überblick

```
/fof/addons/metamod/
/fof/addons/sourcemod/
/fof/addons/sourcemod/plugins/     <- .smx-Plugindateien
/fof/addons/sourcemod/configs/     <- Konfigurationen, z.B. Adminlisten
/fof/cfg/                          <- server.cfg und weitere Konfigurationen
/fof/maps/                         <- .bsp-Kartendateien
/fof/mapcycle.txt                  <- Kartenrotation
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/fof/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
