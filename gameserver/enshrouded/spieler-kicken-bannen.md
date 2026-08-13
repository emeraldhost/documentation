---
description: Spieler auf einem Enshrouded Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Enshrouded Server

Enshrouded kennt zwei Wege, einen störenden Spieler von deinem Server zu entfernen: den **Kick** und den **Bann**. Beides erledigst du im Spiel, nicht in der Verwaltung. Seit Update 7 landet ein gebannter Spieler auf einer dauerhaften Sperrliste und wird bei jedem weiteren Beitrittsversuch automatisch abgewiesen.

:::: info Hinweis
Kicken und Bannen darf nur, wer in einer Gruppe mit dem Recht `canKickBan` spielt. Wie du so eine Gruppe einrichtest und ihr beim Beitritt zugeordnet wirst, liest du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Kick oder Bann?

| Aktion | Wirkung |
|--------|---------|
| Kick | Entfernt den Spieler sofort vom Server. Er kann wieder beitreten, sobald der Host eine neue Sitzung geöffnet hat. |
| Bann | Entfernt den Spieler vom Server und setzt ihn auf eine dauerhafte Sperrliste. Versucht er später erneut beizutreten, weist der Server ihn automatisch ab — so lange, bis du seinen Namen wieder von der Liste nimmst. |

Der Bann funktioniert sowohl in Peer-to-Peer-Sitzungen als auch auf dedizierten Servern wie deinem.

## Spieler kicken oder bannen

1. <b>Server beitreten</b><br>
   Verbinde dich wie unter [Server beitreten](server-beitreten.md) beschrieben mit deinem Server. Gib dabei das Passwort einer Gruppe ein, die das Recht `canKickBan` besitzt.

2. <b>Spielerliste öffnen</b><br>
   Öffne im Spielmenü den Reiter **Social**. Dort siehst du alle Spieler, die gerade in deiner Welt unterwegs sind, samt ihrer Rechte auf dem Server.

3. <b>Spieler auswählen</b><br>
   Wähle den Spieler aus, den du entfernen möchtest.

4. <b>Kicken oder bannen</b><br>
   Entscheide dich für den Kick oder den Bann. Der Kick entfernt den Spieler nur aus der laufenden Sitzung, der Bann trägt ihn zusätzlich in die Sperrliste ein.

:::: warning Achtung
Ein Kick ist keine dauerhafte Sperre. Soll ein Spieler gar nicht mehr auf deinen Server kommen, banne ihn, statt ihn zu kicken.
::::

## Bann aufheben

Dasselbe Fenster, über das du einen Spieler auf die Sperrliste setzt, zeigt dir auch die komplette Sperrliste und hebt Sperren wieder auf.

1. <b>Sperrliste öffnen</b><br>
   Öffne im Spielmenü wieder den Reiter **Social** und rufe dort die Sperrliste auf. Sie zeigt alle Namen, die aktuell für deinen Server gesperrt sind.

2. <b>Spieler freigeben</b><br>
   Wähle den gewünschten Namen aus und hebe die Sperre auf. Danach kann der Spieler deinem Server wieder beitreten.

:::: info Hinweis
Die Sperrliste ist dauerhaft. Ein einmal gebannter Spieler bleibt gesperrt, bis du seinen Namen selbst wieder entfernst.
::::

## Zugang über Passwörter steuern

Der Bann trifft einzelne Spieler. Wer überhaupt auf deinen Server kommt und mit welchen Rechten, steuerst du über die Gruppen-Passwörter im Abschnitt `userGroups` der Datei `enshrouded_server.json`. Vergibst du dort ein neues Passwort, kommen nur noch Spieler herein, die es kennen. Wie du die Passwörter änderst, liest du unter [Server Passwort ändern](server-passwort-aendern.md).

:::: danger Wichtig
In der Verwaltung kannst du kein Server-Passwort setzen. Passwörter vergibst du bei Enshrouded ausschließlich über den Abschnitt `userGroups` in der `enshrouded_server.json`. Stoppe deinen Server, bevor du die Datei bearbeitest — sonst wird deine Änderung überschrieben.
::::

:::: tip Tipp
Ein Passwortwechsel sperrt alle aus, die das alte Passwort kannten. Willst du nur einen einzelnen Spieler loswerden, ist der Bann der schnellere Weg.
::::
