---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem s&box Server bei"
description: "Einem s&box Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/kick-ban-players"]
---

Es gibt drei Wege auf Deinen Server: über den Serverbrowser im Spiel, über eine Direktverbindung mit der IP-Adresse und über die Lobby-ID Deines Servers.

> [!NOTE]
> Auf Deinem PC musst Du nichts installieren. Spielmodus, Map und alle weiteren Inhalte lädt s&box beim Beitritt automatisch nach – fehlende Inhalte inklusive Spielcode schickt der Server direkt an Dich.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse sowie den **Game Port** und den **Query Port** Deines Servers findest Du in der **Verwaltung** Deines Servers. Zum Verbinden verwendest Du immer den **Game Port**, nicht den Query Port.

## Über den Serverbrowser im Spiel

1. **s&box starten**\
   Starte s&box und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Wähle im Menü **Servers**.

3. **Nach Deinem Server suchen**\
   Gib den Namen Deines Servers in das **Suchfeld auf der linken Seite** ein. Der Filter am oberen Rand ist nicht die Namenssuche.

4. **Filter prüfen**\
   Ist Dein Server noch leer oder bereits voll, aktiviere die Optionen **Show Empty** beziehungsweise **Show Full**. Sonst wird er nicht angezeigt.

5. **Server beitreten**\
   Klicke auf das Symbol neben dem Servernamen, um beizutreten.

> [!NOTE]
> Der Serverbrowser fragt Deinen Server über den **Query Port** ab. Von dort kommen Servername, Map und Spielerzahl. Verbunden wird anschließend über den **Game Port**.

## Direkt über die Konsole verbinden

1. **Konsole freischalten**\
   Öffne in s&box die Einstellungen und aktiviere unter den Tastatur-Einstellungen das **Console Overlay**.

2. **Konsole öffnen**\
   Drücke die Taste links neben der `1` (`` ` `` beziehungsweise `^`).

3. **Verbindungsbefehl eingeben**\
   Gib die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   connect <IP-Adresse>:<Game Port>
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > connect 123.45.67.89:27031
   > ```

> [!WARNING]
> Gib den Port immer mit an. Lässt Du ihn weg, hängt Dein Spiel automatisch den Port an, der lokal bei Dir eingestellt ist – und der entspricht in der Regel nicht dem Game Port Deines Servers.

## Über die Lobby-ID verbinden

s&box leitet Verbindungen standardmäßig über das Steam-Relay. Die IP-Adresse Deines Servers wird dabei nicht offengelegt, weshalb Facepunch selbst den Weg über die Lobby-ID empfiehlt. Diese ändert sich bei jedem Serverstart.

1. **Server-Konsole öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Server-Konsole**.

2. **Status abfragen**\
   Gib folgenden Befehl ein:

   ```text
   status
   ```

3. **Lobby-ID kopieren**\
   In der Ausgabe steht die Lobby-ID Deines Servers. Kopiere sie.

4. **Im Spiel verbinden**\
   Öffne im Spiel die Konsole und gib die Lobby-ID ohne weiteren Zusatz an:

   ```text
   connect 109775241234567890
   ```

> [!NOTE]
> Meldet `status` **Not Connected**, hat der Spielmodus noch keine Lobby erstellt. Warte, bis der Server vollständig hochgefahren ist, und frage den Status danach erneut ab.

## Welche Ports nutzt s&box?

> [!NOTE]
>
> | Wert | Verwendung |
> |------|------------|
> | Game Port | Hierüber verbinden sich die Spieler. Dieser Port gehört bei `connect` hinter den Doppelpunkt. |
> | Query Port | Hierüber wird der Server abgefragt: Servername, Map und Spielerzahl im Serverbrowser. |
>
> Welche Ports für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!TIP]
> Wird Dein Server im Browser nicht gefunden, nutze die Lobby-ID. Dieser Weg funktioniert unabhängig davon, ob Dein Server in der öffentlichen Liste auftaucht.
