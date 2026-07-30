---
description: Einem No One Survived Server beitreten
---

# So trittst du deinem No One Survived Server bei

No One Survived sieht **keine Direktverbindung über die IP-Adresse** vor. Du findest deinen Server über die Serverliste im Spiel im Bereich **Private Server** – gesucht wird dort nach **Servername** und **Region**.

:::: danger Wichtig
Servername und Region deines Servers stehen in der **Verwaltung**. Beide Angaben musst du im Spiel genau so eintragen, wie sie dort hinterlegt sind – sonst bleibt die Trefferliste leer. Das ist der häufigste Grund, warum ein Beitritt scheitert.
::::

:::: tip Tipp
Da du deinen Server über den Namen suchst, lohnt sich ein eindeutiger Servername. Bei einem sehr allgemeinen Namen wie `Server` findest du deinen Server nur schwer zwischen den anderen Einträgen wieder.
::::

## Server beitreten

1. <b>Verbindungsdaten notieren</b><br>
   Öffne die **Verwaltung** deines Servers und notiere dir den **Servernamen** und die eingestellte **Region**.

2. <b>No One Survived starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

3. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

4. <b>Charakter wählen</b><br>
   Wähle den Charakter aus, mit dem du spielen möchtest, oder lege einen neuen an, und bestätige die Auswahl. Erst danach gelangst du zur Serverauswahl.

5. <b>Private Server öffnen</b><br>
   Wechsle in den Bereich **Private Server**. Dort werden die privaten Server aufgelistet – also auch dein eigener.

   :::: info Hinweis
   Fragt das Spiel an dieser Stelle, ob der Servermodus gewechselt werden soll, bestätige das. Das Spiel schließt sich danach – starte es erneut und wiederhole die Schritte 2 bis 5.
   ::::

6. <b>Server suchen</b><br>
   Trage den **Servernamen** und die **Region** aus Schritt 1 ein und starte die Suche.

7. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Trefferliste aus und bestätige den Beitritt über **Join In**.

   :::: info Hinweis
   Ist für deinen Server ein Passwort gesetzt, wirst du beim Beitreten danach gefragt. Das ist das Server-Passwort – nicht das Admin-Passwort.
   ::::

## Die Region ist nur ein Suchfilter

:::: info Hinweis
Die Region deines Servers ist ausschließlich ein Filter für die Serversuche. Sie verschiebt deinen Server nicht an einen anderen Standort und ändert nichts an deinem Ping.

Wichtig ist nur, dass Spieler bei der Suche dieselbe Region auswählen, die in deiner Verwaltung eingestellt ist. Steht dort `All`, muss auch im Spiel `All` gewählt werden.
::::

## Welche Ports nutzt No One Survived?

:::: info Hinweis
Ein No-One-Survived-Server belegt zwei Ports, die beide über **UDP** angesprochen werden:

| Port | Verwendung |
|------|------------|
| Game Port | Überträgt die eigentlichen Spieldaten während des Spielens |
| Query Port | Hierüber wird dein Server abgefragt – erst damit taucht er in der Serverliste auf |

Welche Ports deinem Server zugewiesen sind, siehst du in der **Verwaltung**. Beide Ports müssen erreichbar sein: Fehlt der Query Port, wird dein Server nicht gefunden; fehlt der Game Port, bricht die Verbindung beim Laden ab.
::::

:::: warning Achtung
Verlasse dich nicht auf Portangaben aus anderen Quellen. Die Ports deines Servers werden dir beim Erstellen zugewiesen und können von den Werten abweichen, die anderswo als Standard genannt werden. Maßgeblich sind ausschließlich die Werte in deiner **Verwaltung**.
::::

:::: warning Kein Beitritt über IP-Adresse
Für No One Survived ist **kein** Beitritt über die IP-Adresse dokumentiert – weder im Spiel noch über den Steam-Serverbrowser. Der einzige dokumentierte Weg ist die Suche nach Servername und Region im Bereich **Private Server**.
::::

## Server wird nicht gefunden

:::: warning Achtung
Taucht dein Server in der Trefferliste nicht auf, prüfe der Reihe nach:

- Ist der Server in der **Verwaltung** vollständig gestartet? Die Serverliste zeigt ihn erst, wenn er sich angemeldet hat.
- Stimmt die **Region** im Spiel mit der Region in der Verwaltung überein? Eine abweichende Region ist der häufigste Grund für eine leere Trefferliste.
- Hast du den **Servernamen** exakt so eingegeben, wie er in der Verwaltung hinterlegt ist? Achte auch auf Groß- und Kleinschreibung sowie auf Leerzeichen.
- Starte die Suche erneut. Nach einem Serverneustart dauert es einen Moment, bis der Server wieder erscheint.
- Starte das Spiel einmal neu. Nach einem Wechsel des Servermodus erscheinen private Server teilweise erst nach einem Neustart des Spiels.
::::
