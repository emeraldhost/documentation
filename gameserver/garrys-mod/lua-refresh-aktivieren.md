---
description: Lua Refresh (Auto Refresh) auf einem Garry's Mod Server aktivieren und deaktivieren
---

# So aktivierst du Lua Refresh auf deinem Garry's Mod Server

Mit **Lua Refresh** (in Garry's Mod „Auto Refresh“ genannt) lädt dein Server geänderte Lua-Dateien automatisch neu, sobald sie auf dem Server gespeichert werden. So siehst du Änderungen an deinen Addons direkt, ohne den Server neu starten zu müssen. Auf unseren Servern ist Lua Refresh standardmäßig **deaktiviert**.

## Lua Refresh aktivieren

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Lua Refresh einschalten</b><br>
   Aktiviere die Einstellung **Lua Refresh**.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

Bearbeitest du jetzt eine Lua-Datei per [SFTP](../sftp-verbindung-herstellen.md) und speicherst sie, lädt der Server sie automatisch neu.

:::: tip Tipp
Eine bereits geladene Datei kannst du auch von Hand neu laden. Gib dazu in der Konsole folgenden Befehl ein:
```
lua_refresh_file <Pfad>
```
::::

:::: info Hinweis
Ist **Lua Refresh** ausgeschaltet, startet der Server mit dem Parameter `-disableluarefresh`, der Auto Refresh deaktiviert. Geänderte Lua-Dateien werden dann nicht mehr automatisch neu geladen.
::::

## Lua Refresh für den Live-Betrieb deaktivieren

Wir empfehlen, Lua Refresh nur einzuschalten, während du an deinen Addons arbeitest. Laut [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Auto_Refresh) kann Auto Refresh den Server ausbremsen, wenn das Bearbeiten bestimmter Lua-Dateien eine ganze Kette weiterer Neuladevorgänge auslöst. Lädst du während des laufenden Spielbetriebs Dateien hoch, kann das für deine Spieler zu Lags führen.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Lua Refresh ausschalten</b><br>
   Deaktiviere die Einstellung **Lua Refresh**.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Einschränkungen von Lua Refresh

Nicht jede Änderung wird automatisch übernommen. Auto Refresh funktioniert nur für Dateien, die das Spiel bzw. der Gamemode automatisch einbindet:

- Dateien in `autorun`
- Effects, Entities und Weapons
- die `init.lua` und `cl_init.lua` des Gamemodes sowie die Dateien, die von diesen eingebunden werden

Folgende Änderungen werden dagegen **nicht** automatisch neu geladen:

- Dateien, die dynamisch per `include` oder `AddCSLuaFile` eingebunden werden – je nach Fall werden sie gar nicht oder nur teilweise neu geladen
- Änderungen an der Basis-Datei einer Waffe oder eines Entities: Waffen und Entities, die darauf aufbauen, übernehmen die Änderung erst, wenn sie selbst neu geladen werden
- Auf Linux-Servern kann bei sehr vielen Dateien ein Systemlimit für die Dateiüberwachung erreicht werden. Einzelne Dateien werden dann nicht automatisch neu geladen

In diesen Fällen startest du deinen Server neu, damit die Änderungen geladen werden.

:::: warning Achtung
Beim Neuladen wird eine Lua-Datei komplett erneut ausgeführt. Addons, die nicht dafür ausgelegt sind, können dabei Daten in globalen Variablen verlieren. Entfernst du einen Hook, einen Netzwerk-Empfänger oder einen Konsolenbefehl aus dem Code, bleibt er außerdem bis zum nächsten Neustart aktiv. Verhält sich ein Addon nach einem Refresh seltsam, starte deinen Server neu.
::::
