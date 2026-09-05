---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Black Mesa Servers"
description: "Backup eines Black Mesa Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["black-mesa"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/black-mesa/add-admin", "gameserver/black-mesa/add-mods", "gameserver/black-mesa/join-server", "gameserver/black-mesa/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Black Mesa Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

> [!NOTE]
> Black Mesa speichert auf dem Server keinen Weltfortschritt. Gesichert werden also Deine Konfigurationsdateien, Deine Plugins, Deine Adminlisten und Deine eigenen Maps – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg`, an der `mapcycle.txt` oder an den Adminlisten
- Vor dem Hochladen eigener Maps und Custom-Inhalte
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!TIP]
> **Konfiguration mitsichern**
>
> Wenn Du nur die wichtigsten Dateien sichern möchtest, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Ordner `/bms/cfg/`, `/bms/addons/` und `/bms/maps/` sowie die Datei `/bms/addonlist.txt` herunter.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
