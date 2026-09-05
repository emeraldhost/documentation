---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Operation Harsh Doorstop Servers"
description: "Backup eines Operation Harsh Doorstop Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Operation Harsh Doorstop Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine zerschossene Konfiguration oder eine versehentlich gelöschte Admin-Liste.

> [!NOTE]
> **Kein Spielstand, aber trotzdem sicherungswürdig**
>
> Operation Harsh Doorstop speichert keinen Weltzustand: Jede Runde beginnt von vorn, und es gibt kein Savegame. Sicherungswürdig sind deshalb vor allem Deine Konfigurationsdateien unter `/HarshDoorstop/Saved/Config/LinuxServer/` (zum Beispiel `Admins.cfg`, `Bans.cfg`, `MapCycle.cfg` und `Game.ini`) sowie hochgeladene Mods unter `/HarshDoorstop/Mods`.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods
- Vor Änderungen an den Admin- und Ban-Dateien
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Der Server schreibt seine Konfigurationsdateien beim Beenden – eine Sicherung im laufenden Betrieb kann einen veralteten Stand enthalten.

> [!TIP]
> **Einzelne Dateien sichern**
>
> Du kannst Deine Konfigurationsdateien auch einfach per [SFTP](/tutorials/gameserver/establish-sftp-connection) auf Deinen PC herunterladen. Für ein paar kleine `.cfg`-Dateien ist das der schnellste Weg.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
