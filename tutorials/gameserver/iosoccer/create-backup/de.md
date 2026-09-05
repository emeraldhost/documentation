---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines IOSoccer Servers"
description: "Backup eines IOSoccer Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/iosoccer/add-admin", "gameserver/iosoccer/add-mods", "gameserver/iosoccer/join-server", "gameserver/iosoccer/kick-ban-players"]
---

Ein regelmäßiges Backup Deines IOSoccer Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

> [!NOTE]
> IOSoccer speichert auf dem Server keinen Weltfortschritt – es gibt keinen Spielstand, der übertragen oder wiederhergestellt werden könnte. Gesichert werden also Deine Konfigurationsdateien, Deine Kartenrotation, Deine Plugins, Deine Adminlisten, Deine Bannlisten und Deine eigenen Karten – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg`, an der `mapcycle.txt` oder an den Adminlisten
- Vor dem Hochladen eigener Karten
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!TIP]
> **Konfiguration mitsichern**
>
> Wenn Du nur die wichtigsten Dateien sichern möchtest, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Ordner `/iosoccer/cfg/`, `/iosoccer/addons/` und `/iosoccer/maps/` sowie die Datei `/iosoccer/mapcycle.txt` herunter.

> [!NOTE]
> **Matchstatistiken**
>
> Lässt Du Deinen Server Matchdaten speichern, legt er die Ergebnisse als JSON-Dateien im Spielordner unter `statistics` ab. Existiert der Ordner `/iosoccer/statistics/` bei Dir, sichere ihn mit – sonst sind Deine bisherigen Spielergebnisse nach einer Wiederherstellung weg.

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. So ist sichergestellt, dass keine Datei gerade beschrieben wird. Denke außerdem daran, aktuelle Banns vorher mit `writeid` und `writeip` in die Bann-Dateien zu schreiben – sonst liegen sie nur im Arbeitsspeicher und landen nicht im Backup.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
