---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines SCUM Servers"
description: "Backup eines SCUM Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/scum/add-admin", "gameserver/scum/add-savegame", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Ein regelmäßiges Backup Deines SCUM Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Datenbank oder einen versehentlich überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Basen oder Fahrzeugen
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du die Datenbank auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/scum/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. SCUM speichert die gesamte Welt in einer SQLite-Datenbank, die im laufenden Betrieb geschrieben wird – eine Sicherung während des Betriebs kann unvollständig sein.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
