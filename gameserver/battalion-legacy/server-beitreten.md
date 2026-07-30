---
description: Einem BATTALION Legacy Server beitreten
---

# So trittst du deinem BATTALION Legacy Server bei

BATTALION Legacy bringt einen funktionierenden **Serverbrowser** im Spiel mit. Darüber findest du deinen Server anhand seines **Servernamens**. Eine Direktverbindung über die IP-Adresse ist im Spielmenü nicht vorgesehen.

## Verbindungsdaten finden

:::: danger Wichtig
Den **Servernamen** sowie die **IP-Adresse** und die Ports deines Servers findest du in der **Verwaltung**. Der Servername ist dabei der wichtigste Wert — über ihn suchst du deinen Server im Serverbrowser.
::::

:::: info Welche Ports nutzt BATTALION Legacy?
Dein Server belegt zwei Ports:

| Port | Verwendung |
|------|------------|
| **Game Port** | Hierüber laufen die Spieldaten zwischen Server und Spielern |
| **Query Port** | Hierüber meldet sich dein Server bei Steam an und erscheint im Serverbrowser |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**. Beide Ports werden deinem Server beim Anlegen automatisch zugewiesen — du musst sie weder ändern noch von Hand freigeben.
::::

## Server beitreten

1. <b>Server starten</b><br>
   Starte deinen Server in der **Verwaltung** und warte, bis er vollständig hochgefahren ist.

   :::: tip Tipp
   In der Konsole deines Servers erkennst du am Eintrag `OnCreateSessionComplete`, dass die Sitzung angelegt wurde und der Server bereit ist.
   ::::

2. <b>Servernamen prüfen</b><br>
   Sieh in der Verwaltung nach, welcher **Servername** für deinen Server hinterlegt ist. Genau unter diesem Namen erscheint er im Serverbrowser.

3. <b>BATTALION Legacy starten</b><br>
   Starte das Spiel über Steam auf deinem PC und warte, bis das Hauptmenü geladen ist.

4. <b>Serverbrowser öffnen</b><br>
   Öffne im Hauptmenü die Serverliste. Dort werden alle erreichbaren Server aufgeführt.

5. <b>Nach deinem Server suchen</b><br>
   Gib den Namen deines Servers in die Suche ein, um die Liste einzugrenzen.

6. <b>Beitreten</b><br>
   Wähle deinen Server aus der Liste aus und tritt ihm bei.

:::: tip Tipp
Wähle einen möglichst eindeutigen Servernamen. Ein sehr allgemeiner Name macht es unnötig schwer, deinen Server in der Liste von den übrigen zu unterscheiden.
::::

:::: info Direkt über die IP verbinden
Im Menü des Spiels gibt es kein Feld für eine IP-Adresse. Die offizielle Serverdokumentation von BATTALION 1944, dem Vorgänger von BATTALION Legacy, nennt für die Konsole den Befehl `connect <IP>:<Game Port>`. Ob er in der aktuellen Fassung noch funktioniert, ist nicht belegt — wie du die Konsole freischaltest, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Eckige Klammer hinter dem Servernamen

:::: warning Achtung
Erscheint dein Server mit einer eckigen Klammer am Ende des Namens in der Liste — aus `Mein Server` wird `Mein Server]` —, ist das ein bekannter Fehler beim Übergeben des Namens und kein Tippfehler in deinen Einstellungen. Auf den Betrieb deines Servers hat er keine Auswirkung.

Suche im Serverbrowser deshalb am besten nach einem eindeutigen Teil des Namens **ohne** das angehängte Zeichen.
::::

## Dein Server erscheint nicht in der Liste

:::: warning Achtung
Taucht dein Server nicht im Serverbrowser auf, arbeite diese Punkte der Reihe nach ab:

- **Server wirklich online?** Prüfe in der Verwaltung, ob der Server läuft und nicht gerade neu startet oder Dateien installiert.
- **Nach dem Start etwas Zeit geben.** Nach dem Start dauert es einen Moment, bis dein Server in der Liste erscheint. Warte ab und aktualisiere die Liste danach erneut.
- **Schreibweise des Namens prüfen.** Suche exakt nach dem Namen aus der Verwaltung, am besten nur nach einem eindeutigen Teil davon.
- **Liste aktualisieren.** Verlasse den Serverbrowser im Spiel und öffne ihn erneut, damit die Liste neu abgefragt wird.
- **Servername geändert?** Nach einer Änderung des Servernamens musst du den Server neu starten, damit der neue Name übernommen wird.
::::

## Fortschritt und Speicherstand

:::: info Hinweis
BATTALION Legacy ist ein reiner PvP-Shooter. Auf dem Server wird kein Weltspeicherstand und kein Spielerfortschritt abgelegt — gespeichert wird nur die laufende Runde. Es gibt daher keinen Spielstand, den du übertragen oder herunterladen müsstest.
::::

:::: tip Tipp
Wie du dir auf deinem Server Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
