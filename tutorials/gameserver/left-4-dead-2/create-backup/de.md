---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Left 4 Dead 2 Servers"
description: "Backup eines Left 4 Dead 2 Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/left-4-dead-2/add-admin", "gameserver/left-4-dead-2/add-mods", "gameserver/left-4-dead-2/join-server", "gameserver/left-4-dead-2/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Left 4 Dead 2 Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

> [!NOTE]
> Left 4 Dead 2 speichert keinen Weltfortschritt. Gesichert werden also Deine Konfigurationsdateien, Deine Plugins und Deine Adminlisten – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg` oder an den Adminlisten
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!TIP]
> **Konfiguration mitsichern**
>
> Wenn Du nur die wichtigsten Dateien sichern möchtest, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Ordner `/left4dead2/cfg/` und `/left4dead2/addons/` herunter.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
