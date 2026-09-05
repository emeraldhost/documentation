---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Avorion Servers"
description: "Backup eines Avorion Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/avorion/add-mods", "gameserver/avorion/add-savegame", "gameserver/avorion/download-savegame", "gameserver/avorion/join-server"]
---

Ein regelmäßiges Backup Deines Avorion Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine defekte Mod oder eine versehentlich überschriebene Galaxie.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods
- Vor dem Hochladen einer anderen Galaxie
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Avorion speichert im laufenden Betrieb automatisch – eine Sicherung während des Betriebs kann eine unvollständige Galaxie enthalten.

> [!TIP]
> **Vorher speichern**
>
> Läuft Dein Server noch, kannst Du den aktuellen Stand vorher manuell sichern: Gib in der Konsole der Verwaltung `/save` ein, warte bis der Vorgang abgeschlossen ist, und stoppe den Server anschließend über die Verwaltung.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Galaxie-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/avorion/download-savegame).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
