---
slug: "simulation-distance-aendern"
language: "de"
title: "So änderst Du die Simulation-Distance auf einem Minecraft Java Edition Server"
description: "Simulation-Distance auf einem Minecraft Java Edition Server ändern"
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
short_title: "Simulation-Distance ändern"
sort: 16
related: ["gameserver/minecraft/change-motd", "gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-spawn-protection", "gameserver/minecraft/change-difficulty"]
---

## Was ist die Simulation-Distance?

Die `simulation-distance` bestimmt, **in welchem Radius rund um den Spieler Entities und Spielmechaniken aktiv getickt werden**. Das umfasst:

- **Andere Spieler und Mobs** – sie werden nur in diesem Bereich bewegt und angezeigt
- **Redstone-Schaltungen**
- **Mob-Spawning**
- **Pflanzenwachstum** und Ticks von Feuer, Wasser, Tropfstein etc.

Chunks außerhalb der Simulation-Distance werden zwar noch geladen (solange sie in der [`view-distance`](/tutorials/gameserver/minecraft/change-view-distance) liegen), sind aber sozusagen „eingefroren“.

> [!WARNING]
> **Spieler werden erst aus der Nähe sichtbar?**
>
> Das ist der häufigste Fall: Steht die Simulation-Distance zu niedrig (z.B. auf `5`), erscheinen andere Spieler und Entities erst, wenn sie sich sehr nah befinden. Setze den Wert testweise auf `8`–`16` und starte den Server neu.

## Auswirkungen auf den Server

- Zu niedrige Werte führen dazu, dass Farmen, Redstone, Mobs oder Spieler außerhalb des Spielers nicht aktiv sind.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Simulation-Distance ändern

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   simulation-distance=16
   ```

3. **Wert ändern**\
   Ändere den Wert nach Wunsch (z.B. `8` oder `12`).

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!TIP]
> **Empfehlung**
>
> - `4`–`6` → Bei großen Spielerzahlen & geringer Serverleistung
> - `16` → Standard-Einstellung, ausreichend für die meisten Server
> - `16`+ → Nur bei starker Serverleistung

## Hinweis zur Client-Seite

Damit Spieler tatsächlich die volle Sichtweite haben, sollten sie auch in ihren **Video-Einstellungen** die **Render-Distanz** hoch genug setzen. Sonst sehen sie nur einen Ausschnitt der vom Server gesendeten Welt – unabhängig davon, was Du serverseitig einstellst.
