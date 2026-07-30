---
description: Admin auf einem Garry's Mod Server hinzufügen
---

# So fügst du einen Admin auf deinem Garry's Mod Server hinzu

Garry's Mod bringt ein eingebautes Rechtesystem mit den Gruppen `admin` und `superadmin` mit. Die Zuordnung erfolgt über die Datei `users.txt`.

:::: info Hinweis
Anders als im Einzelspieler- oder Listen-Server-Modus wirst du auf einem Dedicated Server **nicht** automatisch zum Superadmin. Du musst dich selbst eintragen.
::::

## SteamID herausfinden

Für die `users.txt` benötigst du die SteamID im Format `STEAM_0:x:xxxxxxx` — **nicht** die SteamID64.

:::: tip Tipp
Die SteamID eines verbundenen Spielers findest du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst du sie über die [SteamID](../steamid64-herausfinden.md) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.
::::

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /garrysmod/settings/users.txt
   ```

4. <b>Spieler eintragen</b><br>
   Trage die Spieler in die passende Gruppe ein. Links steht ein frei wählbarer Name, rechts die SteamID:

   ```
   "Users"
   {
   	"superadmin"
   	{
   		"MeinName"		"STEAM_0:1:12345678"
   	}

   	"admin"
   	{
   		"Freund"		"STEAM_0:0:87654321"
   	}
   }
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Datei wird nur beim Serverstart eingelesen. Ein Mapwechsel reicht nicht — der Server muss vollständig neu gestartet werden, damit die Änderungen greifen.
::::

:::: info Hinweis
Beim Beitreten bekommst du im Chat die Meldung `Hey '<Name>' - You're in the '<Gruppe>' group on this server.`. Erscheint stattdessen `Your SteamID wasn't fully authenticated, so your usergroup has not been set`, wird dir keine Gruppe zugewiesen — starte in dem Fall Steam neu und verbinde dich erneut.
::::

## Admin-Befehle mit ULX nutzen

Das eingebaute System vergibt nur die Rechte-Gruppen, aber keine Admin-Befehle oder Menüs. In der Praxis wird dafür **ULX** zusammen mit **ULib** eingesetzt.

1. <b>ULX und ULib installieren</b><br>
   Füge beide Addons deiner Workshop Collection hinzu ([ULX](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) mit der ID `557962280` und [ULib](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) mit der ID `557962238`) oder lade sie manuell in die Ordner `/garrysmod/addons/ulx/` und `/garrysmod/addons/ulib/` hoch. Wie das geht, steht in der Anleitung [Mods hinzufügen](mods-hinzufuegen.md).

2. <b>Server neu starten</b><br>
   Starte deinen Server vollständig neu.

3. <b>Rechte vergeben</b><br>
   Vergib die Rechte anschließend im Spiel oder über die Serverkonsole:

   ```
   ulx adduser <Name> superadmin
   ```

:::: danger Wichtig
ULX benötigt ULib, um zu funktionieren. Installiere immer beide Addons zusammen.
::::
