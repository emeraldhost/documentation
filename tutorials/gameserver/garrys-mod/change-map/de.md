---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem Garry's Mod Server"
description: "Map auf einem Garry's Mod Server ändern, Workshop-Maps einbinden und eigene Maps hochladen"
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
short_title: "Map ändern"
sort: 7
related: ["gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/set-up-fastdl", "gameserver/garrys-mod/set-up-ttt"]
---
Mit welcher Map Dein Server startet, legst Du in den Einstellungen Deines Servers fest. Standardmäßig ist das `gm_flatgrass`. Neben den mitgelieferten Maps `gm_flatgrass` und `gm_construct` kannst Du Maps aus dem Steam Workshop nutzen oder eigene Maps per SFTP hochladen.

> [!IMPORTANT]
> Als Map trägst Du immer den **Dateinamen der `.bsp`-Datei ohne Endung** ein, nicht den Titel aus dem Steam Workshop. Für die Datei `rp_downtown_v4c_v2.bsp` lautet der Map-Name also `rp_downtown_v4c_v2`.

## Start-Map in den Einstellungen festlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Map eintragen**\
   Trage im Feld **Map** den Namen der Map ein, zum Beispiel `gm_construct`. Der Server startet damit mit dem Parameter:

   ```text
   +map gm_construct
   ```

   > [!NOTE]
   > Das Feld erlaubt nur Buchstaben, Zahlen, Bindestriche (`-`) und Unterstriche (`_`). Leerzeichen, Punkte oder die Endung `.bsp` sind nicht zulässig.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Map im laufenden Betrieb wechseln

Ohne Neustart wechselst Du die Map direkt über die Konsole.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Befehl eingeben**\
   Gib in der Konsole Deines Servers folgenden Befehl ein:

   ```text
   changelevel <map>
   ```

   Ersetze `<map>` durch den Namen der Map, zum Beispiel `changelevel gm_construct`.

> [!NOTE]
> Der Wechsel per `changelevel` gilt nur bis zum nächsten Neustart. Danach startet der Server wieder mit der Map aus dem Feld **Map**. Gibt es die angegebene Map auf dem Server nicht, schlägt der Befehl fehl und der Server bleibt auf der aktuellen Map.

## Map aus dem Steam Workshop nutzen

Workshop-Maps lädt der Server über Deine Workshop Collection herunter. Eine Workshop-Map, die nicht in der Collection ist, lädt der Server nicht herunter und verteilt sie auch nicht an die Spieler.

1. **Map zur Collection hinzufügen**\
   Füge die Map im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) zu der Collection hinzu, deren ID im Feld **Workshop ID** eingetragen ist. Wie Du eine Collection einrichtest, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

2. **Map-Namen herausfinden**\
   Ermittle den `.bsp`-Namen der Map (siehe [nächster Abschnitt](#bsp-namen-einer-workshop-map-herausfinden)).

3. **Map eintragen**\
   Trage den `.bsp`-Namen in den **Einstellungen** im Feld **Map** ein.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Der Server lädt die Collection beim Start herunter und startet anschließend mit der Map.

> [!TIP]
> Läuft auf Deinem Server eine Map, die auch in der Collection Deines Servers enthalten ist, wird sie automatisch für den Download durch die Spieler markiert. In der Konsole erscheint dann die Meldung „Making workshop map available for client download“. Für die Map musst Du also **keinen** Eintrag mit `resource.AddWorkshop` anlegen (siehe [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods#spieler-zum-download-der-addons-zwingen)).

## .bsp-Namen einer Workshop-Map herausfinden

Der Titel im Steam Workshop weicht oft vom eigentlichen Map-Namen ab. Den genauen Namen findest Du so heraus:

1. **Workshop-Beschreibung prüfen**\
   Öffne die Seite der Map im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/). Viele Ersteller nennen den Map-Namen in der Beschreibung. Findest Du ihn dort, kannst Du die folgenden Schritte überspringen.

2. **Addon-Datei entpacken**\
   Steht der Name nicht in der Beschreibung, entpacke die Addon-Datei der Map. Workshop-Addons liegen in der Regel als `.gma`-Datei vor. Eine `.gma`-Datei entpackst Du mit `gmad.exe` aus Deiner lokalen Spielinstallation unter `…\GarrysMod\bin\`:

   ```text
   gmad.exe extract -file "<Pfad zur Datei>.gma"
   ```

3. **Map-Datei suchen**\
   Im entpackten Ordner findest Du die Map im Unterordner `maps/`. Der Dateiname ohne die Endung `.bsp` ist der Name, den Du im Feld **Map** oder bei `changelevel` angibst.

> [!WARNING]
> Der Server läuft unter Linux und Dateinamen sind dort **groß- und kleinschreibungsabhängig**. Übernimm den Map-Namen deshalb exakt so, wie er in der Datei steht.

## Eigene Map per SFTP hochladen

Maps, die nicht aus dem Workshop stammen, lädst Du als `.bsp`-Datei auf den Server.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Map hochladen**\
   Lade die `.bsp`-Datei in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/maps/
   ```

   Beispiel: `/garrysmod/maps/gm_beispielmap.bsp`

4. **Map eintragen**\
   Trage den Dateinamen ohne `.bsp` in den **Einstellungen** im Feld **Map** ein, im Beispiel also `gm_beispielmap`.

5. **Server starten**\
   Speichere die Einstellung und starte Deinen Server.

> [!IMPORTANT]
> Eine per SFTP hochgeladene Map liegt nur auf dem Server. Damit Spieler beitreten können, brauchen sie die Map ebenfalls. Gibt es die Map auch im Steam Workshop, nutze statt des SFTP-Uploads den Weg über Deine Collection (siehe [Map aus dem Steam Workshop nutzen](#map-aus-dem-steam-workshop-nutzen)). Für eine Map, die es nicht im Workshop gibt, richte [FastDL](/tutorials/gameserver/garrys-mod/set-up-fastdl) ein, damit die Spieler sie herunterladen können.

## Passende Map für den Gamemode wählen

Viele Gamemodes sind auf bestimmte Maps ausgelegt. Am Präfix des Map-Namens erkennst Du, für welchen Gamemode eine Map gedacht ist:

| Präfix | Gamemode |
| ------ | -------- |
| `gm_` | Sandbox |
| `rp_` | Roleplay, zum Beispiel DarkRP |
| `ttt_` | Trouble in Terrorist Town |
| `ph_` | Prop Hunt |

Die Präfixe sind eine Konvention und keine feste Regel. Ein Gamemode startet zwar auch auf einer unpassenden Map, dort fehlen ihm aber zum Beispiel Spawn-Punkte oder Waffen-Platzierungen. Die Standard-Map `gm_flatgrass` eignet sich nur für Sandbox. Wenn Du den [Gamemode änderst](/tutorials/gameserver/garrys-mod/change-gamemode), passe deshalb auch das Feld **Map** an.
