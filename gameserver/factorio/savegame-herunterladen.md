---
description: Savegame von einem Factorio Server herunterladen
---

# So lädst du das Savegame deines Factorio Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Fabrik oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei herunterlädst. Während der Server läuft, speichert er in regelmäßigen Abständen — du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /saves/
   ```

4. <b>Spielstand herunterladen</b><br>
   Lade die `.zip`-Datei deines Spielstands auf deinen PC herunter. Der komplette Spielstand steckt in dieser einen Datei.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Welche Datei ist die richtige?
Welcher Spielstand geladen wird, erkennst du am Feld **Save Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `gamesave`, benötigst du die Datei `gamesave.zip`.
::::

:::: info Autosaves
Die automatischen Zwischenspeicherungen liegen im selben Ordner und heißen `_autosave1.zip`, `_autosave2.zip` und so weiter. Sie eignen sich, um zu einem etwas älteren Stand zurückzukehren.
::::

:::: tip Spielstand lokal weiterspielen
Kopiere die heruntergeladene `.zip`-Datei auf deinem PC nach `%appdata%\Factorio\saves`, um die Fabrik im Einzelspieler zu öffnen.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
