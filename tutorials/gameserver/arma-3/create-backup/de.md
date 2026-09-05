---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Arma 3 Servers"
description: "Backup eines Arma 3 Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/arma-3/add-mods", "gameserver/arma-3/add-savegame", "gameserver/arma-3/download-savegame", "gameserver/arma-3/join-server"]
---

Ein regelmäßiges Backup Deines Arma 3 Servers schützt Dich vor Datenverlust – egal ob durch ein fehlgeschlagenes Update, ein Mod-Update, das Deine Konfiguration unbrauchbar macht, oder eine versehentlich überschriebene Datei.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods
- Vor größeren Änderungen an der `server.cfg`
- Vor dem Hochladen eines anderen Spielstands oder einer anderen Mission
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> **Was gehört zu einem vollständigen Backup?**
>
> Ein Arma-3-Server verteilt seine Daten auf mehrere Verzeichnisse:
>
> | Pfad | Inhalt |
> |------|--------|
> | `/server.cfg` | Servereinstellungen, Admins und Missionsauswahl |
> | `/mpmissions` | Deine Missionen als `.pbo`-Dateien |
> | `/serverprofile` | Serverprofil inklusive Spielstand persistenter Missionen |
> | `/@modname` | Die einzelnen Mod-Ordner |
> | `/keys` | Die `.bikey`-Dateien Deiner Mods |

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Persistente Missionen schreiben im laufenden Betrieb in die Profildatei – eine Sicherung während des Betriebs kann unvollständig sein.

> [!NOTE]
> Möchtest Du nur den Fortschritt einer persistenten Mission sichern, kannst Du die Spielstandsdatei auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/arma-3/download-savegame).

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
