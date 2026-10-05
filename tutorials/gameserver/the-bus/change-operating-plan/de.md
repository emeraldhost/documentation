---
slug: "fahrplan-aendern"
language: "de"
title: "So änderst Du den Fahrplan auf einem The Bus Server"
description: "Fahrplan auf einem The Bus Server ändern"
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
short_title: "Fahrplan ändern"
sort: 6
related: ["gameserver/the-bus/change-fleet", "gameserver/the-bus/change-map", "gameserver/the-bus/change-ticket-chance", "gameserver/the-bus/change-time"]
---

Den Fahrplan, im Spiel Betriebsplan (Operating Plan) genannt, änderst Du im Spiel über das **Admin-Menü** oder per **Befehl** im Ingame-Chat.

> [!NOTE]
> Karte und Betriebsplan stellst Du getrennt ein. Wenn Du die Karte änderst, z.B. auf Hamburg, wähle danach einen Betriebsplan, der zur neuen Karte passt. Wie Du die Karte wechselst, erfährst Du in der Anleitung [Map ändern](/tutorials/gameserver/the-bus/change-map).

## Fahrplan über das Admin-Menü ändern

1. **Admin-Menü öffnen**\
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**. Du benötigst Owner- oder Admin-Rechte oder das Admin-Passwort, siehe [Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin).

2. **Betriebsplan auswählen**\
   Wähle im Admin-Menü den gewünschten Betriebsplan aus den verfügbaren Optionen aus.

## Fahrplan per Befehl ändern

Alternativ setzt Du den Betriebsplan im Ingame-Chat. Dafür benötigst Du Owner- oder Admin-Rechte. Gib folgenden Befehl ein und ersetze `<plan>` durch den gewünschten Betriebsplan:

```text
/operatingPlan <plan>
```

> [!TIP]
> Die genaue Angabe für `<plan>` ist nicht offiziell dokumentiert. Mit `/commands` lässt Du Dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.

## Eigene Fahrpläne verwenden

Eigene Fahrpläne oder Fahrpläne aus dem Steam Workshop lädst Du wie andere Mods in den Ordner `/TheBus/Mods/` hoch. Wie das genau funktioniert, erfährst Du in der Anleitung [Mods hinzufügen](/tutorials/gameserver/the-bus/add-mods).

> [!WARNING]
> Ist eine Mod als „Client and Server“ markiert, muss sie auch bei jedem Spieler installiert sein, sonst kann er sich nicht mit Deinem Server verbinden.
