---
slug: "backup-erstellen"
language: "de"
title: "So erstellst Du ein Backup Deines BATTALION Legacy Servers"
description: "Backup eines BATTALION Legacy Servers erstellen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["battalion-legacy"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup erstellen"
sort: 2
related: ["gameserver/battalion-legacy/add-admin", "gameserver/battalion-legacy/join-server"]
---

Ein BATTALION Legacy Server speichert **keine Spielwelt**. Servername und Admin-Passwort übergibt Dein Server beim Start als Parameter – beide trägst Du in der **Verwaltung** ein. Alles Weitere – Rundenzeiten, Kartenlisten, Bots und Punktevergabe – steckt in den Konfigurationsdateien Deines Servers. Genau diese Dateien sichert ein Backup.

> [!NOTE]
> **Kein Weltspeicherstand**
>
> BATTALION Legacy ist ein reiner PvP-Shooter. Auf dem Server wird nur die laufende Runde gehalten – es gibt keinen Spielstand und keinen Spielerfortschritt, den Du sichern oder auf einen anderen Server übertragen müsstest.

## Wann solltest Du ein Backup erstellen?

- Vor Änderungen an den Konfigurationsdateien Deines Servers
- Vor einer Neuinstallation der Serverdateien
- Sobald Du eine Konfiguration gefunden hast, mit der Du zufrieden bist
- In regelmäßigen Abständen, damit Du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest Du im allgemeinen Guide: [Backup erstellen](/tutorials/gameserver/create-backup).

> [!WARNING]
> Stoppe Deinen Server, bevor Du ein Backup erstellst oder wiederherstellst. Ein laufender Server schreibt weiterhin in seine Dateien und überschreibt Änderungen unter Umständen beim Beenden.

## Konfiguration einzeln sichern

Möchtest Du nur Deine Servereinstellungen sichern, lädst Du den Konfigurationsordner per SFTP herunter.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ordner herunterladen**\
   Lade die beiden folgenden Ordner vollständig auf Deinen PC herunter:

   ```text
   /Battalion/Config/
   /Battalion/Saved/Config/LinuxServer/
   ```

4. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Im Ordner `/Battalion/Config/` liegen die mitgelieferten Konfigurationsdateien (`DefaultGame_*.ini`) mit den Spieleinstellungen Deines Servers – zum Beispiel den Karten- und Modus-Listen, den Rundenzeiten und der Anzahl der Bots.
>
> Der Ordner `/Battalion/Saved/Config/LinuxServer/` entsteht erst im laufenden Betrieb und enthält die Konfiguration, die Dein Server selbst schreibt (unter anderem die `Game.ini`). Findest Du ihn nicht, starte Deinen Server einmal.

> [!IMPORTANT]
> Servername und Admin-Passwort übergibt Dein Server beim Start als Parameter aus der **Verwaltung**. Sie haben damit Vorrang vor den Einträgen in den Konfigurationsdateien – ein Backup dieser Dateien sichert die beiden Werte also nicht. Notiere sie Dir separat aus der Verwaltung.

> [!TIP]
> Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf Deinen PC herunter, falls Dein Backup-Limit erreicht wird.

> [!NOTE]
> Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion „Geplante Aufgaben“ befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
