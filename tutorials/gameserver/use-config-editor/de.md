---
slug: "config-editor-nutzen"
language: "de"
title: "So nutzt Du den Config-Editor für Deinen Gameserver"
description: "Servereinstellungen im Config-Editor ändern – mit einfachem Modus, Expertenmodus, Suche und Rohdateien"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Config-Editor nutzen"
sort: 7
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/minecraft/change-version"]
---

Mit dem **Config-Editor** änderst Du die Einstellungen Deines Servers direkt in der Verwaltung, ohne Konfigurationsdateien per SFTP herunterladen und bearbeiten zu müssen. Jede Einstellung wird mit einer kurzen Erklärung, ihrem Standardwert und dem erlaubten Wertebereich angezeigt.

> [!NOTE]
> In dieser Anleitung dient ein Minecraft-Server als Beispiel. Welche Kategorien, Einstellungen und Dateien Du im Config-Editor siehst, hängt vom Spiel und von der Server-Software ab.

## Config-Editor öffnen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Config-Editor wählen**\
   Klicke in der linken Seitenleiste auf **Config-Editor**.

## Einfacher Modus und Expertenmodus

Im Config-Editor wechselst Du über einen Schalter zwischen zwei Ansichten:

| Modus | Inhalt |
| ----- | ------ |
| **Einfacher Modus** | Die wichtigsten Einstellungen Deines Servers, jeweils mit kurzer Erklärung. |
| **Expertenmodus** | Alle Einstellungen, die Startvariablen und die Konfigurationsdateien im Rohformat. Neben jedem Namen steht der Schlüssel aus der Datei. Einige Startvariablen sind je nach Spiel nur lesbar. |

Im **Einfachen Modus** weist Dich ein Hinweis darauf hin, dass der Expertenmodus weitere Einstellungen, Startvariablen und Rohdateien enthält. Über **Zum Expertenmodus** wechselst Du direkt dorthin.

> [!TIP]
> Für die meisten Änderungen reicht der **Einfache Modus**. Den **Expertenmodus** brauchst Du nur, wenn Du eine Einstellung dort nicht findest oder eine Datei im Rohformat bearbeiten möchtest.

## Kategorien

Links unter **Einstellungen** sind die Einstellungen in Kategorien sortiert. Bei einem Minecraft-Server sind das z.B.:

- **Allgemein**
- **Server-Icon**
- **Welt**
- **Gameplay**
- **Spieler und Zugang**
- **Netzwerk und Leistung**
- **Server-Software** (nur im Expertenmodus)
- **Java-Version**

Bei anderen Spielen siehst Du andere Kategorien.

## Einstellungen finden

Über das Suchfeld **Name oder Schlüssel suchen** findest Du eine Einstellung schnell. Du kannst nach dem angezeigten Namen suchen oder nach dem Schlüssel, unter dem die Einstellung in der Konfigurationsdatei steht.

Zu jeder Einstellung zeigt Dir der Config-Editor:

- **Bezeichnung:** der Name der Einstellung.
- **Schlüssel:** ein Badge mit dem Namen aus der Datei, z.B. `motd`, `max-players`, `online-mode` oder `hide-online-players`.
- **Beschreibung:** eine kurze Erklärung, was die Einstellung bewirkt.
- **Standard:** der Standardwert und, falls vorhanden, der erlaubte Wertebereich.

Einstellungen, die Du nicht ändern kannst, sind mit **Nur lesbar** markiert. Bei Minecraft ist das z.B. der **Spiel-Port** (`server-port`).

> [!TIP]
> Bei Minecraft bearbeitest Du die MOTD mit einem eigenen Editor: Du hast zwei Zeilen, Buttons für Farben und Formatierungen (**Fett**, **Kursiv**, **Unterstrichen**, **Durchgestrichen**, **Zurücksetzen**) und siehst unter **Vorschau in der Serverliste** sofort, wie Dein Server in der Serverliste aussieht.

## Rohdateien im Expertenmodus

Im **Expertenmodus** findest Du links zusätzlich die Liste **Dateien**. Bei einem Minecraft-Server sind das z.B.:

- `server.properties`
- `paper-global.yml`
- `paper-world-defaults.yml`
- `spigot.yml`
- `bukkit.yml`

Dateien, die auf Deinem Server noch nicht existieren, sind mit **Noch nicht angelegt** gekennzeichnet.

## Änderungen speichern

1. **Einstellung ändern**\
   Passe den gewünschten Wert an.

2. **Speichern**\
   Speichere Deine Änderungen. Neue Werte gelten erst nach dem Speichern.

3. **Server neu starten**\
   Viele Einstellungen liest Dein Server nur beim Start ein. Starte Deinen Server nach dem Speichern über **Neustarten** neu, damit die Änderungen wirksam werden.

> [!WARNING]
> Fehlerhafte Werte können den Serverstart verhindern. Ändere nur Einstellungen, deren Bedeutung Du kennst, und erstelle vor größeren Änderungen ein [Backup](/tutorials/gameserver/create-backup).

## Server startet nach einer Änderung nicht mehr

Startet Dein Server nach einer Änderung nicht mehr, sieh in der **Konsole** nach, welche Fehlermeldung angezeigt wird. Setze die zuletzt geänderte Einstellung anschließend im Config-Editor auf den angezeigten **Standard**-Wert zurück und starte Deinen Server erneut.
