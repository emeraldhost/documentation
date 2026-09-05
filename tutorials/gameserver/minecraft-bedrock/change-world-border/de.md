---
slug: "welt-grenze-aendern"
language: "de"
title: "So änderst Du die Welt-Grenze auf einem Minecraft Bedrock Server"
description: "Welt-Grenze (Worldborder) auf einem Minecraft Bedrock Edition Server ändern"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Grenze ändern"
sort: 14
related: ["gameserver/minecraft-bedrock/change-tick-distance", "gameserver/minecraft-bedrock/change-view-distance", "gameserver/minecraft-bedrock/change-world-seed", "gameserver/minecraft-bedrock/create-backup"]
---

Anders als bei Minecraft Java Edition gibt es auf Bedrock Servern **keinen nativen `/worldborder`-Befehl**. Um eine Grenze umzusetzen, musst Du den Bewegungsspielraum der Spieler auf andere Weise einschränken.

## Möglichkeiten

### Command Block

Mit einem Command Block in einem geladenen Chunk kannst Du Spieler beim Überschreiten einer bestimmten Koordinate zurück zur Mitte teleportieren. Beispiel – alle Spieler weiter als 500 Blöcke von `0, 0` zurück zur Mitte holen:

```text
/execute as @a[rm=500] run tp @s 0 ~ 0
```

Der Command Block muss im Modus **Repeat** und **Always Active** laufen, damit der Befehl dauerhaft ausgeführt wird.

### Behavior Pack

Du kannst ein Behavior Pack erstellen oder installieren, das die gewünschte Grenze umsetzt – zum Beispiel mit Schaden außerhalb des Bereichs oder einem automatischen Teleport. Behavior Packs lädst Du wie [hier beschrieben](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs) auf Deinen Server hoch und aktivierst sie für die jeweilige Welt.

> [!NOTE]
> Beide Methoden sind nur Workarounds – eine echte Welt-Grenze mit Warnung, Schaden und Animation wie in Minecraft Java Edition lässt sich auf Bedrock nicht nativ umsetzen.
