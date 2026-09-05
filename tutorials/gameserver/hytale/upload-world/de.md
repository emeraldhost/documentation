---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Singleplayer-Welt auf Deinen Hytale Server hoch"
description: "Singleplayer-Welt auf einen Hytale Server hochladen"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
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

Die Hytale-Speicherdateien findest Du hier:

| Betriebssystem | Pfad |
| -------------- | ---- |
| Windows | `%appdata%\Hytale\Saves` |
| Linux | `$XDG_DATA_HOME/Hytale/Saves` |
| macOS | `~/Application Support/Hytale/Saves` |

Navigiere innerhalb Deines Spielstands zu `universe/worlds/` um die Welt-Ordner zu finden.

## So lädst Du die Welt hoch

> [!TIP]
> **Hinweis**
>
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

4. **Server starten**\
   Starte Deinen Server.

## So aktivierst Du die Welt

Nach dem Hochladen musst Du die Welt laden und als Standard setzen.

### Per Konsole

1. **Welt laden**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   world load <weltname>
   ```

   Ersetze `<weltname>` durch den Namen des hochgeladenen Ordners.

2. **Als Standard setzen**\
   Damit Spieler beim Beitreten automatisch in dieser Welt spawnen:

   ```text
   world setdefault <weltname>
   ```

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/` (z.B. `/world load <weltname>`).

### Per Konfiguration

Du kannst die Standard-Welt auch manuell in der Server-Konfiguration setzen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **config.json öffnen**\
   Öffne die `config.json` im Hauptverzeichnis Deines Servers.

3. **Standard-Welt ändern**\
   Suche nach dem `Defaults` Block und ändere den `World` Wert:

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

## Spielerdaten übertragen

Wenn Du auch Deinen Spielerfortschritt übertragen möchtest (Inventar, Position, etc.):

1. Kopiere den Inhalt des `players/` Ordners aus Deinem Singleplayer-Spielstand.
2. Lade ihn auf dem Server in den Ordner `/universe/players/` hoch.

> [!WARNING]
> Lade nur die Welt-Ordner hoch, nicht den gesamten `universe/` Ordner - sonst werden bestehende Server-Welten überschrieben.
