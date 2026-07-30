---
description: Spieler auf einem Longvinter Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Longvinter Server

Spieler entfernst du auf einem Longvinter Server über das **Admin-Panel im Spiel**. Chat- oder Konsolenbefehle gibt es dafür nicht.

:::: info Hinweis
Du benötigst Adminrechte, um das Admin-Panel zu öffnen. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken oder bannen

1. <b>Als Admin beitreten</b><br>
   Verbinde dich mit deinem Server – siehe [Server beitreten](server-beitreten.md).

2. <b>Admin-Panel öffnen</b><br>
   Drücke `ESC` und klicke oben links auf **Admin panel**.

3. <b>Spielerliste öffnen</b><br>
   Wechsle auf den Reiter **Current Players**. Dort siehst du alle Spieler, die aktuell auf deinem Server sind.

4. <b>Spieler auswählen</b><br>
   Klicke beim gewünschten Spieler auf das **Plus-Symbol**.

5. <b>Aktion wählen</b><br>
   Wähle **Kick** oder **Ban**:

   - **Kick** trennt den Spieler vom Server. Er kann jederzeit wieder beitreten.
   - **Ban** sperrt den Spieler dauerhaft aus. Er kann sich erst wieder verbinden, wenn du den Bann aufhebst.

## Bann aufheben

1. <b>Admin-Panel öffnen</b><br>
   Drücke im Spiel `ESC` und klicke oben links auf **Admin panel**.

2. <b>Bannliste öffnen</b><br>
   Wechsle auf den Reiter **Banned ID's**. Dort werden alle gebannten Spieler mit ihrer EOS ID aufgelistet.

3. <b>Bann entfernen</b><br>
   Klicke bei der gewünschten EOS ID auf **UnBan**.

:::: info Hinweis
Die Bannliste wird auf deinem Server gespeichert und bleibt auch nach einem Neustart erhalten. Sie lässt sich ausschließlich im Admin-Panel bearbeiten – einen dokumentierten Weg, alle Banns auf einmal über eine Datei zurückzusetzen, gibt es nicht.
::::

## Keine Kick- und Bann-Befehle im Chat

:::: warning Achtung
Spieler kickst und bannst du ausschließlich über das Admin-Panel. Dafür gibt es **keine Chatbefehle** und **kein RCON**. Auch die Konsole in der Verwaltung nimmt keine Spielbefehle entgegen – sie zeigt nur die Ausgaben des Servers an. Kursierende Befehlslisten mit Einträgen wie `/kick`, `/ban` oder `/announce` sind nicht belegt und funktionieren nicht. Andere Adminbefehle im Chat, etwa `/noclip` oder `/give`, gibt es zwar – zum Entfernen von Spielern führt aber kein Weg am Admin-Panel vorbei.
::::

:::: tip Tipp
Möchtest du deinen Server nur bestimmten Spielern zugänglich machen, setze in der **Verwaltung** ein Serverpasswort und gib es nur an diese Spieler weiter. Beachte dabei, dass das Passwort nur aus Buchstaben und Zahlen bestehen darf.
::::
