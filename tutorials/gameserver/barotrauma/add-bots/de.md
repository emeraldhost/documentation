---
slug: "bots-hinzufuegen"
language: "de"
title: "So fügst Du Bots auf Deinem Barotrauma Server hinzu"
description: "Bots auf einem Barotrauma Server hinzufügen und konfigurieren"
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
short_title: "Bots hinzufügen"
sort: 3
related: ["gameserver/barotrauma/add-admin", "gameserver/barotrauma/add-custom-ranks", "gameserver/barotrauma/add-mods", "gameserver/barotrauma/add-savegame"]
---

Bots füllen automatisch leere Crew-Plätze auf Deinem Server und übernehmen Aufgaben wie das Steuern des U-Boots oder das Reparieren von Schäden.

> [!WARNING]
> Stelle sicher, dass Dein Server gestoppt ist, bevor Du die Konfigurationsdatei bearbeitest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serversettings.xml öffnen**\
   Öffne die Datei `serversettings.xml` unter:

   ```text
   /serversettings.xml
   ```

4. **Bot-Anzahl einstellen**\
   Suche nach den folgenden Einträgen und passe die Werte an:

   ```xml
   BotCount="4"
   MaxBotCount="8"
   ```

   | Einstellung | Beschreibung |
   |-------------|--------------|
   | `BotCount` | Standardanzahl der Bots, die beim Rundenstart hinzugefügt werden |
   | `MaxBotCount` | Maximale Anzahl an Bots, die auf dem Server erlaubt sind |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Bots werden automatisch hinzugefügt, um leere Crew-Plätze bis zum eingestellten `BotCount` zu füllen. Treten mehr Spieler bei, werden Bots entsprechend entfernt. `MaxBotCount` begrenzt, wie viele Bots gleichzeitig vorhanden sein dürfen.
