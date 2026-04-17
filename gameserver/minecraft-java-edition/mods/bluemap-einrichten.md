---
description: BlueMap auf einem Minecraft Java Edition Server einrichten
---

# So richtest du BlueMap auf einem Minecraft Java Server ein

BlueMap erstellt eine 3D-Web-Karte deines Minecraft-Servers, die du im Browser anzeigen kannst. Die Karte wird als Mesh mit Texturen gerendert und erlaubt Kamerafahrten durch die Welt.

:::: warning Achtung
BlueMap benötigt einen **eigenen Port** für den Webserver. Verwende **nicht** den Standard-Port deines Servers!
::::

## Schritt 1: Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade [BlueMap](https://modrinth.com/plugin/bluemap) für deine Server-Version herunter.
   - Für **Fabric/Forge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Spigot/Bukkit**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. <b>Netzwerk öffnen</b><br>
   Öffne den Abschnitt **Netzwerk** in deiner Verwaltung. Dort findest du eine Übersicht aller verfügbaren Ports.

2. <b>Port auswählen</b><br>
   Wähle einen freien Port aus und notiere ihn dir.

:::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! BlueMap benötigt einen separaten Port.
::::

## Schritt 3: Config-Datei anpassen

1. <b>Config-Datei öffnen</b><br>
   Navigiere im Datei-Browser zur Webserver-Config von BlueMap.
   - **Fabric/Forge**: `config/bluemap/webserver.conf`
   - **Paper/Spigot/Bukkit**: `plugins/BlueMap/webserver.conf`

2. <b>Port-Zeile suchen</b><br>
   Öffne die Datei und suche nach der Zeile:
   ```
   port: 8100
   ```

3. <b>Port ersetzen</b><br>
   Ersetze `8100` mit deinem gewählten Port aus Schritt 2.
   ```
   port: DEIN_PORT
   ```

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

## Schritt 4: Server neu starten

1. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

2. <b>Karte aufrufen</b><br>
   Öffne die Web-Karte im Browser unter:

   ```
   http://DEINE_SERVER_IP:DEIN_PORT
   ```

:::: tip Tipp
Beim ersten Start rendert BlueMap die komplette Welt — das kann je nach Weltgröße viele Stunden dauern. In der `core.conf` kannst du die Renderleistung anpassen, falls dein Server zu stark belastet wird.
::::
