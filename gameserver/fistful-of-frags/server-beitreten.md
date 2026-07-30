---
description: Einem Fistful of Frags Server beitreten
---

# So trittst du deinem Fistful of Frags Server bei

Auf deinen Fistful of Frags Server kommst du auf zwei Wegen: über den **Serverbrowser** im Spiel oder über eine **Direktverbindung** mit der Entwicklerkonsole. Eine Lobby gibt es nicht — der Beitritt über IP und Port funktioniert immer.

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Fistful of Frags nutzt für den Spielbetrieb und für Serverabfragen denselben Port — es gibt **keinen separaten Query Port**.
::::

:::: warning Achtung
Trage immer den **Game Port** aus der Verwaltung ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

## Entwicklerkonsole im Spiel aktivieren

Die Konsole ist standardmäßig deaktiviert. Du brauchst sie für die Direktverbindung.

1. <b>Fistful of Frags starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Optionen öffnen</b><br>
   Öffne im Hauptmenü über das Zahnrad-Symbol die **Optionen** und wechsle auf den Reiter **Keyboard**.

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

:::: tip Tipp
Alternativ kannst du deinen Server auch direkt über Steam ansteuern. Gib dazu im Browser oder im Windows-Ausführen-Dialog folgende Adresse ein — Steam startet das Spiel und verbindet dich automatisch:

```
steam://connect/123.45.67.89:27015
```
::::

## Über den Serverbrowser im Spiel

1. <b>Serverbrowser öffnen</b><br>
   Starte Fistful of Frags und öffne im Hauptmenü den Serverbrowser.

2. <b>Server suchen</b><br>
   Wechsle auf den Reiter **Internet** und suche nach dem Namen deines Servers.

3. <b>Beitreten</b><br>
   Wähle deinen Server aus und verbinde dich.

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

Damit dein Server zuverlässig in der öffentlichen Serverliste geführt wird, empfiehlt sich ein **Steam Game Server Login Token (GSLT)**.

1. <b>Token erstellen</b><br>
   Erstelle unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) einen Token mit der App-ID `265630`.

   :::: info Hinweis
   `265630` ist die App-ID des Spiels und die richtige ID für den Token. Der Server selbst wird über eine andere App-ID installiert — für den GSLT ist immer `265630` einzutragen.
   ::::

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>server.cfg öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /fof/cfg/server.cfg
   ```

4. <b>Token eintragen</b><br>
   Trage folgende Zeile ein:

   ```
   sv_setsteamaccount "DEIN-TOKEN"
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Bietet die Verwaltung deines Servers ein eigenes Feld für den **GSL Token**, kannst du den Token auch dort eintragen. Jeder Server benötigt einen eigenen Token. Die Direktverbindung über IP und Port funktioniert auch ohne Token.
::::

## Weitere Einstellungen zur Sichtbarkeit

Diese Werte trägst du in der `/fof/cfg/server.cfg` ein:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_lan 0` | Server ist öffentlich erreichbar und wird bei Steam angemeldet (`1` = nur LAN) |
| `sv_region` | Region für den Serverbrowser (Standardwert `255` = weltweit) |
| `sv_tags` | Eigene Schlagwörter, nach denen Spieler im Serverbrowser filtern können |
| `sv_visiblemaxplayers` | Slotanzahl, die im Serverbrowser angezeigt wird |
| `sv_steamgroup` | Gruppen-ID einer Steam-Gruppe, für die der Server hervorgehoben wird |

:::: tip Tipp
Nach Änderungen an der `server.cfg` musst du deinen Server neu starten, damit die Werte übernommen werden.
::::

## Welche Ports nutzt Fistful of Frags?

:::: info Hinweis
| Port | Verwendung |
|------|------------|
| **Game Port** | Spielbetrieb, Serverabfragen und RCON — dieser Port wird für den Beitritt eingetragen |
| Client Port `27005` | Lokaler Port auf dem PC des Spielers, keine Serveradresse |
| SourceTV Port | Nur relevant, wenn du SourceTV für Zuschauer nutzt |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::
