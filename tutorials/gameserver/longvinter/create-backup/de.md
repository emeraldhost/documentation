---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Longvinter Servers"
description: "Backup eines Longvinter Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/longvinter/add-admin", "gameserver/longvinter/add-savegame", "gameserver/longvinter/download-savegame", "gameserver/longvinter/join-server"]
---

Ein regelmäßiges Backup Deines Longvinter Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen versehentlich überschriebenen Spielstand oder eine fehlerhafte Konfiguration.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor Aufräumarbeiten in der Welt, etwa dem Entfernen von Zelten
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Ordner `SaveGames` auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/longvinter/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Longvinter speichert im laufenden Betrieb etwa alle zehn Minuten – eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten. Aus demselben Grund überschreibt der Server auch Änderungen an der `Game.ini`, die Du im laufenden Betrieb vornimmst.

> [!TIP]
> **Serverseitige Sicherungen aktivieren**
>
> Longvinter kann zusätzlich selbst einmal täglich eine Sicherung des Spielstands anlegen. Dazu trägst Du bei gestopptem Server in der Datei `/Longvinter/Saved/Config/LinuxServer/Game.ini` folgenden Wert ein:
>
> ```ini
> [/Game/Blueprints/Server/GM_Longvinter.GM_Longvinter_C]
> SaveBackups=true
> ```
>
> Diese Sicherungen liegen auf Deinem Server und ersetzen kein eigenes Backup – sie gehen zum Beispiel bei einem beschädigten Spielstandordner mit verloren.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
