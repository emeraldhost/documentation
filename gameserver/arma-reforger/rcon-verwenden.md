---
description: RCON auf einem Arma Reforger Server einrichten und verwenden
---

# So verwendest du RCON auf deinem Arma Reforger Server

Über RCON (Remote Console) kannst du deinen Server aus der Ferne verwalten, ohne selbst im Spiel zu sein – z.B. Spieler auflisten, kicken oder bannen und das Szenario neu starten. Arma Reforger verwendet dafür das [BattlEye RCon-Protokoll](https://www.battleye.com/downloads/BERConProtocol.txt), das über UDP kommuniziert.

## RCON aktivieren

RCON startet nur, wenn ein RCON-Passwort gesetzt ist.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>RCON-Passwort eintragen</b><br>
   Trage im Feld **RCON Passwort** ein Passwort ein.

   :::: warning Achtung
   Das RCON-Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten. Ohne gültiges Passwort startet RCON nicht.
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: danger Wichtig
Behandle das RCON-Passwort wie ein Admin-Passwort und gib es nur an vertrauenswürdige Personen weiter. Wähle außerdem ein anderes Passwort als dein **Admin Passwort**.
::::

## RCON-Zugangsdaten

Für die Verbindung benötigst du drei Angaben:

- <b>Adresse</b><br>
  Die IP-Adresse deines Servers (ohne Port), z.B. `203.0.113.10`.

- <b>RCON-Port</b><br>
  Den RCON-Port findest du in der Verwaltung in der **Port-Übersicht**. Der Port wird von uns festgelegt und kann nicht geändert werden.

- <b>Passwort</b><br>
  Das Passwort aus dem Feld **RCON Passwort** in den **Einstellungen**.

:::: info Hinweis
Adresse, Port und Passwort für RCON werden bei jedem Serverstart aus der Verwaltung in die `config.json` geschrieben. Änderst du `address`, `port` oder `password` im Bereich `"rcon"` direkt in der Datei, werden diese Werte beim nächsten Start überschrieben. Das Passwort änderst du deshalb immer in der Verwaltung.
::::

## RCON-Berechtigungen festlegen

Auf deinem Server ist RCON standardmäßig auf die Berechtigung `monitor` eingestellt. Damit kannst du nur Befehle ausführen, die den Zustand des Servers nicht verändern, z.B. `#players`. Möchtest du über RCON auch Spieler kicken oder bannen, stellst du die Berechtigung auf `admin` um.

| Berechtigung | Beschreibung |
|--------------|--------------|
| `admin` | Darf jeden Befehl ausführen |
| `monitor` | Darf nur Befehle ausführen, die den Zustand des Servers nicht verändern |

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis deines Servers und suche den Bereich `"rcon"`.

4. <b>Berechtigung ändern</b><br>
   Ändere den Wert von `"permission"` von `"monitor"` auf `"admin"`:

   ```json
   "rcon": {
     "permission": "admin",
     "blacklist": [],
     "whitelist": []
   }
   ```

   Der Ausschnitt zeigt nur die relevanten Einträge. Lass die übrigen Einträge im Bereich `"rcon"` unverändert.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

### Befehle mit blacklist und whitelist einschränken

Im Bereich `"rcon"` kannst du zusätzlich festlegen, welche Befehle über RCON erlaubt sind. Beide Einträge sind Listen von Befehlen und standardmäßig leer. Auch diese Einträge bearbeitest du per SFTP in der `config.json`, während dein Server gestoppt ist.

| Eintrag | Beschreibung |
|---------|--------------|
| `blacklist` | Befehle in dieser Liste können über RCON nicht ausgeführt werden |
| `whitelist` | Enthält die Liste Befehle, dürfen über RCON nur diese ausgeführt werden |

:::: tip Tipp
Prüfe die `config.json` auch hier nach dem Bearbeiten mit [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
::::

### Anzahl gleichzeitiger RCON-Verbindungen

Mit dem optionalen Eintrag `"maxClients"` im Bereich `"rcon"` legst du fest, wie viele RCON-Clients gleichzeitig verbunden sein dürfen. Erlaubt sind Werte von `1` bis `16`, Standard ist `16`. Du bearbeitest die `config.json` dafür genauso wie beim Ändern der Berechtigung: Server stoppen, Datei per SFTP anpassen, Server starten.

```json
"rcon": {
  ...
  "maxClients": 4
}
```

:::: info Hinweis
`...` steht für die bestehenden Einträge im Bereich `"rcon"`. Füge `"maxClients"` innerhalb dieses Bereichs hinzu und lösche die anderen Einträge dort nicht. Achte auf das Komma vor der neuen Zeile und prüfe die Datei anschließend mit [JSONLint](https://jsonlint.com/).
::::

## Mit RCON verbinden

1. <b>RCON-Tool öffnen</b><br>
   Öffne ein RCON-Tool, das das BattlEye RCon-Protokoll unterstützt.

2. <b>Verbindungsdaten eingeben</b><br>
   Trage die [RCON-Zugangsdaten](#rcon-zugangsdaten) ein: Adresse, RCON-Port und Passwort.

3. <b>Befehle ausführen</b><br>
   Nach erfolgreicher Verbindung kannst du die Befehle aus der folgenden Tabelle ausführen.

## RCON-Befehle

| Befehl | Beschreibung | `admin` | `monitor` |
|--------|--------------|---------|-----------|
| `#players` | Listet alle Spieler mit ihrer Spieler-ID auf | Ja | Ja |
| `#kick <spielerId>` | Kickt einen Spieler, er kann danach wieder beitreten | Ja | Nein |
| `#ban create <spielerId/identityId> <dauer> [grund]` | Bannt einen Spieler, die Dauer wird in Sekunden angegeben (`0` = permanent) | Ja | Nein |
| `#ban remove <identityId>` | Hebt einen Ban auf | Ja | Nein |
| `#ban list [seite]` | Zeigt die Bans mit BanID, Player UID und Dauer an, über RCON 25 pro Seite (im Spiel 10) | Ja | Nein |
| `#restart` | Startet das laufende Szenario neu, die Spieler bleiben verbunden | Ja | Nein |
| `#shutdown` | Fährt den Server herunter und trennt alle Spieler | Ja | Nein |
| `@logout` | Meldet den RCON-Client ab und gibt seinen Platz sofort frei | Ja | Ja |

Die Spieler-ID (in den Beispielen `5`) zeigt dir `#players` an. Sie funktioniert nur, solange der Spieler mit dem Server verbunden ist. Ist der Spieler nicht mehr online, bannst du ihn stattdessen über seine identityId.

Beispiele:

```
#ban create 5 3600 Teamkilling
#ban create 5 0
#ban list 2
```

:::: info Hinweis
Die Befehle `#login`, `#logout`, `#roles` und `#id` sind nur für Spieler im Spiel gedacht und funktionieren über RCON nicht. Wie du dich im Spiel als Admin anmeldest, erfährst du unter [Admin werden](admin-werden.md). Wie du Spieler direkt im Spiel kickst und bannst, zeigt dir [Spieler kicken und bannen](spieler-kicken-bannen.md).
::::

:::: tip Tipp
Beende deine RCON-Sitzung immer mit `@logout`. Schließt du dein RCON-Tool einfach, hält der Server die Verbindung noch eine Weile aufrecht, bis sie durch ein Timeout entfernt wird. In dieser Zeit belegt sie weiterhin einen der Plätze aus `"maxClients"`.
::::
