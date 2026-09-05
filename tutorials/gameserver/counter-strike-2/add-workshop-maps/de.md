---
slug: "workshop-maps-hinzufuegen"
language: "de"
title: "So fügst Du Workshop Maps zu Deinem Counter-Strike 2 Server hinzu"
description: "Workshop Maps auf einem Counter-Strike 2 Server hinzufügen"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Workshop Maps hinzufügen"
sort: 8
related: ["gameserver/counter-strike-2/add-mods", "gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/configure-server"]
---

Du kannst Maps aus dem Steam Workshop auf Deinem Server laden.

## Workshop Map-ID finden

1. **Steam Workshop öffnen**\
   Öffne den [Steam Workshop für CS2](https://steamcommunity.com/app/730/workshop/) und suche die gewünschte Map.

2. **Map-ID kopieren**\
   Die Map-ID findest Du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   > [!TIP]
   > **Beispiel**
   >
   > In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=3070288532` ist die Map-ID `3070288532`.

## Einzelne Workshop Map laden

Lade eine einzelne Workshop Map über die RCON-Konsole:

```text
host_workshop_map 3070288532
```

Der Server lädt die Map automatisch herunter und wechselt zu ihr.

## Workshop Collection laden

Du kannst auch eine ganze Sammlung von Maps laden:

1. **Collection erstellen**\
   Erstelle eine [Steam Workshop Collection](https://steamcommunity.com/workshop/browse/?appid=730&section=collections) und füge die gewünschten Maps hinzu. Die Collection muss **öffentlich** sein.

2. **Collection-ID kopieren**\
   Kopiere die Collection-ID aus der URL.

3. **Startparameter setzen**\
   Trage in der Verwaltung unter **Einstellungen** bei **Zusätzliche Startparameter** ein:

   ```text
   +host_workshop_collection COLLECTION_ID
   ```

4. **Server neu starten**\
   Starte Deinen Server neu. Die Maps werden automatisch heruntergeladen.

> [!NOTE]
> Mit dem Konsolenbefehl `ds_workshop_listmaps` kannst Du alle verfügbaren Workshop Maps auf dem Server anzeigen.

> [!WARNING]
> Collections sind auf maximal 100 Maps begrenzt. Bei mehr als 100 Maps wird die gesamte Collection nicht geladen.
