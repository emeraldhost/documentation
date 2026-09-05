---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines No One Survived Servers herunter"
description: "Savegame von einem No One Survived Server herunterladen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/join-server", "gameserver/no-one-survived/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

4. **Spielstand herunterladen**\
   Lade alle `.sav`-Dateien herunter, die zu Deinem Spielstand gehören. Das sind alle Dateien, die mit Deinem Savegame-Namen und einem Unterstrich beginnen – zum Beispiel alle Dateien, die mit `MeineWelt_` anfangen.

   > [!NOTE]
   > **Welcher Spielstand ist der aktive?**
   >
   > Welcher Spielstand aktuell geladen wird, siehst Du am Savegame-Namen in der **Verwaltung**. Der Server verwendet die Dateien, deren Name vor dem ersten Unterstrich genau diesem Eintrag entspricht.

5. **Automatische Sicherungen herunterladen (optional)**\
   Möchtest Du zusätzlich die Zwischenstände des Servers sichern, wechsle in folgendes Verzeichnis und lade die dortigen Dateien ebenfalls herunter:

   ```text
   /WRSH/Saved/SaveGames/AutoSave/
   ```

6. **Konfiguration sichern (optional)**\
   Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

   ```text
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

7. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/no-one-survived/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/no-one-survived/create-backup).
