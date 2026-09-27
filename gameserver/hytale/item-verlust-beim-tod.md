---
description: Item-Verlust beim Tod auf einem Hytale Server konfigurieren
---

# So konfigurierst du den Item-Verlust beim Tod auf einem Hytale Server

Du kannst einstellen, ob und wie viele Items Spieler beim Tod verlieren. Diese Einstellung wird pro Welt konfiguriert.

Standardmäßig nutzt jede Welt die Spielregeln `Default` (Einstellung `"GameplayConfig": "Default"`). Damit lassen Spieler beim Tod 50 % jedes Item-Stapels an der Todesstelle fallen, mindestens aber ein Item. Das gilt nur für Items, die beim Tod fallen gelassen werden können, zum Beispiel Zutaten, Erze und Nahrung. Waffen, Rüstungen, Werkzeuge und Blöcke wie Stein oder Holz bleiben im Inventar. Zusätzlich sinkt die Haltbarkeit der Items um 10 %.

:::: info Hinweis
Stoppe deinen Server, bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So konfigurierst du den Item-Verlust

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/<weltname>/config.json
   ```
   Ersetze `<weltname>` durch den Namen deiner Welt (z.B. `default`).

3. <b>Death-Block hinzufügen</b><br>
   Suche nach der Zeile `"GameplayConfig"` und füge darunter den `Death` Block hinzu:
   ```json
   "Death": {
     "RespawnController": {
       "Type": "HomeOrSpawnPoint"
     },
     "ItemsLossMode": "None",
     "ItemsAmountLossPercentage": 0.0,
     "ItemsDurabilityLossPercentage": 0.0
   }
   ```
   Da danach weitere Einstellungen folgen, muss die Zeile `"GameplayConfig": "Default",` mit einem Komma enden, und auch hinter der letzten schließenden Klammer `}` des `Death` Blocks muss ein Komma stehen.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: warning Achtung
Der `Death` Block existiert standardmäßig nicht in der config.json und muss manuell hinzugefügt werden. Sobald er vorhanden ist, ersetzt er die Tod-Einstellungen der Spielregeln vollständig. Gib deshalb immer alle Einstellungen an, wie in den Beispielen unten.
::::

## Verfügbare Einstellungen

| Einstellung | Beschreibung |
| ----------- | ------------ |
| `RespawnController` | Wo Spieler nach dem Tod wieder erscheinen: `"HomeOrSpawnPoint"` = eigener Respawnpunkt des Spielers, sonst Spawnpunkt der Welt (Standard), `"WorldSpawnPoint"` = immer am Spawnpunkt der Welt |
| `ItemsLossMode` | `"None"` = Items behalten, `"All"` = alle Items fallen lassen, `"Configured"` = Prozentsatz aus `ItemsAmountLossPercentage` verwenden |
| `ItemsAmountLossPercentage` | Prozentsatz jedes Item-Stapels, der beim Tod fallen gelassen wird (0.0-100.0). Ab einem Wert über `0.0` fällt pro Stapel mindestens ein Item. Gilt nur bei `"Configured"` und nur für Items, die beim Tod fallen gelassen werden können (z.B. Zutaten, Erze, Nahrung) |
| `ItemsDurabilityLossPercentage` | Prozentsatz der Haltbarkeit, die Items beim Tod verlieren (0.0-100.0). Gilt in jedem Modus |

## Beispiele

**Keine Items verlieren (entspannt):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "None",
  "ItemsAmountLossPercentage": 0.0,
  "ItemsDurabilityLossPercentage": 0.0
}
```

**Alle Items verlieren (hardcore):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "All",
  "ItemsAmountLossPercentage": 100.0,
  "ItemsDurabilityLossPercentage": 0.0
}
```

**50% der Items verlieren (ausgewogen):**
```json
"Death": {
  "RespawnController": {
    "Type": "HomeOrSpawnPoint"
  },
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

:::: info Hinweis
Bei `ItemsLossMode: "None"` oder `"All"` wird `ItemsAmountLossPercentage` ignoriert. Nutze `"Configured"`, um den Prozentsatz zu verwenden. `ItemsDurabilityLossPercentage` gilt dagegen in jedem Modus. Soll die Haltbarkeit beim Tod unverändert bleiben, setze den Wert auf `0.0`.
::::

:::: tip Tipp
Spieler im Kreativmodus verlieren beim Tod weder Items noch Haltbarkeit. Möchtest du zu den Standardwerten zurückkehren, entferne den `Death` Block wieder aus der config.json.
::::
