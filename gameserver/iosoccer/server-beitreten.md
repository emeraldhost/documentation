---
description: Einem IOSoccer Server beitreten
---

# So trittst du deinem IOSoccer Server bei

Auf deinen IOSoccer Server kommst du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit der Entwicklerkonsole. Eine Lobby gibt es nicht — der Beitritt über IP und Port funktioniert immer.

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. IOSoccer nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

## Entwicklerkonsole im Spiel aktivieren

Für die Direktverbindung brauchst du die Entwicklerkonsole. Reagiert sie bei dir nicht, schaltest du sie so frei:

1. <b>IOSoccer starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Optionen öffnen</b><br>
   Öffne im Hauptmenü die **Optionen** und wechsle auf den Reiter **Keyboard**.

3. <b>Erweiterte Einstellungen öffnen</b><br>
   Klicke auf die Schaltfläche **Advanced**.

4. <b>Konsole aktivieren</b><br>
   Setze den Haken bei **Enable Developer Console** und bestätige die Einstellung.

## Über die Spielkonsole verbinden

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~` beziehungsweise `` ` ``, um die Konsole zu öffnen.

2. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   ```
   connect 123.45.67.89:27015
   ```

   Setze hier die IP-Adresse und den Game Port aus deiner Verwaltung ein.
   ::::

3. <b>Verbindung wiederholen</b><br>
   Bricht die Verbindung ab, kommst du mit dem Befehl `retry` zurück auf denselben Server, ohne die Adresse erneut eintippen zu müssen.

:::: tip Tipp
Alternativ kannst du deinen Server auch direkt über Steam ansteuern. Gib dazu im Browser oder im Windows-Ausführen-Dialog folgende Adresse ein — Steam startet das Spiel und verbindet dich automatisch:

```
steam://connect/123.45.67.89:27015
```
::::

## Über den Serverbrowser im Spiel

1. <b>Serverbrowser öffnen</b><br>
   Starte IOSoccer und öffne im Hauptmenü den Serverbrowser.

2. <b>Server suchen</b><br>
   Wechsle auf den Reiter **Internet** und suche nach dem Namen deines Servers.

3. <b>Beitreten</b><br>
   Wähle deinen Server aus und verbinde dich.

:::: info Hinweis
Der Serverbrowser blendet im Reiter **Internet** standardmäßig Server aus, die eine andere Spielversion nutzen. Taucht dein Server dort nicht auf, obwohl er läuft, prüfe zuerst, ob Server und Spiel auf demselben Stand sind. Über die Direktverbindung erreichst du ihn trotzdem.
::::

## Über die Steam-Favoriten

Findest du deinen Server nicht in der Liste, trägst du ihn direkt in Steam ein.

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den Game Port deines Servers ein und bestätige.

5. <b>Beitreten</b><br>
   Wähle den Server aus und verbinde dich. Der Server erscheint anschließend auch im Serverbrowser des Spiels unter den Favoriten.

## Server in der öffentlichen Serverliste anzeigen

Diese Werte trägst du per [SFTP](../sftp-verbindung-herstellen.md) in folgende Datei ein. Existiert sie noch nicht, lege sie an:

```
/iosoccer/cfg/server.cfg
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_lan 0` | Server ist öffentlich erreichbar und wird bei Steam angemeldet (`1` = nur LAN) |
| `sv_region` | Region für den Serverbrowser (Standardwert `255` = weltweit) |
| `sv_tags` | Eigene Schlagwörter, nach denen Spieler im Serverbrowser filtern können |

:::: info Hinweis
Ein **Steam Game Server Login Token (GSLT)** brauchst du für IOSoccer nicht — der Server unterstützt kein Login-Token, weil er auf einem älteren Zweig der Source Engine läuft. Mit `sv_lan 0` meldet er sich auch ohne Token bei den Steam-Masterservern an. Meldet er sich einmal nicht rechtzeitig an, stößt du die Anmeldung in der Serverkonsole mit `heartbeat` erneut an.
::::

:::: tip Tipp
Nach Änderungen an der `server.cfg` musst du deinen Server neu starten, damit die Werte übernommen werden.
::::

## Welche Ports nutzt IOSoccer?

:::: info Hinweis
| Port | Verwendung |
|------|------------|
| **Game Port** | Spielbetrieb, Serverabfragen und RCON — dieser Port wird für den Beitritt eingetragen |
| Client Port `27005` | Lokaler Port auf dem PC des Spielers, keine Serveradresse |
| SourceTV Port | Nur relevant, wenn du SourceTV für Zuschauer nutzt |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::
