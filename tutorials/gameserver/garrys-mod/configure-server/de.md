---
slug: "server-konfigurieren"
language: "de"
title: "So konfigurierst Du Deinen Garry's Mod Server"
description: "Garry's Mod Server über die server.cfg konfigurieren"
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
short_title: "Server konfigurieren"
sort: 12
related: ["gameserver/garrys-mod/set-gsl-token", "gameserver/garrys-mod/set-up-loading-screen", "gameserver/garrys-mod/change-tickrate", "gameserver/garrys-mod/set-up-fastdl"]
---
Die wichtigsten Einstellungen Deines Servers legst Du in der Datei `server.cfg` fest. Dort bestimmst Du zum Beispiel, wie viele Props ein Spieler spawnen darf, ob Noclip erlaubt ist oder ob sich Spieler gegenseitig Schaden zufügen können.

## Wann die server.cfg ausgeführt wird

Der Server führt die `server.cfg` beim Start aus und **bei jedem Mapwechsel erneut**. Alle Werte aus der Datei werden dabei wieder gesetzt.

> [!WARNING]
> Änderst Du einen Wert nur über die **Konsole** in der Verwaltung und steht derselbe Wert in der `server.cfg`, wird Deine Änderung beim nächsten Mapwechsel oder Neustart wieder überschrieben. Trage Einstellungen, die dauerhaft gelten sollen, deshalb immer in die `server.cfg` ein.

## Aufbau der server.cfg

Dein Server wird bereits mit einer vorbereiteten `server.cfg` ausgeliefert. Sie ist in folgende Abschnitte unterteilt:

| Abschnitt | Inhalt |
|-----------|--------|
| Kopfbereich | Grundeinstellungen, darunter `sv_loadingurl` für den [Ladebildschirm](/tutorials/gameserver/garrys-mod/set-up-loading-screen) und `sv_downloadurl` für [FastDL](/tutorials/gameserver/garrys-mod/set-up-fastdl) |
| `// Steam Server List Settings` | Einstellungen für die Serverliste, darunter `sv_region "255"` und die auskommentierte Zeile `// sv_location "eu"`. Lass `sv_region` unverändert. |
| `// Server Limits` | Sandbox-Limits wie `sbox_maxprops`, außerdem `sbox_godmode` und `sbox_noclip` |
| `// Network Settings` | Netzwerk-Einstellungen wie `sv_minrate` und `sv_maxrate` |
| `// Execute Ban Files` | Lädt die Bannlisten `banned_ip.cfg` und `banned_user.cfg` |
| `// Add custom lines under here` | Platz für Deine eigenen Einstellungen |

> [!IMPORTANT]
> Lass die Abschnitte `// Network Settings` und `// Execute Ban Files` unverändert. Ohne die `exec`-Zeilen werden die Bannlisten Deines Servers nicht mehr geladen.

## server.cfg bearbeiten

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den **Datei-Browser** in der Verwaltung.

3. **server.cfg öffnen**\
   Öffne die Datei `server.cfg` unter:

   ```text
   /garrysmod/cfg/server.cfg
   ```

4. **Vorhandene Werte anpassen**\
   Steht eine Einstellung bereits in der Datei, z.B. `sbox_maxprops`, änderst Du direkt den Wert in dieser Zeile. So steht jede Einstellung nur einmal in der Datei.

5. **Neue Einstellungen hinzufügen**\
   Einstellungen, die noch nicht in der Datei stehen, trägst Du unterhalb der Zeile `// Add custom lines under here` ein – eine Einstellung pro Zeile.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > // Add custom lines under here
   > sbox_playershurtplayers 0
   > physgun_limited 1
   > sv_allowcslua 0
   > ```

   Die Länderflagge trägst Du hier nicht als neue Zeile ein. Wie Du sie festlegst, erfährst Du im Abschnitt „Länderflagge festlegen“ weiter unten.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Sandbox-Einstellungen

Die folgenden Einstellungen stammen aus dem Gamemode **Sandbox**. Sie wirken nur in Sandbox und in Gamemodes, die auf Sandbox aufbauen. Welchen Gamemode Dein Server nutzt, legst Du im Feld **Gamemode** fest – mehr dazu unter [Gamemode ändern](/tutorials/gameserver/garrys-mod/change-gamemode).

| Einstellung | Beschreibung | Unsere server.cfg | Standard des Gamemodes |
|-------------|-------------|-------------------|------------------------|
| `sbox_noclip` | Spieler dürfen Noclip nutzen (0 = aus, 1 = an) | `0` | `1` |
| `sbox_godmode` | Alle Spieler sind unverwundbar (0 = aus, 1 = an) | `0` | `0` |
| `sbox_playershurtplayers` | Spieler können sich gegenseitig Schaden zufügen, also PvP (0 = aus, 1 = an) | – | `1` |
| `physgun_limited` | Die Physgun kann bestimmte Map-Objekte nicht mehr aufheben, z.B. Türen, feste Map-Props und andere Map-Entities (0 = aus, 1 = an) | – | `0` |

> [!NOTE]
> In unserer `server.cfg` ist `sbox_noclip` auf `0` gesetzt, obwohl der Gamemode Sandbox Noclip standardmäßig erlaubt. Auf Deinem Server ist Noclip deshalb zunächst **deaktiviert**. Möchtest Du Noclip erlauben, ändere die Zeile auf `sbox_noclip 1`.

## Sandbox-Limits

Mit den `sbox_max*`-Einstellungen legst Du fest, wie viele Objekte einer Art **ein einzelner Spieler** gleichzeitig erstellen darf. Unsere `server.cfg` setzt teilweise andere Werte als der Gamemode:

| Einstellung | Begrenzt | Unsere server.cfg | Standard des Gamemodes |
|-------------|----------|-------------------|------------------------|
| `sbox_maxprops` | Props | `100` | `200` |
| `sbox_maxragdolls` | Ragdolls | `5` | `10` |
| `sbox_maxnpcs` | NPCs | `10` | `10` |
| `sbox_maxballoons` | Ballons | `10` | `100` |
| `sbox_maxeffects` | Effekte | `10` | `200` |
| `sbox_maxdynamite` | Dynamit | `10` | `10` |
| `sbox_maxlamps` | Lampen | `10` | `3` |
| `sbox_maxthrusters` | Thruster | `10` | `50` |
| `sbox_maxwheels` | Räder | `10` | `50` |
| `sbox_maxhoverballs` | Hoverballs | `10` | `50` |
| `sbox_maxvehicles` | Fahrzeuge | `20` | `4` |
| `sbox_maxbuttons` | Buttons | `10` | `50` |
| `sbox_maxsents` | Scripted Entities | `20` | `100` |
| `sbox_maxemitters` | Emitter | `5` | `20` |
| `sbox_maxcameras` | Kameras | – | `10` |
| `sbox_maxlights` | Lichter | – | `5` |
| `sbox_maxconstraints` | Constraints | – | `2000` |
| `sbox_maxropeconstraints` | Seil-Constraints | – | `1000` |

Einstellungen mit „–“ stehen nicht in unserer `server.cfg`. Für sie gilt der Standard des Gamemodes, bis Du sie unterhalb von `// Add custom lines under here` einträgst.

> [!NOTE]
> Die Sandbox-Einstellungen und Sandbox-Limits kannst Du auch direkt im Spiel über **Q-Menü > Utilities > Admin** ändern. Stehen die Werte in Deiner `server.cfg`, werden sie beim nächsten Mapwechsel wieder überschrieben. Dauerhafte Änderungen nimmst Du deshalb in der `server.cfg` vor.

## Weitere Server-Einstellungen

| Einstellung | Beschreibung | Beispiel |
|-------------|-------------|----------|
| `sv_alltalk` | Sprachchat: Bei `0` hören sich nur Spieler im selben Team, bei `1` hören sich alle, bei `2` hören sich alle abhängig von der Entfernung | `1` |
| `sv_allowcslua` | Erlaubt Spielern, eigenen clientseitigen Lua-Code auszuführen (0 = aus, 1 = an) | `0` |
| `sv_kickerrornum` | Trennt Spieler, die mehr als diese Anzahl clientseitiger Lua-Fehler haben. `0` deaktiviert die Funktion | `0` |
| `sv_location` | Länderflagge Deines Servers im Server-Browser | `"de"` |

> [!IMPORTANT]
> Lass `sv_allowcslua` auf `0`. Mit `1` können Spieler eigenen Lua-Code auf ihrem Rechner ausführen, was Cheats deutlich erleichtert. Trage `sv_allowcslua 0` am besten ausdrücklich in Deine `server.cfg` ein.

> [!NOTE]
> Das Verhalten von `sv_alltalk` stammt aus dem Basis-Gamemode. Gamemodes können den Sprachchat selbst regeln, sodass `sv_alltalk` dort anders oder gar nicht wirkt.

## Länderflagge festlegen

Mit `sv_location` zeigt der Server-Browser neben Deinem Server eine Länderflagge an.

1. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) oder über den **Datei-Browser** in der Verwaltung die Datei `/garrysmod/cfg/server.cfg`.

2. **Zeile aktivieren**\
   Suche im Abschnitt `// Steam Server List Settings` die Zeile `// sv_location "eu"`. Entferne die beiden Schrägstriche am Anfang und ersetze `eu` durch den Ländercode Deiner Wahl:

   ```text
   sv_location "de"
   ```

   Als Ländercode verwendest Du den zweistelligen Code nach ISO 3166-1 alpha-2 in Kleinbuchstaben, z.B. `de` für Deutschland, `at` für Österreich oder `ch` für die Schweiz. Für die Flagge der Europäischen Union verwendest Du `eu`.

3. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu.
