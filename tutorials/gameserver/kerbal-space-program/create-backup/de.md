---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Kerbal Space Program Servers"
description: "Backup eines Kerbal Space Program Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/kerbal-space-program/add-mods", "gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/download-savegame", "gameserver/kerbal-space-program/join-server"]
---

Ein regelmäßiges Backup Deines Kerbal Space Program Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine geänderte Mod-Liste oder einen versehentlich überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates von DarkMultiPlayer oder des Spiels
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Ändern der Mod-Liste (`mod-control.txt`)
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner `Universe` auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/kerbal-space-program/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. DarkMultiPlayer schreibt im laufenden Betrieb ständig Schiffs- und Spielerdaten in den Ordner `Universe` – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!TIP]
> **Auch die Konfiguration sichern**
>
> Neben dem Ordner `Universe` lohnt sich der Ordner `Config`: Dort liegen unter anderem `Settings.txt`, `admins.txt`, die Bann-Listen und Deine `mod-control.txt`.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
