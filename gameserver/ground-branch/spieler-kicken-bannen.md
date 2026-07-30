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
   Wähle **Kick**, um den Spieler vom Server zu trennen, oder **Ban**, um ihn auszusperren.

5. <b>Banndauer bestätigen</b><br>
   Beim Bannen fragt dich der Server nach der Dauer. Vorbelegt ist der Wert aus der `Ban.ini`, den du überschreiben kannst.

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

:::: info Teamkill-Bann aufheben
Möchtest du einen automatisch gebannten Spieler wieder zulassen, stoppe den Server, entferne seine Einträge aus der `TeamKill.ini` und starte den Server wieder.
::::

## Abstimmungen der Spieler konfigurieren

Über die `Vote.ini` legst du fest, worüber Spieler auf deinem Server abstimmen dürfen – unter anderem über einen Kick.

```
/GroundBranch/ServerConfig/Vote.ini
```

```ini
[/Script/RBZooKeeper.ZKVote]
VotingCommands=kick
```

| Wert | Bedeutung |
|------|-----------|
| `VotingCommands` | Erlaubte Abstimmungen: `kick`, `changemap`, `nextmap`, `missionsettings`, `restartround` |
| `VoteDuration` | Dauer einer laufenden Abstimmung |
| `MinPlayers` | Mindestanzahl an Spielern, damit abgestimmt werden darf |
| `VoteSucceededTimeout` | Wartezeit nach einer erfolgreichen Abstimmung |
| `VoteFailedTimeout` | Wartezeit nach einer gescheiterten Abstimmung |
| `MapVoteTimeout` | Wartezeit zwischen Kartenabstimmungen |
| `bAllowVotingOffMapList` | Erlaubt Abstimmungen über Karten außerhalb der Kartenliste |
| `PermittedGameModes` | Spielmodi, in denen abgestimmt werden darf |

:::: warning Achtung
Möchtest du Vote-Kicks vollständig unterbinden, entferne `kick` aus `VotingCommands`. Andernfalls können Spieler sich ohne Adminrechte gegenseitig vom Server werfen.
::::

## Was Ground Branch nicht bietet

:::: warning Bann aufheben
Für einen regulären, im Adminmenü ausgesprochenen Bann ist kein Weg zum Entbannen dokumentiert. Setze die Banndauer deshalb bewusst und arbeite im Zweifel mit kürzeren Zeiträumen. Für automatische Teamkill-Banns funktioniert das oben beschriebene Vorgehen über die `TeamKill.ini`.
::::

:::: info Whitelist
Ground Branch kennt eine Whitelist – ist sie aktiv, kommen nur Admins und freigeschaltete Spieler auf den Server. Der Dateiname und das Format sind allerdings nicht offiziell dokumentiert. Wenn du deinen Server auf einen festen Kreis beschränken möchtest, ist ein Serverpasswort der verlässlichere Weg.
::::

:::: info Kein RCON
Ground Branch bietet keine RCON-Schnittstelle. Kick und Bann laufen ausschließlich über das Adminmenü im Spiel.
::::

:::: danger Wichtig
Alle Dateien im Ordner `ServerConfig` werden nur beim Serverstart eingelesen. Stoppe deinen Server, bevor du sie bearbeitest, und starte ihn danach neu.
::::
