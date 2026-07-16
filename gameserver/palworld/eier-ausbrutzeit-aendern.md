---
description: Eier-Ausbrützeit auf einem Palworld Server ändern
---

# So änderst du die Eier-Ausbrützeit auf deinem Palworld Server

Du kannst die Dauer anpassen, die Pal-Eier zum Ausbrüten benötigen.

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

4. <b>Ausbrützeit anpassen</b><br>
   Suche den Parameter `PalEggDefaultHatchingTime` und passe den Wert an:

   ```
   PalEggDefaultHatchingTime=1.000000
   ```

   Der Wert ist in **Stunden** angegeben und gilt für das größte Ei (Huge Egg) — kleinere Eier schlüpfen entsprechend schneller.

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0` | Sofortiges Ausbrüten |
| `1.0` | 1 Stunde (Standard) |
| `24.0` | 1 Tag |
| `72.0` | 3 Tage |

:::: info Hinweis
Seit dem 1.0-Release ist der Standardwert `1` Stunde. Auf Servern, die vor 1.0 erstellt wurden, gilt weiterhin der in der Config eingetragene Wert (früherer Standard: `72`).
::::
