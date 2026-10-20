---
slug: "version-aendern"
language: "de"
title: "So änderst Du die Version auf einem Minecraft Java Edition Server"
description: "Minecraft-Version, Server-Plattform und Build eines Minecraft Java Edition Servers im EmeraldHost-Dashboard ändern"
tags: []
date: "2023-10-16"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Version ändern"
sort: 20
related: ["gameserver/minecraft/create-backup", "gameserver/minecraft/install-plugins", "gameserver/minecraft/install-mods", "gameserver/minecraft/fix-server-crashes"]
---

In Minecraft bezieht sich eine „Version“ auf eine bestimmte Ausgabe des Spiels, z.B. `1.21.1`. Jede Version bringt Änderungen am Gameplay, an den Spielmechaniken und an den Funktionen mit sich. Damit sich Spieler mit Deinem Server verbinden können, muss ihre Spielversion zur Version des Servers passen.

Im EmeraldHost-Dashboard änderst Du die Version über den Assistenten **Version ändern**. Dort wählst Du nicht nur die Minecraft-Version, sondern auch die Server-Plattform (z.B. Paper, Fabric oder NeoForge) und den Build.

> [!WARNING]
> Ein Versionswechsel erfordert einen Neustart des Servers. Je nach gewählter Option werden dabei alle vorhandenen Dateien gelöscht. Erstelle vorher unbedingt ein Backup (siehe [Backup erstellen](/tutorials/gameserver/create-backup)).

## Assistenten öffnen

Den Assistenten **Version ändern** erreichst Du in der Verwaltung Deines Servers auf drei Wegen:

- über das Symbol **Version ändern** in der Kopfzeile
- über das Dropdown **Aktionen** → **Version ändern**
- in der **Übersicht** im Kasten **Server Informationen** über das Stift-Symbol neben **Version**

## Version ändern

1. **Server Plattform wählen**\
   Wähle im ersten Schritt **Server Plattform** die Serversoftware aus, z.B. **Vanilla**, **Paper**, **Purpur**, **Spigot**, **Fabric**, **Forge**, **NeoForge**, **Quilt**, **Velocity** oder **BungeeCord**. Einige Plattformen wie **Waterfall** und **Quilt** sind mit einem Warnsymbol gekennzeichnet.

   > [!NOTE]
   > Plugins laufen nur auf Plugin-Plattformen wie Paper, Purpur oder Spigot, Mods nur auf Mod-Loadern wie Fabric, Forge oder NeoForge. Wenn Du die Plattform wechselst, funktionieren Deine bisherigen Plugins oder Mods unter Umständen nicht mehr.

2. **Release-Kanal wählen**\
   Wähle im Schritt **Release-Kanal** zwischen **Stable** (empfohlen) und **Snapshot** (experimentell). Für einen normalen Server ist **Stable** die richtige Wahl. Snapshots sind Testversionen und können Fehler enthalten.

3. **Minecraft Version wählen**\
   Wähle im Schritt **Minecraft Version** die gewünschte Version aus dem Dropdown.

4. **Build wählen**\
   Wähle im Schritt **Build** den Build der Serversoftware. Standardmäßig ist **Latest (Recommended)** ausgewählt. Diese Auswahl kannst Du in der Regel beibehalten.

5. **Überprüfen und Option wählen**\
   Im Schritt **Überprüfung** siehst Du eine Zusammenfassung Deiner Auswahl. Unter **Reinstallations-Optionen** entscheidest Du, was mit Deinen Daten passiert:

   - **Nur Version ändern**: Die Version wird geändert, ohne Daten zu löschen. Der Server startet danach schnell neu.
   - **Version ändern + Datenlöschung**: Alle vorhandenen Dateien werden gelöscht und der Server wird komplett neu installiert.

   > [!IMPORTANT]
   > Mit **Version ändern + Datenlöschung** verlierst Du alle Dateien auf dem Server, auch Deine Welten, Plugins, Mods und Konfigurationen. Sichere vorher alles, was Du behalten möchtest.

6. **Änderungen anwenden**\
   Klicke auf **Änderungen anwenden**. Wie im Assistenten angezeigt, ist dafür ein Neustart des Servers erforderlich.

> [!TIP]
> Der Assistent zeigt Dir den Hinweis **Backup empfohlen**. Ein Backup ist besonders wichtig, wenn Du auf eine ältere Version zurückwechselst: Welten, die bereits mit einer neueren Version geladen wurden, lassen sich mit einer älteren Version oft nicht mehr fehlerfrei öffnen.

## Java-Version

Jede Minecraft-Version benötigt eine passende Java-Version. Welche Java-Version Dein Server verwendet, siehst Du im **Config-Editor** unter **Java-Version**.

| Minecraft Version        | Benötigte Java-Version |
| ------------------------ | ---------------------- |
| 1.20.5 und höher         | Java 21 oder höher     |
| 1.18 bis 1.20.4          | Java 17 oder höher     |
| 1.17.x                   | Java 16 oder höher     |
| 1.13 bis 1.16.5          | Java 8 oder höher      |
| 1.12.x und älter         | Java 8                 |

> [!NOTE]
> Neuere Minecraft-Versionen können eine noch neuere Java-Version voraussetzen. Startet Dein Server nach dem Versionswechsel nicht, prüfe in der **Konsole**, ob eine falsche Java-Version gemeldet wird.
