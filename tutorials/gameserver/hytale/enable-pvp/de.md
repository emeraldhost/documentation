---
slug: "pvp-aktivieren"
language: "de"
title: "So aktivierst Du PvP auf einem Hytale Server"
description: "PvP auf einem Hytale Server aktivieren oder deaktivieren"
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
short_title: "PvP aktivieren"
sort: 14
related: ["gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance"]
---

PvP (Player versus Player) ermöglicht es Spielern, gegeneinander zu kämpfen. Diese Einstellung wird pro Welt konfiguriert.

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So aktivierst oder deaktivierst Du PvP per Konfiguration

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/<weltname>/config.json
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

3. **PvP-Einstellung ändern**\
   Suche nach der Einstellung `IsPvpEnabled` und ändere den Wert:

   ```json
   "IsPvpEnabled": true
   ```

   - `true` - PvP aktiviert
   - `false` - PvP deaktiviert

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## So aktivierst Du PvP per Befehl

Admins können PvP auch direkt im Spiel aktivieren oder deaktivieren:

```text
/world config pvp true
```

Um PvP zu deaktivieren:

```text
/world config pvp false
```

> [!TIP]
> **Hinweis**
>
> Der Befehl erfordert Admin-Rechte und wirkt sich nur auf die aktuelle Welt aus.
