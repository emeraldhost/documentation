---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Stormforge Servers"
description: "Erstelle ein Backup Deines Stormforge Servers, damit Welt und Einstellungen vor Datenverlust geschützt sind."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/stormforge/download-savegame", "gameserver/stormforge/add-savegame", "gameserver/stormforge/reset-world"]
---

Ein regelmäßiges Backup Deines Stormforge Servers schützt Dich vor Datenverlust, zum Beispiel durch eine fehlerhafte Konfiguration, eine versehentlich gelöschte Welt oder einen überschriebenen Spielstand.

## Wann solltest Du ein Backup erstellen?

- Vor größeren Änderungen an der `settings.json`
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Zurücksetzen der Welt
- Vor einem Umzug auf einen anderen Server
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Eine Sicherung im laufenden Betrieb kann unvollständig sein.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> **Nur die Welt sichern**\
> Möchtest Du nur die Welt sichern, kannst Du sie auch einzeln herunterladen: [Savegame herunterladen](/tutorials/gameserver/stormforge/download-savegame). Die Welt liegt im Ordner `/saves/Worlds/<World-ID>/`. Deine Welteinstellungen stehen dagegen in der Datei `/settings.json`. Zu einer vollständigen Sicherung gehört deshalb auch diese Datei.

> [!NOTE]
> **Automatische Backups**\
> Automatische Backups und Neustarts kannst Du selbst in der Verwaltung unter **Geplante Aufgaben** einrichten, siehe [Geplante Aufgaben einrichten](/tutorials/gameserver/set-up-scheduled-tasks).
