---
slug: "passwort-setzen"
language: "de"
title: "So setzt Du ein Passwort auf einem Hytale Server"
description: "Passwort auf einem Hytale Server setzen"
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
short_title: "Passwort setzen"
sort: 12
related: ["gameserver/hytale/kick-ban-players", "gameserver/hytale/pause-game-time", "gameserver/hytale/set-spawn-point", "gameserver/hytale/upload-world"]
---

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So setzt Du ein Passwort

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Passwort festlegen**\
   Suche nach der Einstellung `Password` und setze Dein gewünschtes Passwort:

   ```json
   "Password": "DeinPasswort123"
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

Spieler müssen nun das Passwort eingeben, um dem Server beizutreten. Hytale fragt beim Beitreten automatisch danach. Das Passwort gilt für alle Spieler, auch für Admins.

## So entfernst Du das Passwort

Um das Passwort zu entfernen, setze den Wert auf leer:

```json
"Password": ""
```

> [!NOTE]
> Ein Passwort ist eine einfache Alternative zur [Whitelist](/tutorials/gameserver/hytale/enable-whitelist). Du kannst das Passwort an Freunde weitergeben, ohne jeden einzeln zur Whitelist hinzufügen zu müssen.
