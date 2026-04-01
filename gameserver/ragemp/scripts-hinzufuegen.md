---
description: Scripts auf einem RAGE:MP Server hinzufügen
---

# So fügst du Scripts zu deinem RAGE:MP Server hinzu

Du kannst serverseitige und clientseitige Scripts auf deinem RAGE:MP Server installieren.

## Ordnerstruktur

RAGE:MP verwendet zwei Ordner für Scripts:

| Ordner | Beschreibung |
|--------|-------------|
| `packages/` | Serverseitige Scripts (Logik, Datenbank, Authentifizierung) |
| `client_packages/` | Clientseitige Scripts (UI, Rendering, Eingaben) |

## Scripts hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Scripts hochladen</b><br>
   Lade die Scripts in den passenden Ordner hoch:

   - **Serverseitige Scripts** in den Ordner `packages/`
   - **Clientseitige Scripts** in den Ordner `client_packages/`

   :::: tip Beispiel
   ```
   /
   ├── packages/
   │   └── mein-gamemode/
   │       └── index.js
   └── client_packages/
       └── index.js
   ```
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Serverseitige Scripts werden in einem eigenen Unterordner innerhalb von `packages/` abgelegt. Jeder Unterordner benötigt eine `index.js`-Datei als Einstiegspunkt.
::::

:::: warning Achtung
Clientseitige Scripts werden automatisch an alle Spieler heruntergeladen, die dem Server beitreten. Achte darauf, keine sensiblen Daten in `client_packages/` abzulegen.
::::
