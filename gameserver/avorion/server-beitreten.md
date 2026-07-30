---
description: Einem Avorion Server beitreten
---

# So trittst du deinem Avorion Server bei

Avorion bietet dir zwei Wege auf deinen Server: den Serverbrowser im Spiel oder die Direktverbindung über die IP-Adresse. Die Direktverbindung ist der zuverlässigste Weg, weil dein Server dafür nicht öffentlich gelistet sein muss.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers.
::::

## Direkt über die IP verbinden

1. <b>Avorion starten</b><br>
   Starte Avorion auf deinem PC.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

3. <b>Join via IP wählen</b><br>
   Klicke auf **Join via IP**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   Die genauen Werte stehen in der **Verwaltung** deines Servers.

5. <b>Namen vergeben und beitreten</b><br>
   Vergib zusätzlich einen Namen für den Eintrag und bestätige mit **Add Server**. Der Server wird deiner Serverliste hinzugefügt und die Verbindung aufgebaut – beim nächsten Mal wählst du ihn direkt aus der Liste. Über **Join** verbindest du dich, ohne den Server dauerhaft zu speichern.

## Über den Serverbrowser

1. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

2. <b>Serverbrowser öffnen</b><br>
   Klicke auf **Browse Servers**.

3. <b>Server suchen</b><br>
   Suche in der Liste nach dem Namen deines Servers und tritt ihm per Doppelklick beziehungsweise über **Join** bei.

:::: info Hinweis
Im Serverbrowser erscheint dein Server nur, wenn er öffentlich gelistet ist. Gesteuert wird das in der **Verwaltung** über die Einstellung **Serverliste** (`true` = gelistet, `false` = nicht gelistet); intern entspricht das dem Startparameter `--listed` beziehungsweise dem Wert `isListed` in der `server.ini`. Findest du deinen Server dort nicht, nutze die Direktverbindung über **Join via IP**.
::::

:::: warning Achtung
Nach einem Neustart oder einer Änderung an den Einstellungen dauert es einen Moment, bis der Server wieder erreichbar ist. Prüfe in der **Verwaltung**, ob der Server vollständig gestartet ist, bevor du dich verbindest.
::::

:::: tip Tipp
Ein Avorion-Server belegt neben dem Game Port zusätzlich einen Query Port sowie Ports für die Steam-Abfrage. Alle Werte werden deinem Server in der **Verwaltung** zugewiesen. Trage zum Verbinden zuerst den **Game Port** ein – klappt die Verbindung damit nicht, versuche denselben Eintrag mit dem **Query Port**.
::::
