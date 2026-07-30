---
description: Einem Soldat 2 Server beitreten
---

# So trittst du deinem Soldat 2 Server bei

Soldat 2 nutzt für die Verbindung **nur einen einzigen Port** – den **Game Port**. Einen separaten **Query Port** gibt es hier nicht. Du kommst auf zwei Wegen auf deinen Server: über die Serverliste im Spiel oder über eine Direktverbindung mit IP-Adresse und Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und den Game Port deines Servers findest du in der **Verwaltung**. Genau diesen Port trägst du im Spiel ein – es gibt bei Soldat 2 nichts dazuzurechnen.
::::

## Über die Serverliste

1. <b>Soldat 2 starten</b><br>
   Starte Soldat 2 auf deinem PC.

2. <b>Serverliste öffnen</b><br>
   Öffne im Hauptmenü den Mehrspieler-Bereich mit der Übersicht der öffentlichen Server.

3. <b>Server suchen</b><br>
   Suche in der Liste nach dem Namen deines Servers. Der Name, den du in der **Verwaltung** gesetzt hast, ist genau der Name, der hier erscheint.

4. <b>Beitreten</b><br>
   Wähle deinen Server aus und tritt ihm bei.

:::: info Hinweis
Damit dein Server überhaupt in der öffentlichen Liste auftaucht, muss in der `autoconfig.ini` der Wert `VisibleInGamesList` auf `True` stehen. Steht dort `False`, ist dein Server weiterhin erreichbar – aber nur noch über die Direktverbindung.
::::

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server und funktioniert auch dann, wenn er nicht in der Serverliste erscheint.

1. <b>Soldat 2 starten</b><br>
   Starte Soldat 2 auf deinem PC.

2. <b>Direktverbindung öffnen</b><br>
   Wechsle im Mehrspieler-Bereich zur Direktverbindung. Soldat 2 fragt dort Adresse und Port getrennt voneinander ab.

3. <b>Adresse eintragen</b><br>
   Trage im Adressfeld die IP-Adresse deines Servers aus der **Verwaltung** ein:

   ```
   123.45.67.89
   ```

4. <b>Port eintragen</b><br>
   Trage im Portfeld den **Game Port** deines Servers ein – ebenfalls unverändert so, wie er in der **Verwaltung** steht.

5. <b>Verbinden</b><br>
   Bestätige die Eingabe. Du landest anschließend direkt im laufenden Spiel.

## Passwortgeschützter Server

Ist für deinen Server ein Spielpasswort gesetzt, wirst du beim Beitreten danach gefragt. Das Spielpasswort steuert nur, wer überhaupt auf den Server darf – es hat nichts mit dem RCON-Passwort für Adminrechte zu tun. Wie du Adminrechte vergibst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).

## Server wird nicht gefunden

:::: warning Achtung
Taucht dein Server nicht in der Liste auf, prüfe der Reihe nach:

- Läuft der Server in der **Verwaltung** und ist der Start abgeschlossen?
- Steht `VisibleInGamesList` in der `autoconfig.ini` auf `True`?
- Nutzt du wirklich die IP-Adresse und den Game Port aus der **Verwaltung**?

Neu gestartete Server brauchen einen Moment, bis sie in der Serverliste erscheinen. Über die Direktverbindung erreichst du deinen Server sofort.
::::

## Welche Ports nutzt Soldat 2?

:::: info Hinweis
| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | TCP **und** UDP | Spieldaten und Serverabfrage – hierüber verbinden sich alle Spieler |
| WebSockets-Port | TCP | Optionale WebSockets-Schnittstelle – für den normalen Spielbetrieb nicht nötig |
| WebSockets-RCON-Port | TCP | Optionale RCON-Schnittstelle über WebSockets – für den normalen Spielbetrieb nicht nötig |

Einen eigenen Query Port gibt es bei Soldat 2 nicht – die Serverabfrage läuft über denselben Port wie das Spiel. Welche Ports für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Achtung
Ports, Servername und Spielpasswort werden bei jedem Serverstart aus der **Verwaltung** in die `autoconfig.ini` geschrieben. Trägst du diese Werte von Hand in die Datei ein, werden sie beim nächsten Start wieder überschrieben – ändere sie deshalb immer in der Verwaltung.
::::
