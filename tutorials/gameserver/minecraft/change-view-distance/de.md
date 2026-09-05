---
slug: "view-distance-aendern"
language: "de"
title: "So änderst Du die View-Distance auf einem Minecraft Java Edition Server"
description: "View-Distance auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2025-05-19"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "View-Distance ändern"
sort: 21
related: ["gameserver/minecraft/change-difficulty", "gameserver/minecraft/change-version", "gameserver/minecraft/change-world-border", "gameserver/minecraft/change-world-seed"]
---

## Was ist die View-Distance?

Die `view-distance` bestimmt, **wie viele Chunks der Server lädt und an die Clients sendet**. Ein Chunk ist in Minecraft ein Bereich von 16x16 Blöcken. Bei einer View-Distance von 10 sieht der Spieler in jede Richtung 10 Chunks (also ein Quadrat von 21x21 Chunks).

Die View-Distance beeinflusst nur das **Anzeigen** der Welt – also wie weit die Landschaft sichtbar ist. Sie hat **nichts** mit der aktiven Berechnung von Mobs, Redstone oder Spielern zu tun.

> [!NOTE]
> **Spieler oder Mobs werden erst aus der Nähe sichtbar?**
>
> Dann ist nicht die `view-distance`, sondern die [`simulation-distance`](/tutorials/gameserver/minecraft/change-simulation-distance) zuständig. Entities werden nur in dem Bereich getickt und angezeigt, der von der Simulation-Distance abgedeckt wird.

## Auswirkungen auf den Server

- Höhere Werte ermöglichen eine größere Weltsicht.
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## View-Distance ändern

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   view-distance=16
   ```

3. **Wert ändern**\
   Ändere den Wert nach Wunsch (z.B. `8` oder `12`).

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!TIP]
> **Empfehlung**
>
> - `6`–`8` → Bei großen Spielerzahlen & wenig Serverleistung
> - `16` → Standard-Einstellung
> - `16`+ → Nur bei starker Serverleistung

## Hinweis zur Client-Seite

Die View-Distance des Servers ist die **Obergrenze** – der Client kann nicht weiter sehen als der Server an ihn sendet. Spieler müssen zusätzlich in ihren **Video-Einstellungen** die **Render-Distanz** entsprechend hoch setzen, damit sie die ganze gesendete Sichtweite auch tatsächlich angezeigt bekommen.
