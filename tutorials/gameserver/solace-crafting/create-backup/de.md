---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Solace Crafting Servers"
description: "Backup eines Solace Crafting Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/download-savegame", "gameserver/solace-crafting/join-server"]
---

Ein regelmäßiges Backup Deines Solace Crafting Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Weltordner oder einen falsch eingetragenen Weltnamen.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `servercfg.dat`
- Vor dem Hochladen einer anderen Welt
- Vor dem Wechsel der Welt über den Wert `worldSaveToUse`
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du den Weltordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/solace-crafting/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Solace Crafting speichert im laufenden Betrieb automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!IMPORTANT]
> Trägst Du bei `worldSaveToUse` einen Namen ein, zu dem kein Weltordner existiert, legt der Server beim Start eine neue Welt an. Dein bisheriger Fortschritt ist dann zwar nicht gelöscht, wird aber nicht mehr geladen. Ein aktuelles Backup ist in so einem Fall der schnellste Weg zurück.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
