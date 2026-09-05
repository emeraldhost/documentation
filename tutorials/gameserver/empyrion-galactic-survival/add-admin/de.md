---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Empyrion: Galactic Survival Server hinzu"
description: "Admin auf einem Empyrion: Galactic Survival Server hinzufügen"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["empyrion-galactic-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/empyrion-galactic-survival/change-gamemode", "gameserver/empyrion-galactic-survival/change-max-players", "gameserver/empyrion-galactic-survival/change-savegame-name", "gameserver/empyrion-galactic-survival/change-seed"]
---

Admins werden auf Empyrion-Servern in der Datei `adminconfig.yaml` im `Saves`-Ordner eingetragen.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **adminconfig.yaml öffnen**\
   Öffne die Datei:

   ```text
   /Saves/adminconfig.yaml
   ```

4. **Eintrag hinzufügen**\
   Füge Deinen Spieler unter dem Abschnitt `Elevated:` hinzu. Ersetze die SteamID64 und das gewünschte Permission-Level:

   ```yaml
   Elevated:
     - Id: 76561198012345678
       Permission: 9
   ```

   Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) kannst Du über die verlinkte Anleitung herausfinden.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

## Permission-Level

| Wert | Rolle |
|------|-------|
| 3 | GameMaster |
| 6 | Moderator |
| 9 | Admin |

> [!TIP]
> Ist noch kein Admin konfiguriert, kann sich ein eingeloggter Spieler mit dem Befehl `initadmin` im Spiel selbst als Admin eintragen. Anschließend kann er weitere Admins über die `adminconfig.yaml` hinzufügen.

> [!NOTE]
> Änderungen an der `adminconfig.yaml` werden erst nach einem Neustart des Servers übernommen.
