---
description: Gilden-Einstellungen auf einem Palworld Server ändern
---

# So änderst du die Gilden-Einstellungen auf deinem Palworld Server

Du kannst die maximale Anzahl an Gilden-Mitgliedern, Basen und Arbeitern anpassen.

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

4. <b>Gilden-Einstellungen anpassen</b><br>
   **Maximale Spieler pro Gilde:**

   ```
   GuildPlayerMaxNum=20
   ```

   **Maximale Basen pro Gilde:**

   ```
   BaseCampMaxNumInGuild=4
   ```

   **Maximale Arbeiter pro Basis:**

   ```
   BaseCampWorkerMaxNum=15
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `GuildPlayerMaxNum` | `20` | Maximale Spieler pro Gilde |
| `BaseCampMaxNumInGuild` | `4` | Maximale Basen pro Gilde |
| `BaseCampWorkerMaxNum` | `15` | Maximale Arbeiter pro Basis |

:::: warning Achtung
Hohe Werte bei `BaseCampWorkerMaxNum` können die Performance des Servers beeinträchtigen.
::::
