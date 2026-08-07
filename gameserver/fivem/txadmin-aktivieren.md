---
description: txAdmin auf einem FiveM Server aktivieren und zum ersten Mal aufrufen
---

# So aktivierst du txAdmin auf deinem FiveM Server

**txAdmin** ist die Web-Oberfläche zur Verwaltung deines FiveM Servers. Damit steuerst du deinen Server im Browser, verwaltest Spieler und Admins, bearbeitest die `server.cfg` über den CFG Editor und siehst die Live-Konsole. txAdmin ist bereits Teil des FXServers und muss nur eingeschaltet werden.

## Was du vorher brauchst

- Einen hinterlegten [Lizenz Key](lizenz-key-hinterlegen.md), damit dein Server überhaupt startet
- Einen **Cfx.re Account** – der erste txAdmin-Account wird zwingend mit einem Cfx.re Account verknüpft

## txAdmin aktivieren

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>txAdmin einschalten</b><br>
   Trage im Feld **txAdmin** den Wert `1` ein.

   :::: info Hinweis
   Mit dem Wert `0` schaltest du txAdmin wieder aus. Dein Server startet dann direkt mit der `server.cfg` und ohne Web-Oberfläche.
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## txAdmin Port herausfinden

txAdmin läuft auf einem eigenen Port, getrennt vom Game Port. Diesen Port weist dir die Verwaltung automatisch zu – du kannst ihn nicht selbst festlegen.

1. <b>Port-Übersicht öffnen</b><br>
   Öffne die Verwaltung deines Servers und sieh dir die Port-Übersicht an.

2. <b>Adresse zusammensetzen</b><br>
   Notiere dir die IP-Adresse deines Servers und den txAdmin Port. Daraus ergibt sich die Adresse der Weboberfläche:

   ```
   http://IP-ADRESSE:TXADMIN-PORT
   ```

:::: info Hinweis
Der txAdmin Port ist **nicht** mit dem Game Port identisch. Falls du unsicher bist, welcher Port der richtige ist: txAdmin gibt die vollständige Adresse beim Start auch in der Server-Konsole aus (siehe nächster Abschnitt).
::::

## PIN aus der Server-Konsole ablesen

Solange noch kein txAdmin-Account existiert, erzeugt txAdmin beim Start einen vierstelligen PIN und zeigt ihn in der Server-Konsole an. Mit diesem PIN legst du deinen ersten Account an.

1. <b>Konsole öffnen</b><br>
   Öffne die **Server-Konsole** in der Verwaltung.

2. <b>Server starten</b><br>
   Starte deinen Server, falls er noch nicht läuft, und warte, bis der Start durchgelaufen ist.

3. <b>Kasten mit PIN suchen</b><br>
   Nach dem Start erscheint in der Konsole ein umrandeter Kasten mit der Adresse der Weboberfläche und darunter dem PIN:

   ```
   All ready! Please access:
   http://your-public-ip:TXADMIN-PORT/
   http://IP-ADRESSE:TXADMIN-PORT/

   Use the PIN below to register:
   1234
   ```

   :::: info Hinweis
   `your-public-ip` gibt txAdmin wörtlich als Platzhalter aus – nimm stattdessen die IP-Adresse aus deiner Verwaltung. `TXADMIN-PORT` und `1234` stehen hier für deinen tatsächlichen Port und deinen tatsächlichen PIN.
   ::::

:::: warning Achtung
Bei jedem Serverstart wird ein neuer PIN erzeugt, der alte ist danach ungültig. Verwende immer den PIN aus dem letzten Start. Sobald ein Account angelegt ist, erscheint kein PIN mehr in der Konsole.
::::

## Account anlegen

1. <b>Weboberfläche öffnen</b><br>
   Rufe `http://IP-ADRESSE:TXADMIN-PORT` in deinem Browser auf.

2. <b>PIN eingeben</b><br>
   Es erscheint die Seite **No Cfx.re account linked**. Trage dort den vierstelligen PIN aus der Konsole ein und klicke auf **Link Account**.

3. <b>Bei Cfx.re anmelden</b><br>
   Du wirst zur Anmeldung bei Cfx.re weitergeleitet. Melde dich mit dem Account an, der dein txAdmin-Hauptadmin werden soll.

4. <b>Einrichtung abschließen</b><br>
   Zurück in txAdmin siehst du deinen verknüpften Cfx.re Account. Vergib ein **Backup Password** und wiederhole es unter **Confirm Password**. Eine **Discord ID** kannst du optional angeben. Setze anschließend den Haken bei **I have read and agree to the Creator PLA** und klicke auf **Register**.

   :::: tip Tipp
   Das Backup Password brauchst du, wenn du dich einmal ohne Cfx.re anmelden musst. Wähle dafür ein eigenes, sicheres Passwort und nicht das deines Cfx.re Accounts.
   ::::

Danach ist txAdmin einsatzbereit und führt dich durch die Einrichtung deines Servers.

:::: tip Tipp
Verwende beim txAdmin Setup die `server.cfg` aus dem Hauptverzeichnis `/home/container`. Sie ist bereits auf den Port deines Gameservers eingestellt. Was zu tun ist, wenn dein Server auf dem falschen Port läuft, liest du unter [Port einstellen](port-einstellen.md).
::::

## Was die Verwaltung überschreibt

Einige Zeilen der `server.cfg` im Hauptverzeichnis werden bei **jedem** Serverstart aus den Einstellungen deiner Verwaltung neu geschrieben:

```
endpoint_add_tcp
endpoint_add_udp
sv_hostname
set sv_licenseKey
set steam_webApiKey
sv_maxclients
```

:::: warning Achtung
Bearbeitest du diese Zeilen von Hand oder im CFG Editor von txAdmin, sind sie beim nächsten Start wieder weg. Pflege sie stattdessen in den **Einstellungen** deiner Verwaltung. Alle übrigen Zeilen deiner `server.cfg` bleiben unangetastet.
::::

## Zugang zu txAdmin verloren

Wenn du dich nicht mehr anmelden kannst, kannst du die Account-Einrichtung zurücksetzen. Danach zeigt dir txAdmin beim nächsten Start wieder einen PIN an.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

   :::: warning Achtung
   Der Server muss wirklich gestoppt sein. txAdmin liest die `admins.json` nur beim Start ein und überschreibt Änderungen an der Datei im laufenden Betrieb wieder.
   ::::

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>admins.json löschen</b><br>
   Lösche die Datei `/home/container/txData/admins.json`.

4. <b>Server starten</b><br>
   Starte deinen Server und lies den neuen PIN aus der Server-Konsole ab. Lege anschließend wie oben beschrieben einen neuen Account an.

:::: danger Wichtig
Beim Löschen der `admins.json` gehen **alle** in txAdmin angelegten Admin-Accounts verloren. Erstelle vorher ein [Backup](backup-erstellen.md).
::::
