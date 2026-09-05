---
slug: "rcon-verwenden"
language: "de"
title: "So verwendest Du RCON auf Deinem Insurgency: Sandstorm Server"
description: "RCON auf einem Insurgency: Sandstorm Server verwenden"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "RCON verwenden"
sort: 15
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server", "gameserver/insurgency-sandstorm/team-kill-settings"]
---

Über RCON kannst Du Deinen Server fernsteuern und moderieren – z.B. Spieler kicken oder bannen, die Map wechseln oder Nachrichten senden. Die Befehle lassen sich über ein RCON-Tool oder direkt über die Server-Konsole in der Verwaltung ausführen.

## RCON-Zugangsdaten

RCON ist auf Deinem Server **bereits aktiviert** – Du musst nichts in der Konfiguration einrichten. Du benötigst lediglich das RCON-Passwort und den RCON-Port:

- **RCON-Passwort**\
  Das Passwort findest und änderst Du in der Verwaltung im Feld **RCON Passwort**.

- **RCON-Port**\
  Den RCON-Port findest Du in der Verwaltung in der **Port-Übersicht**.

> [!WARNING]
> Behandle das RCON-Passwort wie ein Admin-Passwort und teile es nur mit vertrauenswürdigen Personen. Ändere das Standard-Passwort vor dem ersten Einsatz.

## Mit einem RCON-Tool verbinden

1. **RCON-Tool öffnen**\
   Öffne ein RCON-Tool wie **mcrcon** oder einen vergleichbaren RCON-Client.

2. **Verbindungsdaten eingeben**
   - **Host:** die IP-Adresse Deines Servers (ohne Port)
   - **Port:** der RCON-Port aus der Verwaltung
   - **Passwort:** Dein RCON-Passwort aus der Verwaltung

3. **Befehle ausführen**\
   Nach erfolgreicher Verbindung kannst Du die untenstehenden Befehle ausführen.

> [!TIP]
> Du kannst RCON-Befehle auch direkt über die **Server-Konsole** in der Verwaltung eingeben – ganz ohne externes Tool.

## RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `help` | Zeigt eine Liste aller Befehle an |
| `listplayers` | Listet alle verbundenen Spieler auf |
| `kick [id/netid/name] [Grund]` | Kickt einen Spieler vom Server |
| `ban [id/netid/name] [Minuten] [Grund]` | Bannt einen Spieler für die angegebene Zeit |
| `permaban [id/netid/name] [Grund]` | Bannt einen Spieler dauerhaft |
| `unban [id/netid/name]` | Hebt den Bann eines Spielers auf |
| `listban` | Zeigt die Liste gebannter Spieler an |
| `say [Nachricht]` | Sendet eine Nachricht an alle Spieler |
| `travel [Travel-URL]` | Wechselt den Server auf eine andere Map |
| `travelscenario [Szenario]` | Wechselt auf ein anderes Szenario |
| `restartround [0, 1]` | Startet die aktuelle Runde neu (`1` tauscht zusätzlich die Teams) |
| `maps [Filter]` | Listet verfügbare Maps auf |
| `scenarios [Filter]` | Listet verfügbare Szenarien auf |
| `listgamemodeproperties [Filter]` | Listet alle Eigenschaften des aktuellen Spielmodus auf |
| `gamemodeproperty [Eigenschaft] [Wert]` | Setzt oder zeigt eine Spielmodus-Eigenschaft an |
