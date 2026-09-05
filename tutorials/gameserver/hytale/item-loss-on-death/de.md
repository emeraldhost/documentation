---
slug: "item-verlust-beim-tod"
language: "de"
title: "So konfigurierst Du den Item-Verlust beim Tod auf einem Hytale Server"
description: "Item-Verlust beim Tod auf einem Hytale Server konfigurieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-08-29"
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

> [!TIP]
> **Hinweis**
>
> Stoppe Deinen Server bevor Du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.

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

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

4. **Server starten**\
   Starte Deinen Server, damit die Änderungen übernommen werden.

> [!WARNING]
> Der `Death` Block existiert standardmäßig nicht in der config.json und muss manuell hinzugefügt werden.

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

> [!TIP]
> **Hinweis**
>
> Bei `ItemsLossMode: "None"` oder `"All"` werden die Prozentsatz-Einstellungen ignoriert. Nutze `"Configured"` um die Prozentsätze zu verwenden.
