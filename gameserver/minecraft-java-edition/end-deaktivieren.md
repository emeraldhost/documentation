---
description: End auf einem Minecraft Java Edition Server deaktivieren
---

# So deaktivierst du den End auf einem Minecraft Java Server

Wenn der End deaktiviert ist, funktionieren End-Portale nicht mehr und Spieler können die End-Dimension nicht betreten. Bereits dort befindliche Spieler werden bei der nächsten Anmeldung in die Oberwelt verschoben.

:::: warning Achtung
Diese Einstellung steht nur auf **Bukkit-basierten Servern** (Paper, Spigot, Purpur, Folia) zur Verfügung. Auf **Vanilla, Forge, Fabric und NeoForge** kann der End nicht über eine Server-Einstellung deaktiviert werden — dort wäre ein Datapack oder Mod nötig.
::::

## End deaktivieren (Paper / Spigot / Purpur / Folia)

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `bukkit.yml`.

3. <b>Eintrag suchen</b><br>
   Suche im Abschnitt `settings` nach folgendem Eintrag:

   ```yaml
   allow-end: true
   ```

4. <b>Wert ändern</b><br>
   Ändere den Wert auf `false`:

   ```yaml
   allow-end: false
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Um den End wieder zu aktivieren, setze den Wert zurück auf `true` und starte den Server neu. Bestehende End-Welten (`world_the_end`) bleiben dabei erhalten.
::::
