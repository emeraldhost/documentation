---
description: Drop-Rate auf einem Palworld Server ändern
---

# So änderst du die Drop-Rate auf deinem Palworld Server

Du kannst die Menge an Items anpassen, die beim Sammeln und von besiegten Gegnern fallen.

:::: warning Achtung
Stelle sicher, dass dein Server gestoppt ist, bevor du die Config-Datei bearbeitest. Änderungen an der `PalWorldSettings.ini` werden sonst vom Spiel überschrieben.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Config-Datei öffnen</b><br>
   Öffne die Datei `PalWorldSettings.ini` unter:

   ```
   /Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
   ```

4. <b>Drop-Rate anpassen</b><br>
   Es gibt zwei Parameter für unterschiedliche Drop-Arten:

   **Ressourcen-Drops** (Abbau, Sammeln):

   ```
   CollectionDropRate=1.000000
   ```

   **Gegner-Drops** (besiegte Feinde):

   ```
   EnemyDropItemRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `1.0` | Standard |
| `2.0` | Doppelte Drops |
| `5.0` | 5-fache Drops |
