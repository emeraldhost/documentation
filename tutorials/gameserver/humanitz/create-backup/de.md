---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines HumanitZ Servers"
description: "Backup eines HumanitZ Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/humanitz/add-admin", "gameserver/humanitz/add-savegame", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

Ein regelmäßiges Backup Deines HumanitZ Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Spielstandsdatei oder einen falsch gesetzten `SaveName`.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `GameServerSettings.ini`
- Vor dem Hochladen eines anderen Spielstands
- Vor einer Änderung des `SaveName`
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Savegame-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/humanitz/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. HumanitZ speichert im laufenden Betrieb automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!IMPORTANT]
> Ein Backup ersetzt keinen Test: Ändere den Wert `SaveName` in der `GameServerSettings.ini` nur, wenn Du weißt, welche Datei geladen werden soll. Passt der Name zu keiner vorhandenen `.sav`-Datei, startet Dein Server mit einer neuen, leeren Welt.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
