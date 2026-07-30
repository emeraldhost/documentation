---
description: Mods und Addons auf einem Garry's Mod Server hinzufügen
---

# So fügst du Mods zu deinem Garry's Mod Server hinzu

Addons kannst du auf zwei Wegen auf deinen Server bringen: über eine **Steam Workshop Collection**, die der Server beim Start automatisch herunterlädt, oder indem du die Addon-Ordner **manuell per SFTP** hochlädst.

:::: warning Achtung
Stoppe deinen Server, bevor du Dateien hochlädst. Nach einem Spielupdate können Addons inkompatibel sein und Fehler oder Abstürze verursachen.
::::

## Workshop Collection einrichten

Der Server kann genau **eine** Workshop Collection laden. Alle Addons, die du auf dem Server nutzen möchtest, gehören also in dieselbe Sammlung.

1. <b>Collection erstellen</b><br>
   Erstelle im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) eine eigene Collection und füge die gewünschten Addons hinzu.

   :::: warning Achtung
   Die Collection muss **öffentlich** oder **nicht gelistet** sein. Auf private Collections kann der Server nicht zugreifen.
   ::::

2. <b>Collection-ID kopieren</b><br>
   Die Collection-ID findest du in der URL der Collection. Kopiere die Zahl nach `?id=`.

   :::: tip Beispiel
   In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=157384458` ist die Collection-ID `157384458`.
   ::::

3. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

4. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

5. <b>Collection-ID eintragen</b><br>
   Trage die Collection-ID im Feld **Workshop ID** ein. Der Server startet damit mit dem Parameter:

   ```
   +host_workshop_collection 157384458
   ```

6. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Die Addons der Collection werden beim Start heruntergeladen und geladen.

:::: info Hinweis
Standardmäßig prüft der Server bei jedem Start, ob es Aktualisierungen für die Addons gibt. Mit der ConVar `host_workshop_autoupdate 0` kannst du dieses automatische Aktualisieren deaktivieren.
::::

## Addons manuell hochladen

Addons, die nicht aus dem Workshop stammen (sogenannte Legacy-Addons), lädst du als entpackten Ordner auf den Server.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Addon vorbereiten</b><br>
   Liegt das Addon als `.gma`-Datei vor, musst du sie zuerst entpacken. Nutze dafür `gmad.exe` aus deiner lokalen Spielinstallation unter `…\GarrysMod\bin\`. Auf den Server kommt anschließend der **entpackte Ordner**, nicht die `.gma`-Datei.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Addon hochladen</b><br>
   Lade den Addon-Ordner in folgendes Verzeichnis hoch:

   ```
   /garrysmod/addons/
   ```

   Jedes Addon liegt dabei in einem eigenen Unterordner, z.B. `/garrysmod/addons/mein-addon/` mit den Unterordnern `lua/`, `materials/`, `models/` oder `sound/`.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: danger Wichtig
Der Server läuft unter Linux und Dateipfade sind dort **groß- und kleinschreibungsabhängig**. `Mein-Addon`, `mein-addon` und `mein_addon` sind drei verschiedene Ordner. Schreibe Addon-Ordner deshalb konsequent klein und verzichte auf Leer- und Sonderzeichen.
::::

## Gamemode installieren

Gamemodes werden nicht im `addons`-Ordner abgelegt, sondern in einem eigenen Verzeichnis.

1. <b>Gamemode hochladen</b><br>
   Lade den Gamemode-Ordner per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /garrysmod/gamemodes/
   ```

2. <b>Gamemode auswählen</b><br>
   Trage in den **Einstellungen** deines Servers im Feld **Gamemode** den Ordnernamen des Gamemodes ein. Der Server startet damit mit dem Parameter `+gamemode <ordnername>`.

3. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Spieler zum Download der Addons zwingen

Spieler laden die Workshop-Addons deines Servers **nicht automatisch** herunter. Automatisch übernommen werden nur die aktuelle Map und der Gamemode, sofern sie aus der Collection deines Servers stammen. Alle übrigen Addons musst du einzeln erzwingen.

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. <b>Addons eintragen</b><br>
   Die Datei enthält bereits eine leere Zeile `resource.AddWorkshop( "" )`. Ersetze sie und trage pro Addon eine Zeile mit der jeweiligen **Addon-ID** ein — nicht die Collection-ID:

   ```lua
   resource.AddWorkshop( "104606562" )
   resource.AddWorkshop( "1234567890" )
   ```

3. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu.

:::: info Hinweis
Inhalte, die nicht aus dem Steam Workshop stammen (z.B. eigene Modelle oder Sounds), werden darüber nicht verteilt. Dafür benötigst du FastDL über die ConVar `sv_downloadurl` in der Datei `/garrysmod/cfg/server.cfg`.
::::

## Fremdspiel-Inhalte einbinden

Inhalte aus anderen Source-Spielen (z.B. Counter-Strike: Source) bindest du über folgende Datei ein:

```
/garrysmod/cfg/mount.cfg
```
