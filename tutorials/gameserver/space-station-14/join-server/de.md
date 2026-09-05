---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Space Station 14 Server bei"
description: "Einem Space Station 14 Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 3
related: ["gameserver/space-station-14/add-admin", "gameserver/space-station-14/create-backup", "gameserver/space-station-14/kick-ban-players"]
---

Space Station 14 wird ausschließlich über den offiziellen **SS14-Launcher** gespielt. Einen Beitritt über Steam oder ein spielinternes Verbindungsfenster gibt es nicht. Im Launcher hast Du zwei Möglichkeiten: die Serverliste oder die Direktverbindung über **Direct Connect To Server**.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse sowie den **Game Port** und den **Query Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Trage im Launcher immer die dort angezeigten Werte ein und verlasse Dich nicht auf feste Standardwerte.

## Direkt verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server, weil sie nicht davon abhängt, ob Dein Server in der öffentlichen Serverliste auftaucht.

1. **Launcher starten**\
   Starte den SS14-Launcher und melde Dich mit Deinem SS14-Konto an.

2. **Direktverbindung öffnen**\
   Klicke auf **Direct Connect To Server**.

3. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Query Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Query Port>
   ```

   > [!NOTE]
   > Ein Schema musst Du nicht angeben – der Launcher ergänzt automatisch `ss14://`. Läuft Dein Server hinter HTTPS, kannst Du stattdessen `ss14s://` voranstellen. Eine IPv6-Adresse gehört in eckige Klammern, zum Beispiel `[fd11:5ee:beef::1]`.

4. **Verbinden**\
   Bestätige die Eingabe. Der Launcher lädt den passenden Client-Inhalt Deines Servers automatisch herunter und startet das Spiel.

5. **Server merken**\
   Über **Add Favorite** legst Du den Server dauerhaft im Launcher ab und musst die Adresse nicht erneut eintippen.

## Über die Serverliste

Damit Dein Server in der öffentlichen Serverliste (Hub) auftaucht, musst Du das ausdrücklich aktivieren – standardmäßig ist die Eintragung **deaktiviert**.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **server_config.toml öffnen**\
   Öffne die Datei `server_config.toml`. Sie liegt im Hauptverzeichnis Deines Servers, neben der Server-Anwendung `Robust.Server`.

4. **Eintragung aktivieren**\
   Ergänze folgenden Abschnitt:

   ```toml
   [hub]
   advertise = true
   ```

   Optional kannst Du zusätzlich `server_url` (Link zu Deiner Community, z.B. Discord) und `tags` setzen.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

6. **Server suchen**\
   Suche im Launcher in der Serverliste nach dem Namen Deines Servers.

> [!WARNING]
> **Server erscheint nicht in der Liste**
>
> Steht in der Server-Konsole eine Meldung wie `[ERRO] hub: Error status while advertising server: [UnprocessableEntity] "Unable to contact status address"`, konnte der Hub Deinen Server nicht erreichen. Prüfe dann, ob Du in der Verwaltung die richtigen Ports verwendest und ob Dein Server läuft. Bis zur Klärung erreichst Du Deinen Server jederzeit über die Direktverbindung.

## Welche Ports nutzt Space Station 14?

> [!NOTE]
> Ein Space-Station-14-Server nutzt zwei Ports, die üblicherweise dieselbe Nummer haben:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Übertragung der Spieldaten (Konfigurationswert `port` im Abschnitt `[net]`) |
> | Query Port | TCP | Status-Schnittstelle, die der Launcher und die Serverliste abfragen (Konfigurationswert `bind` im Abschnitt `[status]`) |
>
> Die Adresse, die Du im Launcher einträgst, spricht zuerst den **Query Port** an. Die Spielverbindung über UDP leitet der Launcher daraus ab. Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> Weichen Game Port und Query Port bei Deinem Server voneinander ab, findet der Launcher die Spielverbindung nicht von allein. Trage dann in der `server_config.toml` die Spieladresse ausdrücklich ein:
>
> ```toml
> [status]
> connectaddress = "udp://<IP-Adresse>:<Game Port>"
> ```
