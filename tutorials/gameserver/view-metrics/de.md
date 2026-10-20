---
slug: "metriken-ansehen"
language: "de"
title: "So siehst Du die Metriken Deines Gameservers an"
description: "CPU, RAM, Speicherplatz, Spieler und Datenverkehr Deines Gameservers über Zeit auswerten"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Metriken ansehen"
sort: 10
related: ["gameserver/set-up-scheduled-tasks", "gameserver/create-backup", "gameserver/create-database", "gameserver/establish-sftp-connection"]
---

In der Verwaltung Deines Servers findest Du unter **Metriken** Diagramme zur Auslastung Deines Gameservers. Dort siehst Du, wie stark CPU, Arbeitsspeicher und Speicherplatz genutzt werden, wie viele Spieler online waren und wie viele Daten Dein Server empfängt und verschickt. So erkennst Du Engpässe und kannst entscheiden, ob Dein Server mehr Ressourcen braucht.

## Metriken öffnen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Metriken auswählen**\
   Klicke in der linken Seitenleiste auf **Metriken**. Beim Titel siehst Du, welcher Zeitraum gerade angezeigt wird, z.B. „Letzte 7 Tage“.

## Zeitraum und Werte wählen

Über die Schaltflächen **Stunde** bis **Jahr** legst Du fest, welchen Zeitraum die Diagramme zeigen:

| Schaltfläche | Zeitraum |
| ------------ | -------- |
| **Stunde** | Die letzte Stunde |
| **Tag** | Der letzte Tag |
| **Woche** | Die letzte Woche |
| **Monat** | Der letzte Monat |
| **Jahr** | Das letzte Jahr |

Mit den Schaltflächen **Ø**, **Max** und **Min** wählst Du, welcher Wert in den Diagrammen dargestellt wird:

- **Ø:** der Durchschnitt
- **Max:** der höchste Wert
- **Min:** der niedrigste Wert

> [!TIP]
> Der Durchschnitt zeigt Dir die normale Auslastung. Mit **Max** erkennst Du kurze Spitzen, die im Durchschnitt untergehen, z.B. wenn viele Spieler gleichzeitig online sind.

## Die Diagramme

Jedes Diagramm zeigt zusätzlich den Durchschnitt (Ø), das Minimum (Min) und das Maximum (Max) für den gewählten Zeitraum.

| Diagramm | Was es zeigt |
| -------- | ------------ |
| **Rechenleistung (CPU)** | Wie stark der Prozessor Deines Servers ausgelastet ist |
| **Arbeitsspeicher (RAM)** | Wie viel Arbeitsspeicher Dein Server belegt |
| **Speicherplatz** | Wie viel Speicherplatz Deine Serverdateien belegen |
| **Spieler online** | Wie viele Spieler auf Deinem Server waren |
| **Datenverkehr** | Wie viele Daten Dein Server empfängt und verschickt, in MiB/s |

> [!NOTE]
> Beim Diagramm **Rechenleistung (CPU)** siehst Du, in welcher Klasse Dein Server läuft, z.B. „Dein Server läuft in der Klasse Standard.“ Daneben findest Du den Link **Klassen vergleichen**.

## Metriken richtig deuten

Die Diagramme helfen Dir, Probleme einer Ursache zuzuordnen:

- **Arbeitsspeicher dauerhaft am Limit:** Laggt Dein Server oder stürzt er ab und liegt der RAM-Verbrauch dabei nahe am Maximum, braucht Dein Server vermutlich mehr Arbeitsspeicher.
- **Hohe CPU-Auslastung:** Ist die Rechenleistung häufig voll ausgelastet, z.B. wenn viele Spieler online sind, kann eine andere Klasse helfen.
- **Speicherplatz fast voll:** Wächst der belegte Speicherplatz stetig, lösche nicht mehr benötigte Dateien oder erweitere den Speicherplatz.
- **Spieler und Auslastung vergleichen:** Vergleiche das Diagramm **Spieler online** mit CPU und RAM. So siehst Du, ab wie vielen Spielern Dein Server an seine Grenzen kommt.

## Ressourcen anpassen

Zeigen die Metriken, dass Deinem Server Ressourcen fehlen, kannst Du sie direkt im Dashboard anpassen:

- **Mehr Arbeitsspeicher oder Speicherplatz:** Klicke in der Kopfzeile Deines Servers auf das Symbol **Ressourcen ändern** oder wähle unter **Aktionen** den Eintrag **Ressourcen ändern**. Alternativ findest Du in der **Übersicht** bei **Ressourcennutzung** den Link **Ressourcen ändern**.
- **Mehr Rechenleistung:** Reicht die Rechenleistung nicht aus, wähle unter **Aktionen** den Eintrag **Klasse wechseln**.

> [!TIP]
> Prüfe die Metriken nach einer Änderung über einige Tage erneut. So siehst Du, ob die neuen Ressourcen zu Deiner Spielerzahl passen.
