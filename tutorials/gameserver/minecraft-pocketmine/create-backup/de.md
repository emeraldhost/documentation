---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Minecraft PocketMine Edition Servers"
description: "Backup eines Minecraft PocketMine Edition Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/minecraft-pocketmine/add-mods", "gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/download-savegame", "gameserver/minecraft-pocketmine/join-server"]
---

Ein regelmäßiges Backup Deines Minecraft PocketMine Edition Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, ein defektes Plugin oder eine versehentlich überschriebene Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an `server.properties` oder `pocketmine.yml`
- Vor dem Hochladen einer anderen Welt
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du den Welt-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/minecraft-pocketmine/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. PocketMine-MP schreibt im laufenden Betrieb ständig in die LevelDB-Datenbank der geladenen Welt – eine Sicherung während des Betriebs kann unvollständig sein.

> [!NOTE]
> Zum Backup gehören neben dem Ordner `worlds` auch Deine Konfigurations- und Listendateien im Hauptordner Deines Servers, insbesondere `server.properties`, `pocketmine.yml`, `ops.txt`, `white-list.txt`, `banned-players.txt` und `banned-ips.txt` sowie die Ordner `plugins`, `plugin_data` und `resource_packs`.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
