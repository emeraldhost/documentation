---
description: MySQL Datenbank für einen FiveM Server anlegen und korrekt anbinden
---

# So richtest du eine Datenbank für deinen FiveM Server ein

Viele FiveM Skripte und Frameworks speichern ihre Daten in einer MySQL-Datenbank. Damit dein Server darauf zugreifen kann, brauchst du zwei Dinge: eine Datenbank samt Zugangsdaten und eine Datenbank-Resource, die die Verbindung herstellt.

Wir empfehlen **oxmysql**. Die Resource wird aktiv gepflegt und ersetzt die veralteten Resources `mysql-async` und `ghmattimysql`, deren Funktionen sie mit abdeckt.

## Datenbank anlegen

1. <b>Datenbank erstellen</b><br>
   Lege in der Verwaltung unter **Datenbanken** über das **Plus-Symbol** eine neue Datenbank an. Die ausführliche Anleitung dazu findest du unter [Datenbank erstellen](../datenbank-erstellen.md).

2. <b>Zugangsdaten ablesen</b><br>
   Klicke neben deiner Datenbank auf das **Augen-Symbol**. Du brauchst gleich diese Werte:

   - **Datenbank Host** (z.B. `db1.cgn1.emeraldhost.de`)
   - **Datenbank Port** (Standard: `3306`)
   - **Datenbank Benutzername**
   - **Datenbank Passwort**
   - **Datenbank Name**

:::: danger Wichtig
Teile deine Datenbank-Zugangsdaten niemals mit anderen Personen und poste sie nicht in Screenshots, Konsolen-Logs oder Support-Tickets von Drittanbietern. Wer die Zugangsdaten hat, kann alle Daten deines Servers auslesen und löschen.
::::

## oxmysql hochladen

1. <b>Resource herunterladen</b><br>
   Lade dir das aktuelle Release von [oxmysql](https://github.com/overextended/oxmysql/releases/latest) herunter. Verwende die Datei `oxmysql.zip` und **nicht** den Quellcode-Download.

2. <b>Archiv entpacken</b><br>
   Entpacke das Archiv. Du erhältst einen Ordner mit dem Namen `oxmysql`.

   :::: warning Achtung
   Der Ordnername muss exakt `oxmysql` lauten. Benennst du ihn um, findet FiveM die Resource nicht.
   ::::

3. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

4. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

5. <b>Ordner hochladen</b><br>
   Lade den Ordner `oxmysql` in den `resources`-Ordner hoch, der neben der `server.cfg` deines Servers liegt.

   | Setup | Pfad |
   |-------|------|
   | Standard (empfohlen) | `/home/container/resources` |
   | txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/resources` |

## Connection String eintragen

Der Connection String bündelt alle Zugangsdaten in einer Zeile. oxmysql liest ihn aus der Convar `mysql_connection_string`.

1. <b>server.cfg öffnen</b><br>
   Öffne die `server.cfg`, die dein Server verwendet. Welche das ist, hängt von deinem txAdmin Setup ab – die Übersicht dazu findest du unter [Port einstellen](port-einstellen.md).

2. <b>Connection String setzen</b><br>
   Trage folgende Zeile ein und ersetze die Platzhalter durch deine Zugangsdaten aus dem Augen-Symbol:

   ```
   set mysql_connection_string "mysql://BENUTZERNAME:PASSWORT@HOST:PORT/DATENBANKNAME"
   ```

   Alternativ akzeptiert oxmysql auch das Format mit Semikolons:

   ```
   set mysql_connection_string "user=BENUTZERNAME;password=PASSWORT;host=HOST;port=PORT;database=DATENBANKNAME"
   ```

3. <b>Nur set verwenden</b><br>
   Setze die Convar ausschließlich mit `set`.

   :::: danger Wichtig
   Verwende niemals `setr` oder `sets` für den Connection String. `setr` überträgt den Wert an alle verbundenen Spieler, `sets` zeigt ihn öffentlich in der Serverliste und in der `info.json` deines Servers an. In beiden Fällen wäre dein Datenbank-Passwort für jeden einsehbar.
   ::::

4. <b>oxmysql starten</b><br>
   Füge unterhalb des Connection Strings die Startzeile für die Resource ein:

   ```
   ensure oxmysql
   ```

   :::: warning Achtung
   Die Reihenfolge in der `server.cfg` ist entscheidend. Der `set mysql_connection_string` muss **vor** allen `ensure`-Zeilen stehen, und `ensure oxmysql` muss **vor** allen Skripten stehen, die die Datenbank nutzen. Sonst starten diese Skripte, bevor die Datenbankverbindung steht.
   ::::

5. <b>Server starten</b><br>
   Speichere die `server.cfg` und starte deinen Server über die Verwaltung.

:::: info Hinweis
Beim Serverstart schreibt die Verwaltung einige Zeilen der `server.cfg` automatisch neu, unter anderem `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` und `sv_maxclients`. Deine Zeilen `set mysql_connection_string` und `ensure oxmysql` bleiben davon unberührt und gehen nicht verloren.
::::

## Verbindung prüfen

Öffne nach dem Start die **Konsole** deines Servers in der Verwaltung. Hat die Verbindung geklappt, findest du dort diese Meldung:

```
Database server connection established!
```

Davor steht in eckigen Klammern die Version deines Datenbankservers.

Schlägt die Verbindung fehl, gibt oxmysql stattdessen eine Meldung in dieser Form aus:

```
Unable to establish a connection to the database (FEHLERCODE)!
```

Prüfe in diesem Fall Benutzername, Passwort, Host, Port und Datenbankname noch einmal über das Augen-Symbol in der Verwaltung.

## Sonderzeichen im Passwort

Je nach verwendetem Format sind bestimmte Sonderzeichen reserviert oder werden nicht unterstützt. Enthält dein Datenbank-Passwort eines dieser Zeichen, kann die Verbindung fehlschlagen:

```
; , / ? : @ & = + $ #
```

:::: tip Tipp
Enthält dein generiertes Passwort eines dieser Zeichen, lass dir in der Verwaltung über **Neues Passwort generieren** ein neues Passwort erstellen, bis es frei von diesen Zeichen ist. Alternativ kannst du auf das jeweils andere Connection-String-Format wechseln.
::::

:::: warning Achtung
Kodiere das Passwort nicht (also z.B. nicht `%40` statt `@`). oxmysql löst solche Kodierungen nicht auf und übergibt sie unverändert an die Datenbank – die Anmeldung schlägt dann ebenfalls fehl.
::::

## Weitere Convars

Für die Fehlersuche stellt oxmysql zusätzliche Convars bereit, die du ebenfalls mit `set` in die `server.cfg` einträgst:

| Convar | Beschreibung |
|--------|--------------|
| `set mysql_debug true` | Gibt alle Datenbankabfragen in der Konsole aus |
| `set mysql_slow_query_warning 150` | Warnt, wenn eine Abfrage länger als die angegebene Zeit in Millisekunden dauert |

:::: tip Tipp
Erstelle vor größeren Änderungen an deiner Datenbank ein [Backup](../backup-erstellen.md) deines Servers. Den Inhalt der Datenbank selbst sicherst du über phpMyAdmin.
::::

## Wie geht es weiter?

Deine Datenbank ist jetzt verbunden, aber noch leer. Die meisten Frameworks und Skripte bringen eine `.sql`-Datei mit, die die benötigten Tabellen anlegt. Wie du sie einspielst, steht unter [Datenbank importieren](datenbank-importieren.md).
