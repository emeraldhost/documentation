---
description: Admin auf einem Ground Branch Server hinzufügen
---

# So fügst du einen Admin auf deinem Ground Branch Server hinzu

Admins werden auf einem Ground Branch Server über die Datei `Admin.ini` verwaltet. Am schnellsten geht es aber über das **Admin-Setup-Passwort**: Damit machst du dich direkt im Spiel zum SuperAdmin, ohne vorher eine SteamID heraussuchen zu müssen.

:::: info Hinweis
Alle Konfigurationsdateien liegen unter `/GroundBranch/ServerConfig/`. Sie werden erst beim **ersten Serverstart** erzeugt. Starte deinen Server also einmal, bevor du die Dateien suchst.
::::

## Weg 1: Über das Admin-Setup-Passwort

Dieser Weg ist der schnellste und funktioniert komplett im Spiel.

1. <b>Server starten</b><br>
   Starte deinen Server einmal über die Verwaltung, damit die Konfigurationsdateien angelegt werden.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Passwort auslesen</b><br>
   Öffne folgende Datei und notiere dir das darin enthaltene Passwort:

   ```
   /GroundBranch/ServerConfig/AdminSetupPassword.txt
   ```

4. <b>Server beitreten</b><br>
   Starte Ground Branch und tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md).

5. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `` ` `` (Akzenttaste, links neben der `1`), um die Spielkonsole zu öffnen.

6. <b>Befehl ausführen</b><br>
   Gib folgenden Befehl ein und ersetze `<Passwort>` durch den Wert aus der Datei:

   ```
   admin setup <Passwort>
   ```

   Du bist damit sofort **SuperAdmin** auf diesem Server.

:::: warning Achtung
Das Setup-Passwort verfällt, sobald es einmal verwendet wurde. Es dient ausschließlich dazu, den ersten Admin einzurichten – alle weiteren Admins verwaltest du danach über das Adminmenü oder die `Admin.ini`.
::::

## Weg 2: Admin.ini bearbeiten

Alternativ trägst du Admins direkt in die Konfigurationsdatei ein. Dafür benötigst du die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Datei wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Admin.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /GroundBranch/ServerConfig/Admin.ini
   ```

4. <b>Admin eintragen</b><br>
   Ergänze im Abschnitt `[/Script/RBZooKeeper.ZKAdmin]` pro Admin eine Zeile:

   ```ini
   [/Script/RBZooKeeper.ZKAdmin]
   Admins=(Name="JoeBlow",UniqueId="76561198012345678",ContactInfo="",Group="SuperAdmin")
   ```

   | Feld | Bedeutung |
   |------|-----------|
   | `Name` | Frei wählbarer Anzeigename, dient nur der Übersicht |
   | `UniqueId` | Die SteamID64 des Spielers (17-stellig) |
   | `ContactInfo` | Optionales Notizfeld, darf leer bleiben |
   | `Group` | Die Admingruppe, deren Rechte der Spieler erhält |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Die SteamID64 wird ohne Zusätze eingetragen. Der in älteren Anleitungen genannte Suffix `:0` ist nicht mehr nötig.
::::

## Admingruppen

Welche Befehle eine Gruppe nutzen darf, legst du ebenfalls in der `Admin.ini` fest. Jede Gruppe bekommt eine eigene `AdminGroups=`-Zeile, die **oberhalb** der Admins steht:

```ini
AdminGroups=(Name="SuperAdmin",Commands=("all"))
AdminGroups=(Name="Moderator",Commands=("kick","ban","changemap"))
```

| Feld | Bedeutung |
|------|-----------|
| `Name` | Name der Gruppe, den du bei den Admins unter `Group` einträgst |
| `Commands` | Liste der erlaubten Befehle, `"all"` erlaubt sämtliche Befehle |

:::: info Hinweis
Ein Admin der Gruppe `SuperAdmin` darf alles, ein Admin der Gruppe `Moderator` im obigen Beispiel nur kicken, bannen und die Karte wechseln. Welche Befehle du einer Gruppe überhaupt zuweisen kannst, listet die Datei `GroundBranch/Config/DefaultZooKeeper.ini` auf.
::::

:::: info Hinweis
Admins lassen sich sowohl in der Datei als auch im Spiel über das Adminmenü verwalten. Die **Gruppen** selbst kannst du ausschließlich in der `Admin.ini` anlegen und bearbeiten.
::::

## Adminmenü öffnen

Sobald du Admin bist, stehen dir im Spiel drei Wege zum Adminmenü offen:

- Taste `F8`
- ESC-Menü und dort die Admin-Schaltfläche
- Konsole (`` ` ``) und der Befehl `admin`

Im Adminmenü verwaltest du unter anderem Spieler (kicken und bannen), den Kartenwechsel und die Kartenliste sowie die Adminliste selbst.

## Weitere Adminbefehle

| Befehl | Beschreibung |
|--------|-------------|
| `admin setup <Passwort>` | Einmalige Einrichtung des ersten Admins über die Konsole |
| `admin` | Öffnet das Adminmenü |
| `kick` | Entfernt einen Spieler vom Server, optional mit Grund |
| `ban` | Sperrt einen Spieler befristet oder dauerhaft, optional mit Grund |
| `unban` | Hebt einen Bann über die eindeutige Spieler-ID wieder auf |
| `say` | Sendet eine Nachricht an alle Spieler |
| `motd` | Zeigt allen Spielern die Nachricht des Tages an |
| `changemap` / `nextmap` | Wechselt die Karte bzw. springt zur nächsten Karte der Kartenliste |
| `resurrect` (`res`) | Belebt einen gefallenen Spieler an seinem Todesort wieder |
| `resurrectnear` (`resnear`) | Belebt einen gefallenen Spieler beim nächsten lebenden Spieler wieder |
| `restartserver` | Startet den Server neu |

:::: info Hinweis
Welche dieser Befehle dir zur Verfügung stehen, hängt von deiner Admingruppe ab. Für die Konsole offiziell dokumentiert sind `admin setup <Passwort>` und `admin`; alle übrigen Befehle rufst du über das Adminmenü auf.
::::

:::: warning Kein RCON
Ground Branch bietet keine RCON-Schnittstelle. Die gesamte Administration läuft im Spiel über das Adminmenü beziehungsweise die Spielkonsole.
::::

:::: danger Wichtig
Änderungen an den Dateien im Ordner `ServerConfig` werden erst nach einem **Serverneustart** übernommen. Bearbeite die Dateien außerdem immer bei gestopptem Server, damit deine Änderungen nicht überschrieben werden.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
