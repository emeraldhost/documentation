---
slug: "npcs-deaktivieren"
language: "de"
title: "So deaktivierst Du NPCs auf einem Hytale Server"
description: "NPCs auf einem Hytale Server deaktivieren"
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
short_title: "NPCs deaktivieren"
sort: 11
related: ["gameserver/hytale/create-backup", "gameserver/hytale/create-new-world", "gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage"]
---

Du kannst das Spawnen von NPCs (Kreaturen, Monster, Tiere) pro Welt deaktivieren. Das ist nützlich für reine Bau-Server oder PvP-Arenen.

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So deaktivierst Du NPCs per Konfiguration

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/<weltname>/config.json
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

3. **NPC-Spawning ändern**\
   Suche nach der Einstellung `IsSpawningNPC` und ändere den Wert:

   ```json
   "IsSpawningNPC": false
   ```

   - `true` - NPCs spawnen (Standard)
   - `false` - Keine NPCs spawnen

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

## So deaktivierst Du NPCs per Befehl

Admins können das NPC-Spawning auch im Spiel kontrollieren:

```text
/spawning
```

Nutze `/spawning -help` für verfügbare Optionen.

> [!TIP]
> **Hinweis**
>
> In der Konsole werden Befehle ohne `/` eingegeben. Im Spiel mit Admin-Rechten benötigst Du den `/`.

## Bereits gespawnte NPCs entfernen

Um alle NPCs in einem Bereich zu entfernen, kannst Du den Kill-Befehl verwenden oder die Welt neu laden.

> [!TIP]
> **Hinweis**
>
> Das Deaktivieren von NPCs betrifft nur zukünftiges Spawning. Bereits existierende NPCs bleiben bestehen.
