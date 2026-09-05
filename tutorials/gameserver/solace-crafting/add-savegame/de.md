---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Solace Crafting Server hinzu"
description: "Savegame auf einem Solace Crafting Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/download-savegame", "gameserver/solace-crafting/join-server"]
---

Eine Welt ist in Solace Crafting immer ein **kompletter Ordner** – der Ordnername ist gleichzeitig der Weltname. Welche Welt Dein Server lädt, steht in der Konfigurationsdatei `servercfg.dat` unter `worldSaveToUse`.

> [!NOTE]
> Standardmäßig verwendet der Dedicated Server den Weltordner `MultiplayerWorld`. Existiert keine Welt mit diesem Namen, legt der Server beim Start automatisch eine neue Welt mit den Standardeinstellungen an.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/solace-crafting/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Welt im Client vorbereiten

Die Welteinstellungen – Schwierigkeit, Seed, Biome und die verschiedenen Raten – werden ausschließlich beim **Erstellen einer Welt im Spiel** festgelegt. Auf dem Server lassen sie sich nachträglich nicht mehr ändern. Möchtest Du eigene Einstellungen nutzen, gehst Du deshalb den Umweg über den Client:

1. **Welt erstellen**\
   Starte Solace Crafting auf Deinem PC und erstelle eine neue Welt mit den gewünschten Einstellungen.

2. **Spiel beenden**\
   Verlasse die Welt und schließe das Spiel, damit alle Dateien vollständig geschrieben sind.

## Lokalen Spielstand finden

Deine Welten liegen auf Deinem PC unter:

```text
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```

> [!TIP]
> Drücke `Windows-Taste + R`, gib den Pfad ein und bestätige mit Enter. Jeder Unterordner in `Worlds` ist eine Welt – Du benötigst den **kompletten Ordner** samt Inhalt.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   > [!NOTE]
   > Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in Deinem SFTP-Programm die Anzeige versteckter Dateien, falls Du ihn nicht siehst. Fehlt das Verzeichnis noch, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.

4. **Weltordner hochladen**\
   Lade den kompletten Weltordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

5. **Welt in der Konfiguration eintragen**\
   Öffne folgende Datei:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   Trage bei `worldSaveToUse` den Namen Deines hochgeladenen Weltordners ein:

   ```json
   "worldSaveToUse": "MeineWelt",
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr einlesen kann.

   > [!TIP]
   > **Alternative**
   >
   > Statt den Wert anzupassen, kannst Du Deinen hochgeladenen Ordner auch einfach in `MultiplayerWorld` umbenennen. Dann bleibt die Standardkonfiguration unverändert.

6. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!IMPORTANT]
> Ordnername und der Wert bei `worldSaveToUse` müssen exakt übereinstimmen – auch bei Groß- und Kleinschreibung. Passt der Name nicht, erstellt der Server stattdessen eine neue, leere Welt.

> [!WARNING]
> Existiert im Zielverzeichnis bereits ein Ordner mit demselben Namen, wird der bisherige Spielstand überschrieben. Lade ihn vorher herunter, falls Du ihn behalten möchtest: [Savegame herunterladen](/tutorials/gameserver/solace-crafting/download-savegame).
