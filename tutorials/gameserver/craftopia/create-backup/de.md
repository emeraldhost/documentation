---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Craftopia Servers"
description: "Backup eines Craftopia Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Craftopia Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder einen falsch eingetragenen Weltnamen.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `ServerSetting.ini`
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Ändern des Weltnamens oder des Spielmodus
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner `DedicatedServerSave` auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/craftopia/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Craftopia speichert im laufenden Betrieb automatisch – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

> [!NOTE]
> **Automatisches Speichern**
>
> Wie oft Dein Server speichert, steuerst Du in der Datei `/ServerSetting.ini` im Abschnitt `[Save]`: `autoSaveSec` legt den Abstand in Sekunden fest (Standard `300`, also alle fünf Minuten), `autoSavePerHour` steuert zusätzlich das stündliche Speichern. Diese Automatik ersetzt jedoch kein Backup – sie überschreibt immer denselben Spielstand.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
