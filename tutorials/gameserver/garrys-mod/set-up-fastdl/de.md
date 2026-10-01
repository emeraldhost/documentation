---
slug: "fastdl-einrichten"
language: "de"
title: "So richtest Du FastDL auf Deinem Garry's Mod Server ein"
description: "FastDL für eigene Inhalte auf einem Garry's Mod Server einrichten"
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
short_title: "FastDL einrichten"
sort: 14
related: ["gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/set-up-loading-screen"]
---
Damit Spieler eigene Inhalte Deines Servers wie Modelle, Texturen, Sounds oder Maps sehen, müssen sie diese herunterladen. Mit **FastDL** laden die Spieler diese Dateien beim Beitreten über HTTP von Deinem Webspace herunter. Du hinterlegst dafür die Adresse des Webspaces in der `server.cfg` und legst per Lua fest, welche Dateien heruntergeladen werden sollen.

> [!TIP]
> Der einfachere und schnellere Weg ist der **Steam Workshop**. Liegen Deine Inhalte im Workshop, nimmst Du sie in Deine Collection auf und lässt sie mit `resource.AddWorkshop` an die Spieler verteilen. Wie das geht, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/garrys-mod/add-mods). FastDL brauchst Du nur für Inhalte, die es nicht im Workshop gibt.

## Voraussetzungen für FastDL

Für FastDL benötigst Du einen **eigenen Webserver bzw. Webspace**, der über `http://` oder `https://` öffentlich erreichbar ist. Dein Garry's Mod Server selbst ist kein Webserver und kann die Dateien nicht über HTTP ausliefern.

> [!NOTE]
> `.lua`-Dateien zählen nicht als Inhalte. Sie werden über einen eigenen Weg an die Spieler übertragen und brauchen kein FastDL. Lege auf dem Webspace nur Dateien wie Modelle, Materialien, Sounds und Maps ab.

## Inhalte auf dem Gameserver bereitstellen

Die Dateien, die die Spieler herunterladen sollen, müssen auch auf Deinem Gameserver liegen. Fehlt eine Datei auf dem Server, wird sie nicht in die Downloadliste aufgenommen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Inhalte hochladen**\
   Lade Deine Inhalte als Addon in einen eigenen Unterordner hoch, zum Beispiel:

   ```text
   /garrysmod/addons/meinserver-inhalte/
   ```

   Darin liegen die Unterordner wie `materials/`, `models/` oder `sound/`. Eigene Maps legst Du als `.bsp`-Datei unter `/garrysmod/maps/` ab.

   > [!NOTE]
   > Lass Deinen Server gestoppt, bis Du alle Schritte dieser Anleitung erledigt hast. Gestartet wird er am Ende im Abschnitt [Dateien zum Download markieren](#dateien-zum-download-markieren).

## Dateien auf den Webspace hochladen

Die Spieler fordern jede Datei unter der Adresse Deines Webspaces mit **demselben Pfad** an, den sie relativ zum Ordner `garrysmod/` hat. Die Ordnerstruktur auf dem Webspace muss deshalb genau der Struktur im Spiel entsprechen.

1. **Ordnerstruktur anlegen**\
   Lege im Hauptverzeichnis Deines Webspaces dieselben Ordner an, die Deine Inhalte verwenden, zum Beispiel `maps/`, `materials/`, `models/` und `sound/`.

2. **Dateien hochladen**\
   Lade die Dateien in die passenden Ordner hoch. Den Addon-Ordner selbst lässt Du dabei weg: Aus `/garrysmod/addons/meinserver-inhalte/materials/meinserver/logo.vmt` auf dem Gameserver wird auf dem Webspace `materials/meinserver/logo.vmt`.

   > [!TIP]
   > **Beispiel**
   >
   > Ist Dein Webspace unter `https://fastdl.example.com` erreichbar, ruft ein Spieler die Datei `materials/meinserver/logo.vmt` unter dieser Adresse ab:
   >
   > ```text
   > https://fastdl.example.com/materials/meinserver/logo.vmt
   > ```

3. **Dateien optional komprimieren**\
   Du kannst die Dateien zusätzlich im Format **bzip2** komprimieren, um die Downloads zu verkleinern. Die komprimierte Datei bekommt dabei die Endung `.bz2` an den vollständigen Dateinamen angehängt, zum Beispiel `logo.vmt.bz2`. Die Spieler fragen zuerst die `.bz2`-Datei an. Gibt es keine komprimierte Fassung, laden sie die unkomprimierte Datei herunter.

> [!IMPORTANT]
> Der Server läuft unter Linux und Dateipfade sind dort **groß- und kleinschreibungsabhängig**. Achte zur Sicherheit darauf, dass Ordner- und Dateinamen auf dem Gameserver, auf dem Webspace und in Deiner Lua-Datei exakt gleich geschrieben sind.

## Download-URL eintragen

1. **Datei öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /garrysmod/cfg/server.cfg
   ```

2. **URL eintragen**\
   In der Datei steht bereits die Zeile `sv_downloadurl ""`. Trage zwischen den Anführungszeichen die Adresse Deines Webspaces ein:

   ```text
   sv_downloadurl "https://fastdl.example.com"
   ```

   Die Adresse muss auf das Verzeichnis zeigen, in dem die Ordner `materials/`, `models/` usw. liegen.

3. **Download vom Gameserver deaktivieren**\
   Füge unter der Zeile `// Add custom lines under here` folgende Zeile hinzu:

   ```text
   sv_allowdownload 0
   ```

   Damit laden die Spieler keine Dateien direkt vom Gameserver herunter. Warum das wichtig ist, erfährst Du unter [Download direkt vom Gameserver](#download-direkt-vom-gameserver).

4. **Datei speichern**\
   Speichere die Datei.

## Dateien zum Download markieren

Damit die Spieler die Dateien herunterladen, musst Du sie in einer serverseitigen Lua-Datei für den Download markieren. Dafür gibt es zwei Funktionen:

| Funktion | Beschreibung |
| -------- | ------------ |
| `resource.AddFile` | Markiert die Datei und alle zugehörigen Dateien. Bei einer `.vmt`-Datei wird automatisch die gleichnamige `.vtf`-Datei hinzugefügt, bei einer `.mdl`-Datei automatisch die gleichnamigen `.vvd`-, `.ani`-, `.dx80.vtx`-, `.dx90.vtx`- und `.phy`-Dateien. |
| `resource.AddSingleFile` | Markiert nur genau die angegebene Datei. |

1. **Lua-Datei anlegen**\
   Lege per [SFTP](/tutorials/gameserver/establish-sftp-connection) eine neue Datei an, zum Beispiel:

   ```text
   /garrysmod/lua/autorun/server/fastdl.lua
   ```

2. **Dateien eintragen**\
   Trage pro Datei eine Zeile ein. Der Pfad wird relativ zum Ordner `garrysmod/` angegeben – ohne `addons/<addonname>/` davor und ohne die Endung `.bz2`:

   ```lua
   resource.AddFile( "materials/meinserver/logo.vmt" )
   resource.AddFile( "models/meinserver/stuhl.mdl" )
   resource.AddFile( "sound/meinserver/musik.wav" )
   resource.AddFile( "maps/rp_beispielstadt.bsp" )
   ```

   > [!WARNING]
   > Der Ordner für Sounds heißt `sound/` – ohne „s“ am Ende.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim nächsten Beitreten laden die Spieler die markierten Dateien von Deinem Webspace herunter.

> [!NOTE]
> Mit `resource.AddFile` werden auch die zugehörigen Dateien angefragt. Lade deshalb z.B. bei Modellen alle zugehörigen Dateien auf den Webspace hoch, nicht nur die `.mdl`-Datei.

## Einschränkungen von FastDL

> [!WARNING]
> FastDL prüft nicht den Inhalt der Dateien. Änderst Du eine Datei auf dem Server, laden Spieler, die sie bereits heruntergeladen haben, die neue Fassung **nicht** erneut herunter. Damit Spieler die neue Fassung erhalten, kannst Du z.B. geänderten Dateien einen neuen Namen geben und die Verweise darauf anpassen.

> [!NOTE]
> Es können insgesamt höchstens **8192 Dateien** zum Download markiert werden. Diese Grenze gilt für alle `resource.Add*`-Funktionen zusammen. Brauchst Du mehr, lade Deine Inhalte in den Steam Workshop hoch und verteile sie mit `resource.AddWorkshop`.

> [!NOTE]
> FastDL lädt Datei für Datei herunter. Bei sehr vielen kleinen Dateien kann das Beitreten deshalb länger dauern. Spieler können außerdem in ihren Spieleinstellungen festlegen, welche Dateitypen sie von Servern herunterladen.

## Download direkt vom Gameserver

Über die ConVar `sv_allowdownload` können Spieler Dateien auch direkt vom Gameserver herunterladen. Diese Methode solltest Du nicht verwenden: Sie ist mit rund 64 KB/s sehr langsam.

> [!IMPORTANT]
> Ist `sv_allowdownload` aktiviert, können Spieler mit manipulierten Clients massenhaft Dateien anfordern und Deinen Server so stark ausbremsen. Lass deshalb `sv_allowdownload 0` in Deiner `server.cfg` stehen und nutze stattdessen FastDL oder den Steam Workshop.
