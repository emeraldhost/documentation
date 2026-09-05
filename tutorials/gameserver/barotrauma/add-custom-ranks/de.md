---
slug: "custom-ranks-hinzufuegen"
language: "de"
title: "So fügst Du benutzerdefinierte Ränge auf Deinem Barotrauma Server hinzu"
description: "Benutzerdefinierte Ränge auf einem Barotrauma Server hinzufügen"
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
short_title: "Custom Ranks hinzufügen"
sort: 4
related: ["gameserver/barotrauma/add-admin", "gameserver/barotrauma/add-bots", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

Du kannst eigene Ränge mit individuellen Berechtigungen über die Datei `permissionpresets.xml` erstellen.

> [!WARNING]
> Stelle sicher, dass Dein Server gestoppt ist, bevor Du die Konfigurationsdatei bearbeitest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **permissionpresets.xml öffnen**\
   Öffne die Datei `permissionpresets.xml` unter:

   ```text
   /config/permissionpresets.xml
   ```

4. **Eigenen Rang hinzufügen**\
   Füge einen neuen `<Preset>`-Eintrag innerhalb des Wurzelelements `<PermissionPresets>` hinzu. Hier ein Beispiel für einen benutzerdefinierten Rang:

   ```xml
   <Preset
     name="Builder"
     description="Darf die Runde verwalten und einige Konsolenbefehle nutzen."
     permissions="ManageRound,ConsoleCommands">
     <Command name="spawn"/>
     <Command name="teleportcharacter"/>
   </Preset>
   ```

   Passe die folgenden Attribute an Deine Bedürfnisse an:

   | Attribut | Beschreibung |
   |----------|--------------|
   | `name` | Der Name des Rangs |
   | `description` | Die Beschreibung, die zum Rang angezeigt wird |
   | `permissions` | Kommagetrennte Liste der Berechtigungen |
   | `<Command name="…"/>` | Ein Eintrag pro erlaubtem Konsolenbefehl |

   Konsolenbefehle greifen nur, wenn der Rang zusätzlich die Berechtigung `ConsoleCommands` besitzt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Du kannst den neuen Rang anschließend in der `clientpermissions.xml` einem Spieler zuweisen, indem Du `preset="Builder"` verwendest.

> [!NOTE]
> Verfügbare Berechtigungen sind unter anderem: `ManageRound`, `Kick`, `Ban`, `Unban`, `SelectSub`, `SelectMode`, `ManageCampaign`, `ConsoleCommands`, `ServerLog`, `ManageSettings`, `ManagePermissions`, `ManageMoney` und `All`.

> [!NOTE]
> Barotrauma bringt für eigene Presets die zweite Datei `permissionpresets_player.xml` mit. Dort abgelegte Ränge überstehen ein Spiel-Update, während `permissionpresets.xml` dabei überschrieben werden kann.
