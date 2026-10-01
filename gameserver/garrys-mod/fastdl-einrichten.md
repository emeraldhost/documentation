---
description: FastDL für eigene Inhalte auf einem Garry's Mod Server einrichten
---

# So richtest du FastDL auf deinem Garry's Mod Server ein

Damit Spieler eigene Inhalte deines Servers wie Modelle, Texturen, Sounds oder Maps sehen, müssen sie diese herunterladen. Mit **FastDL** laden die Spieler diese Dateien beim Beitreten über HTTP von deinem Webspace herunter. Du hinterlegst dafür die Adresse des Webspaces in der `server.cfg` und legst per Lua fest, welche Dateien heruntergeladen werden sollen.

:::: tip Tipp
Der einfachere und schnellere Weg ist der **Steam Workshop**. Liegen deine Inhalte im Workshop, nimmst du sie in deine Collection auf und lässt sie mit `resource.AddWorkshop` an die Spieler verteilen. Wie das geht, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md). FastDL brauchst du nur für Inhalte, die es nicht im Workshop gibt.
::::

## Voraussetzungen für FastDL

Für FastDL benötigst du einen **eigenen Webserver bzw. Webspace**, der über `http://` oder `https://` öffentlich erreichbar ist. Dein Garry's Mod Server selbst ist kein Webserver und kann die Dateien nicht über HTTP ausliefern.

:::: info Hinweis
`.lua`-Dateien zählen nicht als Inhalte. Sie werden über einen eigenen Weg an die Spieler übertragen und brauchen kein FastDL. Lege auf dem Webspace nur Dateien wie Modelle, Materialien, Sounds und Maps ab.
::::

## Inhalte auf dem Gameserver bereitstellen

Die Dateien, die die Spieler herunterladen sollen, müssen auch auf deinem Gameserver liegen. Fehlt eine Datei auf dem Server, wird sie nicht in die Downloadliste aufgenommen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Inhalte hochladen</b><br>
   Lade deine Inhalte als Addon in einen eigenen Unterordner hoch, zum Beispiel:

   ```
   /garrysmod/addons/meinserver-inhalte/
   ```

   Darin liegen die Unterordner wie `materials/`, `models/` oder `sound/`. Eigene Maps legst du als `.bsp`-Datei unter `/garrysmod/maps/` ab.

   :::: info Hinweis
   Lass deinen Server gestoppt, bis du alle Schritte dieser Anleitung erledigt hast. Gestartet wird er am Ende im Abschnitt [Dateien zum Download markieren](#dateien-zum-download-markieren).
   ::::

## Dateien auf den Webspace hochladen

Die Spieler fordern jede Datei unter der Adresse deines Webspaces mit **demselben Pfad** an, den sie relativ zum Ordner `garrysmod/` hat. Die Ordnerstruktur auf dem Webspace muss deshalb genau der Struktur im Spiel entsprechen.

1. <b>Ordnerstruktur anlegen</b><br>
   Lege im Hauptverzeichnis deines Webspaces dieselben Ordner an, die deine Inhalte verwenden, zum Beispiel `maps/`, `materials/`, `models/` und `sound/`.

2. <b>Dateien hochladen</b><br>
   Lade die Dateien in die passenden Ordner hoch. Den Addon-Ordner selbst lässt du dabei weg: Aus `/garrysmod/addons/meinserver-inhalte/materials/meinserver/logo.vmt` auf dem Gameserver wird auf dem Webspace `materials/meinserver/logo.vmt`.

   :::: tip Beispiel
   Ist dein Webspace unter `https://fastdl.example.com` erreichbar, ruft ein Spieler die Datei `materials/meinserver/logo.vmt` unter dieser Adresse ab:

   ```
   https://fastdl.example.com/materials/meinserver/logo.vmt
   ```
   ::::

3. <b>Dateien optional komprimieren</b><br>
   Du kannst die Dateien zusätzlich im Format **bzip2** komprimieren, um die Downloads zu verkleinern. Die komprimierte Datei bekommt dabei die Endung `.bz2` an den vollständigen Dateinamen angehängt, zum Beispiel `logo.vmt.bz2`. Die Spieler fragen zuerst die `.bz2`-Datei an. Gibt es keine komprimierte Fassung, laden sie die unkomprimierte Datei herunter.

:::: danger Wichtig
Der Server läuft unter Linux und Dateipfade sind dort **groß- und kleinschreibungsabhängig**. Achte zur Sicherheit darauf, dass Ordner- und Dateinamen auf dem Gameserver, auf dem Webspace und in deiner Lua-Datei exakt gleich geschrieben sind.
::::

## Download-URL eintragen

1. <b>Datei öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /garrysmod/cfg/server.cfg
   ```

2. <b>URL eintragen</b><br>
   In der Datei steht bereits die Zeile `sv_downloadurl ""`. Trage zwischen den Anführungszeichen die Adresse deines Webspaces ein:

   ```
   sv_downloadurl "https://fastdl.example.com"
   ```

   Die Adresse muss auf das Verzeichnis zeigen, in dem die Ordner `materials/`, `models/` usw. liegen.

3. <b>Download vom Gameserver deaktivieren</b><br>
   Füge unter der Zeile `// Add custom lines under here` folgende Zeile hinzu:

   ```
   sv_allowdownload 0
   ```

   Damit laden die Spieler keine Dateien direkt vom Gameserver herunter. Warum das wichtig ist, erfährst du unter [Download direkt vom Gameserver](#download-direkt-vom-gameserver).

4. <b>Datei speichern</b><br>
   Speichere die Datei.

## Dateien zum Download markieren

Damit die Spieler die Dateien herunterladen, musst du sie in einer serverseitigen Lua-Datei für den Download markieren. Dafür gibt es zwei Funktionen:

| Funktion | Beschreibung |
| -------- | ------------ |
| `resource.AddFile` | Markiert die Datei und alle zugehörigen Dateien. Bei einer `.vmt`-Datei wird automatisch die gleichnamige `.vtf`-Datei hinzugefügt, bei einer `.mdl`-Datei automatisch die gleichnamigen `.vvd`-, `.ani`-, `.dx80.vtx`-, `.dx90.vtx`- und `.phy`-Dateien. |
| `resource.AddSingleFile` | Markiert nur genau die angegebene Datei. |

1. <b>Lua-Datei anlegen</b><br>
   Lege per [SFTP](../sftp-verbindung-herstellen.md) eine neue Datei an, zum Beispiel:

   ```
   /garrysmod/lua/autorun/server/fastdl.lua
   ```

2. <b>Dateien eintragen</b><br>
   Trage pro Datei eine Zeile ein. Der Pfad wird relativ zum Ordner `garrysmod/` angegeben – ohne `addons/<addonname>/` davor und ohne die Endung `.bz2`:

   ```lua
   resource.AddFile( "materials/meinserver/logo.vmt" )
   resource.AddFile( "models/meinserver/stuhl.mdl" )
   resource.AddFile( "sound/meinserver/musik.wav" )
   resource.AddFile( "maps/rp_beispielstadt.bsp" )
   ```

   :::: warning Achtung
   Der Ordner für Sounds heißt `sound/` – ohne „s“ am Ende.
   ::::

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim nächsten Beitreten laden die Spieler die markierten Dateien von deinem Webspace herunter.

:::: info Hinweis
Mit `resource.AddFile` werden auch die zugehörigen Dateien angefragt. Lade deshalb z.B. bei Modellen alle zugehörigen Dateien auf den Webspace hoch, nicht nur die `.mdl`-Datei.
::::

## Einschränkungen von FastDL

:::: warning Achtung
FastDL prüft nicht den Inhalt der Dateien. Änderst du eine Datei auf dem Server, laden Spieler, die sie bereits heruntergeladen haben, die neue Fassung **nicht** erneut herunter. Damit Spieler die neue Fassung erhalten, kannst du z.B. geänderten Dateien einen neuen Namen geben und die Verweise darauf anpassen.
::::

:::: info Hinweis
Es können insgesamt höchstens **8192 Dateien** zum Download markiert werden. Diese Grenze gilt für alle `resource.Add*`-Funktionen zusammen. Brauchst du mehr, lade deine Inhalte in den Steam Workshop hoch und verteile sie mit `resource.AddWorkshop`.
::::

:::: info Hinweis
FastDL lädt Datei für Datei herunter. Bei sehr vielen kleinen Dateien kann das Beitreten deshalb länger dauern. Spieler können außerdem in ihren Spieleinstellungen festlegen, welche Dateitypen sie von Servern herunterladen.
::::

## Download direkt vom Gameserver

Über die ConVar `sv_allowdownload` können Spieler Dateien auch direkt vom Gameserver herunterladen. Diese Methode solltest du nicht verwenden: Sie ist mit rund 64 KB/s sehr langsam.

:::: danger Wichtig
Ist `sv_allowdownload` aktiviert, können Spieler mit manipulierten Clients massenhaft Dateien anfordern und deinen Server so stark ausbremsen. Lass deshalb `sv_allowdownload 0` in deiner `server.cfg` stehen und nutze stattdessen FastDL oder den Steam Workshop.
::::
