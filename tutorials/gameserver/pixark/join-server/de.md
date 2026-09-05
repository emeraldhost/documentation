---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem PixARK Server bei"
description: "Einem PixARK Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

Deinen eigenen PixARK Server erreichst Du am zuverlässigsten, indem Du ihn zuerst in Steam als Favorit hinterlegst und anschließend im Spiel aus der Favoritenliste beitrittst. Entscheidend dabei: In Steam trägst Du den **Query Port** ein und **nicht** den Game Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Query Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Die Ports werden Dir dort zugewiesen – nimm immer die Werte aus der Verwaltung und keine Standardwerte aus dem Internet.

## Server in Steam als Favorit hinterlegen

1. **Steam öffnen**\
   Öffne den Steam-Client auf Deinem PC.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favoriten** und klicke unten rechts auf **+**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den **Query Port** Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   123.45.67.89:QUERYPORT
   ```

   > [!WARNING]
   > Der Game Port funktioniert an dieser Stelle nicht. Steam fragt den Server ausschließlich über den Query Port ab – trägst Du den falschen Port ein, bleibt der Server offline oder taucht gar nicht erst auf.

5. **Eintrag bestätigen**\
   Bestätige die Eingabe. Dein Server erscheint anschließend in der Favoritenliste. Läuft er, siehst Du dort auch den Servernamen und die Spielerzahl.

## Im Spiel beitreten

1. **PixARK starten**\
   Starte PixARK auf Deinem PC.

2. **Serverliste öffnen**\
   Öffne im Hauptmenü die Übersicht der Multiplayer-Server.

3. **Auf Favoriten filtern**\
   Stelle den Filter auf **Favoriten**. Dein Server erscheint nun in der Liste.

4. **Beitreten**\
   Wähle Deinen Server aus und tritt ihm bei.

## Server mit Passwort

> [!WARNING]
> Ist auf Deinem Server ein Passwort gesetzt, gib es **erst im Spiel** ein, nachdem Du den Beitritt gestartet hast. Trägst Du das Passwort stattdessen im Steam-Server-Browser ein, kann es passieren, dass Du zwar verbunden wirst, die Welt aber nicht korrekt lädt.

## Welche Ports nutzt PixARK?

> [!NOTE]
> Ein PixARK Server belegt vier Ports. Welche Nummern Dein Server verwendet, siehst Du in der **Verwaltung**:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Die eigentliche Spielverbindung |
> | Query Port | UDP | Serverabfrage – hierüber findet Steam Deinen Server, diesen Port trägst Du in den Favoriten ein |
> | RCON Port | TCP | Fernwartung des Servers per RCON |
> | Cube Port | TCP | Überträgt die Änderungen an der Voxel-Welt (Terrain) |
>
> Der Cube Port ist eine Besonderheit von PixARK: Ist er nicht erreichbar, kannst Du Dich zwar verbinden, die Blockwelt wird aber nicht oder nur unvollständig übertragen.

> [!TIP]
> Taucht Dein Server nach dem Hinzufügen nicht in den Favoriten auf, prüfe zuerst, ob er in der Verwaltung wirklich läuft, und kontrolliere anschließend, ob Du wirklich den Query Port und nicht den Game Port eingetragen hast.
