---
description: Einen Star Wars RP Server (SWRP) auf Basis von DarkRP in Garry's Mod einrichten
---

# So richtest du einen Star Wars RP Server in Garry's Mod ein

Star Wars RP (SWRP) ist kein eingebauter Spielmodus, den du einfach umschalten kannst. Ein SWRP-Server ist ein **DarkRP**-Server mit Star-Wars-Inhalten wie Maps, Spielermodellen und Waffen sowie eigenen Jobs, etwa Klonkrieger. Meist wird DarkRP dazu über einen abgeleiteten Gamemode umbenannt, z.B. in `starwarsrp`. Fertige, komplette SWRP-Pakete gibt es zwar, sie werden aber in der Regel kostenpflichtig von Drittanbietern verkauft. In dieser Anleitung baust du dir die Grundlage selbst aus kostenlosen Inhalten.

:::: warning Achtung
Erstelle vor dem Umbau ein [Backup](backup-erstellen.md) deines Servers und stoppe ihn, bevor du Dateien hochlädst.
::::

## DarkRP installieren

DarkRP ist die Grundlage für deinen SWRP-Server. Du benötigst den Gamemode selbst und das Addon **darkrpmodification**, in dem du später deine Jobs anlegst. Eine ausführliche Anleitung findest du unter [DarkRP installieren](darkrp-installieren.md).

1. <b>DarkRP hinzufügen</b><br>
   Füge [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop-ID `248302805`) zur Workshop Collection deines Servers hinzu. Wie du eine Collection einrichtest, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).

2. <b>darkrpmodification herunterladen</b><br>
   Lade [darkrpmodification](https://github.com/FPtje/darkrpmodification) von GitHub herunter und entpacke das Archiv.

3. <b>darkrpmodification hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade den Ordner nach `/garrysmod/addons/` hoch. Der entpackte Ordner heißt z.B. `darkrpmodification-master`. Benenne ihn in `darkrpmodification` um, sodass der Ordner `lua` direkt darin liegt:

   ```
   /garrysmod/addons/darkrpmodification/lua/
   ```

:::: danger Wichtig
Bearbeite niemals die Dateien von DarkRP selbst. Alle Anpassungen gehören in das Addon darkrpmodification, sonst gehen sie beim nächsten DarkRP-Update verloren.
::::

## Eigenen Gamemode-Namen anlegen (optional)

Du kannst deinen Server auch direkt mit dem Gamemode `darkrp` betreiben. Der einzige Unterschied ist der Name, unter dem dein Gamemode angezeigt wird. Möchtest du stattdessen z.B. `starwarsrp` verwenden, nutzt du dafür den offiziellen abgeleiteten Gamemode **DerivedRP** von DarkRP.

1. <b>DerivedRP herunterladen</b><br>
   Lade die Datei `derivedrp.zip` aus dem [DerivedRP-Release auf GitHub](https://github.com/FPtje/DarkRP/releases/tag/derived) herunter und entpacke sie.

2. <b>Ordner hochladen</b><br>
   Lade den Ordner `derivedrp` per [SFTP](../sftp-verbindung-herstellen.md) in folgendes Verzeichnis hoch:

   ```
   /garrysmod/gamemodes/
   ```

3. <b>Ordner umbenennen</b><br>
   Benenne den Ordner `derivedrp` in `starwarsrp` um.

4. <b>Datei umbenennen</b><br>
   Benenne die Datei `derivedrp.txt` im Ordner in `starwarsrp.txt` um.

5. <b>Erste Zeile anpassen</b><br>
   Öffne die Datei `starwarsrp.txt`. Ersetze den Eintrag `"darkrp"` in der ersten Zeile durch den neuen Ordnernamen `"starwarsrp"` und passe bei Bedarf den Titel an. Der Eintrag `"base"` bleibt unverändert auf `"darkrp"`. Der Anfang der Datei sieht dann so aus:

   ```
   "starwarsrp"
   {
       "base"  "darkrp"
       "title"  "StarWarsRP"
   ```

   :::: danger Wichtig
   Ordnername, Dateiname und erste Zeile der `.txt`-Datei müssen exakt übereinstimmen und kleingeschrieben sein. Der Server läuft unter Linux, wo `StarWarsRP` und `starwarsrp` unterschiedliche Namen sind.
   ::::

6. <b>Anzeigenamen ändern</b><br>
   Optional kannst du in den Dateien `/garrysmod/gamemodes/starwarsrp/gamemode/init.lua` und `/garrysmod/gamemodes/starwarsrp/gamemode/cl_init.lua` den Wert von `GM.Name` ändern:

   ```lua
   GM.Name = "StarWarsRP"
   ```

:::: warning Achtung
DarkRP muss weiterhin installiert bleiben. Der abgeleitete Gamemode baut auf `darkrp` auf und lädt ihn im Hintergrund. Ohne DarkRP startet `starwarsrp` nicht. Lädt `starwarsrp` nicht, obwohl DarkRP in deiner Collection ist, lade DarkRP von GitHub per SFTP nach `/garrysmod/gamemodes/darkrp/` hoch, wie unter [DarkRP installieren](darkrp-installieren.md) beschrieben.
::::

## Star-Wars-Inhalte hinzufügen

Maps, Spielermodelle und Waffen fügst du deiner Workshop Collection hinzu. Suche dazu im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) nach Begriffen wie „SWRP“, „Clone Trooper“ oder „Star Wars“. Beispiele für kostenlose Inhalte:

| Workshop-ID | Inhalt | Größe (ca.) |
| ----------- | ------ | ----------- |
| `1257128301` | SW Map : Venator (Map) | 296 MB |
| `111412589` | Star Wars Lightsabers (Waffen) | 39 MB |
| `183549197` | Star Wars Weapons (Waffen) | 25 MB |
| `127992073` | Star Wars Clonetroopers P1 (Spielermodelle) | 22 MB |
| `127992588` | Star Wars Clonetroopers P2 (Spielermodelle) | 30 MB |

:::: warning Achtung
Star-Wars-Inhalte sind oft sehr groß. Einzelne Maps haben mehrere hundert MB, umfangreiche Waffenpakete benötigen zusätzlich weitere Addons als Grundlage. Jeder Spieler muss alle erzwungenen Inhalte beim ersten Beitritt herunterladen. Halte deine Collection deshalb schlank und nimm nur auf, was du wirklich nutzt.
::::

:::: info Hinweis
Viele Spielermodell-Pakete sind schon mehrere Jahre alt. Teste neue Inhalte auf deinem Server, bevor du sie dauerhaft einsetzt, damit keine fehlenden Texturen oder ERROR-Modelle auftreten.
::::

## Spieler zum Download der Inhalte zwingen

Spieler laden automatisch nur die aktuelle Map aus deiner Collection und den Gamemode herunter, sofern er selbst aus der Collection stammt (z.B. `darkrp`). Alle Modelle und Waffen musst du erzwingen, sonst sehen Spieler ERROR-Modelle und fehlende Texturen.

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. <b>Inhalte eintragen</b><br>
   Ersetze die leere Zeile `resource.AddWorkshop( "" )` und trage pro Addon eine Zeile mit der jeweiligen **Addon-ID** ein – nicht die Collection-ID:

   ```lua
   resource.AddWorkshop( "111412589" )
   resource.AddWorkshop( "183549197" )
   resource.AddWorkshop( "127992073" )
   resource.AddWorkshop( "127992588" )
   ```

   :::: info Hinweis
   Nutzt du den abgeleiteten Gamemode `starwarsrp`, trage zusätzlich DarkRP mit `resource.AddWorkshop( "248302805" )` ein. Automatisch übertragen wird nur ein Gamemode, der selbst eine Workshop-ID hinterlegt hat, und das ist bei DerivedRP nicht der Fall.
   ::::

3. <b>Datei speichern</b><br>
   Speichere die Datei.

Mehr dazu findest du unter [Mods hinzufügen](mods-hinzufuegen.md).

## Gamemode und Map einstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Gamemode eintragen</b><br>
   Trage im Feld **Gamemode** `starwarsrp` ein. Hast du keinen eigenen Gamemode-Namen angelegt, trage `darkrp` ein.

4. <b>Map eintragen</b><br>
   Trage im Feld **Map** den Dateinamen deiner Star-Wars-Map ohne die Endung `.bsp` ein. Der Dateiname ist nicht der Titel im Workshop. Für die Venator-Map aus der Tabelle oben nennt die Workshop-Beschreibung z.B. die Map `rp_venator_extensive`. Prüfe den genauen Dateinamen nach dem Download, da er eine Versionsendung enthalten kann. Wie du ihn herausfindest, erfährst du unter [Map ändern](map-aendern.md).

5. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Beim Start lädt der Server alle Inhalte deiner Collection herunter. Durch die Größe der Star-Wars-Inhalte kann der erste Start deutlich länger dauern.

## Klonkrieger-Jobs erstellen

Jobs legst du im Addon darkrpmodification an. Sie erscheinen anschließend im F4-Menü im Spiel.

1. <b>Kategorie anlegen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua` und füge unter der Zeile „Add new categories under the next line!“ eine Kategorie hinzu:

   ```lua
   DarkRP.createCategory{
       name = "Klonarmee",
       categorises = "jobs",
       startExpanded = true,
       color = Color(200, 200, 200, 255),
   }
   ```

2. <b>Job anlegen</b><br>
   Öffne die Datei `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua` und füge deinen Job unter der Zeile „Add your custom jobs under the following line“ ein:

   ```lua
   TEAM_CLONE = DarkRP.createJob("Klonkrieger", {
       color = Color(200, 200, 200, 255),
       model = {"models/pfad/zu/deinem/modell.mdl"},
       description = [[Ein Klonkrieger der Großen Armee der Republik.]],
       weapons = {},
       command = "klonkrieger",
       max = 0,
       salary = 50,
       admin = 0,
       vote = false,
       hasLicense = false,
       candemote = false,
       category = "Klonarmee",
   })
   ```

   Ersetze `models/pfad/zu/deinem/modell.mdl` durch den Pfad eines Spielermodells aus deinem Modell-Addon. Unter `weapons` trägst du die Waffenklassen deiner Waffen-Addons ein. `command` muss für jeden Job eindeutig sein, `max = 0` bedeutet keine Begrenzung der Spielerzahl im Job.

3. <b>Server neu starten</b><br>
   Speichere die Dateien und starte deinen Server neu.

:::: tip Tipp
Sollen neue Spieler direkt als Klonkrieger starten, ändere weiter unten in der `jobs.lua` (unterhalb deiner Jobs) die Zeile `GAMEMODE.DefaultTeam = TEAM_CITIZEN` in `GAMEMODE.DefaultTeam = TEAM_CLONE`. Standard-Jobs von DarkRP wie `hobo` oder `gundealer` kannst du in `/garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua` im Abschnitt `DarkRP.disabledDefaults["jobs"]` deaktivieren, indem du ihren Wert auf `true` setzt.
::::
