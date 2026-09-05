---
slug: "end-deaktivieren"
language: "de"
title: "So deaktivierst Du den End auf einem Minecraft Bedrock Server"
description: "End auf einem Minecraft Bedrock Edition Server deaktivieren"
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
short_title: "End deaktivieren"
sort: 4
related: ["gameserver/minecraft-bedrock/create-backup", "gameserver/minecraft-bedrock/delete-world", "gameserver/minecraft-bedrock/disable-locator-bar", "gameserver/minecraft-bedrock/disable-nether"]
---

Anders als bei Minecraft Java Edition gibt es auf Bedrock Servern **keine Einstellung in der `server.properties`**, um den End zu deaktivieren. Stattdessen musst Du den Zugang zur Dimension auf andere Weise blockieren.

## Möglichkeiten

### Behavior Pack

Du kannst ein Behavior Pack erstellen oder installieren, das das Aktivieren von End-Portalen blockiert oder deren Funktion deaktiviert. Behavior Packs lädst Du wie [hier beschrieben](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs) auf Deinen Server hoch und aktivierst sie für die jeweilige Welt.

### Command Block

Mit einem Command Block in einem geladenen Chunk kannst Du Spieler beim Betreten der End-Dimension automatisch in die Oberwelt zurück teleportieren. Beispiel:

```text
/execute as @a[m=!c] in minecraft:the_end run tp @s ~ ~ ~ minecraft:overworld
```

Der Command Block muss im Modus **Repeat** und **Always Active** laufen, damit der Befehl dauerhaft ausgeführt wird.

> [!NOTE]
> Beide Methoden sind nur Workarounds – der End selbst lässt sich auf Bedrock nicht vollständig deaktivieren, nur der Zugang dazu kann eingeschränkt werden.
