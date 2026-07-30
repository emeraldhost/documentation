---
description: Savegame von einem StarRupture Server herunterladen
---

# So lädst du das Savegame deines StarRupture Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. StarRupture speichert im laufenden Betrieb in regelmäßigen Abständen automatisch – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /StarRupture/Saved/SaveGames/
   ```

   Öffne dort den Ordner mit dem Namen deiner Session. Welche Session dein Server verwendet, steht im Wert `SessionName` in der Datei `/DSSettings.txt`.

4. <b>Dateien herunterladen</b><br>
   Lade beide Dateien des Spielstands auf deinen PC herunter:

   ```
   AutoSave0.sav
   AutoSave0.met
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Die beiden Dateien gehören zusammen: In der `.sav` steckt der eigentliche Spielstand mit Welt, Basis und Fortschritt, die `.met` enthält die zugehörigen Metadaten. Sichere sie deshalb immer gemeinsam – ohne die `.met` lässt sich der Spielstand später nicht laden.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei aus dem Hauptverzeichnis herunter:

```
/DSSettings.txt
```

Darin stehen unter anderem `SessionName`, `SaveGameName` und das Speicherintervall.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
