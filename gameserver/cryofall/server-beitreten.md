---
description: Einem CryoFall Server beitreten
---

# So trittst du deinem CryoFall Server bei

CryoFall nutzt zum Verbinden **nur einen einzigen Port** – den Game Port deines Servers. Einen separaten Query Port gibt es nicht. Im Spiel führen zwei Wege auf deinen Server: die öffentliche Serverliste (**Community servers list**) oder der Eintrag über die Adresse (**Custom servers list**).

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers.
::::

:::: info Hinweis
Du musst den Port nirgends selbst eintragen. Dein Server übernimmt den Port aus der Verwaltung bei jedem Start automatisch in seine Konfiguration.
::::

## Über die Custom servers list beitreten

Das ist der zuverlässigste Weg – er funktioniert auch dann, wenn dein Server nicht öffentlich gelistet ist.

1. <b>CryoFall starten</b><br>
   Starte CryoFall und warte, bis das Hauptmenü geladen ist.

2. <b>Serverliste öffnen</b><br>
   Wähle im Hauptmenü **SERVERS**.

3. <b>Auf Custom servers list wechseln</b><br>
   Öffne den Bereich **Custom servers list**. Hier trägst du Server manuell ein.

4. <b>Serveradresse hinzufügen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   123.45.67.89:6000
   ```

   :::: tip Tipp
   Die Werte im Beispiel sind Platzhalter. Setze die IP-Adresse und den Game Port ein, die dir in deiner Verwaltung angezeigt werden.
   ::::

5. <b>Server beitreten</b><br>
   Bestätige die Eingabe. Dein Server erscheint anschließend dauerhaft in dieser Liste und du kannst ihn von dort aus betreten.

## Über die Community servers list beitreten

In der öffentlichen Serverliste taucht dein Server nur auf, wenn er als öffentlicher Server eingetragen ist.

1. <b>Serverliste aktivieren</b><br>
   Stelle in der **Verwaltung** deines Servers die Einstellung **Serverliste** auf aktiviert und starte den Server neu.

2. <b>Server suchen</b><br>
   Wähle im Hauptmenü **SERVERS** und anschließend **Community servers list**. Suche dort nach dem Namen deines Servers.

3. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Liste aus, um ihn zu betreten.

:::: warning Achtung
Bis ein neu gestarteter Server in der öffentlichen Liste erscheint, können einige Minuten vergehen. Nutze in dieser Zeit den Eintrag über die **Custom servers list**.
::::

## Über die Server-GUID beitreten

Statt der IP-Adresse kannst du deinen Mitspielern auch die GUID deines Servers geben. Sie wird beim ersten Start vom Master-Server vergeben und bleibt gleich, selbst wenn sich die IP-Adresse ändert.

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Konfiguration öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Data/SettingsServer.xml
   ```

3. <b>GUID auslesen</b><br>
   Suche den folgenden Eintrag und kopiere den Wert:

   ```xml
   <server_public_guid></server_public_guid>
   ```

4. <b>GUID weitergeben</b><br>
   Deine Mitspieler tragen die GUID im Spiel unter **SERVERS → Custom servers list** ein – genau wie eine Adresse.

:::: danger Wichtig
Ändere den Wert von `server_public_guid` niemals selbst. Er wird vom Master-Server vergeben; du darfst ihn nur weitergeben.
::::

## Welche Ports nutzt CryoFall?

:::: info Hinweis
Ein CryoFall Server belegt genau **einen Port**:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Spieldaten und Verbindungsaufbau – hierüber verbinden sich alle Spieler |

Einen separaten Query Port gibt es bei CryoFall nicht. Welcher Game Port für deinen Server gilt, siehst du in der **Verwaltung**.
::::

## Server für bestimmte Spieler reservieren

:::: warning Kein Serverpasswort
CryoFall kennt **kein Serverpasswort**. Möchtest du deinen Server nur für ausgewählte Spieler öffnen, nutzt du stattdessen die Whitelist – siehe [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
