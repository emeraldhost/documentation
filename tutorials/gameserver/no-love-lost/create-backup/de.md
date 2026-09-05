---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines No Love Lost Servers"
description: "Backup eines No Love Lost Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-love-lost"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/no-love-lost/join-server"]
---

Ein Backup Deines No Love Lost Servers sichert die Serverdateien und die Installation. So kommst Du nach einem fehlgeschlagenen Update oder beschädigten Serverdateien schnell wieder auf einen funktionierenden Stand zurück.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor Änderungen an den Startparametern Deines Servers
- Vor einer Neuinstallation der Serverdateien
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass währenddessen keine Dateien geschrieben werden und das Backup vollständig ist.

> [!NOTE]
> No Love Lost legt auf dem Server keine Konfigurationsdatei an – der Server wird ausschließlich über seine Startparameter gesteuert. Ein Backup sichert deshalb vor allem die Serverinstallation und die Spieldateien.

> [!TIP]
> Sperre wichtige Backups (z.B. vor größeren Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
