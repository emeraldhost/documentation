---
description: Einem Operation Harsh Doorstop Server beitreten
---

# So trittst du deinem Operation Harsh Doorstop Server bei

Deinen Server findest du entweder über den Serverbrowser im Spiel oder du trägst ihn in Steam als Favoriten ein. Für den Eintrag in Steam benötigst du in der Regel den **Query Port** und nicht den Game Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Feste Standardwerte gibt es nicht – die Ports werden deinem Server zugewiesen und können sich von denen anderer Server unterscheiden.
::::

## Über den Serverbrowser im Spiel

Das ist der einfachste Weg: Hier benötigst du weder IP-Adresse noch Port.

1. <b>Operation Harsh Doorstop starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü den Reiter **Multiplayer**.

3. <b>Server suchen</b><br>
   Suche in der Serverliste nach dem Namen deines Servers. Nutze dazu die Suchfunktion beziehungsweise den Filter der Liste.

4. <b>Server beitreten</b><br>
   Wähle deinen Server aus und bestätige den Beitritt.

:::: info Hinweis
Ein frisch gestarteter Server erscheint nicht sofort in der Liste. Warte nach dem ersten Start ein paar Minuten, bevor du suchst.
::::

## Über die Steam-Favoriten

Wenn dein Server im Serverbrowser nicht auftaucht, trägst du ihn direkt in Steam ein.

:::: info Hinweis
Trage den Server am einfachsten ein, während Operation Harsh Doorstop geschlossen ist. Anschließend startest du das Spiel direkt über den Favoriten-Eintrag.
::::

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favoriten** und klicke unten rechts auf **+** beziehungsweise **Server hinzufügen**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den **Query Port** deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Query Port>
   ```

   :::: tip Tipp
   Die für deinen Server gültigen Werte stehen in der **Verwaltung**. Findet Steam den Server damit nicht, versuche denselben Eintrag mit dem **Game Port**.
   ::::

5. <b>Liste aktualisieren</b><br>
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt. Antwortet der Server, siehst du Name, Karte und Spielerzahl.

6. <b>Beitreten</b><br>
   Verbinde dich direkt aus Steam heraus oder starte das Spiel und wähle den Server im Favoriten-Bereich aus.

## Welche Ports nutzt Operation Harsh Doorstop?

:::: info Hinweis
Ein Operation Harsh Doorstop Server belegt mehrere Ports mit unterschiedlichen Aufgaben:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Über diesen Port laufen die eigentlichen Spieldaten |
| Query Port | UDP | Hierüber fragen Steam und der Serverbrowser deinen Server ab – diesen Port trägst du in den Steam-Favoriten ein |
| RCON-Port | TCP | Fernsteuerung des Servers über einen RCON-Client |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Erscheint dein Server weder im Serverbrowser noch nach dem Eintrag in den Favoriten, prüfe folgende Punkte:

- Läuft der Server laut Verwaltung tatsächlich?
- Hast du den **Query Port** eingetragen? Probiere ersatzweise den **Game Port**.
- Zeigt die Verwaltung nur einen Port an, frage im Zweifel beim Support nach, welcher Port der Query Port ist.
- Hast du die Liste in Steam nach dem Hinzufügen aktualisiert? Ohne Aktualisierung bleibt der Eintrag leer.
::::

:::: info Mods auf dem Server
Läuft auf deinem Server eine modifizierte Karte oder ein modifizierter Spielmodus, brauchst du die passenden Inhalte auch auf deinem PC. Abonniere die verwendeten Mods im **Steam Workshop** und starte das Spiel danach neu. Mehr dazu unter [Mods hinzufügen](mods-hinzufuegen.md).
::::
