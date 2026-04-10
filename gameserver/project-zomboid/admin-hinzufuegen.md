---
description: Admin auf einem Project Zomboid Server hinzufügen
---

# So fügst du einen Admin auf deinem Project Zomboid Server hinzu

## Admin-Benutzer und Passwort festlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Admin-Daten eintragen</b><br>
   Trage den gewünschten **Admin-Benutzernamen** und das **Admin-Passwort** in den entsprechenden Feldern ein.

4. <b>Server neu starten</b><br>
   Speichere die Einstellungen und starte deinen Server neu.

## Als Admin anmelden

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei.

2. <b>Einloggen</b><br>
   Logge dich mit dem Admin-Benutzernamen und dem Admin-Passwort ein.

## Zugriffsebenen

Du kannst über den Befehl `/setaccesslevel` im Chat anderen Spielern Rechte vergeben:

```
/setaccesslevel Spielername admin
```

| Zugriffsebene | Beschreibung |
|---------------|-------------|
| `admin` | Vollzugriff auf alle Befehle und Einstellungen |
| `moderator` | Kann Spieler kicken, bannen und verwalten |
| `overseer` | Kann Spieler überwachen und eingeschränkt verwalten |
| `gm` | Game Master mit eingeschränkten Verwaltungsrechten |
| `observer` | Kann den Server beobachten, aber keine Änderungen vornehmen |
