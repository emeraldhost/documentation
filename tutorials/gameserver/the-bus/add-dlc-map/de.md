---
slug: "dlc-karte-hinzufuegen"
language: "de"
title: "So spielst Du eine DLC-Karte auf Deinem The Bus Server"
description: "DLC-Karte wie Hamburg City auf einem The Bus Server spielen"
tags: []
date: "2026-10-05"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "DLC-Karte hinzufügen"
sort: 21
related: ["gameserver/the-bus/change-map", "gameserver/the-bus/activate-dlc", "gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-fleet"]
---
Die Standardkarte von The Bus ist **Berlin**. Zusätzliche Karten kommen als DLC hinzu. Aktuell ist **Hamburg City (by Halycon)** das einzige veröffentlichte Karten-DLC. Es erschien am 31. Juli 2025. Weitere Karten wie **New York City**, **London South** und **Lübeck** sind angekündigt, aber noch nicht erschienen.

Seit **Update 1.2** funktioniert Hamburg auch auf dedizierten Servern zuverlässig. In dieser Anleitung erfährst Du, wie Du Deinen Server von Berlin auf Hamburg umstellst.

## Voraussetzungen

- **Alle Spieler besitzen das DLC:** Jeder Spieler, der auf der Karte spielen möchte, muss das DLC **Hamburg City** auf Steam besitzen. Alle Spieler müssen dieselben DLCs besitzen, um sie gemeinsam nutzen zu können.
- **Spiel und Server sind aktuell:** Halte Dein Spiel und Deinen Server auf dem neuesten Stand. Setze dazu in der Verwaltung unter **Einstellungen** das Feld **Auto Update** auf `1`, dann aktualisiert sich Dein Server bei jedem Start automatisch.
- **Admin-Rechte:** Du benötigst Owner- oder Admin-Rechte oder das Admin-Passwort Deines Servers, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

> [!NOTE]
> Für ein offizielles DLC musst Du nichts auf Deinen Server hochladen. Du wählst die Karte einfach im Spiel aus.

> [!IMPORTANT]
> Erstelle vor dem Kartenwechsel ein [Backup](/tutorials/gameserver/the-bus/create-backup). Fahrplan und Flotte wählst Du nach dem Wechsel passend zur neuen Karte.

## So wechselst Du die Karte über das Admin-Menü

1. **Server beitreten**\
   Tritt Deinem Server im Spiel bei, siehe [Server beitreten](/tutorials/gameserver/the-bus/join-server).

2. **Admin-Menü öffnen**\
   Öffne das Pausenmenü und wähle das **Admin-Menü**. Hast Du keinen Admin-Rang, gib das Admin-Passwort Deines Servers ein.

3. **Karte auswählen**\
   Wähle unter **Map** die Karte **Hamburg** aus.

> [!NOTE]
> Die im Admin-Menü gewählte Karte wird in den Servereinstellungen gespeichert und bleibt auch nach einem Neustart Deines Servers erhalten.

## So wechselst Du die Karte per Chat-Befehl

Alternativ kannst Du die Karte über den Ingame-Chat wechseln.

1. **Verfügbare Karten anzeigen**\
   Gib folgenden Befehl im Ingame-Chat ein, um alle verfügbaren Karten aufzulisten:

   ```text
   /mapList
   ```

   Die Hamburg-Karte erscheint dort als `Hamburg`.

2. **Karte wechseln**\
   Gib folgenden Befehl ein:

   ```text
   /map Hamburg
   ```

> [!NOTE]
> Diese Befehle funktionieren nur im Ingame-Chat und erfordern Owner- oder Admin-Rechte. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## Fahrplan und Flotte anpassen

Nach dem Kartenwechsel wählst Du einen passenden Fahrplan und eine passende Flotte für die neue Karte:

- [Fahrplan ändern](/tutorials/gameserver/the-bus/change-operating-plan)
- [Flotte ändern](/tutorials/gameserver/the-bus/change-fleet)

Hamburg bringt eigene Linien mit: **6**, **7**, **17**, **218** und **277** sowie eine Variante als Nachtlinie **617**.

## DLC auf dem Server aktivieren

Mit dem Befehl `/dlc` aktivierst oder deaktivierst Du ein DLC auf Deinem Server. Wie das funktioniert, erfährst Du unter [DLC aktivieren](/tutorials/gameserver/the-bus/activate-dlc).

## So wechselst Du zurück zu Berlin

Der Wechsel zurück zur Standardkarte funktioniert genauso: Wähle im **Admin-Menü** unter **Map** die Karte Berlin oder verwende `/map` mit dem Namen, den `/mapList` für Berlin ausgibt. Wähle danach wieder einen passenden Fahrplan und eine passende Flotte.

## Probleme beim Kartenwechsel

| Problem | Lösung |
|---------|--------|
| Die Karte wird nicht angezeigt | Aktualisiere Deinen Server (Feld **Auto Update** auf `1` und Server neu starten) und Dein Spiel. Halte Server und Spiel auf dem neuesten Stand. |
| Spieler können nicht beitreten | Ist auf Deinem Server festgelegt, dass Spieler das DLC zum Beitreten besitzen müssen, können Spieler ohne das DLC nicht beitreten. Prüfe außerdem, ob Server und Spiel auf dem neuesten Stand sind. Alle Spieler müssen dieselben DLCs besitzen, um sie gemeinsam nutzen zu können. |

> [!TIP]
> Weitere Lösungen für häufige Probleme findest Du unter [Server-Probleme beheben](/tutorials/gameserver/the-bus/troubleshoot-server).
