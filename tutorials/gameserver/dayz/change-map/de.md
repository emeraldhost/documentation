---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem DayZ Server"
description: "Map auf einem DayZ Server ändern, z.B. auf Sakhal oder die neue Map Nasdara"
tags: []
date: "2026-04-08"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 5
related: ["gameserver/dayz/add-savegame", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-time", "gameserver/dayz/configure-pvp"]
---

Du kannst zwischen den vier offiziellen Maps wechseln:

| Map | DLC |
|-----|-----|
| **Chernarus** | – (Hauptspiel) |
| **Livonia** | Livonia |
| **Sakhal** | DayZ Frostline |
| **Nasdara** | DayZ Badlands |

**Nasdara** ist die neueste Map. Sie ist am 15. Oktober 2026 mit dem DLC **DayZ Badlands** und dem Update 1.30 erschienen und mit 267 km² die größte offizielle Map von DayZ.

> [!WARNING]
> Für Deinen Server musst Du kein DLC kaufen. Die Spieler benötigen aber das passende DLC: Für Server mit Sakhal setzt Bohemia Interactive DayZ Frostline voraus, für Livonia das Livonia DLC. Für Nasdara ist davon auszugehen, dass Spieler ebenfalls DayZ Badlands benötigen – offiziell bestätigt hat Bohemia das bisher nicht.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serverDZ.cfg öffnen**\
   Öffne die Datei `serverDZ.cfg` im Hauptverzeichnis Deines Servers.

4. **Map festlegen**\
   Suche den Abschnitt `class Missions` und ändere den `template`-Wert:

   ```text
   class Missions
   {
       class Mission1
       {
           template="dayzOffline.chernarusplus";
       };
   };
   ```

   | Wert | Map |
   |------|-----|
   | `dayzOffline.chernarusplus` | Chernarus (Standard) |
   | `dayzOffline.enoch` | Livonia (DLC) |
   | `dayzOffline.sakhal` | Sakhal (DLC DayZ Frostline) |
   | `dayzOffline.nasdara` | Nasdara (DLC DayZ Badlands) |

   > [!TIP]
   > **Beispiel für Nasdara**
   >
   > ```text
   > template="dayzOffline.nasdara";
   > ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Nasdara gibt es erst ab Version 1.30. Steht in der Verwaltung im **Config-Editor** das Feld **Auto Update** auf `1`, aktualisiert sich Dein Server beim Start automatisch. Prüfe, ob im Ordner `/mpmissions/` der Ordner `dayzOffline.nasdara` vorhanden ist. Fehlt er, ist Dein Server noch nicht auf dem aktuellen Stand.

> [!NOTE]
> Beim ersten Start mit einer neuen Map wird automatisch eine neue Welt generiert. Dein bisheriger Spielfortschritt der alten Map bleibt erhalten.
