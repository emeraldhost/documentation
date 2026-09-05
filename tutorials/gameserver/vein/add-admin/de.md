---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem VEIN Server hinzu"
description: "Admin auf einem VEIN Server hinzufügen"
tags: []
date: "2026-03-23"
visibility: "public"
cta: "gameserver"
product_keys: ["vein"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/vein/add-savegame", "gameserver/vein/create-backup", "gameserver/vein/download-savegame", "gameserver/vein/enable-whitelist"]
---

Du kannst Admins und Super-Admins über die `Game.ini` hinzufügen.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne die Datei `Game.ini` unter:

   ```text
   /Vein/Saved/Config/LinuxServer/Game.ini
   ```

4. **Admin hinzufügen**\
   Füge den Abschnitt `[/Script/Vein.VeinGameSession]` hinzu (falls nicht vorhanden) und trage die SteamID64 ein:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   ```

   Für mehrere Admins füge jede SteamID64 in einer neuen Zeile hinzu:

   ```ini
   [/Script/Vein.VeinGameSession]
   AdminSteamIDs=76561198012345678
   AdminSteamIDs=76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Super-Admin hinzufügen

Super-Admins haben erweiterte Rechte. Nutze dafür `SuperAdminSteamIDs` statt `AdminSteamIDs`:

```ini
[/Script/Vein.VeinGameSession]
SuperAdminSteamIDs=76561198012345678
AdminSteamIDs=76561198087654321
```

## Admin-Menü öffnen

Als Admin kannst Du das Admin-Menü im Spiel mit der `\`-Taste (Backslash) öffnen. Darüber kannst Du Items spawnen, Gameplay verwalten und den Server moderieren.
