---
description: Mods auf einem Soulmask Server hinzufügen
---

# So fügst du Mods zu deinem Soulmask Server hinzu

Du kannst Steam Workshop Mods auf deinem Server hinzufügen, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Stoppe deinen Server bevor du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

## Mods herunterladen

1. <b>Im Steam Workshop abonnieren</b><br>
   Öffne den [Steam Workshop für Soulmask](https://steamcommunity.com/app/2646460/workshop/) und abonniere die gewünschten Mods.

2. <b>Mod-Ordner finden</b><br>
   Die heruntergeladenen Mods findest du auf deinem PC unter:

   ```
   %LOCALAPPDATA%\WS\Saved\Mods\
   ```

## Mods auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mods hochladen</b><br>
   Lade die Mod-Ordner in folgendes Verzeichnis hoch:

   ```
   /WS/Saved/Mods/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

:::: danger Wichtig
Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
::::
