---
slug: "automatische-backups-aktivieren"
language: "de"
title: "So richtest Du automatische Backups auf Deinem Space Engineers Server ein"
description: "Automatische Backups auf einem Space Engineers Server einrichten"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Automatische Backups aktivieren"
sort: 2
related: ["gameserver/space-engineers/change-server-description", "gameserver/space-engineers/change-server-name", "gameserver/space-engineers/download-world", "gameserver/space-engineers/enable-experimental-mode"]
---

Dein Server speichert die Welt in regelmäßigen Abständen automatisch und legt dabei jedes Mal ein Backup an. So legst Du fest, wie oft das passiert.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Intervall festlegen**\
   Trage im Feld **Automatischer Backup Interval** das gewünschte Intervall in Minuten ein, in dem der Server die Welt speichert (Standard: `5`). Nach jedem erfolgreichen Speichern legt der Server ein Backup im Ordner `/config/Saves/World/Backup/` an.

4. **Server neu starten**\
   Speichere die Einstellungen und starte Deinen Server neu, damit die Änderungen übernommen werden.

> [!WARNING]
> Mit dem Wert `0` speichert der Server die Welt nicht mehr automatisch und legt damit auch keine automatischen Backups mehr an. Stürzt der Server ab, geht alles verloren, was seit dem letzten Speichern passiert ist.

> [!NOTE]
> Die Einstellung **Automatische Backup** schaltet das automatische Speichern **nicht** ab – auch mit `false` speichert der Server weiter im eingestellten Intervall. Sie setzt den Wert `EnableSaving`, den Keen als „Enable Saving from Menu“ bezeichnet. Er legt nur fest, ob man in einem selbst gehosteten Spiel über das Menü speichern kann. Lass die Einstellung auf dem Standardwert `true`.

Wie Du Deine Welt aus einem dieser Backups wiederherstellst und wie viele Backups Dein Server aufbewahrt, erfährst Du unter [Automatisches Backup wiederherstellen](/tutorials/gameserver/space-engineers/restore-automatic-backup).

> [!TIP]
> Ein manuelles Backup kannst Du jederzeit zusätzlich über die [Backup-Funktion](/tutorials/gameserver/create-backup) in der Verwaltung erstellen.
