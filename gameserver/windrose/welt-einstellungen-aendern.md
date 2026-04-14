---
description: Welt-Einstellungen auf einem Windrose Server ändern
---

# So änderst du die Welt-Einstellungen auf deinem Windrose Server

Die Welt-Einstellungen werden in der Datei `WorldDescription.json` festgelegt. Dort kannst du Schwierigkeitsgrade, Multiplikatoren und weitere Parameter anpassen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>WorldDescription.json öffnen</b><br>
   Öffne die Datei `WorldDescription.json` im Verzeichnis deiner Welt:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/<WorldID>/WorldDescription.json
   ```

4. <b>Einstellungen anpassen</b><br>
   Passe die gewünschten Werte an (siehe Tabellen unten).

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Allgemeine Felder

| Feld | Beschreibung | Werte |
|------|--------------|-------|
| `IslandId` | Eindeutige Welt-ID. Muss mit dem Ordnernamen übereinstimmen. | Alphanumerische Zeichenkette |
| `WorldName` | Angezeigter Name der Welt | Beliebiger Text |
| `WorldPresetType` | Voreingestellter Schwierigkeitsgrad | `Easy`, `Medium`, `Hard`, `Custom` |

## WorldSettings

### Boolean-Parameter

| Parameter | Beschreibung | Standard |
|-----------|--------------|----------|
| `CoopQuests` | Koop-Quests aktivieren | `true` |
| `EasyExplore` | Einfachere Erkundung | `false` |

### Float-Parameter (Multiplikatoren)

| Parameter | Beschreibung | Bereich |
|-----------|--------------|---------|
| `MobHealthMultiplier` | Leben von Gegnern | `0.2` – `5.0` |
| `MobDamageMultiplier` | Schaden von Gegnern | `0.2` – `5.0` |
| `ShipHealthMultiplier` | Leben von Schiffen | `0.4` – `5.0` |
| `ShipDamageMultiplier` | Schaden von Schiffen | `0.2` – `2.5` |
| `BoardingDifficultyMultiplier` | Schwierigkeit beim Entern | `0.2` – `5.0` |
| `Coop_StatsCorrectionModifier` | Koop-Stats-Anpassung | `0.0` – `2.0` |
| `Coop_ShipStatsCorrectionModifier` | Koop-Schiffs-Stats-Anpassung | `0.0` – `2.0` |

### Tag-Parameter

| Parameter | Beschreibung | Werte |
|-----------|--------------|-------|
| `CombatDifficulty` | Schwierigkeit im Kampf | `Easy`, `Normal`, `Hard` |

:::: warning Achtung
Ändere den Wert von `IslandId` nicht, wenn du die Welt weiterhin nutzen möchtest. Der Wert muss mit dem Namen des Welt-Ordners übereinstimmen.
::::

:::: tip Tipp
Wenn du den `WorldPresetType` auf `Custom` setzt, kannst du die einzelnen Parameter frei anpassen.
::::
