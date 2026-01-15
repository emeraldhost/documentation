---
description: Item-Verlust beim Tod auf einem Hytale Server konfigurieren
---

# So konfigurierst du den Item-Verlust beim Tod auf einem Hytale Server

Du kannst einstellen, ob und wie viele Items Spieler beim Tod verlieren. Diese Einstellung wird pro Welt konfiguriert.

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
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

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

:::: warning Achtung
Der `Death` Block existiert standardmäßig nicht in der config.json und muss manuell hinzugefügt werden.
::::

## Verfügbare Einstellungen

| Einstellung | Beschreibung |
| ----------- | ------------ |
| `ItemsLossMode` | `"None"` = Items behalten, `"All"` = alle Items verlieren, `"Configured"` = Prozentsatz verwenden |
| `ItemsAmountLossPercentage` | Prozentsatz der Items die verloren gehen (0.0-100.0) |
| `ItemsDurabilityLossPercentage` | Prozentsatz der Haltbarkeit die verloren geht (0.0-100.0) |

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

:::: tip Hinweis
Bei `ItemsLossMode: "None"` oder `"All"` werden die Prozentsatz-Einstellungen ignoriert. Nutze `"Configured"` um die Prozentsätze zu verwenden.
::::
