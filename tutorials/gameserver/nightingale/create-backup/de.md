---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Nightingale Servers"
description: "Backup eines Nightingale Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/nightingale/add-admin", "gameserver/nightingale/add-savegame", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Ein regelmäßiges Backup Deines Nightingale Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich zurückgesetzten Serverzustand oder einen misslungenen Import eines Charakters.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor sich ein neuer Charakter zum ersten Mal verbindet, denn dabei können Charakter- und Realm-Daten auf den Server übertragen werden
- Vor dem Hochladen eines anderen Spielstands
- Bevor Du den Serverzustand zurücksetzt
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du die Spielstandsordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/nightingale/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Nightingale schreibt im laufenden Betrieb ständig in die Weltdaten – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.

## Automatische Sicherung des Servers

> [!NOTE]
> Nightingale legt zusätzlich selbst eine einfache Sicherung an: Beim ersten Serverstart an einem neuen Wochentag kopiert der Server den kompletten Ordner `Offline` nach `OfflineBackup`.
>
> ```text
> /NWX/Saved/Offline
> /NWX/Saved/OfflineBackup
> ```
>
> Diese Kopie liegt auf demselben Server und wird regelmäßig überschrieben. Sie ersetzt daher **kein** richtiges Backup, ist aber ein nützlicher Rettungsanker, solange sie noch aktuell ist.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
