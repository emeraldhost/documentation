---
description: Einem Mordhau Server beitreten
---

# So trittst du deinem Mordhau Server bei

Deinen Server findest du entweder über den Serverbrowser im Spiel, oder du verbindest dich über Steam direkt mit der Adresse deines Servers.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Für die Verbindung über Steam verwendest du den **Query Port**, nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.
::::

## Über den Serverbrowser im Spiel

1. <b>Mordhau starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Serverbrowser öffnen</b><br>
   Wähle im Hauptmenü **Fight**. Du landest im Serverbrowser mit der Liste aller öffentlichen Server.

3. <b>Server suchen</b><br>
   Gib im Suchfeld den Namen deines Servers ein. So findest du ihn deutlich schneller als durch Scrollen in der vollen Liste.

4. <b>Beitreten</b><br>
   Wähle deinen Server aus der Liste aus und tritt ihm bei.

:::: info Passwortgeschützter Server
Ist für deinen Server ein Passwort gesetzt, wirst du beim Beitreten danach gefragt. Das Passwort findest du in der **Verwaltung** deines Servers.
::::

## Über Steam verbinden

Wenn du gezielt über die Adresse deines Servers beitreten möchtest, nutzt du einen Steam-Verbindungslink.

1. <b>Steam starten</b><br>
   Stelle sicher, dass Steam auf deinem PC läuft und du angemeldet bist.

2. <b>Verbindungslink zusammenbauen</b><br>
   Setze den Link aus der IP-Adresse und dem **Query Port** deines Servers zusammen:

   ```
   steam://connect/<IP-Adresse>:<Query Port>
   ```

   :::: warning Achtung
   Hier gehört der **Query Port** hinein, nicht der Game Port. Beide Werte stehen in der **Verwaltung** deines Servers.
   ::::

3. <b>Link öffnen</b><br>
   Gib den Link in die Adresszeile deines Browsers ein oder öffne ihn unter Windows mit `Win` + `R`. Steam startet Mordhau und verbindet dich mit deinem Server.

:::: tip Tipp
Speichere dir den fertigen Link als Lesezeichen oder gib ihn an deine Mitspieler weiter – so muss niemand den Server im Browser suchen.
::::

## Welche Ports nutzt Mordhau?

:::: info Hinweis
Ein Mordhau Server belegt drei Ports:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Überträgt die eigentlichen Spieldaten |
| Query Port | UDP | Serverabfrage: Hierüber erscheint dein Server in der Serverliste, und hierüber läuft die Verbindung per Steam-Link |
| Beacon Port | UDP | Wird beim Verbindungsaufbau der Spieler genutzt |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**. Alle drei Ports müssen erreichbar sein – fehlt einer, kann der Beitritt scheitern, obwohl der Server läuft.
::::

## Server erscheint nicht im Serverbrowser

Damit dein Server öffentlich gelistet wird, muss er sich bei Steam anmelden. Gesteuert wird das über den Eintrag `bAdvertiseServerViaSteam` in der `Game.ini`.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

   :::: warning Achtung
   Bearbeite die `Game.ini` nur bei gestopptem Server. Mordhau schreibt die Datei beim Beenden neu und überschreibt dabei Änderungen, die du im laufenden Betrieb vorgenommen hast.
   ::::

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Eintrag setzen</b><br>
   Suche in der Datei den Eintrag `bAdvertiseServerViaSteam` und setze ihn auf `True`:

   ```ini
   bAdvertiseServerViaSteam=True
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Frisch gestartete Server brauchen einige Minuten, bis sie in der Serverliste auftauchen. Über den Steam-Verbindungslink kommst du auch dann schon auf deinen Server, wenn er noch nicht gelistet ist.
::::

:::: info Hinweis
Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem dein Server einmal vollständig gestartet ist. Findest du die Datei nicht, starte deinen Server einmal und stoppe ihn wieder.
::::
