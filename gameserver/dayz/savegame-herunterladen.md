---
description: Savegame von einem DayZ Server herunterladen
---

# So lädst du das Savegame deines DayZ Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen. Das Savegame befindet sich im `storage_1` Ordner.

:::: info Hinweis
DayZ-Spielstände werden ausschließlich serverseitig gespeichert. Der heruntergeladene Ordner lässt sich daher nur auf einem anderen DayZ-Server wieder einspielen, nicht in einem Singleplayer-Spiel.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig — du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   :::: tip Tipp
   Wenn du die Livonia-Map verwendest, lautet der Pfad stattdessen:
   ```
   /mpmissions/dayzOffline.enoch/storage_1/
   ```
   ::::

4. <b>Ordner herunterladen</b><br>
   Lade den kompletten `storage_1` Ordner mit allen enthaltenen Dateien auf deinen PC herunter. Darin liegt der gesamte Weltzustand deines Servers inklusive Bauten, Loot und Fahrzeugen.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Die richtige Mission finden
Der `storage_1` Ordner liegt immer innerhalb des Missions-Ordners der Map, die dein Server aktuell lädt: `dayzOffline.chernarusplus` für Chernarus, `dayzOffline.enoch` für Livonia. Lädst du eine andere Map, findest du den Ordner entsprechend im Missions-Ordner dieser Map unter `/mpmissions/`.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
