---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Abiotic Factor Servers"
description: "Backup eines Abiotic Factor Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/abiotic-factor/add-admin", "gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

Ein regelmäßiges Backup Deines Abiotic Factor Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Weltordner oder einen falsch gesetzten Weltnamen.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Wechsel des Weltnamens
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/abiotic-factor/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Der Server schreibt im laufenden Betrieb in die Weltdateien – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> **Was gehört zum Spielstand?**
>
> Der eigentliche Spielstand liegt im Weltordner unter `/AbioticFactor/Saved/SaveGames/Server/Worlds/`. Dort liegen auch die Sandbox-Einstellungen (`SandboxSettings.ini`) Deiner Welt. Deine Adminliste (`Admin.ini`) liegt eine Ebene darüber unter `/AbioticFactor/Saved/SaveGames/Server/` – ein Backup über die Verwaltung sichert alle diese Dateien gemeinsam.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
