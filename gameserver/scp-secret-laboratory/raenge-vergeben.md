---
description: "Ränge auf einem SCP: Secret Laboratory Server vergeben"
---

# So vergibst du Ränge auf deinem SCP: Secret Laboratory Server

Über die Datei `config_remoteadmin.txt` kannst du Spielern Admin-, Moderator- oder Eigentümer-Rechte zuweisen.

:::: warning Achtung
Der Pfad zur Konfigurationsdatei enthält den Server-Port deines Servers: `/config/<Port>/config_remoteadmin.txt`. Ersetze `<Port>` durch den tatsächlichen Port deines Servers. Den Port findest du in der Verwaltung unter **Übersicht**.
::::

## Rang zuweisen

1. <b>Server-Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Server-Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei — ersetze `<Port>` durch deinen Server-Port:

   ```
   /config/<Port>/config_remoteadmin.txt
   ```

5. <b>Eintrag im Members-Abschnitt hinzufügen</b><br>
   Suche den Abschnitt `Members:` und füge deinen Spieler im folgenden Format hinzu:

   ```
   Members:
   - '76561198801452050@steam: owner'
   ```

   Ersetze die SteamID64 durch die deines Spielers und setze den passenden Rang (z.B. `owner`, `admin`, `moderator`). Deine [SteamID64](../steamid64-herausfinden.md) kannst du über die verlinkte Anleitung herausfinden.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

## Standard-Rollen

| Rolle | Beschreibung |
|-------|--------------|
| `owner` | Voller Zugriff auf alle Funktionen |
| `admin` | Umfassende Admin-Rechte |
| `moderator` | Eingeschränkte Moderations-Rechte |

:::: warning Achtung
Die Datei `config_remoteadmin.txt` reagiert empfindlich auf falsche Formatierung. Achte auf die korrekte Einrückung, Anführungszeichen und Bindestriche bei jedem Eintrag, sonst lädt der Server die Datei nicht korrekt.
::::

:::: info Hinweis
Änderungen an der Rang-Konfiguration werden erst nach einem Neustart des Servers übernommen — es gibt kein Hot-Reload.
::::
