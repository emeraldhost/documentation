---
slug: "instanzen-nutzen"
language: "de"
title: "So nutzt Du Instanzen auf Deinem Gameserver"
description: "Mehrere Spiel-Instanzen auf einem Gameserver anlegen, umbenennen und zwischen ihnen wechseln"
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
short_title: "Instanzen nutzen"
sort: 8
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/valheim/install-bepinex"]
---

Mit **Instanzen** legst Du mehrere Spiel-Instanzen auf einem Server an. So kannst Du zwischen verschiedenen Welten und Speicherständen wechseln, Instanzen umbenennen oder neu installieren, ohne dass dabei Daten verloren gehen.

Dabei musst Du nicht beim gleichen Spiel bleiben: Beim Anlegen kannst Du jedes Spiel auswählen, z.B. eine Instanz mit Valheim oder Valheim BepInEx auf einem Minecraft Server.

## Instanz-Plätze

Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Instanzen**. Auf der Seite **Spiel-Instanzen** siehst Du oben, wie viele Instanzen Du noch anlegen kannst, z.B. „nur noch 1 Instanz möglich“. Sind alle Plätze belegt, kannst Du sie über **Instanz-Plätze erweitern** aufstocken.

In der Tabelle siehst Du alle Instanzen mit **Name**, **Produkt**, **Größe**, **Status** (z.B. **Aktiv**) und dem Datum, an dem sie **Erstellt** wurden.

## Instanz erstellen

1. **Instanzen öffnen**\
   Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Instanzen**.

2. **Instanz erstellen**\
   Klicke auf **Instanz erstellen**.

3. **Spiel auswählen**\
   Suche im Schritt **Spiel auswählen** nach dem gewünschten Spiel oder grenze die Auswahl über den Filter **Alle Plattformen** ein. Wähle das Spiel aus und gehe zum nächsten Schritt.

4. **Instanz konfigurieren**\
   Gib im Schritt **Konfiguration** unter **Name** einen Namen für die Instanz ein. Lege anschließend mit den Schiebereglern **Arbeitsspeicher** und **Speicherplatz** fest, wie viele Ressourcen die Instanz bekommt. Unten siehst Du, ob sich Dein **Monatspreis** dadurch ändert. Gehe dann zum nächsten Schritt.

   > [!NOTE]
   > Welche Werte Du einstellen kannst, hängt vom Spiel ab. Bei Valheim sind es z.B. 3 bis 32 GB Arbeitsspeicher und 20 bis 200 GB Speicherplatz.

5. **Instanz anlegen**\
   Prüfe in der **Übersicht** Deine Auswahl und klicke auf **Erstellen**. Die Instanz wird danach automatisch eingerichtet, das kann einige Minuten dauern.

## Instanz wechseln

Welche Instanz aktiv ist, zeigt auf der Seite **Instanzen** die Spalte **Status** (**Aktiv**). Um eine andere Instanz zu nutzen, wechselst Du auf sie:

- Klicke in der Kopfzeile Deines Servers auf das Symbol **Instanz wechseln** oder
- öffne das Dropdown **Aktionen** und wähle **Instanz wechseln**.

Beides bringt Dich zur Seite **Instanzen**, auf der Du die gewünschte Instanz auswählst. Welche Instanz gerade aktiv ist, siehst Du in der **Übersicht** im Kasten **Aktuelle Instanz**. Über **Alle Instanzen anzeigen** gelangst Du direkt zur Seite **Instanzen**.

> [!TIP]
> Erstelle vor einem Wechsel ein Backup, damit Du im Zweifel auf einen früheren Stand zurückgreifen kannst. Wie das geht, erfährst Du unter [Backup erstellen](/tutorials/gameserver/create-backup).

## Instanz umbenennen

1. **Menü öffnen**\
   Klicke auf der Seite **Instanzen** in der Zeile der Instanz auf das Menü (**…**).

2. **Umbenennen**\
   Wähle **Umbenennen** und gib den neuen Namen ein.
