---
description: Spieler auf einem Quake Live Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Quake Live Server

Spieler entfernst du über die **Konsole** deines Servers in der Verwaltung oder direkt im Spiel, wenn du dort Admin- beziehungsweise Moderatorenrechte besitzt.

:::: info Hinweis
Wie du dir und anderen Spielern Rechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Client-ID herausfinden

Alle folgenden Befehle erwarten die **Client-ID** — die Nummer, die der Server einem verbundenen Spieler zuweist.

1. <b>Auf deinen Server verbinden</b><br>
   Verbinde dich im Spiel auf deinen Server und öffne dort die Konsole.

2. <b>Spielerliste abrufen</b><br>
   Gib folgenden Befehl ein:

   ```
   /players
   ```

   Die Ausgabe zeigt dir alle verbundenen Spieler mit ihrer Client-ID und ihrer SteamID64.

:::: info Hinweis
In der Konsole deines Servers gibst du die Befehle ohne führendes `/` ein. Im Spiel schreibst du dieselben Befehle mit einem führenden `/`, also zum Beispiel `/tempban 3`.
::::

## Spieler entfernen

Quake Live kennt keinen eigenen `kick`-Befehl. Um einen Spieler zu entfernen, nutzt du stattdessen `tempban`:

```
tempban 3
```

Der Spieler wird vom Server entfernt und kann bis zum Ende der laufenden Map nicht wieder beitreten. Danach ist der Zugang wieder frei.

:::: warning Achtung
Häufig kursierende Schreibweisen wie `kick <Spielername>` funktionieren auf einem Quake Live Server nicht — ein `kick`-Befehl ist dort weder in der Serverkonsole noch im Spiel vorhanden. Ein Kick ist nur als Abstimmung der Spieler vorgesehen (`callvote kick` beziehungsweise `callvote clientkick`). Als Admin entfernst du Spieler über `tempban` beziehungsweise `ban`.
::::

## Spieler bannen

```
ban 3
```

Der Spieler wird sofort entfernt und dauerhaft ausgesperrt. Der Bann wird in der Datei `/baseq3/access.txt` gespeichert, und zwar in derselben Form wie die Adminrechte:

```
76561198012345678|ban
```

## Bann aufheben

Ist der Spieler noch verbunden oder verbindet er sich gerade neu, hebst du den Bann direkt über die Konsole auf:

```
unban 3
```

Für einen Spieler, der nicht auf dem Server ist, entfernst du den Eintrag aus der Datei:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>access.txt bearbeiten</b><br>
   Öffne folgende Datei und lösche die Zeile mit der betroffenen SteamID64 und dem Zusatz `|ban`:

   ```
   /baseq3/access.txt
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Bearbeite die `access.txt` nur bei gestopptem Server. Der Server schreibt die Liste vor jedem Map-Ladevorgang neu — Änderungen im laufenden Betrieb gehen dabei verloren.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/players` (im Spiel) | Verbundene Spieler mit Client-ID und SteamID64 anzeigen |
| `tempban <Client-ID>` | Spieler bis zum Ende der Map vom Server entfernen |
| `ban <Client-ID>` | Spieler dauerhaft aussperren |
| `unban <Client-ID>` | Bann aufheben |
| `mute <Client-ID>` | Spieler stummschalten |
| `unmute <Client-ID>` | Stummschaltung aufheben |
| `put <Client-ID> <red\|blue\|spectator>` | Spieler in ein Team oder zu den Zuschauern verschieben |
| `lock [team]` / `unlock [team]` | Teams sperren beziehungsweise wieder freigeben |
| `pause` / `unpause` | Match anhalten und fortsetzen |
| `forceshuffle` | Teams neu mischen |
| `opsay <Text>` | Nachricht als Serverbetreiber an alle Spieler senden |
| `map <Map> <Factory>` | Map und Spielmodus wechseln |
| `quit` | Server beenden |

## Kick-Abstimmungen einschränken

Spieler können sich per `callvote kick` gegenseitig zur Abstimmung stellen. Das kannst du unterbinden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>server.cfg öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /baseq3/server.cfg
   ```

3. <b>Abstimmung deaktivieren</b><br>
   Für `g_voteFlags` addierst du die Werte der Abstimmungen, die du sperren möchtest. Kick-Abstimmungen haben den Wert `16`:

   ```
   set g_voteFlags "16"
   ```

   Möchtest du Abstimmungen komplett abschalten, setzt du stattdessen:

   ```
   set g_allowVote "0"
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Werte für g_voteFlags
| Wert | Gesperrte Abstimmung |
|------|----------------------|
| `1` | map |
| `2` | map_restart |
| `4` | nextmap |
| `8` | gametype (Factory-Angabe bei `callvote map`) |
| `16` | kick |
| `32` | timelimit |
| `64` | fraglimit |
| `128` | shuffle |
| `256` | teamsize |
| `512` | cointoss/random |
| `1024` | loadouts |
| `2048` | Abstimmung am Spielende |
| `4096` | ammo (global) |
| `8192` | timers (Item) |

Um zum Beispiel Kick- und Map-Abstimmungen zu sperren, rechnest du `16 + 1 = 17`.
::::
