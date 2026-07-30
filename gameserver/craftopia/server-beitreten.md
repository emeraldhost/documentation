---
description: Einem Craftopia Server beitreten
---

# So trittst du deinem Craftopia Server bei

Craftopia hat **keinen Serverbrowser und keine Serverliste**. Du verbindest dich immer direkt über die IP-Adresse und den Port deines Servers.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und den **Game Port** deines Servers findest du in der **Verwaltung**. Verwende genau die dort angezeigten Werte – Craftopia nutzt zum Beitreten keinen abweichenden Port.
::::

## Über die IP-Adresse beitreten

1. <b>Craftopia starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

3. <b>Charakter auswählen</b><br>
   Fragt Craftopia nach einem Charakter, wähle den Charakter aus, mit dem du dem Server beitreten möchtest, oder lege einen neuen an.

4. <b>Join via IP wählen</b><br>
   Klicke auf **Join via IP**.

5. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   :::: tip Beispiel
   ```
   123.45.67.89:<Game Port aus der Verwaltung>
   ```
   ::::

6. <b>Verbinden</b><br>
   Bestätige die Eingabe und starte das Spiel. Du landest anschließend direkt in der Welt deines Servers.

:::: info Hinweis
Statt der IP-Adresse funktioniert auch ein Domainname, der auf deinen Server zeigt. Der Port muss trotzdem angegeben werden.
::::

## Passwortgeschützter Server

Ist für deinen Server ein Passwort gesetzt, fragt Craftopia es beim Verbinden ab.

:::: warning Achtung
Das Serverpasswort von Craftopia ist **eine reine Zahl mit maximal acht Stellen**. Buchstaben oder Sonderzeichen sind nicht möglich – ein Passwort wie `12345678` ist gültig, `MeinPasswort` nicht.
::::

## Welchen Port nutzt Craftopia?

:::: info Hinweis
Ein Craftopia Server belegt nur einen einzigen Port, den **Game Port** (UDP). Einen separaten **Query Port** gibt es nicht, ebenso wenig einen TCP-Port. Im Spiel trägst du deshalb exakt den Game Port ein, der in deiner Verwaltung steht.
::::

:::: warning Server nicht erreichbar
Prüfe der Reihe nach:

- Läuft dein Server laut Verwaltung tatsächlich? Der erste Start dauert etwas länger, weil die Welt erzeugt wird.
- Sind IP-Adresse und Game Port exakt übernommen? Ein Zahlendreher im Port ist die häufigste Ursache für eine fehlgeschlagene Verbindung.
- Ist für deinen Server ein Passwort gesetzt? Dann musst du es beim Verbinden korrekt eingeben.
::::

:::: warning Version prüfen
Client und Server müssen dieselbe Spielversion nutzen. Nach einem Update des Spiels kann eine Verbindung fehlschlagen, bis auch dein Server auf demselben Stand ist.
::::
