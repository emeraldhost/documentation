---
title: Map auf deinem Conan Exiles Server wechseln
description: Schritt-für-Schritt-Anleitung, wie du die Map auf deinem Conan Exiles Server wechselst
---

# Conan Exiles Server Map wechseln

:::: tip Tipp
Du kannst die Dateien auch mit einem FTP-Programm bearbeiten. Hier findest du eine Anleitung, wie du eine [SFTP-Verbindung herstellst](../sftp-verbindung-herstellen.md).
::::

:::: warning Achtung
Beim Wechsel der Map gehen alle Spielstände und Gebäude verloren! Erstelle vorher ein Backup, falls du später zur alten Map zurückkehren möchtest.
::::

## Verfügbare Maps

| Map | Wert |
|-----|------|
| **Exiled Lands** | `/Game/Maps/ConanSandbox/ConanSandbox` |
| **Isle of Siptah** | `/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah` |

:::: info Info
Für die Map "Isle of Siptah" wird der gleichnamige DLC benötigt.
::::

## Schritte

1. <b>Server stoppen</b><br>
   Stoppe deinen Server in der Verwaltung.

2. <b>Datei öffnen</b><br>
   Navigiere im Datei-Browser zur Datei `Engine.ini`.
   - Pfad: `ConanSandbox/Saved/Config/WindowsServer/Engine.ini`

3. <b>Eintrag hinzufügen</b><br>
   Füge folgenden Eintrag hinzu:

   ```ini
   [/Script/EngineSettings.GameMapsSettings]
   ServerDefaultMap=/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah
   ```

4. <b>Server neustarten</b><br>
   Speichere die Datei und starte deinen Server neu.
