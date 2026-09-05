---
slug: "tick-distance-aendern"
language: "de"
title: "So änderst Du die Tick-Distance auf Deinem Minecraft Bedrock Server"
description: "Minecraft Bedrock Edition Tick Distance richtig anpassen - Anleitung für Deinen Minecraft Server zur Optimierung der Performance."
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
short_title: "Tick-Distance ändern"
sort: 10
related: ["gameserver/minecraft-bedrock/add-behavior-und-resource-packs", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/change-world-seed"]
---

## Was ist die Tick-Distance?

Die `tick-distance` bestimmt, **in welchem Radius rund um den Spieler Entities und Spielmechaniken aktiv getickt werden**. Das umfasst:

- **Andere Spieler und Mobs** – sie werden nur in diesem Bereich bewegt und angezeigt
- **Redstone-Schaltungen**
- **Mob-Spawning**
- **Pflanzenwachstum** und Ticks von Feuer, Wasser, Tropfstein etc.

Chunks außerhalb der Tick-Distance werden zwar noch geladen (solange sie in der [`view-distance`](/tutorials/gameserver/minecraft-bedrock/change-view-distance) liegen), sind aber sozusagen „eingefroren“.

> [!WARNING]
> **Spieler werden erst aus der Nähe sichtbar?**
>
> Das ist der häufigste Fall: Steht die Tick-Distance zu niedrig (z.B. auf `4`), erscheinen andere Spieler und Entities erst, wenn sie sich sehr nah befinden. Setze den Wert testweise auf `8`–`10` und starte den Server neu.

## Auswirkungen auf den Server

- Zu niedrige Werte führen dazu, dass Farmen, Redstone, Mobs oder Spieler außerhalb des Spielers nicht aktiv sind.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Tick-Distance ändern

1. **Server auswählen**\
   Gehe in der Verwaltung auf Deinen Minecraft Bedrock Edition Server.

2. **Datei-Browser öffnen**\
   Öffne den Datei-Browser.

3. **Datei öffnen**\
   Öffne die Datei `server.properties`.

4. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   tick-distance=4
   ```

5. **Wert ändern**\
   Ändere den Wert nach Wunsch (z.B. `8` oder `6`).

6. **Änderungen speichern**\
   Speichere die Änderungen durch einen Klick auf „Speichern“.

7. **Server neustarten**\
   Starte den Server neu, damit die Änderungen aktiv werden.

> [!TIP]
> **Empfehlung**
>
> - `4` → Standard-Einstellung
> - `6`–`8` → Ausgewogen zwischen Farmen & Welterkundung
> - `10`–`12` → Nur bei starker Serverleistung

## Hinweis zur Client-Seite

Damit Spieler tatsächlich die volle Sichtweite haben, sollten sie auch in ihren **Video-Einstellungen** die **Render-Distanz** hoch genug setzen. Sonst sehen sie nur einen Ausschnitt der vom Server gesendeten Welt – unabhängig davon, was Du serverseitig einstellst.
