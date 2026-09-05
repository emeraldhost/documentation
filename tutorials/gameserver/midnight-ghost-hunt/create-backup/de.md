---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Midnight Ghost Hunt Servers"
description: "Backup eines Midnight Ghost Hunt Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["midnight-ghost-hunt"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/midnight-ghost-hunt/join-server"]
---

Ein Backup Deines Midnight Ghost Hunt Servers sichert die Serverdateien und Deine Konfiguration. So kommst Du nach einem fehlgeschlagenen Update, beschädigten Serverdateien oder einer misslungenen Änderung an den Regeln schnell wieder auf einen funktionierenden Stand zurück.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor Änderungen an den Startparametern Deines Servers
- Vor größeren Änderungen an der Datei `CustomRules.ini`
- Vor einer Neuinstallation der Serverdateien
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass währenddessen keine Dateien geschrieben werden und das Backup vollständig ist.

> [!NOTE]
> Midnight Ghost Hunt speichert keinen Spielstand und keine Welt: Gespielt wird in einzelnen Runden, die jedes Mal neu beginnen. Ein Backup sichert deshalb vor allem die Serverinstallation, Deine Konfigurationsdatei `CustomRules.ini` sowie die Logdateien Deines Servers.

> [!TIP]
> Sperre wichtige Backups (z.B. vor größeren Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Einzelne Dateien wie `CustomRules.ini` kannst Du zusätzlich per SFTP herunterladen und lokal aufbewahren: [SFTP-Verbindung herstellen](/tutorials/gameserver/establish-sftp-connection).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
