---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem The Forest Server bei"
description: "Einem The Forest Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/kick-ban-players"]
---

The Forest hat **keine Direktverbindung über die IP-Adresse im Spielmenü**. Du findest Deinen Server entweder über den Serverbrowser des Spiels oder trägst ihn in Steam als Favoriten ein. Für den Eintrag in Steam benötigst Du den **Query Port** – nicht den Game Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Für den Eintrag in den Steam-Favoriten verwendest Du immer den **Query Port**, nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.

## Über den Serverbrowser im Spiel

1. **The Forest starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join Game**.

3. **Quelle umstellen**\
   Stelle die Quelle links auf **Dedicated (Internet)**. Bei den anderen Quellen wird Dein Server nicht angezeigt.

4. **Server suchen**\
   Gib in der Suchleiste den Namen Deines Servers ein.

5. **Server beitreten**\
   Wähle Deinen Server aus der Liste aus:

   - **Join** startet mit einem neuen Charakter.
   - **Continue** lädt Deinen bereits auf diesem Server gespeicherten Charakter.

## Über die Steam-Favoriten

Wenn Du gezielt über die IP-Adresse beitreten möchtest, trägst Du den Server in Steam ein. Das ersetzt die fehlende Direktverbindung im Spiel.

> [!NOTE]
> Dieser Schritt lässt sich ausschließlich in Steam erledigen, nicht im Spiel selbst.

1. **Steam öffnen**\
   Öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den **Query Port** Deines Servers ein:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:27016
   > ```

5. **Liste aktualisieren**\
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt.

6. **Server beitreten**\
   Starte The Forest, öffne **Multiplayer → Join Game** und stelle die Quelle auf **Favorites**. Dort erscheint Dein Server.

## Passwortgeschützter Server

Ist für Deinen Server ein Passwort gesetzt, erscheint in der Serverliste ein Schloss-Symbol. Beim Beitreten wirst Du jedes Mal nach dem Passwort gefragt.

> [!TIP]
> Im selben Fenster gibt es zusätzlich ein Feld für das **Admin-Passwort**. Trägst Du dort das Admin-Passwort Deines Servers ein, bist Du nach dem Beitritt Admin – siehe [Admin hinzufügen](/tutorials/gameserver/the-forest/add-admin).

## Welche Ports nutzt The Forest?

> [!NOTE]
> Ein The-Forest-Server belegt drei Ports:
>
> | Konfigurationswert | Standard | Verwendung |
> |--------------------|----------|------------|
> | `serverSteamPort` | `8766` | Kommunikation mit Steam |
> | `serverGamePort` | `27015` | Game Port, über den die Spieldaten laufen |
> | `serverQueryPort` | `27016` | Query Port – hierüber fragen Steam und der Serverbrowser den Server ab, und hierüber verbinden sich Spieler |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Taucht Dein Server im Serverbrowser nicht auf, trage ihn über die Steam-Favoriten mit dem Query Port ein. Über die Favoriten findest Du ihn unabhängig davon, ob er in der öffentlichen Liste erscheint.
