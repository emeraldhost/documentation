---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Soldat 2 Servers"
description: "Backup eines Soldat 2 Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/add-mods", "gameserver/soldat-2/join-server", "gameserver/soldat-2/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Soldat 2 Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Skript, das den Server nicht mehr sauber starten lässt.

> [!NOTE]
> Soldat 2 speichert keinen Weltfortschritt – es gibt keinen Spielstand, der gesichert oder wiederhergestellt werden könnte. Gesichert werden also Deine Konfiguration, Deine eigenen Karten, Modifier, Spielmodi, Skripte und Deine Kartenrotation – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eigener Karten, Modifier oder Spielmodi
- Vor dem Installieren oder Aktualisieren von Skripten
- Vor dem Umbau Deiner Kartenrotation
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

## Diese Dateien lohnt es sich zu sichern

Möchtest Du nur die wichtigsten Dateien sichern, lade sie Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) herunter:

| Datei oder Ordner | Inhalt |
|-------------------|--------|
| `autoconfig.ini` | Hauptkonfiguration des Servers |
| `Levels/` | Deine eigenen Karten |
| `Modifiers/Custom/` | Deine eigenen Modifier |
| `Rules/Custom/` | Deine eigenen Spielmodi und Rundenregeln |
| `Scripts/Custom/` | Deine eigenen C#-Skripte |
| `Cycles/Custom/` | Deine Kartenrotationen |
| `greet.txt` | Begrüßungstext für Spieler |

> [!IMPORTANT]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Die `autoconfig.ini` wird beim **Stoppen** des Servers neu geschrieben – sicherst Du im laufenden Betrieb, kann die Datei einen anderen Stand haben, als Du erwartest.

> [!WARNING]
> Ein Backup sichert nur die Dateien auf Deinem Server. Eigene Karten, Modifier und Skripte gibst Du Deinen Mitspielern am besten zusätzlich direkt weiter – siehe [Mods hinzufügen](/tutorials/gameserver/soldat-2/add-mods). Bewahre diese Dateien deshalb an einem Ort auf, von dem aus Du sie jederzeit weitergeben kannst.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
