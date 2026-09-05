---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Minecraft Java Edition Server"
description: "Spieler auf einem Minecraft Java Edition Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 19
related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/join-server", "gameserver/minecraft/upload-world", "gameserver/minecraft/use-tp-command"]
---

Du kannst als Operator Spieler per Befehl kicken oder dauerhaft bannen. Die Befehle funktionieren sowohl im Ingame-Chat als auch in der Serverkonsole (ohne `/`).

> [!NOTE]
> Du benötigst OP-Rechte, um diese Befehle nutzen zu können. Siehe [OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights).

## Spieler kicken

```text
/kick <Name> [Grund]
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
/ban <Name> [Grund]
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler per IP bannen

```text
/ban-ip <IP>
```

Die angegebene IP-Adresse wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```text
/pardon <Name>
```

Der Ban des Spielers wird aufgehoben.

## IP-Ban aufheben

```text
/pardon-ip <IP>
```

Der IP-Ban wird aufgehoben.

> [!TIP]
> In der Serverkonsole werden die Befehle ohne `/` eingegeben, z. B. `kick Spielername`.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name> [Grund]` | Spieler kicken |
| `/ban <Name> [Grund]` | Spieler bannen |
| `/ban-ip <IP>` | IP-Adresse bannen |
| `/pardon <Name>` | Spieler entbannen |
| `/pardon-ip <IP>` | IP-Ban aufheben |
