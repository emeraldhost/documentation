---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Eco Server bei"
description: "Einem Eco Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame", "gameserver/eco/kick-ban-players"]
---

Eco hat keine klassische Direktverbindung im Hauptmenü. Stattdessen fügst Du Deinen Server im Serverbrowser über das **Plus-Symbol** hinzu – oder Du suchst ihn in der öffentlichen Serverliste. Zum Verbinden verwendest Du immer den **Game Port** Deines Servers.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Verwende nicht den Port des Webservers – über ihn erreichst Du nur den Web-Client, nicht das Spiel.

## Server über die IP hinzufügen

Der Eintrag über die IP-Adresse ist der zuverlässigste Weg auf Deinen Server. Einmal hinzugefügt, bleibt der Server dauerhaft in Deiner Liste.

1. **Eco starten**\
   Starte Eco auf Deinem PC und melde Dich mit Deinem Account an.

2. **Serverbrowser öffnen**\
   Wähle im Hauptmenü **New Game**. Du landest in der Übersicht **Your Worlds** mit den Servern, die Du bereits besucht hast.

3. **Server hinzufügen**\
   Klicke auf das grüne **Plus-Symbol**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   > [!NOTE]
   > Beide Werte stehen in Deiner **Verwaltung**. Die Adresse besteht aus der IP-Adresse, einem Doppelpunkt und dem Game Port – ohne Leerzeichen dazwischen.

5. **Beitreten**\
   Bestätige die Eingabe und klicke auf **Join**.

6. **Charakter erstellen**\
   Beim ersten Beitritt legst Du Deinen Charakter an und wählst Deinen Startpunkt in der Welt. Danach wird Dein Fortschritt auf dem Server gespeichert.

> [!TIP]
> Besuchte Server erscheinen anschließend dauerhaft unter **Your Worlds**. Du musst die IP-Adresse also nur einmal eintragen.

## Über die öffentliche Serverliste

1. **New Game öffnen**\
   Wähle im Hauptmenü **New Game**.

2. **Alle Server anzeigen**\
   Klicke oben rechts auf **Browse All**, um die öffentliche Serverliste zu öffnen.

3. **Server suchen**\
   Klicke auf das Lupensymbol und gib den Namen Deines Servers ein.

4. **Beitreten**\
   Wähle Deinen Server aus und klicke auf **Join**.

## Account für Eco

> [!NOTE]
> Zum Spielen wird ein kostenloser Account von Strange Loop Games benötigt. Melde Dich im Spiel damit an, bevor Du einem Server beitrittst.

## Server erscheint nicht in der Liste

Damit Dein Server in der öffentlichen Serverliste auftaucht, muss er dort angemeldet sein. Gesteuert wird das über die Datei `/Configs/Network.eco`:

| Einstellung | Bedeutung |
|-------------|-----------|
| **Public Server** | Legt fest, ob der Server an die öffentliche Serverliste von Strange Loop Games gemeldet wird |
| **Server Category** | Kategorie, unter der Dein Server einsortiert wird: `Beginner`, `Established`, `BeginnerHard` oder `Strange` |

> [!NOTE]
> **Groß- und Kleinschreibung beachten**
>
> `Network.eco` ist eine JSON-Datei. Die Kategoriewerte werden genau so geschrieben wie oben – `BeginnerHard` also ohne Leerzeichen und mit großem `B` und `H`. Ein abweichend geschriebener Wert wird nicht erkannt.

> [!WARNING]
> Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen. Ein Server, auf dem ein Passwort gesetzt ist, taucht in der öffentlichen Liste in der Regel ebenfalls nicht auf.

> [!TIP]
> **Server trotzdem erreichbar**
>
> Auch wenn Dein Server nicht in der öffentlichen Liste steht, kannst Du ihn jederzeit über das Plus-Symbol mit IP-Adresse und Game Port hinzufügen. Gib beides einfach an Deine Mitspieler weiter.

## Welche Ports nutzt Eco?

> [!NOTE]
> Ein Eco-Server belegt mehrere Ports. In der Datei `/Configs/Network.eco` heißen sie:
>
> | Konfigurationswert | Protokoll | Verwendung |
> |--------------------|-----------|------------|
> | `GameServerPort` | UDP | Game Port – hierüber verbinden sich die Spieler |
> | `WebServerPort` | TCP | Webserver des Spiels, unter anderem für den Web-Client |
> | `RconServerPort` | TCP | RCON |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**. Trage im Spiel immer den **Game Port** ein.
