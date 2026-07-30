---
description: Savegame von einem Eco Server herunterladen
---

# So lädst du das Savegame deines Eco Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Eco schreibt im laufenden Betrieb regelmäßig in den Spielstand – du würdest sonst einen unvollständigen Stand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Storage/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade beide Dateien auf deinen PC herunter:

   ```
   Game.db
   Game.eco
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: danger Wichtig
`Game.db` und `Game.eco` gehören zusammen und verweisen aufeinander. Sichere sie deshalb immer gemeinsam – eine einzelne Datei lässt sich nicht laden.
::::

## Was liegt sonst noch im Storage-Ordner?

| Datei bzw. Ordner | Inhalt |
|-------------------|--------|
| `Game.db` | Datenbank mit der Welt und allen Objekten |
| `Game.eco` | Zustand der Welt, unter anderem Spieler, Wirtschaft und Gesetze |
| `Backup/` | Automatische Sicherungen, die der Server selbst anlegt und rollierend überschreibt |

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:

```
/Configs/
```

Dort liegen unter anderem `Network.eco`, `Users.eco` und `Storage.eco`.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
