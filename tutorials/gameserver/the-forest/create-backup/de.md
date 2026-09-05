---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines The Forest Servers"
description: "Backup eines The Forest Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/the-forest/add-admin", "gameserver/the-forest/add-savegame", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

Ein regelmäßiges Backup Deines The Forest Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Save-Slot oder einen falsch gesetzten Startwert.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Save-Slots oder des Init Type
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Slot-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/the-forest/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. The Forest speichert in regelmäßigen Abständen automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!IMPORTANT]
> Der Chat-Befehl `/restart` ist **kein** Weg, den Server neu zu starten: Laut offizieller Befehlsliste löscht er die Speicherdaten. Nutze zum Neustarten immer die **Verwaltung**.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
