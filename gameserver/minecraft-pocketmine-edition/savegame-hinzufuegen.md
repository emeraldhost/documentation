---
description: Savegame auf einem Minecraft PocketMine Edition Server hinzufügen
---

# So fügst du ein Savegame zu deinem Minecraft PocketMine Edition Server hinzu

Ein Spielstand ist bei PocketMine-MP immer ein **kompletter Ordner** und keine einzelne Datei. Alle Welten liegen im Ordner `worlds` im Hauptordner deines Servers. Welche Welt geladen wird, entscheidet der Eintrag `level-name` in der Datei `server.properties`.

:::: danger Wichtig
Die Welt in den Ordner zu legen reicht **nicht** aus. PocketMine-MP lädt ausschließlich die Welt, die unter `level-name` eingetragen ist. Passt der Name nicht zum Ordnernamen, erzeugt der Server stattdessen eine komplett neue Welt.
::::

## Aufbau eines Welt-Ordners

```
worlds
|___ meine_welt
|    |___ db
|    |___ level.dat
|    |___ levelname.txt
|___ meine_zweite_welt
     |___ db
     |___ level.dat
     |___ levelname.txt
```

| Datei / Ordner | Inhalt |
|----------------|--------|
| `db` | Die eigentliche LevelDB-Datenbank mit allen Chunks der Welt |
| `level.dat` | Weltdaten wie Seed, Spielregeln, Spawnpunkt und Zeit |
| `levelname.txt` | Der im Spiel lesbare Name der Welt |

:::: warning Achtung
Lade immer den kompletten Ordner samt `db`-Unterordner hoch. Fehlt der Ordner `db`, ist die Welt leer beziehungsweise unbrauchbar.
::::

## Lokale Welt finden

Möchtest du eine Welt aus deinem Minecraft Bedrock Client übertragen, findest du sie an folgenden Orten:

| Plattform | Pfad |
|-----------|------|
| Windows (ab Bedrock 1.21.120) | `%appdata%\Minecraft Bedrock\Users\<Benutzer-ID>\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Windows Preview | `%appdata%\Minecraft Bedrock Preview\Users\<Benutzer-ID>\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Windows (vor Bedrock 1.21.120) | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Android | `/storage/emulated/<Benutzer-ID>/Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/<Welt-ID>/` |

:::: info Hinweis
Die Unterordner tragen eine interne Welt-ID und nicht den Namen, den du im Spiel siehst. Den lesbaren Namen findest du in der Datei `levelname.txt` im jeweiligen Ordner.
::::

## Welt aus einer .mcworld-Datei entpacken

:::: warning Achtung
PocketMine-MP kann `.mcworld`-Dateien **nicht** direkt laden. Benenne die Datei dafür von `.mcworld` in `.zip` um, entpacke sie auf deinem PC und lade den entpackten Ordner hoch.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die geladene Welt.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle im Hauptordner deines Servers in folgenden Ordner:

   ```
   worlds
   ```

4. <b>Welt-Ordner hochladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien hoch. Vergib einen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `meine_welt`.

5. <b>server.properties öffnen</b><br>
   Öffne im Hauptordner deines Servers die Datei:

   ```
   server.properties
   ```

6. <b>Weltnamen eintragen</b><br>
   Suche den folgenden Eintrag und trage dort den Ordnernamen deiner hochgeladenen Welt ein:

   ```
   level-name=meine_welt
   ```

   :::: info Hinweis
   Der Weltname lässt sich nicht über ein Feld in der Verwaltung ändern. Du trägst ihn ausschließlich hier in der `server.properties` ein.
   ::::

7. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: tip Tipp
Erstelle vor dem Wechsel ein [Backup](backup-erstellen.md) deiner bisherigen Welt oder lade sie herunter: [Savegame herunterladen](savegame-herunterladen.md).
::::

## Welche Welten funktionieren?

| Herkunft der Welt | Format | Unterstützung |
|-------------------|--------|---------------|
| Bedrock Edition bis 1.18.20 | LevelDB | Wird direkt geladen |
| Bedrock Edition ab 1.18.30 | LevelDB | Wird direkt geladen, Entities werden unter Umständen nicht geladen |
| Minecraft Java Edition bis 1.12.x | McRegion / Anvil | Wird beim Laden konvertiert |
| PocketMine-MP 3 | PMAnvil | Wird beim Laden konvertiert |
| Minecraft Java Edition ab 1.13 | Anvil | Nicht unterstützt |

:::: danger Wichtig
Welten der Minecraft Java Edition ab Version 1.13 werden von PocketMine-MP nicht unterstützt und lassen sich nicht laden.
::::

## Neue Welt erzeugen lassen

Existiert der unter `level-name` eingetragene Ordner nicht, legt PocketMine-MP die Welt beim Start neu an. Gesteuert wird das über folgende Einträge in der `server.properties`:

| Eintrag | Bedeutung |
|---------|-----------|
| `level-name` | Ordnername der Welt |
| `level-seed` | Startwert (Seed) der neuen Welt |
| `level-type` | Generator, mit dem die Welt erzeugt wird |
| `generator-settings` | Zusätzliche Einstellungen für den Generator |

## Mehrere Welten verwalten

Weitere Welten neben der Hauptwelt trägst du in der Datei `pocketmine.yml` im Hauptordner deines Servers ein:

```yaml
worlds:
  meine_zweite_welt:
    seed: 123456
    generator: FLAT
```

:::: info Hinweis
Zum Wechseln zwischen Welten im laufenden Spiel benötigst du ein Plugin. Siehe [Mods hinzufügen](mods-hinzufuegen.md).
::::
