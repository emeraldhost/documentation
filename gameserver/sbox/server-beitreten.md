---
description: "Einem s&box Server beitreten"
---

# So trittst du deinem s&box Server bei

Es gibt drei Wege auf deinen Server: über den Serverbrowser im Spiel, über eine Direktverbindung mit der IP-Adresse und über die Lobby-ID deines Servers.

:::: info Hinweis
Auf deinem PC musst du nichts installieren. Spielmodus, Map und alle weiteren Inhalte lädt s&box beim Beitritt automatisch nach — fehlende Inhalte inklusive Spielcode schickt der Server direkt an dich.
::::

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse sowie den **Game Port** und den **Query Port** deines Servers findest du in der **Verwaltung** deines Servers. Zum Verbinden verwendest du immer den **Game Port**, nicht den Query Port.
::::

## Über den Serverbrowser im Spiel

1. <b>s&box starten</b><br>
   Starte s&box und warte, bis das Hauptmenü geladen ist.

2. <b>Serverliste öffnen</b><br>
   Wähle im Menü **Servers**.

3. <b>Nach deinem Server suchen</b><br>
   Gib den Namen deines Servers in das **Suchfeld auf der linken Seite** ein. Der Filter am oberen Rand ist nicht die Namenssuche.

4. <b>Filter prüfen</b><br>
   Ist dein Server noch leer oder bereits voll, aktiviere die Optionen **Show Empty** beziehungsweise **Show Full**. Sonst wird er nicht angezeigt.

5. <b>Server beitreten</b><br>
   Klicke auf das Symbol neben dem Servernamen, um beizutreten.

:::: info Hinweis
Der Serverbrowser fragt deinen Server über den **Query Port** ab. Von dort kommen Servername, Map und Spielerzahl. Verbunden wird anschließend über den **Game Port**.
::::

## Direkt über die Konsole verbinden

1. <b>Konsole freischalten</b><br>
   Öffne in s&box die Einstellungen und aktiviere unter den Tastatur-Einstellungen das **Console Overlay**.

2. <b>Konsole öffnen</b><br>
   Drücke die Taste links neben der `1` (`` ` `` beziehungsweise `^`).

3. <b>Verbindungsbefehl eingeben</b><br>
   Gib die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   connect <IP-Adresse>:<Game Port>
   ```

   :::: tip Beispiel
   ```
   connect 123.45.67.89:27031
   ```
   ::::

:::: warning Achtung
Gib den Port immer mit an. Lässt du ihn weg, hängt dein Spiel automatisch den Port an, der lokal bei dir eingestellt ist — und der entspricht in der Regel nicht dem Game Port deines Servers.
::::

## Über die Lobby-ID verbinden

s&box leitet Verbindungen standardmäßig über das Steam-Relay. Die IP-Adresse deines Servers wird dabei nicht offengelegt, weshalb Facepunch selbst den Weg über die Lobby-ID empfiehlt. Diese ändert sich bei jedem Serverstart.

1. <b>Server-Konsole öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur **Server-Konsole**.

2. <b>Status abfragen</b><br>
   Gib folgenden Befehl ein:

   ```
   status
   ```

3. <b>Lobby-ID kopieren</b><br>
   In der Ausgabe steht die Lobby-ID deines Servers. Kopiere sie.

4. <b>Im Spiel verbinden</b><br>
   Öffne im Spiel die Konsole und gib die Lobby-ID ohne weiteren Zusatz an:

   ```
   connect 109775241234567890
   ```

:::: info Hinweis
Meldet `status` **Not Connected**, hat der Spielmodus noch keine Lobby erstellt. Warte, bis der Server vollständig hochgefahren ist, und frage den Status danach erneut ab.
::::

## Welche Ports nutzt s&box?

:::: info Hinweis
| Wert | Verwendung |
|------|------------|
| Game Port | Hierüber verbinden sich die Spieler. Dieser Port gehört bei `connect` hinter den Doppelpunkt. |
| Query Port | Hierüber wird der Server abgefragt: Servername, Map und Spielerzahl im Serverbrowser. |

Welche Ports für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: tip Tipp
Wird dein Server im Browser nicht gefunden, nutze die Lobby-ID. Dieser Weg funktioniert unabhängig davon, ob dein Server in der öffentlichen Liste auftaucht.
::::
