---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf einem The Bus Server"
description: "Map auf einem The Bus Server ändern"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 9
related: ["gameserver/the-bus/add-admin", "gameserver/the-bus/change-fleet", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-ticket-chance"]
---

Die Basiskarte von The Bus ist **Berlin** mit den Linien TXL, 100, N100, 123, 142, 147, 200, 245 und 300. Weitere Karten kommen aus DLCs (aktuell das DLC Hamburg City, im Spiel als Karte **Hamburg** auswählbar) oder aus Map-Mods, die Du im Ordner `/TheBus/Mods/` installierst.

Du kannst die aktive Karte über das **Admin-Menü** oder per **Befehl** im Ingame-Chat ändern.

> [!NOTE]
> Alle Spieler benötigen das DLC der jeweiligen Karte bzw. die Map-Mod, sofern diese auch auf dem Client benötigt wird, um auf der Karte beitreten und spielen zu können.

> [!TIP]
> Erstelle vor einem Kartenwechsel ein [Backup](/tutorials/gameserver/the-bus/create-backup). Savegames und Fahrpläne gehören jeweils zu einer bestimmten Karte.

## So änderst Du die Map über das Admin-Menü

1. **Server beitreten**\
   Tritt Deinem Server im Spiel bei, siehe [Server beitreten](/tutorials/gameserver/the-bus/join-server).

2. **Admin-Menü öffnen**\
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**. Bist Du noch kein Admin, gib das Admin-Passwort Deines Servers ein, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

3. **Karte auswählen**\
   Wähle im Admin-Menü die gewünschte Karte aus.

> [!NOTE]
> Seit Update 3.2 EA wird die im Admin-Menü gewählte Karte gespeichert und bleibt auch nach einem Neustart Deines Servers erhalten.

## So änderst Du die Map per Befehl

Alternativ kannst Du die Karte über den Ingame-Chat wechseln. Dafür benötigst Du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

1. **Verfügbare Karten anzeigen**\
   Gib folgenden Befehl im Ingame-Chat ein, um alle verfügbaren Karten aufzulisten:

   ```text
   /mapList
   ```

2. **Karte wechseln**\
   Gib folgenden Befehl ein und ersetze `<Kartenname>` durch den Namen der Karte genau so, wie ihn `/mapList` ausgibt:

   ```text
   /map <Kartenname>
   ```

   Für die Hamburg-Karte lautet der Befehl zum Beispiel:

   ```text
   /map Hamburg
   ```

   > [!TIP]
   > Um zurück zur Standardkarte Berlin zu wechseln, verwende `/map` mit dem Namen, den `/mapList` für Berlin ausgibt.

> [!NOTE]
> Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So fügst Du weitere Karten hinzu

- Eine vollständige Anleitung für den Wechsel auf Hamburg findest Du unter [DLC-Karte spielen](/tutorials/gameserver/the-bus/add-dlc-map).
- Wie Du Map-Mods installierst, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/the-bus/add-mods).
