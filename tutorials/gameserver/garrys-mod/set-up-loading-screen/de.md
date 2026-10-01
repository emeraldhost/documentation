---
slug: "ladebildschirm-einrichten"
language: "de"
title: "So richtest Du einen Ladebildschirm auf Deinem Garry's Mod Server ein"
description: "Eigenen Ladebildschirm auf einem Garry's Mod Server einrichten"
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
short_title: "Ladebildschirm einrichten"
sort: 13
related: ["gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/set-up-fastdl", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/add-mods"]
---
Während Spieler Deinem Server beitreten, zeigt Garry's Mod einen Ladebildschirm an. Statt des Standard-Ladebildschirms kannst Du eine eigene Webseite anzeigen lassen, zum Beispiel mit Deinem Serverlogo, Deinen Regeln oder einem Fortschrittsbalken. Dafür nutzt Du die ConVar `sv_loadingurl`.

> [!NOTE]
> Der Ladebildschirm ist eine **Webseite**. Sie liegt nicht auf Deinem Gameserver, sondern muss unter einer eigenen Adresse im Internet erreichbar sein, zum Beispiel `https://example.com/loading/`. Du kannst sie auf Deinem eigenen Webspace hosten oder einen der kostenlosen Ladebildschirm-Generatoren weiter unten verwenden.

## Ladebildschirm-Seite erstellen

Wenn Du keine eigene Webseite programmieren möchtest, kannst Du einen kostenlosen Generator nutzen. Das Garry's Mod Wiki nennt folgende Angebote:

| Angebot | Beschreibung |
| ------- | ------------ |
| [gmod-lsm.com](https://www.gmod-lsm.com) | Kostenloser Online-Editor für Ladebildschirme, ohne Programmierung und ohne eigenen Webserver |
| [gmodload.com](https://gmodload.com/) | Kostenloser Ladebildschirm-Ersteller ohne Programmierung und ohne eigenen Webserver |
| [Load Seed](https://github.com/glua/load-seed) | Vorlage auf GitHub, um einen eigenen Ladebildschirm zu entwickeln |

Am Ende brauchst Du in jedem Fall die vollständige Adresse Deines Ladebildschirms, zum Beispiel `https://example.com/loading/`.

## Ladebildschirm in der autoexec.cfg eintragen

Das Garry's Mod Wiki beschreibt die Datei `autoexec.cfg` als Speicherort für `sv_loadingurl`. Die `server.cfg` Deines Servers enthält bereits eine leere Zeile `sv_loadingurl ""` und wird nach der `autoexec.cfg` ausgeführt. Diese Zeile entfernst Du deshalb zuerst, sonst würde sie Deine Adresse wieder mit einem leeren Wert überschreiben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Leere Zeile aus der server.cfg entfernen**\
   Öffne folgende Datei:

   ```text
   /garrysmod/cfg/server.cfg
   ```

   Lösche dort die Zeile `sv_loadingurl ""` und speichere die Datei.

4. **Adresse in der autoexec.cfg eintragen**\
   Öffne folgende Datei. Lege sie an, falls sie noch nicht existiert:

   ```text
   /garrysmod/cfg/autoexec.cfg
   ```

   Trage dort die Adresse Deines Ladebildschirms ein:

   ```text
   sv_loadingurl "https://example.com/loading/"
   ```

   > [!WARNING]
   > Die Adresse muss in Anführungszeichen stehen. Lege keine zweite `sv_loadingurl`-Zeile an, sonst gilt nur der zuletzt gelesene Wert.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Spielerdaten an die Seite übergeben

In der Adresse kannst Du zwei Platzhalter verwenden, die Garry's Mod beim Verbinden automatisch ersetzt:

| Platzhalter | Wird ersetzt durch |
| ----------- | ------------------ |
| `%s` | Die 64-Bit-SteamID (SteamID64) des verbindenden Spielers |
| `%m` | Den Namen der aktuellen Map |

> [!TIP]
> **Beispiel**
>
> ```text
> sv_loadingurl "https://example.com/loading/?steamid=%s&map=%m"
> ```
>
> Ein Spieler mit der SteamID64 `76561198000000001` sieht auf der Map `gm_flatgrass` dann die Seite `https://example.com/loading/?steamid=76561198000000001&map=gm_flatgrass`.

Deine Webseite kann diese Werte als URL-Parameter auslesen, um zum Beispiel die aktuelle Map anzuzeigen oder Spieler anhand ihrer SteamID wiederzuerkennen.

## Ladefortschritt per JavaScript anzeigen

Garry's Mod ruft während des Ladens JavaScript-Funktionen auf Deiner Seite auf. Damit kannst Du zum Beispiel den aktuellen Status oder einen Download-Fortschritt anzeigen. Diesen Abschnitt brauchst Du nur, wenn Du die Seite selbst programmierst.

| Funktion | Wird aufgerufen |
| -------- | --------------- |
| `GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language)` | Zu Beginn, mit Informationen zum Server und zum Spieler |
| `SetFilesTotal(total)` | Zu Beginn, mit der Gesamtzahl der herunterzuladenden Dateien |
| `DownloadingFile(fileName)` | Wenn der Spieler eine Datei herunterzuladen beginnt |
| `SetStatusChanged(status)` | Wenn sich der Verbindungsstatus ändert, z.B. „Starting Lua...“ |
| `SetFilesNeeded(needed)` | Wenn sich die Zahl der noch benötigten Dateien ändert |

Die Funktionen müssen am `window`-Objekt Deiner Seite hängen:

```text
window.SetStatusChanged = function(status) {
    document.getElementById("status").textContent = status;
};
```

> [!NOTE]
> `volume` enthält die Musiklautstärke des Spielers (`snd_musicvolume`, von 0 bis 1) und `language` seine Spielsprache (`gmod_language`) als Kürzel aus zwei Buchstaben. `SetStatusChanged` wird normalerweise erst aufgerufen, wenn das Spiel mit den Dateien oder dem Workshop-Download beginnt. Frühere Status wie „Retrieving server info“ erreichen Deine Seite in der Regel nicht.

## Ladebildschirm testen

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server, wie in [So trittst Du Deinem Garry's Mod Server bei](/tutorials/gameserver/garrys-mod/join-server) beschrieben.

2. **Ladebildschirm prüfen**\
   Während des Verbindens sollte nun Deine eigene Seite angezeigt werden.

3. **Nach Änderungen neu verbinden**\
   Hast Du an der Seite oder an der Adresse etwas geändert, trenne die Verbindung und verbinde Dich erneut, um das Ergebnis zu sehen. Änderungen an der `autoexec.cfg` werden erst nach einem Neustart des Servers übernommen.

> [!TIP]
> Erscheint weiterhin der Standard-Ladebildschirm, öffne die Adresse zuerst in Deinem normalen Browser. Lädt die Seite dort nicht, ist sie auch im Spiel nicht erreichbar. Prüfe außerdem, ob die Zeile in der `autoexec.cfg` korrekt geschrieben ist und in Anführungszeichen steht.
