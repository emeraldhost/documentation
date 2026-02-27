---
description: Spieler-Schadensmultiplikator auf einem Palworld Server ändern
---

# So änderst du den Spieler-Schaden auf deinem Palworld Server

Du kannst anpassen, wie viel Schaden Spieler austeilen und einstecken.

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

4. <b>Spieler-Schaden anpassen</b><br>
   **Angriffsstärke der Spieler:**

   ```
   PlayerDamageRateAttack=1.000000
   ```

   **Verteidigung der Spieler:**

   ```
   PlayerDamageRateDefense=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Halber Schaden / halbe Verteidigung |
| `1.0` | Standard |
| `2.0` | Doppelter Schaden / doppelte Verteidigung |

## Alle Parameter

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `PlayerDamageRateAttack` | `1.0` | Angriffsstärke der Spieler |
| `PlayerDamageRateDefense` | `1.0` | Verteidigung der Spieler |
