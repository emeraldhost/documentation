---
slug: "view-distance-aendern"
language: "de"
title: "So änderst Du die View-Distance auf Deinem Minecraft Bedrock Server"
description: "Minecraft Bedrock Edition View Distance richtig anpassen - Anleitung für Deinen Minecraft Server zur Optimierung der Performance und Sichtweite."
tags: []
date: "2025-06-10"
visibility: "public"
updated: "2026-05-30"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "View-Distance ändern"
sort: 12
related: ["gameserver/minecraft-bedrock/add-behavior-und-resource-packs", "gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

## Was ist die View-Distance?

Die `view-distance` bestimmt, **wie viele Chunks der Server lädt und an die Clients sendet**. Ein Chunk ist in Minecraft ein Bereich von 16x16 Blöcken. Bei einer View-Distance von 10 sieht der Spieler in jede Richtung 10 Chunks (also ein Quadrat von 21x21 Chunks).

Die View-Distance beeinflusst nur das **Anzeigen** der Welt – also wie weit die Landschaft sichtbar ist. Sie hat **nichts** mit der aktiven Berechnung von Mobs, Redstone oder Spielern zu tun.

> [!NOTE]
> **Spieler oder Mobs werden erst aus der Nähe sichtbar?**
>
> Dann ist nicht die `view-distance`, sondern die [`tick-distance`](/tutorials/gameserver/minecraft-bedrock/change-tick-distance) zuständig. Entities werden nur in dem Bereich getickt und angezeigt, der von der Tick-Distance abgedeckt wird.

## Auswirkungen auf den Server

- Höhere Werte ermöglichen eine größere Weltsicht.
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## View-Distance ändern

1. **Server auswählen**\
   Gehe in der Verwaltung auf Deinen Minecraft Bedrock Edition Server.

2. **Datei-Browser öffnen**\
   Öffne den Datei-Browser.

3. **Datei öffnen**\
   Öffne die Datei `server.properties`.

4. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   view-distance=32
   ```

5. **Wert ändern**\
   Ändere den Wert nach Wunsch (z.B. `12` oder `10`).

6. **Änderungen speichern**\
   Speichere die Änderungen durch einen Klick auf „Speichern“.

7. **Server neustarten**\
   Starte den Server neu, damit die Änderungen aktiv werden.

> [!TIP]
> **Empfehlung**
>
> - `6`–`8` → Bei großen Spielerzahlen & wenig Serverleistung
> - `10`–`12` → Ausgewogen zwischen Performance und Sichtweite
> - `16`–`20` → Nur bei starker Serverleistung
> - `32` → Standard-Einstellung

## Hinweis zur Client-Seite

Die View-Distance des Servers ist die **Obergrenze** – der Client kann nicht weiter sehen als der Server an ihn sendet. Spieler müssen zusätzlich in ihren **Video-Einstellungen** die **Render-Distanz** entsprechend hoch setzen, damit sie die ganze gesendete Sichtweite auch tatsächlich angezeigt bekommen.
