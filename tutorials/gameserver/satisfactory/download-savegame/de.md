---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Satisfactory Servers herunter"
description: "Savegame von einem Satisfactory Server herunterladen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 5
related: ["gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-admin-password"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Satisfactory speichert im laufenden Betrieb automatisch – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   > [!NOTE]
   > Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in Deinem SFTP-Programm die Anzeige versteckter Dateien, falls Du ihn nicht siehst.

4. **Spielstand herunterladen**\
   Lade die gewünschte `.sav`-Datei auf Deinen PC herunter. Der Dateiname entspricht dem Namen der Session im Spiel.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welche Datei ist die richtige?**
>
> Liegen mehrere `.sav`-Dateien im Ordner, ist die zuletzt geänderte in der Regel Dein aktueller Spielstand. Beim automatischen Speichern legt der Server zusätzlich rotierende Autosave-Dateien an, deren Namen auf `_autosave_0`, `_autosave_1` und so weiter enden. Welche Session geladen ist, siehst Du außerdem im **Server Manager** im Reiter **Manage Saves**.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:
>
> ```text
> /FactoryGame/Saved/Config/LinuxServer/
> ```
>
> Servername sowie Admin- und Server-Passwort liegen dagegen im übergeordneten Ordner in einer Datei, die mit `ServerSettings.` beginnt und den Game Port Deines Servers im Namen trägt:
>
> ```text
> /.config/Epic/FactoryGame/Saved/SaveGames/
> ```

> [!IMPORTANT]
> Lösche die `ServerSettings.`-Datei nicht auf dem Server. Ohne sie verliert der Server seinen Namen, sein Admin Passwort, sein Server Passwort und sein Zertifikat und gilt wieder als nicht beansprucht.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/satisfactory/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/satisfactory/create-backup).
