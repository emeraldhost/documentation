---
slug: "pvp-aktivieren"
language: "de"
title: "So aktivierst Du PvP auf einem Hytale Server"
description: "PvP auf einem Hytale Server aktivieren oder deaktivieren"
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
short_title: "PvP aktivieren"
sort: 14
related: ["gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance"]
---

PvP (Player versus Player) ermöglicht es Spielern, gegeneinander zu kämpfen. Diese Einstellung wird pro Welt konfiguriert und ist standardmäßig deaktiviert.

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

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
   - `false` - PvP deaktiviert (Standard)

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## So aktivierst Du PvP per Befehl

Per Befehl schaltest Du PvP im laufenden Betrieb um. Die Änderung gilt sofort und wird in der Welt-Konfiguration gespeichert, ein Neustart ist nicht nötig.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   world config pvp true --world default
   ```

   Ersetze `default` durch den Namen Deiner Welt. Um PvP zu deaktivieren, verwende `false`:

   ```text
   world config pvp false --world default
   ```

   Die Konsole antwortet derzeit in beiden Fällen mit `PvP disabled for default`, auch wenn Du PvP aktivierst. Die Einstellung wird trotzdem richtig gespeichert. Den tatsächlichen Stand zeigt Dir `world settings pvp --world default` an, z.B. `PvP in world "default" is currently true`.

Admins können PvP auch direkt im Spiel umschalten. Ohne `--world` gilt der Befehl für die Welt, in der Du Dich gerade befindest:

```text
/world config pvp true
```

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel benötigst Du den `/` und Admin-Rechte, siehe [Admin hinzufügen](/tutorials/gameserver/hytale/add-admin).

> [!TIP]
> Alternativ funktioniert auch `world settings pvp set true --world default`. Dieser Befehl meldet den neuen Wert korrekt zurück, z.B. `PvP in world "default" set to "true" (was "false")`.
