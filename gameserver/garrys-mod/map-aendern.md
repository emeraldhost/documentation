---
description: Map auf einem Garry's Mod Server ändern, Workshop-Maps einbinden und eigene Maps hochladen
---

# So änderst du die Map auf deinem Garry's Mod Server

Mit welcher Map dein Server startet, legst du in den Einstellungen deines Servers fest. Standardmäßig ist das `gm_flatgrass`. Neben den mitgelieferten Maps `gm_flatgrass` und `gm_construct` kannst du Maps aus dem Steam Workshop nutzen oder eigene Maps per SFTP hochladen.

:::: danger Wichtig
Als Map trägst du immer den **Dateinamen der `.bsp`-Datei ohne Endung** ein, nicht den Titel aus dem Steam Workshop. Für die Datei `rp_downtown_v4c_v2.bsp` lautet der Map-Name also `rp_downtown_v4c_v2`.
::::

## Start-Map in den Einstellungen festlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Map eintragen</b><br>
   Trage im Feld **Map** den Namen der Map ein, zum Beispiel `gm_construct`. Der Server startet damit mit dem Parameter:

   ```
   +map gm_construct
   ```

   :::: info Hinweis
   Das Feld erlaubt nur Buchstaben, Zahlen, Bindestriche (`-`) und Unterstriche (`_`). Leerzeichen, Punkte oder die Endung `.bsp` sind nicht zulässig.
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Map im laufenden Betrieb wechseln

Ohne Neustart wechselst du die Map direkt über die Konsole.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Befehl eingeben</b><br>
   Gib in der Konsole deines Servers folgenden Befehl ein:

   ```
   changelevel <map>
   ```

   Ersetze `<map>` durch den Namen der Map, zum Beispiel `changelevel gm_construct`.

:::: info Hinweis
Der Wechsel per `changelevel` gilt nur bis zum nächsten Neustart. Danach startet der Server wieder mit der Map aus dem Feld **Map**. Gibt es die angegebene Map auf dem Server nicht, schlägt der Befehl fehl und der Server bleibt auf der aktuellen Map.
::::

## Map aus dem Steam Workshop nutzen

Workshop-Maps lädt der Server über deine Workshop Collection herunter. Eine Workshop-Map, die nicht in der Collection ist, lädt der Server nicht herunter und verteilt sie auch nicht an die Spieler.

1. <b>Map zur Collection hinzufügen</b><br>
   Füge die Map im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) zu der Collection hinzu, deren ID im Feld **Workshop ID** eingetragen ist. Wie du eine Collection einrichtest, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).

2. <b>Map-Namen herausfinden</b><br>
   Ermittle den `.bsp`-Namen der Map (siehe [nächster Abschnitt](#bsp-namen-einer-workshop-map-herausfinden)).

3. <b>Map eintragen</b><br>
   Trage den `.bsp`-Namen in den **Einstellungen** im Feld **Map** ein.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Der Server lädt die Collection beim Start herunter und startet anschließend mit der Map.

:::: tip Tipp
Läuft auf deinem Server eine Map, die auch in der Collection deines Servers enthalten ist, wird sie automatisch für den Download durch die Spieler markiert. In der Konsole erscheint dann die Meldung „Making workshop map available for client download“. Für die Map musst du also **keinen** Eintrag mit `resource.AddWorkshop` anlegen (siehe [Mods hinzufügen](mods-hinzufuegen.md#spieler-zum-download-der-addons-zwingen)).
::::

## .bsp-Namen einer Workshop-Map herausfinden

Der Titel im Steam Workshop weicht oft vom eigentlichen Map-Namen ab. Den genauen Namen findest du so heraus:

1. <b>Workshop-Beschreibung prüfen</b><br>
   Öffne die Seite der Map im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/). Viele Ersteller nennen den Map-Namen in der Beschreibung. Findest du ihn dort, kannst du die folgenden Schritte überspringen.

2. <b>Addon-Datei entpacken</b><br>
   Steht der Name nicht in der Beschreibung, entpacke die Addon-Datei der Map. Workshop-Addons liegen in der Regel als `.gma`-Datei vor. Eine `.gma`-Datei entpackst du mit `gmad.exe` aus deiner lokalen Spielinstallation unter `…\GarrysMod\bin\`:

   ```
   gmad.exe extract -file "<Pfad zur Datei>.gma"
   ```

3. <b>Map-Datei suchen</b><br>
   Im entpackten Ordner findest du die Map im Unterordner `maps/`. Der Dateiname ohne die Endung `.bsp` ist der Name, den du im Feld **Map** oder bei `changelevel` angibst.

:::: warning Achtung
Der Server läuft unter Linux und Dateinamen sind dort **groß- und kleinschreibungsabhängig**. Übernimm den Map-Namen deshalb exakt so, wie er in der Datei steht.
::::

## Eigene Map per SFTP hochladen

Maps, die nicht aus dem Workshop stammen, lädst du als `.bsp`-Datei auf den Server.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Map hochladen</b><br>
   Lade die `.bsp`-Datei in folgendes Verzeichnis hoch:

   ```
   /garrysmod/maps/
   ```

   Beispiel: `/garrysmod/maps/gm_beispielmap.bsp`

4. <b>Map eintragen</b><br>
   Trage den Dateinamen ohne `.bsp` in den **Einstellungen** im Feld **Map** ein, im Beispiel also `gm_beispielmap`.

5. <b>Server starten</b><br>
   Speichere die Einstellung und starte deinen Server.

:::: danger Wichtig
Eine per SFTP hochgeladene Map liegt nur auf dem Server. Damit Spieler beitreten können, brauchen sie die Map ebenfalls. Gibt es die Map auch im Steam Workshop, nutze statt des SFTP-Uploads den Weg über deine Collection (siehe [Map aus dem Steam Workshop nutzen](#map-aus-dem-steam-workshop-nutzen)). Für eine Map, die es nicht im Workshop gibt, richte [FastDL](fastdl-einrichten.md) ein, damit die Spieler sie herunterladen können.
::::

## Passende Map für den Gamemode wählen

Viele Gamemodes sind auf bestimmte Maps ausgelegt. Am Präfix des Map-Namens erkennst du, für welchen Gamemode eine Map gedacht ist:

| Präfix | Gamemode |
| ------ | -------- |
| `gm_` | Sandbox |
| `rp_` | Roleplay, zum Beispiel DarkRP |
| `ttt_` | Trouble in Terrorist Town |
| `ph_` | Prop Hunt |

Die Präfixe sind eine Konvention und keine feste Regel. Ein Gamemode startet zwar auch auf einer unpassenden Map, dort fehlen ihm aber zum Beispiel Spawn-Punkte oder Waffen-Platzierungen. Die Standard-Map `gm_flatgrass` eignet sich nur für Sandbox. Wenn du den [Gamemode änderst](gamemode-aendern.md), passe deshalb auch das Feld **Map** an.
