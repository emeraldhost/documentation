---
description: Savegame von einem Terraria Server herunterladen
---

# So lädst du das Savegame deines Terraria Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei herunterlädst. Während der Server läuft, speichert er in regelmäßigen Abständen — du würdest sonst eine unvollständige oder beschädigte Welt herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /saves/Worlds/
   ```

4. <b>Welt herunterladen</b><br>
   Lade die `.wld`-Datei deiner Welt auf deinen PC herunter. Die komplette Welt steckt in dieser einen Datei.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Welche Datei ist die richtige?
Welche Welt geladen wird, erkennst du am Feld **World Name** in den **Einstellungen** der Verwaltung. Steht dort z.B. `MeineWelt`, benötigst du die Datei `MeineWelt.wld`.
::::

:::: info Sicherungsdateien
Der Server legt zusätzlich Sicherungen mit der Endung `.bak` im selben Ordner ab. Sie gehören zu deiner Welt und enthalten einen etwas älteren Stand. Lade sie bei Bedarf mit herunter, wenn du eine vollständige Kopie deines Weltordners haben möchtest.
::::

:::: tip Welt lokal weiterspielen
Kopiere die heruntergeladene `.wld`-Datei auf deinem PC nach `%userprofile%\Documents\My Games\Terraria\Worlds`, um die Welt im Einzelspieler zu öffnen.
::::

:::: tip Welt wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
