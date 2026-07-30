---
description: Einem Counter-Strike Global Offensive Server beitreten
---

# So trittst du deinem Counter-Strike Global Offensive Server bei

Counter-Strike Global Offensive wurde in Steam durch Counter-Strike 2 ersetzt. Bevor du deinem Server beitreten kannst, musst du deinen Client deshalb auf die klassische CS:GO-Version zurückstellen. Danach kommst du über die **Steam-Favoriten** oder per **Direktverbindung** in der Spielkonsole auf deinen Server.

:::: danger Wichtig
Eine normale Counter-Strike 2 Installation kann einem Counter-Strike Global Offensive Server **nicht** beitreten. Ohne den Wechsel auf den Beta-Zweig `csgo_legacy` schlägt jeder Verbindungsversuch fehl.
::::

## Client auf die CS:GO-Version umstellen

1. <b>Steam-Bibliothek öffnen</b><br>
   Öffne den Steam-Client und wechsle in deine **Bibliothek**.

2. <b>Eigenschaften öffnen</b><br>
   Klicke mit der rechten Maustaste auf **Counter-Strike 2** und wähle **Eigenschaften**.

3. <b>Beta-Zweig auswählen</b><br>
   Wechsle auf den Reiter **Betas** und wähle im Dropdown-Menü den Eintrag `csgo_legacy` aus.

   :::: info Hinweis
   Der Zweig heißt in Steam "Legacy Version of CS:GO" und benötigt **keinen** Zugangscode. Lass das Feld für den Beta-Zugangscode einfach leer.
   ::::

4. <b>Update abwarten</b><br>
   Schließe das Fenster. Steam lädt anschließend die CS:GO-Dateien herunter. Warte, bis der Download abgeschlossen ist, und starte das Spiel danach ganz normal über die Bibliothek.

:::: tip Tipp
Möchtest du später wieder Counter-Strike 2 spielen, stellst du das Dropdown-Menü im Reiter **Betas** einfach zurück auf **None**.
::::

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Counter-Strike Global Offensive nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

## Über die Steam-Favoriten

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Beispiel
   ```
   123.45.67.89:27015
   ```

   Setze hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
   ::::

5. <b>Server im Spiel auswählen</b><br>
   Starte Counter-Strike Global Offensive, wähle im Hauptmenü **Play CS:GO** und öffne den **Community Server Browser**. Auf dem Tab **Favorites** findest du deinen Server und kannst ihm beitreten.

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist in Counter-Strike Global Offensive standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. <b>Counter-Strike Global Offensive starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Einstellungen öffnen</b><br>
   Öffne die **Einstellungen** und wechsle zum Bereich **Spiel**.

3. <b>Konsole aktivieren</b><br>
   Stelle die Option **Entwicklerkonsole** auf **Ja**.

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

## Steam Account Token (GSLT)

:::: info Hinweis
In der **Verwaltung** deines Servers findest du das Pflichtfeld **Steam Account Token**. Dahinter steckt der Steam Game Server Login Token (GSLT), den der Server beim Start über `sv_setsteamaccount` an Steam übergibt. Der Token ist genau 32 Zeichen lang und besteht aus Buchstaben und Ziffern.

Einen Token erstellst du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `730`. Trage ihn anschließend in der Verwaltung ein und starte deinen Server neu.
::::

:::: warning Achtung
Jeder gleichzeitig laufende Server benötigt einen **eigenen** Token. Denselben Token auf mehreren Servern zu verwenden, ist nicht zulässig.
::::
