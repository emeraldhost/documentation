---
slug: "behavior-und-resource-packs-hinzufuegen"
language: "de"
title: "So fügst Du Behavior und Resource Packs auf Deinem Minecraft Bedrock Server hinzu"
description: "Behavior und Resource Packs auf einem Minecraft Bedrock Server hinzufügen"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Behavior und Resource Packs hinzufügen"
sort: 3
related: ["gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

Du kannst Behavior Packs und Resource Packs auf Deinem Server installieren, um das Spielerlebnis zu erweitern. Packs werden als Ordner hochgeladen und anschließend per JSON-Datei in der Welt aktiviert.

## Pack hochladen

1. **Pack herunterladen**\
   Lade das gewünschte Pack herunter. Falls es als `.mcpack` oder `.mcaddon` vorliegt, benenne die Datei in `.zip` um und entpacke sie.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Pack-Ordner hochladen**\
   Lade den entpackten Ordner in das entsprechende Verzeichnis hoch:

   | Pack-Typ | Verzeichnis |
   |----------|-------------|
   | Behavior Pack | `/behavior_packs/` |
   | Resource Pack | `/resource_packs/` |

## Pack aktivieren

5. **UUID und Version ermitteln**\
   Öffne die Datei `manifest.json` im hochgeladenen Pack-Ordner. Kopiere die Werte `uuid` und `version` aus dem `header`-Bereich:

   ```json
   {
     "header": {
       "uuid": "dein-pack-uuid",
       "version": [1, 0, 0]
     }
   }
   ```

6. **JSON-Datei bearbeiten**\
   Öffne (oder erstelle) die entsprechende JSON-Datei im Welt-Ordner Deines Servers (z.B. `/worlds/Bedrock level/`):

   | Pack-Typ | Datei |
   |----------|-------|
   | Behavior Pack | `world_behavior_packs.json` |
   | Resource Pack | `world_resource_packs.json` |

   Trage das Pack mit `pack_id` und `version` ein. Das Beispiel zeigt, wie zwei Packs in der Liste stehen – die Einträge werden mit einem Komma getrennt:

   ```json
   [
     {
       "pack_id": "uuid-des-ersten-packs",
       "version": [1, 0, 0]
     },
     {
       "pack_id": "uuid-des-zweiten-packs",
       "version": [1, 2, 0]
     }
   ]
   ```

   Jeder Eintrag bekommt die `uuid` und `version` aus der `manifest.json` des jeweiligen Packs. Nutzt Du nur ein Pack, entfällt der zweite Eintrag samt Komma.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Packs nicht lädt.

7. **Server starten**\
   Speichere die Dateien und starte Deinen Server.

> [!WARNING]
> Verwende immer die `uuid` aus dem `header`-Bereich der `manifest.json`, nicht die aus dem `modules`-Bereich.

> [!NOTE]
> Einige Packs erfordern, dass alle Spieler das Resource Pack ebenfalls auf ihrem Client installiert haben.
