---
slug: "welt-grenze-aendern"
language: "de"
title: "So änderst Du die Welt-Grenze auf einem Minecraft Java Edition Server"
description: "Welt-Grenze (Worldborder) auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2026-05-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Grenze ändern"
sort: 23
related: ["gameserver/minecraft/change-version", "gameserver/minecraft/change-view-distance", "gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup"]
---

Die Welt-Grenze (Worldborder) ist eine unsichtbare, quadratische Grenze um den Mittelpunkt Deiner Welt. Spieler können nicht über sie hinausgehen, und Chunks außerhalb werden nicht mehr generiert. Standardmäßig beträgt die Grenze 60.000.000 Blöcke.

> [!NOTE]
> Der `/worldborder`-Befehl ist ein **Vanilla-Befehl** und funktioniert auf allen Java-Server-Varianten – Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric und NeoForge.

## Voraussetzung

Du benötigst OP-Rechte (mindestens Level 2), um den `/worldborder`-Befehl auszuführen. Siehe [OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights).

## Welt-Grenze setzen

Den Befehl kannst Du entweder direkt im Spiel-Chat oder über die Server-Konsole in der Verwaltung ausführen.

### Größe festlegen

```text
/worldborder set <Durchmesser>
```

Der Wert ist der **Durchmesser** in Blöcken, ausgehend vom Mittelpunkt. Beispiel – Grenze auf 1000 Blöcke setzen (500 Blöcke in jede Richtung):

```text
/worldborder set 1000
```

### Größe über Zeit ändern

Du kannst die Grenze auch über eine bestimmte Zeit (in Sekunden) animiert anpassen:

```text
/worldborder set 1000 60
```

Im Beispiel schrumpft oder wächst die Grenze über 60 Sekunden auf 1000 Blöcke.

### Mittelpunkt ändern

```text
/worldborder center <X> <Z>
```

Beispiel – Mittelpunkt auf Koordinaten `100, -200` setzen:

```text
/worldborder center 100 -200
```

## Weitere Optionen

| Befehl | Beschreibung |
|--------|--------------|
| `/worldborder get` | Zeigt die aktuelle Größe an |
| `/worldborder add <Blöcke> [Zeit]` | Vergrößert oder verkleinert die Grenze relativ |
| `/worldborder warning distance <Blöcke>` | Abstand zur Grenze, ab dem die Warnung angezeigt wird (Standard: 5) |
| `/worldborder warning time <Sekunden>` | Vorwarnzeit bei schrumpfender Grenze (Standard: 15) |
| `/worldborder damage amount <Wert>` | Schaden pro Block außerhalb der Grenze (Standard: 0.2) |
| `/worldborder damage buffer <Blöcke>` | Puffer außerhalb der Grenze, in dem kein Schaden entsteht (Standard: 5) |

## Wertebereich

- **Minimum:** `1` Block
- **Maximum:** `59.999.968` Blöcke

> [!TIP]
> Die Welt-Grenze wird automatisch gespeichert und bleibt auch nach einem Server-Neustart erhalten. Sie wird pro Welt gesetzt – in Paper/Spigot-Mehrwelt-Setups hat jede Welt ihre eigene Grenze.
