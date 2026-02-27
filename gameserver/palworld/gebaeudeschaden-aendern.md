---
description: Gebäudeschaden auf einem Palworld Server ändern
---

# So änderst du den Gebäudeschaden auf deinem Palworld Server

Du kannst anpassen, wie viel Schaden Gebäude und Strukturen nehmen.

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

4. <b>Gebäudeschaden anpassen</b><br>
   Es gibt zwei Parameter:

   **Schaden an Gebäuden:**

   ```
   BuildObjectDamageRate=1.000000
   ```

   **Verfall von Gebäuden:**

   ```
   BuildObjectDeteriorationDamageRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Kein Schaden / kein Verfall |
| `0.5` | Halber Schaden |
| `1.0` | Standard |
| `2.0` | Doppelter Schaden |
