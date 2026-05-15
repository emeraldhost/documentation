---
description: Nether auf einem Minecraft Bedrock Edition Server deaktivieren
---

# So deaktivierst du den Nether auf einem Minecraft Bedrock Server

Anders als bei Java Edition gibt es auf Bedrock Servern **keine Einstellung in der `server.properties`**, um den Nether zu deaktivieren. Stattdessen musst du den Zugang zur Dimension auf andere Weise blockieren.

## Möglichkeiten

### Behavior Pack
Du kannst ein Behavior Pack erstellen oder installieren, das das Erzeugen von Nether-Portalen blockiert oder deren Funktion deaktiviert. Behavior Packs lädst du wie [hier beschrieben](behavior-und-resource-packs-hinzufuegen.md) auf deinen Server hoch und aktivierst sie für die jeweilige Welt.

### Command Block
Mit einem Command Block in einem geladenen Chunk kannst du Spieler beim Betreten der Nether-Dimension automatisch in die Oberwelt zurück teleportieren. Beispiel:

```
/execute as @a[m=!c] in minecraft:nether run tp @s ~ ~ ~ minecraft:overworld
```

Der Command Block muss im Modus **Repeat** und **Always Active** laufen, damit der Befehl dauerhaft ausgeführt wird.

:::: info Hinweis
Beide Methoden sind nur Workarounds — der Nether selbst lässt sich auf Bedrock nicht vollständig deaktivieren, nur der Zugang dazu kann eingeschränkt werden.
::::
