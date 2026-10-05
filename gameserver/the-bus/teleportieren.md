---
description: Spieler auf einem The Bus Server per Befehl teleportieren
---

# So teleportierst du Spieler auf einem The Bus Server

Du kannst Spieler auf deinem Server per **Befehl** im Ingame-Chat zu bestimmten Koordinaten teleportieren.

:::: info Hinweis
Diese Befehle erfordern Owner- oder Admin-Rechte – siehe [Admin hinzufügen](admin-hinzufuegen.md). Gib sie im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## So teleportierst du einen Spieler

1. <b>Ingame-Chat öffnen</b><br>
   [Verbinde dich mit deinem Server](server-beitreten.md) und öffne den Ingame-Chat.

2. <b>Spielernamen ermitteln</b><br>
   Mit folgendem Befehl zeigst du alle Spieler auf dem Server an:

   ```
   /list
   ```

3. <b>Spieler teleportieren</b><br>
   Gib folgenden Befehl ein und ersetze `<spieler>` durch den Namen des Spielers sowie `<x>`, `<y>` und `<z>` durch die Zielkoordinaten:

   ```
   /tp <spieler> <x> <y> <z>
   ```

## So teleportierst du einen Spieler richtungsbezogen

Mit `/tpd` teleportierst du einen Spieler richtungsbezogen (in der Befehlsliste des Servers „teleport player directional“):

```
/tpd <spieler> <x> <y> <z>
```

:::: tip Tipp
Wie der Server die Werte bei `/tpd` genau auswertet, ist nicht offiziell dokumentiert. Probiere den Befehl zuerst mit kleinen Werten aus. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen.
::::

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/tp <spieler> <x> <y> <z>` | Spieler zu den Koordinaten teleportieren |
| `/tpd <spieler> <x> <y> <z>` | Spieler richtungsbezogen teleportieren |

Weitere Befehle findest du unter [Server konfigurieren](server-konfigurieren.md).
