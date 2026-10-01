---
description: Eigenen Ladebildschirm auf einem Garry's Mod Server einrichten
---

# So richtest du einen Ladebildschirm auf deinem Garry's Mod Server ein

Während Spieler deinem Server beitreten, zeigt Garry's Mod einen Ladebildschirm an. Statt des Standard-Ladebildschirms kannst du eine eigene Webseite anzeigen lassen, zum Beispiel mit deinem Serverlogo, deinen Regeln oder einem Fortschrittsbalken. Dafür nutzt du die ConVar `sv_loadingurl`.

:::: info Hinweis
Der Ladebildschirm ist eine **Webseite**. Sie liegt nicht auf deinem Gameserver, sondern muss unter einer eigenen Adresse im Internet erreichbar sein, zum Beispiel `https://example.com/loading/`. Du kannst sie auf deinem eigenen Webspace hosten oder einen der kostenlosen Ladebildschirm-Generatoren weiter unten verwenden.
::::

## Ladebildschirm-Seite erstellen

Wenn du keine eigene Webseite programmieren möchtest, kannst du einen kostenlosen Generator nutzen. Das Garry's Mod Wiki nennt folgende Angebote:

| Angebot | Beschreibung |
| ------- | ------------ |
| [gmod-lsm.com](https://www.gmod-lsm.com) | Kostenloser Online-Editor für Ladebildschirme, ohne Programmierung und ohne eigenen Webserver |
| [gmodload.com](https://gmodload.com/) | Kostenloser Ladebildschirm-Ersteller ohne Programmierung und ohne eigenen Webserver |
| [Load Seed](https://github.com/glua/load-seed) | Vorlage auf GitHub, um einen eigenen Ladebildschirm zu entwickeln |

Am Ende brauchst du in jedem Fall die vollständige Adresse deines Ladebildschirms, zum Beispiel `https://example.com/loading/`.

## Ladebildschirm in der autoexec.cfg eintragen

Das Garry's Mod Wiki beschreibt die Datei `autoexec.cfg` als Speicherort für `sv_loadingurl`. Die `server.cfg` deines Servers enthält bereits eine leere Zeile `sv_loadingurl ""` und wird nach der `autoexec.cfg` ausgeführt. Diese Zeile entfernst du deshalb zuerst, sonst würde sie deine Adresse wieder mit einem leeren Wert überschreiben.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Leere Zeile aus der server.cfg entfernen</b><br>
   Öffne folgende Datei:

   ```
   /garrysmod/cfg/server.cfg
   ```

   Lösche dort die Zeile `sv_loadingurl ""` und speichere die Datei.

4. <b>Adresse in der autoexec.cfg eintragen</b><br>
   Öffne folgende Datei. Lege sie an, falls sie noch nicht existiert:

   ```
   /garrysmod/cfg/autoexec.cfg
   ```

   Trage dort die Adresse deines Ladebildschirms ein:

   ```
   sv_loadingurl "https://example.com/loading/"
   ```

   :::: warning Achtung
   Die Adresse muss in Anführungszeichen stehen. Lege keine zweite `sv_loadingurl`-Zeile an, sonst gilt nur der zuletzt gelesene Wert.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Spielerdaten an die Seite übergeben

In der Adresse kannst du zwei Platzhalter verwenden, die Garry's Mod beim Verbinden automatisch ersetzt:

| Platzhalter | Wird ersetzt durch |
| ----------- | ------------------ |
| `%s` | Die 64-Bit-SteamID (SteamID64) des verbindenden Spielers |
| `%m` | Den Namen der aktuellen Map |

:::: tip Beispiel
```
sv_loadingurl "https://example.com/loading/?steamid=%s&map=%m"
```
Ein Spieler mit der SteamID64 `76561198000000001` sieht auf der Map `gm_flatgrass` dann die Seite `https://example.com/loading/?steamid=76561198000000001&map=gm_flatgrass`.
::::

Deine Webseite kann diese Werte als URL-Parameter auslesen, um zum Beispiel die aktuelle Map anzuzeigen oder Spieler anhand ihrer SteamID wiederzuerkennen.

## Ladefortschritt per JavaScript anzeigen

Garry's Mod ruft während des Ladens JavaScript-Funktionen auf deiner Seite auf. Damit kannst du zum Beispiel den aktuellen Status oder einen Download-Fortschritt anzeigen. Diesen Abschnitt brauchst du nur, wenn du die Seite selbst programmierst.

| Funktion | Wird aufgerufen |
| -------- | --------------- |
| `GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language)` | Zu Beginn, mit Informationen zum Server und zum Spieler |
| `SetFilesTotal(total)` | Zu Beginn, mit der Gesamtzahl der herunterzuladenden Dateien |
| `DownloadingFile(fileName)` | Wenn der Spieler eine Datei herunterzuladen beginnt |
| `SetStatusChanged(status)` | Wenn sich der Verbindungsstatus ändert, z.B. „Starting Lua...“ |
| `SetFilesNeeded(needed)` | Wenn sich die Zahl der noch benötigten Dateien ändert |

Die Funktionen müssen am `window`-Objekt deiner Seite hängen:

```
window.SetStatusChanged = function(status) {
    document.getElementById("status").textContent = status;
};
```

:::: info Hinweis
`volume` enthält die Musiklautstärke des Spielers (`snd_musicvolume`, von 0 bis 1) und `language` seine Spielsprache (`gmod_language`) als Kürzel aus zwei Buchstaben. `SetStatusChanged` wird normalerweise erst aufgerufen, wenn das Spiel mit den Dateien oder dem Workshop-Download beginnt. Frühere Status wie „Retrieving server info“ erreichen deine Seite in der Regel nicht.
::::

## Ladebildschirm testen

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server, wie in [So trittst du deinem Garry's Mod Server bei](server-beitreten.md) beschrieben.

2. <b>Ladebildschirm prüfen</b><br>
   Während des Verbindens sollte nun deine eigene Seite angezeigt werden.

3. <b>Nach Änderungen neu verbinden</b><br>
   Hast du an der Seite oder an der Adresse etwas geändert, trenne die Verbindung und verbinde dich erneut, um das Ergebnis zu sehen. Änderungen an der `autoexec.cfg` werden erst nach einem Neustart des Servers übernommen.

:::: tip Tipp
Erscheint weiterhin der Standard-Ladebildschirm, öffne die Adresse zuerst in deinem normalen Browser. Lädt die Seite dort nicht, ist sie auch im Spiel nicht erreichbar. Prüfe außerdem, ob die Zeile in der `autoexec.cfg` korrekt geschrieben ist und in Anführungszeichen steht.
::::
