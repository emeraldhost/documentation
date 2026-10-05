---
slug: "teleportieren"
language: "de"
title: "So teleportierst Du Spieler auf einem The Bus Server"
description: "Spieler auf einem The Bus Server per Befehl teleportieren"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Teleportieren"
sort: 17
related: ["gameserver/the-bus/join-server", "gameserver/the-bus/kick-ban-players", "gameserver/the-bus/send-chat-messages", "gameserver/the-bus/spawn-bus"]
---

Du kannst Spieler auf Deinem Server per **Befehl** im Ingame-Chat zu bestimmten Koordinaten teleportieren.

> [!NOTE]
> Diese Befehle erfordern Owner- oder Admin-Rechte – siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin). Gib sie im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So teleportierst Du einen Spieler

1. **Ingame-Chat öffnen**\
   [Verbinde Dich mit Deinem Server](/tutorials/gameserver/the-bus/join-server) und öffne den Ingame-Chat.

2. **Spielernamen ermitteln**\
   Mit folgendem Befehl zeigst Du alle Spieler auf dem Server an:

   ```text
   /list
   ```

3. **Spieler teleportieren**\
   Gib folgenden Befehl ein und ersetze `<spieler>` durch den Namen des Spielers sowie `<x>`, `<y>` und `<z>` durch die Zielkoordinaten:

   ```text
   /tp <spieler> <x> <y> <z>
   ```

## So teleportierst Du einen Spieler richtungsbezogen

Mit `/tpd` teleportierst Du einen Spieler richtungsbezogen (in der Befehlsliste des Servers „teleport player directional“):

```text
/tpd <spieler> <x> <y> <z>
```

> [!TIP]
> Wie der Server die Werte bei `/tpd` genau auswertet, ist nicht offiziell dokumentiert. Probiere den Befehl zuerst mit kleinen Werten aus. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/tp <spieler> <x> <y> <z>` | Spieler zu den Koordinaten teleportieren |
| `/tpd <spieler> <x> <y> <z>` | Spieler richtungsbezogen teleportieren |

Weitere Befehle findest Du unter [Server konfigurieren](/tutorials/gameserver/the-bus/configure-server).
