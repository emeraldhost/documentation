---
description: Einem Eco Server beitreten
---

# So trittst du deinem Eco Server bei

Eco hat keine klassische Direktverbindung im Hauptmenü. Stattdessen fügst du deinen Server im Serverbrowser über das **Plus-Symbol** hinzu – oder du suchst ihn in der öffentlichen Serverliste. Zum Verbinden verwendest du immer den **Game Port** deines Servers.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Verwende nicht den Port des Webservers – über ihn erreichst du nur den Web-Client, nicht das Spiel.
::::

## Server über die IP hinzufügen

Der Eintrag über die IP-Adresse ist der zuverlässigste Weg auf deinen Server. Einmal hinzugefügt, bleibt der Server dauerhaft in deiner Liste.

1. <b>Eco starten</b><br>
   Starte Eco auf deinem PC und melde dich mit deinem Account an.

2. <b>Serverbrowser öffnen</b><br>
   Wähle im Hauptmenü **New Game**. Du landest in der Übersicht **Your Worlds** mit den Servern, die du bereits besucht hast.

3. <b>Server hinzufügen</b><br>
   Klicke auf das grüne **Plus-Symbol**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   :::: info Hinweis
   Beide Werte stehen in deiner **Verwaltung**. Die Adresse besteht aus der IP-Adresse, einem Doppelpunkt und dem Game Port – ohne Leerzeichen dazwischen.
   ::::

5. <b>Beitreten</b><br>
   Bestätige die Eingabe und klicke auf **Join**.

6. <b>Charakter erstellen</b><br>
   Beim ersten Beitritt legst du deinen Charakter an und wählst deinen Startpunkt in der Welt. Danach wird dein Fortschritt auf dem Server gespeichert.

:::: tip Tipp
Besuchte Server erscheinen anschließend dauerhaft unter **Your Worlds**. Du musst die IP-Adresse also nur einmal eintragen.
::::

## Über die öffentliche Serverliste

1. <b>New Game öffnen</b><br>
   Wähle im Hauptmenü **New Game**.

2. <b>Alle Server anzeigen</b><br>
   Klicke oben rechts auf **Browse All**, um die öffentliche Serverliste zu öffnen.

3. <b>Server suchen</b><br>
   Klicke auf das Lupensymbol und gib den Namen deines Servers ein.

4. <b>Beitreten</b><br>
   Wähle deinen Server aus und klicke auf **Join**.

## Account für Eco

:::: info Hinweis
Zum Spielen wird ein kostenloser Account von Strange Loop Games benötigt. Melde dich im Spiel damit an, bevor du einem Server beitrittst.
::::

## Server erscheint nicht in der Liste

Damit dein Server in der öffentlichen Serverliste auftaucht, muss er dort angemeldet sein. Gesteuert wird das über die Datei `/Configs/Network.eco`:

| Einstellung | Bedeutung |
|-------------|-----------|
| **Public Server** | Legt fest, ob der Server an die öffentliche Serverliste von Strange Loop Games gemeldet wird |
| **Server Category** | Kategorie, unter der dein Server einsortiert wird: `Beginner`, `Established`, `BeginnerHard` oder `Strange` |

:::: info Groß- und Kleinschreibung beachten
`Network.eco` ist eine JSON-Datei. Die Kategoriewerte werden genau so geschrieben wie oben – `BeginnerHard` also ohne Leerzeichen und mit großem `B` und `H`. Ein abweichend geschriebener Wert wird nicht erkannt.
::::

:::: warning Achtung
Änderungen an den Konfigurationsdateien werden erst mit einem **Neustart des Servers** übernommen. Ein Server, auf dem ein Passwort gesetzt ist, taucht in der öffentlichen Liste in der Regel ebenfalls nicht auf.
::::

:::: tip Server trotzdem erreichbar
Auch wenn dein Server nicht in der öffentlichen Liste steht, kannst du ihn jederzeit über das Plus-Symbol mit IP-Adresse und Game Port hinzufügen. Gib beides einfach an deine Mitspieler weiter.
::::

## Welche Ports nutzt Eco?

:::: info Hinweis
Ein Eco-Server belegt mehrere Ports. In der Datei `/Configs/Network.eco` heißen sie:

| Konfigurationswert | Protokoll | Verwendung |
|--------------------|-----------|------------|
| `GameServerPort` | UDP | Game Port – hierüber verbinden sich die Spieler |
| `WebServerPort` | TCP | Webserver des Spiels, unter anderem für den Web-Client |
| `RconServerPort` | TCP | RCON |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**. Trage im Spiel immer den **Game Port** ein.
::::
