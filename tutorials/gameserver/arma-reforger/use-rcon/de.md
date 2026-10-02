---
slug: "rcon-verwenden"
language: "de"
title: "So verwendest Du RCON auf Deinem Arma Reforger Server"
description: "RCON auf einem Arma Reforger Server einrichten und verwenden"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "RCON verwenden"
sort: 11
related: ["gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/kick-ban-players", "gameserver/arma-reforger/become-admin", "gameserver/arma-reforger/add-admin"]
---
Über RCON (Remote Console) kannst Du Deinen Server aus der Ferne verwalten, ohne selbst im Spiel zu sein – z.B. Spieler auflisten, kicken oder bannen und das Szenario neu starten. Arma Reforger verwendet dafür das [BattlEye RCon-Protokoll](https://www.battleye.com/downloads/BERConProtocol.txt), das über UDP kommuniziert.

## RCON aktivieren

RCON startet nur, wenn ein RCON-Passwort gesetzt ist.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **RCON-Passwort eintragen**\
   Trage im Feld **RCON Passwort** ein Passwort ein.

   > [!WARNING]
   > Das RCON-Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten. Ohne gültiges Passwort startet RCON nicht.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!IMPORTANT]
> Behandle das RCON-Passwort wie ein Admin-Passwort und gib es nur an vertrauenswürdige Personen weiter. Wähle außerdem ein anderes Passwort als Dein **Admin Passwort**.

## RCON-Zugangsdaten

Für die Verbindung benötigst Du drei Angaben:

- <b>Adresse</b><br>
  Die IP-Adresse Deines Servers (ohne Port), z.B. `203.0.113.10`.

- <b>RCON-Port</b><br>
  Den RCON-Port findest Du in der Verwaltung in der **Port-Übersicht**. Der Port wird von uns festgelegt und kann nicht geändert werden.

- <b>Passwort</b><br>
  Das Passwort aus dem Feld **RCON Passwort** in den **Einstellungen**.

> [!NOTE]
> Adresse, Port und Passwort für RCON werden bei jedem Serverstart aus der Verwaltung in die `config.json` geschrieben. Änderst Du `address`, `port` oder `password` im Bereich `"rcon"` direkt in der Datei, werden diese Werte beim nächsten Start überschrieben. Das Passwort änderst Du deshalb immer in der Verwaltung.

## RCON-Berechtigungen festlegen

Auf Deinem Server ist RCON standardmäßig auf die Berechtigung `monitor` eingestellt. Damit kannst Du nur Befehle ausführen, die den Zustand des Servers nicht verändern, z.B. `#players`. Möchtest Du über RCON auch Spieler kicken oder bannen, stellst Du die Berechtigung auf `admin` um.

| Berechtigung | Beschreibung |
|--------------|--------------|
| `admin` | Darf jeden Befehl ausführen |
| `monitor` | Darf nur Befehle ausführen, die den Zustand des Servers nicht verändern |

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis Deines Servers und suche den Bereich `"rcon"`.

4. **Berechtigung ändern**\
   Ändere den Wert von `"permission"` von `"monitor"` auf `"admin"`:

   ```json
   "rcon": {
     "permission": "admin",
     "blacklist": [],
     "whitelist": []
   }
   ```

   Der Ausschnitt zeigt nur die relevanten Einträge. Lass die übrigen Einträge im Bereich `"rcon"` unverändert.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Befehle mit blacklist und whitelist einschränken

Im Bereich `"rcon"` kannst Du zusätzlich festlegen, welche Befehle über RCON erlaubt sind. Beide Einträge sind Listen von Befehlen und standardmäßig leer. Auch diese Einträge bearbeitest Du per SFTP in der `config.json`, während Dein Server gestoppt ist.

| Eintrag | Beschreibung |
|---------|--------------|
| `blacklist` | Befehle in dieser Liste können über RCON nicht ausgeführt werden |
| `whitelist` | Enthält die Liste Befehle, dürfen über RCON nur diese ausgeführt werden |

> [!TIP]
> Prüfe die `config.json` auch hier nach dem Bearbeiten mit [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

### Anzahl gleichzeitiger RCON-Verbindungen

Mit dem optionalen Eintrag `"maxClients"` im Bereich `"rcon"` legst Du fest, wie viele RCON-Clients gleichzeitig verbunden sein dürfen. Erlaubt sind Werte von `1` bis `16`, Standard ist `16`. Du bearbeitest die `config.json` dafür genauso wie beim Ändern der Berechtigung: Server stoppen, Datei per SFTP anpassen, Server starten.

```json
"rcon": {
  ...
  "maxClients": 4
}
```

> [!NOTE]
> `...` steht für die bestehenden Einträge im Bereich `"rcon"`. Füge `"maxClients"` innerhalb dieses Bereichs hinzu und lösche die anderen Einträge dort nicht. Achte auf das Komma vor der neuen Zeile und prüfe die Datei anschließend mit [JSONLint](https://jsonlint.com/).

## Mit RCON verbinden

1. **RCON-Tool öffnen**\
   Öffne ein RCON-Tool, das das BattlEye RCon-Protokoll unterstützt.

2. **Verbindungsdaten eingeben**\
   Trage die [RCON-Zugangsdaten](#rcon-zugangsdaten) ein: Adresse, RCON-Port und Passwort.

3. **Befehle ausführen**\
   Nach erfolgreicher Verbindung kannst Du die Befehle aus der folgenden Tabelle ausführen.

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

Die Spieler-ID (in den Beispielen `5`) zeigt Dir `#players` an. Sie funktioniert nur, solange der Spieler mit dem Server verbunden ist. Ist der Spieler nicht mehr online, bannst Du ihn stattdessen über seine identityId.

Beispiele:

```text
#ban create 5 3600 Teamkilling
#ban create 5 0
#ban list 2
```

> [!NOTE]
> Die Befehle `#login`, `#logout`, `#roles` und `#id` sind nur für Spieler im Spiel gedacht und funktionieren über RCON nicht. Wie Du Dich im Spiel als Admin anmeldest, erfährst Du unter [Admin werden](/tutorials/gameserver/arma-reforger/become-admin). Wie Du Spieler direkt im Spiel kickst und bannst, zeigt Dir [Spieler kicken und bannen](/tutorials/gameserver/arma-reforger/kick-ban-players).

> [!TIP]
> Beende Deine RCON-Sitzung immer mit `@logout`. Schließt Du Dein RCON-Tool einfach, hält der Server die Verbindung noch eine Weile aufrecht, bis sie durch ein Timeout entfernt wird. In dieser Zeit belegt sie weiterhin einen der Plätze aus `"maxClients"`.
