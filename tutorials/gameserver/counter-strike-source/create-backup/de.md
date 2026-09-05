---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Counter-Strike Source Servers"
description: "Backup eines Counter-Strike Source Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-source"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/counter-strike-source/add-admin", "gameserver/counter-strike-source/add-mods", "gameserver/counter-strike-source/join-server", "gameserver/counter-strike-source/kick-ban-players"]
---

Ein regelmäßiges Backup Deines Counter-Strike Source Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, eine fehlerhafte Konfiguration oder ein Plugin, das den Server nicht mehr starten lässt.

> [!NOTE]
> Counter-Strike Source speichert keinen Spielfortschritt. Gesichert werden also Deine Konfigurationsdateien, Deine Plugins, Deine Adminlisten und Deine Maps – genau die Dateien, deren Verlust am meisten Arbeit macht.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Installieren oder Entfernen von Metamod:Source, SourceMod oder einzelnen Plugins
- Vor größeren Änderungen an der `server.cfg` oder an den Adminlisten
- Nach dem Hinzufügen eigener Maps
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!TIP]
> **Konfiguration mitsichern**
>
> Wenn Du nur die wichtigsten Dateien sichern möchtest, lade Dir per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Ordner `/cstrike/cfg/`, `/cstrike/addons/` und `/cstrike/maps/` herunter.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
