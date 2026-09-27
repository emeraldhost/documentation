---
slug: "npcs-deaktivieren"
language: "de"
title: "So deaktivierst Du NPCs auf einem Hytale Server"
description: "NPCs auf einem Hytale Server deaktivieren"
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
short_title: "NPCs deaktivieren"
sort: 11
related: ["gameserver/hytale/create-backup", "gameserver/hytale/create-new-world", "gameserver/hytale/download-world", "gameserver/hytale/enable-fall-damage"]
---

Du kannst das Spawnen von NPCs (Kreaturen, Monster, Tiere) pro Welt deaktivieren. Das ist nützlich für reine Bau-Server oder PvP-Arenen.

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

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

Per Befehl schaltest Du das NPC-Spawning im laufenden Betrieb um. Die Änderung wird direkt in der Welt-Konfiguration gespeichert.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   spawning disable --world default
   ```

   Ersetze `default` durch den Namen Deiner Welt. Der Server bestätigt mit `Spawning disabled for world "default"`. Um das Spawning wieder zu aktivieren, verwende:

   ```text
   spawning enable --world default
   ```

Admins können das NPC-Spawning auch im Spiel steuern. Ohne `--world` gilt der Befehl für die Welt, in der Du Dich gerade befindest:

```text
/spawning disable
```

Alternativ funktioniert auch `world settings spawningnpc set false --world default`. Mit `spawning --help` zeigst Du alle Unterbefehle an.

> [!NOTE]
> In der Konsole werden Befehle ohne `/` eingegeben und brauchen die Option `--world`, sonst antwortet der Server mit `Sender must be a player or provide the --world option!`. Im Spiel mit Admin-Rechten benötigst Du den `/`.

## Bereits gespawnte NPCs entfernen

Das Deaktivieren betrifft nur zukünftiges Spawning. Bereits existierende NPCs bleiben bestehen. Um die NPCs einer Welt zu entfernen, gib in der Konsole ein:

```text
npc clean --world default --confirm
```

Der Zusatz `--confirm` ist Pflicht, ohne ihn führt der Server den Befehl nicht aus. Im Spiel lautet der Befehl `/npc clean --confirm`.

> [!WARNING]
> `npc clean` entfernt alle NPCs, die in der Welt gerade geladen sind, also auch friedliche Tiere. NPCs in Bereichen, die gerade nicht geladen sind, erfasst der Befehl nicht. Dieser Schritt lässt sich nicht rückgängig machen.

> [!TIP]
> Möchtest Du die NPCs behalten, aber stillstehen lassen, friere sie stattdessen ein: `world settings freezeallnpcs set true --world default`. Mit `false` hebst Du das wieder auf. Die Einstellung wird in der Welt-Konfiguration als `IsAllNPCFrozen` gespeichert.
