# IOSoccer

## Was ist IOSoccer?

IOSoccer ist ein kostenloses Mehrspieler-Fußballspiel auf Basis der Source Engine. Statt eine komplette Mannschaft zu befehligen, steuerst du genau einen Feldspieler aus der Verfolgerperspektive — Laufwege, Anspielstationen und Abwehrverhalten entstehen dadurch aus dem echten Zusammenspiel der Mitspieler auf dem Server. Genau deshalb ist IOSoccer ein reines Serverspiel: Ohne Mitspieler auf einem gemeinsamen Server gibt es kein Match.

Gespielt wird nach echten Fußballregeln, die sich über die Servereinstellungen einzeln zuschalten lassen — unter anderem Abseits (`mp_offside`), Elfmeterschießen (`mp_penalties`), Verlängerung (`mp_extratime`) und Golden Goal (`mp_goldengoal`). Die Mannschaftsgröße legst du über `mp_maxplayers` fest; der Wert gilt **pro Seite** und reicht bis zu elf Spielern. Fehlende Torhüter übernehmen auf Wunsch Bots (`mp_botkeepers`), die Spielzeit stellst du über `mp_timelimit_match` ein, und mit `sv_restart`, `sv_endmatch` oder den Timeout-Befehlen steuerst du ein laufendes Spiel direkt aus der Serverkonsole.

Für den Ligabetrieb lassen sich Trikots und Mannschaftsnamen über `mp_teamkits` und `mp_teamnames` frei setzen. Zusätzlich kann dein Server die Ergebnisse eines Matches automatisch an einen Webserver melden (`sv_webserver_matchdata_*`) — die Grundlage für Ligatabellen und Statistikseiten der Community. Einen klassischen Spielstand gibt es dagegen nicht: Auf dem Server bleiben nur deine Konfigurationen, Bannlisten, Karten und Matchstatistiken erhalten.

Serverseitig ist IOSoccer ein klassisches Source-Spiel. Die Konfiguration liegt im Spielordner `iosoccer` unter `cfg/server.cfg` und `cfg/autoexec.cfg`, die Kartenrotation direkt daneben in der `mapcycle.txt`, Karten sind `.bsp`-Dateien, und Erweiterungen laufen über Metamod:Source und SourceMod. Eigene Karten lieferst du über einen FastDL-Downloadserver an deine Spieler aus; die bekannten Kosmetik-Mods der Community — Bälle, Tornetze, Handschuhe oder Schuhe — sind dagegen rein clientseitig und werden von jedem Spieler selbst installiert. Ein eingebautes Adminsystem hat das Spiel nicht: Administriert wird ausschließlich über die Serverkonsole beziehungsweise RCON, Adminrechte direkt im Spiel gibt es nur über SourceMod.

IOSoccer ist besonders bei Spielern beliebt, die Fußball lieber als Teamsport mit festen Positionen erleben statt als Einzelspieler-Simulation — Ligen, Clans und Trainingsserver bilden den Kern der Community. Das Spiel ist auf dem PC über Steam kostenlos verfügbar.
