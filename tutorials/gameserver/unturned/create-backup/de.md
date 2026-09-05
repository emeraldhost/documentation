---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Unturned Servers"
description: "Backup eines Unturned Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/unturned/add-mods", "gameserver/unturned/add-savegame", "gameserver/unturned/download-savegame", "gameserver/unturned/join-server"]
---

Ein regelmäßiges Backup Deines Unturned Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, einen defekten Mod oder einen versehentlich überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hinzufügen oder Entfernen von Mods und Workshop-Karten
- Vor einem Kartenwechsel
- Vor dem Hochladen eines anderen Spielstands
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

> [!CAUTION]
> **Unturned speichert nicht automatisch**
>
> Unturned hat **keine automatische Speicherfunktion**. Alles, was seit dem letzten Speichern passiert ist, geht verloren, wenn der Server hart beendet wird. Speichere deshalb immer erst, bevor Du ein Backup erstellst.

## Vor dem Backup speichern

1. **Konsole öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zur **Konsole**.

2. **Speichern auslösen**\
   Gib folgenden Befehl ein:

   ```text
   save
   ```

3. **Server stoppen**\
   Stoppe Deinen Server anschließend über die Verwaltung.

   > [!TIP]
   > Alternativ kannst Du den Befehl `shutdown` in der Konsole verwenden – er speichert den Spielstand und fährt den Server anschließend sauber herunter.

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Möchtest Du nur den Spielstand sichern, kannst Du den Server-Ordner auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/unturned/download-savegame).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Läuft der Server währenddessen weiter, kann die Sicherung einen unvollständigen Spielstand enthalten.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
