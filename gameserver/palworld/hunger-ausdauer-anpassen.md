---
description: Hunger und Ausdauer auf einem Palworld Server anpassen
---

# So passt du Hunger und Ausdauer auf deinem Palworld Server an

Du kannst einstellen, wie schnell Hunger und Ausdauer bei Spielern und Pals abnehmen.

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

4. <b>Werte anpassen</b><br>
   **Spieler-Hunger:**

   ```
   PlayerStomachDecreaceRate=1.000000
   ```

   **Spieler-Ausdauer:**

   ```
   PlayerStaminaDecreaceRate=1.000000
   ```

   **Pal-Hunger:**

   ```
   PalStomachDecreaceRate=1.000000
   ```

   **Pal-Ausdauer:**

   ```
   PalStaminaDecreaceRate=1.000000
   ```

5. <b>Server starten</b><br>
   Starte deinen Server.

**Beispiele:**

| Wert | Beschreibung |
|------|-------------|
| `0.5` | Langsamer Verbrauch (einfacher) |
| `1.0` | Standard |
| `2.0` | Schnellerer Verbrauch (schwieriger) |

:::: info Hinweis
Die Schreibweise `Decreace` im Parameter ist beabsichtigt und muss genau so übernommen werden.
::::
