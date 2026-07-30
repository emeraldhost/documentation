---
description: Spieler auf einem Operation Harsh Doorstop Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Operation Harsh Doorstop Server

Spieler entfernst du entweder direkt aus dem Spiel heraus über die Ingame-Konsole oder per RCON. Dauerhafte Banns landen in der Datei `Bans.cfg`, die du per SFTP bearbeiten kannst.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `~`, um die Ingame-Konsole zu öffnen.

2. <b>Spielerliste abrufen</b><br>
   Lass dir zuerst alle verbundenen Spieler mit Name, ID-Nummer und SteamID64 anzeigen:

   ```
   admin status
   ```

3. <b>Befehl ausführen</b><br>
   Führe den gewünschten Befehl mit vorangestelltem `admin` aus, zum Beispiel:

   ```
   admin kick Spielername Regelverstoß
   ```

:::: warning Achtung
Jeder Adminbefehl braucht in der Ingame-Konsole das Präfix `admin`. Über einen RCON-Client gibst du dieselben Befehle **ohne** dieses Präfix ein.
::::

## Spieler kicken

```
admin kick <Name> [Grund]
```

```
admin kickid <ID#> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Die ID-Nummer stammt aus der Ausgabe von `admin status`.

## Spieler bannen

```
admin ban <Name> [Grund] [Dauer]
```

```
admin banid <ID#> [Grund] [Dauer]
```

Die **Dauer** gibst du in **Minuten** an. Der Wert `0` beziehungsweise eine weggelassene Dauer bedeutet einen dauerhaften Bann.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `admin status` | Alle Spieler inklusive ID-Nummer und SteamID64 anzeigen |
| `admin kick <Name> [Grund]` | Spieler über seinen Namen vom Server trennen |
| `admin kickid <ID#> [Grund]` | Spieler über seine ID-Nummer vom Server trennen |
| `admin ban <Name> [Grund] [Dauer]` | Spieler über seinen Namen aussperren |
| `admin banid <ID#> [Grund] [Dauer]` | Spieler über seine ID-Nummer aussperren |

## Bann aufheben

Gebannte Spieler stehen in der Datei `Bans.cfg`. Ein Bann wird aufgehoben, indem du die entsprechende Zeile löschst.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Bans.cfg öffnen</b><br>
   Öffne folgende Datei:

   ```
   /HarshDoorstop/Saved/Config/LinuxServer/Bans.cfg
   ```

4. <b>Zeile löschen</b><br>
   Jede Zeile enthält eine SteamID64, gefolgt von einem Doppelpunkt und einer Zahl:

   ```
   76561198012345678:0
   ```

   Lösche die komplette Zeile des Spielers, den du entbannen möchtest.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Ohne Neustart entbannen
Du kannst dir den Neustart sparen: Lösche die Zeile in der `Bans.cfg` und sende anschließend per RCON den Befehl `RELOADSERVERCONFIG`. Der Server liest `Bans.cfg`, `Admins.cfg` und die übrigen Konfigurationsdateien dann direkt neu von der Festplatte ein.
::::

:::: info Hinweis
Auch die `Bans.cfg` wird nicht mitgeliefert. Sie entsteht, sobald der erste Bann ausgesprochen wird – du kannst sie aber auch selbst im Ordner `LinuxServer` anlegen und SteamID64s im Format `76561198012345678:0` eintragen.
::::

## Befehle per RCON senden

Statt in der Ingame-Konsole kannst du dieselben Befehle auch über einen externen RCON-Client senden – dann ohne das Präfix `admin`, also zum Beispiel `status`, `kick`, `kickid`, `ban` und `banid`.

:::: danger Wichtig
RCON-Port und RCON-Passwort deines Servers findest du in der **Verwaltung**. Gib beides niemals an Spieler weiter – wer den Zugang hat, kann deinen Server vollständig fernsteuern.
::::
