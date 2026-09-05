---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Sons Of The Forest Server hinzu"
description: "Savegame auf einem Sons Of The Forest Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 4
related: ["gameserver/sons-of-the-forest/add-admin", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

Du kannst einen lokalen Spielstand auf Deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

> [!WARNING]
> Sons Of The Forest speichert Spielerdaten wie Inventar, Position und Kleidung **nicht** im Welt-Savegame. Nach dem Import bleiben Deine Bauwerke und der Weltzustand erhalten, alle Spieler starten aber mit einem neuen Charakter.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\AppData\LocalLow\Endnight\SonsOfTheForest\Saves
   ```

2. **Richtigen Unterordner wählen**\
   Öffne den Ordner mit Deiner SteamID64 und darin den Ordner `Multiplayer`. Er enthält alle Welten, in denen Du selbst der Host warst.

   > [!NOTE]
   > `MultiplayerClient` enthält Welten, in denen Du nur Gast warst, `Singleplayer` Deine Einzelspieler-Welten. Für einen Dedicated Server benötigst Du einen Spielstand aus `Multiplayer`.

3. **Spielstand identifizieren**\
   Jeder Spielstand ist ein eigener Ordner mit einer zufälligen Nummer als Namen (z.B. `1833122971`). Darin liegen mehrere Dateien – unter anderem verschiedene `.json`-Dateien und eine `SaveData.zip` –, die alle zusammengehören.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ordner umbenennen**\
   Benenne den Spielstand-Ordner in eine zehnstellige Zahl mit führenden Nullen um. Diese Zahl ist später Dein Save-Slot.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 0000000002
   > ```

4. **Spielstand hochladen**\
   Lade den kompletten Ordner mit allen enthaltenen Dateien in folgendes Verzeichnis hoch:

   ```text
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

5. **Save-Slot eintragen**\
   Öffne die Datei `/serverconfig/dedicatedserver.cfg` und passe folgende Werte an:

   ```json
   "SaveSlot": 2,
   "SaveMode": "Continue",
   ```

   Die Zahl bei `SaveSlot` muss dem Ordnernamen ohne führende Nullen entsprechen (`0000000002` entspricht also `2`).

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr einlesen kann.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> `SaveMode` muss auf `Continue` stehen. Steht dort `New`, wird der Slot beim nächsten Serverstart mit einer frisch generierten Welt überschrieben und Dein hochgeladener Spielstand ist verloren.

> [!TIP]
> **Ohne Umbenennen**
>
> Du kannst den Ordnernamen auch unverändert lassen und stattdessen die Zahl des Ordners direkt als Save-Slot eintragen – bei einem Ordner `1833122971` also `"SaveSlot": 1833122971`. Wichtig ist nur, dass Ordnername und `SaveSlot` zusammenpassen.

> [!WARNING]
> Existiert der Ordner `/serverconfig/Saves/DedicatedServer/Multiplayer/` noch nicht, starte den Server einmal, damit die Ordnerstruktur automatisch angelegt wird. Stoppe den Server anschließend wieder, bevor Du die Dateien hochlädst.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/sons-of-the-forest/create-backup) Deines bisherigen Server-Savegames, falls Du später zurückwechseln möchtest.
