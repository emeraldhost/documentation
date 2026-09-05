---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Fistful of Frags Servers"
description: "Backup eines Fistful of Frags Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/fistful-of-frags/add-admin", "gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Fistful of Frags Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

> [!NOTE]
> Fistful of Frags speichert auf dem Server keinen Weltfortschritt – es gibt keinen Spielstand, der übertragen oder wiederhergestellt werden könnte. Gesichert werden also Deine Konfigurationsdateien, Deine Kartenrotation, Deine Plugins, Deine Adminlisten, Deine Bannlisten und Deine eigenen Karten – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg`, an den Mapcycle-Dateien oder an den Adminlisten
- Vor dem Hochladen eigener Karten
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!TIP]
> **Konfiguration mitsichern**
>
> Wenn Du nur die wichtigsten Dateien sichern möchtest, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Ordner `/fof/cfg/`, `/fof/addons/` und `/fof/maps/` sowie die Dateien `/fof/mapcycle*.txt` herunter.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass keine Datei gerade beschrieben wird. Denke außerdem daran, aktuelle Banns vorher mit `writeid` und `writeip` in die Bann-Dateien zu schreiben – sonst liegen sie nur im Arbeitsspeicher und landen nicht im Backup.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
