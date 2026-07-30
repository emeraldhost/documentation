---
description: Spieler auf einem Sons Of The Forest Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Sons Of The Forest Server

Spieler kickst und bannst du bei Sons Of The Forest direkt im Spiel über das Verwaltungsmenü. Voraussetzung ist, dass du als Server-Owner eingetragen bist.

:::: info Hinweis
Sons Of The Forest hat **keine Konsolenbefehle** zum Kicken oder Bannen. Befehle wie `/kick` oder `/ban` stammen aus dem Vorgänger The Forest und funktionieren hier nicht. Die Verwaltung läuft ausschließlich über das Ingame-Menü.
::::

## Voraussetzung

Deine SteamID64 muss in der Datei `ownerswhitelist.txt` auf dem Server eingetragen sein. Wie das geht, erklärt die Anleitung [Admin hinzufügen](admin-hinzufuegen.md).

## Spieler kicken oder bannen

1. <b>Server beitreten</b><br>
   Tritt deinem Server mit dem Steam-Account bei, dessen SteamID64 als Owner eingetragen ist.

2. <b>Verwaltungsmenü öffnen</b><br>
   Drücke `ESC` und wechsle auf den Reiter **Players**. Dort siehst du alle aktuell verbundenen Spieler.

3. <b>Spieler auswählen</b><br>
   Wähle in der Liste den Spieler aus, den du entfernen möchtest.

4. <b>Kicken oder bannen</b><br>
   Nutze die Verwaltungsfunktion des Spielers:

   - **Kick** entfernt den Spieler vom Server. Er kann anschließend wieder beitreten.
   - **Ban** entfernt den Spieler und sperrt ihn dauerhaft für deinen Server.

:::: warning Achtung
Für das Aufheben eines Banns ist kein Weg über eine Server-Datei dokumentiert. Setze Banns deshalb bewusst ein und nutze für kurzfristige Maßnahmen lieber die Kick-Funktion.
::::

:::: tip Tipp
Beide Funktionen wirken nur auf Spieler, die gerade **verbunden** sind. Ein Spieler, der bereits offline ist, lässt sich über dieses Menü nicht mehr auswählen.
::::
