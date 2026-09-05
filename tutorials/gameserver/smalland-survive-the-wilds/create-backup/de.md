---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Smalland Survive the Wilds Servers"
description: "Backup eines Smalland Survive the Wilds Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/smalland-survive-the-wilds/add-savegame", "gameserver/smalland-survive-the-wilds/download-savegame", "gameserver/smalland-survive-the-wilds/join-server"]
---

Ein regelmäßiges Backup Deines Smalland Survive the Wilds Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Weltdatei oder einen versehentlich überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Weltnamens
- Vor Aufräumarbeiten in der Welt, etwa dem Abreißen großer Basen
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner mit den Weltdateien auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/smalland-survive-the-wilds/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Weltdatei – eine Sicherung während des Betriebs kann unvollständig sein.

> [!CAUTION]
> **Charaktere sind nicht enthalten**
>
> Ein Server-Backup sichert ausschließlich die Weltdaten. Charaktere werden lokal auf dem PC des jeweiligen Spielers gespeichert und lassen sich über den Server weder sichern noch wiederherstellen.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
