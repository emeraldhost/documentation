---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Mordhau Server bei"
description: "Einem Mordhau Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/kick-ban-players"]
---

Deinen Server findest Du entweder über den Serverbrowser im Spiel, oder Du verbindest Dich über Steam direkt mit der Adresse Deines Servers.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Für die Verbindung über Steam verwendest Du den **Query Port**, nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.

## Über den Serverbrowser im Spiel

1. **Mordhau starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serverbrowser öffnen**\
   Wähle im Hauptmenü **Fight**. Du landest im Serverbrowser mit der Liste aller öffentlichen Server.

3. **Server suchen**\
   Gib im Suchfeld den Namen Deines Servers ein. So findest Du ihn deutlich schneller als durch Scrollen in der vollen Liste.

4. **Beitreten**\
   Wähle Deinen Server aus der Liste aus und tritt ihm bei.

> [!NOTE]
> **Passwortgeschützter Server**
>
> Ist für Deinen Server ein Passwort gesetzt, wirst Du beim Beitreten danach gefragt. Das Passwort findest Du in der **Verwaltung** Deines Servers.

## Über Steam verbinden

Wenn Du gezielt über die Adresse Deines Servers beitreten möchtest, nutzt Du einen Steam-Verbindungslink.

1. **Steam starten**\
   Stelle sicher, dass Steam auf Deinem PC läuft und Du angemeldet bist.

2. **Verbindungslink zusammenbauen**\
   Setze den Link aus der IP-Adresse und dem **Query Port** Deines Servers zusammen:

   ```text
   steam://connect/<IP-Adresse>:<Query Port>
   ```

   > [!WARNING]
   > Hier gehört der **Query Port** hinein, nicht der Game Port. Beide Werte stehen in der **Verwaltung** Deines Servers.

3. **Link öffnen**\
   Gib den Link in die Adresszeile Deines Browsers ein oder öffne ihn unter Windows mit `Win` + `R`. Steam startet Mordhau und verbindet Dich mit Deinem Server.

> [!TIP]
> Speichere Dir den fertigen Link als Lesezeichen oder gib ihn an Deine Mitspieler weiter – so muss niemand den Server im Browser suchen.

## Welche Ports nutzt Mordhau?

> [!NOTE]
> Ein Mordhau Server belegt drei Ports:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Überträgt die eigentlichen Spieldaten |
> | Query Port | UDP | Serverabfrage: Hierüber erscheint Dein Server in der Serverliste, und hierüber läuft die Verbindung per Steam-Link |
> | Beacon Port | UDP | Wird beim Verbindungsaufbau der Spieler genutzt |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**. Alle drei Ports müssen erreichbar sein – fehlt einer, kann der Beitritt scheitern, obwohl der Server läuft.

## Server erscheint nicht im Serverbrowser

Damit Dein Server öffentlich gelistet wird, muss er sich bei Steam anmelden. Gesteuert wird das über den Eintrag `bAdvertiseServerViaSteam` in der `Game.ini`.

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

   > [!WARNING]
   > Bearbeite die `Game.ini` nur bei gestopptem Server. Mordhau schreibt die Datei beim Beenden neu und überschreibt dabei Änderungen, die Du im laufenden Betrieb vorgenommen hast.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. **Eintrag setzen**\
   Suche in der Datei den Eintrag `bAdvertiseServerViaSteam` und setze ihn auf `True`:

   ```ini
   bAdvertiseServerViaSteam=True
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Frisch gestartete Server brauchen einige Minuten, bis sie in der Serverliste auftauchen. Über den Steam-Verbindungslink kommst Du auch dann schon auf Deinen Server, wenn er noch nicht gelistet ist.

> [!NOTE]
> Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem Dein Server einmal vollständig gestartet ist. Findest Du die Datei nicht, starte Deinen Server einmal und stoppe ihn wieder.
