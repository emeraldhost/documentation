---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Soldat Servers"
description: "Backup eines Soldat Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Soldat Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Script, das den Server nicht mehr starten lässt.

> [!NOTE]
> Soldat speichert keinen Weltfortschritt – es gibt keinen Spielstand, der übertragen oder wiederhergestellt werden könnte. Gesichert werden also Deine Konfigurationsdateien, Deine Kartenrotation, Deine Admin- und Bannlisten, Deine eigenen Karten und Deine Scripts – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Bearbeiten der Kartenrotation oder dem Hochladen eigener Karten
- Vor dem Installieren oder Aktualisieren von Server-Scripts
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

## Diese Dateien lohnt es sich zu sichern

Möchtest Du nur die wichtigsten Dateien sichern, lade sie Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) herunter.

Klassischer Soldat-Server:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `soldat.ini` | Hauptkonfiguration des Servers |
| `server.ini` | Erweiterte Servereinstellungen |
| `mapslist.txt` | Kartenrotation |
| `banned.txt` | Gebannte IP-Adressen |
| `remote.txt` | Dauerhafte Adminliste |
| Maps-Ordner | Deine eigenen `.pms`-Karten |
| `scripts/` | Deine Server-Scripts |
| `logs/` | Protokolle, unter anderem `gamestat.txt` |

OpenSoldat:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `configs/` | Serverkonfiguration inklusive `server.cfg` |
| `maps/` | Deine eigenen `.pms`-Karten |
| `mods/` | Deine `.smod`-Mod-Pakete |
| `scripts/` | Deine Server-Scripts |
| `logs/` | Protokolle |
| `demos/` | Aufgezeichnete Runden, falls Du die Aufzeichnung nutzt |

> [!NOTE]
> Welche der beiden Varianten bei Dir läuft, erkennst Du daran, ob im Hauptverzeichnis eine `soldat.ini` oder ein Ordner `configs` mit einer `server.cfg` liegt.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass keine Datei gerade beschrieben wird – der Server schreibt unter anderem `banned.txt` und die Logdateien im laufenden Betrieb.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
