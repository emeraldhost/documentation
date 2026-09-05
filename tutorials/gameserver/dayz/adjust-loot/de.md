---
slug: "loot-anpassen"
language: "de"
title: "So passt Du die Loot-Verteilung auf Deinem DayZ Server an"
description: "Loot-Verteilung auf einem DayZ Server anpassen"
tags: []
date: "2026-04-08"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Loot anpassen"
sort: 4
related: ["gameserver/dayz/add-mods", "gameserver/dayz/add-savegame", "gameserver/dayz/change-map", "gameserver/dayz/change-time"]
---

Du kannst die Spawn-Raten und Mengen von Items über die `types.xml` Datei anpassen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **types.xml öffnen**\
   Öffne die Datei `types.xml` im Verzeichnis:

   ```text
   /mpmissions/dayzOffline.chernarusplus/db/types.xml
   ```

   > [!NOTE]
   > Bei Livonia liegt die Datei unter `/mpmissions/dayzOffline.enoch/db/types.xml`.

4. **Item anpassen**\
   Suche das gewünschte Item und passe die Werte an. Beispiel für Munition:

   ```xml
   <type name="Ammo_545x39">
       <nominal>120</nominal>
       <lifetime>14400</lifetime>
       <restock>1800</restock>
       <min>80</min>
       <quantmin>20</quantmin>
       <quantmax>60</quantmax>
       <cost>100</cost>
   </type>
   ```

   | Einstellung | Beschreibung |
   |-------------|-------------|
   | `nominal` | Maximale Anzahl auf der Map |
   | `min` | Minimale Anzahl auf der Map |
   | `lifetime` | Lebenszeit in Sekunden |
   | `restock` | Zeit bis zum Respawn |
   | `quantmin` / `quantmax` | Min./Max. Stack-Größe |
   | `cost` | Spawn-Priorität |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Eine fehlerhafte `types.xml` kann verhindern, dass Dein Server startet. Mache vor Änderungen immer ein Backup der Datei.

> [!TIP]
> Es gibt online Tools wie [DayZ Editor](https://dayzeditor.com/) oder den [DayZ Loot Editor](https://www.dayz-loot-editor.com/), mit denen Du die `types.xml` einfacher bearbeiten kannst.
