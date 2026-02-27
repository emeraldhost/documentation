---
description: PvP auf einem Palworld Server aktivieren
---

# So aktivierst du PvP auf deinem Palworld Server

Du kannst den PvP-Modus aktivieren, damit Spieler gegeneinander kämpfen können.

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

4. <b>PvP aktivieren</b><br>
   Suche den Parameter `bIsPvP` und setze ihn auf `True`:

   ```
   bIsPvP=True
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

## Weitere PvP-Einstellungen

| Parameter | Standard | Beschreibung |
|-----------|----------|-------------|
| `bEnablePlayerToPlayerDamage` | `False` | Spieler können sich gegenseitig Schaden zufügen |
| `bEnableFriendlyFire` | `False` | Gilden-Mitglieder können sich gegenseitig Schaden zufügen |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `False` | Andere Gilden können Todes-Drops aufheben |
