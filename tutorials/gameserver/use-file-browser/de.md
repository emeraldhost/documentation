---
slug: "datei-browser-nutzen"
language: "de"
title: "So nutzt Du den Datei-Browser Deines Gameservers"
description: "Dateien und Ordner Deines Gameservers direkt im Dashboard anlegen, hochladen, bearbeiten und verwalten"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datei-Browser nutzen"
sort: 15
related: ["gameserver/establish-sftp-connection", "gameserver/use-config-editor", "gameserver/create-backup", "gameserver/use-instances"]
---

Mit dem **Datei-Browser** verwaltest Du die Dateien Deines Servers direkt im Dashboard – ganz ohne zusätzliches Programm. Du kannst Dateien und Ordner anlegen, hochladen, bearbeiten, kopieren, verschieben, umbenennen und löschen.

## SFTP-Zugangsdaten

Ganz oben im **Datei-Browser** findest Du vier Karten mit Deinen SFTP-Zugangsdaten:

| Karte | Inhalt |
| ----- | ------ |
| **FTP Server** | Die Server-Adresse, z.B. `sftp://game<NN>.<standort>.emeraldhost.de` |
| **FTP Port** | Der Port, z.B. `2022` |
| **FTP Benutzername** | Dein Benutzername im Format `<benutzer>.<id>` |
| **FTP Passwort** | Dein Passwort, standardmäßig verdeckt |

Über das Augen-Symbol zeigst Du das Passwort an. Mit dem grünen Symbol oben rechts in der Karte **FTP Passwort** setzt Du ein neues Passwort. Wie Du Dich mit diesen Daten verbindest, erfährst Du unter [SFTP-Verbindung herstellen](/tutorials/gameserver/establish-sftp-connection).

## Dateien und Ordner anlegen

1. **Datei-Browser öffnen**\
   Öffne die Verwaltung Deines Servers und gehe zum **Datei-Browser** (Seite **Dateimanager**).

2. **Ordner wählen**\
   Navigiere in den Ordner, in dem Du etwas anlegen möchtest.

3. **Datei oder Ordner anlegen**\
   Klicke auf **Neue Datei** oder **Neuer Ordner**.

## Dateien hochladen

1. **Zielordner öffnen**\
   Navigiere im **Datei-Browser** in den Ordner, in den die Dateien sollen.

2. **Dateien hochladen**\
   Klicke auf **Dateien hochladen** und wähle die Dateien auf Deinem Computer aus.

> [!TIP]
> Für große Dateien oder viele Dateien auf einmal, z.B. eine komplette Welt oder ein Modpack, ist eine [SFTP-Verbindung](/tutorials/gameserver/establish-sftp-connection) meist zuverlässiger und schneller.

## Navigation und Suche

- **Ordner öffnen:** Klicke auf einen Ordner, um ihn aufzuklappen.
- **Pfadleiste:** Die Pfadleiste mit dem Haus-Symbol zeigt Dir, in welchem Ordner Du Dich gerade befindest.
- **Suche:** Über **Dateien durchsuchen** findest Du Dateien und Ordner schnell.
- **Sortieren:** Klicke auf die Spalte **Name**, um die Liste zu sortieren. Daneben siehst Du **Größe** und **Zuletzt geändert**.
- **Alle auswählen:** Mit **Alle auswählen** markierst Du alle Einträge im aktuellen Ordner. Der Zähler daneben zeigt, wie viele Ordner und Dateien darin liegen, z.B. „9 Ordner • 12 Dateien“.

## Aktionen im Datei-Menü

Über das Menü (⋮) neben einer Datei erreichst Du folgende Aktionen:

| Aktion | Beschreibung |
| ------ | ------------ |
| **Bearbeiten** | Öffnet die Datei zum Bearbeiten. |
| **Herunterladen** | Lädt die Datei auf Deinen Computer herunter. |
| **Kopieren** | Kopiert die Datei. |
| **Verschieben** | Verschiebt die Datei in einen anderen Ordner. |
| **Umbenennen** | Gibt der Datei einen neuen Namen. Tastenkürzel: `F2`. |
| **Pfad kopieren** | Kopiert den Pfad der Datei in die Zwischenablage. |
| **Berechtigungen** | Zeigt die Dateiberechtigungen. |
| **Komprimieren** | Komprimiert die Datei. |
| **Löschen** | Löscht die Datei. Tastenkürzel: `Entf`. |

> [!WARNING]
> Erstelle vor dem Löschen oder vor größeren Änderungen am besten ein [Backup](/tutorials/gameserver/create-backup), damit Du einen früheren Stand zurückholen kannst.

> [!TIP]
> Viele Einstellungen Deines Servers kannst Du bequemer über den [Config-Editor](/tutorials/gameserver/use-config-editor) ändern, statt die Konfigurationsdateien von Hand zu bearbeiten.
