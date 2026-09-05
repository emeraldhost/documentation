---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Frozen Flame Server bei"
description: "Einem Frozen Flame Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["frozen-flame"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/frozen-flame/add-savegame", "gameserver/frozen-flame/create-backup", "gameserver/frozen-flame/download-savegame", "gameserver/frozen-flame/kick-ban-players"]
---

Auf Deinen Frozen Flame Server verbindest Du Dich über die Liste der privaten Server: Du trägst Deinen Server dort einmalig mit seiner IP-Adresse ein und verbindest Dich anschließend direkt. Dafür verwendest Du den **Game Port**, nicht den Query Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Für den Beitritt benötigst Du die IP-Adresse und den **Game Port**. Der Query Port dient nur der Serverabfrage – über ihn verbindest Du Dich nicht.

## Server im Spiel hinzufügen

1. **Frozen Flame starten**\
   Starte Frozen Flame und warte, bis das Hauptmenü geladen ist.

2. **Play öffnen**\
   Wähle im Hauptmenü **Play**.

3. **Private Server öffnen**\
   Wechsle auf den Bereich **Private Server**.

4. **Server hinzufügen**\
   Klicke in der Liste der privaten Server auf **Add**, um einen neuen Eintrag anzulegen.

5. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   > [!WARNING]
   > Trage hier den **Game Port** aus der Verwaltung ein. Mit dem Query Port schlägt die Verbindung fehl.

6. **Eintrag bestätigen**\
   Bestätige die Eingabe mit **Enter**. Dein Server erscheint danach in der Liste der privaten Server.

7. **Verbinden**\
   Wähle Deinen Server in der Liste aus und klicke auf **Connect**.

> [!TIP]
> Der Eintrag bleibt im Spiel gespeichert. Beim nächsten Mal wählst Du Deinen Server einfach aus der Liste aus und klickst auf **Connect**.

## Verbindung bricht nach 20 bis 30 Sekunden ab

> [!WARNING]
> **EasyAntiCheat**
>
> Wirst Du nach etwa 20 bis 30 Sekunden wieder vom Server getrennt, liegt das laut den Entwicklern an EasyAntiCheat. Läuft Dein Server ohne EasyAntiCheat (Startparameter `-noeac`), müssen **alle Spieler das Spiel ebenfalls ohne EasyAntiCheat starten**. Dafür wählst Du beim Start des Spiels in Steam die zweite Startoption ohne EasyAntiCheat aus. Server und Client müssen also immer zusammenpassen.

## Öffentliche Serverliste

> [!NOTE]
> Dein Server taucht nicht automatisch in einer öffentlichen Serverliste auf. Die offizielle Serverdokumentation sieht dafür einen eigenen Dienst vor, der über zusätzliche Einträge in der `Engine.ini` angebunden wird. Ob dieser Dienst noch betrieben wird, lässt sich nicht bestätigen. Verbinde Dich deshalb immer direkt über die IP-Adresse – dieser Weg funktioniert unabhängig davon, ob Dein Server irgendwo gelistet wird.

## Welche Ports nutzt Frozen Flame?

> [!NOTE]
> Ein Frozen-Flame-Server belegt mehrere Ports:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | TCP und UDP | Spieldaten – hierüber verbinden sich die Spieler mit Deinem Server |
> | Query Port | UDP | Serverabfrage, zum Beispiel für Serverinformationen über Steam |
> | RCON Port | TCP | Fernsteuerung des Servers – siehe [Admin hinzufügen](/tutorials/gameserver/frozen-flame/add-admin) |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.
