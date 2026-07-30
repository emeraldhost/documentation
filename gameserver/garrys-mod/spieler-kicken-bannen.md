---
description: Spieler auf einem Garry's Mod Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Garry's Mod Server

Du kannst Spieler über die Serverkonsole in der Verwaltung kicken und bannen. Garry's Mod nutzt dafür die Standardbefehle der Source Engine.

## Spieler anzeigen

1. <b>Serverkonsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Spielerliste abrufen</b><br>
   Gib folgenden Befehl ein:

   ```
   status
   ```

   Die Ausgabe zeigt dir für jeden verbundenen Spieler die **userid**, die SteamID im Format `STEAM_0:x:xxxxxxx` und die IP-Adresse. Diese Werte brauchst du für die folgenden Befehle.

## Spieler kicken

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

```
kick <Name>
```

```
kickid <userid> Grund
```

Statt der `userid` kannst du auch die SteamID angeben:

```
kickid STEAM_0:1:12345678 Grund
```

## Spieler bannen

```
banid <Minuten> <userid> kick
```

Auch hier kannst du statt der `userid` die SteamID verwenden:

```
banid 0 STEAM_0:1:12345678 kick
```

:::: info Hinweis
Setze die Minuten auf `0`, um den Spieler dauerhaft zu bannen. Der Zusatz `kick` sorgt dafür, dass der Spieler sofort vom Server entfernt wird — ohne ihn wirkt der Ban erst beim nächsten Verbindungsversuch.
::::

## IP-Adresse bannen

```
banip <Minuten> <IP-Adresse>
```

:::: info Hinweis
Der Befehl `addip <Minuten> <IP-Adresse>` bewirkt genau dasselbe wie `banip` und ist nur ein zweiter Name für dieselbe Funktion.
::::

## Bans dauerhaft speichern

:::: danger Wichtig
Bans liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung ab.
::::

1. <b>SteamID-Bans speichern</b><br>
   Gib in der Serverkonsole ein:

   ```
   writeid
   ```

   Die Bans werden in die Datei `/garrysmod/cfg/banned_user.cfg` geschrieben.

2. <b>IP-Bans speichern</b><br>
   Gib in der Serverkonsole ein:

   ```
   writeip
   ```

   Die Bans werden in die Datei `/garrysmod/cfg/banned_ip.cfg` geschrieben.

:::: info Hinweis
Damit die gespeicherten Bans nach einem Neustart wieder gelten, müssen beide Dateien beim Serverstart ausgeführt werden. In der mitgelieferten `/garrysmod/cfg/server.cfg` stehen dafür bereits diese beiden Zeilen — lösche sie nicht:

```
exec banned_ip.cfg
exec banned_user.cfg
```
::::

:::: warning Achtung
Bearbeite die Bannlisten möglichst nicht von Hand, während der Server läuft — `writeid` und `writeip` überschreiben die Dateien vollständig mit dem aktuellen Stand aus dem Arbeitsspeicher.
::::

## Spieler entbannen

```
removeid STEAM_0:1:12345678
```

```
removeip <IP-Adresse>
```

Führe anschließend erneut `writeid` bzw. `writeip` aus, damit die Änderung dauerhaft gespeichert wird.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Alle verbundenen Spieler mit userid, SteamID und IP anzeigen |
| `kick <Name>` | Spieler über den Spielernamen kicken |
| `kickid <userid\|SteamID> [Grund]` | Spieler über die ID kicken |
| `banid <Minuten> <userid\|SteamID> [kick]` | Spieler bannen (`0` = dauerhaft) |
| `banip <Minuten> <IP>` | IP-Adresse bannen |
| `addip <Minuten> <IP>` | Identisch zu `banip` |
| `removeid <SteamID>` | Ban einer SteamID aufheben |
| `removeip <IP>` | Ban einer IP-Adresse aufheben |
| `writeid` | SteamID-Bans dauerhaft speichern |
| `writeip` | IP-Bans dauerhaft speichern |
