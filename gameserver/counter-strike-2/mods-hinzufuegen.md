---
description: Mods auf einem Counter-Strike 2 Server hinzufügen
---

# So fügst du Mods zu deinem Counter-Strike 2 Server hinzu

Um Plugins und Mods auf deinem CS2 Server zu nutzen, benötigst du **Metamod** und **CounterStrikeSharp** als Basis-Framework.

## Metamod installieren

1. <b>Metamod herunterladen</b><br>
   Lade die neueste Version von [Metamod:Source](https://www.sourcemm.net/downloads.php/?branch=master) für CS2 herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /game/csgo/
   ```

5. <b>gameinfo.gi bearbeiten</b><br>
   Öffne die Datei `/game/csgo/gameinfo.gi` und suche die Zeile:

   ```
   Game_LowViolence	csgo_lv
   ```

   Füge **darunter** eine neue Zeile hinzu:

   ```
   Game	csgo/addons/metamod
   ```

6. <b>Server starten</b><br>
   Starte deinen Server. Überprüfe mit dem Konsolenbefehl `meta list`, ob Metamod geladen wurde.

## CounterStrikeSharp installieren

1. <b>CounterStrikeSharp herunterladen</b><br>
   Lade die neueste **with-runtime** Version von [CounterStrikeSharp](https://github.com/roflmuffin/CounterStrikeSharp/releases) herunter.

2. <b>Dateien hochladen</b><br>
   Entpacke das Archiv und lade den `addons`-Ordner in folgendes Verzeichnis hoch:

   ```
   /game/csgo/
   ```

3. <b>Server neu starten</b><br>
   Starte deinen Server neu. Überprüfe mit `css_plugins list`, ob CounterStrikeSharp geladen wurde.

## Plugins installieren

1. <b>Plugin herunterladen</b><br>
   Lade das gewünschte Plugin herunter.

2. <b>Plugin hochladen</b><br>
   Lade den Plugin-Ordner in folgendes Verzeichnis hoch:

   ```
   /game/csgo/addons/counterstrikesharp/plugins/
   ```

3. <b>Server neu starten</b><br>
   Starte deinen Server neu.

:::: warning Achtung
Stoppe deinen Server immer vor dem Hochladen von Dateien. Nach einem CS2-Update können Metamod, CounterStrikeSharp und Plugins inkompatibel sein — prüfe vorher, ob Updates verfügbar sind.
::::
