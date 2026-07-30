---
description: Einem Counter-Strike Source Server beitreten
---

# So trittst du deinem Counter-Strike Source Server bei

Auf deinen Counter-Strike Source Server kommst du auf drei Wegen: über den **Serverbrowser im Spiel**, über die **Steam-Favoriten** oder per **Direktverbindung** in der Spielkonsole.

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Counter-Strike Source nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

## Über den Serverbrowser im Spiel

1. <b>Counter-Strike Source starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Serversuche öffnen</b><br>
   Wähle im Hauptmenü **Find Servers**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favorites** und klicke auf **Add a Server**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Beispiel
   ```
   123.45.67.89:27015
   ```

   Setze hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
   ::::

5. <b>Server beitreten</b><br>
   Bestätige die Eingabe. Dein Server erscheint anschließend in der Favoritenliste und du kannst ihn von dort auswählen und beitreten.

## Über die Steam-Favoriten

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den Game Port deines Servers ein und bestätige.

5. <b>Beitreten</b><br>
   Wähle den Server aus und verbinde dich. Der Server erscheint anschließend auch im Spiel unter **Find Servers** im Tab **Favorites**.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Counter-Strike Source standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. <b>Counter-Strike Source starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Einstellungen öffnen</b><br>
   Öffne die **Optionen** und wechsle zu **Tastatur**.

3. <b>Konsole aktivieren</b><br>
   Öffne **Erweitert** und aktiviere dort die **Entwicklerkonsole**.

:::: tip Tipp
Alternativ kannst du die Konsole dauerhaft über den Startparameter `-console` aktivieren. Diesen trägst du in Steam über einen Rechtsklick auf das Spiel unter **Eigenschaften** bei den **Startoptionen** ein.
::::

## Über die Spielkonsole verbinden

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   ```
   connect 123.45.67.89:27015
   ```

   Setze hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
   ::::

:::: info Server erscheint nicht in der öffentlichen Serverliste?
Ohne gültigen Steam Game Server Login Token (GSLT) wird dein Server unter Umständen nicht in der öffentlichen Serverliste geführt und nutzt kein VAC. Einen Token erstellst du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `240`. Trage ihn anschließend in der **Verwaltung** deines Servers ein und starte den Server neu. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Game Port funktioniert auch ohne Token.
::::
