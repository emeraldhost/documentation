---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Valheim Server hinzu"
description: "Admin auf einem Valheim Server hinzufügen"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/valheim/download-savegame", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

Du kannst Admins über die Datei `adminlist.txt` hinzufügen. Jeder Admin wird anhand seiner Spieler-ID identifiziert.

## Spieler-ID herausfinden

Die Spieler-ID hat das Format `[Plattform]_[ID]`, z.B. `V_76561198012345678`. Bei Steam-Spielern steht hinter `V_` die SteamID64. Du findest die ID auf zwei Wegen:

- In der Spielerliste im Spiel, die Du mit `F2` öffnest, während der Spieler auf dem Server ist.
- Im Server-Log, also in der Konsole Deiner Verwaltung, wenn der Spieler sich verbindet. Ohne Crossplay steht dort bei Steam-Spielern nur die SteamID64 ohne Präfix.

Das gilt für alle Plattformen, also auch für Crossplay-Spieler von Xbox, PlayStation 5 oder Nintendo Switch 2.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **adminlist.txt öffnen**\
   Öffne die Datei `adminlist.txt` im Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/adminlist.txt
   ```

   Der Server legt die Datei beim ersten Start automatisch an.

4. **Spieler-ID eintragen**\
   Trage die Spieler-ID des Spielers ein, der Admin werden soll. Füge pro Zeile eine ID hinzu und übernimm sie genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung:

   ```text
   V_76561198012345678
   V_76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Für Steam-Spieler funktionieren auch ältere Einträge weiterhin, also die Form `Steam_76561198012345678` oder die reine [SteamID64](/tutorials/gameserver/steamid64-find-out). Crossplay-Spieler haben keine SteamID64, für sie brauchst Du immer die ID aus der Spielerliste oder dem Server-Log.

> [!NOTE]
> Am sichersten übernimmst Du Änderungen an der `adminlist.txt` mit einem Neustart Deines Servers.
