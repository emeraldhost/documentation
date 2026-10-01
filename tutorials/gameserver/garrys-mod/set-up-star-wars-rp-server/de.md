---
slug: "star-wars-rp-server-einrichten"
language: "de"
title: "So richtest Du einen Star Wars RP Server in Garry's Mod ein"
description: "Einen Star Wars RP Server (SWRP) auf Basis von DarkRP in Garry's Mod einrichten"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Star Wars RP Server einrichten"
sort: 9
related: ["gameserver/garrys-mod/install-darkrp", "gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/add-mods"]
---
Star Wars RP (SWRP) ist kein eingebauter Spielmodus, den Du einfach umschalten kannst. Ein SWRP-Server ist ein **DarkRP**-Server mit Star-Wars-Inhalten wie Maps, Spielermodellen und Waffen sowie eigenen Jobs, etwa Klonkrieger. Meist wird DarkRP dazu über einen abgeleiteten Gamemode umbenannt, z.B. in `starwarsrp`. Fertige, komplette SWRP-Pakete gibt es zwar, sie werden aber in der Regel kostenpflichtig von Drittanbietern verkauft. In dieser Anleitung baust Du Dir die Grundlage selbst aus kostenlosen Inhalten.

> [!WARNING]
> Erstelle vor dem Umbau ein [Backup](/tutorials/gameserver/garrys-mod/create-backup) Deines Servers und stoppe ihn, bevor Du Dateien hochlädst.

## DarkRP installieren

DarkRP ist die Grundlage für Deinen SWRP-Server. Du benötigst den Gamemode selbst und das Addon **darkrpmodification**, in dem Du später Deine Jobs anlegst. Eine ausführliche Anleitung findest Du unter [DarkRP installieren](/tutorials/gameserver/garrys-mod/install-darkrp).

1. **DarkRP hinzufügen**\
   Füge [DarkRP](https://steamcommunity.com/sharedfiles/filedetails/?id=248302805) (Workshop-ID `248302805`) zur Workshop Collection Deines Servers hinzu. Wie Du eine Collection einrichtest, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

2. **darkrpmodification herunterladen**\
   Lade [darkrpmodification](https://github.com/FPtje/darkrpmodification) von GitHub herunter und entpacke das Archiv.

3. **darkrpmodification hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade den Ordner nach `/garrysmod/addons/` hoch. Der entpackte Ordner heißt z.B. `darkrpmodification-master`. Benenne ihn in `darkrpmodification` um, sodass der Ordner `lua` direkt darin liegt:

   ```text
   /garrysmod/addons/darkrpmodification/lua/
   ```

> [!IMPORTANT]
> Bearbeite niemals die Dateien von DarkRP selbst. Alle Anpassungen gehören in das Addon darkrpmodification, sonst gehen sie beim nächsten DarkRP-Update verloren.

## Eigenen Gamemode-Namen anlegen (optional)

Du kannst Deinen Server auch direkt mit dem Gamemode `darkrp` betreiben. Der einzige Unterschied ist der Name, unter dem Dein Gamemode angezeigt wird. Möchtest Du stattdessen z.B. `starwarsrp` verwenden, nutzt Du dafür den offiziellen abgeleiteten Gamemode **DerivedRP** von DarkRP.

1. **DerivedRP herunterladen**\
   Lade die Datei `derivedrp.zip` aus dem [DerivedRP-Release auf GitHub](https://github.com/FPtje/DarkRP/releases/tag/derived) herunter und entpacke sie.

2. **Ordner hochladen**\
   Lade den Ordner `derivedrp` per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/gamemodes/
   ```

3. **Ordner umbenennen**\
   Benenne den Ordner `derivedrp` in `starwarsrp` um.

4. **Datei umbenennen**\
   Benenne die Datei `derivedrp.txt` im Ordner in `starwarsrp.txt` um.

5. **Erste Zeile anpassen**\
   Öffne die Datei `starwarsrp.txt`. Ersetze den Eintrag `"darkrp"` in der ersten Zeile durch den neuen Ordnernamen `"starwarsrp"` und passe bei Bedarf den Titel an. Der Eintrag `"base"` bleibt unverändert auf `"darkrp"`. Der Anfang der Datei sieht dann so aus:

   ```text
   "starwarsrp"
   {
       "base"  "darkrp"
       "title"  "StarWarsRP"
   ```

   > [!IMPORTANT]
   > Ordnername, Dateiname und erste Zeile der `.txt`-Datei müssen exakt übereinstimmen und kleingeschrieben sein. Der Server läuft unter Linux, wo `StarWarsRP` und `starwarsrp` unterschiedliche Namen sind.

6. **Anzeigenamen ändern**\
   Optional kannst Du in den Dateien `/garrysmod/gamemodes/starwarsrp/gamemode/init.lua` und `/garrysmod/gamemodes/starwarsrp/gamemode/cl_init.lua` den Wert von `GM.Name` ändern:

   ```lua
   GM.Name = "StarWarsRP"
   ```

> [!WARNING]
> DarkRP muss weiterhin installiert bleiben. Der abgeleitete Gamemode baut auf `darkrp` auf und lädt ihn im Hintergrund. Ohne DarkRP startet `starwarsrp` nicht. Lädt `starwarsrp` nicht, obwohl DarkRP in Deiner Collection ist, lade DarkRP von GitHub per SFTP nach `/garrysmod/gamemodes/darkrp/` hoch, wie unter [DarkRP installieren](/tutorials/gameserver/garrys-mod/install-darkrp) beschrieben.

## Star-Wars-Inhalte hinzufügen

Maps, Spielermodelle und Waffen fügst Du Deiner Workshop Collection hinzu. Suche dazu im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) nach Begriffen wie „SWRP“, „Clone Trooper“ oder „Star Wars“. Beispiele für kostenlose Inhalte:

| Workshop-ID | Inhalt | Größe (ca.) |
| ----------- | ------ | ----------- |
| `1257128301` | SW Map : Venator (Map) | 296 MB |
| `111412589` | Star Wars Lightsabers (Waffen) | 39 MB |
| `183549197` | Star Wars Weapons (Waffen) | 25 MB |
| `127992073` | Star Wars Clonetroopers P1 (Spielermodelle) | 22 MB |
| `127992588` | Star Wars Clonetroopers P2 (Spielermodelle) | 30 MB |

> [!WARNING]
> Star-Wars-Inhalte sind oft sehr groß. Einzelne Maps haben mehrere hundert MB, umfangreiche Waffenpakete benötigen zusätzlich weitere Addons als Grundlage. Jeder Spieler muss alle erzwungenen Inhalte beim ersten Beitritt herunterladen. Halte Deine Collection deshalb schlank und nimm nur auf, was Du wirklich nutzt.

> [!NOTE]
> Viele Spielermodell-Pakete sind schon mehrere Jahre alt. Teste neue Inhalte auf Deinem Server, bevor Du sie dauerhaft einsetzt, damit keine fehlenden Texturen oder ERROR-Modelle auftreten.

## Spieler zum Download der Inhalte zwingen

Spieler laden automatisch nur die aktuelle Map aus Deiner Collection und den Gamemode herunter, sofern er selbst aus der Collection stammt (z.B. `darkrp`). Alle Modelle und Waffen musst Du erzwingen, sonst sehen Spieler ERROR-Modelle und fehlende Texturen.

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/lua/autorun/server/workshop.lua
   ```

2. **Inhalte eintragen**\
   Ersetze die leere Zeile `resource.AddWorkshop( "" )` und trage pro Addon eine Zeile mit der jeweiligen **Addon-ID** ein – nicht die Collection-ID:

   ```lua
   resource.AddWorkshop( "111412589" )
   resource.AddWorkshop( "183549197" )
   resource.AddWorkshop( "127992073" )
   resource.AddWorkshop( "127992588" )
   ```

   > [!NOTE]
   > Nutzt Du den abgeleiteten Gamemode `starwarsrp`, trage zusätzlich DarkRP mit `resource.AddWorkshop( "248302805" )` ein. Automatisch übertragen wird nur ein Gamemode, der selbst eine Workshop-ID hinterlegt hat, und das ist bei DerivedRP nicht der Fall.

3. **Datei speichern**\
   Speichere die Datei.

Mehr dazu findest Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

## Gamemode und Map einstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Gamemode eintragen**\
   Trage im Feld **Gamemode** `starwarsrp` ein. Hast Du keinen eigenen Gamemode-Namen angelegt, trage `darkrp` ein.

4. **Map eintragen**\
   Trage im Feld **Map** den Dateinamen Deiner Star-Wars-Map ohne die Endung `.bsp` ein. Der Dateiname ist nicht der Titel im Workshop. Für die Venator-Map aus der Tabelle oben nennt die Workshop-Beschreibung z.B. die Map `rp_venator_extensive`. Prüfe den genauen Dateinamen nach dem Download, da er eine Versionsendung enthalten kann. Wie Du ihn herausfindest, erfährst Du unter [Map ändern](/tutorials/gameserver/garrys-mod/change-map).

5. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Beim Start lädt der Server alle Inhalte Deiner Collection herunter. Durch die Größe der Star-Wars-Inhalte kann der erste Start deutlich länger dauern.

## Klonkrieger-Jobs erstellen

Jobs legst Du im Addon darkrpmodification an. Sie erscheinen anschließend im F4-Menü im Spiel.

1. **Kategorie anlegen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/categories.lua` und füge unter der Zeile „Add new categories under the next line!“ eine Kategorie hinzu:

   ```lua
   DarkRP.createCategory{
       name = "Klonarmee",
       categorises = "jobs",
       startExpanded = true,
       color = Color(200, 200, 200, 255),
   }
   ```

2. **Job anlegen**\
   Öffne die Datei `/garrysmod/addons/darkrpmodification/lua/darkrp_customthings/jobs.lua` und füge Deinen Job unter der Zeile „Add your custom jobs under the following line“ ein:

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

   Ersetze `models/pfad/zu/deinem/modell.mdl` durch den Pfad eines Spielermodells aus Deinem Modell-Addon. Unter `weapons` trägst Du die Waffenklassen Deiner Waffen-Addons ein. `command` muss für jeden Job eindeutig sein, `max = 0` bedeutet keine Begrenzung der Spielerzahl im Job.

3. **Server neu starten**\
   Speichere die Dateien und starte Deinen Server neu.

> [!TIP]
> Sollen neue Spieler direkt als Klonkrieger starten, ändere weiter unten in der `jobs.lua` (unterhalb Deiner Jobs) die Zeile `GAMEMODE.DefaultTeam = TEAM_CITIZEN` in `GAMEMODE.DefaultTeam = TEAM_CLONE`. Standard-Jobs von DarkRP wie `hobo` oder `gundealer` kannst Du in `/garrysmod/addons/darkrpmodification/lua/darkrp_config/disabled_defaults.lua` im Abschnitt `DarkRP.disabledDefaults["jobs"]` deaktivieren, indem Du ihren Wert auf `true` setzt.
