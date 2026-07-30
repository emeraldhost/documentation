---
description: Spieler auf einem Ground Branch Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Ground Branch Server

Spieler entfernst du auf einem Ground Branch Server über das **Adminmenü im Spiel**. Zusätzlich kannst du in den Konfigurationsdateien festlegen, wie lange Banns standardmäßig gelten, ab wann Teamkiller automatisch gebannt werden und ob Spieler selbst über einen Kick abstimmen dürfen.

:::: info Hinweis
Du benötigst Adminrechte mit der Berechtigung `kick` beziehungsweise `ban`. Wie du dir diese gibst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken oder bannen

1. <b>Als Admin beitreten</b><br>
   Tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md). Ohne Adminrechte stehen dir die folgenden Funktionen nicht zur Verfügung.

2. <b>Adminmenü öffnen</b><br>
   Drücke `F8`. Alternativ öffnest du das ESC-Menü und wählst dort die Admin-Schaltfläche oder gibst in der Konsole (`` ` ``) den Befehl `admin` ein.

3. <b>Spieler auswählen</b><br>
   Wähle in der Spielerliste den betreffenden Spieler aus.

4. <b>Aktion wählen</b><br>
   Wähle **Kick**, um den Spieler vom Server zu trennen, oder **Ban**, um ihn auszusperren. In beiden Fällen kannst du optional einen Grund angeben.

5. <b>Banndauer bestätigen</b><br>
   Beim Bannen fragt dich der Server nach der Dauer. Vorbelegt ist der Wert aus der `Ban.ini`, den du überschreiben kannst. Ein Bann kann befristet oder dauerhaft sein.

:::: info Hinweis
Ein Kick trennt den Spieler nur vom Server – er kann sofort wieder beitreten. Erst ein Bann sperrt ihn für die angegebene Dauer aus.
::::

## Standard-Banndauer festlegen

Wie lange ein Bann standardmäßig gilt, steuerst du über die `Ban.ini`.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Ban.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /GroundBranch/ServerConfig/Ban.ini
   ```

4. <b>Dauer eintragen</b><br>
   Passe den Wert im Abschnitt `[/Script/RBZooKeeper.ZKBan]` an. Die Angabe erfolgt in **Minuten**:

   ```ini
   [/Script/RBZooKeeper.ZKBan]
   DefaultBanDuration=720
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Umrechnung
| Wert | Entspricht |
|------|-----------|
| `60` | 1 Stunde |
| `720` | 12 Stunden (Standard) |
| `1440` | 1 Tag |
| `10080` | 7 Tage |
::::

## Teamkiller automatisch bannen

Ground Branch kann Spieler eigenständig bannen, die zu oft eigene Teammitglieder töten. Die Einstellungen dazu findest du in der `TeamKill.ini`:

```
/GroundBranch/ServerConfig/TeamKill.ini
```

```ini
[/Script/RBZooKeeper.ZKTeamKill]
MaxTeamKills=3
BanTime=60
TeamKillExpireTime=30
```

| Wert | Bedeutung |
|------|-----------|
| `MaxTeamKills` | Anzahl der Teamkills, ab der ein Spieler gebannt wird |
| `BanTime` | Dauer des automatischen Banns in Minuten |
| `TeamKillExpireTime` | Zeit in Minuten, nach der ein einzelner Teamkill wieder verfällt |

:::: info Hinweis
Mit den Standardwerten wird ein Spieler also gebannt, wenn er innerhalb von 30 Minuten dreimal ein eigenes Teammitglied tötet. Einen so ausgesprochenen Bann hebst du wie jeden anderen Bann über den Befehl `unban` wieder auf.
::::

## Abstimmungen der Spieler konfigurieren

Über die `Vote.ini` legst du fest, worüber Spieler auf deinem Server abstimmen dürfen – unter anderem über einen Kick.

```
/GroundBranch/ServerConfig/Vote.ini
```

```ini
[/Script/RBZooKeeper.ZKVote]
VotingCommands=kick
VotingCommands=changemap
VotingCommands=nextmap
VotingCommands=missionsettings
VotingCommands=restartround
```

| Wert | Bedeutung |
|------|-----------|
| `VotingCommands` | Eine Zeile pro erlaubter Abstimmung. Verfügbar sind nur `kick`, `changemap`, `nextmap`, `missionsettings` und `restartround` |
| `VoteDuration` | Dauer einer laufenden Abstimmung in Sekunden |
| `MinPlayers` | Mindestanzahl an Spielern, damit abgestimmt werden darf |
| `VoteSucceededTimeout` | Wartezeit in Sekunden nach einer erfolgreichen Abstimmung |
| `VoteFailedTimeout` | Wartezeit in Sekunden nach einer gescheiterten Abstimmung |
| `MapVoteTimeout` | Wartezeit in Sekunden zwischen Kartenabstimmungen |
| `bAllowVotingOffMapList` | Erlaubt Abstimmungen über Karten außerhalb der Kartenliste |
| `PermittedGameModes` | Spielmodi, in denen abgestimmt werden darf |

:::: warning Achtung
Möchtest du Vote-Kicks vollständig unterbinden, entferne die Zeile `VotingCommands=kick`. Andernfalls können Spieler sich ohne Adminrechte gegenseitig vom Server werfen.
::::

## Bann wieder aufheben

Ground Branch kennt den Adminbefehl `unban`. Damit entfernst du einen Spieler anhand seiner eindeutigen Spieler-ID (SteamID64) wieder von der Bannliste. Den Befehl nutzt du wie die übrigen Adminbefehle über das Adminmenü – siehe [Admin hinzufügen](admin-hinzufuegen.md).

:::: info Hinweis
Die genaue Konsolen-Schreibweise von `unban` ist offiziell nicht dokumentiert. Notiere dir die SteamID64 des gebannten Spielers, bevor du ihn sperrst – ohne sie lässt sich der Bann nicht gezielt aufheben.
::::

## Whitelist

Ground Branch kennt eine Whitelist – ist sie aktiv, kommen nur Admins und freigeschaltete Spieler auf den Server. Alle anderen erhalten beim Beitritt den Hinweis, dass der Server eine Whitelist verwendet.

:::: info Hinweis
Die Whitelist verwaltest du im Adminmenü über den Punkt **Whitelist**. Der Dateiname und das Dateiformat auf dem Server sind nicht offiziell dokumentiert – pflege sie deshalb im Spiel und nicht per SFTP.
::::

## Was Ground Branch nicht bietet

:::: info Kein RCON
Ground Branch bietet keine RCON-Schnittstelle. Kick und Bann laufen ausschließlich über das Adminmenü im Spiel.
::::

:::: danger Wichtig
Alle Dateien im Ordner `ServerConfig` werden nur beim Serverstart eingelesen. Stoppe deinen Server, bevor du sie bearbeitest, und starte ihn danach neu.
::::
