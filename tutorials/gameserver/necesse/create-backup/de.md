---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Necesse Servers"
description: "Backup eines Necesse Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/necesse/add-mods", "gameserver/necesse/add-savegame", "gameserver/necesse/download-savegame", "gameserver/necesse/join-server"]
---

Ein regelmäßiges Backup Deines Necesse Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen inkompatiblen Mod oder eine versehentlich überschriebene Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen einer anderen Welt
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du die Welt-Datei auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/necesse/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Necesse schreibt die Welt im laufenden Betrieb regelmäßig neu – eine Sicherung während des Betriebs kann eine unvollständige Welt-Datei enthalten.

> [!TIP]
> **Sauber herunterfahren**
>
> Stoppe Deinen Server immer über die **Verwaltung** oder mit dem Befehl `/stop` in der Konsole. So schreibt Necesse die Welt vorher vollständig auf die Festplatte.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
