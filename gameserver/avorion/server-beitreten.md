---
description: Einem Avorion Server beitreten
---

# So trittst du deinem Avorion Server bei

Avorion bietet dir zwei Wege auf deinen Server: den Serverbrowser im Spiel oder die Direktverbindung über die IP-Adresse. Die Direktverbindung ist der zuverlässigste Weg, weil dein Server dafür nicht öffentlich gelistet sein muss.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Verwende den Game Port – nicht den Query Port.
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

5. <b>Beitreten</b><br>
   Bestätige mit **Add Server** beziehungsweise **Join**. Der Server bleibt anschließend in deiner Serverliste stehen und du kannst ihn beim nächsten Mal direkt anwählen.

## Über den Serverbrowser

1. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

2. <b>Serverbrowser öffnen</b><br>
   Klicke auf **Browse Servers**.

3. <b>Server suchen</b><br>
   Suche in der Liste nach dem Namen deines Servers und tritt ihm per Doppelklick beziehungsweise über **Join** bei.

:::: info Hinweis
Im Serverbrowser erscheint dein Server nur, wenn er öffentlich gelistet ist. Gesteuert wird das über den Startparameter `--listed true` beziehungsweise den Wert `isListed=true` in der `server.ini`. Findest du deinen Server dort nicht, nutze die Direktverbindung über **Join via IP**.
::::

:::: warning Achtung
Nach einem Neustart oder einer Änderung an den Einstellungen dauert es einen Moment, bis der Server wieder erreichbar ist. Prüfe in der **Verwaltung**, ob der Server vollständig gestartet ist, bevor du dich verbindest.
::::

:::: tip Tipp
Ein Avorion-Server belegt neben dem Game Port zusätzlich einen Query Port sowie Ports für die Steam-Abfrage. Diese Ports werden dir in der **Verwaltung** zugewiesen – zum Verbinden im Spiel brauchst du davon ausschließlich den Game Port.
::::
