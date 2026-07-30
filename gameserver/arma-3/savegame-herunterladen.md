---
description: Savegame von einem Arma 3 Server herunterladen
---

# So lädst du das Savegame deines Arma 3 Servers herunter

Läuft auf deinem Server eine persistente Mission wie Antistasi, Vindicta, KP Liberation oder Wasteland, kannst du deren Fortschritt jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: info Kein Savegame vorhanden?
Ein Arma-3-Server speichert von sich aus keinen Weltstand. Gespeichert wird nur, wenn die Mission das selbst übernimmt. Läuft bei dir eine Vanilla-Mission, existiert keine Spielstandsdatei.
::::

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei herunterlädst. Persistente Missionen speichern im laufenden Betrieb – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Profilverzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis. Der Ordner darin trägt den Profilnamen deines Servers:

   ```
   /serverprofile/home/
   ```

4. <b>Datei herunterladen</b><br>
   Lade aus dem Profilordner die Datei mit der Endung `.vars.Arma3Profile` auf deinen PC herunter:

   ```
   /serverprofile/home/<Profilname>/<Profilname>.vars.Arma3Profile
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Mission mitsichern
Ein Spielstand ist ohne die passende Mission nutzlos. Lade deshalb zusätzlich die verwendete `.pbo`-Datei aus dem Ordner `/mpmissions` herunter.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich die Datei `/server.cfg` herunter.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md). Beachte dabei, dass die Datei zum Profilnamen des Zielservers passen muss.
::::

:::: info Regelmäßige Sicherungen
Für vollständige Sicherungen deines Servers kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
