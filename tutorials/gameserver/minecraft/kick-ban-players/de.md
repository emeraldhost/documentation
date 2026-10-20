---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Minecraft Java Edition Server"
description: "Spieler auf einem Minecraft Java Edition Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 19
related: ["gameserver/minecraft/manage-players", "gameserver/minecraft/grant-op-rights", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/use-tp-command"]
---

Du kannst Spieler direkt im Dashboard kicken oder bannen. Alternativ geht das als Operator auch per Befehl im Ingame-Chat oder in der Serverkonsole (ohne `/`).

## Spieler im Dashboard kicken und bannen (empfohlen)

Auf der Seite **Spieler** in der Verwaltung Deines Servers kickst und bannst Du Spieler ohne Befehle. Jede Änderung wird sofort als Befehl an die Konsole geschickt.

1. **Spieler-Seite öffnen**\
   Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Spieler**.

2. **Spieler kicken oder bannen**\
   Öffne in der Spielerliste das Menü **…** am Ende der Zeile und wähle **Kicken** oder **Bannen**. Alternativ findest Du beide Buttons oben auf der Detailseite des Spielers.

3. **Spieler vorab bannen (optional)**\
   Auch Spieler, die noch nie auf Deinem Server waren, kannst Du bannen: Klicke auf **Spieler hinzufügen**, gib den **Minecraft-Name** ein, wähle unter **Wohin?** die Option **Bannen** und gib bei Bedarf im Feld **Grund (Optional)** einen Grund mit höchstens 120 Zeichen an. Diesen sieht der Spieler, wenn er beitreten will. Klicke anschließend auf **Bannen**.

Gebannte Spieler kommen nicht mehr auf den Server, auch nicht über die Allowlist. Im Tab **Gebannt** siehst Du alle gebannten Spieler. Mehr zur Seite findest Du unter [Spieler verwalten](/tutorials/gameserver/minecraft/manage-players).

## Spieler per Befehl kicken und bannen

> [!NOTE]
> Du benötigst OP-Rechte, um diese Befehle nutzen zu können. Siehe [OP-Rechte vergeben](/tutorials/gameserver/minecraft/grant-op-rights).

### Spieler kicken

```text
/kick <Name> [Grund]
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

### Spieler bannen

```text
/ban <Name> [Grund]
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

### Spieler per IP bannen

```text
/ban-ip <IP>
```

Die angegebene IP-Adresse wird dauerhaft vom Server ausgeschlossen.

### Spieler entbannen

```text
/pardon <Name>
```

Der Ban des Spielers wird aufgehoben.

### IP-Ban aufheben

```text
/pardon-ip <IP>
```

Der IP-Ban wird aufgehoben.

> [!TIP]
> In der Serverkonsole werden die Befehle ohne `/` eingegeben, z. B. `kick Spielername`.

### Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name> [Grund]` | Spieler kicken |
| `/ban <Name> [Grund]` | Spieler bannen |
| `/ban-ip <IP>` | IP-Adresse bannen |
| `/pardon <Name>` | Spieler entbannen |
| `/pardon-ip <IP>` | IP-Ban aufheben |
