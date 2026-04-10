---
description: Benutzerdefinierte Ränge auf einem Barotrauma Server hinzufügen
---

# So fügst du benutzerdefinierte Ränge auf deinem Barotrauma Server hinzu

Du kannst eigene Ränge mit individuellen Berechtigungen über die Datei `permissionpresets.xml` erstellen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>permissionpresets.xml öffnen</b><br>
   Öffne die Datei `permissionpresets.xml` unter:

   ```
   /config/permissionpresets.xml
   ```

4. <b>Eigenen Rang hinzufügen</b><br>
   Füge einen neuen `<PresetItem>`-Eintrag hinzu. Hier ein Beispiel für einen benutzerdefinierten Rang:

   ```xml
   <PresetItem
     name="Builder"
     permissions="ConsoleCommands,ManageRound"
     commands="spawn,teleport"
   />
   ```

   Passe die folgenden Attribute an deine Bedürfnisse an:

   | Attribut | Beschreibung |
   |----------|-------------|
   | `name` | Der Name des Rangs |
   | `permissions` | Kommagetrennte Liste der Berechtigungen |
   | `commands` | Kommagetrennte Liste der erlaubten Konsolenbefehle |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Du kannst den neuen Rang anschließend in der `clientpermissions.xml` einem Spieler zuweisen, indem du `preset="Builder"` verwendest.
::::

:::: info Hinweis
Verfügbare Berechtigungen sind unter anderem: `ManageRound`, `Kick`, `Ban`, `Unban`, `SelectSub`, `SelectMode`, `ManageCampaign`, `ConsoleCommands`, `ManagePermissions` und `ManageSettings`.
::::
