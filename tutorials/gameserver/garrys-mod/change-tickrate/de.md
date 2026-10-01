---
slug: "tickrate-aendern"
language: "de"
title: "So änderst Du die Tickrate Deines Garry's Mod Servers"
description: "Die Tickrate eines Garry's Mod Servers ändern"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Tickrate ändern"
sort: 15
related: ["gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/enable-lua-refresh", "gameserver/garrys-mod/change-gamemode", "gameserver/garrys-mod/set-up-ttt"]
---
Die **Tickrate** legt fest, wie oft Dein Server pro Sekunde die Spielwelt berechnet und aktualisiert – also Bewegungen, Physik und Treffer. Eine Tickrate von 66 bedeutet zum Beispiel 66 Aktualisierungen pro Sekunde. Du stellst sie in den Einstellungen Deines Servers ein.

## Welche Tickrate ist sinnvoll?

Laut dem [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Command_Line_Parameters) liegt der empfohlene Bereich zwischen **30 und 128**, der Standardwert der Engine ist **66.6666**. Auf Deinem Server ist standardmäßig eine Tickrate von **22** eingestellt, in den Einstellungen kannst Du maximal **100** eintragen.

Der Standardwert von 22 liegt unter dem empfohlenen Bereich – Physik und Trefferabfrage wirken dadurch weniger flüssig. Für die meisten Server ist **33** oder **66** die bessere Wahl. Als Richtwert:

| Tickrate | Geeignet für |
| -------- | ------------ |
| `33` | Server mit vielen Props und Entities (z.B. DarkRP oder Sandbox) |
| `66` | Gamemodes mit schnellen Kämpfen (z.B. TTT) |

> [!WARNING]
> Je höher die Tickrate, desto öfter muss der Server pro Sekunde alles neu berechnen und desto mehr CPU-Last erzeugt jeder Spieler und jedes Entity. Auf Roleplay- und Sandbox-Servern mit vielen Props kann eine hohe Tickrate deshalb zu Lags führen.

## Tickrate einstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Tickrate eintragen**\
   Trage im Feld **Tickrate** den gewünschten Wert ein, z.B. `33`. Der Server startet damit mit dem Parameter:

   ```text
   -tickrate 33
   ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Tickrate überprüfen

1. **Konsole öffnen**\
   Öffne die Konsole in der Verwaltung Deines Servers, während der Server läuft.

2. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   lua_run print(1 / engine.TickInterval())
   ```

   Die Konsole gibt daraufhin die aktuelle Tickrate Deines Servers aus. Der Wert kann leicht vom eingetragenen Wert abweichen und Nachkommastellen haben, z.B. `66.666668` statt `66`.
