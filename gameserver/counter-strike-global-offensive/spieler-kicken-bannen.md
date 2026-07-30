---
description: Spieler auf einem Counter-Strike Global Offensive Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Counter-Strike Global Offensive Server

Spieler entfernst du entweder über die **Serverkonsole** in der Verwaltung oder — falls SourceMod installiert ist — direkt im Spiel über die **SourceMod-Befehle**.

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
| `kick <Spielername>` | Spieler über den Spielernamen vom Server entfernen |
| `kickid <userid> <Nachricht>` | Spieler über die userid vom Server entfernen |
| `banid <Minuten> <userid>` | Spieler bannen (`0` = dauerhaft) |
| `addip <Minuten> <IP>` | IP-Adresse bannen (`0` = dauerhaft) |
| `removeid <SteamID>` | Bann einer SteamID aufheben |
| `removeip <IP>` | Bann einer IP-Adresse aufheben |
| `writeid` | Dauerhafte SteamID-Banns in `banned_user.cfg` speichern |
| `writeip` | Dauerhafte IP-Banns in `banned_ip.cfg` speichern |
| `changelevel <Mapname>` | Map wechseln |

### Spieler kicken

```
kick <Spielername>
```

Statt des Namens kannst du auch die userid aus der `status`-Ausgabe angeben und eine Nachricht mitgeben:

```
kickid 12 Regelverstoß
```

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

:::: warning Achtung
`kickid` und `banid` erwarten die **userid** aus der `status`-Ausgabe, nicht die SteamID. Die userid vergibt der Server pro Verbindung neu — rufe deshalb kurz vor dem Befehl noch einmal `status` auf.
::::

### Spieler bannen

```
banid 60 12
```

Die Dauer steht in Minuten vor der userid, `0` bannt dauerhaft. Eine IP-Adresse sperrst du stattdessen mit `addip`:

```
addip 0 123.45.67.89
```

### Banns dauerhaft speichern

:::: danger Wichtig
Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/csgo/cfg/banned_user.cfg` und `/csgo/cfg/banned_ip.cfg` geschrieben.
::::

:::: info Hinweis
In die Dateien geschrieben werden ausschließlich dauerhafte Banns, also Einträge mit der Dauer `0`. Zeitlich begrenzte Banns bleiben nur bis zum nächsten Neustart bestehen.
::::

:::: info Hinweis
Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür in `/csgo/cfg/server.cfg` folgende Zeilen ein:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

## RCON aktivieren

Über RCON führst du dieselben Befehle auch von außerhalb der Verwaltung aus.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>server.cfg öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /csgo/cfg/server.cfg
   ```

3. <b>Passwort setzen</b><br>
   Trage folgende Zeile ein und wähle ein sicheres Passwort:

   ```
   rcon_password "dein-passwort"
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
RCON läuft über denselben Port wie das Spiel — einen eigenen RCON-Port gibt es nicht. Befehle setzt du anschließend über `rcon <Befehl>` ab.
::::

:::: tip Tipp
Möchtest du RCON wieder abschalten, setzt du das Passwort auf einen leeren Wert:

```
rcon_password ""
```
::::

:::: danger Wichtig
Wer dein RCON-Passwort kennt, hat die volle Kontrolle über deinen Server. Gib es nicht weiter und nutze ein eigenes, langes Passwort.
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
| `sm_slay` | `<Ziel>` | `f` (slay) |
| `sm_map` | `<Map>` | `g` (changemap) |
| `sm_rcon` | `<Befehl>` | `m` (rcon) |

:::: info Hinweis
Bei `sm_ban` und `sm_banip` bedeutet die Dauer `0` einen dauerhaften Bann. Mit `sm_addban` kannst du auch Spieler bannen, die gerade nicht auf dem Server sind. Alle Befehle funktionieren sowohl in der Spielkonsole als auch im Chat — dort schreibst du statt `sm_kick` einfach `!kick` oder `/kick`.
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

## Bann aufheben

Über die Serverkonsole:

```
removeid STEAM_0:1:12345678
```

```
removeip 123.45.67.89
```

Führe anschließend erneut `writeid` beziehungsweise `writeip` aus, damit die Änderung dauerhaft gespeichert wird.

Mit SourceMod:

```
sm_unban STEAM_0:1:12345678
```

```
sm_unban 123.45.67.89
```

:::: info Hinweis
Alternativ stoppst du deinen Server und löschst die betreffende Zeile per [SFTP](../sftp-verbindung-herstellen.md) aus `/csgo/cfg/banned_user.cfg` beziehungsweise `/csgo/cfg/banned_ip.cfg`.
::::
