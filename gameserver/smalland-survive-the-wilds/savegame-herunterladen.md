---
description: Savegame von einem Smalland Survive the Wilds Server herunterladen
---

# So lädst du das Savegame deines Smalland Survive the Wilds Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Der Server schreibt im laufenden Betrieb in die Weltdatei – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade den **kompletten Ordner** `Worlds` auf deinen PC herunter. Darin liegt für jede Welt eine Datei `<Weltname>.wld`.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welche Datei ist die richtige?
Welche Welt dein Server lädt, steuert der **Weltname** in der **Verwaltung**. Steht dort `MeineWelt`, ist `MeineWelt.wld` dein aktueller Spielstand. Lade im Zweifel einfach den ganzen Ordner herunter.
::::

:::: info Hinweis
Charaktere liegen **nicht** auf dem Server, sondern lokal auf dem PC des jeweiligen Spielers. Über den Server sicherst du nur die Weltdaten wie Gelände, Bauwerke und gezähmte Kreaturen. Jeder Spieler sichert seinen Charakter selbst, indem er den folgenden Ordner auf seinem PC kopiert:

```
%LOCALAPPDATA%\SMALLAND\Saved\SaveGames\
```
::::

:::: info Einstellungen
Eine Konfigurationsdatei musst du nicht mitsichern. Smalland Survive the Wilds hat keine – alle Servereinstellungen werden in der **Verwaltung** gesetzt und beim Start an den Server übergeben.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
