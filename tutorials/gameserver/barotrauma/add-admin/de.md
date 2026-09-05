---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Barotrauma Server hinzu"
description: "Admin auf einem Barotrauma Server hinzufügen und entfernen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

Du kannst Admins über die Datei `clientpermissions.xml` verwalten.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **clientpermissions.xml öffnen**\
   Öffne die Datei `clientpermissions.xml` unter:

   ```text
   /config/clientpermissions.xml
   ```

4. **Admin hinzufügen**\
   Füge einen neuen Eintrag hinzu:

   ```xml
   <Client
     name="SpielerName"
     steamid="DEINE_STEAMID64"
     preset="Admin"
   />
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Admin entfernen

Um einen Admin zu entfernen, lösche den entsprechenden `<Client>`-Eintrag aus der `clientpermissions.xml` und starte den Server neu.

## Verfügbare Presets

| Preset | Beschreibung |
|--------|-------------|
| `Admin` | Vollzugriff auf alle Befehle und Einstellungen |
| `Moderator` | Kann Spieler kicken, bannen und den Chat moderieren |
| `None` | Keine besonderen Berechtigungen |

> [!NOTE]
> Du kannst auch benutzerdefinierte Berechtigungen vergeben, indem Du `permissions="ManageRound,Kick,Ban,ConsoleCommands"` statt eines Presets verwendest.
