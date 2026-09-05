---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Longvinter Servers herunter"
description: "Savegame von einem Longvinter Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/join-server", "gameserver/longvinter/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Longvinter speichert im laufenden Betrieb etwa alle zehn Minuten – Du würdest sonst einen unvollständigen Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Longvinter/Saved/
   ```

4. **Spielstand herunterladen**\
   Lade den kompletten Ordner `SaveGames` mit allen enthaltenen `.sav`-Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Der Ordner `SaveGames` enthält den gesamten Spielstand – unter anderem Zelte, Kisten samt Inhalt und den Fortschritt der Spieler. Die einzelnen `.sav`-Dateien gehören zusammen, sichere sie deshalb immer gemeinsam.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen und Admins sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```

> [!WARNING]
> Spielstände von Longvinter können mehrere Gigabyte groß werden. Nutze für den Download einen SFTP-Client wie FileZilla oder WinSCP – über den Dateimanager im Browser brechen große Übertragungen leichter ab.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/longvinter/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/longvinter/create-backup).
