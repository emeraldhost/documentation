---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Frozen Flame Servers"
description: "Backup eines Frozen Flame Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/frozen-flame/add-admin", "gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/join-server"]
---

Ein regelmäßiges Backup Deines Frozen Flame Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder einen entfernten Spielerfortschritt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Spielmodus zwischen Cataclysm und Campaign
- Bevor Du Spielerprofile mit `Admin_RemoveProfile` entfernst
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner `SaveGames` auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/frozen-flame/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Frozen Flame schreibt im laufenden Betrieb in den Spielstand – eine Sicherung während des Betriebs kann unvollständig sein. Setze davor über RCON den Befehl `Admin_SaveAll` ab, damit der aktuelle Stand auf der Festplatte liegt: [Adminrechte nutzen](/tutorials/gameserver/frozen-flame/add-admin).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
