---
description: Admins auf einem Space Engineers Server hinzufügen
---

# So fügst du Admins auf deinem Space Engineers Server hinzu

Admins haben volle Verwaltungsrechte auf dem Server und können zum Beispiel Spieler kicken und bannen. Du kannst Admins über die Server-Konfiguration oder direkt im Spiel festlegen.

## Voraussetzung

Du benötigst die [SteamID64](../steamid64-herausfinden.md) jedes Spielers, den du zum Admin machen möchtest.

## Methode 1: Über die Server-Konfiguration

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest. Ein laufender Server überschreibt deine Änderungen beim Speichern.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Konfiguration öffnen</b><br>
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. <b>Admins eintragen</b><br>
   Suche den Abschnitt `<Administrators>` (bei einem leeren Server steht dort `<Administrators />`) und trage pro Admin eine Zeile mit der SteamID64 ein:

   ```xml
   <Administrators>
     <unsignedLong>76561198000000000</unsignedLong>
   </Administrators>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Methode 2: Direkt im Spiel

Ein bereits berechtigter Admin kann weitere Spieler live befördern:

1. <b>Server beitreten</b><br>
   Tritt als Admin deinem Server bei.

2. <b>Admin-Menü öffnen</b><br>
   Öffne die Spielerliste mit `F3` oder das Admin-Menü mit `Alt` + `F10`.

3. <b>Spieler befördern</b><br>
   Wähle den Spieler aus und befördere ihn (**Promote**) zum gewünschten Rang.

:::: info Crossplay-Server
Auf Servern mit aktiviertem **Crossplay** greift die SteamID-Methode (Methode 1) nicht. Nutze in diesem Fall die Beförderung im Spiel (Methode 2) oder die [Remote API](remote-api-aktivieren.md).
::::
