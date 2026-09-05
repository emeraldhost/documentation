---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines Ground Branch Servers"
description: "Backup eines Ground Branch Servers erstellen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

Ein Ground Branch Server speichert **keine Spielwelt**. Alles, was Deinen Server ausmacht, steckt in seiner Konfiguration: Admins, Banns, Kartenliste, Abstimmungsregeln und die Modliste. Genau diese Dateien sichert ein Backup.

> [!NOTE]
> **Kein Weltspeicherstand**
>
> Ground Branch ist missionsbasiert – nach jeder Runde beginnt die Karte neu. Es gibt daher keinen Spielstand, den Du herunterladen oder auf einen anderen Server übertragen könntest. Fortschritt, Operatoren und Loadouts der Spieler liegen auf deren eigenen PCs und nicht auf dem Server.

## Wann solltest Du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor Du Mods hinzufügst oder entfernst
- Bevor Du Admin-, Bann- oder Abstimmungseinstellungen umstellst
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Ein laufender Server schreibt weiterhin in seine Dateien und überschreibt Änderungen unter Umständen beim Beenden.

## Konfiguration einzeln sichern

Möchtest Du nur die Servereinstellungen sichern, lädst Du den Konfigurationsordner per SFTP herunter.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ordner herunterladen**\
   Lade folgenden Ordner vollständig auf Deinen PC herunter:

   ```text
   /GroundBranch/ServerConfig/
   ```

4. **Server starten**\
   Starte Deinen Server wieder.

## Was steckt im Konfigurationsordner?

| Datei | Inhalt |
|-------|--------|
| `Server.ini` | Allgemeine Servereinstellungen |
| `Admin.ini` | Admins und Admingruppen – siehe [Admin hinzufügen](/tutorials/gameserver/ground-branch/add-admin) |
| `Ban.ini` | Standard-Banndauer – siehe [Spieler kicken & bannen](/tutorials/gameserver/ground-branch/kick-ban-players) |
| `TeamKill.ini` | Automatische Banns bei Teamkills |
| `Vote.ini` | Regeln für Abstimmungen der Spieler |
| `MapList.ini` | Kartenliste des Servers |
| `mods.txt` | Modliste – siehe [Mods hinzufügen](/tutorials/gameserver/ground-branch/add-mods) |
| `AdminSetupPassword.txt` | Einmalpasswort für den ersten Admin |

> [!NOTE]
> Der Ordner `ServerConfig` und die enthaltenen Dateien entstehen erst beim **ersten Serverstart**. Findest Du ihn nicht, starte Deinen Server einmal.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
