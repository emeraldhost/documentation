---
description: 'Anleitung zur Konfiguration der Servereinstellungen für PalWorld'
---

# Konfiguration der Servereinstellungen für Palworld

::: warning
Stelle sicher, dass der Server heruntergefahren ist, bevor Du Änderungen vornimmst. Andernfalls werden die Änderungen nicht korrekt übernommen.
:::

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
   * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Server herunterfahren</b>
    * Stelle sicher, dass der Server **heruntergefahren** ist, bevor Du Änderungen vornehmen tust. Wenn der Server läuft, werden die Änderungen nicht korrekt übernommen.

2. <b>Datei herunterladen</b>
    * Verwende Filezilla, um auf den Server zuzugreifen.
    * Navigiere zum Hauptverzeichnis und lade die Datei `DefaultPalWorldSettings.ini` herunter.

3. <b>Bearbeiten der Datei</b>
    * Öffne die heruntergeladene Datei `DefaultPalWorldSettings.ini`.
    * Führe die gewünschten Änderungen in der Konfiguration durch.

4. <b>Zielordner überprüfen/erstellen</b>
    * Überprüfe, ob der Ordner `/home/Pal/Saved/Config/LinuxServer/` existiert.
    * Falls nicht vorhanden, erstelle diesen Ordner über Filezilla.

5. <b>Geänderte Datei hochladen</b>
    * Speichere die bearbeitete Datei als `PalWorldSettings.ini` unter `/home/Pal/Saved/Config/LinuxServer/`.
    * Bei einer bereits vorhandenen gleichnamigen Datei, überschreibe diese oder kopiere den Inhalt der bearbeiteten Datei hinein.


::: tip WICHTIG
Damit der Server funktionsfähig bleibt, trage die Serverkonfiguration anhand Deiner Einstellungen ein. Dies betrifft die Konfigurationen:
`ServerPassword`, `AdminPassword`, `ServerName`, `ServerPlayerMaxNum`, `PublicPort`, `PublicIP`.

**WICHTIG:** Die Datei `PalWorldSettings.ini` sollte genau 2 Zeilen haben.
`[/Script/Pal.PalGameWorldSettings]`
`OptionSettings=(Difficulty=None, ...`
:::

### Nach diesen Schritten sollte die Konfiguration Deines PalWorld-Servers erfolgreich aktualisiert sein. Viel Spaß bei der Nutzung Deines personalisierten Servers!
