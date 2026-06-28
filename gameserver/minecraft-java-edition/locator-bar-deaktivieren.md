---
description: Locator Bar auf einem Minecraft Java Edition Server deaktivieren
---

# So deaktivierst du die Locator Bar auf einem Minecraft Java Server

Die Locator Bar ist eine kompassähnliche Leiste über der Schnellzugriffsleiste, die mit dem Update **1.21.6 „Chase the Skies"** hinzugefügt wurde. Sie zeigt die Richtung anderer Spieler in der Nähe an. Über die Spielregel `locatorBar` kannst du sie serverweit für alle Spieler abschalten.

:::: info Hinweis
`locatorBar` ist eine **Vanilla-Spielregel** und funktioniert auf allen Java-Server-Varianten — Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric und NeoForge (ab Version 1.21.6).
::::

## Voraussetzung

Du benötigst OP-Rechte (mindestens Level 2), um Spielregeln zu ändern. Siehe [OP-Rechte vergeben](op-rechte-vergeben.md).

## Locator Bar deaktivieren

Den Befehl kannst du entweder direkt im Spiel-Chat oder über die Server-Konsole in der Verwaltung ausführen:

```
/gamerule locatorBar false
```

:::: info Hinweis
In der Server-Konsole werden alle Befehle **ohne** `/` eingegeben.
::::

:::: warning Achtung
Achte auf die Groß- und Kleinschreibung: Die Spielregel heißt `locatorBar` (camelCase), **nicht** `locatorbar` oder `locator_bar`. Bei falscher Schreibweise schlägt der Befehl ohne Fehlermeldung fehl.
::::

## Locator Bar wieder aktivieren

Setze die Spielregel zurück auf `true`:

```
/gamerule locatorBar true
```

:::: tip Tipp
Die Spielregel wird mit der Welt gespeichert und bleibt auch nach einem Server-Neustart erhalten — du musst den Befehl also nur einmal ausführen. Standardmäßig ist die Locator Bar aktiviert (`true`).
::::
