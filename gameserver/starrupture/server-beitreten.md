---
description: Einem StarRupture Server beitreten
---

# So trittst du deinem StarRupture Server bei

StarRupture besitzt **keinen Serverbrowser**. Du verbindest dich ausschließlich über die direkte Eingabe von IP-Adresse und Port. Die Verbindung selbst läuft über die Epic Online Services (EOS) – auch dann, wenn du das Spiel über Steam gestartet hast.

## Verbindungsdaten finden

:::: info Hinweis
Die IP-Adresse und den Game Port deines Servers findest du in der **Verwaltung** deines Servers.
::::

:::: danger Wichtig
Verwende immer die öffentliche IP-Adresse aus der Verwaltung. Da die Verbindung über die Epic Online Services aufgebaut wird, funktioniert eine lokale Netzwerkadresse (LAN) nicht.
::::

## Dem Server beitreten

1. <b>StarRupture starten</b><br>
   Starte StarRupture und warte, bis das Hauptmenü geladen ist.

2. <b>Join Game öffnen</b><br>
   Wähle im Hauptmenü **Join Game**.

3. <b>Dedicated Server wählen</b><br>
   Wähle **Dedicated Server**. Nur über diesen Weg kannst du eine Adresse eintragen.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Schreibweise
   ```
   <IP-Adresse>:<Game Port>
   ```

   Setze für die Platzhalter die Werte ein, die in deiner Verwaltung stehen.
   ::::

   :::: warning Achtung
   Der Port muss immer mit angegeben werden. Ohne Port findet das Spiel deinen Server nicht zuverlässig.
   ::::

5. <b>Passwort eintragen</b><br>
   Ist für deinen Server ein Join-Passwort hinterlegt, trage es in das entsprechende Feld ein. Ohne Passwort bleibt das Feld leer.

6. <b>Verbinden</b><br>
   Bestätige die Eingabe mit **Confirm**. Du wirst anschließend auf den Server geladen.

## Welche Ports nutzt StarRupture?

:::: info Hinweis
Ein StarRupture-Server benötigt nur einen einzigen Port: den **Game Port**, und zwar ausschließlich über **UDP**. Einen separaten **Query Port** gibt es nicht. Welcher Game Port für deinen Server gilt, siehst du in der **Verwaltung**.
::::

:::: danger Warum kein TCP freigegeben wird
Der Dedicated Server bringt eine HTTP-Fernsteuerung mit (im Spiel als **Manage Server** sichtbar), die eine bekannte, nicht authentifizierte Sicherheitslücke enthält: Angreifer könnten darüber Passwörter ändern, Spielstände manipulieren oder den Server zum Absturz bringen. Dein Server wird deshalb mit den Startparametern `-RCWebControlDisable` und `-RCWebInterfaceDisable` betrieben und ist ausschließlich über UDP erreichbar. **Manage Server** steht dadurch bewusst nicht zur Verfügung – die Servereinstellungen änderst du stattdessen über die Verwaltung beziehungsweise über die Datei `DSSettings.txt`.
::::

## Verbindungsprobleme

:::: warning Meldung über mehrere Server an dieser IP
Erscheint beim Beitreten eine Meldung wie *"More than one server at this IP, please specify port"*, hält dein Spielclient noch eine veraltete Verbindung zu deinem Server. Das passiert vor allem dann, wenn der Server neu gestartet wurde, während StarRupture geöffnet blieb. Beende das Spiel **vollständig**, starte es neu und trage IP-Adresse und Game Port erneut ein.
::::

:::: tip Tipp
Prüfe bei Verbindungsproblemen zuerst, ob der Server in der Verwaltung tatsächlich läuft und ob du IP-Adresse und Port exakt so eingetragen hast, wie sie dort angezeigt werden.
::::
