---
description: Mods und Plugins auf einem Left 4 Dead Server hinzufügen
---

# So fügst du Mods zu deinem Left 4 Dead Server hinzu

Auf einem Left 4 Dead Server gibt es zwei Arten von Erweiterungen: **Plugins** über Metamod:Source und SourceMod, die rein serverseitig laufen, und **Custom-Kampagnen** als VPK-Addons, die zusätzlich jeder Spieler installieren muss.

:::: danger Wichtig
Dein Server läuft unter Linux. Lade deshalb bei Metamod:Source und SourceMod immer das **Linux-Paket** (`.tar.gz`) herunter — das `.zip`-Paket ist die Windows-Variante und funktioniert nicht.
::::

## Metamod:Source installieren

Metamod:Source klinkt sich in die Source Engine ein und ist die Grundlage für SourceMod.

1. <b>Metamod:Source herunterladen</b><br>
   Lade die aktuelle stabile Version von [Metamod:Source](https://www.metamodsource.net/downloads.php?branch=stable) für Left 4 Dead als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den enthaltenen `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /left4dead/
   ```

   Danach existiert der Ordner `/left4dead/addons/metamod/`.

5. <b>metamod.vdf ersetzen</b><br>
   Öffne die Datei `/left4dead/addons/metamod.vdf` und ersetze ihren Inhalt vollständig durch diesen:

   ```
   "Plugin"
   {
   	"file"	"../left4dead/addons/metamod/bin/server"
   }
   ```

6. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `meta version`, ob Metamod:Source geladen wurde.

:::: danger Wichtig
Schritt 5 ist bei Left 4 Dead zwingend. Dem Paket liegt eine `metamod.vdf` bei, die auf `addons/metamod/bin/server` verweist — dieser Pfad passt für Left 4 Dead **nicht**. Ohne den vorangestellten `../left4dead/` lädt die Engine Metamod:Source nicht, und `meta version` antwortet mit `Unknown command`.
::::

:::: tip Tipp
Die passende Datei kannst du dir auch vom [VDF-Generator](https://www.metamodsource.net/vdf) von Metamod:Source erzeugen lassen. Wähle dort als Spiel **Left 4 Dead** aus.
::::

## SourceMod installieren

SourceMod baut auf Metamod:Source auf und stellt die Plugin-Umgebung sowie die Adminfunktionen bereit.

1. <b>SourceMod herunterladen</b><br>
   Lade die aktuelle stabile Version von [SourceMod](https://www.sourcemod.net/downloads.php) (aktuell die Reihe 1.12) als **Linux**-Paket (`.tar.gz`) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade die enthaltenen Ordner `addons` und `cfg` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /left4dead/
   ```

   Vorhandene Ordner werden dabei ergänzt, nicht ersetzt. Danach existiert der Ordner `/left4dead/addons/sourcemod/`.

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe in der Serverkonsole mit `sm version`, ob SourceMod geladen wurde.

:::: info Hinweis
Achte beim Hochladen darauf, die `metamod.vdf` aus Schritt 5 der Metamod-Installation nicht wieder zu überschreiben. Das SourceMod-Paket enthält zwar keine VDF-Datei, manche FTP-Programme ersetzen beim Zusammenführen aber ganze Ordner.
::::

## Plugins installieren

1. <b>Plugin herunterladen</b><br>
   Lade das gewünschte Plugin herunter. Fertige Plugins liegen als `.smx`-Datei vor.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Plugin hochladen</b><br>
   Lade die `.smx`-Datei per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /left4dead/addons/sourcemod/plugins/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server und prüfe mit `sm plugins list`, ob das Plugin geladen wurde.

:::: info Hinweis
Plugins werden ausschließlich serverseitig ausgeführt. Deine Mitspieler müssen dafür nichts installieren.
::::

## Custom-Kampagnen installieren

Custom-Kampagnen liegen als `.vpk`-Datei vor und werden auf dem Server genauso installiert wie beim Spieler.

1. <b>Kampagne herunterladen</b><br>
   Lade die gewünschte Kampagne als `.vpk`-Datei herunter.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>VPK hochladen</b><br>
   Lade die `.vpk`-Datei in folgendes Verzeichnis hoch:

   ```
   /left4dead/addons/
   ```

4. <b>Kampagne aktivieren</b><br>
   Gib in der Serverkonsole folgenden Befehl ein:

   ```
   update_addon_paths;mission_reload
   ```

   Damit wird die Kampagne ohne Neustart übernommen. Alternativ startest du deinen Server neu.

:::: danger Wichtig
Custom-Kampagnen müssen **alle Mitspieler** zusätzlich lokal installieren. Wer die Kampagne nicht hat, kann sie auf deinem Server nicht spielen.
::::

:::: warning Achtung
Für Left 4 Dead gibt es keinen Steam Workshop. Custom-Kampagnen bekommst du deshalb nur über Drittanbieter-Seiten. Lade `.vpk`-Dateien nur aus Quellen, denen du vertraust.
::::

## Ordnerstruktur im Überblick

```
/left4dead/addons/                        <- .vpk-Dateien für Custom-Kampagnen
/left4dead/addons/metamod.vdf             <- Ladedatei für Metamod:Source
/left4dead/addons/metamod/
/left4dead/addons/sourcemod/
/left4dead/addons/sourcemod/plugins/      <- .smx-Plugindateien
/left4dead/addons/sourcemod/configs/      <- Konfigurationen, z.B. Adminlisten
/left4dead/cfg/                           <- server.cfg und weitere Konfigurationen
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
Antwortet der Server auf einen dieser Befehle mit `Unknown command`, wurde die jeweilige Komponente nicht geladen. Prüfe in dem Fall zuerst den Inhalt der `metamod.vdf`, danach, ob du das Linux-Paket verwendet hast und ob die Ordner tatsächlich unter `/left4dead/addons/` liegen.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien hochlädst. Nach einem Spielupdate können Metamod:Source, SourceMod und einzelne Plugins inkompatibel sein — prüfe dann, ob Aktualisierungen verfügbar sind.
::::

:::: tip Tipp
Wie du dir mit SourceMod anschließend Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
