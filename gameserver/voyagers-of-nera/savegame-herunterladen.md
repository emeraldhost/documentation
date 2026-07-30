---
description: Savegame von einem Voyagers of Nera Server herunterladen
---

# So lädst du das Savegame deines Voyagers of Nera Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

Ein Spielstand ist bei Voyagers of Nera immer ein **kompletter Ordner**, der nach der Server-ID benannt ist. Diese ID besteht aus einer zufälligen Zeichenfolge, die dein Server beim ersten Start selbst erzeugt.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Der Server speichert in regelmäßigen Abständen automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /BoatGame/Saved/PersistedData/
   ```

4. <b>Spielstand-Ordner herunterladen</b><br>
   Lade den kompletten Ordner mit der zufälligen Zeichenfolge im Namen – deine Server-ID – mit allen enthaltenen Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welcher Ordner ist der richtige?
Neben deinem Spielstand liegt im selben Verzeichnis der Ordner `CustomConfig`. Darin stehen deine Servereinstellungen, es ist **kein** Spielstand. Der Ordner mit der zufälligen Zeichenfolge ist deine Welt.
::::

:::: warning Achtung
Ein Spielstand ist immer der komplette Ordner. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:

```
/BoatGame/Saved/PersistedData/CustomConfig/
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
