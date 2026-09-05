---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Soldat 2 Server bei"
description: "Einem Soldat 2 Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/add-mods", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/kick-ban-players"]
---

Soldat 2 nutzt für die Verbindung **nur einen einzigen Port** – den **Game Port**. Einen separaten **Query Port** gibt es hier nicht. Du kommst auf zwei Wegen auf Deinen Server: über die Serverliste im Spiel oder über eine Direktverbindung mit IP-Adresse und Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung**. Genau diesen Port trägst Du im Spiel ein – es gibt bei Soldat 2 nichts dazuzurechnen.

## Über die Serverliste

1. **Soldat 2 starten**\
   Starte Soldat 2 auf Deinem PC.

2. **Serverliste öffnen**\
   Öffne im Hauptmenü den Mehrspieler-Bereich mit der Übersicht der öffentlichen Server.

3. **Server suchen**\
   Suche in der Liste nach dem Namen Deines Servers. Der Name, den Du in der **Verwaltung** gesetzt hast, ist genau der Name, der hier erscheint.

4. **Beitreten**\
   Wähle Deinen Server aus und tritt ihm bei.

> [!NOTE]
> Damit Dein Server überhaupt in der öffentlichen Liste auftaucht, muss in der `autoconfig.ini` der Wert `VisibleInGamesList` auf `True` stehen. Steht dort `False`, ist Dein Server weiterhin erreichbar – aber nur noch über die Direktverbindung.

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server und funktioniert auch dann, wenn er nicht in der Serverliste erscheint.

1. **Soldat 2 starten**\
   Starte Soldat 2 auf Deinem PC.

2. **Direktverbindung öffnen**\
   Wechsle im Mehrspieler-Bereich zur Direktverbindung. Soldat 2 fragt dort Adresse und Port getrennt voneinander ab.

3. **Adresse eintragen**\
   Trage im Adressfeld die IP-Adresse Deines Servers aus der **Verwaltung** ein:

   ```text
   123.45.67.89
   ```

4. **Port eintragen**\
   Trage im Portfeld den **Game Port** Deines Servers ein – ebenfalls unverändert so, wie er in der **Verwaltung** steht.

5. **Verbinden**\
   Bestätige die Eingabe. Du landest anschließend direkt im laufenden Spiel.

## Passwortgeschützter Server

Ist für Deinen Server ein Spielpasswort gesetzt, wirst Du beim Beitreten danach gefragt. Das Spielpasswort steuert nur, wer überhaupt auf den Server darf – es hat nichts mit dem RCON-Passwort für Adminrechte zu tun. Wie Du Adminrechte vergibst, steht unter [Admin hinzufügen](/tutorials/gameserver/soldat-2/add-admin).

## Server wird nicht gefunden

> [!WARNING]
> Taucht Dein Server nicht in der Liste auf, prüfe der Reihe nach:
>
> - Läuft der Server in der **Verwaltung** und ist der Start abgeschlossen?
> - Steht `VisibleInGamesList` in der `autoconfig.ini` auf `True`?
> - Nutzt Du wirklich die IP-Adresse und den Game Port aus der **Verwaltung**?
>
> Neu gestartete Server brauchen einen Moment, bis sie in der Serverliste erscheinen. Über die Direktverbindung erreichst Du Deinen Server sofort.

## Welche Ports nutzt Soldat 2?

> [!NOTE]
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | TCP **und** UDP | Spieldaten und Serverabfrage – hierüber verbinden sich alle Spieler |
> | WebSockets-Port | TCP | Optionale WebSockets-Schnittstelle – für den normalen Spielbetrieb nicht nötig |
> | WebSockets-RCON-Port | TCP | Optionale RCON-Schnittstelle über WebSockets – für den normalen Spielbetrieb nicht nötig |
>
> Einen eigenen Query Port gibt es bei Soldat 2 nicht – die Serverabfrage läuft über denselben Port wie das Spiel. Welche Ports für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> Ports, Servername und Spielpasswort werden bei jedem Serverstart aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Trägst Du diese Werte von Hand in die Datei ein, werden sie beim nächsten Start wieder überschrieben – ändere sie deshalb immer in der Verwaltung.
