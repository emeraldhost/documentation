---
slug: "performance-klasse-wechseln"
language: "de"
title: "So wechselst Du die Performance-Klasse Deines Gameservers"
description: "Deinen Gameserver auf einen schnelleren Prozessor umstellen: Klassen im Vergleich, Ablauf und Voraussetzungen"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Performance-Klasse wechseln"
sort: 12
related: ["gameserver/view-metrics", "gameserver/renew-server", "gameserver/change-resources", "gameserver/set-up-scheduled-tasks"]
---

Die **Klasse** legt fest, auf welchem Prozessor Dein Server läuft. Braucht Dein Server mehr Tempo, hilft ein schnellerer Prozessor oft mehr als zusätzlicher RAM. Deine Ressourcen wie Arbeitsspeicher und Speicherplatz bleiben beim Klassenwechsel gleich.

## Die Klassen im Vergleich

| Klasse | Beschreibung | Prozessor | Takt | Speicher |
| ------ | ------------ | --------- | ---- | -------- |
| **Standard** | Solide Leistung für die meisten Server | AMD EPYC 7443 / 7543P | bis zu 4,0 GHz | NVMe SSD |
| **Performance** | Maximale Leistung für anspruchsvolle Server | AMD Ryzen 9 7950X3D / 9950X | bis zu 5,7 GHz | NVMe SSD |

In welcher Klasse Dein Server gerade läuft, siehst Du in der **Übersicht** unter **Klasse**, z.B. „Klasse: Standard“.

> [!TIP]
> Ob Dein Server wirklich mehr Rechenleistung braucht, erkennst Du an der CPU-Auslastung. Wie Du sie prüfst, erfährst Du unter [Metriken ansehen](/tutorials/gameserver/view-metrics).

## Klasse wechseln öffnen

Den Dialog **Klasse wechseln** erreichst Du in der Verwaltung Deines Servers auf mehreren Wegen:

- in der linken Seitenleiste über **Performance**
- über das Dropdown **Aktionen** → **Klasse wechseln**
- in der **Übersicht** über den Link **Mehr Leistung?** neben Deiner aktuellen Klasse
- im Dialog **Ressourcen ändern** über den Button **Zur Performance-Klasse**
- auf der Seite **Metriken** über den Link **Klassen vergleichen**

## Performance-Klasse wechseln

1. **Klasse wählen**\
   Öffne den Dialog **Klasse wechseln**. Im Schritt **Klasse wählen** wählst Du, wie schnell der Prozessor sein soll, auf dem Dein Server läuft. Deine aktuelle Klasse ist mit **Aktuell** markiert, die Klasse **Performance** mit **Empfohlen**. Du siehst dabei die Angaben **Aktueller Monatspreis** und **Neuer Monatspreis**.

2. **Bezahlung**\
   Im Schritt **Bezahlung** bezahlst Du den Betrag, der unten unter **Zu zahlen** steht. Das ist ein anteiliger Betrag, nicht der volle Monatspreis.

3. **Übersicht**\
   Im Schritt **Übersicht** siehst Du die Zusammenfassung Deines Wechsels.

> [!NOTE]
> Die Preise hängen von Deinem Server ab. Den genauen Betrag siehst Du direkt im Dialog, bevor Du bezahlst.

## Mindestlaufzeit von 14 Tagen

Für einen schnelleren Prozessor braucht Dein Server noch mindestens 14 Tage Laufzeit. Ist die Restlaufzeit kürzer, zeigt der Dialog den Hinweis **Bitte erst verlängern** zusammen mit der aktuellen Restlaufzeit an, z.B. „Aktuell hat er noch 4 Tage 1 Std. Laufzeit.“

1. **Server verlängern**\
   Klicke im Hinweis auf **Server verlängern** und verlängere Deinen Server, z.B. um 30 Tage. Längere Laufzeiten wie 90, 180, 365 oder 730 Tage sind günstiger (bis zu -20 %). Mehr dazu erfährst Du unter [Server verlängern](/tutorials/gameserver/renew-server).

2. **Klasse wechseln**\
   Öffne danach erneut **Klasse wechseln** und führe den Wechsel wie oben beschrieben durch.

> [!IMPORTANT]
> Der Klassenwechsel ändert nur den Prozessor. Brauchst Du mehr Arbeitsspeicher oder Speicherplatz, passt Du diese über **Ressourcen ändern** an. Wie das geht, erfährst Du unter [Ressourcen ändern](/tutorials/gameserver/change-resources).
