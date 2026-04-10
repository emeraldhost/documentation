---
description: Mods auf einem Project Zomboid Server hinzufügen
---

# So fügst du Mods zu deinem Project Zomboid Server hinzu

Du kannst Steam Workshop Mods auf deinem Server installieren, um das Spielerlebnis zu erweitern.

## Workshop-ID und Mod-ID herausfinden

1. <b>Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Project Zomboid](https://steamcommunity.com/app/108600/workshop/) und suche den gewünschten Mod.

2. <b>Workshop-ID kopieren</b><br>
   Die Workshop-ID findest du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   :::: tip Beispiel
   In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2392709985` ist die Workshop-ID `2392709985`.
   ::::

3. <b>Mod-ID finden</b><br>
   Die Mod-ID findest du auf der Workshop-Seite in der Beschreibung des Mods (oft als "Mod ID" angegeben).

## Mods zum Server hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Config öffnen</b><br>
   Öffne die Datei `ProjectZomboid.ini` unter:

   ```
   /.cache/Server/ProjectZomboid.ini
   ```

4. <b>Mods eintragen</b><br>
   Füge die Mod-IDs und Workshop-IDs hinzu, getrennt durch `;`:

   ```ini
   Mods=ModID1;ModID2;ModID3
   WorkshopItems=WorkshopID1;WorkshopID2;WorkshopID3
   ```

   :::: tip Beispiel
   ```ini
   Mods=jiggasGreenfireMelee;tsarslib
   WorkshopItems=2392709985;2392987599
   ```
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Die Mods werden beim Start automatisch heruntergeladen.

:::: danger Wichtig
Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
::::
