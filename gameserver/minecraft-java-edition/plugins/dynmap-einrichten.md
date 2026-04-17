---
description: Dynmap auf einem Minecraft Java Edition Server einrichten
---

# So richtest du Dynmap auf einem Minecraft Java Server ein

Dynmap erstellt eine interaktive Web-Karte deines Minecraft-Servers, die du im Browser öffnen kannst – ähnlich wie Google Maps für deine Welt.

:::: warning Achtung
Dynmap benötigt einen **eigenen Port** für den Webserver. Verwende **nicht** den Standard-Port deines Servers!
::::

## Schritt 1: Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade [Dynmap](https://www.spigotmc.org/resources/dynmap%C2%AE.274/) für deine Server-Version herunter.
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
Verwende **nicht** den Standard-Port deines Servers! Dynmap benötigt einen separaten Port.
::::

## Schritt 3: Config-Datei anpassen

1. <b>Config-Datei öffnen</b><br>
   Navigiere im Datei-Browser zur Config-Datei von Dynmap.
   - **Fabric/Forge**: `config/dynmap/configuration.txt`
   - **Paper/Spigot/Bukkit**: `plugins/dynmap/configuration.txt`

2. <b>Port-Zeile suchen</b><br>
   Öffne die Datei und suche nach der Zeile:
   ```
   webserver-port: 8123
   ```

3. <b>Port ersetzen</b><br>
   Ersetze `8123` mit deinem gewählten Port aus Schritt 2.
   ```
   webserver-port: DEIN_PORT
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
Beim ersten Start rendert Dynmap die komplette Welt — das kann je nach Weltgröße einige Stunden dauern. Anschließend werden nur noch Änderungen neu gerendert.
::::
