---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem 7 Days to Die Server hinzu"
description: "Admin auf einem 7 Days to Die Server hinzufügen"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/7-days-to-die/activate-crossplay", "gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/change-map"]
---

Du kannst Admins über die Datei `serveradmin.xml` oder per Konsolenbefehl hinzufügen.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Admin über serveradmin.xml hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serveradmin.xml öffnen**\
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```text
   /Saves/serveradmin.xml
   ```

4. **Admin hinzufügen**\
   Füge im Bereich `<users>` einen neuen Eintrag hinzu:

   ```xml
   <user platform="Steam" userid="DEINE_STEAMID64" name="DeinName" permission_level="0" />
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Berechtigungsstufen

| Stufe | Beschreibung |
|-------|-------------|
| `0` | Super-Admin (volle Kontrolle) |
| `1` | Admin (Kick, Ban, etc.) |
| `1000` | Standard für normale Spieler |

> [!NOTE]
> Ein Admin kann alle Befehle ausführen, deren Berechtigungsstufe **gleich oder höher** als seine eigene ist.

## Admin per Konsolenbefehl hinzufügen

Falls Du bereits Admin bist, kannst Du weitere Admins ingame hinzufügen. Drücke `F1`, um die Konsole zu öffnen, und gib ein:

```text
admin add <SteamID64> <Berechtigungsstufe> <Name>
```

> [!TIP]
> **Beispiel**
>
> ```text
> admin add 76561198012345678 0 MaxMustermann
> ```
