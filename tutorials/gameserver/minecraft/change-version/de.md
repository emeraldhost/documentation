---
slug: "version-aendern"
language: "de"
title: "So änderst Du die Version auf einem Minecraft Java Edition Server"
description: "Version auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2023-10-16"
visibility: "public"
is_deprecated: true
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Version ändern"
sort: 20
related: ["gameserver/minecraft/change-spawn-protection", "gameserver/minecraft/change-difficulty", "gameserver/minecraft/change-view-distance", "gameserver/minecraft/change-world-border"]
---

## Version

In Minecraft bezieht sich eine „Version“ auf eine bestimmte Variante oder Ausgabe des Spiels. Minecraft hat im Laufe der Jahre verschiedene Versionen veröffentlicht, die sowohl Änderungen am Gameplay als auch an den Spielmechaniken, Grafiken und Funktionen mit sich bringen.

## Version bei einem Minecraft Server ändern

1. **Serververwaltung öffnen**\
    Um ein Version auszuwählen, besuche bitte die Verwaltungsseite Deines Minecraft-Servers auf EmeraldHost.

2. **Finde die Server-Einstellungen**\
    Navigiere in der rechten Seitenleiste zum Reiter „Einstellungen“ und wähle diesen aus.

    ![Serververwaltung mit dem markierten Eintrag „Einstellungen“ in der Seitenleiste](images/settings-tab-in-sidebar.png)

3. **Neue Version auswählen**\
    ![Servereinstellungen mit den hervorgehobenen Feldern „Docker Image“ und „Minecraft Version“](images/docker-image-and-minecraft-version-fields.png)

    Unter der Eingabe „Minecraft Version“ kannst Du nun die gewünschte Minecraft-Version eingeben. Die Version sollte der offiziellen Minecraft-Versionierung entsprechen.

    Beispiel: `1.20` oder `1.19` oder `1.18` oder `1.17` oder `1.16`, ...

    Je nach ausgewählter Minecraft-Version sollte eine andere Java-Version für das „Docker Image“ ausgewählt werden. Hier ist eine Liste von Minecraft-Versionen und den entsprechenden Docker-Images:

    | Minecraft Version          | Docker Image       |
    | -------------------------- | ------------------ |
    | 1.17 und höher             | Java 16 oder höher |
    | 1.16.x (Nether Update)     | Java 11 oder höher |
    | 1.15.x (Buzzy Bees)        | Java 8 oder höher  |
    | 1.14.x (Village & Pillage) | Java 8 oder höher  |
    | 1.13.x                     | Java 8 oder höher  |
    | 1.12.x                     | Java 8             |
    | 1.11.x und älter           | Java 8             |

    Des Weiteren muss die „Build Number“ passend zur zuvor eingegebenen Minecraft-Version angegeben werden. Wir installieren standardmäßig PaperSpigot auf allen Minecraft-Servern. Falls die Serversoftware geändert wurde, sollte die entsprechende Buildnummer von der Website der jeweiligen Serversoftware ermittelt werden.

    Hier findest Du alle Minecraft-Versionen und zugehörigen Buildnummern von PaperSpigot: <https://papermc.io/downloads/all>

    ![Build-Übersicht auf der PaperMC-Website mit der Versionsliste links und der markierten Buildnummer](images/papermc-build-list.png)

    Du kannst auf der linken Seite die gewünschte Minecraft-Version auswählen, und für jede Version findest Du in der Mitte alle zugehörigen Builds. Bei EmeraldHost musst Du die Buildnummer ohne das „#“ eingeben.

    Hier ist eine Liste von Buildnummern, die den jeweiligen Minecraft-Versionen entsprechen:

    | Minecraft Version | Paper Build |
    | ----------------- | ----------- |
    | 1.20              | 17          |
    | 1.19              | 81          |
    | 1.18              | 66          |
    | 1.17              | 79          |
    | 1.16.1            | 138         |
    | 1.15              | 21          |
    | 1.14              | 17          |
    | 1.13              | 173         |
    | 1.12              | 1169        |
    | 1.11.2            | 1106        |
    | 1.10.2            | 918         |
    | 1.8.8             | 445         |

4. **Server neuinstallieren**\
    Kehre zur Übersichtsseite Deines Minecraft-Servers zurück. Klicke oben rechts auf die drei Punkte und wähle „Neuinstallieren“ aus. Dein Minecraft-Server wird einmal zurückgesetzt und mit der von Dir ausgewählten Minecraft-Version neuinstalliert.

    ![Geöffnetes Menü hinter den drei Punkten mit dem markierten Eintrag „Neuinstallieren“](images/reinstall-menu-entry.png)

    Ein neues Fenster wird geöffnet, in dem Du die Neuinstallation bestätigen musst. Bestätige diesen Vorgang, indem Du auf „Ja, Server neu installieren“ klickst.

    ![Bestätigungsfenster „Server neu installieren“ mit dem Button „Ja, Server neu installieren“](images/confirm-server-reinstall.png)

    Die Fertigstellung des Vorgangs wird angezeigt, sobald Dein Minecraft-Server wieder online ist.
