---
slug: "world-seed-aendern"
language: "de"
title: "So änderst Du den World-Seed auf Deinem Minecraft Bedrock Server"
description: "Schritt-für-Schritt-Anleitung, wie Du den World-Seed auf Deinem Minecraft Bedrock Edition Server änderst."
tags: []
date: "2025-06-27"
visibility: "public"
updated: "2026-07-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "World-Seed ändern"
sort: 17
related: ["gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-border", "gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/delete-world"]
---

Der World-Seed legt fest, wie die Welt generiert wird. Er wirkt sich **nur auf neu generierte Welten** aus – Du musst Deine bestehende Welt daher vorher löschen.

> [!CAUTION]
> **Achtung**
>
> Deine aktuelle Welt geht dabei unwiderruflich verloren. Erstelle vorher ein [Backup](/tutorials/gameserver/minecraft-bedrock/create-backup), falls Du sie später noch benötigst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei-Browser öffnen**\
   Öffne den Datei-Browser oder verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Seed eintragen**\
   Öffne die Datei `server.properties`, suche den Eintrag `level-seed=` und trage den gewünschten Seed ein:

   ```text
   level-seed=1111132940
   ```

   Speichere die Datei anschließend.

4. **Alte Welt löschen**\
   Wechsle in den Ordner `worlds` und lösche dort den Ordner `Bedrock level`. Ohne diesen Schritt lädt der Server einfach Deine alte Welt weiter und der neue Seed bleibt wirkungslos.

   > [!NOTE]
   > Hast Du in der `server.properties` unter `level-name` einen eigenen Weltnamen eingetragen, heißt der Ordner entsprechend anders.

5. **Server starten**\
   Starte Deinen Server. Die Welt wird nun mit Deinem neuen Seed erzeugt.

> [!TIP]
> Den Seed einer bestehenden Welt findest Du heraus, indem Du im Spiel den Befehl `/seed` eingibst. Lässt Du `level-seed=` leer, generiert der Server einen zufälligen Seed.
