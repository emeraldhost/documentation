---
description: Savegame von einem The Lord of the Rings Return to Moria Server herunterladen
---

# So lädst du das Savegame deines The Lord of the Rings Return to Moria Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei herunterlädst. Solange der Server läuft, schreibt er laufend in die Welt – ein Download währenddessen kann einen unvollständigen Spielstand ergeben.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Der Server speichert dabei und beendet sich sauber.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Moria/Saved/SaveGamesDedicated/
   ```

4. <b>Weltdatei herunterladen</b><br>
   Lade die gewünschte `MW_*.sav`-Datei auf deinen PC herunter. Jede Welt deines Servers ist genau eine solche Datei.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welche Datei ist die richtige?
Welche Welt dein Server verwendet, steht im Abschnitt `[World]` der Datei `MoriaServerConfig.ini` im Hauptverzeichnis: als Dateiname bei `OptionalWorldFilename` oder – falls dort nichts eingetragen ist – über den Weltnamen bei `Name`.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich diese Dateien aus dem Hauptverzeichnis herunter:

```
MoriaServerConfig.ini
MoriaServerPermissions.txt
MoriaServerRules.txt
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für vollständige Sicherungen deines Servers kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
