---
slug: "tageszeit-aendern"
language: "de"
title: "So änderst Du Tageszeit und Datum auf einem The Bus Server"
description: "Tageszeit und Datum auf einem The Bus Server ändern oder die Echtzeit verwenden"
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
short_title: "Tageszeit ändern"
sort: 16
related: ["gameserver/the-bus/change-operating-plan", "gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-traffic", "gameserver/the-bus/change-weather"]
---

Du kannst die Tageszeit und das Datum auf Deinem Server per **Befehl** im Ingame-Chat ändern oder den Server die aktuelle Echtzeit verwenden lassen.

> [!NOTE]
> Diese Befehle erfordern Owner- oder Admin-Rechte. Wie Du einen Admin hinzufügst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin). Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## So änderst Du die Tageszeit

1. **Ingame-Chat öffnen**\
   [Verbinde Dich mit Deinem Server](/tutorials/gameserver/the-bus/join-server) und öffne den Ingame-Chat.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein und ersetze `<zeit>` durch die gewünschte Uhrzeit:

   ```text
   /time <zeit>
   ```

## So änderst Du das Datum

1. **Ingame-Chat öffnen**\
   [Verbinde Dich mit Deinem Server](/tutorials/gameserver/the-bus/join-server) und öffne den Ingame-Chat.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein und ersetze `<datum>` durch das gewünschte Datum:

   ```text
   /date <datum>
   ```

> [!TIP]
> In welchem Format `/time` und `/date` die Werte erwarten, ist nicht offiziell dokumentiert. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen.

## So verwendest Du die aktuelle Echtzeit

Seit Update 3.2 EA kann Dein Server die aktuelle Echtzeit verwenden. Diese Option aktivierst Du mit folgendem Befehl im Ingame-Chat:

```text
/useRealTime
```

> [!NOTE]
> Ob der Befehl einen zusätzlichen Wert erwartet, ist nicht offiziell dokumentiert. Ist die Echtzeit aktiv, können Werte, die Du per `/time` oder `/date` setzt, wieder durch die aktuelle Uhrzeit ersetzt werden.

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/time <zeit>` | Aktuelle Uhrzeit setzen |
| `/date <datum>` | Aktuelles Datum setzen |
| `/useRealTime` | Echtzeit aktivieren (UseRealTime) |

Wie Du das Wetter änderst, erfährst Du unter [Wetter ändern](/tutorials/gameserver/the-bus/change-weather).
