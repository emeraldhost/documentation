---
description: squaremap auf einem Minecraft Java Edition Server einrichten
---

# So richtest du squaremap auf einem Minecraft Java Server ein

squaremap erstellt eine minimalistische 2D-Web-Karte deines Minecraft-Servers. Die Karte wird im Vanilla-Stil gerendert und kann direkt im Browser geöffnet werden.

:::: warning Achtung
squaremap benötigt einen **eigenen Port** für den Webserver. Verwende **nicht** den Standard-Port deines Servers!
::::

:::: info Hinweis
squaremap funktioniert nur mit **Paper**- oder **Purpur**-Servern. Auf Vanilla-, Spigot-, Forge- oder Fabric-Servern läuft es nicht.
::::

## Schritt 1: Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade [squaremap](https://modrinth.com/plugin/squaremap) für deine Server-Version herunter und lege die `.jar`-Datei in den `plugins`-Ordner.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. <b>Netzwerk öffnen</b><br>
   Öffne den Abschnitt **Netzwerk** in deiner Verwaltung. Dort findest du eine Übersicht aller verfügbaren Ports.

2. <b>Port auswählen</b><br>
   Wähle einen freien Port aus und notiere ihn dir.

:::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! squaremap benötigt einen separaten Port.
::::

## Schritt 3: Config-Datei anpassen

1. <b>Config-Datei öffnen</b><br>
   Öffne die Datei `plugins/squaremap/config.yml`.

2. <b>Port-Abschnitt suchen</b><br>
   Suche nach dem Abschnitt `internal-webserver`:

   ```yaml
   settings:
     internal-webserver:
       enabled: true
       bind: 0.0.0.0
       port: 8080
   ```

3. <b>Port ersetzen</b><br>
   Ersetze `8080` mit deinem gewählten Port aus Schritt 2.

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
