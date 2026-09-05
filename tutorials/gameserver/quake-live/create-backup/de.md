---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Quake Live Servers"
description: "Backup eines Quake Live Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/add-mods", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

Quake Live speichert keine Spielwelt und keinen Spielfortschritt – jede Runde beginnt neu. Wertvoll sind auf Deinem Server deshalb die Konfigurationsdateien: Deine Servereinstellungen, die Adminliste, der Map-Pool, die Workshop-Inhalte und Deine eigenen Factories. Genau diese Dateien sichert ein Backup.

## Wann solltest Du ein Backup erstellen?

- Vor Änderungen an der `server.cfg`
- Vor Änderungen an der Adminliste oder am Map-Pool
- Bevor Du eigene Factories anpasst oder ersetzt
- Vor Updates der Serverversion
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

## Diese Dateien solltest Du sichern

```text
/baseq3/server.cfg                <- Serverkonfiguration
/baseq3/access.txt                <- Admins, Moderatoren und Banns
/baseq3/mappool.txt               <- Maps und Factories des Map-Pools
/baseq3/workshop.txt              <- Item-IDs aus dem Steam Workshop
/baseq3/scripts/                  <- eigene Factories (.factories)
```

> [!NOTE]
> Das Verzeichnis `baseq3` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`. Einzelne Dateien kannst Du Dir jederzeit auch per [SFTP](/tutorials/gameserver/establish-sftp-connection) auf Deinen PC herunterladen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Die `access.txt` wird vom Server vor jedem Map-Ladevorgang neu geschrieben – eine Sicherung im laufenden Betrieb kann daher einen veralteten Stand enthalten, und eine Wiederherstellung würde beim nächsten Map-Wechsel überschrieben.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
