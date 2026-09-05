---
slug: "broadcast-nachricht-senden"
language: "de"
title: "So sendest Du eine Broadcast Nachricht auf Deinem Palworld Server"
description: "Broadcast Nachricht an alle Spieler auf einem Palworld Server senden"
tags: []
date: "2026-03-05"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Broadcast Nachricht senden"
sort: 6
related: ["gameserver/palworld/add-admin", "gameserver/palworld/adjust-hunger-stamina", "gameserver/palworld/change-day-night-speed", "gameserver/palworld/change-drop-rate"]
---

Mit dem `/Broadcast`-Befehl kannst Du eine Nachricht an alle Spieler auf dem Server senden.

> [!NOTE]
> Du benötigst Admin-Rechte, um diesen Befehl nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/palworld/add-admin).

## Broadcast senden

1. **Chat öffnen**\
   Drücke `Enter`, um den Chat zu öffnen.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein:

   ```text
   /Broadcast <Nachricht>
   ```

   Ersetze `<Nachricht>` durch den gewünschten Text.

> [!WARNING]
> Die Nachricht wird beim ersten **Leerzeichen** abgeschnitten – von `Server wird neugestartet` käme nur `Server` an. Verwende stattdessen Unterstriche.

> [!TIP]
> **Beispiel**
>
> ```text
> /Broadcast Server_Neustart_in_10_Minuten!
> ```
