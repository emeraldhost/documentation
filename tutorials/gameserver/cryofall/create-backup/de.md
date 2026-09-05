---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines CryoFall Servers"
description: "Backup eines CryoFall Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/cryofall/add-mods", "gameserver/cryofall/add-savegame", "gameserver/cryofall/download-savegame", "gameserver/cryofall/join-server"]
---

Ein regelmäßiges Backup Deines CryoFall Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen beschädigten Spielstand oder eine versehentlich gelöschte Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Installieren, Aktualisieren oder Entfernen von Mods
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Zurücksetzen der Welt
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. CryoFall speichert die Welt in regelmäßigen Abständen automatisch – eine Sicherung während des Betriebs kann genau in einen solchen Speichervorgang fallen und dadurch unvollständig sein.

> [!NOTE]
> Was zum Spielstand gehört, liegt gesammelt im Ordner `/Data/`: die Welt im Unterordner `/Data/Saves/`, dazu die Konfigurationsdateien `SettingsServer.xml`, `ModsConfig.xml` und `ServerRates.config`. Möchtest Du nur die Welt sichern, kannst Du sie auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/cryofall/download-savegame).

## Interne Speicherstände von CryoFall

CryoFall legt zusätzlich eigene Sicherungen der Welt an. Zwei Werte dazu steuerst Du in der **Verwaltung** Deines Servers:

| Einstellung | Bedeutung |
|-------------|-----------|
| **Automatischer Speicher Interval** | Abstand in Minuten, in dem die Welt automatisch gespeichert wird |
| **Auto Backups Count** | Anzahl der Speicherstände, die der Server aufbewahrt |

> [!IMPORTANT]
> Diese internen Sicherungen liegen auf demselben Server wie Deine Welt. Sie helfen Dir bei einem beschädigten Spielstand, ersetzen aber kein richtiges Backup. Lade besonders wichtige Stände zusätzlich auf Deinen PC herunter.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
