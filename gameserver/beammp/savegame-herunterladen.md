---
description: Savegame von einem BeamMP Server herunterladen
---

# So lädst du das Savegame deines BeamMP Servers herunter

BeamMP basiert auf der BeamNG.drive Sandbox und verwendet keine persistenten Welt-Savegames. Herunterladen kannst du daher die serverseitigen Map- und Ressourcen-Dateien — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, greift er auf die Dateien zu — du würdest sonst einen unvollständigen oder beschädigten Stand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Resources/Client/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade den kompletten Inhalt des Verzeichnisses auf deinen PC herunter. Darin liegen deine Custom-Map-Dateien, die der Server an die Spieler ausliefert.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Da BeamMP auf der BeamNG.drive Sandbox basiert, gibt es keine persistenten Welt-Savegames. Der Spielfortschritt wird nicht serverseitig gespeichert — es gibt also außer den Dateien in `/Resources/Client/` keinen Spielstand, den du sichern könntest.
::::

:::: tip Spielstand wieder einspielen
Möchtest du die Dateien später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
