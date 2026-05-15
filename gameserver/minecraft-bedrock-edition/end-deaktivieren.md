---
description: End auf einem Minecraft Bedrock Edition Server deaktivieren
---

# So deaktivierst du den End auf einem Minecraft Bedrock Server

Anders als bei Java Edition gibt es auf Bedrock-Dedicated-Servern **keine Einstellung in der `server.properties`**, um den End zu deaktivieren. Stattdessen musst du den Zugang zur Dimension auf andere Weise blockieren.

## Möglichkeiten

### Behavior Pack
Du kannst ein Behavior Pack erstellen oder installieren, das das Aktivieren von End-Portalen blockiert oder deren Funktion deaktiviert. Behavior Packs lädst du wie [hier beschrieben](behavior-und-resource-packs-hinzufuegen.md) auf deinen Server hoch und aktivierst sie für die jeweilige Welt.

### Command Block
Mit einem Command Block in einem geladenen Chunk kannst du Spieler beim Betreten der End-Dimension automatisch in die Oberwelt zurück teleportieren. Beispiel:

```
/execute as @a[m=!c] in minecraft:the_end run tp @s ~ ~ ~ minecraft:overworld
```

Der Command Block muss im Modus **Repeat** und **Always Active** laufen, damit der Befehl dauerhaft ausgeführt wird.

:::: info Hinweis
Beide Methoden sind nur Workarounds — der End selbst lässt sich auf Bedrock nicht vollständig deaktivieren, nur der Zugang dazu kann eingeschränkt werden.
::::
