---
description: Nether auf einem Minecraft Java Edition Server deaktivieren
---

# So deaktivierst du den Nether auf einem Minecraft Java Server

Wenn der Nether deaktiviert ist, funktionieren Nether-Portale nicht mehr und Spieler können die Nether-Dimension nicht betreten. Bereits dort befindliche Spieler werden bei der nächsten Anmeldung in die Oberwelt verschoben.

:::: info Hinweis
Diese Einstellung wird über die `server.properties` gesteuert und funktioniert auf allen Java-Server-Varianten — Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric und NeoForge.
::::

## Nether deaktivieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.

3. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   allow-nether=true
   ```

4. <b>Wert ändern</b><br>
   Ändere den Wert auf `false`:

   ```
   allow-nether=false
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Um den Nether wieder zu aktivieren, setze den Wert zurück auf `true` und starte den Server neu. Bestehende Nether-Welten bleiben dabei erhalten.
::::
