---
slug: "welt-einstellungen-aendern"
language: "de"
title: "So änderst Du die Welt-Einstellungen auf Deinem Windrose Server"
description: "Welt-Einstellungen auf einem Windrose Server ändern"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Einstellungen ändern"
sort: 13
related: ["gameserver/windrose/change-max-players", "gameserver/windrose/change-server-name", "gameserver/windrose/create-backup", "gameserver/windrose/download-savegame"]
---

Die Welt-Einstellungen liegen in der Datei `WorldDescription.json` im Welt-Ordner Deines Servers. Du kannst die Schwierigkeit über ein Preset (`Easy`, `Medium`, `Hard`) oder über eigene Werte (`Custom`) festlegen.

> [!TIP]
> **Empfohlen**
>
> Am einfachsten ist es, die gewünschten Einstellungen direkt im Spiel auszuwählen – siehe [Einstellungen im Spiel vornehmen](#einstellungen-im-spiel-vornehmen-und-ubertragen). So musst Du das aufwendige JSON-Format nicht manuell schreiben.

## Einstellungen im Spiel vornehmen und übertragen

Der einfachste Weg: Erstelle eine Welt in Windrose mit den gewünschten Einstellungen und kopiere die fertige Datei auf Deinen Server.

1. **Welt im Spiel erstellen**\
   Starte Windrose und erstelle eine neue Welt mit Deinen gewünschten Einstellungen (Preset oder Custom).

2. **Lokale Welt-Datei finden**\
   Öffne auf Deinem PC den Ordner Deiner Welt:

   ```text
   %LOCALAPPDATA%\R5\Saved\SaveProfiles\Default\RocksDB_v2\<GameVersion>\Worlds\<WorldID>\
   ```

3. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

4. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

5. **WorldDescription.json kopieren**\
   Kopiere die lokale `WorldDescription.json` in den Welt-Ordner Deines Servers:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

6. **Island ID anpassen**\
   Setze die [Island ID](/tutorials/gameserver/windrose/set-island-id) in der Verwaltung auf den Wert aus der kopierten Welt, damit Dein Server diese Welt lädt.

7. **Server starten**\
   Starte Deinen Server.

## Datei direkt am Server bearbeiten

Wenn Du die Datei lieber von Hand bearbeiten möchtest:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **WorldDescription.json öffnen**\
   Öffne die Datei im Welt-Ordner:

   ```text
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. **Werte anpassen**\
   Passe `WorldPresetType` und/oder die einzelnen `WorldSettings`-Parameter an (siehe Tabellen unten).

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Du musst `WorldPresetType` nicht manuell auf `Custom` setzen. Sobald Du eigene Werte in den `WorldSettings` einträgst und den Server neu startest, wechselt der Server `WorldPresetType` beim nächsten Start automatisch auf `Custom`.

## Allgemeine Felder

| Feld | Beschreibung | Werte |
|------|--------------|-------|
| `IslandId` | Eindeutige ID der Welt – muss mit dem Ordnernamen und dem Wert in `WorldSettings.json` übereinstimmen | Alphanumerische Zeichenkette |
| `WorldName` | Angezeigter Name der Welt | Beliebiger Text |
| `WorldPresetType` | Schwierigkeits-Preset | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings-Parameter (nur bei `Custom`)

> [!WARNING]
> Die `WorldSettings` werden nur ausgewertet, wenn `WorldPresetType` auf `Custom` steht. Bei den Presets `Easy`, `Medium` und `Hard` sollte `WorldSettings` leer bleiben – der Server verwendet dann die Preset-Werte.

### Bool-Parameter

| Parameter | Beschreibung | Standard |
|-----------|--------------|----------|
| `Coop.SharedQuests` | Quests werden automatisch für alle aktiven Mitspieler abgeschlossen, wenn ein Spieler sie beendet | `true` |
| `EasyExplore` | Im Spiel als **„Immersive Exploration“** bekannt. Wenn aktiviert, werden Marker für Points of Interest **ausgeblendet** – Erkunden wird also **schwerer**. Der Parametername ist irreführend. | `false` |

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

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Einstellungen nicht mehr einlesen kann.

> [!WARNING]
> Ändere `IslandId` nicht – der Wert muss mit dem Ordnernamen und der `IslandId` in `WorldSettings.json` übereinstimmen. Möchtest Du eine andere Welt laden, siehe [Island ID setzen](/tutorials/gameserver/windrose/set-island-id).
