---
slug: "schwierigkeitsgrad-aendern"
language: "de"
title: "So änderst Du den Schwierigkeitsgrad auf einem Minecraft Java Edition Server"
description: "Schwierigkeitsgrad auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Schwierigkeitsgrad ändern"
sort: 12
related: ["gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-spawn-protection", "gameserver/minecraft/change-version", "gameserver/minecraft/change-view-distance"]
---

## Was ist der Schwierigkeitsgrad?

Der Schwierigkeitsgrad bestimmt, wie herausfordernd das Spiel ist. Er beeinflusst den Schaden von Mobs, den Hunger und andere Gameplay-Mechaniken.

| Wert | Schwierigkeitsgrad | Beschreibung |
|------|--------------------|--------------|
| `peaceful` | Friedlich | Keine feindlichen Mobs, Gesundheit regeneriert sich schnell |
| `easy` | Einfach | Feindliche Mobs spawnen, verursachen aber wenig Schaden |
| `normal` | Normal | Standard-Schwierigkeitsgrad |
| `hard` | Schwer | Mobs verursachen mehr Schaden, Hunger kann tödlich sein |

## Wie ändere ich den Schwierigkeitsgrad?

1. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

    ```text
    difficulty=easy
    ```

3. **Wert ändern**\
   Ändere den Wert auf den gewünschten Schwierigkeitsgrad.

4. **Server neustarten**\
   Speichere die Änderungen und starte den Server neu.
