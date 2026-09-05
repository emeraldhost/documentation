---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods auf Deinem Minecraft Java Edition Server hinzu"
description: "Mods auf einem Minecraft Java Edition Server installieren"
tags: []
date: "2026-04-12"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 6
related: ["gameserver/minecraft/improve-performance", "gameserver/minecraft/increase-slots", "gameserver/minecraft/install-plugins", "gameserver/minecraft/join-server"]
---

Du kannst Mods auf Deinem Server installieren, um neue Inhalte, Mechaniken oder Verbesserungen hinzuzufügen.

> [!NOTE]
> Mods funktionieren nur mit Mod-fähigen Server-Versionen wie **Forge**, **NeoForge**, **Fabric** oder **Quilt**. Vanilla-, Spigot- oder Paper-Server unterstützen keine Mods. Wenn Du stattdessen Plugins verwenden möchtest, findest Du hier die Anleitung: [Plugins installieren](/tutorials/gameserver/minecraft/install-plugins).

## Wo finde ich Mods?

Mods findest Du auf folgenden Plattformen:

- [Modrinth](https://modrinth.com/mods)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods)

> [!WARNING]
> **Wichtig**
>
> Lade Mods nur von vertrauenswürdigen Quellen herunter. Mods aus unbekannten Quellen können Schadcode enthalten. Achte darauf, dass die Mod mit Deiner Minecraft-Version und Deinem Mod-Loader (Forge, Fabric etc.) kompatibel ist.

## Mods hinzufügen

1. **Mod herunterladen**\
   Lade die gewünschte Mod als `.jar`-Datei herunter. Stelle sicher, dass sie zu Deinem Mod-Loader und Deiner Minecraft-Version passt.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mod hochladen**\
   Lade die `.jar`-Datei in den Ordner `/mods/` hoch.

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Nach dem ersten Start erstellt die Mod meist einen eigenen Ordner unter `/config/` mit Konfigurationsdateien, die Du anpassen kannst.

## Mod entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod löschen**\
   Lösche die `.jar`-Datei der Mod aus dem `/mods/`-Ordner.

3. **Server starten**\
   Starte Deinen Server.

> [!NOTE]
> Die meisten Mods müssen sowohl auf dem Server als auch auf dem Client jedes Spielers installiert sein. Prüfe die Mod-Beschreibung, ob eine clientseitige Installation nötig ist.
