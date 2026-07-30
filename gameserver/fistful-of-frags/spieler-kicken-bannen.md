---
description: Spieler auf einem Fistful of Frags Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Fistful of Frags Server

Spieler entfernst du entweder über die **Serverkonsole** in der Verwaltung oder — falls SourceMod installiert ist — direkt im Spiel über die **SourceMod-Befehle**. Zusätzlich bringt Fistful of Frags ein eingebautes **Votekick-System** mit, mit dem deine Mitspieler auch ohne anwesenden Admin auf Störer reagieren können.

## Spieler anzeigen

1. <b>Serverkonsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Spielerliste abrufen</b><br>
   Gib folgenden Befehl ein:

   ```
   status
   ```

   Die Ausgabe zeigt dir für jeden verbundenen Spieler die **userid** und die **SteamID**. Diese Werte brauchst du für die folgenden Befehle. Mit `users` erhältst du zusätzlich eine kompakte Übersicht der verbundenen Spieler.

## Befehle über die Serverkonsole

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Server- und Spielerinformationen inklusive userid und SteamID anzeigen |
| `users` | Übersicht der verbundenen Spieler anzeigen |
| `kick <Spielername>` | Spieler anhand seines Namens vom Server entfernen |
| `kickid <userid \| SteamID> [Nachricht]` | Spieler anhand seiner userid oder SteamID entfernen, mit optionaler Nachricht |
| `kickall <Nachricht>` | Alle verbundenen Spieler mit einer Nachricht entfernen |
| `banid <Minuten> <userid \| SteamID> [kick]` | Spieler bannen (`0` = dauerhaft), `kick` entfernt ihn zusätzlich sofort |
| `banip <Minuten> <IP>` | IP-Adresse bannen (`0` = dauerhaft) |
| `listid` / `listip` | Gebannte SteamIDs beziehungsweise IP-Adressen anzeigen |
| `removeid <SteamID>` / `removeip <IP>` | Bann wieder aufheben |
| `writeid` / `writeip` | Banns dauerhaft in die Bann-Dateien schreiben |
| `changelevel <Mapname>` | Map wechseln, ohne Spieler zu trennen |
| `map <Mapname>` | Map erzwingen — dabei werden alle Spieler vom Server geworfen |

### Spieler kicken

```
kick <Spielername>
```

:::: tip Beispiel
```
kickid 12 Regelverstoß
```

`12` ist die userid aus der Ausgabe von `status`. Der Weg über die userid ist zuverlässiger als über den Namen, weil Spielernamen Sonder- und Leerzeichen enthalten können.
::::

Ein gekickter Spieler wird sofort vom Server entfernt, kann aber gleich wieder beitreten.

### Spieler bannen

```
banid 60 STEAM_0:1:12345678 kick
```

Die Dauer steht in Minuten vor der SteamID, `0` bannt dauerhaft. Ohne den Zusatz `kick` bleibt der Spieler zunächst auf dem Server und der Bann greift erst beim nächsten Verbindungsversuch.

Eine IP-Adresse bannst du entsprechend mit:

```
banip 60 123.45.67.89
```

### Banns dauerhaft speichern

:::: danger Wichtig
Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/fof/cfg/banned_user.cfg` und `/fof/cfg/banned_ip.cfg` geschrieben. Das gilt auch für `removeid` und `removeip` — ohne anschließendes `writeid`/`writeip` ist der Bann nach dem nächsten Neustart wieder da.
::::

:::: info Hinweis
Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür am Ende der `/fof/cfg/server.cfg` folgende Zeilen ein:

```
exec banned_ip.cfg
exec banned_user.cfg
writeip
writeid
```
::::

## Befehle über SourceMod

Ist SourceMod installiert, kannst du Spieler direkt aus dem Spiel heraus verwalten. Wie du SourceMod einrichtest und dir Adminrechte gibst, steht unter [Mods hinzufügen](mods-hinzufuegen.md) und [Admin hinzufügen](admin-hinzufuegen.md).

| Befehl | Syntax | Benötigtes Flag |
|--------|--------|-----------------|
| `sm_kick` | `<#userid\|Name> [Grund]` | `c` (kick) |
| `sm_ban` | `<#userid\|Name> <Minuten\|0> [Grund]` | `d` (ban) |
| `sm_banip` | `<IP\|#userid\|Name> <Dauer> [Grund]` | `d` (ban) |
| `sm_addban` | `<Dauer> <SteamID> [Grund]` | `m` (rcon) |
| `sm_unban` | `<SteamID\|IP>` | `e` (unban) |
| `sm_who` | `[#userid\|Name]` | `b` (generic) |
| `sm_map` | `<Map>` | `g` (changemap) |

:::: info Hinweis
Bei `sm_ban` und `sm_banip` bedeutet die Dauer `0` einen dauerhaften Bann. Mit `sm_addban` kannst du auch Spieler bannen, die gerade nicht auf dem Server sind.
::::

### Beispiele

```
sm_kick "Spielername" Regelverstoß
```

```
sm_ban #12 60 Regelverstoß
```

```
sm_addban 0 STEAM_0:1:12345678 Regelverstoß
```

### Bann aufheben

```
sm_unban STEAM_0:1:12345678
```

```
sm_unban 123.45.67.89
```

## Votekick

Fistful of Frags bringt ein eigenes Votekick-System mit. Damit können deine Mitspieler Störer per Abstimmung vom Server entfernen, ohne dass ein Admin anwesend sein muss.

### So stimmen Spieler ab

1. <b>Votekick-Menü öffnen</b><br>
   Ein Spieler drückt im Spiel die Taste für den Votekick — standardmäßig `F3`. Alternativ funktioniert der Befehl `votekick` in der Spielkonsole.

2. <b>Spieler auswählen</b><br>
   Im Menü wählt er den Spieler aus, der gekickt werden soll.

3. <b>Zustimmen</b><br>
   Die übrigen Spieler öffnen dasselbe Menü und stimmen zu. Erst wenn genug Stimmen zusammenkommen, wird der Spieler entfernt.

### Votekick konfigurieren

Die Einstellung trägst du per [SFTP](../sftp-verbindung-herstellen.md) in folgende Datei ein:

```
/fof/cfg/server.cfg
```

| Einstellung | Standard | Bedeutung |
|-------------|----------|-----------|
| `fof_sv_votekickallowed` | `1` | Votekick auf dem Server erlauben (`0` = deaktiviert) |

:::: info Hinweis
Ein Voteban gibt es in Fistful of Frags nicht — über die Abstimmung wird ein Spieler nur gekickt und kann anschließend wieder beitreten. Dauerhafte Banns setzt du über die Serverkonsole oder über SourceMod.
::::

### Weitere Abstimmungen

Zusätzlich unterstützt Fistful of Frags das Abstimmungssystem der Source Engine, über das Spieler zum Beispiel einen Kartenwechsel vorschlagen können:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_allow_votes` | Abstimmungen auf dem Server grundsätzlich erlauben |
| `sv_vote_allow_spectators` | Zuschauer dürfen mit abstimmen |
| `sv_vote_quorum_ratio` | Anteil der Spieler, der zustimmen muss |
| `sv_vote_creation_timer` | Wartezeit, bis derselbe Spieler eine neue Abstimmung starten darf |
| `sv_vote_failure_timer` | Wartezeit nach einer gescheiterten Abstimmung |

Welche Abstimmungen möglich sind, zeigt der Befehl `listissues` in der Spielkonsole; gestartet werden sie mit `callvote`.

:::: tip Tipp
Nach Änderungen an der `server.cfg` musst du deinen Server neu starten, damit die Werte übernommen werden.
::::
