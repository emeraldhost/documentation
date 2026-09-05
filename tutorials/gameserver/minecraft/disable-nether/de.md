---
slug: "nether-deaktivieren"
language: "de"
title: "So deaktivierst Du den Nether auf einem Minecraft Java Edition Server"
description: "Nether auf einem Minecraft Java Edition Server deaktivieren"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Nether deaktivieren"
sort: 8
related: ["gameserver/minecraft/delete-world", "gameserver/minecraft/disable-end", "gameserver/minecraft/disable-locator-bar", "gameserver/minecraft/download-world"]
---

Wenn der Nether deaktiviert ist, funktionieren Nether-Portale nicht mehr und Spieler können die Nether-Dimension nicht betreten. Bereits dort befindliche Spieler werden bei der nächsten Anmeldung in die Oberwelt verschoben.

> [!NOTE]
> Diese Einstellung wird über die `server.properties` gesteuert und funktioniert auf allen Java-Server-Varianten – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric und NeoForge.

## Nether deaktivieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

3. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

   ```text
   allow-nether=true
   ```

4. **Wert ändern**\
   Ändere den Wert auf `false`:

   ```text
   allow-nether=false
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Um den Nether wieder zu aktivieren, setze den Wert zurück auf `true` und starte den Server neu. Bestehende Nether-Welten bleiben dabei erhalten.
