---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Gameservers"
description: "Backup auf einem Gameserver erstellen und wiederherstellen"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 3
related: ["gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

Du kannst von Deinem Server jederzeit ein Backup erstellen, um Deine Welt, Konfigurationen und Daten zu sichern und bei Bedarf wiederherzustellen.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.

## Backup erstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Backups öffnen**\
   Klicke in der linken Seitenleiste auf **Backups**.

3. **Neues Backup anlegen**\
   Klicke oben rechts auf das **Plus-Symbol**, um ein neues Backup zu erstellen.

4. **Backup benennen**\
   Trage einen Namen für Dein Backup ein. Optional kannst Du im Feld **Ignorierte Dateien und Verzeichnisse** Pfade angeben, die vom Backup ausgeschlossen werden sollen.

5. **Backup erstellen**\
   Klicke auf **Backup erstellen**. Der Vorgang läuft im Hintergrund und kann je nach Servergröße einige Minuten dauern.

## Backup verwalten

Über das **Drei-Punkte-Symbol** rechts neben einem Backup stehen Dir folgende Optionen zur Verfügung:

| Aktion | Beschreibung |
|--------|-------------|
| **Herunterladen** | Lädt das Backup als komprimierte Datei herunter. |
| **Wiederherstellen** | Setzt Deinen Server auf den Stand des Backups zurück. |
| **Sperren** | Schützt das Backup vor versehentlichem Löschen oder Überschreiben. |
| **Löschen** | Entfernt das Backup dauerhaft. |

### Backup sperren

Ein gesperrtes Backup kann nicht gelöscht und nicht durch automatische Backups überschrieben werden. Klicke erneut auf **Sperren**, um die Sperre wieder aufzuheben.

### Backup wiederherstellen

1. **Wiederherstellung starten**\
   Wähle im Drei-Punkte-Menü die Option **Wiederherstellen**.

2. **Optional: Dateien löschen**\
   Aktiviere die Checkbox **Lösche alle Dateien und Ordner, bevor Du dieses Backup wiederherstellst**, wenn Du den aktuellen Serverzustand vollständig durch das Backup ersetzen möchtest.

3. **Bestätigen**\
   Klicke auf **Backup wiederherstellen**. Der Server wird automatisch gestoppt und die Wiederherstellung gestartet.

> [!WARNING]
> Während der Wiederherstellung kannst Du den Server nicht kontrollieren, nicht auf den Datei-Browser zugreifen und keine weiteren Backups erstellen, bis der Vorgang abgeschlossen ist.
