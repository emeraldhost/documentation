---
description: Trouble in Terrorist Town (TTT) auf einem Garry's Mod Server einrichten
---

# So richtest du TTT auf deinem Garry's Mod Server ein

**Trouble in Terrorist Town** (TTT) ist bereits in Garry's Mod enthalten. Du musst den Gamemode also nicht installieren, sondern nur auswählen, eine passende TTT-Map einstellen und die Runden nach deinen Wünschen konfigurieren.

## TTT-Map zur Collection hinzufügen

TTT-Maps erkennst du am Präfix `ttt_` im Namen. Die Standard-Map deines Servers `gm_flatgrass` ist eine Sandbox-Map und nicht für TTT gebaut – ihr fehlen die Spawn- und Waffenpunkte, die TTT benötigt. Du brauchst deshalb mindestens eine TTT-Map aus dem Steam Workshop.

1. <b>Map im Workshop suchen</b><br>
   Suche im [Steam Workshop für Garry's Mod](https://steamcommunity.com/app/4000/workshop/) nach `ttt_`, um TTT-Maps zu finden. Eine sehr verbreitete Map ist zum Beispiel [ttt_minecraft_b5](https://steamcommunity.com/sharedfiles/filedetails/?id=159321088) mit der ID `159321088`.

2. <b>Map zur Collection hinzufügen</b><br>
   Füge die Map der Workshop Collection deines Servers hinzu. Wie du eine Collection erstellst und im Feld **Workshop ID** einträgst, erfährst du in der Anleitung [Mods hinzufügen](mods-hinzufuegen.md).

   :::: info Hinweis
   Liegt die aktuelle Map in der Collection deines Servers, laden Spieler sie beim Beitreten automatisch herunter. Eine Workshop-Map, die nicht in der Collection ist, ist weder auf dem Server vorhanden noch wird sie an die Spieler verteilt.
   ::::

3. <b>Map-Namen herausfinden</b><br>
   Für die Einstellungen brauchst du den Namen der `.bsp`-Datei der Map, nicht den Titel im Workshop. Oft steht er im Titel oder in der Beschreibung der Map. Die Map mit der ID `159321088` heißt zum Beispiel `ttt_minecraft_b5`.

## Gamemode und Map einstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Gamemode eintragen</b><br>
   Trage im Feld **Gamemode** folgenden Wert ein:

   ```
   terrortown
   ```

   :::: warning Achtung
   Der Gamemode heißt im Spiel „Trouble in Terrorist Town“, sein Ordnername ist aber `terrortown`. Im Feld **Gamemode** funktioniert nur der Ordnername.
   ::::

4. <b>Map eintragen</b><br>
   Trage im Feld **Map** den Namen deiner TTT-Map ein, zum Beispiel:

   ```
   ttt_minecraft_b5
   ```

5. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Dein Server startet jetzt mit TTT auf der eingestellten Map.

:::: info Hinweis
Eine Runde startet erst, wenn genügend Spieler auf dem Server sind. Standardmäßig sind das **2** Spieler. Den Wert änderst du mit `ttt_minimum_players`.
::::

Wie du den Gamemode allgemein wechselst, erfährst du in der Anleitung [Gamemode ändern](gamemode-aendern.md). Mehr zum Wechseln der Map findest du unter [Map ändern](map-aendern.md).

## TTT konfigurieren

Die Einstellungen von TTT setzt du über ConVars in der `server.cfg`.

1. <b>Datei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne folgende Datei:

   ```
   /garrysmod/cfg/server.cfg
   ```

2. <b>Einstellungen eintragen</b><br>
   Trage deine TTT-Einstellungen unterhalb der Zeile `// Add custom lines under here` ein – eine Einstellung pro Zeile. Die verfügbaren Einstellungen findest du in den Tabellen unten.

   :::: tip Beispiel
   ```
   // Add custom lines under here
   ttt_round_limit 8
   ttt_time_limit_minutes 90
   ttt_preptime_seconds 20
   ttt_minimum_players 4
   ttt_detective_min_players 6
   ```
   ::::

3. <b>Server neu starten</b><br>
   Speichere die Datei und starte deinen Server neu.

:::: info Hinweis
Einstellungen, die du nicht einträgst, behalten ihren Standardwert aus den Tabellen. Die `ttt_`-Einstellungen wirken nur, solange der Gamemode `terrortown` aktiv ist.
::::

### Runden und Map-Wechsel

| Einstellung | Beschreibung | Standard |
| ----------- | ------------ | -------- |
| `ttt_preptime_seconds` | Dauer der Vorbereitungsphase in Sekunden, bevor die Rollen verteilt werden | `30` |
| `ttt_firstpreptime` | Dauer der Vorbereitungsphase nur für die erste Runde nach dem Laden einer Map | `60` |
| `ttt_posttime_seconds` | Zeit in Sekunden nach dem Ende einer Runde, bis die nächste Vorbereitungsphase beginnt | `30` |
| `ttt_haste` | Haste-Modus: Die Rundenzeit startet kurz und verlängert sich mit jedem Tod (`1` = an, `0` = aus) | `1` |
| `ttt_haste_starting_minutes` | Anfängliche Rundenzeit in Minuten im Haste-Modus | `5` |
| `ttt_haste_minutes_per_death` | Minuten, um die sich die Rundenzeit im Haste-Modus pro Tod verlängert | `0.5` |
| `ttt_roundtime_minutes` | Rundenzeit in Minuten, wenn der Haste-Modus aus ist | `10` |
| `ttt_round_limit` | Maximale Anzahl an Runden, bis die Map gewechselt wird | `6` |
| `ttt_time_limit_minutes` | Maximale Zeit in Minuten, bis die Map gewechselt wird | `75` |
| `ttt_minimum_players` | Anzahl an Spielern, die auf dem Server sein müssen, damit eine Runde beginnt | `2` |

:::: warning Achtung
Der Haste-Modus ist standardmäßig aktiv. Solange `ttt_haste` auf `1` steht, hat `ttt_roundtime_minutes` keine Wirkung. Möchtest du eine feste Rundenzeit, setze `ttt_haste 0`.
::::

### Traitor und Detectives

| Einstellung | Beschreibung | Standard |
| ----------- | ------------ | -------- |
| `ttt_traitor_pct` | Anteil der Spieler, die Traitor werden (`0.25` = 25 %) | `0.25` |
| `ttt_traitor_max` | Maximale Anzahl an Traitors | `32` |
| `ttt_detective_pct` | Anteil der Spieler, die Detective werden (`0.13` = 13 %) | `0.13` |
| `ttt_detective_max` | Maximale Anzahl an Detectives | `32` |
| `ttt_detective_min_players` | Mindestanzahl an Spielern, ab der es Detectives gibt | `8` |
| `ttt_detective_karma_min` | Mindest-Karma, das ein Spieler haben muss, um Detective zu werden | `600` |

:::: tip Beispiel
Die Anzahl wird abgerundet, es gibt aber immer mindestens einen Traitor. Bei 12 Spielern und den Standardwerten sind das 3 Traitors (12 × 0,25) und 1 Detective (12 × 0,13 = 1,56). Bei weniger als 8 Spielern gibt es keine Detectives.
::::

### Karma

Das Karma-System bestraft Spieler, die Mitglieder ihres eigenen Teams verletzen oder töten. Liegt das Karma eines Spielers unter 1000, richtet er weniger Schaden an.

| Einstellung | Beschreibung | Standard |
| ----------- | ------------ | -------- |
| `ttt_karma` | Karma-System aktivieren (`1` = an, `0` = aus) | `1` |
| `ttt_karma_strict` | Der Schaden sinkt schneller, je niedriger das Karma ist | `1` |
| `ttt_karma_starting` | Karma, mit dem Spieler starten | `1000` |
| `ttt_karma_max` | Höchstes erreichbares Karma | `1000` |
| `ttt_karma_persist` | Karma dauerhaft speichern, sodass es auch nach einem Map-Wechsel oder Server-Neustart erhalten bleibt | `0` |
| `ttt_karma_low_autokick` | Spieler mit zu niedrigem Karma am Rundenende automatisch kicken | `1` |
| `ttt_karma_low_amount` | Karma-Grenze, ab der Spieler gekickt werden | `450` |
| `ttt_karma_low_ban` | Gekickte Spieler zusätzlich bannen | `1` |
| `ttt_karma_low_ban_minutes` | Dauer dieses Banns in Minuten (`0` = dauerhaft) | `60` |

:::: warning Achtung
Mit den Standardwerten werden Spieler, deren Karma am Rundenende bei 450 oder darunter liegt, automatisch für 60 Minuten gebannt. Möchtest du sie nur kicken, setze `ttt_karma_low_ban 0`. Wie du einen Bann wieder aufhebst, erfährst du unter [Spieler kicken und bannen](spieler-kicken-bannen.md).
::::

## So wechselt TTT die Map

TTT wechselt die Map selbstständig. Am Ende jeder Runde prüft der Gamemode, ob das Rundenlimit (`ttt_round_limit`) oder das Zeitlimit (`ttt_time_limit_minutes`) erreicht ist. Ist eines davon erreicht, lädt der Server 15 Sekunden später die nächste Map. Das Zeitlimit wird dabei nur am Ende einer Runde geprüft, eine laufende Runde wird also nicht abgebrochen.

Welche Map als Nächstes geladen wird, bestimmt die Map-Rotation des Servers. Eine eingebaute Map-Abstimmung hat TTT nicht. Möchtest du selbst festlegen, welche Maps zur Auswahl stehen, und deine Spieler über die nächste Map abstimmen lassen, nutzt du ein Addon wie [MapVote](#map-abstimmung-mit-mapvote-einrichten).

:::: info Hinweis
Nach einem Neustart startet dein Server immer wieder mit der Map aus dem Feld **Map** in den **Einstellungen**.
::::

## Map-Abstimmung mit MapVote einrichten

Das Addon [MapVote](https://steamcommunity.com/sharedfiles/filedetails/?id=151583504) ersetzt den automatischen Map-Wechsel von TTT durch eine Abstimmung. Ist das Runden- oder Zeitlimit erreicht, wählen die Spieler die nächste Map aus den TTT-Maps auf deinem Server. Die aktuelle Map und kürzlich gespielte Maps stehen dabei standardmäßig nicht zur Wahl. Du musst dafür keine Dateien des Gamemodes bearbeiten.

1. <b>MapVote hinzufügen</b><br>
   Füge MapVote mit der ID `151583504` deiner Workshop Collection hinzu.

2. <b>Weitere Maps hinzufügen</b><br>
   Zur Abstimmung stehen nur Maps, die auf deinem Server vorhanden sind. Füge deshalb alle TTT-Maps, die zur Auswahl stehen sollen, ebenfalls deiner Collection hinzu. Da die aktuelle und die zuletzt gespielten Maps ausgeschlossen sind, solltest du mehrere TTT-Maps hinzufügen, damit genügend Maps zur Wahl stehen.

3. <b>Server neu starten</b><br>
   Starte deinen Server neu. Beim ersten Start legt MapVote seine Konfigurationsdatei an.

4. <b>Konfiguration anpassen (optional)</b><br>
   Stoppe deinen Server, bevor du die Datei bearbeitest, und starte ihn danach wieder. Die Einstellungen von MapVote findest du per [SFTP](../sftp-verbindung-herstellen.md) in folgender Datei:

   ```
   /garrysmod/data/mapvote/config.txt
   ```

   Die Datei enthält die Einstellungen aus der Tabelle unten, zum Beispiel:

   ```json
   {"MapLimit":24,"TimeLimit":28,"AllowCurrentMap":false,"EnableCooldown":true,"MapsBeforeRevote":3,"RTVPlayerCount":3,"MapPrefixes":["ttt_"],"AutoGamemode":false}
   ```

| Einstellung | Beschreibung |
| ----------- | ------------ |
| `RTVPlayerCount` | Mindestanzahl an Spielern, damit „Rock the Vote“ funktioniert |
| `MapLimit` | Anzahl der Maps, die in der Abstimmung angezeigt werden |
| `TimeLimit` | Dauer der Abstimmung in Sekunden |
| `AllowCurrentMap` | Aktuelle Map in der Abstimmung erlauben (`true` / `false`) |
| `MapPrefixes` | Präfixe der Maps, die in der Abstimmung erscheinen |
| `EnableCooldown` | Gerade gespielte Maps eine Zeit lang aus der Abstimmung nehmen (`true` / `false`) |
| `MapsBeforeRevote` | Anzahl an Maps, die gespielt werden müssen, bevor eine Map wieder zur Wahl steht |
| `AutoGamemode` | Zum Gamemode wechseln, der zur gewählten Map passt (`true` / `false`) |

:::: tip Tipp
Mit `rtv`, `!rtv` oder `/rtv` im Chat können Spieler vorzeitig eine Map-Abstimmung anfordern („Rock the Vote“). Bei TTT findet die Abstimmung dann erst am Ende der laufenden Runde statt.
::::
