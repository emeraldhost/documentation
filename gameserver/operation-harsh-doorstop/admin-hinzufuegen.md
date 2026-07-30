---
description: Admin auf einem Operation Harsh Doorstop Server hinzufügen
---

# So fügst du einen Admin auf deinem Operation Harsh Doorstop Server hinzu

Admins werden über die Datei `Admins.cfg` festgelegt. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: info Hinweis
Die Datei `Admins.cfg` wird **nicht** mitgeliefert. Existiert sie noch nicht, legst du sie einfach selbst an.
::::

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Admin-Liste wird beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Admins.cfg öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie in diesem Ordner an:

   ```
   /HarshDoorstop/Saved/Config/LinuxServer/Admins.cfg
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage pro Zeile genau eine SteamID64 ein – ohne Namen, ohne Kommentare und ohne weitere Zeichen:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Der Ordner `LinuxServer` wird erst angelegt, nachdem der Server einmal vollständig gestartet ist. Findest du ihn nicht, starte den Server einmal und verbinde dich anschließend erneut per SFTP.
::::

## Adminbefehle im Spiel nutzen

Als eingetragener Admin steuerst du den Server direkt aus dem Spiel heraus.

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md).

2. <b>Konsole öffnen</b><br>
   Drücke die Taste `~`, um die Ingame-Konsole zu öffnen.

3. <b>Befehl mit Präfix eingeben</b><br>
   Jeder Adminbefehl beginnt im Spiel mit `admin`, zum Beispiel:

   ```
   admin status
   ```

   ```
   admin servertravel <Kartenname>
   ```

:::: info Hinweis
Alle RCON-Befehle funktionieren auch in der Ingame-Konsole, solange du das Präfix `admin` voranstellst. Ohne das Präfix wird der Befehl nicht ausgeführt.
::::

## Admins im laufenden Betrieb verwalten

Über einen RCON-Client vergibst du Adminrechte auch im laufenden Betrieb. Diese Befehle wirken sofort, ohne dass du den Server stoppen musst:

| Befehl | Beschreibung |
|--------|-------------|
| `admin add <Name>` | Fügt einen Spieler über seinen Namen als Admin hinzu |
| `admin addid <ID#>` | Fügt einen Spieler über seine ID-Nummer aus `status` als Admin hinzu |
| `admin remove <Name>` | Entzieht einem Spieler die Adminrechte |
| `admin removeid <ID#>` | Entzieht die Adminrechte über die ID-Nummer |

:::: tip Tipp
Die ID-Nummer und die SteamID64 aller verbundenen Spieler liefert dir der Befehl `status`.
::::

:::: warning Achtung
Trage dauerhafte Admins immer zusätzlich in die `Admins.cfg` ein. Nur so bleiben die Rechte über Serverneustarts hinweg erhalten.
::::

## Konfiguration neu laden

Hast du die `Admins.cfg` bei laufendem Server bearbeitet, musst du den Server nicht zwingend neu starten. Der folgende RCON-Befehl liest die Konfigurationsdateien neu von der Festplatte ein:

```
RELOADSERVERCONFIG
```

Er aktualisiert unter anderem `Admins.cfg`, `Bans.cfg` und `MapCycle.cfg`.

:::: info Eigener Dateiname
Standardmäßig heißt die Admin-Datei `Admins.cfg`. Über den Startparameter `-AdminList=DateiName.cfg` lässt sich ein anderer Dateiname festlegen. In der Regel brauchst du das nicht – belasse es beim Standard.
::::

:::: tip Tipp
Wie du als Admin Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
