---
description: Gameserver Port auf einem FiveM Server richtig einstellen
---

# So stellst du den Gameserver Port auf deinem FiveM Server richtig ein

Wenn du beim **txAdmin Setup** nicht die `server.cfg` aus dem Hauptverzeichnis `/home/container` verwendet hast, wird der Standard-Port `30120` verwendet. Da dein Gameserver jedoch einen anderen Port nutzt, kommt es zu folgendem Fehler:

```
Connection refused - CURL error code 7
```

Du musst den korrekten Port deines Gameservers manuell in der `server.cfg` eintragen.

## Wo befindet sich die server.cfg?

Je nachdem, wie du txAdmin eingerichtet hast, kann sich die `server.cfg` an verschiedenen Stellen befinden:

| Setup | Pfad |
|-------|------|
| Standard (empfohlen) | `/home/container/server.cfg` |
| txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/server.cfg` |
| Manueller Import | Pfad, den du beim Import angegeben hast |

:::: tip Tipp
Du kannst die `server.cfg` auch direkt über den **CFG Editor** in der txAdmin Web-Oberfläche bearbeiten.
::::

## Korrekten Port finden

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Port notieren</b><br>
   Notiere dir den **Standard Port** deines Gameservers aus den Server-Informationen.

## Port in der server.cfg setzen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server.cfg öffnen</b><br>
   Öffne die `server.cfg`, die du beim txAdmin Setup verwendet hast (siehe Tabelle oben).

4. <b>Endpunkte anpassen</b><br>
   Suche die folgenden Zeilen und ersetze `30120` durch deinen tatsächlichen Port:

   ```
   endpoint_add_tcp "0.0.0.0:DEIN_PORT"
   endpoint_add_udp "0.0.0.0:DEIN_PORT"
   ```

   :::: warning Achtung
   Der `endpoint_add_udp` muss **vor** dem `endpoint_add_tcp` stehen, sonst funktioniert die Port-Änderung nicht korrekt.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Wir empfehlen, beim txAdmin Setup immer die `server.cfg` aus dem Hauptverzeichnis `/home/container` zu verwenden. Diese ist bereits mit dem korrekten Port deines Gameservers vorkonfiguriert.
::::
