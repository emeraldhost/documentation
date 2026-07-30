---
description: Admin auf einem Factorio Server hinzufügen
---

# So fügst du einen Admin auf deinem Factorio Server hinzu

Admins dürfen auf deinem Server Befehle wie `/kick`, `/ban` oder `/config` ausführen. Ein Factorio-Server startet zunächst **ganz ohne Admins** – du legst sie über die Serverkonsole oder über die Datei `server-adminlist.json` fest.

:::: info Hinweis
Als Admin wird der **factorio.com-Benutzername** eingetragen, mit dem der Spieler dem Server beitritt – **keine** SteamID64. Auch Spieler, die Factorio über Steam gekauft haben, besitzen einen verknüpften Factorio-Account.
::::

## Admin über die Serverkonsole hinzufügen

1. <b>Serverkonsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Spieler befördern</b><br>
   Gib folgenden Befehl ein – der Spieler sollte dazu auf dem Server sein:

   ```
   /promote Benutzername
   ```

3. <b>Ergebnis prüfen</b><br>
   Mit `/admins` lässt du dir alle eingetragenen Admins anzeigen.

:::: tip Tipp
Der Befehl legt die Datei `server-adminlist.json` automatisch an und speichert die Änderung dauerhaft. Der Admin-Status bleibt also auch nach einem Neustart erhalten.
::::

## Admin über die Datei server-adminlist.json hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen oder anlegen</b><br>
   Öffne im Hauptverzeichnis deines Servers – dort, wo auch die Datei `factorio-current.log` liegt – die Datei `server-adminlist.json`. Existiert sie noch nicht, lege sie an.

4. <b>Benutzernamen eintragen</b><br>
   Trage die Benutzernamen als einfache Liste ein:

   ```json
   [
     "Spieler1",
     "Spieler2"
   ]
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Trage die Admins **nicht** in der Datei `data/server-settings.json` ein. Das dortige Feld `admins` wird von einem Headless-Server ignoriert – es funktioniert nur die Serverkonsole bzw. die Datei `server-adminlist.json`.
::::

## Admin-Rechte entziehen

Öffne die Serverkonsole und gib folgenden Befehl ein:

```
/demote Benutzername
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/promote <Benutzername>` | Spieler zum Admin machen |
| `/demote <Benutzername>` | Admin-Rechte entziehen |
| `/admins` | Alle Admins anzeigen |

:::: info Hinweis
Standardmäßig ist auf einem Factorio-Server `allow_commands` auf `admins-only` gesetzt. Befehle können also nur Admins ausführen.
::::
