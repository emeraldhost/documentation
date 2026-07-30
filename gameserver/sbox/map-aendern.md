---
description: "Map auf einem s&box Server ändern"
---

# So änderst du die Map auf deinem s&box Server

Maps sind in s&box – genau wie Gamemodes – Packages von sbox.game. Du gibst die gewünschte Map als zweiten Wert hinter dem Gamemode an.

## Package-Ident der Map herausfinden

Jede Map auf sbox.game hat eine Adresse nach dem Muster `sbox.game/<organisation>/<package>`. Den Ident bildest du, indem du den Schrägstrich durch einen Punkt ersetzt.

| Adresse auf sbox.game | Package-Ident |
|-----------------------|---------------|
| `sbox.game/facepunch/flatgrass` | `facepunch.flatgrass` |
| `sbox.game/facepunch/construct` | `facepunch.construct` |

## Map dauerhaft ändern

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen** beziehungsweise zu den Startparametern deines Servers.

3. <b>Map eintragen</b><br>
   Ergänze den Startparameter `+game` um den Package-Ident der Map. Der erste Wert ist immer der Gamemode, der zweite die Map:

   ```
   +game facepunch.sandbox facepunch.flatgrass
   ```

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Map im laufenden Betrieb wechseln

Du kannst die Map auch live über die **Server-Konsole** in der Verwaltung wechseln. Gib dabei Gamemode und Map gemeinsam an:

```
game facepunch.sandbox facepunch.flatgrass
```

:::: warning Achtung
Der Wechsel trennt alle verbundenen Spieler und lädt den Server neu. Die Änderung gilt nur bis zum nächsten Neustart – dauerhaft stellst du die Map über den Startparameter `+game` ein.
::::

:::: info Hinweis
Im offiziellen Sandbox-Modus steht zusätzlich der Befehl `map` zur Verfügung, mit dem du nur die Map wechselst:

```
map facepunch.flatgrass
```

Dieser Befehl gehört zum Gamemode und ist deshalb nicht auf jedem Server vorhanden. Der Weg über `game` funktioniert dagegen immer.
::::

## Wenn die Map nicht geladen wird

:::: danger Wichtig
Nicht jeder Gamemode lässt eine freie Mapwahl zu. Manche Gamemodes bringen ihre eigene Map mit oder verwalten die Mapfolge selbst und ignorieren deine Angabe. Welche Maps unterstützt werden, steht auf der sbox.game-Seite des jeweiligen Gamemodes.
::::

:::: tip Tipp
Prüfe den Ident auf Tippfehler: Er besteht ausschließlich aus Organisation, einem Punkt und dem Package-Namen – ohne `sbox.game/`, ohne Schrägstriche und ohne Dateiendung.
::::
