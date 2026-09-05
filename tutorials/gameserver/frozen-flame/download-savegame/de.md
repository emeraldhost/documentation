---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Frozen Flame Servers herunter"
description: "Savegame von einem Frozen Flame Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/join-server", "gameserver/frozen-flame/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Solange der Server läuft, schreibt er weiter in den Spielstand – Du würdest sonst einen unvollständigen Stand herunterladen.

1. **Spielstand speichern**\
   Setze über RCON den folgenden Befehl ab, damit der aktuelle Stand auf die Festplatte geschrieben wird – siehe [Adminrechte nutzen](/tutorials/gameserver/frozen-flame/add-admin):

   ```text
   Admin_SaveAll
   ```

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /FrozenFlame/Saved/
   ```

5. **Ordner herunterladen**\
   Lade den kompletten Ordner `SaveGames` auf Deinen PC herunter:

   ```text
   /FrozenFlame/Saved/SaveGames/
   ```

6. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Sichere immer den **kompletten Ordner** `SaveGames`. Welche Dateien darin zu welchem Teil des Spielstands gehören, ist nicht dokumentiert – einzelne Dateien herauszupicken ist deshalb keine verlässliche Sicherung.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:
>
> ```text
> /FrozenFlame/Saved/Config/LinuxServer/
> ```
>
> Dort liegen unter anderem die `Game.ini` und die `Engine.ini` Deines Servers.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/frozen-flame/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/frozen-flame/create-backup).
