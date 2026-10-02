---
slug: "server-konfigurieren"
language: "de"
title: "So konfigurierst Du Deinen Arma Reforger Server"
description: "Arma Reforger Server über die Einstellungen und die config.json konfigurieren"
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
short_title: "Server konfigurieren"
sort: 10
related: ["gameserver/arma-reforger/use-rcon", "gameserver/arma-reforger/improve-performance", "gameserver/arma-reforger/change-scenario-settings", "gameserver/arma-reforger/enable-crossplay"]
---
Die Einstellungen Deines Arma Reforger Servers findest Du an zwei Stellen:

- in der Verwaltung Deines Servers unter **Einstellungen** – hier legst Du die wichtigsten Werte wie Servername, Passwörter oder das Szenario fest
- in der Datei `config.json` im Hauptverzeichnis Deines Servers – hier stellst Du alles Weitere ein, z.B. Admins, Mods, Sichtweiten oder den Voice-Chat

## Einstellungen in der Verwaltung

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Werte anpassen**\
   Passe die gewünschten Felder an (siehe Tabelle unten).

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

### Verfügbare Felder

| Feld | Beschreibung |
|------|-------------|
| **Server Name** | Name Deines Servers im Server-Browser |
| **Server Passwort** | Passwort, das Spieler zum Beitreten eingeben müssen. Leer lassen für einen öffentlichen Server. |
| **Admin Passwort** | Passwort, mit dem Du Dich im Spiel als Admin anmeldest – siehe [Admin werden](/tutorials/gameserver/arma-reforger/become-admin). Leerzeichen sind nicht erlaubt. |
| **Maximale Spieler** | Maximale Anzahl an Spielern auf Deinem Server |
| **Szenario ID** | Das Szenario, das Dein Server lädt – siehe [Szenario ändern](/tutorials/gameserver/arma-reforger/change-scenario) |
| **Sichtbar im Server-Browser** | `true` = Dein Server wird im Server-Browser angezeigt, `false` = Dein Server ist dort ausgeblendet |
| **Battle-Eye** | `true` = BattlEye-Anti-Cheat ist aktiv, `false` = BattlEye ist deaktiviert. Ohne BattlEye wird Dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt – siehe [Crossplay](/tutorials/gameserver/arma-reforger/enable-crossplay). |
| **Third Person deaktivieren** | `true` = alle Spieler sind auf die Ego-Perspektive (First Person) beschränkt, `false` = die Third-Person-Ansicht ist erlaubt |
| **Maximale FPS** | Obergrenze für die Server-FPS (Standard: `120`). Leer lassen für keine Begrenzung. |
| **[Advanced] Log FPS Interval** | Abstand in Sekunden, in dem der Server Leistungswerte wie FPS, Speicherverbrauch, Spieler- und KI-Anzahl ins Log schreibt. `0` schaltet die Ausgabe ab. Siehe [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance#performance-messen) und [Server-Log auslesen](/tutorials/gameserver/arma-reforger/read-server-log). |
| **Auto Update** | `1` = automatische Server-Updates sind aktiv, `0` = deaktiviert – siehe [Automatische Updates steuern](/tutorials/gameserver/arma-reforger/control-automatic-updates) |
| **RCON Passwort** | Passwort für den Fernzugriff per RCON. Das Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten – siehe [RCON verwenden](/tutorials/gameserver/arma-reforger/use-rcon). |

> [!NOTE]
> Den RCON-Port und den A2S-Port (Server-Abfrage) legt EmeraldHost für Deinen Server fest. Diese Werte kannst Du nicht ändern.

> [!TIP]
> Wenn Du eine niedrigere **Maximale FPS** einträgst, sparst Du Leistung. Mehr dazu findest Du unter [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance).

## Was die Verwaltung in der config.json überschreibt

Bei **jedem** Serverstart schreibt die Verwaltung die Werte aus den **Einstellungen** in die `config.json`.

> [!WARNING]
> Folgende Einträge der `config.json` werden bei jedem Start überschrieben. Änderst Du sie direkt in der Datei, hat das keine Wirkung:
>
> - `bindAddress`, `bindPort`, `publicAddress`, `publicPort`
> - `a2s` (`address` und `port`)
> - `rcon` → `address`, `port`, `password`
> - `game` → `name`, `password`, `passwordAdmin`, `scenarioId`, `maxPlayers`, `visible`
> - `game` → `gameProperties` → `disableThirdPerson`, `battlEye`
>
> Außerdem wird `game` → `crossPlatform` immer auf `true` und `game` → `gameProperties` → `fastValidation` immer auf `true` gesetzt. Crossplay lässt sich über `crossPlatform` deshalb nicht abschalten – mehr dazu unter [Crossplay](/tutorials/gameserver/arma-reforger/enable-crossplay).
>
> Servername, Server-Passwort, Admin-Passwort, Szenario ID, maximale Spieleranzahl, Sichtbarkeit, Third Person, BattlEye und RCON-Passwort änderst Du in der Verwaltung unter **Einstellungen**. Adressen und Ports legt EmeraldHost fest, sie lassen sich nicht ändern.

> [!NOTE]
> Bohemia Interactive empfiehlt für öffentliche Server, `fastValidation` immer auf `true` zu lassen und die Server-FPS zu begrenzen. `fastValidation` ist auf Deinem Server fest aktiviert, und über **Maximale FPS** ist standardmäßig eine Begrenzung von 120 FPS gesetzt – lass das Feld deshalb nicht leer.

## Aufbau der config.json

Nach der Installation sieht die `config.json` gekürzt so aus. Die Werte in den Bereichen, die die Verwaltung überschreibt, hängen von Deinen **Einstellungen** ab:

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

> [!NOTE]
> Ports, Adressen und die übrigen mit `...` gekürzten Werte setzt die Verwaltung automatisch. Die Zahlen bei Ports und Spielern sind hier nur Beispielwerte.

### Einträge, die Du per SFTP ändern kannst

Alle Einträge, die nicht in der Liste oben stehen, bleiben beim Serverstart erhalten. Diese kannst Du selbst in der `config.json` anpassen:

| Eintrag | Beschreibung |
|---------|-------------|
| `game` → `admins` | Liste dauerhafter Admins (SteamID64 oder IdentityId, maximal 20 Einträge) – siehe [Admin hinzufügen](/tutorials/gameserver/arma-reforger/add-admin) |
| `game` → `mods` | Mods, die Spieler beim Beitreten automatisch herunterladen – siehe [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods) |
| `game` → `gameProperties` → `serverMaxViewDistance` | Maximale Sichtweite auf dem Server (`500` bis `10000`) – siehe [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance) |
| `game` → `gameProperties` → `serverMinGrassDistance` | Minimale Grasdistanz in Metern, die den Spielern vorgegeben wird (`0` oder `50` bis `150`). Mit `0` wird keine Distanz vorgegeben. |
| `game` → `gameProperties` → `networkViewDistance` | Maximale Reichweite, in der Objekte über das Netzwerk an die Spieler übertragen werden (`500` bis `5000`) |
| `game` → `gameProperties` → `VONDisableUI`, `VONDisableDirectSpeechUI`, `VONCanTransmitCrossFaction` | Einstellungen für den Voice-Chat – siehe [Voice-Chat einstellen](#voice-chat-einstellen) |
| `game` → `gameProperties` → `missionHeader` | Überschreibt Einstellungen des Szenarios – siehe [Szenario-Einstellungen ändern](/tutorials/gameserver/arma-reforger/change-scenario-settings) |
| `rcon` → `permission`, `blacklist`, `whitelist` | Rechte und erlaubte bzw. gesperrte Befehle für RCON – siehe [RCON verwenden](/tutorials/gameserver/arma-reforger/use-rcon#rcon-berechtigungen-festlegen) |
| `operating` | Optionaler Bereich für weitere Server-Einstellungen – siehe [Einträge im Bereich operating](#eintrage-im-bereich-operating) |

### Einträge im Bereich operating

Der Bereich `operating` ist in der `config.json` nach der Installation nicht enthalten. Du kannst ihn bei Bedarf selbst als eigenen Bereich auf oberster Ebene hinzufügen, also neben `game` und nicht innerhalb davon.

| Eintrag | Beschreibung |
|---------|-------------|
| `joinQueue` → `maxSize` | Größe der Warteschlange beim Beitreten, wenn der Server voll ist (`0` bis `50`, Standard `0` = deaktiviert) |
| `playerSaveTime` | Abstand in Sekunden, in dem der Server die Daten der Spieler speichert (Standard `120`) |
| `slotReservationTimeout` | Wie lange in Sekunden ein Platz für einen gekickten Spieler reserviert bleibt (`5` bis `300`, Standard `60`). Die Reservierung gilt nur für sogenannte Replication Kicks. |
| `disableAI`, `aiLimit` | KI komplett deaktivieren oder begrenzen – siehe [KI deaktivieren oder begrenzen](/tutorials/gameserver/arma-reforger/disable-ai) |
| `disableNavmeshStreaming` | Lädt das gesamte Navmesh in den Arbeitsspeicher – siehe [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance#navmesh-streaming-deaktivieren-optional) |
| `disableServerShutdown`, `lobbyPlayerSynchronise` | Verhalten bei Verbindungsabbrüchen zum Backend und Abgleich der Spieleranzahl – siehe [Häufige Probleme beheben](/tutorials/gameserver/arma-reforger/troubleshoot-server) |

> [!TIP]
> **Beispiel**
>
> So sieht ein `operating`-Bereich aus, der eine Warteschlange für bis zu 10 Spieler aktiviert:
>
> ```json
> "operating": {
>   "joinQueue": {
>     "maxSize": 10
>   }
> }
> ```
>
> Achte auf das Komma nach der schließenden Klammer `}` von `game`, damit beide Bereiche korrekt getrennt sind.

## So bearbeitest Du die config.json

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis Deines Servers.

4. **Einträge anpassen**\
   Ändere die gewünschten Werte. Achte darauf, dass Du nur Einträge änderst, die nicht von der Verwaltung überschrieben werden.

   > [!WARNING]
   > Die Namen der Einträge unterscheiden Groß- und Kleinschreibung. `VONDisableUI` funktioniert, `vonDisableUI` nicht. Zahlen und `true`/`false` schreibst Du ohne Anführungszeichen.

5. **Datei prüfen**\
   Prüfe den Inhalt der Datei auf Fehler, bevor Du sie speicherst.

   > [!TIP]
   > Kopiere den Inhalt dafür in einen JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Ist die `config.json` fehlerhaft, startet Dein Server nicht. Erstelle vor größeren Änderungen am besten ein [Backup](/tutorials/gameserver/create-backup), damit Du jederzeit zum vorherigen Stand zurückkehren kannst.

## Voice-Chat einstellen

Den Voice-Chat (VON) passt Du im Bereich `gameProperties` innerhalb von `game` in der `config.json` an:

| Eintrag | Standard | Beschreibung |
|---------|----------|-------------|
| `VONDisableUI` | `false` | `true` blendet die Voice-Chat-Anzeige bei allen Spielern aus |
| `VONDisableDirectSpeechUI` | `false` | `true` blendet die Anzeige für Direktsprache bei allen Spielern aus |
| `VONCanTransmitCrossFaction` | `false` | `true` = Spieler können auf Funkgeräten anderer Fraktionen senden, `false` = sie können dort nur mithören |

> [!TIP]
> **Beispiel**
>
> ```json
> "game": {
>   "gameProperties": {
>     "VONDisableUI": false,
>     "VONDisableDirectSpeechUI": true,
>     "VONCanTransmitCrossFaction": false
>   }
> }
> ```
>
> Ergänze die Einträge in Deinem bestehenden `gameProperties`-Bereich und lass die übrigen Einträge dort unverändert.

> [!NOTE]
> `VONCanTransmitCrossFaction` ist in der `config.json` nach der Installation nicht enthalten. Füge den Eintrag bei Bedarf selbst hinzu. Fehlt er, gilt der Standardwert `false`.
