---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Kerbal Space Program Servers herunter"
description: "Savegame von einem Kerbal Space Program Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/join-server", "gameserver/kerbal-space-program/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen. Der komplette Spielstand liegt im Ordner `Universe` im Hauptverzeichnis Deines Servers.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. DarkMultiPlayer schreibt im laufenden Betrieb ständig Schiffs- und Spielerdaten – Du würdest sonst einen unvollständigen Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in das Hauptverzeichnis Deines Servers. Dort liegt der Ordner:

   ```text
   /Universe/
   ```

4. **Ordner herunterladen**\
   Lade den kompletten Ordner `Universe` mit allen Unterordnern auf Deinen PC herunter. Einzelne Dateien reichen nicht – Schiffe, Kerbals und der Fortschritt der Spieler liegen in verschiedenen Unterordnern.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Der Ordner besteht ausschließlich aus Textdateien: `Vessels` enthält je Schiff eine Datei, `Kerbals` je Kerbal eine Datei, `Scenarios` je Spieler einen eigenen Unterordner mit Wissenschaft, Geld, Ruf und Forschungsbaum.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich diesen Ordner herunter:
>
> ```text
> /Config/
> ```
>
> Dort liegen unter anderem `Settings.txt`, `admins.txt`, `mod-control.txt` sowie die Bann-Listen.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/kerbal-space-program/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/kerbal-space-program/create-backup).
