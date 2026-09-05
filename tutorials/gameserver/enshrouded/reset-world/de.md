---
slug: "welt-zuruecksetzen"
language: "de"
title: "So setzt Du die Welt Deines Enshrouded Servers zurück"
description: "Welt eines Enshrouded Servers zurücksetzen"
tags: []
date: "2026-08-13"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt zurücksetzen"
sort: 14
related: ["gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers", "gameserver/enshrouded/read-server-log"]
---

Enshrouded hat keinen Knopf zum Zurücksetzen. Eine frische Welt bekommst Du, indem Du den Spielstand im Speicherordner löschst – beim nächsten Start legt der Server automatisch eine neue Welt an.

> [!IMPORTANT]
> Beim Zurücksetzen ist Deine bisherige Welt unwiederbringlich weg: alle Basen und Gebäude, jede Veränderung am Terrain, sämtliche Truhen samt Inhalt und der komplette Fortschritt in der Welt. Es gibt keine Rückgängig-Funktion. Erstelle deshalb **zuerst** ein Backup – ohne Sicherung kommst Du an Deinen alten Stand nie wieder heran.

## Welt zurücksetzen

1. **Backup erstellen**\
   Sichere Deine aktuelle Welt, bevor Du irgendetwas löschst: [Backup erstellen](/tutorials/gameserver/enshrouded/create-backup). Zusätzlich kannst Du den Spielstand auf Deinen PC herunterladen: [Savegame herunterladen](/tutorials/gameserver/enshrouded/download-savegame).

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Ein laufender Server schreibt die Welt etwa alle fünf Minuten erneut auf die Festplatte – lösche die Dateien deshalb niemals im laufenden Betrieb.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Spielstand löschen**\
   Wechsle in den Ordner `savegame` und lösche alle Dateien darin. Zu einer Welt gehören dort mehrere Dateien: die Weltdatei `3ad85aea`, ihre automatischen Rollkopien `3ad85aea-1` bis `3ad85aea-9`, die Dateien mit dem Zusatz `_info` (Name und Metadaten der Welt) sowie die Dateien mit dem Zusatz `-index` (welche Kopie gerade aktiv ist). Welche davon vorhanden sind, hängt vom Alter Deiner Welt ab – lösche deshalb einfach den kompletten Inhalt des Ordners. Den Ordner `savegame` selbst kannst Du stehen lassen.

5. **Server starten**\
   Starte Deinen Server über die Verwaltung. Beim Hochfahren erzeugt er eine neue Welt. Sobald in der Konsole `[Session] 'HostOnline' (up)!` erscheint, kannst Du beitreten.

> [!WARNING]
> Lösche wirklich nur den Inhalt des Ordners `savegame`. Die Datei `enshrouded_server.json` liegt im Hauptverzeichnis und enthält Deine komplette Serverkonfiguration – löschst Du sie, sind auch Deine Usergruppen und Passwörter weg.

## Was weg ist und was bleibt

| Weg | Bleibt |
|-----|--------|
| Basen und Gebäude | Dein Charakter mit Level, Fähigkeiten und Rucksack |
| Veränderungen am Terrain | Die Serverkonfiguration aus der `enshrouded_server.json` |
| Truhen und ihr Inhalt | Usergruppen und Passwörter |
| Der gesamte Fortschritt in der Welt | Deine zuvor erstellten Backups |

> [!NOTE]
> Auf dem Server wird nur der Fortschritt der Welt gespeichert. Dein Charakter – Level, Fähigkeitspunkte und der Inhalt Deines Rucksacks – wird auf Deinem eigenen Rechner gespeichert. Du startest in der neuen Welt also mit Deinem gewohnten Charakter, aber ohne Basis und ohne Lager.

> [!TIP]
> Soll die neue Welt nach anderen Regeln laufen, ändere die [Schwierigkeit](/tutorials/gameserver/enshrouded/adjust-difficulty), bevor Du den Server wieder startest.

> [!TIP]
> **Alte Welt zurückholen**
>
> Hast Du vor dem Löschen ein Backup erstellt, stellst Du es über die Verwaltung wieder her: [Backup erstellen](/tutorials/gameserver/enshrouded/create-backup). Hast Du den Spielstand stattdessen auf Deinen PC heruntergeladen, lädst Du ihn per SFTP wieder hoch: [Savegame hinzufügen](/tutorials/gameserver/enshrouded/add-savegame).
