---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines The Cenozoic Era Servers"
description: "Backup eines The Cenozoic Era Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/join-server", "gameserver/the-cenozoic-era/kick-ban-players"]
---

Ein regelmäßiges Backup Deines The Cenozoic Era Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Konfigurationsdatei oder eine Änderung, die Du wieder rückgängig machen möchtest.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration, etwa an Wachstum, Fortpflanzung oder Spielmodus
- Bevor Du Dateien per SFTP austauschst
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Läuft der Server währenddessen weiter, können Dateien gesichert werden, die gerade geschrieben werden – das Backup ist dann unter Umständen unvollständig.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

## Was das Backup enthält

Das Backup sichert den kompletten Serverordner. Dazu gehört auch die Konfiguration Deines Servers, die per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendem Verzeichnis liegt:

```text
/TheCenozoicEra/Saved/Config/WindowsServer/
```

Dort liegt unter anderem die `Game.ini` mit Deinen Servereinstellungen. Im Ordner `/TheCenozoicEra/Saved/Logs/` findest Du zusätzlich die Server-Logs.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. The Cenozoic Era stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft. Suche also nicht nach einem Ordner namens `LinuxServer` – den gibt es nicht.

> [!TIP]
> Sichere Deine `Game.ini` zusätzlich manuell auf Deinem PC, bevor Du größere Änderungen daran vornimmst. So kannst Du eine einzelne Einstellung zurücksetzen, ohne ein komplettes Backup wiederherstellen zu müssen.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
