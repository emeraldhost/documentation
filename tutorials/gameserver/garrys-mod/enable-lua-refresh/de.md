---
slug: "lua-refresh-aktivieren"
language: "de"
title: "So aktivierst Du Lua Refresh auf Deinem Garry's Mod Server"
description: "Lua Refresh (Auto Refresh) auf einem Garry's Mod Server aktivieren und deaktivieren"
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
short_title: "Lua Refresh aktivieren"
sort: 16
related: ["gameserver/garrys-mod/install-darkrp", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/change-tickrate", "gameserver/garrys-mod/configure-server"]
---
Mit **Lua Refresh** (in Garry's Mod „Auto Refresh“ genannt) lädt Dein Server geänderte Lua-Dateien automatisch neu, sobald sie auf dem Server gespeichert werden. So siehst Du Änderungen an Deinen Addons direkt, ohne den Server neu starten zu müssen. Auf unseren Servern ist Lua Refresh standardmäßig **deaktiviert**.

## Lua Refresh aktivieren

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Lua Refresh einschalten**\
   Aktiviere die Einstellung **Lua Refresh**.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

Bearbeitest Du jetzt eine Lua-Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection) und speicherst sie, lädt der Server sie automatisch neu.

> [!TIP]
> Eine bereits geladene Datei kannst Du auch von Hand neu laden. Gib dazu in der Konsole folgenden Befehl ein:
>
> ```text
> lua_refresh_file <Pfad>
> ```

> [!NOTE]
> Ist **Lua Refresh** ausgeschaltet, startet der Server mit dem Parameter `-disableluarefresh`, der Auto Refresh deaktiviert. Geänderte Lua-Dateien werden dann nicht mehr automatisch neu geladen.

## Lua Refresh für den Live-Betrieb deaktivieren

Wir empfehlen, Lua Refresh nur einzuschalten, während Du an Deinen Addons arbeitest. Laut [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Auto_Refresh) kann Auto Refresh den Server ausbremsen, wenn das Bearbeiten bestimmter Lua-Dateien eine ganze Kette weiterer Neuladevorgänge auslöst. Lädst Du während des laufenden Spielbetriebs Dateien hoch, kann das für Deine Spieler zu Lags führen.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Lua Refresh ausschalten**\
   Deaktiviere die Einstellung **Lua Refresh**.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Einschränkungen von Lua Refresh

Nicht jede Änderung wird automatisch übernommen. Auto Refresh funktioniert nur für Dateien, die das Spiel bzw. der Gamemode automatisch einbindet:

- Dateien in `autorun`
- Effects, Entities und Weapons
- die `init.lua` und `cl_init.lua` des Gamemodes sowie die Dateien, die von diesen eingebunden werden

Folgende Änderungen werden dagegen **nicht** automatisch neu geladen:

- Dateien, die dynamisch per `include` oder `AddCSLuaFile` eingebunden werden – je nach Fall werden sie gar nicht oder nur teilweise neu geladen
- Änderungen an der Basis-Datei einer Waffe oder eines Entities: Waffen und Entities, die darauf aufbauen, übernehmen die Änderung erst, wenn sie selbst neu geladen werden
- Auf Linux-Servern kann bei sehr vielen Dateien ein Systemlimit für die Dateiüberwachung erreicht werden. Einzelne Dateien werden dann nicht automatisch neu geladen

In diesen Fällen startest Du Deinen Server neu, damit die Änderungen geladen werden.

> [!WARNING]
> Beim Neuladen wird eine Lua-Datei komplett erneut ausgeführt. Addons, die nicht dafür ausgelegt sind, können dabei Daten in globalen Variablen verlieren. Entfernst Du einen Hook, einen Netzwerk-Empfänger oder einen Konsolenbefehl aus dem Code, bleibt er außerdem bis zum nächsten Neustart aktiv. Verhält sich ein Addon nach einem Refresh seltsam, starte Deinen Server neu.
