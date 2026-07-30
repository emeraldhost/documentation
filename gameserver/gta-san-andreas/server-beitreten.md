---
description: Einem GTA San Andreas Server beitreten
---

# So trittst du deinem GTA San Andreas Server bei

Der Multiplayer von GTA San Andreas läuft über **SA-MP** beziehungsweise dessen Nachfolger **open.mp**. Du benötigst dafür eine installierte PC-Version von GTA San Andreas sowie den passenden Client.

:::: danger Wichtig
Der alte SA-MP-Browser wird nicht mehr betrieben und findet keine Server mehr. Nutze stattdessen den [open.mp Launcher](https://github.com/openmultiplayer/launcher/releases/latest). Er bringt eine aktuelle Serverliste mit und verbindet sich sowohl mit SA-MP- als auch mit open.mp-Servern.
::::

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Port** deines Servers findest du in der **Verwaltung** deines Servers. SA-MP und open.mp nutzen einen einzigen UDP-Port für den Spielbetrieb und für Serverabfragen — **Game Port und Query Port sind identisch**. Einen separaten Query Port gibt es nicht.
::::

## Über den open.mp Launcher verbinden

1. <b>Launcher herunterladen</b><br>
   Lade den [open.mp Launcher](https://github.com/openmultiplayer/launcher/releases/latest) herunter und installiere ihn.

2. <b>Spielinstallation auswählen</b><br>
   Gib beim ersten Start den Ordner deiner GTA San Andreas Installation an, damit der Launcher das Spiel starten kann.

3. <b>Nickname festlegen</b><br>
   Trage deinen Spielernamen ein. Beachte dabei die Namensregeln weiter unten.

4. <b>Server über IP und Port hinzufügen</b><br>
   Füge deinen Server der Serverliste des Launchers manuell hinzu. Trage dafür IP-Adresse und Port zusammen ein, getrennt durch einen Doppelpunkt:

   ```
   123.45.67.89:7777
   ```

   :::: tip Tipp
   Das ist nur ein Beispiel. Setze immer die IP-Adresse und den Port ein, die dir in der Verwaltung deines Servers angezeigt werden.
   ::::

5. <b>Passwort eintragen</b><br>
   Hast du auf deinem Server ein Passwort gesetzt, wirst du beim Verbinden danach gefragt.

6. <b>Verbinden</b><br>
   Wähle deinen Server aus und verbinde dich. Der Launcher startet GTA San Andreas und baut die Verbindung auf.

## Regeln für den Spielernamen

Ein ungültiger Spielername ist der häufigste Grund, warum ein Beitritt scheitert.

| Regel | Details |
|-------|---------|
| Länge | maximal 20 Zeichen |
| Erlaubte Zeichen | `0-9`, `a-z` sowie `[` `]` `(` `)` `$` `@` `.` `_` `=` |
| Eindeutigkeit | Der Name darf nicht bereits von einem verbundenen Spieler verwendet werden |

:::: warning Achtung
Erscheint die Meldung **Unacceptable NickName**, enthält dein Name ein unerlaubtes Zeichen, ist zu lang — oder ein anderer Spieler ist bereits mit demselben Namen auf dem Server.
::::

## Server erscheint nicht in der Serverliste

Ob dein Server öffentlich sichtbar ist, steuerst du über zwei Einstellungen. Du erreichst sie per [SFTP](../sftp-verbindung-herstellen.md) in der Konfigurationsdatei deines Servers.

**open.mp — `config.json`:**

```json
{
    "announce": true,
    "enable_query": true
}
```

**SA-MP — `server.cfg`:**

```
announce 1
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `announce` | Meldet den Server an der öffentlichen Serverliste (Masterlist) an |
| `enable_query` | Legt fest, ob Serverinformationen im Serverbrowser angezeigt werden (open.mp) |

:::: info Hinweis
Zusätzlich erscheinen im Serverbrowser die Werte `name` beziehungsweise `hostname`, `language`, `mapname` und `gamemodetext` sowie `weburl` aus deiner Konfiguration. Die Verbindung über IP-Adresse und Port funktioniert auch dann, wenn dein Server nicht in der öffentlichen Liste steht.
::::

:::: danger Wichtig
Ändere den Port nicht selbst in der Konfigurationsdatei. Der Port wird deinem Server über das Panel zugewiesen — trägst du dort einen anderen Wert ein, ist dein Server nicht mehr erreichbar.
::::

## Spiel startet nicht oder verbindet nicht

:::: warning Achtung
Singleplayer-Mods verhindern den Start des Multiplayer-Clients. Entferne alle `.asi`- und `.cs`-Dateien, ausgetauschte Fahrzeug- und Skinmodelle sowie Trainer aus deiner Spielinstallation, bevor du dich verbindest. Serverseitige Inhalte werden ohnehin automatisch vom Server geladen — siehe [Mods hinzufügen](mods-hinzufuegen.md).
::::

:::: info Hinweis
Bleibt der Client bei **Connecting to IP:Port…** hängen, prüfe zuerst, ob dein Server in der Verwaltung tatsächlich läuft, und ob IP-Adresse und Port exakt übereinstimmen.
::::
