---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Voyagers of Nera Servers"
description: "Backup eines Voyagers of Nera Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/download-savegame", "gameserver/voyagers-of-nera/join-server"]
---

Ein regelmäßiges Backup Deines Voyagers of Nera Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich gelöschten Spielstand-Ordner oder eine misslungene Übertragung einer Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Löschen oder Umbenennen von Ordnern unter `PersistedData`
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner Deiner Welt auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/voyagers-of-nera/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Voyagers of Nera speichert in regelmäßigen Abständen automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!NOTE]
> **Was gehört zum Spielstand?**
>
> Sowohl Deine Welt als auch Deine Servereinstellungen liegen unter `/BoatGame/Saved/PersistedData/`. Ein Backup dieses Verzeichnisses enthält damit beides: den Ordner Deiner Welt und den Ordner `CustomConfig`.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
