---
description: Arma Reforger Server über die Einstellungen und die config.json konfigurieren
---

# So konfigurierst du deinen Arma Reforger Server

Die Einstellungen deines Arma Reforger Servers findest du an zwei Stellen:

- in der Verwaltung deines Servers unter **Einstellungen** – hier legst du die wichtigsten Werte wie Servername, Passwörter oder das Szenario fest
- in der Datei `config.json` im Hauptverzeichnis deines Servers – hier stellst du alles Weitere ein, z.B. Admins, Mods, Sichtweiten oder den Voice-Chat

## Einstellungen in der Verwaltung

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Werte anpassen</b><br>
   Passe die gewünschten Felder an (siehe Tabelle unten).

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

### Verfügbare Felder

| Feld | Beschreibung |
|------|-------------|
| **Server Name** | Name deines Servers im Server-Browser |
| **Server Passwort** | Passwort, das Spieler zum Beitreten eingeben müssen. Leer lassen für einen öffentlichen Server. |
| **Admin Passwort** | Passwort, mit dem du dich im Spiel als Admin anmeldest – siehe [Admin werden](admin-werden.md). Leerzeichen sind nicht erlaubt. |
| **Maximale Spieler** | Maximale Anzahl an Spielern auf deinem Server |
| **Szenario ID** | Das Szenario, das dein Server lädt – siehe [Szenario ändern](szenario-aendern.md) |
| **Sichtbar im Server-Browser** | `true` = dein Server wird im Server-Browser angezeigt, `false` = dein Server ist dort ausgeblendet |
| **Battle-Eye** | `true` = BattlEye-Anti-Cheat ist aktiv, `false` = BattlEye ist deaktiviert. Ohne BattlEye wird dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt – siehe [Crossplay](crossplay-aktivieren.md). |
| **Third Person deaktivieren** | `true` = alle Spieler sind auf die Ego-Perspektive (First Person) beschränkt, `false` = die Third-Person-Ansicht ist erlaubt |
| **Maximale FPS** | Obergrenze für die Server-FPS (Standard: `120`). Leer lassen für keine Begrenzung. |
| **[Advanced] Log FPS Interval** | Abstand in Sekunden, in dem der Server Leistungswerte wie FPS, Speicherverbrauch, Spieler- und KI-Anzahl ins Log schreibt. `0` schaltet die Ausgabe ab. Siehe [Performance verbessern](performance-verbessern.md#performance-messen) und [Server-Log auslesen](server-log-auslesen.md). |
| **Auto Update** | `1` = automatische Server-Updates sind aktiv, `0` = deaktiviert – siehe [Automatische Updates steuern](automatische-updates-steuern.md) |
| **RCON Passwort** | Passwort für den Fernzugriff per RCON. Das Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten – siehe [RCON verwenden](rcon-verwenden.md). |

:::: info Hinweis
Den RCON-Port und den A2S-Port (Server-Abfrage) legt EmeraldHost für deinen Server fest. Diese Werte kannst du nicht ändern.
::::

:::: tip Tipp
Wenn du eine niedrigere **Maximale FPS** einträgst, sparst du Leistung. Mehr dazu findest du unter [Performance verbessern](performance-verbessern.md).
::::

## Was die Verwaltung in der config.json überschreibt

Bei **jedem** Serverstart schreibt die Verwaltung die Werte aus den **Einstellungen** in die `config.json`.

:::: warning Achtung
Folgende Einträge der `config.json` werden bei jedem Start überschrieben. Änderst du sie direkt in der Datei, hat das keine Wirkung:

- `bindAddress`, `bindPort`, `publicAddress`, `publicPort`
- `a2s` (`address` und `port`)
- `rcon` → `address`, `port`, `password`
- `game` → `name`, `password`, `passwordAdmin`, `scenarioId`, `maxPlayers`, `visible`
- `game` → `gameProperties` → `disableThirdPerson`, `battlEye`

Außerdem wird `game` → `crossPlatform` immer auf `true` und `game` → `gameProperties` → `fastValidation` immer auf `true` gesetzt. Crossplay lässt sich über `crossPlatform` deshalb nicht abschalten – mehr dazu unter [Crossplay](crossplay-aktivieren.md).

Servername, Server-Passwort, Admin-Passwort, Szenario ID, maximale Spieleranzahl, Sichtbarkeit, Third Person, BattlEye und RCON-Passwort änderst du in der Verwaltung unter **Einstellungen**. Adressen und Ports legt EmeraldHost fest, sie lassen sich nicht ändern.
::::

:::: info Hinweis
Bohemia Interactive empfiehlt für öffentliche Server, `fastValidation` immer auf `true` zu lassen und die Server-FPS zu begrenzen. `fastValidation` ist auf deinem Server fest aktiviert, und über **Maximale FPS** ist standardmäßig eine Begrenzung von 120 FPS gesetzt – lass das Feld deshalb nicht leer.
::::

## Aufbau der config.json

Nach der Installation sieht die `config.json` gekürzt so aus. Die Werte in den Bereichen, die die Verwaltung überschreibt, hängen von deinen **Einstellungen** ab:

```json
{
  "bindAddress": "...",
  "bindPort": 2001,
  "publicAddress": "...",
  "publicPort": 2001,
  "a2s": { "address": "...", "port": 17777 },
  "rcon": {
    "address": "...",
    "port": 19999,
    "password": "...",
    "permission": "monitor",
    "blacklist": [],
    "whitelist": []
  },
  "game": {
    "name": "...",
    "password": "",
    "passwordAdmin": "...",
    "admins": [],
    "scenarioId": "...",
    "maxPlayers": 32,
    "visible": true,
    "crossPlatform": true,
    "gameProperties": {
      "serverMaxViewDistance": 2500,
      "serverMinGrassDistance": 50,
      "networkViewDistance": 1000,
      "disableThirdPerson": false,
      "fastValidation": true,
      "battlEye": true,
      "VONDisableUI": false,
      "VONDisableDirectSpeechUI": false
    },
    "mods": []
  }
}
```

:::: info Hinweis
Ports, Adressen und die übrigen mit `...` gekürzten Werte setzt die Verwaltung automatisch. Die Zahlen bei Ports und Spielern sind hier nur Beispielwerte.
::::

### Einträge, die du per SFTP ändern kannst

Alle Einträge, die nicht in der Liste oben stehen, bleiben beim Serverstart erhalten. Diese kannst du selbst in der `config.json` anpassen:

| Eintrag | Beschreibung |
|---------|-------------|
| `game` → `admins` | Liste dauerhafter Admins (SteamID64 oder IdentityId, maximal 20 Einträge) – siehe [Admin hinzufügen](admin-hinzufuegen.md) |
| `game` → `mods` | Mods, die Spieler beim Beitreten automatisch herunterladen – siehe [Mods hinzufügen](mods-hinzufuegen.md) |
| `game` → `gameProperties` → `serverMaxViewDistance` | Maximale Sichtweite auf dem Server (`500` bis `10000`) – siehe [Performance verbessern](performance-verbessern.md) |
| `game` → `gameProperties` → `serverMinGrassDistance` | Minimale Grasdistanz in Metern, die den Spielern vorgegeben wird (`0` oder `50` bis `150`). Mit `0` wird keine Distanz vorgegeben. |
| `game` → `gameProperties` → `networkViewDistance` | Maximale Reichweite, in der Objekte über das Netzwerk an die Spieler übertragen werden (`500` bis `5000`) |
| `game` → `gameProperties` → `VONDisableUI`, `VONDisableDirectSpeechUI`, `VONCanTransmitCrossFaction` | Einstellungen für den Voice-Chat – siehe [Voice-Chat einstellen](#voice-chat-einstellen) |
| `game` → `gameProperties` → `missionHeader` | Überschreibt Einstellungen des Szenarios – siehe [Szenario-Einstellungen ändern](szenario-einstellungen-aendern.md) |
| `rcon` → `permission`, `blacklist`, `whitelist` | Rechte und erlaubte bzw. gesperrte Befehle für RCON – siehe [RCON verwenden](rcon-verwenden.md#rcon-berechtigungen-festlegen) |
| `operating` | Optionaler Bereich für weitere Server-Einstellungen – siehe [Einträge im Bereich operating](#eintrage-im-bereich-operating) |

### Einträge im Bereich operating

Der Bereich `operating` ist in der `config.json` nach der Installation nicht enthalten. Du kannst ihn bei Bedarf selbst als eigenen Bereich auf oberster Ebene hinzufügen, also neben `game` und nicht innerhalb davon.

| Eintrag | Beschreibung |
|---------|-------------|
| `joinQueue` → `maxSize` | Größe der Warteschlange beim Beitreten, wenn der Server voll ist (`0` bis `50`, Standard `0` = deaktiviert) |
| `playerSaveTime` | Abstand in Sekunden, in dem der Server die Daten der Spieler speichert (Standard `120`) |
| `slotReservationTimeout` | Wie lange in Sekunden ein Platz für einen gekickten Spieler reserviert bleibt (`5` bis `300`, Standard `60`). Die Reservierung gilt nur für sogenannte Replication Kicks. |
| `disableAI`, `aiLimit` | KI komplett deaktivieren oder begrenzen – siehe [KI deaktivieren oder begrenzen](ki-deaktivieren.md) |
| `disableNavmeshStreaming` | Lädt das gesamte Navmesh in den Arbeitsspeicher – siehe [Performance verbessern](performance-verbessern.md#navmesh-streaming-deaktivieren-optional) |
| `disableServerShutdown`, `lobbyPlayerSynchronise` | Verhalten bei Verbindungsabbrüchen zum Backend und Abgleich der Spieleranzahl – siehe [Häufige Probleme beheben](server-probleme-beheben.md) |

:::: tip Beispiel
So sieht ein `operating`-Bereich aus, der eine Warteschlange für bis zu 10 Spieler aktiviert:
```json
"operating": {
  "joinQueue": {
    "maxSize": 10
  }
}
```
Achte auf das Komma nach der schließenden Klammer `}` von `game`, damit beide Bereiche korrekt getrennt sind.
::::

## So bearbeitest du die config.json

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis deines Servers.

4. <b>Einträge anpassen</b><br>
   Ändere die gewünschten Werte. Achte darauf, dass du nur Einträge änderst, die nicht von der Verwaltung überschrieben werden.

   :::: warning Achtung
   Die Namen der Einträge unterscheiden Groß- und Kleinschreibung. `VONDisableUI` funktioniert, `vonDisableUI` nicht. Zahlen und `true`/`false` schreibst du ohne Anführungszeichen.
   ::::

5. <b>Datei prüfen</b><br>
   Prüfe den Inhalt der Datei auf Fehler, bevor du sie speicherst.

   :::: tip Tipp
   Kopiere den Inhalt dafür in einen JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Ist die `config.json` fehlerhaft, startet dein Server nicht. Erstelle vor größeren Änderungen am besten ein [Backup](../backup-erstellen.md), damit du jederzeit zum vorherigen Stand zurückkehren kannst.
::::

## Voice-Chat einstellen

Den Voice-Chat (VON) passt du im Bereich `gameProperties` innerhalb von `game` in der `config.json` an:

| Eintrag | Standard | Beschreibung |
|---------|----------|-------------|
| `VONDisableUI` | `false` | `true` blendet die Voice-Chat-Anzeige bei allen Spielern aus |
| `VONDisableDirectSpeechUI` | `false` | `true` blendet die Anzeige für Direktsprache bei allen Spielern aus |
| `VONCanTransmitCrossFaction` | `false` | `true` = Spieler können auf Funkgeräten anderer Fraktionen senden, `false` = sie können dort nur mithören |

:::: tip Beispiel
```json
"game": {
  "gameProperties": {
    "VONDisableUI": false,
    "VONDisableDirectSpeechUI": true,
    "VONCanTransmitCrossFaction": false
  }
}
```
Ergänze die Einträge in deinem bestehenden `gameProperties`-Bereich und lass die übrigen Einträge dort unverändert.
::::

:::: info Hinweis
`VONCanTransmitCrossFaction` ist in der `config.json` nach der Installation nicht enthalten. Füge den Eintrag bei Bedarf selbst hinzu. Fehlt er, gilt der Standardwert `false`.
::::
