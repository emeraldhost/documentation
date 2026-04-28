---
description: Admin auf einem Squad 44 Server werden
---

# So wirst du Admin auf deinem Squad 44 Server

Über die Datei `Admins.cfg` kannst du Spielern Admin- oder Moderator-Rechte zuweisen. Admins werden in Squad 44 immer einer **Gruppe** zugeordnet, die festlegt, welche Rechte sie haben.

## Admin hinzufügen

1. <b>SteamID64 herausfinden</b><br>
   Notiere dir die [SteamID64](../steamid64-herausfinden.md) des Spielers, dem du Admin-Rechte geben möchtest.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Admins.cfg öffnen</b><br>
   Navigiere zu folgender Datei und öffne sie:

   ```
   /PostScriptum/ServerConfig/Admins.cfg
   ```

5. <b>Admin-Eintrag hinzufügen</b><br>
   Füge am Ende der Datei eine neue Zeile im folgenden Format hinzu:

   ```
   Admin=SteamID64:Gruppe
   ```

   Beispiel:

   ```
   Admin=76561198000000000:Admin
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

## Standard-Gruppen

Squad 44 liefert in der `Admins.cfg` bereits vordefinierte Gruppen mit, die du direkt verwenden kannst:

| Gruppe | Beschreibung |
|--------|--------------|
| `Admin` | Voller Zugriff auf alle Admin-Funktionen |
| `Moderator` | Eingeschränkte Moderations-Rechte (z.B. Kick, Ban, Chat) |
| `Whitelist` | Reservierter Slot ohne Admin-Rechte |

## Eigene Gruppe erstellen

Du kannst auch eigene Gruppen mit individuellen Rechten anlegen. Ergänze dazu eine Zeile im folgenden Format:

```
Group=GruppenName:Recht1,Recht2,Recht3
```

Beispiel:

```
Group=Helper:kick,ban,chat
```

Anschließend kannst du Spielern diese Gruppe zuweisen:

```
Admin=76561198000000000:Helper
```

:::: warning Achtung
Achte auf die exakte Schreibweise der Gruppen- und Rechte-Namen. Tippfehler führen dazu, dass der Server die Datei nicht korrekt lädt.
::::

:::: info Hinweis
Änderungen an der `Admins.cfg` werden erst nach einem Neustart des Servers übernommen.
::::
