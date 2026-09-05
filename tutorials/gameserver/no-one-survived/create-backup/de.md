---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines No One Survived Servers"
description: "Backup eines No One Survived Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/download-savegame", "gameserver/no-one-survived/join-server"]
---

Ein regelmäßiges Backup Deines No One Survived Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine versehentlich überschriebene Spielstandsdatei oder einen falsch gesetzten Savegame-Namen.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Savegame-Namens oder der Karte
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du die Savegame-Dateien auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/no-one-survived/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Spielstandsdateien – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> **Was gehört zum Spielstand?**
>
> Die eigentlichen Spielstände liegen als `.sav`-Dateien unter `/WRSH/Saved/SaveGames/WorldSaves/`, die Zwischenstände des Servers unter `/WRSH/Saved/SaveGames/AutoSave/`. Deine Servereinstellungen stehen in der Datei `/WRSH/Saved/Config/WindowsServer/Game.ini` – ein Backup über die Verwaltung sichert alle diese Dateien gemeinsam.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
