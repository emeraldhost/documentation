---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Sons Of The Forest Server"
description: "Spieler auf einem Sons Of The Forest Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

Spieler kickst und bannst Du bei Sons Of The Forest direkt im Spiel über das Verwaltungsmenü. Voraussetzung ist, dass Du als Server-Owner eingetragen bist.

> [!NOTE]
> Sons Of The Forest hat **keine Konsolenbefehle** zum Kicken oder Bannen. Befehle wie `/kick` oder `/ban` stammen aus dem Vorgänger The Forest und funktionieren hier nicht. Die Verwaltung läuft ausschließlich über das Ingame-Menü.

## Voraussetzung

Deine SteamID64 muss in der Datei `ownerswhitelist.txt` auf dem Server eingetragen sein. Wie das geht, erklärt die Anleitung [Admin hinzufügen](/tutorials/gameserver/sons-of-the-forest/add-admin).

## Spieler kicken oder bannen

1. **Server beitreten**\
   Tritt Deinem Server mit dem Steam-Account bei, dessen SteamID64 als Owner eingetragen ist.

2. **Verwaltungsmenü öffnen**\
   Drücke `ESC` und wechsle auf den Reiter **Players**. Dort siehst Du alle aktuell verbundenen Spieler.

3. **Spieler auswählen**\
   Wähle in der Liste den Spieler aus, den Du entfernen möchtest.

4. **Kicken oder bannen**\
   Nutze die Verwaltungsfunktion des Spielers:

   - **Kick** entfernt den Spieler vom Server. Er kann anschließend wieder beitreten.
   - **Ban** entfernt den Spieler und sperrt ihn dauerhaft für Deinen Server.

> [!WARNING]
> Für das Aufheben eines Banns ist kein Weg über eine Server-Datei dokumentiert. Setze Banns deshalb bewusst ein und nutze für kurzfristige Maßnahmen lieber die Kick-Funktion.

> [!TIP]
> Beide Funktionen wirken nur auf Spieler, die gerade **verbunden** sind. Ein Spieler, der bereits offline ist, lässt sich über dieses Menü nicht mehr auswählen.
