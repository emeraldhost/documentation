---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines QANGA Servers"
description: "Backup eines QANGA Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["qanga"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/qanga/join-server"]
---

Ein regelmäßiges Backup Deines QANGA Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine Änderung an der Welt, die Du rückgängig machen möchtest.

Das ist bei QANGA besonders wichtig: Der Fortschritt eurer gemeinsamen Welt liegt auf dem Server. Gehen die Weltdaten verloren, ist auch der darin gespeicherte Fortschritt weg.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an den Startparametern in der Verwaltung
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Basen oder Fahrzeugen
- Vor dem Wiederherstellen eines älteren Standes
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Im laufenden Betrieb schreibt der Server regelmäßig in die Weltdaten – eine Sicherung während des Betriebs kann mitten in einen Speichervorgang fallen und einen unvollständigen Stand enthalten.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> QANGA nutzt für den Server keine Konfigurationsdateien – alle Servereinstellungen werden über die Startparameter in der **Verwaltung** gesetzt. Ein Backup sichert deshalb vor allem die Serverdateien und die Weltdaten. Notiere Dir Deine Einstellungen aus der Verwaltung zusätzlich separat, denn sie werden dort und nicht in den Serverdateien gespeichert.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
