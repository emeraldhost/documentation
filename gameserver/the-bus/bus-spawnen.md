---
description: Bus an einer Haltestelle auf einem The Bus Server spawnen
---

# So spawnst du einen Bus auf einem The Bus Server

Du kannst per Befehl einen Bus an einer Haltestelle spawnen oder ungesteuerte Busse von der Karte entfernen.

## So spawnst du einen Bus

Gib folgenden Befehl im Ingame-Chat ein:

```
/spawnBus
```

Der Bus wird automatisch an einer Haltestelle platziert. Der Befehl kann mehrfach ausgeführt werden, um weitere Busse zu spawnen.

:::: info Hinweis
Welcher Bus gespawnt wird, hängt von der aktuell eingestellten Flotte ab. Die Flotte kannst du mit `/fleet` ändern.
::::

## Ungesteuerte Busse entfernen

Um alle Busse zu entfernen, die gerade **nicht von einem Spieler gesteuert** werden:

```
/clearBusses
```

Das betrifft z.B. über `/spawnBus` erstellte Busse, die kein Spieler eingestiegen ist, oder Busse, die von Spielern verlassen wurden.

:::: tip Tipp
Nutze `/clearBusses`, wenn zu viele ungenutzte Busse auf der Karte stehen und die Übersicht oder Performance leidet.
::::

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/spawnBus` | Bus an einer Haltestelle spawnen |
| `/clearBusses` | Alle ungesteuerten Busse entfernen |

:::: tip Tipp
Diese Befehle erfordern Owner- oder Admin-Rechte.
::::
