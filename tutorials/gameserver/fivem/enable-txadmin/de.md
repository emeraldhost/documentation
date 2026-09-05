---
slug: "txadmin-aktivieren"
language: "de"
title: "So aktivierst Du txAdmin auf Deinem FiveM Server"
description: "txAdmin auf einem FiveM Server aktivieren und zum ersten Mal aufrufen"
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
short_title: "txAdmin aktivieren"
sort: 11
related: ["gameserver/fivem/add-resources", "gameserver/fivem/create-backup", "gameserver/fivem/import-database", "gameserver/fivem/join-server"]
---

**txAdmin** ist die Web-Oberfläche zur Verwaltung Deines FiveM Servers. Damit steuerst Du Deinen Server im Browser, verwaltest Spieler und Admins, bearbeitest die `server.cfg` über den CFG Editor und siehst die Live-Konsole. txAdmin ist bereits Teil des FXServers und muss nur eingeschaltet werden.

## Was Du vorher brauchst

- Einen hinterlegten [Lizenz Key](/tutorials/gameserver/fivem/set-license-key), damit Dein Server überhaupt startet
- Einen **Cfx.re Account** – der erste txAdmin-Account wird zwingend mit einem Cfx.re Account verknüpft

## txAdmin aktivieren

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **txAdmin einschalten**\
   Trage im Feld **txAdmin** den Wert `1` ein.

   > [!NOTE]
   > Mit dem Wert `0` schaltest Du txAdmin wieder aus. Dein Server startet dann direkt mit der `server.cfg` und ohne Web-Oberfläche.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## txAdmin Port herausfinden

txAdmin läuft auf einem eigenen Port, getrennt vom Game Port. Diesen Port weist Dir die Verwaltung automatisch zu – Du kannst ihn nicht selbst festlegen.

1. **Port-Übersicht öffnen**\
   Öffne die Verwaltung Deines Servers und sieh Dir die Port-Übersicht an.

2. **Adresse zusammensetzen**\
   Notiere Dir die IP-Adresse Deines Servers und den txAdmin Port. Daraus ergibt sich die Adresse der Weboberfläche:

   ```text
   http://IP-ADRESSE:TXADMIN-PORT
   ```

> [!NOTE]
> Der txAdmin Port ist **nicht** mit dem Game Port identisch. Falls Du unsicher bist, welcher Port der richtige ist: txAdmin gibt die vollständige Adresse beim Start auch in der Server-Konsole aus (siehe nächster Abschnitt).

## PIN aus der Server-Konsole ablesen

Solange noch kein txAdmin-Account existiert, erzeugt txAdmin beim Start einen vierstelligen PIN und zeigt ihn in der Server-Konsole an. Mit diesem PIN legst Du Deinen ersten Account an.

1. **Konsole öffnen**\
   Öffne die **Server-Konsole** in der Verwaltung.

2. **Server starten**\
   Starte Deinen Server, falls er noch nicht läuft, und warte, bis der Start durchgelaufen ist.

3. **Kasten mit PIN suchen**\
   Nach dem Start erscheint in der Konsole ein umrandeter Kasten mit der Adresse der Weboberfläche und darunter dem PIN:

   ```text
   All ready! Please access:
   http://your-public-ip:TXADMIN-PORT/
   http://IP-ADRESSE:TXADMIN-PORT/

   Use the PIN below to register:
   1234
   ```

   > [!NOTE]
   > `your-public-ip` gibt txAdmin wörtlich als Platzhalter aus – nimm stattdessen die IP-Adresse aus Deiner Verwaltung. `TXADMIN-PORT` und `1234` stehen hier für Deinen tatsächlichen Port und Deinen tatsächlichen PIN.

> [!WARNING]
> Bei jedem Serverstart wird ein neuer PIN erzeugt, der alte ist danach ungültig. Verwende immer den PIN aus dem letzten Start. Sobald ein Account angelegt ist, erscheint kein PIN mehr in der Konsole.

## Account anlegen

1. **Weboberfläche öffnen**\
   Rufe `http://IP-ADRESSE:TXADMIN-PORT` in Deinem Browser auf.

2. **PIN eingeben**\
   Es erscheint die Seite **No Cfx.re account linked**. Trage dort den vierstelligen PIN aus der Konsole ein und klicke auf **Link Account**.

3. **Bei Cfx.re anmelden**\
   Du wirst zur Anmeldung bei Cfx.re weitergeleitet. Melde Dich mit dem Account an, der Dein txAdmin-Hauptadmin werden soll.

4. **Einrichtung abschließen**\
   Zurück in txAdmin siehst Du Deinen verknüpften Cfx.re Account. Vergib ein **Backup Password** und wiederhole es unter **Confirm Password**. Eine **Discord ID** kannst Du optional angeben. Setze anschließend den Haken bei **I have read and agree to the Creator PLA** und klicke auf **Register**.

   > [!TIP]
   > Das Backup Password brauchst Du, wenn Du Dich einmal ohne Cfx.re anmelden musst. Wähle dafür ein eigenes, sicheres Passwort und nicht das Deines Cfx.re Accounts.

Danach ist txAdmin einsatzbereit und führt Dich durch die Einrichtung Deines Servers.

> [!TIP]
> Verwende beim txAdmin Setup die `server.cfg` aus dem Hauptverzeichnis `/home/container`. Sie ist bereits auf den Port Deines Gameservers eingestellt. Was zu tun ist, wenn Dein Server auf dem falschen Port läuft, liest Du unter [Port einstellen](/tutorials/gameserver/fivem/set-port).

## Was die Verwaltung überschreibt

Einige Zeilen der `server.cfg` im Hauptverzeichnis werden bei **jedem** Serverstart aus den Einstellungen Deiner Verwaltung neu geschrieben:

```text
endpoint_add_tcp
endpoint_add_udp
sv_hostname
set sv_licenseKey
set steam_webApiKey
sv_maxclients
```

> [!WARNING]
> Bearbeitest Du diese Zeilen von Hand oder im CFG Editor von txAdmin, sind sie beim nächsten Start wieder weg. Pflege sie stattdessen in den **Einstellungen** Deiner Verwaltung. Alle übrigen Zeilen Deiner `server.cfg` bleiben unangetastet.

## Zugang zu txAdmin verloren

Wenn Du Dich nicht mehr anmelden kannst, kannst Du die Account-Einrichtung zurücksetzen. Danach zeigt Dir txAdmin beim nächsten Start wieder einen PIN an.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

   > [!WARNING]
   > Der Server muss wirklich gestoppt sein. txAdmin liest die `admins.json` nur beim Start ein und überschreibt Änderungen an der Datei im laufenden Betrieb wieder.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **admins.json löschen**\
   Lösche die Datei `/home/container/txData/admins.json`.

4. **Server starten**\
   Starte Deinen Server und lies den neuen PIN aus der Server-Konsole ab. Lege anschließend wie oben beschrieben einen neuen Account an.

> [!IMPORTANT]
> Beim Löschen der `admins.json` gehen **alle** in txAdmin angelegten Admin-Accounts verloren. Erstelle vorher ein [Backup](/tutorials/gameserver/fivem/create-backup).
