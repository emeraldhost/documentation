---
description: Welt-Einstellungen auf einem Windrose Server ändern
---

# So änderst du die Welt-Einstellungen auf deinem Windrose Server

Die Welt-Einstellungen liegen in der Datei `WorldDescription.json` im Welt-Ordner deines Servers. Du kannst die Schwierigkeit über ein Preset (`Easy`, `Medium`, `Hard`) oder über eigene Werte (`Custom`) festlegen.

:::: tip Empfohlen
Am einfachsten ist es, die gewünschten Einstellungen direkt im Spiel auszuwählen — siehe [Einstellungen im Spiel vornehmen](#einstellungen-im-spiel-vornehmen-und-ubertragen). So musst du das aufwendige JSON-Format nicht manuell schreiben.
::::

## Einstellungen im Spiel vornehmen und übertragen

Der einfachste Weg: Erstelle eine Welt in Windrose mit den gewünschten Einstellungen und kopiere die fertige Datei auf deinen Server.

1. <b>Welt im Spiel erstellen</b><br>
   Starte Windrose und erstelle eine neue Welt mit deinen gewünschten Einstellungen (Preset oder Custom).

2. <b>Lokale Welt-Datei finden</b><br>
   Öffne auf deinem PC den Ordner deiner Welt:

   ```
   %LOCALAPPDATA%\R5\Saved\SaveProfiles\Default\RocksDB_v2\<GameVersion>\Worlds\<WorldID>\
   ```

3. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

4. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

5. <b>WorldDescription.json kopieren</b><br>
   Kopiere die lokale `WorldDescription.json` in den Welt-Ordner deines Servers:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

6. <b>Island ID anpassen</b><br>
   Setze die [Island ID](island-id-setzen.md) in der Verwaltung auf den Wert aus der kopierten Welt, damit dein Server diese Welt lädt.

7. <b>Server starten</b><br>
   Starte deinen Server.

## Datei direkt am Server bearbeiten

Wenn du die Datei lieber von Hand bearbeiten möchtest:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>WorldDescription.json öffnen</b><br>
   Öffne die Datei im Welt-Ordner:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. <b>Werte anpassen</b><br>
   Passe `WorldPresetType` und/oder die einzelnen `WorldSettings`-Parameter an (siehe Tabellen unten).

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Du musst `WorldPresetType` nicht manuell auf `Custom` setzen. Sobald du eigene Werte in den `WorldSettings` einträgst und den Server neu startest, wechselt der Server `WorldPresetType` beim nächsten Start automatisch auf `Custom`.
::::

## Allgemeine Felder

| Feld | Beschreibung | Werte |
|------|--------------|-------|
| `IslandId` | Eindeutige ID der Welt — muss mit dem Ordnernamen und dem Wert in `WorldSettings.json` übereinstimmen | Alphanumerische Zeichenkette |
| `WorldName` | Angezeigter Name der Welt | Beliebiger Text |
| `WorldPresetType` | Schwierigkeits-Preset | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings-Parameter (nur bei `Custom`)

:::: warning Achtung
Die `WorldSettings` werden nur ausgewertet, wenn `WorldPresetType` auf `Custom` steht. Bei den Presets `Easy`, `Medium` und `Hard` sollte `WorldSettings` leer bleiben — der Server verwendet dann die Preset-Werte.
::::

### Bool-Parameter

| Parameter | Beschreibung | Standard |
|-----------|--------------|----------|
| `Coop.SharedQuests` | Quests werden automatisch für alle aktiven Mitspieler abgeschlossen, wenn ein Spieler sie beendet | `true` |
| `EasyExplore` | Im Spiel als **"Immersive Exploration"** bekannt. Wenn aktiviert, werden Marker für Points of Interest **ausgeblendet** — Erkunden wird also **schwerer**. Der Parametername ist irreführend. | `false` |

### Float-Parameter (Multiplikatoren)

| Parameter | Beschreibung | Standard | Bereich |
|-----------|--------------|----------|---------|
| `MobHealthMultiplier` | Leben von Gegnern | `1.0` | `0.2` – `5.0` |
| `MobDamageMultiplier` | Schaden von Gegnern | `1.0` | `0.2` – `5.0` |
| `ShipsHealthMultiplier` | Leben von feindlichen Schiffen | `1.0` | `0.4` – `5.0` |
| `ShipsDamageMultiplier` | Schaden feindlicher Schiffe | `1.0` | `0.2` – `2.5` |
| `BoardingDifficultyMultiplier` | Anzahl Gegner, die beim Entern besiegt werden müssen | `1.0` | `0.2` – `5.0` |
| `Coop.StatsCorrectionModifier` | Skaliert Gegner-Leben und Posture-Verlust mit Spieleranzahl | `1.0` | `0.0` – `2.0` |
| `Coop.ShipStatsCorrectionModifier` | Skaliert Schiffs-Leben mit Spieleranzahl | `0.0` | `0.0` – `2.0` |

### Tag-Parameter

| Parameter | Beschreibung | Standard | Werte |
|-----------|--------------|----------|-------|
| `CombatDifficulty` | Schwierigkeit von Bossen und Aggressivität der Gegner | `Normal` | `Easy`, `Normal`, `Hard` |

## Beispiel: `WorldDescription.json` mit Custom-Preset

Die Parameter werden in der Datei nicht als einfache Namen, sondern als `TagName`-Schlüssel gespeichert. So sieht eine vollständige `WorldDescription.json` mit Custom-Preset aus:

```json
{
    "Version": 1,
    "WorldDescription":
    {
        "islandId": "E24A22C9C8D3448951AFD002162576D5",
        "WorldName": "Meine Welt",
        "CreationTime": 6.3910902400911002e+17,
        "WorldPresetType": "Custom",
        "WorldSettings":
        {
            "BoolParameters":
            {
                "{\"TagName\": \"WDS.Parameter.Coop.SharedQuests\"}": true,
                "{\"TagName\": \"WDS.Parameter.EasyExplore\"}": false
            },
            "FloatParameters":
            {
                "{\"TagName\": \"WDS.Parameter.MobHealthMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.MobDamageMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.ShipsHealthMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.ShipsDamageMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.BoardingDifficultyMultiplier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.Coop.StatsCorrectionModifier\"}": 1.0,
                "{\"TagName\": \"WDS.Parameter.Coop.ShipStatsCorrectionModifier\"}": 0.0
            },
            "TagParameters":
            {
                "{\"TagName\": \"WDS.Parameter.CombatDifficulty\"}":
                {
                    "TagName": "WDS.Parameter.CombatDifficulty.Normal"
                }
            }
        }
    }
}
```

:::: warning Achtung
Ändere `IslandId` nicht — der Wert muss mit dem Ordnernamen und der `IslandId` in `WorldSettings.json` übereinstimmen. Möchtest du eine andere Welt laden, siehe [Island ID setzen](island-id-setzen.md).
::::
