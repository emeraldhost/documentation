---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Euro Truck Simulator 2 Server hinzu"
description: "Admins auf einem Euro Truck Simulator 2 Server hinzufügen"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["euro-truck-simulator-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/euro-truck-simulator-2/add-mods", "gameserver/euro-truck-simulator-2/create-backup", "gameserver/euro-truck-simulator-2/deactivate-player-damage", "gameserver/euro-truck-simulator-2/join-server"]
---

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.
- Steam64_ID der Benutzer, die als Admins hinzugefügt werden sollen
- Texteditor (wie Notepad, Notepad++, Windows Editor oder Visual Studio Code)

## Schritte

1. **Konfigurationsdatei suchen**\
   Stelle eine SFTP-Verbindung zu Deinem Server her.
   - Navigiere zum Pfad „`.local/share/Euro Truck Simulator 2`“.

2. **Konfigurationsdatei bearbeiten**\
   Suche die Datei namens „`server_config.sii`“.
   - Öffne diese Datei in einem Texteditor.

3. **Admins hinzufügen**\
   Suche nach der Zeile, die mit „`moderator_list:`“ beginnt.
    - Ändere die Anzahl in der Zeile „`moderator_list:`“, um der Anzahl der Admins zu entsprechen.
    - Füge die Steam64\_IDs der Benutzer hinzu, die Du als Admin hinzufügen möchtest. Jede Steam64\_ID sollte in einer neuen Zeile stehen und wie folgt aussehen: „`moderator_list[X]:  Steam64_ID`“. Dabei steht X für die entsprechende Stelle in der Liste.

      Ein Beispiel könnte wie folgt aussehen:

      ```text
      moderator_list: 3
      moderator_list[0]: Steam64_ID
      moderator_list[1]: Steam64_ID
      moderator_list[2]: Steam64_ID
      ```

4. **Änderungen speichern**\
   Speichere die Änderungen an der Konfigurationsdatei und schließe den Texteditor.
   - Starte den Server neu über die Verwaltung.

Das war's! Mit diesen Schritten solltest Du in der Lage sein, neue Admins auf Deinem Euro Truck Simulator 2 Server hinzuzufügen. Viel Spaß beim Spielen.
