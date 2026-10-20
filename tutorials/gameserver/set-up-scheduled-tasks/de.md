---
slug: "geplante-aufgaben-einrichten"
language: "de"
title: "So richtest Du geplante Aufgaben auf Deinem Gameserver ein"
description: "Automatische Backups, Neustarts und Konsolenbefehle auf einem Gameserver planen"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Geplante Aufgaben einrichten"
sort: 6
related: ["gameserver/create-backup", "gameserver/establish-sftp-connection", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

Seit EmeraldHost 2.0 kannst Du in der Verwaltung Deines Servers **geplante Aufgaben** anlegen. Damit erledigt Dein Server Dinge automatisch, z.B. regelmäßige Neustarts, Backups oder Konsolenbefehle. Du legst fest, wie oft und um welche Uhrzeit eine Aufgabe läuft, und kannst sie jederzeit pausieren, ändern oder manuell starten.

> [!NOTE]
> Pro Server kannst Du bis zu 20 geplante Aufgaben anlegen. Wie viele Du noch anlegen kannst, siehst Du oben auf der Seite **Geplante Aufgaben**.

## Verfügbare Aktionen

| Aktion | Beschreibung |
| ------ | ------------ |
| **Start** | Startet Deinen Server. |
| **Stopp** | Stoppt Deinen Server. |
| **Neustart** | Startet Deinen Server neu. |
| **Backup** | Erstellt ein Backup Deines Servers. |
| **Befehl senden** | Schickt einen Befehl an die Konsole, z.B. eine Nachricht an alle Spieler. |

## Geplante Aufgabe erstellen

1. **Geplante Aufgaben öffnen**\
   Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Geplante Aufgaben**.

2. **Zeitplan erstellen**\
   Klicke auf **Zeitplan erstellen**.

3. **Aktion wählen**\
   Wähle unter **Aktion**, was automatisch passieren soll. Der **Name** wird aus Aktion und Zeitplan vorgeschlagen, Du kannst ihn aber ändern.

   Bei **Befehl senden** trägst Du im Feld **Befehl** den Befehl so ein, wie Du ihn in der Konsole eingeben würdest – ohne `/` am Anfang.

4. **Nur wenn der Server läuft**\
   Ist die Option **Nur wenn der Server läuft** aktiv, wird die Aufgabe übersprungen, solange Dein Server ausgeschaltet ist. Klicke anschließend auf **Weiter**.

5. **Zeitplan festlegen**\
   Lege fest, wann und wie oft die Aufgabe laufen soll. Zur Auswahl stehen **Minuten**, **Stunden**, **Wöchentlich** und **Monatlich**. Je nach Auswahl gibst Du z.B. an, alle wie viele Stunden und zu welcher Minute die Aufgabe läuft oder um welche Uhrzeit, und an welchen Tagen (**Täglich**, **Werktags**, **Wochenende** oder einzelne Wochentage). Mit **Nur in einem Zeitfenster** beschränkst Du die Aufgabe auf einen bestimmten Zeitraum. Klicke anschließend auf **Weiter**.

   > [!NOTE]
   > Alle Uhrzeiten gelten in Deiner Zeitzone, z.B. Europe/Berlin.

6. **Zeitplan speichern**\
   Prüfe in der **Übersicht** die Aktion, den Zeitplan und die nächsten Läufe und klicke auf **Zeitplan speichern**. Die Aufgabe ist sofort nach dem Speichern aktiv.

> [!TIP]
> Unter **Vorlagen** findest Du vorgefertigte Aufgaben, z.B. **Täglicher Neustart um 4 Uhr**, **Tägliches Backup um 3 Uhr** oder **Backup alle 6 Stunden**. Damit legst Du häufige Aufgaben mit wenigen Klicks an.

## Automatische Backups

Für Backups gelten ein paar Besonderheiten:

- **Höchstens einmal pro Stunde:** Backups laufen maximal einmal pro Stunde.
- **Backup-Plätze:** Beim Anlegen siehst Du, wie viele Deiner Backup-Plätze bereits belegt sind.
- **Alte Backups automatisch löschen:** Ist diese Option aktiv und sind alle Plätze belegt, wird das älteste nicht gesperrte Backup gelöscht. Gesperrte Backups werden nie gelöscht.

> [!TIP]
> Sperre wichtige Backups, damit sie nicht automatisch gelöscht werden. Wie das geht, erfährst Du unter [Backup erstellen](/tutorials/gameserver/create-backup).

## Beispiel: Täglicher Neustart mit Vorwarnung

Mit zwei Aufgaben kündigst Du einen Neustart vorher im Spiel an:

1. **Warnung anlegen**\
   Lege eine Aufgabe mit der Aktion **Befehl senden** an, die täglich um 03:55 Uhr eine Nachricht an alle Spieler schickt. Welchen Befehl Du dafür brauchst, hängt vom Spiel ab, z.B. `say Der Server startet in 5 Minuten neu` bei Minecraft.

2. **Neustart anlegen**\
   Lege eine zweite Aufgabe mit der Aktion **Neustart** an, die täglich um 04:00 Uhr läuft.

## Aufgaben verwalten

Auf der Seite **Geplante Aufgaben** siehst Du alle angelegten Zeitpläne. Dort kannst Du jede Aufgabe pausieren, wieder aktivieren, ändern oder bei Bedarf manuell starten.
