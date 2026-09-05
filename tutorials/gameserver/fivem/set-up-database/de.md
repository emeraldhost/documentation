---
slug: "datenbank-einrichten"
language: "de"
title: "So richtest Du eine Datenbank für Deinen FiveM Server ein"
description: "MySQL Datenbank für einen FiveM Server anlegen und korrekt anbinden"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenbank einrichten"
sort: 3
related: ["gameserver/fivem/kick-ban-players", "gameserver/fivem/set-license-key", "gameserver/fivem/set-port", "gameserver/fivem/set-steam-web-api-key"]
---

Viele FiveM Skripte und Frameworks speichern ihre Daten in einer MySQL-Datenbank. Damit Dein Server darauf zugreifen kann, brauchst Du zwei Dinge: eine Datenbank samt Zugangsdaten und eine Datenbank-Resource, die die Verbindung herstellt.

Wir empfehlen **oxmysql**. Die Resource wird aktiv gepflegt und ersetzt die veralteten Resources `mysql-async` und `ghmattimysql`, deren Funktionen sie mit abdeckt.

## Datenbank anlegen

1. **Datenbank erstellen**\
   Lege in der Verwaltung unter **Datenbanken** über das **Plus-Symbol** eine neue Datenbank an. Die ausführliche Anleitung dazu findest Du unter [Datenbank erstellen](/tutorials/gameserver/create-database).

2. **Zugangsdaten ablesen**\
   Klicke neben Deiner Datenbank auf das **Augen-Symbol**. Du brauchst gleich diese Werte:

   - **Datenbank Host** (z.B. `db1.cgn1.emeraldhost.de`)
   - **Datenbank Port** (Standard: `3306`)
   - **Datenbank Benutzername**
   - **Datenbank Passwort**
   - **Datenbank Name**

> [!IMPORTANT]
> Teile Deine Datenbank-Zugangsdaten niemals mit anderen Personen und poste sie nicht in Screenshots, Konsolen-Logs oder Support-Tickets von Drittanbietern. Wer die Zugangsdaten hat, kann alle Daten Deines Servers auslesen und löschen.

## oxmysql hochladen

1. **Resource herunterladen**\
   Lade Dir das aktuelle Release von [oxmysql](https://github.com/overextended/oxmysql/releases/latest) herunter. Verwende die Datei `oxmysql.zip` und **nicht** den Quellcode-Download.

2. **Archiv entpacken**\
   Entpacke das Archiv. Du erhältst einen Ordner mit dem Namen `oxmysql`.

   > [!WARNING]
   > Der Ordnername muss exakt `oxmysql` lauten. Benennst Du ihn um, findet FiveM die Resource nicht.

3. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

4. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

5. **Ordner hochladen**\
   Lade den Ordner `oxmysql` in den `resources`-Ordner hoch, der neben der `server.cfg` Deines Servers liegt.

   | Setup | Pfad |
   |-------|------|
   | Standard (empfohlen) | `/home/container/resources` |
   | txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/resources` |

## Connection String eintragen

Der Connection String bündelt alle Zugangsdaten in einer Zeile. oxmysql liest ihn aus der Convar `mysql_connection_string`.

1. **server.cfg öffnen**\
   Öffne die `server.cfg`, die Dein Server verwendet. Welche das ist, hängt von Deinem txAdmin Setup ab – die Übersicht dazu findest Du unter [Port einstellen](/tutorials/gameserver/fivem/set-port).

2. **Connection String setzen**\
   Trage folgende Zeile ein und ersetze die Platzhalter durch Deine Zugangsdaten aus dem Augen-Symbol:

   ```text
   set mysql_connection_string "mysql://BENUTZERNAME:PASSWORT@HOST:PORT/DATENBANKNAME"
   ```

   Alternativ akzeptiert oxmysql auch das Format mit Semikolons:

   ```text
   set mysql_connection_string "user=BENUTZERNAME;password=PASSWORT;host=HOST;port=PORT;database=DATENBANKNAME"
   ```

3. **Nur set verwenden**\
   Setze die Convar ausschließlich mit `set`.

   > [!IMPORTANT]
   > Verwende niemals `setr` oder `sets` für den Connection String. `setr` überträgt den Wert an alle verbundenen Spieler, `sets` zeigt ihn öffentlich in der Serverliste und in der `info.json` Deines Servers an. In beiden Fällen wäre Dein Datenbank-Passwort für jeden einsehbar.

4. **oxmysql starten**\
   Füge unterhalb des Connection Strings die Startzeile für die Resource ein:

   ```text
   ensure oxmysql
   ```

   > [!WARNING]
   > Die Reihenfolge in der `server.cfg` ist entscheidend. Der `set mysql_connection_string` muss **vor** allen `ensure`-Zeilen stehen, und `ensure oxmysql` muss **vor** allen Skripten stehen, die die Datenbank nutzen. Sonst starten diese Skripte, bevor die Datenbankverbindung steht.

5. **Server starten**\
   Speichere die `server.cfg` und starte Deinen Server über die Verwaltung.

> [!NOTE]
> Beim Serverstart schreibt die Verwaltung einige Zeilen der `server.cfg` automatisch neu, unter anderem `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` und `sv_maxclients`. Deine Zeilen `set mysql_connection_string` und `ensure oxmysql` bleiben davon unberührt und gehen nicht verloren.

## Verbindung prüfen

Öffne nach dem Start die **Konsole** Deines Servers in der Verwaltung. Hat die Verbindung geklappt, findest Du dort diese Meldung:

```text
Database server connection established!
```

Davor steht in eckigen Klammern die Version Deines Datenbankservers.

Schlägt die Verbindung fehl, gibt oxmysql stattdessen eine Meldung in dieser Form aus:

```text
Unable to establish a connection to the database (FEHLERCODE)!
```

Prüfe in diesem Fall Benutzername, Passwort, Host, Port und Datenbankname noch einmal über das Augen-Symbol in der Verwaltung.

## Sonderzeichen im Passwort

Je nach verwendetem Format sind bestimmte Sonderzeichen reserviert oder werden nicht unterstützt. Enthält Dein Datenbank-Passwort eines dieser Zeichen, kann die Verbindung fehlschlagen:

```text
; , / ? : @ & = + $ #
```

> [!TIP]
> Enthält Dein generiertes Passwort eines dieser Zeichen, lass Dir in der Verwaltung über **Neues Passwort generieren** ein neues Passwort erstellen, bis es frei von diesen Zeichen ist. Alternativ kannst Du auf das jeweils andere Connection-String-Format wechseln.

> [!WARNING]
> Kodiere das Passwort nicht (also z.B. nicht `%40` statt `@`). oxmysql löst solche Kodierungen nicht auf und übergibt sie unverändert an die Datenbank – die Anmeldung schlägt dann ebenfalls fehl.

## Weitere Convars

Für die Fehlersuche stellt oxmysql zusätzliche Convars bereit, die Du ebenfalls mit `set` in die `server.cfg` einträgst:

| Convar | Beschreibung |
|--------|--------------|
| `set mysql_debug true` | Gibt alle Datenbankabfragen in der Konsole aus |
| `set mysql_slow_query_warning 150` | Warnt, wenn eine Abfrage länger als die angegebene Zeit in Millisekunden dauert |

> [!TIP]
> Erstelle vor größeren Änderungen an Deiner Datenbank ein [Backup](/tutorials/gameserver/create-backup) Deines Servers. Den Inhalt der Datenbank selbst sicherst Du über phpMyAdmin.

## Wie geht es weiter?

Deine Datenbank ist jetzt verbunden, aber noch leer. Die meisten Frameworks und Skripte bringen eine `.sql`-Datei mit, die die benötigten Tabellen anlegt. Wie Du sie einspielst, steht unter [Datenbank importieren](/tutorials/gameserver/fivem/import-database).
