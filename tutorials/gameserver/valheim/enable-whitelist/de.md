---
slug: "whitelist-aktivieren"
language: "de"
title: "So aktivierst Du die Whitelist auf Deinem Valheim Server"
description: "Whitelist auf einem Valheim Server aktivieren"
tags: []
date: "2026-09-24"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Whitelist aktivieren"
sort: 17
related: ["gameserver/valheim/add-admin", "gameserver/valheim/kick-ban-players", "gameserver/valheim/join-server", "gameserver/valheim/enable-crossplay"]
---
Mit der Whitelist kannst Du den Zugang zu Deinem Server auf bestimmte Spieler beschränken. Valheim nutzt dafür die Datei `permittedlist.txt`.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Whitelist einrichten

> [!WARNING]
> Sobald auch nur **ein Spieler** in der `permittedlist.txt` eingetragen ist, können nur noch eingetragene Spieler Deinem Server beitreten. Das gilt auch für Admins – trage Dich selbst und alle Admins ebenfalls ein. Eine Datei ohne Einträge schränkt niemanden ein.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **permittedlist.txt öffnen**\
   Öffne die Datei `permittedlist.txt` im Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/permittedlist.txt
   ```

   Sie liegt im selben Ordner wie `adminlist.txt` und `bannedlist.txt`, eine Ebene über dem Ordner `worlds_local`. Der Server legt die Datei beim ersten Start automatisch an.

3. **Spieler eintragen**\
   Trage pro Zeile die Spieler-ID eines Spielers ein. Übernimm sie genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung (siehe [Spieler-ID herausfinden](#spieler-id-herausfinden)):

   ```text
   // List permitted players ID ONE per line
   V_76561198012345678
   V_76561198087654321
   ```

   Für Steam-Spieler funktionieren auch die ältere Form `Steam_76561198012345678` und die reine SteamID64. Zeilen, die mit `//` beginnen, sind Kommentare und werden ignoriert. Spielernamen funktionieren in dieser Datei nicht, nur IDs. Achte darauf, dass vor und nach einer ID keine Leerzeichen stehen.

4. **Datei speichern**\
   Speichere die Datei.

> [!NOTE]
> Der Server liest die Datei nach einer Änderung innerhalb weniger Sekunden automatisch neu ein und entfernt verbundene Spieler, die nicht eingetragen sind. Ein Neustart ist dafür nicht nötig, schadet aber auch nicht.

## Spieler-ID herausfinden

Die Spieler-ID hat das Format `[Plattform]_[ID]`, z.B. `V_76561198012345678`. Bei Steam-Spielern steht hinter `V_` die SteamID64. Du findest die ID auf zwei Wegen:

- In der Spielerliste im Spiel, die Du mit `F2` öffnest, während der Spieler auf dem Server ist.
- Im Server-Log, also in der Konsole Deiner Verwaltung, wenn der Spieler sich verbindet. Das gilt auch, wenn die Whitelist ihn abweist. Ohne Crossplay steht dort bei Steam-Spielern nur die SteamID64 ohne Präfix.

Crossplay-Spieler (z.B. von Xbox, PlayStation 5 oder Nintendo Switch 2) haben keine SteamID64. Für sie brauchst Du immer die ID aus der Spielerliste oder dem Server-Log.

> [!NOTE]
> Ob Dein Server Crossplay-Spieler überhaupt zulässt, stellst Du in der Anleitung [Crossplay aktivieren](/tutorials/gameserver/valheim/enable-crossplay) ein.

## Whitelist deaktivieren

Lösche alle Spieler-IDs aus der `permittedlist.txt` und speichere die Datei. Kommentarzeilen mit `//` dürfen stehen bleiben. Danach können wieder alle Spieler beitreten, die nicht gebannt sind.
