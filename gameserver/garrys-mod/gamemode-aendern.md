---
description: Gamemode auf einem Garry's Mod Server ändern
---

# So änderst du den Gamemode deines Garry's Mod Servers

Der Gamemode legt fest, was auf deinem Server gespielt wird – zum Beispiel Sandbox, Trouble in Terrorist Town (TTT) oder DarkRP. Du wählst ihn in der Verwaltung über das Feld **Gamemode** aus. Eingetragen wird dort immer der **Ordnername** des Gamemodes, nicht sein Anzeigename.

:::: warning Achtung
Erstelle vor einem Wechsel des Gamemodes ein [Backup](backup-erstellen.md). So kannst du jederzeit zu deinem bisherigen Stand zurückkehren.
::::

## Mitgelieferte Gamemodes

Auf einem frisch installierten Server sind nur diese Gamemodes vorhanden:

| Gamemode | Ordnername | Beschreibung |
| -------- | ---------- | ------------ |
| Sandbox | `sandbox` | Standard-Gamemode deines Servers |
| Trouble in Terrorist Town | `terrortown` | TTT – Innocents gegen Traitors |

:::: info Hinweis
Im Ordner `/garrysmod/gamemodes/` findest du zusätzlich den Ordner `base`. Das ist nur die Grundlage, auf der andere Gamemodes aufbauen, und kann nicht allein gespielt werden. Alle anderen Gamemodes wie DarkRP, Prop Hunt oder Murder musst du selbst installieren.
::::

## Den richtigen Ordnernamen finden

Im Feld **Gamemode** trägst du den Ordnernamen ein – nicht den Titel aus dem Workshop. Aus „Trouble in Terrorist Town“ wird zum Beispiel `terrortown`, aus „Prop Hunt: Enhanced“ wird `prop_hunt`.

- **Per SFTP hochgeladen:** Der Ordnername ist der Name des Ordners unter `/garrysmod/gamemodes/`, in dem die gleichnamige `.txt`-Datei liegt.
- **Aus dem Workshop:** Der Ordnername steht meist in der Beschreibung des Workshop-Eintrags. Findest du ihn dort nicht, frag beim Autor des Gamemodes nach.
- **Von GitHub:** Der Ordnername entspricht dem Namen der `.txt`-Datei des Gamemodes, zum Beispiel `darkrp.txt` für `darkrp`. Heißt der entpackte Ordner anders (z.B. `DarkRP-master`), benenne ihn entsprechend um, also in `darkrp`.

Einige bekannte Gamemodes im Überblick:

| Gamemode | Ordnername | Workshop-ID | Passende Maps |
| -------- | ---------- | ----------- | ------------- |
| Sandbox | `sandbox` | mitgeliefert | `gm_…` |
| Trouble in Terrorist Town | `terrortown` | mitgeliefert | `ttt_…` |
| DarkRP | `darkrp` | `248302805` | `rp_…` |
| Prop Hunt: Enhanced | `prop_hunt` | `1758906555` | `ph_…` |
| Murder | `murder` | `187073946` | `md_…`, `mu_…`, `murder_…` |

:::: danger Wichtig
Der Ordnername, der Name der `.txt`-Datei und der Eintrag im Feld **Gamemode** müssen identisch und kleingeschrieben sein – zum Beispiel `darkrp`, nicht `DarkRP`.
::::

## Gamemode über den Workshop installieren

Am einfachsten installierst du einen Gamemode über die Workshop Collection deines Servers.

1. <b>Gamemode zur Collection hinzufügen</b><br>
   Füge den Gamemode im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) zu der Collection hinzu, die dein Server lädt. Wie du eine Collection erstellst und im Feld **Workshop ID** einträgst, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).

2. <b>Ordnernamen herausfinden</b><br>
   Finde den Ordnernamen des Gamemodes heraus, wie unter [Den richtigen Ordnernamen finden](#den-richtigen-ordnernamen-finden) beschrieben.

3. <b>Gamemode eintragen</b><br>
   Trage den Ordnernamen anschließend wie unter [Gamemode in den Einstellungen setzen](#gamemode-in-den-einstellungen-setzen) beschrieben ein.

:::: tip Tipp
Ist in der `.txt`-Datei des Gamemodes eine Workshop-ID hinterlegt – wie bei DarkRP, Prop Hunt: Enhanced oder Murder –, laden Spieler den Gamemode beim Betreten deines Servers automatisch herunter. Dasselbe gilt für die aktuelle Map, wenn sie in der Collection deines Servers enthalten ist.
::::

## Gamemode per SFTP hochladen

Gamemodes, die nicht aus dem Workshop stammen (zum Beispiel von GitHub), lädst du selbst hoch.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Gamemode hochladen</b><br>
   Lade den entpackten Gamemode-Ordner in folgendes Verzeichnis hoch:

   ```
   /garrysmod/gamemodes/
   ```

4. <b>Ordnerstruktur prüfen</b><br>
   Direkt im Gamemode-Ordner müssen eine `.txt`-Datei mit demselben Namen wie der Ordner und der Unterordner `gamemode/` liegen. Für einen Gamemode mit dem Ordnernamen `beispielmode` sieht das so aus:

   ```
   /garrysmod/gamemodes/beispielmode/beispielmode.txt
   /garrysmod/gamemodes/beispielmode/gamemode/
   ```

   :::: warning Achtung
   Achte vor allem auf diese typischen Fehler, sonst findet der Server den Gamemode nicht:

   - **Ein Ordner zu viel:** Beim Entpacken entsteht oft eine zusätzliche Ebene, zum Beispiel `/garrysmod/gamemodes/darkrp/darkrp/`. Verschiebe in diesem Fall den Inhalt des inneren Ordners eine Ebene nach oben, sodass `darkrp.txt` direkt unter `/garrysmod/gamemodes/darkrp/` liegt.
   - **Falscher Ordnername:** Ein als ZIP von GitHub heruntergeladener Ordner heißt oft `<name>-master`, zum Beispiel `DarkRP-master`. Benenne ihn wie die `.txt`-Datei, also in `darkrp`.
   - **Eigener Ordner `gamemodes/`:** Enthält der Download selbst einen Ordner `gamemodes/`, lädst du nur den Gamemode-Ordner darin hoch.
   ::::

5. <b>Gamemode eintragen</b><br>
   Trage den Ordnernamen wie unter [Gamemode in den Einstellungen setzen](#gamemode-in-den-einstellungen-setzen) beschrieben ein.

## Gamemode in den Einstellungen setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Gamemode eintragen</b><br>
   Trage im Feld **Gamemode** den Ordnernamen des Gamemodes ein, zum Beispiel `terrortown`. Der Server startet damit mit dem Parameter:

   ```
   +gamemode terrortown
   ```

4. <b>Passende Map eintragen</b><br>
   Trage im Feld **Map** eine Map ein, die zum Gamemode passt. Die Standard-Map `gm_flatgrass` ist für Sandbox gedacht. Wie du eine andere Map einträgst, erfährst du unter [Map ändern](map-aendern.md).

5. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Welche Maps zu einem Gamemode passen, erkennst du meist am Präfix im Mapnamen, zum Beispiel `ttt_` für TTT, `rp_` für DarkRP oder `ph_` für Prop Hunt. Der Gamemode startet zwar auch auf einer unpassenden Map, dort fehlen aber zum Beispiel die Spawn- und Waffenpunkte, die TTT benötigt.
::::

:::: tip Tipp
Du kannst den Gamemode auch im laufenden Betrieb wechseln. Gib dazu in der Konsole `gamemode terrortown` ein und lade danach mit `changelevel ttt_beispielmap` eine neue Map. Der Wechsel wird erst mit dem Laden der Map aktiv. Nach einem Neustart startet dein Server wieder mit dem Gamemode aus den **Einstellungen**.
::::

## Star Wars RP und DarkRP

Einen offiziellen Gamemode „Star Wars RP“ gibt es nicht. Ein Star Wars RP Server ist ein DarkRP Server mit zusätzlichen Star-Wars-Inhalten wie Jobs, Waffen, Modellen und Maps. Komplette Star-Wars-RP-Gamemodes gibt es meist nur als kostenpflichtige Angebote von Drittanbietern. Du stellst also nicht einfach von `sandbox` auf Star Wars RP um, sondern installierst zuerst DarkRP.

- Wie du DarkRP installierst, erfährst du unter [DarkRP installieren](darkrp-installieren.md).
- Wie du daraus einen Star Wars RP Server machst, erfährst du unter [Star Wars RP Server einrichten](star-wars-rp-server-einrichten.md).

## Gamemodes mit Inhalten aus anderen Spielen

Einige Gamemodes setzen Inhalte aus Counter-Strike: Source voraus, zum Beispiel Murder. Seit dem Update vom Juli 2025 enthält Garry's Mod bereits den Großteil der Inhalte aus Counter-Strike: Source und Half-Life 2 Episodic. Für die meisten Gamemodes musst du deshalb nichts weiter tun.

Ausgenommen sind Maps, Sprachausgabe und Musik. Trage deshalb eine Map ein, die zu deinem Gamemode passt, zum Beispiel aus dem Workshop, wie unter [Map ändern](map-aendern.md) beschrieben. Wie du Inhalte aus anderen Spielen zusätzlich einbindest, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md#fremdspiel-inhalte-einbinden).
