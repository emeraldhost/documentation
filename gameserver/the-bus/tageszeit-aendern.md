---
description: Tageszeit und Datum auf einem The Bus Server ändern oder die Echtzeit verwenden
---

# So änderst du Tageszeit und Datum auf einem The Bus Server

Du kannst die Tageszeit und das Datum auf deinem Server per **Befehl** im Ingame-Chat ändern oder den Server die aktuelle Echtzeit verwenden lassen.

:::: info Hinweis
Diese Befehle erfordern Owner- oder Admin-Rechte. Wie du einen Admin hinzufügst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md). Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## So änderst du die Tageszeit

1. <b>Ingame-Chat öffnen</b><br>
   [Verbinde dich mit deinem Server](server-beitreten.md) und öffne den Ingame-Chat.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein und ersetze `<zeit>` durch die gewünschte Uhrzeit:

   ```
   /time <zeit>
   ```

## So änderst du das Datum

1. <b>Ingame-Chat öffnen</b><br>
   [Verbinde dich mit deinem Server](server-beitreten.md) und öffne den Ingame-Chat.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein und ersetze `<datum>` durch das gewünschte Datum:

   ```
   /date <datum>
   ```

:::: tip Tipp
In welchem Format `/time` und `/date` die Werte erwarten, ist nicht offiziell dokumentiert. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen.
::::

## So verwendest du die aktuelle Echtzeit

Seit Update 3.2 EA kann dein Server die aktuelle Echtzeit verwenden. Diese Option aktivierst du mit folgendem Befehl im Ingame-Chat:

```
/useRealTime
```

:::: info Hinweis
Ob der Befehl einen zusätzlichen Wert erwartet, ist nicht offiziell dokumentiert. Ist die Echtzeit aktiv, können Werte, die du per `/time` oder `/date` setzt, wieder durch die aktuelle Uhrzeit ersetzt werden.
::::

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/time <zeit>` | Aktuelle Uhrzeit setzen |
| `/date <datum>` | Aktuelles Datum setzen |
| `/useRealTime` | Echtzeit aktivieren (UseRealTime) |

Wie du das Wetter änderst, erfährst du unter [Wetter ändern](wetter-aendern.md).
