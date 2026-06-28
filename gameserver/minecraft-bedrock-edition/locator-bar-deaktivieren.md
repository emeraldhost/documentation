---
description: Locator Bar auf einem Minecraft Bedrock Edition Server deaktivieren
---

# So deaktivierst du die Locator Bar auf einem Minecraft Bedrock Server

Die Locator Bar ist eine kompassähnliche Leiste über der Schnellzugriffsleiste, die mit dem Update **„Chase the Skies" (Bedrock 1.21.90)** hinzugefügt wurde. Sie zeigt die Richtung anderer Spieler in der Nähe an. Anders als bei Java Edition wird sie auf Bedrock **nicht** über die Spielregel `locatorBar` gesteuert, sondern über die Spielregel `playerWaypoints` — diese setzt du auf `off`, um die Leiste serverweit für alle Spieler abzuschalten.

:::: info Hinweis
`playerWaypoints` ist eine **Welt-Spielregel** und wird über den `/gamerule`-Befehl gesetzt — es gibt **keinen Eintrag in der `server.properties`**. Die Spielregel verwendet die Werte `everyone` (Standard) und `off` — **nicht** `true`/`false` wie bei Java Edition.
::::

## Voraussetzung

Du benötigst OP-Rechte, um Spielregeln zu ändern. Siehe [OP-Rechte vergeben](op-rechte-vergeben.md).

## Locator Bar deaktivieren

Den Befehl kannst du entweder direkt im Spiel-Chat (als Operator) oder über die Server-Konsole in der Verwaltung ausführen:

```
/gamerule playerWaypoints off
```

:::: info Hinweis
In der Server-Konsole werden alle Befehle **ohne** `/` eingegeben.
::::

## Locator Bar wieder aktivieren

Setze die Spielregel zurück auf `everyone`:

```
/gamerule playerWaypoints everyone
```

:::: tip Tipp
Die Spielregel wird mit der Welt gespeichert und bleibt auch nach einem Server-Neustart erhalten — du musst den Befehl also nur einmal ausführen. Standardmäßig sind die Spieler-Wegpunkte aktiviert (`everyone`).
::::
