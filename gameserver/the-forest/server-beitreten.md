---
description: Einem The Forest Server beitreten
---

# So trittst du deinem The Forest Server bei

The Forest hat **keine Direktverbindung über die IP-Adresse im Spielmenü**. Du findest deinen Server entweder über den Serverbrowser des Spiels oder trägst ihn in Steam als Favoriten ein. Für den Eintrag in Steam benötigst du den **Query Port** – nicht den Game Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Für den Eintrag in den Steam-Favoriten verwendest du immer den **Query Port**, nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.
::::

## Über den Serverbrowser im Spiel

1. <b>The Forest starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer** und anschließend **Join Game**.

3. <b>Quelle umstellen</b><br>
   Stelle die Quelle links auf **Dedicated (Internet)**. Bei den anderen Quellen wird dein Server nicht angezeigt.

4. <b>Server suchen</b><br>
   Gib in der Suchleiste den Namen deines Servers ein.

5. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Liste aus:

   - **Join** startet mit einem neuen Charakter.
   - **Continue** lädt deinen bereits auf diesem Server gespeicherten Charakter.

## Über die Steam-Favoriten

Wenn du gezielt über die IP-Adresse beitreten möchtest, trägst du den Server in Steam ein. Das ersetzt die fehlende Direktverbindung im Spiel.

:::: info Hinweis
Dieser Schritt lässt sich ausschließlich in Steam erledigen, nicht im Spiel selbst.
::::

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den **Query Port** deines Servers ein:

   :::: tip Beispiel
   ```
   123.45.67.89:27016
   ```
   ::::

5. <b>Liste aktualisieren</b><br>
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt.

6. <b>Server beitreten</b><br>
   Starte The Forest, öffne **Multiplayer → Join Game** und stelle die Quelle auf **Favorites**. Dort erscheint dein Server.

## Passwortgeschützter Server

Ist für deinen Server ein Passwort gesetzt, erscheint in der Serverliste ein Schloss-Symbol. Beim Beitreten wirst du jedes Mal nach dem Passwort gefragt.

:::: tip Tipp
Im selben Fenster gibt es zusätzlich ein Feld für das **Admin-Passwort**. Trägst du dort das Admin-Passwort deines Servers ein, bist du nach dem Beitritt Admin – siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Welche Ports nutzt The Forest?

:::: info Hinweis
Ein The-Forest-Server belegt drei Ports:

| Konfigurationswert | Standard | Verwendung |
|--------------------|----------|------------|
| `serverSteamPort` | `8766` | Kommunikation mit Steam |
| `serverGamePort` | `27015` | Game Port, über den die Spieldaten laufen |
| `serverQueryPort` | `27016` | Query Port – hierüber fragen Steam und der Serverbrowser den Server ab, und hierüber verbinden sich Spieler |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Taucht dein Server im Serverbrowser nicht auf, trage ihn über die Steam-Favoriten mit dem Query Port ein. Über die Favoriten findest du ihn unabhängig davon, ob er in der öffentlichen Liste erscheint.
::::
