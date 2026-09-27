---
slug: "item-verlust-beim-tod"
language: "de"
title: "So konfigurierst Du den Item-Verlust beim Tod auf einem Hytale Server"
description: "Item-Verlust beim Tod auf einem Hytale Server konfigurieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Item-Verlust beim Tod"
sort: 5
related: ["gameserver/hytale/improve-performance", "gameserver/hytale/add-mods", "gameserver/hytale/join-server", "gameserver/hytale/kick-ban-players"]
---

Du kannst einstellen, ob und wie viele Items Spieler beim Tod verlieren. Diese Einstellung wird pro Welt konfiguriert.

Standardmäßig nutzt jede Welt die Spielregeln `Default` (Einstellung `"GameplayConfig": "Default"`). Damit lassen Spieler beim Tod 50 % jedes Item-Stapels an der Todesstelle fallen, mindestens aber ein Item. Das gilt nur für Items, die beim Tod fallen gelassen werden können, zum Beispiel Zutaten, Erze und Nahrung. Waffen, Rüstungen, Werkzeuge und Blöcke wie Stein oder Holz bleiben im Inventar. Zusätzlich sinkt die Haltbarkeit der Items um 10 %.

> [!NOTE]
> Stoppe Deinen Server, bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

## So konfigurierst Du den Item-Verlust

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/<weltname>/config.json
   ```

   Ersetze `<weltname>` durch den Namen Deiner Welt (z.B. `default`).

3. **Death-Block hinzufügen**\
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

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

> [!WARNING]
> Der `Death` Block existiert standardmäßig nicht in der config.json und muss manuell hinzugefügt werden. Sobald er vorhanden ist, ersetzt er die Tod-Einstellungen der Spielregeln vollständig. Gib deshalb immer alle Einstellungen an, wie in den Beispielen unten.

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

> [!NOTE]
> Bei `ItemsLossMode: "None"` oder `"All"` wird `ItemsAmountLossPercentage` ignoriert. Nutze `"Configured"`, um den Prozentsatz zu verwenden. `ItemsDurabilityLossPercentage` gilt dagegen in jedem Modus. Soll die Haltbarkeit beim Tod unverändert bleiben, setze den Wert auf `0.0`.

> [!TIP]
> Spieler im Kreativmodus verlieren beim Tod weder Items noch Haltbarkeit. Möchtest Du zu den Standardwerten zurückkehren, entferne den `Death` Block wieder aus der config.json.
