---
description: Welt auf einem Palworld Server zurücksetzen
---

# So setzt du die Welt auf deinem Palworld Server zurück

Du kannst die Welt deines Servers zurücksetzen, um eine komplett neue Welt zu generieren. Dabei werden alle Spielstände und Gebäude gelöscht.

:::: warning Achtung
Dieser Vorgang kann nicht rückgängig gemacht werden. Erstelle vorher ein Backup, falls du den Spielstand behalten möchtest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Savegame-Ordner löschen</b><br>
   Navigiere zu:

   ```
   /Pal/Saved/SaveGames/0/
   ```

   Lösche den darin enthaltenen Ordner (ein Ordner mit einer langen Zeichenkette als Name).

4. <b>Server starten</b><br>
   Starte deinen Server. Eine neue Welt wird automatisch generiert.

:::: tip Tipp
Deine Server-Einstellungen in der `PalWorldSettings.ini` bleiben erhalten und müssen nicht erneut konfiguriert werden.
::::
