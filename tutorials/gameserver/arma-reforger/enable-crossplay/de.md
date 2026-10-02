---
slug: "crossplay-aktivieren"
language: "de"
title: "So nutzt Du Crossplay auf Deinem Arma Reforger Server"
description: "Crossplay auf einem Arma Reforger Server nutzen, damit Spieler auf PC, Xbox und PlayStation 5 gemeinsam spielen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Crossplay nutzen"
sort: 14
related: ["gameserver/arma-reforger/join-server", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/troubleshoot-server"]
---
Mit Crossplay können Spieler auf PC, Xbox und PlayStation 5 gemeinsam auf Deinem Server spielen. Auf Deinem Server ist Crossplay immer aktiv – Du musst dafür nichts einstellen.

## Crossplay ist immer aktiv

Beim Start Deines Servers wird in der `config.json` automatisch `"crossPlatform": true` gesetzt. Damit akzeptiert Dein Server Spieler von allen Plattformen:

| Plattform | Beitritt möglich |
|-----------|------------------|
| PC | Ja |
| Xbox | Ja |
| PlayStation 5 | Ja |

> [!WARNING]
> Crossplay lässt sich nicht deaktivieren. Änderst Du `crossPlatform` in der `config.json` auf `false`, wird der Wert beim nächsten Serverstart wieder auf `true` gesetzt. Welche Einträge die Verwaltung bei jedem Start überschreibt, erfährst Du unter [Server konfigurieren](/tutorials/gameserver/arma-reforger/configure-server).

## Darauf solltest Du für Konsolenspieler achten

Wenn Spieler auf Xbox und PlayStation 5 auf Deinem Server mitspielen sollen, beachte diese zwei Punkte.

### Mods für Konsolen

Nicht jeder Mod ist auch für Xbox und PlayStation 5 verfügbar. Ist ein Mod aus dem Bereich `"mods"` der `config.json` auf einer Konsole nicht verfügbar, können Spieler dieser Konsole Deinem Server unter Umständen nicht beitreten. Lass deshalb nach dem Hinzufügen neuer Mods einen Konsolenspieler den Beitritt testen.

Wie Du Mods einträgst, erfährst Du in der Anleitung [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods).

### BattlEye eingeschaltet lassen

Lass für Konsolenspieler BattlEye eingeschaltet. Ohne BattlEye wird Dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt. So prüfst Du die Einstellung:

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Battle-Eye prüfen**\
   Stelle sicher, dass im Feld **Battle-Eye** der Wert `true` eingetragen ist.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## So treten Konsolenspieler Deinem Server bei

Konsolenspieler finden Deinen Server über die Suche im Server-Browser. Dafür muss Dein Server dort sichtbar sein.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Sichtbarkeit prüfen**\
   Stelle sicher, dass im Feld **Sichtbar im Server-Browser** der Wert `true` eingetragen ist.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

5. **Server suchen**\
   Die Spieler öffnen in Arma Reforger den **Multiplayer**-Bereich und suchen dort nach dem Namen Deines Servers.

> [!NOTE]
> Eine ausführliche Anleitung zum Beitreten findest Du unter [Server beitreten](/tutorials/gameserver/arma-reforger/join-server).
