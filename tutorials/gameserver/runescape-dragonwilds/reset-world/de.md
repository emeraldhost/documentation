---
slug: "welt-zuruecksetzen"
language: "de"
title: "So setzt Du die Welt Deines RuneScape: Dragonwilds Servers zurück"
description: "Welt eines RuneScape Dragonwilds Servers zurücksetzen"
tags: []
date: "2026-09-15"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt zurücksetzen"
sort: 13
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/download-savegame", "gameserver/runescape-dragonwilds/add-savegame", "gameserver/runescape-dragonwilds/create-custom-world"]
---
In der Verwaltung gibt es keinen Knopf zum Zurücksetzen der Welt. Beim Start lädt der Server immer die neueste `.sav`-Datei aus dem Ordner `RSDragonwilds/Saved/SaveGames`. Findet er dort keine, legt er automatisch eine neue Standard-Welt an. Eine frische Welt bekommst Du also, indem Du diesen Ordner leerst.

> [!IMPORTANT]
> Beim Zurücksetzen ist Deine bisherige Welt unwiederbringlich weg: alle Gebäude und platzierten Objekte und damit der gesamte Fortschritt in dieser Welt. Es gibt keine Rückgängig-Funktion. Erstelle deshalb **zuerst** ein Backup – ohne Sicherung kommst Du an Deinen alten Stand nie wieder heran.

## Welt zurücksetzen

1. **Backup erstellen**\
   Sichere Deine aktuelle Welt, bevor Du irgendetwas löschst: [Backup erstellen](/tutorials/gameserver/runescape-dragonwilds/create-backup). Zusätzlich kannst Du die `.sav`-Datei auf Deinen PC herunterladen: [Savegame herunterladen](/tutorials/gameserver/runescape-dragonwilds/download-savegame).

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Ein laufender Server schreibt weiter in seine Speicherdatei – lösche die Dateien deshalb niemals im laufenden Betrieb.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne folgendes Verzeichnis:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Spielstände löschen**\
   Lösche alle Dateien in diesem Verzeichnis. Den Ordner `SaveGames` selbst lässt Du stehen – lösche nur seinen Inhalt.

5. **Welt-Namen festlegen**\
   Optional: Öffne die **Einstellungen** in der Verwaltung und trage im Feld **Server Name** den Namen ein, den die neue Welt bekommen soll. Lässt Du das Feld unverändert, bekommt die neue Welt den Namen, der dort aktuell eingetragen ist.

6. **Server starten**\
   Starte Deinen Server über die Verwaltung. Beim Hochfahren legt er eine neue Standard-Welt mit diesem Namen an.

> [!WARNING]
> Lösche wirklich nur den Inhalt des Ordners `SaveGames`. Die Datei `DedicatedServer.ini` unter `RSDragonwilds/Saved/Config/LinuxServer/` enthält Deine Serverkonfiguration – darunter Owner ID, Server-Passwort und Admin-Passwort. Lass sie unangetastet.

## Was weg ist und was bleibt

| Weg | Bleibt |
|-----|--------|
| Die Welt mit allen Gebäuden und platzierten Objekten | Owner ID, Server-Passwort und Admin-Passwort |
| Der gesamte Fortschritt in dieser Welt | Die übrige Konfiguration in der `DedicatedServer.ini` |
| Alles, was Du vorher nicht gesichert hast | Deine zuvor erstellten Backups und heruntergeladenen Savegames |

> [!TIP]
> **Eigene Einstellungen für die neue Welt**
>
> Der Server erzeugt immer eine Welt mit Standard-Einstellungen. Soll die neue Welt mit eigenen Regeln laufen, erstelle sie lokal im Spiel und lade sie hoch: [Custom Welt erstellen](/tutorials/gameserver/runescape-dragonwilds/create-custom-world).

## Andere Welt laden

Liegen mehrere `.sav`-Dateien im Ordner `SaveGames`, lädt der Server immer die **neueste** davon – das Feld **Server Name** allein reicht nicht, um zwischen vorhandenen Welten zu wechseln. Die gewünschte Welt muss allein im Ordner liegen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne das Verzeichnis `/RSDragonwilds/Saved/SaveGames/`.

3. **Andere Welten aus dem Ordner entfernen**\
   Lade alle `.sav`-Dateien, die nicht geladen werden sollen, auf Deinen PC herunter und lösche sie anschließend aus dem Ordner. Am Ende liegt nur noch die `.sav`-Datei der gewünschten Welt darin.

4. **Welt-Namen eintragen**\
   Öffne die **Einstellungen** in der Verwaltung und trage im Feld **Server Name** den Dateinamen dieser Welt ohne die Endung `.sav` ein. So stimmt der Welt-Name in der Verwaltung mit der geladenen Welt überein.

5. **Server starten**\
   Starte Deinen Server. Er lädt nun die verbliebene Welt.

> [!WARNING]
> Benenne `.sav`-Dateien niemals um. Startet der Server mit einer umbenannten Datei, geht der darin gespeicherte Fortschritt verloren. Behalte immer den ursprünglichen Dateinamen bei.

> [!TIP]
> **Alte Welt zurückholen**
>
> Hast Du vor dem Löschen ein Backup erstellt, stellst Du es über die Verwaltung wieder her: [Backup erstellen](/tutorials/gameserver/runescape-dragonwilds/create-backup). Hast Du die `.sav`-Datei stattdessen auf Deinen PC heruntergeladen, lädst Du sie per SFTP wieder hoch: [Savegame hinzufügen](/tutorials/gameserver/runescape-dragonwilds/add-savegame).
