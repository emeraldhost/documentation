---
description: Einem Space Station 14 Server beitreten
---

# So trittst du deinem Space Station 14 Server bei

Space Station 14 wird ausschließlich über den offiziellen **SS14-Launcher** gespielt. Einen Beitritt über Steam oder ein spielinternes Verbindungsfenster gibt es nicht. Im Launcher hast du zwei Möglichkeiten: die Serverliste oder die Direktverbindung über **Direct Connect To Server**.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse sowie den **Game Port** und den **Query Port** deines Servers findest du in der **Verwaltung** deines Servers. Trage im Launcher immer die dort angezeigten Werte ein und verlasse dich nicht auf feste Standardwerte.
::::

## Direkt verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server, weil sie nicht davon abhängt, ob dein Server in der öffentlichen Serverliste auftaucht.

1. <b>Launcher starten</b><br>
   Starte den SS14-Launcher und melde dich mit deinem SS14-Konto an.

2. <b>Direktverbindung öffnen</b><br>
   Klicke auf **Direct Connect To Server**.

3. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Query Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Query Port>
   ```

   :::: info Hinweis
   Ein Schema musst du nicht angeben – der Launcher ergänzt automatisch `ss14://`. Läuft dein Server hinter HTTPS, kannst du stattdessen `ss14s://` voranstellen. Eine IPv6-Adresse gehört in eckige Klammern, zum Beispiel `[fd11:5ee:beef::1]`.
   ::::

4. <b>Verbinden</b><br>
   Bestätige die Eingabe. Der Launcher lädt den passenden Client-Inhalt deines Servers automatisch herunter und startet das Spiel.

5. <b>Server merken</b><br>
   Über **Add Favorite** legst du den Server dauerhaft im Launcher ab und musst die Adresse nicht erneut eintippen.

## Über die Serverliste

Damit dein Server in der öffentlichen Serverliste (Hub) auftaucht, musst du das ausdrücklich aktivieren – standardmäßig ist die Eintragung **deaktiviert**.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server_config.toml öffnen</b><br>
   Öffne die Datei `server_config.toml`. Sie liegt im Hauptverzeichnis deines Servers, neben der Server-Anwendung `Robust.Server`.

4. <b>Eintragung aktivieren</b><br>
   Ergänze folgenden Abschnitt:

   ```toml
   [hub]
   advertise = true
   ```

   Optional kannst du zusätzlich `server_url` (Link zu deiner Community, z.B. Discord) und `tags` setzen.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

6. <b>Server suchen</b><br>
   Suche im Launcher in der Serverliste nach dem Namen deines Servers.

:::: warning Server erscheint nicht in der Liste
Steht in der Server-Konsole eine Meldung wie `[ERRO] hub: Error status while advertising server: [UnprocessableEntity] "Unable to contact status address"`, konnte der Hub deinen Server nicht erreichen. Prüfe dann, ob du in der Verwaltung die richtigen Ports verwendest und ob dein Server läuft. Bis zur Klärung erreichst du deinen Server jederzeit über die Direktverbindung.
::::

## Welche Ports nutzt Space Station 14?

:::: info Hinweis
Ein Space-Station-14-Server nutzt zwei Ports, die üblicherweise dieselbe Nummer haben:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Übertragung der Spieldaten (Konfigurationswert `port` im Abschnitt `[net]`) |
| Query Port | TCP | Status-Schnittstelle, die der Launcher und die Serverliste abfragen (Konfigurationswert `bind` im Abschnitt `[status]`) |

Die Adresse, die du im Launcher einträgst, spricht zuerst den **Query Port** an. Die Spielverbindung über UDP leitet der Launcher daraus ab. Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Achtung
Weichen Game Port und Query Port bei deinem Server voneinander ab, findet der Launcher die Spielverbindung nicht von allein. Trage dann in der `server_config.toml` die Spieladresse ausdrücklich ein:

```toml
[status]
connectaddress = "udp://<IP-Adresse>:<Game Port>"
```
::::
