---
description: 'Installation von Mods auf einem Terraria: tModloader Server'
---

# Mods hinzufügen

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. <b>Lade die gewünschten Mods herunter</b>
* Suche und lade die gewünschten Mods (`.tmod-Dateien`) von der offiziellen tModloader-Webseite oder einer anderen vertrauenswürdigen Quelle herunter.
    ::: warning
    Bitte achte darauf, dass die Mods für Deine aktuelle Serverversion kompatible sind. Es kann passieren, dass ansonsten Dein Gameserver nicht mehr startet.
    :::

2. <b>Mods auf den Server hochladen und aktivieren</b>
    * Stelle eine Verbindung über SFTP (bspw. über FileZilla oder WinSCP) zum Server her.
    * Erstelle einen Ordner namens "**mods**" im Terraria-Serververzeichnis (normalerweise `/home/mods`).
    * Lade die heruntergeladenen Mods (`.tmod-Dateien`) per SFTP in den "**mods**" Ordner auf Deinem Server.
    * Erstelle eine neue Datei namens "**enabled.json**" in dem "**mods**" Ordner auf Deinem Server.
    * Kopiere den folgenden Text und füge diesen in die Datei "**enabled.json**" ein:

      enabled.json Beispiel:
      ```
      [
      "ModName",
      "ModName"
      ]
      ```
      Ersetze alle Einträge mit "**ModName**" mit Deinen Mod Dateinamen (Beispiel: Heißt die Mod-Datei **Calamity** dann trage unter **ModName** diesen Namen ein.)<br>
      ::: warning
      Stelle sicher, dass Du ein Komma an allen Punkten bis auf den letzten Punkt anhängst, wenn Du eine weitere Mod hinzufügen willst, um ihn einzubeziehen.
      :::

3. <b>Server starten</b>
    * Gehe zurück zum Webinterface und starte Deinen Terraria-Server.
    * Verbinde Dich über das Terraria-Spiel mit Deinem Server und überprüfe, ob die Mods korrekt geladen wurden.

4. <b>Mods für Spieler aktivieren</b>
    * Stelle sicher, dass alle Spieler, die Deinem Server beitreten möchten, dieselben Mods installiert und aktiviert haben, damit sie problemlos auf dem Server spielen können.

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, Mods auf Deinem Terraria: tModloader Server zu installieren und zu verwenden.