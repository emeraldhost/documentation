---
description: Spieler auf einem No One Survived Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem No One Survived Server

Spieler entfernst du auf einem No One Survived Server über das **Admin-Panel im Spiel**. Chat- oder Konsolenbefehle sind dafür nicht dokumentiert.

:::: info Hinweis
Die Funktionen stehen nur Spielern zur Verfügung, die sich mit dem Admin-Passwort angemeldet haben. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken

1. <b>Als Admin beitreten</b><br>
   Tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md).

2. <b>Admin-Panel öffnen</b><br>
   Drücke gleichzeitig `Alt` + `Shift` + `O`, gib das Admin-Passwort ein und bestätige die Eingabe.

3. <b>Blacklist öffnen</b><br>
   Wechsle im Panel in den Reiter **Blacklist**.

4. <b>Spielerliste aktualisieren</b><br>
   Klicke auf **Refresh**, damit die aktuell verbundenen Spieler geladen werden.

5. <b>Spieler kicken</b><br>
   Klicke neben dem gewünschten Spieler auf **Kick Out**. Der Spieler wird vom Server getrennt und kann jederzeit wieder beitreten.

## Spieler bannen

1. <b>Blacklist öffnen</b><br>
   Öffne das Admin-Panel mit `Alt` + `Shift` + `O`, melde dich an und wechsle in den Reiter **Blacklist**.

2. <b>Spielerliste aktualisieren</b><br>
   Klicke auf **Refresh**.

3. <b>Spieler bannen</b><br>
   Klicke neben dem gewünschten Spieler auf **Add to Blacklist**. Der Spieler wird vom Server getrennt und kann nicht mehr beitreten.

## Bann aufheben

1. <b>Blacklist öffnen</b><br>
   Öffne das Admin-Panel mit `Alt` + `Shift` + `O`, melde dich an und wechsle in den Reiter **Blacklist**.

2. <b>Bann entfernen</b><br>
   Suche den gebannten Spieler in der Liste und klicke daneben auf **Remove**. Danach kann er deinem Server sofort wieder beitreten.

:::: info Hinweis
Die genaue Bezeichnung der Reiter und Schaltflächen kann sich mit Spiel-Updates ändern. Such im Admin-Panel nach der Übersicht mit den verbundenen und gesperrten Spielern.
::::

:::: warning Spieler muss verbunden sein
Kicken und Bannen setzt voraus, dass der Spieler in der Liste des Panels auftaucht. Einen Spieler, der gerade nicht auf dem Server ist, kannst du auf diesem Weg nicht im Voraus sperren.
::::

:::: danger Sperre dich nicht selbst aus
Trägst du dich versehentlich selbst in die Blacklist ein, kommst du nicht mehr auf deinen Server und damit auch nicht mehr an das Admin-Panel. Eine Datei zum Bearbeiten der Blacklist über SFTP ist für No One Survived **nicht dokumentiert** – gehe deshalb beim Bannen sorgfältig vor.
::::

## Keine Befehle und kein RCON

:::: danger Wichtig
Für No One Survived sind **keine Serverkonsole, keine Chat-Befehle und kein RCON** dokumentiert. Alles, was Kicken und Bannen betrifft, läuft über das Admin-Panel im Spiel. Befehle wie `Kick <Spieler>`, `Ban <Spieler>` oder `Unban <Spieler>` tauchen in der offiziellen Dokumentation nicht auf – verlasse dich nicht auf kursierende Befehlslisten.
::::

:::: tip Tipp
Möchtest du deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Personen weiter. Eine Whitelist gibt es für No One Survived nicht.
::::
