---
description: "Admin auf einem Empyrion: Galactic Survival Server hinzufügen"
---

# So fügst du einen Admin auf deinem Empyrion: Galactic Survival Server hinzu

Admins werden auf Empyrion-Servern in der Datei `adminconfig.yaml` im `Saves`-Ordner eingetragen.

## Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>adminconfig.yaml öffnen</b><br>
   Öffne die Datei:

   ```
   /Saves/adminconfig.yaml
   ```

4. <b>Eintrag hinzufügen</b><br>
   Füge deinen Spieler unter dem Abschnitt `Elevated:` hinzu. Ersetze die SteamID64 und das gewünschte Permission-Level:

   ```yaml
   Elevated:
     - Id: 76561198801452050
       Permission: 9
   ```

   Deine [SteamID64](../steamid64-herausfinden.md) kannst du über die verlinkte Anleitung herausfinden.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

## Permission-Level

| Wert | Rolle |
|------|-------|
| 3 | GameMaster |
| 6 | Moderator |
| 9 | Admin |

:::: tip Tipp
Ist noch kein Admin konfiguriert, kann sich ein eingeloggter Spieler mit dem Befehl `initadmin` im Spiel selbst als Admin eintragen. Anschließend kann er weitere Admins über die `adminconfig.yaml` hinzufügen.
::::

:::: info Hinweis
Änderungen an der `adminconfig.yaml` werden erst nach einem Neustart des Servers übernommen.
::::
