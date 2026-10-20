---
slug: "ressourcen-aendern"
language: "de"
title: "So änderst Du die Ressourcen Deines Gameservers"
description: "Arbeitsspeicher und Speicherplatz anpassen, Backup-, Datenbank- und Instanz-Plätze erweitern und CPU-Kerne auf einem Gameserver hinzubuchen"
tags: []
date: "2026-10-20"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Ressourcen ändern"
sort: 11
related: ["gameserver/change-performance-class", "gameserver/view-metrics", "gameserver/create-backup", "gameserver/use-instances"]
---

Wird es auf Deinem Server eng, kannst Du seine Ressourcen direkt im Dashboard anpassen. Über **Ressourcen ändern** stellst Du Arbeitsspeicher und Speicherplatz ein und erweiterst die Plätze für Backups, Datenbanken und Instanzen. Zusätzliche CPU-Kerne buchst Du als Addon über **Addons verwalten** dazu.

> [!TIP]
> Ob Deinem Server wirklich Ressourcen fehlen, siehst Du in den Metriken. Wie Du sie auswertest, erfährst Du unter [Metriken ansehen](/tutorials/gameserver/view-metrics).

## Ressourcen ändern öffnen

Den Dialog **Ressourcen ändern** erreichst Du auf mehreren Wegen:

- Klicke in der Kopfzeile Deines Servers auf das Symbol **Ressourcen ändern**.
- Öffne das Dropdown **Aktionen** und wähle **Ressourcen ändern**.
- Klicke in der **Übersicht** in der Box **Ressourcennutzung** auf den Link **Ressourcen ändern**.

## Arbeitsspeicher und Speicherplatz anpassen

1. **Dialog öffnen**\
   Öffne den Dialog **Ressourcen ändern** über einen der oben genannten Wege. Du landest im Schritt **Konfiguration**.

2. **Arbeitsspeicher einstellen**\
   Lege mit dem Regler **Arbeitsspeicher** fest, wie viel RAM Dein Server bekommen soll.

3. **Speicherplatz einstellen**\
   Lege mit dem Regler **Speicherplatz** fest, wie viel Speicherplatz Dein Server haben soll.

   > [!NOTE]
   > Welche Werte Du einstellen kannst, hängt vom Spiel ab. Bei Minecraft sind es z.B. 2 bis 32 GB Arbeitsspeicher und 20 bis 200 GB Speicherplatz.

4. **Preis prüfen**\
   Unten im Dialog siehst Du, wie sich Deine Auswahl auf den Preis auswirkt, und unter **Monatlicher Preis** den neuen Monatspreis. Hast Du nichts verändert, steht dort „Keine Änderung“.

5. **Änderung bestätigen**\
   Wechsle zum Schritt **Übersicht**, prüfe Deine Auswahl dort und bestätige die Änderung.

> [!TIP]
> Im Dialog weist Dich ein Hinweis darauf hin, dass ein schnellerer Prozessor oft mehr hilft als zusätzlicher RAM. Über den Button **Zur Performance-Klasse** wechselst Du direkt dorthin – Deine Ressourcen bleiben dabei gleich. Mehr dazu erfährst Du unter [Performance-Klasse wechseln](/tutorials/gameserver/change-performance-class).

## Backup-, Datenbank- und Instanz-Plätze erweitern

Reichen Dir die Plätze für Backups, Datenbanken oder Instanzen nicht aus, erweiterst Du sie über denselben Dialog:

| Seite | Anzeige oben auf der Seite | Button |
| ----- | -------------------------- | ------ |
| **Backups** | z.B. „noch 5 von 5 Backups möglich“ | **Backup-Plätze erweitern** |
| **Datenbanken** | z.B. „noch 3 von 3 Datenbanken möglich“ | **Datenbank-Plätze erweitern** |
| **Instanzen** | z.B. „nur noch 1 Instanz möglich“ | **Instanz-Plätze erweitern** |

1. **Seite öffnen**\
   Öffne in der linken Seitenleiste die Seite **Backups**, **Datenbanken** oder **Instanzen**.

2. **Plätze erweitern**\
   Klicke oben auf der Seite auf den passenden Button, z.B. **Datenbank-Plätze erweitern**. Es öffnet sich der Dialog **Ressourcen ändern** im Schritt **Konfiguration** mit dem Regler für die jeweiligen Plätze.

3. **Anzahl wählen**\
   Stelle mit dem Regler ein, wie viele Plätze Du haben möchtest. Bei Datenbanken stellst Du die Anzahl mit dem Regler **Datenbanken** ein – 3 sind inklusive, die Stufen 4, 5, 10, 15 und 20 sind kostenpflichtig.

4. **Preis prüfen und bestätigen**\
   Prüfe unten im Dialog die Preisänderung und den Wert bei **Monatlicher Preis**, wechsle zum Schritt **Übersicht** und bestätige die Änderung.

> [!TIP]
> Wie Du Backups anlegst und verwaltest, erfährst Du unter [Backup erstellen](/tutorials/gameserver/create-backup). Alles zu Datenbanken findest Du unter [Datenbank erstellen](/tutorials/gameserver/create-database) und zu Instanzen unter [Instanzen nutzen](/tutorials/gameserver/use-instances).

## Zusätzliche CPU-Kerne buchen

Zusätzliche CPU-Kerne sind nicht Teil von **Ressourcen ändern**, sondern ein Addon:

1. **Addons verwalten öffnen**\
   Öffne das Dropdown **Aktionen** und wähle **Addons verwalten**. Du landest im Schritt **Addons auswählen**.

2. **CPU-Kerne wählen**\
   Wähle beim Addon **Zusätzliche CPU-Leistung** mit **–** und **+** aus, wie viele zusätzliche Kerne Du möchtest, z.B. **+1 Kern** oder **+2 Kerne**. Solange Du keinen Kern gewählt hast, steht dort „Nichts ausgewählt“. Der Aufpreis wird Dir direkt angezeigt.

3. **Preis prüfen**\
   Unten im Dialog siehst Du unter **Zu zahlen** den anteiligen Betrag für die restliche Laufzeit und den neuen **Monatspreis**. Klicke anschließend auf **Weiter**.

4. **Zusammenfassung prüfen**\
   Prüfe im Schritt **Zusammenfassung** Deine Auswahl und schließe die Buchung ab.
