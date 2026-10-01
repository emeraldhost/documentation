---
slug: "gamemode-aendern"
language: "de"
title: "So änderst Du den Gamemode Deines Garry's Mod Servers"
description: "Gamemode auf einem Garry's Mod Server ändern"
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
short_title: "Gamemode ändern"
sort: 6
related: ["gameserver/garrys-mod/change-map", "gameserver/garrys-mod/install-darkrp", "gameserver/garrys-mod/set-up-star-wars-rp-server", "gameserver/garrys-mod/set-up-ttt"]
---
Der Gamemode legt fest, was auf Deinem Server gespielt wird – zum Beispiel Sandbox, Trouble in Terrorist Town (TTT) oder DarkRP. Du wählst ihn in der Verwaltung über das Feld **Gamemode** aus. Eingetragen wird dort immer der **Ordnername** des Gamemodes, nicht sein Anzeigename.

> [!WARNING]
> Erstelle vor einem Wechsel des Gamemodes ein [Backup](/tutorials/gameserver/garrys-mod/create-backup). So kannst Du jederzeit zu Deinem bisherigen Stand zurückkehren.

## Mitgelieferte Gamemodes

Auf einem frisch installierten Server sind nur diese Gamemodes vorhanden:

| Gamemode | Ordnername | Beschreibung |
| -------- | ---------- | ------------ |
| Sandbox | `sandbox` | Standard-Gamemode Deines Servers |
| Trouble in Terrorist Town | `terrortown` | TTT – Innocents gegen Traitors |

> [!NOTE]
> Im Ordner `/garrysmod/gamemodes/` findest Du zusätzlich den Ordner `base`. Das ist nur die Grundlage, auf der andere Gamemodes aufbauen, und kann nicht allein gespielt werden. Alle anderen Gamemodes wie DarkRP, Prop Hunt oder Murder musst Du selbst installieren.

## Den richtigen Ordnernamen finden

Im Feld **Gamemode** trägst Du den Ordnernamen ein – nicht den Titel aus dem Workshop. Aus „Trouble in Terrorist Town“ wird zum Beispiel `terrortown`, aus „Prop Hunt: Enhanced“ wird `prop_hunt`.

- **Per SFTP hochgeladen:** Der Ordnername ist der Name des Ordners unter `/garrysmod/gamemodes/`, in dem die gleichnamige `.txt`-Datei liegt.
- **Aus dem Workshop:** Der Ordnername steht meist in der Beschreibung des Workshop-Eintrags. Findest Du ihn dort nicht, frag beim Autor des Gamemodes nach.
- **Von GitHub:** Der Ordnername entspricht dem Namen der `.txt`-Datei des Gamemodes, zum Beispiel `darkrp.txt` für `darkrp`. Heißt der entpackte Ordner anders (z.B. `DarkRP-master`), benenne ihn entsprechend um, also in `darkrp`.

Einige bekannte Gamemodes im Überblick:

| Gamemode | Ordnername | Workshop-ID | Passende Maps |
| -------- | ---------- | ----------- | ------------- |
| Sandbox | `sandbox` | mitgeliefert | `gm_…` |
| Trouble in Terrorist Town | `terrortown` | mitgeliefert | `ttt_…` |
| DarkRP | `darkrp` | `248302805` | `rp_…` |
| Prop Hunt: Enhanced | `prop_hunt` | `1758906555` | `ph_…` |
| Murder | `murder` | `187073946` | `md_…`, `mu_…`, `murder_…` |

> [!IMPORTANT]
> Der Ordnername, der Name der `.txt`-Datei und der Eintrag im Feld **Gamemode** müssen identisch und kleingeschrieben sein – zum Beispiel `darkrp`, nicht `DarkRP`.

## Gamemode über den Workshop installieren

Am einfachsten installierst Du einen Gamemode über die Workshop Collection Deines Servers.

1. **Gamemode zur Collection hinzufügen**\
   Füge den Gamemode im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) zu der Collection hinzu, die Dein Server lädt. Wie Du eine Collection erstellst und im Feld **Workshop ID** einträgst, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

2. **Ordnernamen herausfinden**\
   Finde den Ordnernamen des Gamemodes heraus, wie unter [Den richtigen Ordnernamen finden](#den-richtigen-ordnernamen-finden) beschrieben.

3. **Gamemode eintragen**\
   Trage den Ordnernamen anschließend wie unter [Gamemode in den Einstellungen setzen](#gamemode-in-den-einstellungen-setzen) beschrieben ein.

> [!TIP]
> Ist in der `.txt`-Datei des Gamemodes eine Workshop-ID hinterlegt – wie bei DarkRP, Prop Hunt: Enhanced oder Murder –, laden Spieler den Gamemode beim Betreten Deines Servers automatisch herunter. Dasselbe gilt für die aktuelle Map, wenn sie in der Collection Deines Servers enthalten ist.

## Gamemode per SFTP hochladen

Gamemodes, die nicht aus dem Workshop stammen (zum Beispiel von GitHub), lädst Du selbst hoch.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Gamemode hochladen**\
   Lade den entpackten Gamemode-Ordner in folgendes Verzeichnis hoch:

   ```text
   /garrysmod/gamemodes/
   ```

4. **Ordnerstruktur prüfen**\
   Direkt im Gamemode-Ordner müssen eine `.txt`-Datei mit demselben Namen wie der Ordner und der Unterordner `gamemode/` liegen. Für einen Gamemode mit dem Ordnernamen `beispielmode` sieht das so aus:

   ```text
   /garrysmod/gamemodes/beispielmode/beispielmode.txt
   /garrysmod/gamemodes/beispielmode/gamemode/
   ```

   > [!WARNING]
   > Achte vor allem auf diese typischen Fehler, sonst findet der Server den Gamemode nicht:
   >
   > - **Ein Ordner zu viel:** Beim Entpacken entsteht oft eine zusätzliche Ebene, zum Beispiel `/garrysmod/gamemodes/darkrp/darkrp/`. Verschiebe in diesem Fall den Inhalt des inneren Ordners eine Ebene nach oben, sodass `darkrp.txt` direkt unter `/garrysmod/gamemodes/darkrp/` liegt.
   > - **Falscher Ordnername:** Ein als ZIP von GitHub heruntergeladener Ordner heißt oft `<name>-master`, zum Beispiel `DarkRP-master`. Benenne ihn wie die `.txt`-Datei, also in `darkrp`.
   > - **Eigener Ordner `gamemodes/`:** Enthält der Download selbst einen Ordner `gamemodes/`, lädst Du nur den Gamemode-Ordner darin hoch.

5. **Gamemode eintragen**\
   Trage den Ordnernamen wie unter [Gamemode in den Einstellungen setzen](#gamemode-in-den-einstellungen-setzen) beschrieben ein.

## Gamemode in den Einstellungen setzen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Gamemode eintragen**\
   Trage im Feld **Gamemode** den Ordnernamen des Gamemodes ein, zum Beispiel `terrortown`. Der Server startet damit mit dem Parameter:

   ```text
   +gamemode terrortown
   ```

4. **Passende Map eintragen**\
   Trage im Feld **Map** eine Map ein, die zum Gamemode passt. Die Standard-Map `gm_flatgrass` ist für Sandbox gedacht. Wie Du eine andere Map einträgst, erfährst Du unter [Map ändern](/tutorials/gameserver/garrys-mod/change-map).

5. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Welche Maps zu einem Gamemode passen, erkennst Du meist am Präfix im Mapnamen, zum Beispiel `ttt_` für TTT, `rp_` für DarkRP oder `ph_` für Prop Hunt. Der Gamemode startet zwar auch auf einer unpassenden Map, dort fehlen aber zum Beispiel die Spawn- und Waffenpunkte, die TTT benötigt.

> [!TIP]
> Du kannst den Gamemode auch im laufenden Betrieb wechseln. Gib dazu in der Konsole `gamemode terrortown` ein und lade danach mit `changelevel ttt_beispielmap` eine neue Map. Der Wechsel wird erst mit dem Laden der Map aktiv. Nach einem Neustart startet Dein Server wieder mit dem Gamemode aus den **Einstellungen**.

## Star Wars RP und DarkRP

Einen offiziellen Gamemode „Star Wars RP“ gibt es nicht. Ein Star Wars RP Server ist ein DarkRP Server mit zusätzlichen Star-Wars-Inhalten wie Jobs, Waffen, Modellen und Maps. Komplette Star-Wars-RP-Gamemodes gibt es meist nur als kostenpflichtige Angebote von Drittanbietern. Du stellst also nicht einfach von `sandbox` auf Star Wars RP um, sondern installierst zuerst DarkRP.

- Wie Du DarkRP installierst, erfährst Du unter [DarkRP installieren](/tutorials/gameserver/garrys-mod/install-darkrp).
- Wie Du daraus einen Star Wars RP Server machst, erfährst Du unter [Star Wars RP Server einrichten](/tutorials/gameserver/garrys-mod/set-up-star-wars-rp-server).

## Gamemodes mit Inhalten aus anderen Spielen

Einige Gamemodes setzen Inhalte aus Counter-Strike: Source voraus, zum Beispiel Murder. Seit dem Update vom Juli 2025 enthält Garry's Mod bereits den Großteil der Inhalte aus Counter-Strike: Source und Half-Life 2 Episodic. Für die meisten Gamemodes musst Du deshalb nichts weiter tun.

Ausgenommen sind Maps, Sprachausgabe und Musik. Trage deshalb eine Map ein, die zu Deinem Gamemode passt, zum Beispiel aus dem Workshop, wie unter [Map ändern](/tutorials/gameserver/garrys-mod/change-map) beschrieben. Wie Du Inhalte aus anderen Spielen zusätzlich einbindest, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods#fremdspiel-inhalte-einbinden).
