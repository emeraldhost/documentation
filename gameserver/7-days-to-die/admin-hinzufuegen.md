---
description: Admin auf einem 7 Days to Die Server hinzufügen
---

# So fügst du einen Admin auf deinem 7 Days to Die Server hinzu

Du kannst Admins über die Datei `serveradmin.xml` oder per Konsolenbefehl hinzufügen.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Admin über serveradmin.xml hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serveradmin.xml öffnen</b><br>
   Öffne die Datei `serveradmin.xml` im Verzeichnis:

   ```
   /Saves/serveradmin.xml
   ```

4. <b>Admin hinzufügen</b><br>
   Füge im Bereich `<users>` einen neuen Eintrag hinzu:

   ```xml
   <user platform="Steam" userid="DEINE_STEAMID64" name="DeinName" permission_level="0" />
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

### Berechtigungsstufen

| Stufe | Beschreibung |
|-------|-------------|
| `0` | Super-Admin (volle Kontrolle) |
| `1` | Admin (Kick, Ban, etc.) |
| `1000` | Standard für normale Spieler |

:::: info Hinweis
Ein Admin kann alle Befehle ausführen, deren Berechtigungsstufe **gleich oder höher** als seine eigene ist.
::::

## Admin per Konsolenbefehl hinzufügen

Falls du bereits Admin bist, kannst du weitere Admins ingame hinzufügen. Drücke `F1`, um die Konsole zu öffnen, und gib ein:

```
admin add <SteamID64> <Berechtigungsstufe> <Name>
```

:::: tip Beispiel
```
admin add 76561198012345678 0 MaxMustermann
```
::::
