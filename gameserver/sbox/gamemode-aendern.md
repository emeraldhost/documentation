---
description: "Gamemode auf einem s&box Server ändern"
---

# So änderst du den Gamemode auf deinem s&box Server

In s&box gibt es keine feste Spielauswahl: Welcher Gamemode auf deinem Server läuft, legst du über den **Package-Ident** eines Spielmodus von sbox.game fest.

## Package-Ident herausfinden

Jeder Gamemode auf sbox.game hat eine Adresse nach dem Muster `sbox.game/<organisation>/<package>`. Den Ident bildest du, indem du den Schrägstrich durch einen Punkt ersetzt.

| Adresse auf sbox.game | Package-Ident |
|-----------------------|---------------|
| `sbox.game/facepunch/sandbox` | `facepunch.sandbox` |
| `sbox.game/wpr/ttt` | `wpr.ttt` |

:::: info Hinweis
Ältere Anleitungen nennen noch die Adresse `asset.party`. Diese leitet inzwischen auf sbox.game weiter, der Aufbau des Idents ist unverändert.
::::

## Gamemode dauerhaft ändern

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen** beziehungsweise zu den Startparametern deines Servers.

3. <b>Gamemode eintragen</b><br>
   Trage den Package-Ident des gewünschten Gamemodes hinter `+game` ein:

   ```
   +game facepunch.sandbox
   ```

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: tip Tipp
Du kannst hinter dem Gamemode direkt eine Map angeben: `+game facepunch.sandbox facepunch.flatgrass`. Mehr dazu unter [Map ändern](map-aendern.md).
::::

## Gamemode im laufenden Betrieb wechseln

Du kannst den Gamemode auch live über die **Server-Konsole** in der Verwaltung wechseln:

```
game facepunch.sandbox
```

:::: warning Achtung
Der Wechsel trennt alle verbundenen Spieler und lädt den Server neu. Diese Änderung gilt nur bis zum nächsten Neustart – dauerhaft stellst du den Gamemode über den Startparameter `+game` ein.
::::

## Was passiert beim Wechsel?

Der Server lädt den Gamemode samt aller benötigten Inhalte automatisch aus der Cloud herunter und legt sie im Ordner `/download/` ab. Der erste Start eines neuen Gamemodes dauert dadurch etwas länger.

:::: info Hinweis
Deine Spieler müssen nichts installieren. Fehlende Inhalte inklusive Spielcode überträgt der Server beim Beitritt direkt an die Clients.
::::

:::: danger Wichtig
Es gibt auf einem s&box Server keinen Addon- oder Mod-Ordner, in den du zusätzliche Inhalte legen könntest. Welche Abhängigkeiten geladen werden, bestimmt allein das Gamemode-Package. Möchtest du andere Inhalte, wählst du einen anderen Gamemode.
::::
