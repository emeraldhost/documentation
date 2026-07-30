---
description: Einem The Front Server beitreten
---

# So trittst du deinem The Front Server bei

Deinem The Front Server trittst du über den Serverbrowser im Spiel bei. Dort suchst du deinen Server anhand seines **Namens** und verbindest dich mit einem Klick.

:::: info Hinweis
Ein Eingabefeld für eine Direktverbindung über IP-Adresse und Port ist in The Front nicht vorgesehen. Gib deinem Server deshalb einen eindeutigen Namen, den du in der Serverliste schnell wiederfindest.
::::

## Server im Spiel suchen

1. <b>The Front starten</b><br>
   Starte The Front auf deinem PC.

2. <b>Serverliste öffnen</b><br>
   Klicke im Menü auf **Servers**.

3. <b>Dedicated Server wählen</b><br>
   Wechsle auf den Reiter **Dedicated Server**. Hier werden alle gemieteten und selbst betriebenen Server aufgelistet.

4. <b>Server suchen</b><br>
   Gib den Namen deines Servers in das Suchfeld oben rechts ein. Die Liste wird auf passende Treffer eingegrenzt.

   :::: tip Tipp
   Den Namen deines Servers findest du in der **Verwaltung**. Suche notfalls nur nach einem markanten Teil des Namens – die Suche filtert auch nach Teilbegriffen.
   ::::

5. <b>Server als Favorit markieren</b><br>
   Klicke auf das Stern-Symbol links neben deinem Server. Favorisierte Server stehen beim nächsten Aktualisieren der Liste ganz oben und du musst nicht erneut suchen.

6. <b>Verbinden</b><br>
   Klicke deinen Server an und bestätige im Fenster, das sich öffnet, mit **Connect**.

7. <b>Passwort eingeben</b><br>
   Hast du für deinen Server ein Passwort gesetzt, wirst du beim Beitreten danach gefragt. Trage es ein und bestätige.

## Server erscheint nicht in der Liste

1. <b>Server prüfen</b><br>
   Sieh in der **Verwaltung** nach, ob dein Server tatsächlich läuft. Ein frisch gestarteter Server braucht einen Moment, bis er sich in der Serverliste meldet.

2. <b>Liste aktualisieren</b><br>
   Aktualisiere die Serverliste im Spiel und suche erneut.

3. <b>Namen prüfen</b><br>
   Vergleiche die Schreibweise: Suchst du nach einem Namen mit Tippfehler, bleibt die Liste leer. Suche im Zweifel nur nach einem kurzen, eindeutigen Teil des Namens.

:::: info Welche Ports nutzt The Front?
Ein The Front Server belegt vier Ports, die in der Regel direkt aufeinanderfolgend vergeben werden. Die konkreten Werte werden deinem Server in der **Verwaltung** zugewiesen – verlass dich immer auf die Zahlen, die dort stehen.

| Port | Verwendung |
|------|-----------|
| **Game Port** | Der eigentliche Spielverkehr – darüber läuft deine Verbindung zum Server |
| Beacon-Port | Game Port + 1, interne Abfragen des Spiels |
| **Query Port** | Game Port + 2, darüber meldet sich dein Server in der Serverliste |
| Shutdown-Port | Game Port + 3, wird zum sauberen Beenden des Servers genutzt |

Damit dein Server gefunden wird, muss der **Query Port** erreichbar sein. Verbunden wirst du anschließend über den **Game Port**.
::::

:::: tip Tipp
Möchtest du auf deinem Server Adminbefehle nutzen, trägst du dich vorher als Admin ein: [Admin hinzufügen](admin-hinzufuegen.md).
::::
