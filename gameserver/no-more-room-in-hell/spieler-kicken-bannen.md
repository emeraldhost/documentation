---
description: Spieler auf einem No More Room in Hell Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem No More Room in Hell Server

Spieler entfernst du entweder über die **Serverkonsole** in der Verwaltung oder — falls SourceMod installiert ist — direkt im Spiel über die **SourceMod-Befehle**. Zusätzlich bringt No More Room in Hell ein eigenes **VoteKick- und VoteBan-System** mit, mit dem Spieler auch ohne Admin auf dem Server reagieren können.

## Spieler anzeigen

1. <b>Serverkonsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Spielerliste abrufen</b><br>
   Gib folgenden Befehl ein:

   ```
   status
   ```

   Die Ausgabe zeigt dir für jeden verbundenen Spieler die **userid** und die **SteamID**. Diese Werte brauchst du für die folgenden Befehle.

## Befehle über die Serverkonsole

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Server- und Spielerinformationen inklusive userid und SteamID anzeigen |
| `kick <Spielername>` | Spieler sofort vom Server entfernen |
| `banid <Minuten> <SteamID> [kick]` | Spieler bannen (`0` = dauerhaft), `kick` entfernt ihn zusätzlich sofort |
| `writeid` | SteamID-Banns dauerhaft speichern |
| `writeip` | IP-Banns dauerhaft speichern |
| `changelevel <Mapname>` | Map wechseln, ohne Spieler zu trennen |
| `map <Mapname>` | Map erzwingen — dabei werden alle Spieler vom Server geworfen |

### Spieler kicken

```
kick <Spielername>
```

:::: tip Beispiel
```
kick dark_st3alth
```
::::

Ein gekickter Spieler wird sofort vom Server entfernt, kann aber gleich wieder beitreten.

### Spieler bannen

```
banid 60 STEAM_0:1:12345678 kick
```

Die Dauer steht in Minuten vor der SteamID, `0` bannt dauerhaft. Ohne den Zusatz `kick` bleibt der Spieler zunächst auf dem Server und der Bann greift erst beim nächsten Verbindungsversuch.

### Banns dauerhaft speichern

:::: danger Wichtig
Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/nmrih/cfg/banned_user.cfg` und `/nmrih/cfg/banned_ip.cfg` geschrieben.
::::

:::: info Hinweis
Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür in `/nmrih/cfg/server.cfg` folgende Zeilen ein:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

:::: warning Achtung
Die Source Engine kennt zusätzlich die Befehle `kickid`, `addip`, `removeid` und `removeip`. Sie sind für No More Room in Hell **nicht offiziell dokumentiert** und funktionieren möglicherweise nicht wie erwartet. Zum Aufheben eines Banns nutzt du am besten `sm_unban` aus SourceMod oder du entfernst die betreffende Zeile direkt aus `/nmrih/cfg/banned_user.cfg` und startest den Server neu.
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

## VoteKick und VoteBan

No More Room in Hell bringt ein eigenes Abstimmungssystem mit. Damit können Spieler störende oder teamtötende Mitspieler entfernen, ohne dass ein Admin anwesend sein muss.

### So stimmen Spieler ab

1. <b>Spielerliste aufrufen</b><br>
   Ein Spieler gibt im Chat folgenden Befehl ein:

   ```
   !vklist
   ```

   Daraufhin erscheint eine nummerierte Liste aller Spieler auf dem Server.

2. <b>Abstimmung starten</b><br>
   Mit der Nummer aus der Liste wird die Abstimmung gestartet:

   ```
   !vk 3
   ```

   `!vk` startet einen Votekick, `!vb` einen Voteban.

3. <b>Zustimmen</b><br>
   Die übrigen Spieler stimmen im Chat mit folgendem Befehl zu:

   ```
   !yes
   ```

### Abstimmung konfigurieren

Die Einstellungen trägst du per [SFTP](../sftp-verbindung-herstellen.md) in folgende Datei ein:

```
/nmrih/cfg/server.cfg
```

| Einstellung | Standard | Bedeutung |
|-------------|----------|-----------|
| `sv_votekick_timer` | `10` | Dauer einer Abstimmung in Sekunden |
| `sv_votekick_required_pct` | `0.5` | Anteil der Spieler, der einem Votekick zustimmen muss |
| `sv_voteban_required_pct` | `0.65` | Anteil der Spieler, der einem Voteban zustimmen muss |
| `sv_voteban_banlength` | `30` | Dauer eines Votebans in Minuten |

Beispiel:

```
sv_votekick_timer 10
sv_votekick_required_pct 0.5
sv_voteban_required_pct 0.65
sv_voteban_banlength 30
```

:::: info Hinweis
Über das Voteban-System sind **keine dauerhaften Banns** möglich — `sv_voteban_banlength` muss deshalb immer größer als `0` sein. Dauerhafte Banns setzt du über die Serverkonsole oder über SourceMod.
::::

:::: tip Tipp
Nach Änderungen an der `server.cfg` musst du deinen Server neu starten, damit die Werte übernommen werden.
::::
