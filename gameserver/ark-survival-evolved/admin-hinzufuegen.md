---
description: Admin auf einem ARK Survival Evolved Server hinzufügen
---

# So fügst du einen Admin auf deinem ARK Survival Evolved Server hinzu

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Methode 1: Admin Passwort (temporäre Admin-Rechte)

Mit dieser Methode kannst du dich im Spiel als Admin anmelden, indem du das Admin Passwort eingibst.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Admin Passwort setzen</b><br>
   Trage ein sicheres Passwort im Feld **Admin Passwort** ein und speichere die Änderung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

5. <b>Als Admin anmelden</b><br>
   Öffne im Spiel die Konsole mit der `Tab`-Taste und gib folgenden Befehl ein:

   ```
   enablecheats DeinAdminPasswort
   ```

:::: info Hinweis
Die Admin-Rechte über das Passwort sind nur für die aktuelle Sitzung gültig. Nach einem Neuverbinden musst du den Befehl erneut eingeben.
::::

## Methode 2: Permanente Admins (SteamID64)

Mit dieser Methode wirst du dauerhaft als Admin hinterlegt und musst kein Passwort eingeben.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Erstelle oder öffne die Datei `AllowedCheaterSteamIDs.txt` im Verzeichnis:

   ```
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. <b>SteamID64 eintragen</b><br>
   Füge deine SteamID64 in einer neuen Zeile ein.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Wenn du mehrere Admins hinzufügen möchtest, füge einfach mehrere SteamID64s ein — jede in einer neuen Zeile.
::::

## Wichtige Admin-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `cheat fly` | Flugmodus aktivieren |
| `cheat walk` | Flugmodus deaktivieren |
| `cheat god` | Unsterblichkeit aktivieren |
| `cheat giveresources` | 50 Einheiten jeder Ressource erhalten |
| `cheat infinitestats` | Unendlich Ausdauer, Gesundheit, etc. |
| `cheat destroywilddinos` | Alle wilden Dinos entfernen |
