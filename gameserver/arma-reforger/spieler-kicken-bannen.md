---
description: Spieler auf einem Arma Reforger Server kicken und bannen
---

# So kickst und bannst du Spieler auf einem Arma Reforger Server

::: warning Voraussetzung
Du musst als Admin eingeloggt sein, um diese Befehle nutzen zu können. Siehe [Admin werden](admin-werden.md).
:::

## Spieler-ID herausfinden

Bevor du einen Spieler kicken oder bannen kannst, benötigst du dessen Spieler-ID.

1. **Öffne den Chat mit der Taste `/`.**

2. **Gib folgenden Befehl ein:**

    ```
    #players
    ```

3. **Notiere dir die ID des gewünschten Spielers aus der Liste.**

## Spieler kicken

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

```
#kick <spielerId>
```

**Beispiel:**

```
#kick 5
```

## Spieler bannen

Ein gebannter Spieler kann dem Server nicht mehr beitreten, bis der Ban abgelaufen ist oder manuell entfernt wird.

```
#ban <spielerId> <dauer>
```

Die Dauer wird in **Sekunden** angegeben. `0` bedeutet ein permanenter Ban.

**Beispiele:**

| Befehl | Wirkung |
|--------|---------|
| `#ban 5 0` | Permanenter Ban |
| `#ban 5 3600` | Ban für 1 Stunde |
| `#ban 5 86400` | Ban für 24 Stunden |

## Ban aufheben

```
#ban remove <spielerId>
```

## Alle Bans anzeigen

```
#ban list
```

::: tip Tipp
Verwende immer die numerische Spieler-ID statt des Spielernamens, um sicherzustellen, dass der richtige Spieler betroffen ist.
:::
