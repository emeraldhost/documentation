---
description: Einem Frozen Flame Server beitreten
---

# So trittst du deinem Frozen Flame Server bei

Auf deinen Frozen Flame Server verbindest du dich über die Liste der privaten Server: Du trägst deinen Server dort einmalig mit seiner IP-Adresse ein und verbindest dich anschließend direkt. Dafür verwendest du den **Game Port**, nicht den Query Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Für den Beitritt benötigst du die IP-Adresse und den **Game Port**. Der Query Port dient nur der Serverabfrage – über ihn verbindest du dich nicht.
::::

## Server im Spiel hinzufügen

1. <b>Frozen Flame starten</b><br>
   Starte Frozen Flame und warte, bis das Hauptmenü geladen ist.

2. <b>Play öffnen</b><br>
   Wähle im Hauptmenü **Play**.

3. <b>Private Server öffnen</b><br>
   Wechsle auf den Bereich **Private Server**.

4. <b>Server hinzufügen</b><br>
   Klicke in der Liste der privaten Server auf **Add**, um einen neuen Eintrag anzulegen.

5. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   :::: warning Achtung
   Trage hier den **Game Port** aus der Verwaltung ein. Mit dem Query Port schlägt die Verbindung fehl.
   ::::

6. <b>Eintrag bestätigen</b><br>
   Bestätige die Eingabe mit **Enter**. Dein Server erscheint danach in der Liste der privaten Server.

7. <b>Verbinden</b><br>
   Wähle deinen Server in der Liste aus und klicke auf **Connect**.

:::: tip Tipp
Der Eintrag bleibt im Spiel gespeichert. Beim nächsten Mal wählst du deinen Server einfach aus der Liste aus und klickst auf **Connect**.
::::

## Verbindung bricht nach 20 bis 30 Sekunden ab

:::: warning EasyAntiCheat
Wirst du nach etwa 20 bis 30 Sekunden wieder vom Server getrennt, liegt das laut den Entwicklern an EasyAntiCheat. Läuft dein Server ohne EasyAntiCheat (Startparameter `-noeac`), müssen **alle Spieler das Spiel ebenfalls ohne EasyAntiCheat starten**. Dafür wählst du beim Start des Spiels in Steam die zweite Startoption ohne EasyAntiCheat aus. Server und Client müssen also immer zusammenpassen.
::::

## Öffentliche Serverliste

:::: info Hinweis
Dein Server taucht nicht automatisch in einer öffentlichen Serverliste auf. Die offizielle Serverdokumentation sieht dafür einen eigenen Dienst vor, der über zusätzliche Einträge in der `Engine.ini` angebunden wird. Ob dieser Dienst noch betrieben wird, lässt sich nicht bestätigen. Verbinde dich deshalb immer direkt über die IP-Adresse – dieser Weg funktioniert unabhängig davon, ob dein Server irgendwo gelistet wird.
::::

## Welche Ports nutzt Frozen Flame?

:::: info Hinweis
Ein Frozen-Flame-Server belegt mehrere Ports:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | TCP und UDP | Spieldaten – hierüber verbinden sich die Spieler mit deinem Server |
| Query Port | UDP | Serverabfrage, zum Beispiel für Serverinformationen über Steam |
| RCON Port | TCP | Fernsteuerung des Servers – siehe [Admin hinzufügen](admin-hinzufuegen.md) |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::
