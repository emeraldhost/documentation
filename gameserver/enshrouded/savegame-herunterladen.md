---
description: Savegame von einem Enshrouded Server herunterladen
---

# So lädst du das Savegame deines Enshrouded Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig — du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in den Speicherordner `savegame`.

4. <b>Dateien herunterladen</b><br>
   Lade beide Dateien deiner Welt auf deinen PC herunter: `3ad85aea` und `3ad85aea_info`. Nur zusammen ergeben sie einen vollständigen Spielstand — lade also niemals nur eine der beiden Dateien.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Den richtigen Ordner finden
Standardmäßig liegt der Spielstand im Ordner `savegame`. Falls du den Standardordner in den Server-Einstellungen geändert hast, wechsle stattdessen in den von dir gewählten Ordner für die Speicherungen.
::::

:::: tip Welt lokal weiterspielen
Möchtest du die heruntergeladene Welt im Einzelspieler weiterspielen, benenne die Dateien wieder auf die Namen deiner lokalen Welt um (also `3ad85aea` in z.B. `3bd85c7d` und `3ad85aea_info` in `3bd85c7d_info`) und lege sie im Steam `userdata` Ordner ab: `C:\Program Files (x86)\Steam\userdata\[DeineSteamID]\1203620\remote`. Ersetze `[DeineSteamID]` mit deiner SteamID64.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
