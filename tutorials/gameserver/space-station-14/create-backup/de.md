---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Space Station 14 Servers"
description: "Backup eines Space Station 14 Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/space-station-14/add-admin", "gameserver/space-station-14/join-server", "gameserver/space-station-14/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Space Station 14 Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine beschädigte Datenbank oder eine versehentlich überschriebene Konfiguration.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der `server_config.toml`
- Vor einem Wechsel der Datenbank, etwa von SQLite auf PostgreSQL
- Vor größeren Aufräumarbeiten an Admins, Banns oder Notizen
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Was wird gesichert?

Space Station 14 ist rundenbasiert und kennt **keinen Spielstand und keinen Weltordner**. Endet eine Runde, wird die Station komplett neu erzeugt. Dauerhaft gespeichert werden nur diese beiden Dinge:

| Ort | Inhalt |
|-----|--------|
| Ordner `data` | Datenbank des Servers (standardmäßig `data/preferences.db`) mit Charakteren, Spielzeiten, Admins, Banns und Notizen |
| `server_config.toml` | Die gesamte Serverkonfiguration |

Beide liegen im Hauptverzeichnis Deines Servers, neben der Server-Anwendung `Robust.Server`.

> [!NOTE]
> Wer die Daten seines Servers manuell umziehen möchte, kopiert genau diese beiden Elemente: den Ordner `data` und die Datei `server_config.toml`.

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Die Datenbank wird im laufenden Betrieb geschrieben – eine Sicherung während des Betriebs kann unvollständig sein.

> [!NOTE]
> Betreibst Du Deinen Server statt mit SQLite mit einer PostgreSQL-Datenbank, liegen Charaktere, Admins und Banns nicht im Ordner `data`, sondern in der Datenbank selbst. Sichere diese in dem Fall getrennt.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
