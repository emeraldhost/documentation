---
description: Workshop Maps auf einem Counter-Strike 2 Server hinzufügen
---

# So fügst du Workshop Maps zu deinem Counter-Strike 2 Server hinzu

Du kannst Maps aus dem Steam Workshop auf deinem Server laden.

## Workshop Map-ID finden

1. <b>Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für CS2](https://steamcommunity.com/app/730/workshop/) und suche die gewünschte Map.

2. <b>Map-ID kopieren</b><br>
   Die Map-ID findest du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   :::: tip Beispiel
   In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=3070288532` ist die Map-ID `3070288532`.
   ::::

## Einzelne Workshop Map laden

Lade eine einzelne Workshop Map über die RCON-Konsole:

```
host_workshop_map 3070288532
```

Der Server lädt die Map automatisch herunter und wechselt zu ihr.

## Workshop Collection laden

Du kannst auch eine ganze Sammlung von Maps laden:

1. <b>Collection erstellen</b><br>
   Erstelle eine [Steam Workshop Collection](https://steamcommunity.com/workshop/browse/?appid=730&section=collections) und füge die gewünschten Maps hinzu. Die Collection muss **öffentlich** sein.

2. <b>Collection-ID kopieren</b><br>
   Kopiere die Collection-ID aus der URL.

3. <b>Startparameter setzen</b><br>
   Trage in der Verwaltung unter **Einstellungen** bei **Zusätzliche Startparameter** ein:

   ```
   +host_workshop_collection COLLECTION_ID
   ```

4. <b>Server neu starten</b><br>
   Starte deinen Server neu. Die Maps werden automatisch heruntergeladen.

:::: info Hinweis
Mit dem Konsolenbefehl `ds_workshop_listmaps` kannst du alle verfügbaren Workshop Maps auf dem Server anzeigen.
::::

:::: warning Achtung
Collections sind auf maximal 100 Maps begrenzt. Bei mehr als 100 Maps wird die gesamte Collection nicht geladen.
::::
