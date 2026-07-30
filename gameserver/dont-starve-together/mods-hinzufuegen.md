---
description: Mods auf einem Don’t Starve Together Server hinzufügen
---

# So fügst du Mods zu deinem Don’t Starve Together Server hinzu

Don’t Starve Together bringt ein vollwertiges Mod-System für Server mit. Du musst die Mods nicht selbst hochladen — der Server lädt sie eigenständig aus dem Steam Workshop herunter. Dafür sind zwei Dateien zuständig:

- `dedicated_server_mods_setup.lua` legt fest, **welche** Mods heruntergeladen werden.
- `modoverrides.lua` legt fest, **welche** Mods in der Welt aktiv sind — und zwar pro Shard.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

## Workshop-ID herausfinden

1. <b>Mod im Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Don’t Starve Together](https://steamcommunity.com/app/322330/workshop/) und suche die gewünschte Mod.

2. <b>ID aus der Adresse ablesen</b><br>
   Die Workshop-ID ist die Zahl am Ende der URL. Bei `https://steamcommunity.com/sharedfiles/filedetails/?id=350811795` lautet die ID also `350811795`.

## Mods zum Download eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Datei öffnen</b><br>
   Öffne im Hauptverzeichnis deines Servers die folgende Datei:

   ```
   mods/dedicated_server_mods_setup.lua
   ```

4. <b>Mods eintragen</b><br>
   Trage pro Mod eine Zeile mit der Workshop-ID ein:

   ```lua
   ServerModSetup("350811795")
   ServerModSetup("2902364746")
   ```

5. <b>Kollektionen eintragen</b><br>
   Möchtest du eine komplette Workshop-Kollektion laden, nutzt du stattdessen diesen Befehl mit der ID der Kollektion:

   ```lua
   ServerModCollectionSetup("379114180")
   ```

6. <b>Speichern</b><br>
   Speichere die Datei.

## Mods in der Welt aktivieren

1. <b>Cluster-Ordner öffnen</b><br>
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist dein Cluster-Ordner. Darin findest du die Shard-Ordner `Master` (Oberwelt) und, falls die Höhlen aktiv sind, `Caves`.

2. <b>modoverrides.lua öffnen</b><br>
   Öffne im Ordner `Master` die Datei `modoverrides.lua`. Existiert sie noch nicht, lege sie neu an:

   ```
   <Cluster-Ordner>/Master/modoverrides.lua
   ```

3. <b>Mods eintragen</b><br>
   Trage jede Mod mit ihrer Workshop-ID im Format `workshop-<ID>` ein:

   ```lua
   return {
     ["workshop-350811795"] = { enabled = true },
     ["workshop-2902364746"] = { enabled = true },
   }
   ```

4. <b>Mod-Einstellungen setzen</b><br>
   Bietet eine Mod eigene Optionen an, ergänzt du sie über `configuration_options`. Die gültigen Namen und Werte stehen in der Datei `modinfo.lua` der jeweiligen Mod:

   ```lua
   return {
     ["workshop-2902364746"] = {
       enabled = true,
       configuration_options = { mode = "Easy Cartography" },
     },
   }
   ```

5. <b>Höhlen ergänzen</b><br>
   Sind die Höhlen auf deinem Server aktiv, kopiere dieselbe Datei zusätzlich nach `<Cluster-Ordner>/Caves/modoverrides.lua`. Jeder Shard hat seine eigene Mod-Liste.

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start lädt er die eingetragenen Mods herunter und aktiviert sie. Der erste Start kann dadurch etwas länger dauern.

:::: danger Wichtig
Beide Dateien gehören zusammen: Jede Mod, die du in `modoverrides.lua` aktivierst, braucht auch eine passende `ServerModSetup()`-Zeile in `dedicated_server_mods_setup.lua` — und umgekehrt. Fehlt eine der beiden Angaben, wird die Mod nicht geladen.
::::

:::: info Müssen Spieler etwas tun?
Nein. Reine Server-Mods müssen von beitretenden Spielern gar nicht heruntergeladen werden. Mods, die auch auf dem Client laufen müssen, werden beim Beitritt automatisch über den Steam Workshop heruntergeladen und aktiviert.
::::

:::: tip Tipp
Heruntergeladene Mods legt der Server als Ordner `mods/workshop-<ID>/` ab. Daran kannst du prüfen, ob eine Mod tatsächlich geladen wurde. Erstelle vor Mod-Änderungen außerdem ein [Backup](backup-erstellen.md) deiner Welt.
::::
