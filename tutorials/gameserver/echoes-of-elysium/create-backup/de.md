---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Echoes of Elysium Servers"
description: "Backup eines Echoes of Elysium Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["echoes-of-elysium"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 1
related: ["gameserver/echoes-of-elysium/add-savegame", "gameserver/echoes-of-elysium/download-savegame", "gameserver/echoes-of-elysium/join-server"]
---

Ein regelmäßiges Backup Deines Echoes of Elysium Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder einen versehentlich überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor einem Umzug auf einen anderen Server
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Im laufenden Betrieb schreibt der Server regelmäßig in die Weltdaten – eine Sicherung während des Betriebs kann unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du sie auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/echoes-of-elysium/download-savegame). Der komplette Spielstand liegt im Verzeichnis `world`.

## Serverseitige Sicherungen

Echoes of Elysium bringt zusätzlich eine eigene Sicherungsfunktion mit. In der **Verwaltung** findest Du unter **Einstellungen** folgende Felder dafür:

| Feld | Bedeutung |
|------|-----------|
| **Aktiviere Auto Server Backup** | Legt fest, ob der Server selbst Sicherungen anlegt (`true` oder `false`). |
| **Backup Intervall** | Abstand zwischen zwei Sicherungen in Minuten. |
| **Maximale Backups** | Anzahl der Sicherungen, die der Server aufbewahrt. |
| **Speicherintervall** | Abstand in Minuten, in dem der Server die laufende Welt speichert. |

Nach einer Änderung startest Du Deinen Server neu, damit die neuen Werte übernommen werden.

> [!IMPORTANT]
> Diese serverseitigen Sicherungen liegen auf demselben Server wie Deine Welt. Sie ersetzen kein vollständiges Backup über die Verwaltung – nutze für wichtige Stände immer zusätzlich die Backup-Funktion und lade sie auf Deinen PC herunter.

> [!NOTE]
> **Aktiviere Auto Server Backup** ist standardmäßig deaktiviert. Möchtest Du die serverseitigen Sicherungen nutzen, musst Du das Feld erst auf `true` setzen.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
