---
slug: "verkehr-einstellen"
language: "de"
title: "So stellst Du den Verkehr auf einem The Bus Server ein"
description: "Verkehrsdichte auf einem The Bus Server per Befehl einstellen"
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
short_title: "Verkehr einstellen"
sort: 19
related: ["gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-time", "gameserver/the-bus/change-weather", "gameserver/the-bus/configure-server"]
---

Du kannst die Verkehrsdichte auf Deinem Server per Befehl im Ingame-Chat anpassen. Der Befehl wurde mit Update 3.2 eingeführt.

> [!NOTE]
> Dieser Befehl erfordert Owner- oder Admin-Rechte. Wie Du einen Admin hinzufügst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin). Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So änderst Du die Verkehrsdichte

1. **Ingame-Chat öffnen**\
   [Verbinde Dich mit Deinem Server](/tutorials/gameserver/the-bus/join-server) und öffne den Ingame-Chat.

2. **Verkehrsdichte setzen**\
   Gib folgenden Befehl ein und ersetze `<wert>` durch die gewünschte Verkehrsdichte:

   ```text
   /traffic <wert>
   ```

   > [!TIP]
   > Welche Werte `/traffic` genau erwartet, ist nicht offiziell dokumentiert. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

> [!TIP]
> Weniger Verkehr entlastet Deinen Server. Läuft er nicht wie erwartet, findest Du Lösungsansätze unter [Server-Probleme beheben](/tutorials/gameserver/the-bus/troubleshoot-server).
