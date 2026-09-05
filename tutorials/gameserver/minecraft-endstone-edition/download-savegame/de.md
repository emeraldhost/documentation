---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Minecraft Endstone Edition Servers herunter"
description: "Savegame von einem Minecraft Endstone Edition Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/join-server", "gameserver/minecraft-endstone-edition/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Im laufenden Betrieb schreibt der Server ständig in die Welt-Datenbank – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Aktive Welt herausfinden**\
   Öffne im Hauptordner Deines Servers die Datei `server.properties`. Der Eintrag `level-name` nennt den Ordnernamen der aktuell geladenen Welt:

   ```text
   level-name=meine_welt
   ```

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. **Verzeichnis öffnen**\
   Wechsle im Hauptordner Deines Servers in folgenden Ordner:

   ```text
   worlds
   ```

5. **Welt-Ordner herunterladen**\
   Jede Welt liegt hier als eigener Ordner. Lade den Ordner Deiner Welt **vollständig** herunter – inklusive des Unterordners `db` sowie der Dateien `level.dat` und `levelname.txt`.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!IMPORTANT]
> Der Unterordner `db` enthält die eigentliche Datenbank mit allen Chunks. Ohne ihn ist der heruntergeladene Spielstand wertlos.

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen und Spielerlisten sichern, lade zusätzlich folgende Dateien und Ordner aus dem Hauptordner Deines Servers herunter:
>
> ```text
> server.properties
> endstone.toml
> permissions.json
> allowlist.json
> banned-players.json
> banned-ips.json
> plugins
> ```

> [!WARNING]
> Im Ordner `plugins` liegt der Unterordner `.local`, den Endstone selbst verwaltet. Du kannst ihn beim Sichern weglassen – Endstone legt ihn beim nächsten Start neu an.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/minecraft-endstone-edition/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/minecraft-endstone-edition/create-backup).
