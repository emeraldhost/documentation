---
slug: "port-einstellen"
language: "de"
title: "So stellst Du den Gameserver Port auf Deinem FiveM Server richtig ein"
description: "Gameserver Port auf einem FiveM Server richtig einstellen"
tags: []
date: "2026-04-09"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Port einstellen"
sort: 6
related: ["gameserver/fivem/kick-ban-players", "gameserver/fivem/set-license-key", "gameserver/fivem/set-steam-web-api-key", "gameserver/fivem/set-up-database"]
---

Wenn Du beim **txAdmin Setup** nicht die `server.cfg` aus dem Hauptverzeichnis `/home/container` verwendet hast, wird der Standard-Port `30120` verwendet. Da Dein Gameserver jedoch einen anderen Port nutzt, kommt es zu folgendem Fehler:

```text
Connection refused - CURL error code 7
```

Du musst den korrekten Port Deines Gameservers manuell in der `server.cfg` eintragen.

## Wo befindet sich die server.cfg?

Je nachdem, wie Du txAdmin eingerichtet hast, kann sich die `server.cfg` an verschiedenen Stellen befinden:

| Setup | Pfad |
|-------|------|
| Standard (empfohlen) | `/home/container/server.cfg` |
| txAdmin Recipe / Deployer | `/home/container/txData/<Profilname>/server.cfg` |
| Manueller Import | Pfad, den Du beim Import angegeben hast |

> [!TIP]
> Du kannst die `server.cfg` auch direkt über den **CFG Editor** in der txAdmin Web-Oberfläche bearbeiten.

## Korrekten Port finden

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Port notieren**\
   Notiere Dir den **Standard Port** Deines Gameservers aus den Server-Informationen.

## Port in der server.cfg setzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **server.cfg öffnen**\
   Öffne die `server.cfg`, die Du beim txAdmin Setup verwendet hast (siehe Tabelle oben).

4. **Endpunkte anpassen**\
   Suche die folgenden Zeilen und ersetze `30120` durch Deinen tatsächlichen Port:

   ```text
   endpoint_add_tcp "0.0.0.0:DEIN_PORT"
   endpoint_add_udp "0.0.0.0:DEIN_PORT"
   ```

   > [!WARNING]
   > Der `endpoint_add_udp` muss **vor** dem `endpoint_add_tcp` stehen, sonst funktioniert die Port-Änderung nicht korrekt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Wir empfehlen, beim txAdmin Setup immer die `server.cfg` aus dem Hauptverzeichnis `/home/container` zu verwenden. Diese ist bereits mit dem korrekten Port Deines Gameservers vorkonfiguriert.
