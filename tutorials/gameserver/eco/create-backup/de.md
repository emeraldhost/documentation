---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Eco Servers"
description: "Backup eines Eco Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/eco/add-mods", "gameserver/eco/add-savegame", "gameserver/eco/download-savegame", "gameserver/eco/join-server"]
---

Ein regelmäßiges Backup Deines Eco Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine defekte Mod oder eine versehentlich zurückgesetzte Welt.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen oder Entfernen von [Mods](/tutorials/gameserver/eco/add-mods)
- Vor größeren Änderungen an den Konfigurationsdateien
- Vor dem Hochladen eines anderen Spielstands
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Eco schreibt den Spielstand regelmäßig auf die Festplatte – in welchem Abstand, steuert der Wert `SaveFrequency` in `/Configs/Storage.eco`. Eine Sicherung im laufenden Betrieb kann deshalb unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur die Welt sichern, kannst Du die beiden Spielstandsdateien auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/eco/download-savegame).

> [!NOTE]
> **Automatische Sicherungen des Servers**
>
> Eco legt im Ordner `/Storage/Backup/` zusätzlich eigene Sicherungen an. Diese werden rollierend überschrieben und ersetzen kein eigenes Backup – verlasse Dich für wichtige Stände nicht allein darauf.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
