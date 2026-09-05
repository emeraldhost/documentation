---
slug: "world-seed-aendern"
language: "de"
title: "So änderst Du den World-Seed auf einem Minecraft Java Edition Server"
description: "World-Seed auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2025-06-27"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "World-Seed ändern"
sort: 27
related: ["gameserver/minecraft/change-view-distance", "gameserver/minecraft/change-world-border", "gameserver/minecraft/create-backup", "gameserver/minecraft/delete-world"]
---

Der World-Seed legt fest, wie die Welt generiert wird. Er wirkt sich **nur auf neu generierte Welten** aus – Du musst Deine bestehende Welt daher vorher löschen.

> [!CAUTION]
> **Achtung**
>
> Deine aktuelle Welt geht dabei unwiderruflich verloren. Erstelle vorher ein [Backup](/tutorials/gameserver/minecraft/create-backup), falls Du sie später noch benötigst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Seed eintragen**\
   Öffne die Datei `server.properties`, suche den Eintrag `level-seed=` und trage den gewünschten Seed ein:

   ```text
   level-seed=5101553622029575588
   ```

   Speichere die Datei anschließend.

4. **Alte Welt löschen**\
   Lösche im Hauptverzeichnis den Ordner `world`. Ohne diesen Schritt lädt der Server einfach Deine alte Welt weiter und der neue Seed bleibt wirkungslos.

   > [!NOTE]
   > **Paper, Spigot & Purpur**
   >
   > Auf diesen Servern liegen Nether und End in eigenen Ordnern. Lösche zusätzlich `world_nether` und `world_the_end`, damit auch diese Dimensionen neu generiert werden.

5. **Server starten**\
   Starte Deinen Server. Die Welt wird nun mit Deinem neuen Seed erzeugt.

> [!TIP]
> Den Seed einer bestehenden Welt findest Du heraus, indem Du im Spiel den Befehl `/seed` eingibst. Lässt Du `level-seed=` leer, generiert der Server einen zufälligen Seed.
