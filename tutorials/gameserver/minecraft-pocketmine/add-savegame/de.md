---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Minecraft PocketMine Edition Server hinzu"
description: "Savegame auf einem Minecraft PocketMine Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/minecraft-pocketmine/add-admin", "gameserver/minecraft-pocketmine/add-mods", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

Ein Spielstand ist bei PocketMine-MP immer ein **kompletter Ordner** und keine einzelne Datei. Alle Welten liegen im Ordner `worlds` im Hauptordner Deines Servers. Welche Welt geladen wird, entscheidet der Eintrag `level-name` in der Datei `server.properties`.

> [!IMPORTANT]
> Die Welt in den Ordner zu legen reicht **nicht** aus. PocketMine-MP lädt ausschließlich die Welt, die unter `level-name` eingetragen ist. Passt der Name nicht zum Ordnernamen, erzeugt der Server stattdessen eine komplett neue Welt.

## Aufbau eines Welt-Ordners

```text
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

> [!WARNING]
> Lade immer den kompletten Ordner samt `db`-Unterordner hoch. Fehlt der Ordner `db`, ist die Welt leer beziehungsweise unbrauchbar.

## Lokale Welt finden

Möchtest Du eine Welt aus Deinem Minecraft Bedrock Client übertragen, findest Du sie an folgenden Orten:

| Plattform | Pfad |
|-----------|------|
| Windows (ab Bedrock 1.21.120) | `%appdata%\Minecraft Bedrock\Users\<Benutzer-ID>\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Windows Preview | `%appdata%\Minecraft Bedrock Preview\Users\<Benutzer-ID>\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Windows (vor Bedrock 1.21.120) | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\<Welt-ID>\` |
| Android | `/storage/emulated/<Benutzer-ID>/Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/<Welt-ID>/` |

> [!NOTE]
> Die Unterordner tragen eine interne Welt-ID und nicht den Namen, den Du im Spiel siehst. Den lesbaren Namen findest Du in der Datei `levelname.txt` im jeweiligen Ordner.

## Welt aus einer .mcworld-Datei entpacken

> [!WARNING]
> PocketMine-MP kann `.mcworld`-Dateien **nicht** direkt laden. Benenne die Datei dafür von `.mcworld` in `.zip` um, entpacke sie auf Deinem PC und lade den entpackten Ordner hoch.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die geladene Welt.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Verzeichnis öffnen**\
   Wechsle im Hauptordner Deines Servers in folgenden Ordner:

   ```text
   worlds
   ```

4. **Welt-Ordner hochladen**\
   Lade den kompletten Ordner Deiner Welt mit allen enthaltenen Dateien hoch. Vergib einen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `meine_welt`.

5. **server.properties öffnen**\
   Öffne im Hauptordner Deines Servers die Datei:

   ```text
   server.properties
   ```

6. **Weltnamen eintragen**\
   Suche den folgenden Eintrag und trage dort den Ordnernamen Deiner hochgeladenen Welt ein:

   ```text
   level-name=meine_welt
   ```

   > [!NOTE]
   > Der Weltname lässt sich nicht über ein Feld in der Verwaltung ändern. Du trägst ihn ausschließlich hier in der `server.properties` ein.

7. **Server starten**\
   Speichere die Änderung und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!TIP]
> Erstelle vor dem Wechsel ein [Backup](/tutorials/gameserver/minecraft-pocketmine/create-backup) Deiner bisherigen Welt oder lade sie herunter: [Savegame herunterladen](/tutorials/gameserver/minecraft-pocketmine/download-savegame).

## Welche Welten funktionieren?

| Herkunft der Welt | Format | Unterstützung |
|-------------------|--------|---------------|
| Bedrock Edition bis 1.18.20 | LevelDB | Wird direkt geladen |
| Bedrock Edition ab 1.18.30 | LevelDB | Wird direkt geladen, Entities werden unter Umständen nicht geladen |
| Minecraft Java Edition bis 1.12.x | McRegion / Anvil | Wird beim Laden konvertiert |
| PocketMine-MP 3 | PMAnvil | Wird beim Laden konvertiert |
| Minecraft Java Edition ab 1.13 | Anvil | Nicht unterstützt |

> [!IMPORTANT]
> Welten der Minecraft Java Edition ab Version 1.13 werden von PocketMine-MP nicht unterstützt und lassen sich nicht laden.

## Neue Welt erzeugen lassen

Existiert der unter `level-name` eingetragene Ordner nicht, legt PocketMine-MP die Welt beim Start neu an. Gesteuert wird das über folgende Einträge in der `server.properties`:

| Eintrag | Bedeutung |
|---------|-----------|
| `level-name` | Ordnername der Welt |
| `level-seed` | Startwert (Seed) der neuen Welt |
| `level-type` | Generator, mit dem die Welt erzeugt wird |
| `generator-settings` | Zusätzliche Einstellungen für den Generator |

## Mehrere Welten verwalten

Weitere Welten neben der Hauptwelt trägst Du in der Datei `pocketmine.yml` im Hauptordner Deines Servers ein:

```yaml
worlds:
  meine_zweite_welt:
    seed: 123456
    generator: FLAT
```

> [!NOTE]
> Zum Wechseln zwischen Welten im laufenden Spiel benötigst Du ein Plugin. Siehe [Mods hinzufügen](/tutorials/gameserver/minecraft-pocketmine/add-mods).
