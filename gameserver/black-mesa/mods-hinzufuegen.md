---
description: Mods und Plugins auf einem Black Mesa Server hinzufügen
---

# So fügst du Mods zu deinem Black Mesa Server hinzu

Plugins laufen auf einem Black Mesa Server über **Metamod:Source** und **SourceMod**. Du benötigst **beides**: Metamod:Source klinkt sich in die Source Engine ein, SourceMod stellt darauf aufbauend die Plugin-Umgebung und die Adminfunktionen bereit. Metamod:Source unterstützt Black Mesa seit Version 1.10.5 offiziell, SourceMod setzt darauf auf.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

:::: info Hinweis
Deine Mitspieler müssen für Plugins nichts installieren. SourceMod-Plugins werden ausschließlich serverseitig ausgeführt. Nur bei eigenen Maps und Custom-Inhalten brauchen auch die Spieler die passenden Dateien.
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
   /bms/
   ```

   Danach existiert der Ordner `/bms/addons/metamod/`.

5. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: info Hinweis
Eine eigene `metamod.vdf` musst du nicht anlegen — die passende Datei liegt dem Paket bereits bei. Laut Metamod-Dokumentation ist eine selbst erstellte VDF-Datei nur für Left 4 Dead 1 und Drittanbieter-Mods nötig.
::::

## SourceMod installieren

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php?branch=stable) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /bms/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/bms/addons/sourcemod/`.

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
   /bms/addons/sourcemod/plugins/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

## Ordnerstruktur im Überblick

```
/bms/cfg/                                 <- server.cfg und weitere Konfigurationen
/bms/cfg/mapcycle.txt                     <- Reihenfolge der Maps
/bms/maps/                                <- Maps im BSP-Format
/bms/addonlist.txt                        <- Liste der aktiven VPK-Pakete
/bms/addons/                              <- VPK-Pakete und Erweiterungen
/bms/addons/workshop/                     <- VPK-Pakete aus dem Steam Workshop
/bms/addons/metamod/
/bms/addons/sourcemod/
/bms/addons/sourcemod/plugins/            <- .smx-Plugindateien
/bms/addons/sourcemod/configs/            <- Konfigurationen, z.B. Adminlisten
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/bms/addons/` liegen.
::::

## Eigene Maps und Custom-Inhalte

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Maps im BSP-Format hochladen</b><br>
   Maps, die als `.bsp`-Datei vorliegen, lädst du per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /bms/maps/
   ```

3. <b>Inhalte im VPK-Format hochladen</b><br>
   Maps und Custom-Inhalte, die als `.vpk`-Paket vorliegen, gehören stattdessen in den Addons-Ordner. Pakete aus dem Steam Workshop legst du im Unterordner `workshop` ab:

   ```
   /bms/addons/
   /bms/addons/workshop/
   ```

4. <b>VPK-Pakete aktivieren</b><br>
   Ein VPK-Paket wird erst geladen, wenn es in der Addon-Liste steht. Öffne dafür folgende Datei — existiert sie noch nicht, lege sie an:

   ```
   /bms/addonlist.txt
   ```

   Trage die Pakete so ein (`1` = aktiv, `0` = inaktiv):

   ```
   "AddonList"
   {
      "workshop\432070352.vpk"     "1"
      "workshop\432074065.vpk"     "1"
   }
   ```

5. <b>Map in den Ablauf aufnehmen</b><br>
   Trage die Map in folgende Datei ein — eine Map pro Zeile, jeweils ohne Dateiendung:

   ```
   /bms/cfg/mapcycle.txt
   ```

6. <b>Server starten</b><br>
   Starte deinen Server. Mit `changelevel <Mapname>` in der Serverkonsole wechselst du direkt auf eine Map.

:::: info Offizielle Deathmatch-Maps
Black Mesa bringt zehn offizielle Mehrspieler-Maps mit: `dm_bounce`, `dm_chopper`, `dm_crossfire`, `dm_gasworks`, `dm_lambdabunker`, `dm_power`, `dm_stack`, `dm_stalkyard`, `dm_subtransit` und `dm_undertow`.

Welche Maps auf deinem Server tatsächlich liegen, siehst du im Ordner `/bms/maps/`. Deathmatch-Maps beginnen mit `dm_`, Kampagnen-Maps mit `bm_`.
::::

:::: warning Achtung
Der Steam Workshop von Black Mesa ist **clientseitig**. Abonnierte Inhalte landen nur auf deinem PC — für den Server musst du die Dateien manuell nach `/bms/addons/workshop/` beziehungsweise `/bms/maps/` hochladen und in der `addonlist.txt` eintragen.
::::

:::: danger Wichtig
Eigene Maps müssen auch bei deinen Mitspielern vorliegen, sonst können sie nicht beitreten. Entweder alle Spieler laden die Map selbst herunter (zum Beispiel über den Workshop), oder du stellst die Dateien über einen eigenen Download-Server (FastDL) bereit.
::::

## Koop-Modus mit SourceCoop

Der Mehrspielermodus von Black Mesa ist ein reiner Deathmatch-Modus. Möchtest du die Kampagne gemeinsam spielen, gibt es dafür das Community-Plugin [SourceCoop](https://github.com/ampreeT/SourceCoop).

1. <b>Voraussetzungen schaffen</b><br>
   Metamod:Source und SourceMod müssen wie oben beschrieben installiert und funktionsfähig sein.

2. <b>SourceCoop herunterladen</b><br>
   Lade die aktuelle Version des Plugins aus dem GitHub-Projekt herunter.

3. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

4. <b>Dateien hochladen</b><br>
   Lade den Inhalt des Archivs (die Ordner `addons`, `materials` und `models`) per [SFTP](../sftp-verbindung-herstellen.md) entsprechend der enthaltenen Ordnerstruktur nach `/bms/` hoch. Die Plugindateien landen dabei in `/bms/addons/sourcemod/plugins/`, die Map-Konfigurationen (`.edt`-Dateien) in `/bms/addons/sourcemod/data/srccoop/`.

5. <b>Startmap eintragen</b><br>
   Trage die erste Map der gewünschten Kampagne in `/bms/cfg/mapcycle.txt` ein, zum Beispiel `bm_c0a0a`.

6. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob SourceCoop geladen wurde.

:::: info Hinweis
SourceCoop ist ein Community-Projekt und kein offizieller Bestandteil von Black Mesa. Die genaue Ordnerstruktur, verfügbare Einstellungen und bekannte Einschränkungen findest du in der Dokumentation des Projekts.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
