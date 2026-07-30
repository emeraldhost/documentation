---
description: Spieler auf einem Black Mesa Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Black Mesa Server

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

Black Mesa nutzt die Standardbefehle der Source Engine:

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Server- und Spielerinformationen inklusive userid und SteamID anzeigen |
| `kick <Spielername>` | Spieler über den Spielernamen vom Server entfernen |
| `kickid <userid\|SteamID> [Grund]` | Spieler über die ID vom Server entfernen |
| `banid <Minuten> <SteamID> [kick]` | Spieler bannen (`0` = dauerhaft) |
| `addip <Minuten> <IP>` | IP-Adresse bannen |
| `removeid <SteamID>` | Bann einer SteamID aufheben |
| `removeip <IP>` | Bann einer IP-Adresse aufheben |
| `writeid` | SteamID-Banns dauerhaft speichern |
| `writeip` | IP-Banns dauerhaft speichern |
| `changelevel <Mapname>` | Map wechseln |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
| `exec <datei.cfg>` | Konfigurationsdatei ausführen |

### Spieler kicken

```
kick <Spielername>
```

Statt des Namens kannst du auch die userid oder die SteamID angeben:

```
kickid STEAM_0:1:12345678 Grund
```

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

### Spieler bannen

```
banid 60 STEAM_0:1:12345678 kick
```

Die Dauer steht in Minuten vor der SteamID, `0` bannt dauerhaft. Der Zusatz `kick` entfernt den Spieler sofort vom Server — ohne ihn wirkt der Bann erst beim nächsten Verbindungsversuch.

### Banns dauerhaft speichern

:::: danger Wichtig
Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/bms/cfg/banned_user.cfg` und `/bms/cfg/banned_ip.cfg` geschrieben.
::::

:::: info Hinweis
Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür in `/bms/cfg/server.cfg` folgende Zeilen ein:

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
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /bms/cfg/server.cfg
   ```

3. <b>Passwort setzen</b><br>
   Trage folgende Zeile ein und wähle ein sicheres Passwort:

   ```
   rcon_password "dein-passwort"
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
RCON läuft über denselben Port wie das Spiel — einen eigenen RCON-Port gibt es nicht. Den passenden Port findest du als **Game Port** in der Verwaltung deines Servers.
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
| `sm_map` | `<Map>` | `g` (changemap) |
| `sm_rcon` | `<Befehl>` | `m` (rcon) |

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
