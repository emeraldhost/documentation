---
description: Einem Abiotic Factor Server beitreten
---

# So trittst du deinem Abiotic Factor Server bei

Für Abiotic Factor ist **kein Eingabefeld für eine Direktverbindung über die IP-Adresse im Spiel** dokumentiert. Du findest deinen Server entweder über den Serverbrowser im Spiel oder trägst ihn in Steam als Favoriten ein.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse, den **Game Port** und den **Query Port** deines Servers findest du in der **Verwaltung**. Beide Ports werden deinem Server dort zugewiesen – verwende immer die Werte, die in deiner Verwaltung stehen.
::::

## Über den Serverbrowser im Spiel

1. <b>Abiotic Factor starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Serverliste öffnen</b><br>
   Wähle im Hauptmenü **Join a Server**. Je nach Version erreichst du den Punkt erst, nachdem du das Spiel über **Enter the Facility** gestartet hast.

3. <b>Dedicated Server einblenden</b><br>
   Aktiviere in den Filtern die Option **Show Dedicated**. Ohne diesen Filter werden Dedicated Server nicht in der Liste angezeigt.

4. <b>Server suchen</b><br>
   Gib in der Suchleiste den Namen deines Servers ein.

5. <b>Liste aktualisieren</b><br>
   Aktualisiere die Serverliste, damit der Server neu abgefragt wird.

6. <b>Beitreten</b><br>
   Wähle deinen Server aus der Liste und klicke auf **Join**. Ist ein Server-Passwort gesetzt, wirst du jetzt danach gefragt.

## Über die Steam-Favoriten

:::: info Hinweis
Taucht dein Dedicated Server nicht im Serverbrowser des Spiels auf, ist der Weg über den Steam-Serverbrowser die zuverlässigste Lösung: Spiel schließen, den Server in Steam eintragen und von dort beitreten.
::::

1. <b>Steam öffnen</b><br>
   Schließe Abiotic Factor und öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den **Game Port** deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   :::: tip Tipp
   Findet Steam den Server so nicht, versuche denselben Eintrag mit dem **Query Port**. Welcher der beiden Ports funktioniert, hängt von der Serverkonfiguration ab – beide Varianten sind einen Versuch wert.
   ::::

5. <b>Liste aktualisieren</b><br>
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt.

6. <b>Beitreten</b><br>
   Wähle den Server in der Favoritenliste aus und klicke auf **Verbinden**. Steam startet Abiotic Factor und verbindet dich mit dem Server.

## Welche Ports nutzt Abiotic Factor?

:::: info Hinweis
Ein Abiotic-Factor-Server belegt zwei Ports:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| **Game Port** | UDP | Hierüber laufen die Spieldaten |
| **Query Port** | UDP | Hierüber fragen Steam und der Serverbrowser deinen Server ab |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Prüfe der Reihe nach:

- Ist der Filter **Show Dedicated** im Serverbrowser aktiviert?
- Hast du die Serverliste nach dem Start des Servers aktualisiert? Frisch gestartete Server erscheinen dort mit Verzögerung.
- Trage den Server ersatzweise über die **Steam-Favoriten** ein. Darüber findest du ihn unabhängig davon, ob er in der öffentlichen Liste auftaucht.
::::

:::: info Direktverbindung statt Steam-P2P
Dedicated Server von Abiotic Factor verwenden keine Steam-P2P-Verbindung, sondern eine direkte Verbindung zur IP-Adresse deines Servers. Deshalb funktioniert das Beitreten auch dann, wenn du keine Steam-Freundschaft mit den anderen Spielern hast.
::::

:::: warning Kein Direct Connect im Spiel
Ein Feld, in das du im Spielmenü direkt `IP:Port` eintragen kannst, ist für Abiotic Factor nicht dokumentiert. Alle beschriebenen Beitrittswege laufen über den Serverbrowser des Spiels oder über die Steam-Favoriten.
::::
