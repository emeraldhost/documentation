---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines StarRupture Servers"
description: "Backup eines StarRupture Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/download-savegame", "gameserver/starrupture/join-server"]
---

Ein regelmäßiges Backup Deines StarRupture Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder einen falsch gesetzten Wert in der `DSSettings.txt`.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Erstellen einer neuen Welt oder dem Wechsel der Session
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du die Dateien der Session auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/starrupture/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. StarRupture speichert im Betrieb automatisch – standardmäßig alle 300 Sekunden – eine Sicherung während des Betriebs kann deshalb einen unvollständigen Spielstand enthalten.

> [!IMPORTANT]
> Steht in Deiner `DSSettings.txt` der Wert `StartNewGame` auf `"true"`, erzeugt der Server bei jedem Start eine neue Welt und überschreibt den vorhandenen Spielstand. Prüfe diesen Wert, bevor Du ein wiederhergestelltes Backup startest – siehe [Savegame hinzufügen](/tutorials/gameserver/starrupture/add-savegame).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
