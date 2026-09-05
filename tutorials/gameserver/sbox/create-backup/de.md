---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines s&box Servers"
description: "Backup eines s&box Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/join-server", "gameserver/sbox/kick-ban-players"]
---

Ein regelmäßiges Backup Deines s&box Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen Gamemode-Wechsel, nach dem der Server nicht mehr startet.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor einem Wechsel des Gamemodes oder der Map
- Vor Änderungen an der `users.json` oder an den Startparametern
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

## Welche Daten sind wichtig?

| Ordner | Inhalt |
|--------|--------|
| `/config/` | Serverkonfiguration, unter anderem die `users.json` mit Deinen Admins |
| `/data/` | Alle dauerhaft gespeicherten Daten der Gamemodes, sortiert nach `/data/<organisation>/<package>/` |
| `/download/` | Zwischenspeicher der aus der Cloud geladenen Packages |

> [!NOTE]
> Der Ordner `/download/` muss nicht gesichert werden. Fehlende Packages lädt Dein Server beim nächsten Start automatisch erneut aus der Cloud.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Der Ordner `/data/` wird im laufenden Betrieb geschrieben – eine Sicherung während des Betriebs kann unvollständig sein.

> [!IMPORTANT]
> s&box kennt kein serverseitiges Savegame. Ob und was auf Deinem Server dauerhaft gespeichert wird, entscheidet allein der Gamemode. Läuft auf Deinem Server ein Gamemode ohne eigene Speicherfunktion, enthält ein Backup nur Deine Konfiguration.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
