---
description: Einem PixARK Server beitreten
---

# So trittst du deinem PixARK Server bei

Deinen eigenen PixARK Server erreichst du am zuverlässigsten, indem du ihn zuerst in Steam als Favorit hinterlegst und anschließend im Spiel aus der Favoritenliste beitrittst. Entscheidend dabei: In Steam trägst du den **Query Port** ein und **nicht** den Game Port.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Query Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Die Ports werden dir dort zugewiesen – nimm immer die Werte aus der Verwaltung und keine Standardwerte aus dem Internet.
::::

## Server in Steam als Favorit hinterlegen

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client auf deinem PC.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favoriten** und klicke unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den **Query Port** deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   123.45.67.89:QUERYPORT
   ```

   :::: warning Achtung
   Der Game Port funktioniert an dieser Stelle nicht. Steam fragt den Server ausschließlich über den Query Port ab – trägst du den falschen Port ein, bleibt der Server offline oder taucht gar nicht erst auf.
   ::::

5. <b>Eintrag bestätigen</b><br>
   Bestätige die Eingabe. Dein Server erscheint anschließend in der Favoritenliste. Läuft er, siehst du dort auch den Servernamen und die Spielerzahl.

## Im Spiel beitreten

1. <b>PixARK starten</b><br>
   Starte PixARK auf deinem PC.

2. <b>Serverliste öffnen</b><br>
   Öffne im Hauptmenü die Übersicht der Multiplayer-Server.

3. <b>Auf Favoriten filtern</b><br>
   Stelle den Filter auf **Favoriten**. Dein Server erscheint nun in der Liste.

4. <b>Beitreten</b><br>
   Wähle deinen Server aus und tritt ihm bei.

## Server mit Passwort

:::: warning Achtung
Ist auf deinem Server ein Passwort gesetzt, gib es **erst im Spiel** ein, nachdem du den Beitritt gestartet hast. Trägst du das Passwort stattdessen im Steam-Server-Browser ein, kann es passieren, dass du zwar verbunden wirst, die Welt aber nicht korrekt lädt.
::::

## Welche Ports nutzt PixARK?

:::: info Hinweis
Ein PixARK Server belegt vier Ports. Welche Nummern dein Server verwendet, siehst du in der **Verwaltung**:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Die eigentliche Spielverbindung |
| Query Port | UDP | Serverabfrage – hierüber findet Steam deinen Server, diesen Port trägst du in den Favoriten ein |
| RCON Port | TCP | Fernwartung des Servers per RCON |
| Cube Port | TCP | Überträgt die Änderungen an der Voxel-Welt (Terrain) |

Der Cube Port ist eine Besonderheit von PixARK: Ist er nicht erreichbar, kannst du dich zwar verbinden, die Blockwelt wird aber nicht oder nur unvollständig übertragen.
::::

:::: tip Tipp
Taucht dein Server nach dem Hinzufügen nicht in den Favoriten auf, prüfe zuerst, ob er in der Verwaltung wirklich läuft, und kontrolliere anschließend, ob du wirklich den Query Port und nicht den Game Port eingetragen hast.
::::
