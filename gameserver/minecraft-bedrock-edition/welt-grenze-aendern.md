---
description: Welt-Grenze (Worldborder) auf einem Minecraft Bedrock Edition Server ändern
---

# So änderst du die Welt-Grenze auf einem Minecraft Bedrock Server

Anders als bei Java Edition gibt es auf Bedrock Servern **keinen nativen `/worldborder`-Befehl**. Um eine Grenze umzusetzen, musst du den Bewegungsspielraum der Spieler auf andere Weise einschränken.

## Möglichkeiten

### Command Block
Mit einem Command Block in einem geladenen Chunk kannst du Spieler beim Überschreiten einer bestimmten Koordinate zurück zur Mitte teleportieren. Beispiel — alle Spieler weiter als 500 Blöcke von `0, 0` zurück zur Mitte holen:

```
/execute as @a[rm=500] run tp @s 0 ~ 0
```

Der Command Block muss im Modus **Repeat** und **Always Active** laufen, damit der Befehl dauerhaft ausgeführt wird.

### Behavior Pack
Du kannst ein Behavior Pack erstellen oder installieren, das die gewünschte Grenze umsetzt — zum Beispiel mit Schaden außerhalb des Bereichs oder einem automatischen Teleport. Behavior Packs lädst du wie [hier beschrieben](behavior-und-resource-packs-hinzufuegen.md) auf deinen Server hoch und aktivierst sie für die jeweilige Welt.

:::: info Hinweis
Beide Methoden sind nur Workarounds — eine echte Welt-Grenze mit Warnung, Schaden und Animation wie in Java Edition lässt sich auf Bedrock nicht nativ umsetzen.
::::
