---
description: Einem Quake Live Server beitreten
---

# So trittst du deinem Quake Live Server bei

Quake Live kennt kein Matchmaking. Du verbindest dich entweder direkt über die Konsole des Spiels mit IP-Adresse und Port oder du suchst deinen Server im Serverbrowser.

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers. Quake Live nutzt für den Spielbetrieb und für Serverabfragen denselben Port — einen separaten **Query Port** gibt es nicht.
::::

## Konsole im Spiel öffnen

Die Konsole ist der zuverlässigste Weg auf deinen Server.

1. <b>Quake Live starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Konsole öffnen</b><br>
   Drücke `~`, um die Konsole zu öffnen.

:::: info Konsole öffnet sich nicht?
Die Konsolentaste liegt links neben der `1` — auf einer deutschen Tastatur ist das die `^`-Taste. Ob die Konsole verfügbar ist, steuert die Clientvariable `com_allowConsole`, die ab Werk auf `1` steht.
::::

## Direkt über die IP verbinden

1. <b>Konsole öffnen</b><br>
   Öffne im Spiel die Konsole.

2. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   Zeigt dir die Verwaltung die IP `123.45.67.89` und den Game Port `27043`, lautet der Befehl:

   ```
   connect 123.45.67.89:27043
   ```

   Setze hier immer die Werte aus deiner eigenen Verwaltung ein.
   ::::

3. <b>Server betreten</b><br>
   Nach dem Verbinden landest du zunächst als Zuschauer im laufenden Spiel und kannst einem Team beitreten.

## Auf einen passwortgeschützten Server verbinden

Hast du in der Verwaltung ein **Server Password** hinterlegt, musst du es im Spiel setzen, bevor du dich verbindest.

1. <b>Passwort setzen</b><br>
   Gib in der Konsole folgenden Befehl ein:

   ```
   password DEINPASSWORT
   ```

2. <b>Verbinden</b><br>
   Verbinde dich anschließend wie gewohnt:

   ```
   connect 123.45.67.89:27043
   ```

:::: info Reservierte Plätze
Neben dem Serverpasswort kennt Quake Live reservierte Slots. Über `sv_privateClients` legst du fest, wie viele Plätze reserviert bleiben, über `sv_privatePassword` das zugehörige Passwort. Spieler, die dieses Passwort mit `password` setzen, kommen auch dann auf den Server, wenn die regulären Plätze belegt sind.
::::

## Über den Serverbrowser

1. <b>Serverliste öffnen</b><br>
   Öffne im Hauptmenü die Serverliste.

2. <b>Server suchen</b><br>
   Suche nach dem Namen, den du in der Verwaltung als **Server Name** hinterlegt hast.

:::: warning Achtung
Damit dein Server öffentlich gelistet wird, muss in der Verwaltung der **Server Type** auf `2` (Internet) stehen. `0` bedeutet Offline, `1` beschränkt den Server auf das lokale Netzwerk. Zusätzlich muss `sv_master "1"` gesetzt sein — nur dann meldet sich der Server beim Masterserver an und beantwortet Abfragen. Die Direktverbindung über die Konsole funktioniert unabhängig davon.
::::

:::: tip Tipp
Über die Servertags findest du deinen Server im Browser schneller wieder. Trage sie in `/baseq3/server.cfg` ein, zum Beispiel:

```
set sv_tags "classic, custom"
```

Die Tags werden im Serverbrowser des Spiels als Filter angeboten.
::::

:::: tip Tipp
Wie du dir auf deinem Server Adminrechte gibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
