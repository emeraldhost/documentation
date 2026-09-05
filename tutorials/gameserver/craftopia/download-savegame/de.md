---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Craftopia Servers herunter"
description: "Savegame von einem Craftopia Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 2
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/create-backup", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Craftopia speichert im laufenden Betrieb automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig oder beschädigt sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in das Hauptverzeichnis Deines Servers. Dort findest Du den Ordner:

   ```text
   /DedicatedServerSave/
   ```

4. **Ordner herunterladen**\
   Lade den **kompletten Ordner** mit allen enthaltenen Dateien und Unterordnern auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Der Ordner `DedicatedServerSave` enthält alle Welten Deines Servers – die Weltdateien selbst liegen im Unterordner `Worlds`. Lade den Ordner immer vollständig herunter, damit Dir nichts fehlt.

> [!NOTE]
> **Abweichender Speicherort**
>
> Standardmäßig liegt der Spielstand in `DedicatedServerSave/`. Welcher Ordner bei Dir tatsächlich verwendet wird, steht in der Datei `/ServerSetting.ini` im Abschnitt `[Save]` beim Wert `savePath`.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /ServerSetting.ini
> ```
>
> Dort stehen unter anderem der Weltname, Schwierigkeitsgrad, Spielmodus und die Autosave-Einstellungen. Den Weltnamen brauchst Du, wenn Du den Spielstand später wieder einspielen möchtest.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/craftopia/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/craftopia/create-backup).
