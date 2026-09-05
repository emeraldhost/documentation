---
slug: "plugins-installieren"
language: "de"
title: "So installierst Du Plugins auf einem Minecraft Java Edition Server"
description: "Plugins auf einem Minecraft Java Edition Server installieren"
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
short_title: "Plugins installieren"
sort: 11
related: ["gameserver/minecraft/increase-slots", "gameserver/minecraft/install-mods", "gameserver/minecraft/join-server", "gameserver/minecraft/kick-ban-players"]
---

Du kannst Plugins auf Deinem Server installieren, um neue Funktionen, Verwaltungstools oder Spielmechaniken hinzuzufügen.

> [!NOTE]
> Plugins funktionieren nur mit Plugin-fähigen Server-Versionen wie **Spigot**, **Paper**, **Purpur** oder **Pufferfish**. Vanilla-Server unterstützen keine Plugins. Wenn Du stattdessen Mods (Forge, Fabric etc.) verwenden möchtest, findest Du hier die Anleitung: [Mods hinzufügen](/tutorials/gameserver/minecraft/install-mods).

## Wo finde ich Plugins?

Plugins findest Du auf folgenden Plattformen:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

> [!WARNING]
> **Wichtig**
>
> Lade Plugins nur von vertrauenswürdigen Quellen herunter. Plugins aus unbekannten Quellen können Schadcode enthalten.

## Wie installiere ich Plugins?

1. **Plugin herunterladen**\
   Lade das Plugin als `.jar` Datei herunter.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zum `plugins` Ordner.

3. **Plugin hochladen**\
   Lade die `.jar` Datei in den `plugins` Ordner hoch.

4. **Server neu starten**\
   Starte den Server neu, damit das Plugin geladen wird.

> [!TIP]
> **Hinweis**
>
> Nach dem ersten Start erstellt das Plugin meist einen eigenen Ordner unter `plugins/` mit Konfigurationsdateien, die Du anpassen kannst.

## Wie entferne ich ein Plugin?

1. **Server stoppen**\
   Stoppe den Server.

2. **Plugin löschen**\
   Lösche die `.jar` Datei des Plugins aus dem `plugins` Ordner.

3. **Konfiguration löschen**\
   Lösche optional den zugehörigen Konfigurationsordner unter `plugins/`.

4. **Server neu starten**\
   Starte den Server neu.
