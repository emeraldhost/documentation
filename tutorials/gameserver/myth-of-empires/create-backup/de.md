---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Myth of Empires Servers"
description: "Backup eines Myth of Empires Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/myth-of-empires/add-admin", "gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Ein regelmäßiges Backup Deines Myth of Empires Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine Änderung an der Konfiguration, die Du zurücknehmen möchtest.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor einem geplanten Wipe Deines Servers
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!CAUTION]
> **Vor dem Stoppen speichern**
>
> Speichere die Welt, bevor Du den Server stoppst. Führe dazu als Admin im Spiel den Befehl `cheat SaveWorld` aus und warte anschließend rund 30 bis 45 Sekunden, bis der Speichervorgang abgeschlossen ist. Wird der Server mitten im Schreiben beendet, kann der Spielstand beschädigt werden.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Myth of Empires speichert im laufenden Betrieb in regelmäßigen Abständen – eine Sicherung während des Betriebs kann unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner `Saved` auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/myth-of-empires/download-savegame).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
