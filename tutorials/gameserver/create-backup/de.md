---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Gameservers"
description: "Backup auf einem Gameserver erstellen, herunterladen, sperren und wiederherstellen"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 3
related: ["gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

Mit einem Backup sicherst Du Deinen kompletten Server mit einem Klick – Welt, Konfigurationen und alle weiteren Daten. Frühere Stände kannst Du jederzeit wiederherstellen, Backups als ZIP herunterladen und wichtige Sicherungen vor versehentlichem Löschen sperren.

## Backup erstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Backups öffnen**\
   Klicke in der linken Seitenleiste auf **Backups**.

3. **Neues Backup anlegen**\
   Klicke auf **Backup erstellen**. Es öffnet sich der Dialog **Backup erstellen**.

4. **Backup benennen**\
   Trage im Feld **Backup-Name** einen Namen ein, an dem Du die Sicherung später wiedererkennst, z.B. „Vor Mod-Update“.

5. **Backup starten**\
   Klicke auf **Erstellen**. Das Backup erscheint danach in der Tabelle mit **Name**, **Größe** und dem Zeitpunkt unter **Erstellt**.

> [!TIP]
> Erstelle vor größeren Änderungen wie einem Versionswechsel, neuen Mods oder einer Neuinstallation immer ein Backup. So kannst Du jederzeit zum vorherigen Stand zurück.

## Backup-Plätze

Oben auf der Seite **Backups** siehst Du, wie viele Backups Du noch anlegen kannst, z.B. „noch 5 von 5 Backups möglich“. Reichen Dir die Plätze nicht aus, kannst Du über **Backup-Plätze erweitern** weitere hinzubuchen.

Bei vielen Sicherungen hilft Dir das Suchfeld **Backups durchsuchen…**, ein bestimmtes Backup schnell zu finden.

## Backups verwalten

Laut der Seite **Backups** kannst Du Deine Backups auf folgende Arten nutzen:

| Möglichkeit | Beschreibung |
|-------------|--------------|
| Wiederherstellen | Setzt Deinen Server auf den Stand des Backups zurück. |
| Herunterladen | Lädt das Backup als ZIP-Datei auf Deinen PC herunter. |
| Sperren | Schützt ein wichtiges Backup vor versehentlichem Löschen. |
| Löschen | Entfernt das Backup. |

> [!WARNING]
> Beim Wiederherstellen wird der aktuelle Stand Deines Servers durch den Stand des Backups ersetzt. Änderungen, die Du nach dem Backup gemacht hast, gehen dabei verloren. Erstelle bei Bedarf vorher ein neues Backup vom aktuellen Stand.

## Automatische Backups

Backups musst Du nicht immer von Hand anlegen. Unter **Geplante Aufgaben** kannst Du festlegen, dass Dein Server regelmäßig automatisch ein Backup erstellt, z.B. jede Nacht. Wie das geht, erfährst Du unter [Geplante Aufgaben einrichten](/tutorials/gameserver/set-up-scheduled-tasks).
