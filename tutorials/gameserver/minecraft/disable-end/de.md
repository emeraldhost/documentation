---
slug: "end-deaktivieren"
language: "de"
title: "So deaktivierst Du den End auf einem Minecraft Java Edition Server"
description: "End auf einem Minecraft Java Edition Server deaktivieren"
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
short_title: "End deaktivieren"
sort: 2
related: ["gameserver/minecraft/create-backup", "gameserver/minecraft/delete-world", "gameserver/minecraft/disable-nether", "gameserver/minecraft/disable-locator-bar"]
---

Wenn der End deaktiviert ist, funktionieren End-Portale nicht mehr und Spieler können die End-Dimension nicht betreten. Bereits dort befindliche Spieler werden bei der nächsten Anmeldung in die Oberwelt verschoben.

> [!WARNING]
> Diese Einstellung steht nur auf **Bukkit-basierten Servern** (Paper, Spigot, Purpur, Folia) zur Verfügung. Auf **Vanilla, Forge, Fabric und NeoForge** kann der End nicht über eine Server-Einstellung deaktiviert werden – dort wäre ein Datapack oder Mod nötig.

## End deaktivieren (Paper / Spigot / Purpur / Folia)

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `bukkit.yml`.

3. **Eintrag suchen**\
   Suche im Abschnitt `settings` nach folgendem Eintrag:

   ```yaml
   allow-end: true
   ```

4. **Wert ändern**\
   Ändere den Wert auf `false`:

   ```yaml
   allow-end: false
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Um den End wieder zu aktivieren, setze den Wert zurück auf `true` und starte den Server neu. Bestehende End-Welten (`world_the_end`) bleiben dabei erhalten.
