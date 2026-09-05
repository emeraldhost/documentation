---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines GTA San Andreas Servers"
description: "Backup eines GTA San Andreas Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

Ein regelmäßiges Backup Deines GTA San Andreas Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, ein defektes Skript oder eine versehentlich überschriebene Konfiguration.

## Wann solltest Du ein Backup erstellen?

- Vor dem Wechsel zwischen SA-MP und open.mp
- Vor dem Einspielen eines neuen Gamemodes oder einer neuen Skript-Version
- Vor der Installation oder Aktualisierung von Plugins
- Vor größeren Änderungen an `server.cfg` beziehungsweise `config.json`
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

## Was gesichert werden sollte

SA-MP und open.mp haben **keinen Weltspielstand**. Es gibt keine gespeicherte Welt und keine Savegame-Datei – alles Dauerhafte legt allein Dein Gamemode an. Ein sinnvolles Backup umfasst deshalb diese Ordner und Dateien:

| Pfad | Inhalt |
|------|--------|
| `/gamemodes/` | Deine Gamemodes als `.amx`-Dateien |
| `/filterscripts/` | Zusatzskripte |
| `/plugins/` | Server-Plugins (`.so`) |
| `/scriptfiles/` | Alle Daten, die Deine Skripte selbst speichern |
| `/models/` | Eigene Modelle und Texturen |
| `config.json` bzw. `server.cfg` | Die Serverkonfiguration |
| `bans.json` bzw. `samp.ban` | Deine Bann-Liste |

> [!IMPORTANT]
> Speichert Dein Gamemode Spielerdaten in einer **MySQL-Datenbank**, liegen diese Daten **nicht** in den Serverdateien. Sichere die Datenbank zusätzlich und separat – ein Backup der Serverdateien allein reicht in diesem Fall nicht aus.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Laufende Skripte schreiben währenddessen in `scriptfiles` – eine Sicherung im laufenden Betrieb kann unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
