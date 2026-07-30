---
description: Savegame von einem Kerbal Space Program Server herunterladen
---

# So lädst du das Savegame deines Kerbal Space Program Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen. Der komplette Spielstand liegt im Ordner `Universe` im Hauptverzeichnis deines Servers.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. DarkMultiPlayer schreibt im laufenden Betrieb ständig Schiffs- und Spielerdaten – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in das Hauptverzeichnis deines Servers. Dort liegt der Ordner:

   ```
   /Universe/
   ```

4. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner `Universe` mit allen Unterordnern auf deinen PC herunter. Einzelne Dateien reichen nicht – Schiffe, Kerbals und der Fortschritt der Spieler liegen in verschiedenen Unterordnern.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Der Ordner besteht ausschließlich aus Textdateien: `Vessels` enthält je Schiff eine Datei, `Kerbals` je Kerbal eine Datei, `Scenarios` je Spieler einen eigenen Unterordner mit Wissenschaft, Geld, Ruf und Forschungsbaum.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich diesen Ordner herunter:

```
/Config/
```

Dort liegen unter anderem `Settings.txt`, `admins.txt`, `mod-control.txt` sowie die Bann-Listen.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
