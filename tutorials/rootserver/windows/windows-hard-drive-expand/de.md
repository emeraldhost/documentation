---
slug: "windows-hard-drive-expand"
language: "de"
title: "So erweiterst Du die C:-Festplatte auf Deinem Windows Server"
description: "C:-Festplatte auf einem Windows Server erweitern"
tags: []
date: "2025-05-19"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Windows Festplatte erweitern"
sort: 2
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/open-windows-firewall-ports"]
---

Bei der Bereitstellung eines Windows Servers kann es vorkommen, dass der gesamte verfügbare Speicherplatz nicht automatisch der `C:`-Partition zugewiesen wird. Diese Anleitung beschreibt, wie Du den nicht zugewiesenen Speicherplatz mit einem bereitgestellten Skript automatisch Deiner `C:`-Festplatte hinzufügen kannst.

## Voraussetzungen

- Ein **Windows Server**, auf dem das Skript ausgeführt wird.
- **Administratorrechte** auf dem Server.

> [!CAUTION]
> **Das Skript löscht Partition 3 auf Datenträger 0**
>
> Das Skript gibt `diskpart` eine feste Anweisung: Es wählt Partition 3 auf Datenträger 0 aus und löscht sie erzwungen, ohne zu prüfen, was darauf liegt. Anschließend erweitert es die `C:`-Partition auf den frei gewordenen Speicherplatz. Im Standard-Image ist das die Windows-Wiederherstellungspartition, bei einer abweichenden Aufteilung kann es aber eine eigene Partition sein. Öffne vorher `diskpart`, führe `list disk` und `list partition` aus und stelle sicher, dass Partition 3 wirklich die Wiederherstellungspartition ist. Dieser Schritt lässt sich **nicht rückgängig machen**, lege also vorher einen Snapshot oder ein Backup Deines Servers an.

## Schritte

1. **Skript herunterladen**\
   Lade das folgende Skript **direkt** auf Deinen Windows Server herunter:

      ```text
      https://cdn.emeraldhost.de/products/rootserver/windows-patch/extend-disk/remove_recovery_and_extend.bat
      ```

2. **Skript ausführen**
   1. Navigiere zum Speicherort der heruntergeladenen Datei.
   2. Klicke mit der rechten Maustaste auf die Datei `remove_recovery_and_extend.bat`.
   3. Wähle **Als Administrator ausführen**.

3. **Automatische Erweiterung**\
   Nach der Ausführung des Skripts wird der ungenutzte Speicherplatz automatisch der `C:`-Partition hinzugefügt. Dies geschieht ohne manuelles Eingreifen.

4. **Fehlerbehebung**\
   Sollte das Skript nicht korrekt ausgeführt werden oder die Partitionserweiterung fehlschlagen:
     - Stelle sicher, dass Du über **Administratorrechte** verfügst.
     - Starte den Server nach der Skriptausführung neu und überprüfe den Speicherplatz erneut.
     - Falls weiterhin Probleme auftreten, kontaktiere gerne unseren [Support](https://emeraldhost.de/de/support).

Das war's! Mit diesen Schritten solltest Du in der Lage sein, die `C:`-Festplatte Deines Windows Servers automatisch zu erweitern.
