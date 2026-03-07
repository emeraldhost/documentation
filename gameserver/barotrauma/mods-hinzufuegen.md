---
description: Mods auf einem Barotrauma Server installieren
---

# So installierst du Mods auf deinem Barotrauma Server

Du kannst Steam Workshop Mods auf deinem Server installieren, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Stoppe deinen Server bevor du Mods installierst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

## Mods herunterladen

1. <b>Im Steam Workshop abonnieren</b><br>
   Öffne den [Steam Workshop für Barotrauma](https://steamcommunity.com/app/602960/workshop/) und abonniere die gewünschten Mods.

2. <b>Spiel starten</b><br>
   Starte Barotrauma auf deinem PC, damit die Mods heruntergeladen werden.

3. <b>Mod-Ordner finden</b><br>
   Die heruntergeladenen Mods findest du auf deinem PC unter:

   ```
   %LocalAppData%/Daedalic Entertainment GmbH/Barotrauma/WorkshopMods/Installed
   ```

   Jeder Mod liegt in einem Ordner mit einer numerischen ID.

## Mods auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mods hochladen</b><br>
   Lade die Mod-Ordner in folgendes Verzeichnis hoch:

   ```
   /LocalMods/
   ```

   :::: tip Tipp
   Benenne die Ordner von der numerischen ID in den Mod-Namen um, damit du sie leichter zuordnen kannst. Den Namen findest du in der `filelist.xml` im jeweiligen Mod-Ordner.
   ::::

## Mods aktivieren

1. <b>config_player.xml öffnen</b><br>
   Öffne die Datei `config_player.xml` im Hauptverzeichnis deines Servers.

2. <b>Mod-Einträge hinzufügen</b><br>
   Füge für jeden Mod einen Eintrag innerhalb des `<regularpackages>`-Bereichs hinzu:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/ModName/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

   Ersetze `ModName` durch den Namen des Mod-Ordners. Für mehrere Mods fügst du einfach mehrere Einträge hinzu:

   ```xml
   <regularpackages>
     ...
     <package path="LocalMods/HaloWeapons/filelist.xml" enabled="true"/>
     <package path="LocalMods/MoreMonsters/filelist.xml" enabled="true"/>
   </regularpackages>
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Einige Mods müssen sowohl auf dem Server als auch bei allen Spielern installiert sein. Prüfe die Mod-Beschreibung, ob eine clientseitige Installation nötig ist.
::::

:::: danger Wichtig
Lege Mods **nicht** in den `WorkshopMods`-Ordner auf dem Server. Dieser wird von Steam verwaltet und sollte nicht manuell bearbeitet werden.
::::
