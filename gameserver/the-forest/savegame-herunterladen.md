---
description: Savegame von einem The Forest Server herunterladen
---

# So lädst du das Savegame deines The Forest Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. The Forest speichert in regelmäßigen Abständen automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

4. <b>Slot-Ordner herunterladen</b><br>
   Lade den kompletten Ordner deines Spielstands – `Slot1` bis `Slot5` – mit allen enthaltenen Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welcher Slot ist der richtige?
Welchen Slot dein Server verwendet, steht in der Datei `/TheForestDedicatedServer_Data/forest/config/config.cfg` beim Wert `slot`. Steht dort `slot 1`, ist `Slot1` dein aktueller Spielstand.
::::

:::: warning Achtung
Ein Spielstand ist immer der komplette `Slot#`-Ordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

```
/TheForestDedicatedServer_Data/forest/config/config.cfg
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
