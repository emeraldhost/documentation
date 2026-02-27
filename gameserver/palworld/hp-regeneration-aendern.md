---
description: HP-Regeneration auf einem Palworld Server ändern
---

# So änderst du die HP-Regeneration auf deinem Palworld Server

Du kannst anpassen, wie schnell sich die Lebenspunkte von Spielern und Pals regenerieren.

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

4. <b>HP-Regeneration anpassen</b><br>
   **Spieler-Regeneration:**

   ```
   PlayerAutoHPRegeneRate=1.000000
   ```

   **Spieler-Regeneration im Schlaf:**

   ```
   PlayerAutoHpRegeneRateInSleep=1.000000
   ```

   **Pal-Regeneration:**

   ```
   PalAutoHPRegeneRate=1.000000
   ```

   **Pal-Regeneration im Schlaf:**

   ```
   PalAutoHpRegeneRateInSleep=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Langsamere Regeneration |
| `1.0` | Standard |
| `2.0` | Doppelte Regeneration |
| `5.0` | 5-fache Regeneration |
