---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Singleplayer-Welt auf Deinen Hytale Server hoch"
description: "Singleplayer-Welt auf einen Hytale Server hochladen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt hochladen"
sort: 22
related: ["gameserver/hytale/pause-game-time", "gameserver/hytale/set-password", "gameserver/hytale/set-spawn-point", "gameserver/hytale/change-world-seed"]
---

Du kannst Deine Singleplayer-Welt auf Deinen Server übertragen und mit Freunden weiterspielen.

## So findest Du Deine Welt-Dateien

### Methode 1: Über Hytale

1. **Hytale öffnen**\
   Öffne Hytale und gehe zu „Worlds“.

2. **Ordner öffnen**\
   Klicke mit Rechtsklick auf Deine Welt und wähle „Open Folder“.

3. **Welt-Ordner kopieren**\
   Navigiere zu `universe/worlds/` - hier findest Du die Ordner Deiner Welten. Kopiere den gewünschten Welt-Ordner.

### Methode 2: Manuell

Die Hytale-Spielstände findest Du hier:

| Betriebssystem | Pfad |
| -------------- | ---- |
| Windows | `%appdata%\Hytale\UserData\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/UserData/Saves` |
| macOS | `~/Library/Application Support/Hytale/UserData/Saves` |

Jeder Spielstand hat dort einen eigenen Ordner. Navigiere innerhalb Deines Spielstands zu `universe/worlds/`, um die Welt-Ordner zu finden.

> [!NOTE]
> Spielst Du auf der Pre-Release-Version von Hytale, liegen Deine Spielstände nicht unter `UserData`, sondern im Ordner `data/pre-release/` innerhalb des Hytale-Ordners. Eine solche Welt lässt sich auf einem Server mit der Patchline `release` unter Umständen nicht öffnen. Die Patchline Deines Servers stellst Du in der **Verwaltung** unter **Einstellungen** im Feld **Hytale Patchline** ein.

## So lädst Du die Welt hoch

> [!NOTE]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Ordner hochladen**\
   Lade den kopierten Welt-Ordner in folgendes Verzeichnis hoch:

   ```text
   /universe/worlds/
   ```

   Der Name des Ordners ist später der Name der Welt.

4. **Server starten**\
   Starte Deinen Server. Er lädt beim Start automatisch alle Welten aus `/universe/worlds/`, also auch Deine hochgeladene Welt.

> [!WARNING]
> Gibt es auf dem Server bereits einen Ordner mit demselben Namen (die Standardwelt des Servers heißt `default`), benenne Deinen Welt-Ordner vor dem Hochladen um. Sonst überschreibst Du die Dateien der bestehenden Welt.

## So setzt Du die Welt als Standard

Damit Spieler beim Beitreten in Deiner hochgeladenen Welt landen, musst Du sie als Standardwelt festlegen.

### Per Konsole

1. **Welt prüfen**\
   Gib folgenden Befehl in die Konsole ein, um alle geladenen Welten anzuzeigen:

   ```text
   world list
   ```

   Deine hochgeladene Welt sollte hier mit dem Namen ihres Ordners erscheinen.

2. **Als Standard setzen**\
   Damit Spieler beim Beitreten automatisch in dieser Welt spawnen:

   ```text
   world setdefault <weltname>
   ```

   Ersetze `<weltname>` durch den Namen des hochgeladenen Ordners.

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/world setdefault <weltname>`).

### Per Konfiguration

Du kannst die Standard-Welt auch manuell in der Server-Konfiguration setzen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **config.json öffnen**\
   Öffne die `config.json` im Hauptverzeichnis Deines Servers.

3. **Standard-Welt ändern**\
   Suche nach dem `Defaults` Block und ändere den `World` Wert. Die übrigen Einträge im Block lässt Du unverändert:

   ```json
   "Defaults": {
     "World": "meinewelt",
     "GameMode": "Adventure"
   }
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server.

> [!NOTE]
> Spieler, die schon einmal auf dem Server waren, betreten ihn weiterhin in der Welt, in der sie sich zuletzt aufgehalten haben. Die Standardwelt gilt für neue Spieler und für Spieler, deren letzte Welt nicht mehr geladen ist. Mit Admin-Rechten wechselst Du im Spiel mit `/tp world <weltname>` in eine andere Welt.

## Spielerdaten übertragen

Wenn Du auch Deinen Spielerfortschritt übertragen möchtest (Inventar, Position, etc.):

1. Kopiere den Inhalt des Ordners `universe/players/` aus Deinem Singleplayer-Spielstand.
2. Lade ihn bei gestopptem Server in den Ordner `/universe/players/` hoch.

> [!WARNING]
> Lade nur die Welt-Ordner hoch, nicht den gesamten `universe/` Ordner - sonst werden bestehende Server-Welten überschrieben.
