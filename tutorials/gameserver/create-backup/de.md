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
related: ["gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/change-resources"]
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
   Klicke auf **Erstellen**. Sobald die Sicherung angelegt ist, erhältst Du die Benachrichtigung **Backup erstellt** mit dem Hinweis, dass für Deinen Server ein neues Backup erstellt wurde.

6. **Backup prüfen**\
   Das Backup erscheint in der Tabelle mit **Name**, **Größe** (z.B. 210,7 MB) und dem Zeitpunkt unter **Erstellt** (z.B. „vor 2 Minuten“). Unter dem Namen steht zusätzlich die sha256-Prüfsumme des Backups.

> [!TIP]
> Erstelle vor größeren Änderungen wie einem Versionswechsel, neuen Mods oder einer Neuinstallation immer ein Backup. So kannst Du jederzeit zum vorherigen Stand zurück.

## Backup-Plätze

Oben auf der Seite **Backups** siehst Du, wie viele Backups Du noch anlegen kannst, z.B. „noch 5 von 5 Backups möglich“. Reichen Dir die Plätze nicht aus, kannst Du über **Backup-Plätze erweitern** weitere hinzubuchen. Es öffnet sich der Dialog **Ressourcen ändern**, in dem Du die Anzahl der Backup-Plätze einstellst. Wie das genau geht, erfährst Du unter [Ressourcen ändern](/tutorials/gameserver/change-resources).

Bei vielen Sicherungen hilft Dir das Suchfeld **Backups durchsuchen…**, ein bestimmtes Backup schnell zu finden.

## Backups verwalten

Jede Zeile in der Tabelle hat rechts ein Menü (**…**). Darüber stehen Dir folgende Aktionen zur Verfügung:

| Aktion | Beschreibung |
|--------|--------------|
| **Herunterladen** | Lädt das Backup als ZIP-Datei auf Deinen PC herunter. |
| **Wiederherstellen** | Setzt Deinen Server auf den Stand des Backups zurück. |
| **Sperren** | Schützt ein wichtiges Backup vor versehentlichem Löschen. |
| **Löschen** | Entfernt das Backup endgültig. |

## Backup wiederherstellen

1. **Menü öffnen**\
   Klicke in der Zeile des gewünschten Backups auf das Menü (**…**).

2. **Wiederherstellen wählen**\
   Klicke auf **Wiederherstellen**. Es öffnet sich der Dialog **Backup wiederherstellen**, der Dir noch einmal anzeigt, aus welchem Backup Du Deinen Server wiederherstellst.

3. **Option für bestehende Dateien prüfen**\
   Die Option **Bestehende Dateien vor dem Wiederherstellen löschen** ist standardmäßig aktiviert. Sie entfernt alle vorhandenen Serverdateien, bevor das Backup eingespielt wird – es bleiben also keine alten Dateien zurück.

4. **Wiederherstellung starten**\
   Klicke auf **Wiederherstellen**, um den Vorgang zu starten, oder auf **Abbrechen**, um nichts zu verändern.

> [!WARNING]
> Der Dialog weist darauf hin: Der aktuelle Serverstand wird dabei vollständig überschrieben und kann nicht zurückgeholt werden. Änderungen, die Du nach dem Backup gemacht hast, gehen verloren. Erstelle bei Bedarf vorher ein neues Backup vom aktuellen Stand.

## Backup löschen

1. **Menü öffnen**\
   Klicke in der Zeile des Backups auf das Menü (**…**) und wähle **Löschen**.

2. **Löschen bestätigen**\
   Im Dialog **Backup löschen** wirst Du gefragt, ob Du das Backup wirklich löschen möchtest. Klicke auf **Löschen**, um es zu entfernen, oder auf **Abbrechen**.

> [!IMPORTANT]
> Diese Aktion kann nicht rückgängig gemacht werden. Sperre wichtige Sicherungen über **Sperren**, damit sie nicht versehentlich gelöscht werden.

## Automatische Backups

Backups musst Du nicht immer von Hand anlegen. Unter **Geplante Aufgaben** kannst Du festlegen, dass Dein Server regelmäßig automatisch ein Backup erstellt, z.B. jede Nacht. Wie das geht, erfährst Du unter [Geplante Aufgaben einrichten](/tutorials/gameserver/set-up-scheduled-tasks).
