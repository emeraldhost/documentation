---
slug: "szenario-einstellungen-aendern"
language: "de"
title: "So änderst Du die Szenario-Einstellungen auf Deinem Arma Reforger Server"
description: "Spielregeln wie Uhrzeit, Wetter, XP, Fraktionslimits und Conflict-Supplies auf einem Arma Reforger Server über den missionHeader ändern"
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
short_title: "Szenario-Einstellungen ändern"
sort: 17
related: ["gameserver/arma-reforger/change-scenario", "gameserver/arma-reforger/configure-server", "gameserver/arma-reforger/set-up-game-master", "gameserver/arma-reforger/disable-ai"]
---
Jedes Szenario bringt eigene Grundeinstellungen mit, z.B. die Startuhrzeit, das Wetter oder den XP-Multiplikator. Mit dem Eintrag `missionHeader` in der `config.json` überschreibst Du diese Werte für Deinen Server. So passt Du Spielregeln an, ohne das Szenario selbst zu verändern.

Welches Szenario auf Deinem Server läuft, legst Du in der Verwaltung fest. Wie das geht, erfährst Du in der Anleitung [Szenario ändern](/tutorials/gameserver/arma-reforger/change-scenario).

## So funktioniert der missionHeader

Der `missionHeader` steht in der `config.json` im Hauptverzeichnis Deines Servers innerhalb von `"game"` → `"gameProperties"`. Alle Werte, die Du dort einträgst, ersetzen die entsprechenden Werte aus dem Header des Szenarios. Werte, die Du nicht einträgst, übernimmt der Server weiterhin aus dem Szenario.

> [!NOTE]
> Die Verwaltung überschreibt bei jedem Serverstart die Felder aus den **Einstellungen** (z.B. Server Name, Szenario ID oder Battle-Eye) sowie einige feste Werte wie `fastValidation`. Den `missionHeader` lässt sie unverändert, Deine Einträge bleiben also auch nach einem Neustart erhalten. Einen Überblick über alle Einträge der `config.json` findest Du in der Anleitung [Server konfigurieren](/tutorials/gameserver/arma-reforger/configure-server).

> [!WARNING]
> Ein Eintrag wirkt nur, wenn das Szenario bzw. der Spielmodus ihn unterstützt. Die Conflict-Einstellungen weiter unten funktionieren z.B. nur in Conflict-Szenarien.

## So trägst Du den missionHeader ein

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json öffnen**\
   Öffne die Datei `config.json` im Hauptverzeichnis und suche den Bereich `"gameProperties"` innerhalb von `"game"`.

4. **missionHeader hinzufügen**\
   Füge innerhalb von `"gameProperties"` den Eintrag `"missionHeader"` mit den gewünschten Einstellungen hinzu. Setze hinter den vorherigen Eintrag ein Komma. Gibt es bereits einen `"missionHeader"`, ergänzt Du die Einstellungen dort.

   > [!TIP]
   > **Beispiel**
   >
   > ```json
   > "gameProperties": {
   >   "missionHeader": {
   >     "m_sName": "Mein Conflict Server",
   >     "m_sDetails": "Kein Teamkill, kein Spawn-Camping. Viel Spaß!",
   >     "m_bOverrideScenarioTimeAndWeather": true,
   >     "m_iStartingHours": 7,
   >     "m_iStartingMinutes": 30,
   >     "m_fDayTimeAcceleration": 2,
   >     "m_fNightTimeAcceleration": 6,
   >     "m_bRandomStartingWeather": true,
   >     "m_fXpMultiplier": 2
   >   }
   > }
   > ```

   Die übrigen Einträge in `"gameProperties"` lässt Du unverändert.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Allgemeine Einstellungen

Diese Einträge gelten für alle Szenarien, sofern das Szenario sie unterstützt:

| Eintrag | Beschreibung |
|---------|--------------|
| `m_sName` | Angezeigter Name des Szenarios |
| `m_sDetails` | Ausführliche Beschreibung des Szenarios, z.B. Deine Serverregeln |
| `m_bOverrideScenarioTimeAndWeather` | `true` = das Szenario verwendet Uhrzeit und Wetter aus dem `missionHeader`, sofern es das zulässt |
| `m_iStartingHours` | Startuhrzeit: Stunde |
| `m_iStartingMinutes` | Startuhrzeit: Minute |
| `m_bRandomStartingDaytime` | `true` = zufällige Startuhrzeit (überschreibt `m_iStartingHours` und `m_iStartingMinutes`) |
| `m_fDayTimeAcceleration` | Zeitbeschleunigung am Tag (`1` = 100 %, `2` = 200 % usw.) |
| `m_fNightTimeAcceleration` | Zeitbeschleunigung in der Nacht (`1` = 100 %, `2` = 200 % usw.) |
| `m_bRandomStartingWeather` | `true` = zufälliges Wetter beim Start |
| `m_bRandomWeatherChanges` | `true` = das Wetter kann sich während des Spiels ändern |
| `m_fXpMultiplier` | XP-Multiplikator für Spieler, wenn der Spielmodus XP verwendet (`1` = Standard) |
| `m_bMapMarkerEnableDeleteByAnyone` | `true` = Kartenmarkierungen können von jedem in der Fraktion gelöscht werden, `false` = nur vom Spieler, der sie gesetzt hat |
| `m_iMapMarkerLimitPerPlayer` | Wie viele Kartenmarkierungen ein Spieler gleichzeitig haben kann |
| `m_aFactionLimits` | Maximale Spielerzahl pro Fraktion (ab Version 1.7, siehe unten) |
| `m_sMagazineRepackingRulesOverride` | Regeln für das Umpacken von Magazinen, z.B. `"CAN_WITH_SAME_CALIBER"` (ab Version 1.9) |
| `m_sHydrationRulesOverride` | Regeln für den Flüssigkeitsbedarf (Trinken), z.B. `"DISABLED"` (ab Version 1.9) |

> [!NOTE]
> Uhrzeit- und Wettereinstellungen wirken nur, wenn das Szenario das Überschreiben von Uhrzeit und Wetter zulässt.

### Fraktionslimits festlegen

Mit `m_aFactionLimits` legst Du fest, wie viele Spieler höchstens einer Fraktion beitreten können. Jede Fraktion wird über ihren Fraktionsschlüssel angegeben, z.B. `US`, `USSR` oder `FIA`:

```json
"missionHeader": {
  "m_aFactionLimits": [
    {
      "m_sFactionKey": "US",
      "m_iFactionLimit": 20
    },
    {
      "m_sFactionKey": "USSR",
      "m_iFactionLimit": 20
    },
    {
      "m_sFactionKey": "FIA",
      "m_iFactionLimit": 0
    }
  ]
}
```

| Wert von `m_iFactionLimit` | Bedeutung |
|----------------------------|-----------|
| `0` | Fraktion ist deaktiviert |
| `-1` | Kein Limit |
| größer als `0` | Maximale Anzahl an Spielern in dieser Fraktion |

## Conflict-Einstellungen

Diese Einträge funktionieren nur in Conflict-Szenarien. Bei den Zahlenwerten bedeutet `-1`, dass der Standardwert des Szenarios verwendet wird.

| Eintrag | Beschreibung |
|---------|--------------|
| `m_iControlPointsCap` | Wie viele Kontrollpunkte für den Sieg benötigt werden |
| `m_fVictoryTimeout` | Wie lange eine Fraktion einen Kontrollpunkt halten muss, in Sekunden |
| `m_iStartingHQSupplies` | Mit wie vielen Supplies das Haupt-HQ startet |
| `m_iMinimumBaseSupplies` | Minimale Start-Supplies in kleinen Basen |
| `m_iMaximumBaseSupplies` | Maximale Start-Supplies in kleinen Basen |
| `m_bIgnoreMinimumVehicleRank` | `true` = keine Rangvoraussetzung zum Spawnen von Fahrzeugen |
| `m_fSupplyOffloadAssistanceReward` | Anteil der XP für Spieler, die Supplies abladen, die sie nicht selbst aufgeladen haben |

> [!TIP]
> **Beispiel**
>
> ```json
> "missionHeader": {
>   "m_iStartingHQSupplies": 5000,
>   "m_iMinimumBaseSupplies": 500,
>   "m_iMaximumBaseSupplies": 2000,
>   "m_bIgnoreMinimumVehicleRank": true
> }
> ```

> [!NOTE]
> Zusätzlich gibt es den Eintrag `m_aCampaignCustomBaseList`, mit dem sich einzelne Basen anpassen lassen. Dafür werden die Namen der Basen benötigt, wie sie im World Editor des Szenarios festgelegt sind. Für die meisten Server ist dieser Eintrag nicht nötig.

## Speichern und automatische Spielstände

Wie oft der Server den Spielstand automatisch speichert, legst Du mit dem Eintrag `"persistence"` fest. Er steht ebenfalls innerhalb von `"gameProperties"`, aber außerhalb des `missionHeader`. Gehe dabei wie unter [So trägst Du den missionHeader ein](#so-tragst-Du-den-missionheader-ein) beschrieben vor: Server stoppen, `config.json` per SFTP bearbeiten, Server starten.

```json
"gameProperties": {
  "persistence": {
    "autoSaveInterval": 15,
    "saveRetention": 5
  }
}
```

Die übrigen Einträge in `"gameProperties"` lässt Du unverändert.

| Eintrag | Beschreibung |
|---------|--------------|
| `autoSaveInterval` | Abstand der automatischen Speicherungen in Minuten (`0` bis `60`, Standard `10`, `0` = deaktiviert) |
| `saveRetention` | Wie viele Speicherstände für das aktuelle Szenario behalten werden (`1` bis `128`, Standard `10`) |

Möchtest Du das Speichern komplett deaktivieren, setze im `missionHeader` den Eintrag `m_eSaveTypes` auf `0`:

```json
"missionHeader": {
  "m_eSaveTypes": 0
}
```

> [!WARNING]
> Mit `"m_eSaveTypes": 0` ist die Speicherung komplett deaktiviert – der Server legt keine neuen Spielstände an und setzt den Fortschritt nach einem Neustart nicht fort. Erstelle vor solchen Änderungen ein [Backup](/tutorials/gameserver/create-backup).
