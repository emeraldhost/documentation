---
description: Savegame von einem The Front Server herunterladen
---

# So lädst du das Savegame deines The Front Servers herunter

Der Spielstand eines The Front Servers ist keine einzelne Datei, sondern der komplette Ordner `GameStates`. Darin liegen die Welt, alle Bauwerke, die Spielerdaten und die Gildendaten.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. The Front speichert im laufenden Betrieb regelmäßig – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /TheFrontManager/<Konfigurationsname>/Saved/
   ```

   :::: info Welcher Konfigurationsname?
   Der Ordner trägt den Konfigurationsnamen deines Servers – denselben Namen, der auch in der Konfigurationsdatei `ServerConfig_<Konfigurationsname>.ini` steckt. Öffne einfach den Ordner `/TheFrontManager/` – in der Regel liegt dort genau ein Unterordner, und das ist deiner.

   Findest du den Ordner `TheFrontManager` nicht, arbeitet dein Server ohne eigenes Benutzerverzeichnis. Der Spielstand liegt dann hier:

   ```
   /ProjectWar/Saved/
   ```
   ::::

4. <b>GameStates herunterladen</b><br>
   Lade den kompletten Ordner `GameStates` mit allen Unterordnern und Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Ein Spielstand ist immer der vollständige Ordner `GameStates`. Lade ihn stets komplett herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: info Was steckt im Ordner GameStates?
| Eintrag | Inhalt |
|---------|--------|
| `Worlds/` | Die Welt deines Servers |
| `Players/` | Die Spielerdaten |
| `DeletedPlayers/` | Gelöschte Spielerdaten |
| `Accounts/Accounts.csv` | Die Accounts auf deinem Server |
| `Accounts/NickNames.csv` | Die vergebenen Spielernamen |
| `Accounts/GM.csv` | Admins und Banns |
| `ConstructData.sav` | Alle gebauten Objekte |
| `GuildData.sav` | Die Gilden auf deinem Server |
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich die Konfigurationsdatei herunter:

```
/TheFrontManager/ServerConfig_<Konfigurationsname>.ini
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
