---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Romestead Servers"
description: "Backup eines Romestead Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/romestead/download-savegame", "gameserver/romestead/join-server", "gameserver/romestead/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Romestead Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Weltdatei oder eine versehentlich neu erzeugte Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Anlegen einer neuen Welt
- Vor Aufräumarbeiten in der Welt, etwa dem Abriss großer Bauten
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> **Vorher speichern**
>
> Führe vor dem Backup in der **Konsole** Deines Servers den Befehl `save` aus. Der Server schreibt den aktuellen Stand damit vollständig auf die Festplatte, und Dein Backup enthält wirklich alles.
>
> ```text
> save
> ```
>
> Der Server ist während dieses Speichervorgangs kurz eingefroren. `quicksave` speichert stattdessen im Hintergrund und der Server läuft weiter – für ein Backup ist `save` deshalb die sichere Wahl.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Romestead speichert automatisch alle sechs Minuten – eine Sicherung im laufenden Betrieb kann mitten in einen Speichervorgang fallen und unvollständig sein.

> [!NOTE]
> Der Server legt zusätzlich ein eigenes rollierendes Backup Deiner Welt an und stellt dieses automatisch wieder her, falls sich der letzte Spielstand nicht laden lässt. Das ersetzt kein eigenes Backup: Es liegt auf demselben Server und umfasst nur den jeweils vorherigen Speicherstand.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/romestead/download-savegame).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
