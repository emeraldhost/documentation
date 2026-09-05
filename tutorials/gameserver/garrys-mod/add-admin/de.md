---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Garry's Mod Server hinzu"
description: "Admin auf einem Garry's Mod Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/join-server", "gameserver/garrys-mod/kick-ban-players"]
---

Garry's Mod bringt ein eingebautes Rechtesystem mit den Gruppen `admin` und `superadmin` mit. Die Zuordnung erfolgt über die Datei `users.txt`.

> [!NOTE]
> Anders als im Einzelspieler- oder Listen-Server-Modus wirst Du auf einem Dedicated Server **nicht** automatisch zum Superadmin. Du musst Dich selbst eintragen.

## SteamID herausfinden

Für die `users.txt` benötigst Du die SteamID im Format `STEAM_0:x:xxxxxxx` – **nicht** die SteamID64.

> [!TIP]
> Die SteamID eines verbundenen Spielers findest Du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst Du sie über die [SteamID](/tutorials/gameserver/steamid64-find-out) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne folgende Datei:

   ```text
   /garrysmod/settings/users.txt
   ```

4. **Spieler eintragen**\
   Trage die Spieler in die passende Gruppe ein. Links steht ein frei wählbarer Name, rechts die SteamID:

   ```text
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

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Datei wird nur beim Serverstart eingelesen. Ein Mapwechsel reicht nicht – der Server muss vollständig neu gestartet werden, damit die Änderungen greifen.

> [!NOTE]
> Beim Beitreten bekommst Du im Chat die Meldung `Hey '<Name>' - You're in the '<Gruppe>' group on this server.`. Erscheint stattdessen `Your SteamID wasn't fully authenticated, so your usergroup has not been set`, wird Dir keine Gruppe zugewiesen – starte in dem Fall Steam neu und verbinde Dich erneut.

## Admin-Befehle mit ULX nutzen

Das eingebaute System vergibt nur die Rechte-Gruppen, aber keine Admin-Befehle oder Menüs. In der Praxis wird dafür **ULX** zusammen mit **ULib** eingesetzt.

1. **ULX und ULib installieren**\
   Füge beide Addons Deiner Workshop Collection hinzu ([ULX](https://steamcommunity.com/sharedfiles/filedetails/?id=557962280) mit der ID `557962280` und [ULib](https://steamcommunity.com/sharedfiles/filedetails/?id=557962238) mit der ID `557962238`) oder lade sie manuell in die Ordner `/garrysmod/addons/ulx/` und `/garrysmod/addons/ulib/` hoch. Wie das geht, steht in der Anleitung [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods).

2. **Server neu starten**\
   Starte Deinen Server vollständig neu.

3. **Rechte vergeben**\
   Vergib die Rechte anschließend im Spiel oder über die Serverkonsole:

   ```text
   ulx adduser <Name> superadmin
   ```

> [!IMPORTANT]
> ULX benötigt ULib, um zu funktionieren. Installiere immer beide Addons zusammen.
