---
slug: "fallschaden-aktivieren"
language: "de"
title: "So aktivierst Du Fallschaden auf einem Hytale Server"
description: "Fallschaden auf einem Hytale Server aktivieren oder deaktivieren"
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
short_title: "Fallschaden aktivieren"
sort: 3
related: ["gameserver/hytale/disable-npcs", "gameserver/hytale/download-world", "gameserver/hytale/enable-pvp", "gameserver/hytale/enable-whitelist"]
---

Fallschaden bestimmt, ob Spieler beim Fallen aus großer Höhe Schaden nehmen. Diese Einstellung wird pro Welt konfiguriert.

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So aktivierst oder deaktivierst Du Fallschaden per Konfiguration

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/<weltname>/config.json
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

3. **Fallschaden-Einstellung ändern**\
   Suche nach der Einstellung `IsFallDamageEnabled` und ändere den Wert:

   ```json
   "IsFallDamageEnabled": true
   ```

   - `true` - Fallschaden aktiviert (Standard)
   - `false` - Fallschaden deaktiviert

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## So aktivierst Du Fallschaden per Befehl

Admins können Fallschaden auch direkt im Spiel aktivieren oder deaktivieren:

```text
/world config falldamage true
```

Um Fallschaden zu deaktivieren:

```text
/world config falldamage false
```

> [!TIP]
> **Hinweis**
>
> Fallschaden zu deaktivieren ist besonders nützlich für Bau-Server oder kreative Welten, in denen Spieler ohne Risiko bauen können.
