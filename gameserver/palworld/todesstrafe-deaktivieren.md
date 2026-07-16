---
description: Todesstrafe auf einem Palworld Server deaktivieren
---

# So deaktivierst du die Todesstrafe auf deinem Palworld Server

Du kannst einstellen, was Spieler beim Tod verlieren.

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

4. <b>Todesstrafe anpassen</b><br>
   Suche den Parameter `DeathPenalty` und setze den gewünschten Wert:

   ```
   DeathPenalty=None
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Verfügbare Werte:**

| Wert | Beschreibung |
|------|-------------|
| `None` | Kein Verlust beim Tod |
| `Item` | Nur Items verlieren |
| `ItemAndEquipment` | Items und Ausrüstung verlieren |
| `All` | Alles verlieren (Items, Ausrüstung und Pals) |

:::: info Hinweis
Seit dem 1.0-Release ist der Standardwert `Item` — die Server-Standardwerte wurden an den Normal-Schwierigkeitsgrad des Einzelspielermodus angeglichen. Auf Servern, die vor 1.0 erstellt wurden, gilt weiterhin der in der Config eingetragene Wert (früherer Standard: `All`).
::::
