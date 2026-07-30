---
description: Einem Don’t Starve Together Server beitreten
---

# So trittst du deinem Don’t Starve Together Server bei

Du kannst deinem Server auf zwei Wegen beitreten: über die Serversuche im Spiel oder über eine Direktverbindung in der Konsole.

## Verbindungsdaten finden

:::: warning Wichtig
Für die Direktverbindung benötigst du die **IP-Adresse** und den **Gameport** deines Servers. Beide findest du in der Verwaltung deines Servers. Die Ports `master_server_port` und `authentication_port` aus dem Abschnitt `[STEAM]` der Datei `server.ini` sind interne Steam-Ports und werden **nicht** für die Verbindung verwendet.
::::

## Über die Serversuche im Spiel

1. <b>Don’t Starve Together starten</b><br>
   Starte das Spiel und warte, bis du im Hauptmenü bist.

2. <b>Serversuche öffnen</b><br>
   Klicke im Hauptmenü auf **Browse Games**.

3. <b>Nach dem Server suchen</b><br>
   Gib im Suchfeld den exakten Namen deines Servers ein. Das ist der Wert, der in der Datei `cluster.ini` unter `cluster_name` steht.

4. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Liste aus und tritt bei. Ist ein Server Passwort gesetzt, wirst du anschließend zur Eingabe aufgefordert.

:::: info Hinweis
Nach einem Start kann es bis zu 10 Minuten dauern, bis dein Server in der Serversuche auftaucht. Voraussetzung für die Listung ist außerdem ein gültiges Cluster Token in der Datei `cluster_token.txt`. Dein Token erstellst du in deinem [Klei-Account](https://accounts.klei.com/account/game/servers?game=DontStarveTogether).
::::

## Über die Konsole direkt verbinden

1. <b>Don’t Starve Together starten</b><br>
   Starte das Spiel und bleibe im Hauptmenü.

2. <b>Konsole öffnen</b><br>
   Drücke `~`, um die Konsole zu öffnen.

3. <b>Verbindungsbefehl eingeben</b><br>
   Gib den Befehl mit der IP-Adresse und dem Gameport deines Servers ein und bestätige mit Enter:

   ```
   c_connect("123.45.67.89", 10999)
   ```

4. <b>Mit Passwort verbinden</b><br>
   Ist auf deinem Server ein Passwort gesetzt, hängst du es als dritten Wert an:

   ```
   c_connect("123.45.67.89", 10999, "meinPasswort")
   ```

:::: tip Tipp
Die IP-Adresse und das Passwort gehören immer in Anführungszeichen, der Port nicht. Lässt du den Port weg, verbindet sich das Spiel auf den Standardport `10999`. Trage deshalb immer den Port ein, der in deiner Verwaltung angezeigt wird — viele Server nutzen einen abweichenden Port.
::::
