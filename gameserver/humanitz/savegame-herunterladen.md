---
description: Savegame von einem HumanitZ Server herunterladen
---

# So lädst du das Savegame deines HumanitZ Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. HumanitZ speichert im laufenden Betrieb automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

:::: info Projektordner
Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei dir vorhanden ist, und passe die Pfade entsprechend an.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /HumanitZServer/Saved/SaveGames/SaveList/
   ```

4. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner `Default` mit allen enthaltenen Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

## Welche Dateien gehören zum Spielstand?

| Datei | Inhalt |
|-------|--------|
| `Save_<Name>.sav` | Der eigentliche Spielstand mit Welt, Basen, Fahrzeugen und Spielerdaten. Standardmäßig heißt die Datei `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | Die Clan- bzw. Gruppendaten deines Servers |

:::: warning Achtung
Lade immer den kompletten Ordner `Default` herunter. Fehlt `Save_ClanData.sav`, gehen beim Wiedereinspielen die Clan-Daten verloren.
::::

:::: info Welcher Name ist der richtige?
Wie deine Spielstandsdatei heißt, bestimmt der Wert `SaveName` im Abschnitt `[Host Settings]` der Datei `/HumanitZServer/GameServerSettings.ini`. Steht dort `SaveName="DedicatedSaveMP"`, ist `Save_DedicatedSaveMP.sav` dein aktueller Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Dateien herunter:

```
/HumanitZServer/GameServerSettings.ini
/HumanitZServer/F_BannedPlayers.txt
/HumanitZServer/F_MVPAccess.txt
```

Die beiden Textdateien sind nur vorhanden, wenn du Banns bzw. eine Whitelist eingerichtet hast.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
