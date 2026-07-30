---
description: Savegame von einem CryoFall Server herunterladen
---

# So lädst du das Savegame deines CryoFall Servers herunter

Die komplette Welt deines CryoFall Servers liegt im Ordner `/Data/Saves/`. Du kannst ihn jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um die Welt auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. CryoFall speichert die Welt im laufenden Betrieb regelmäßig automatisch – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Data/
   ```

4. <b>Savegame herunterladen</b><br>
   Lade den kompletten Ordner `Saves` mit seinem gesamten Inhalt auf deinen PC herunter:

   ```
   /Data/Saves/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Lade immer den **kompletten Ordner** herunter und picke keine einzelnen Dateien heraus. In `Saves` liegen die Weltdaten deines Servers zusammen mit den vom Server angelegten Speicherständen – nur gemeinsam ergeben sie einen ladbaren Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Dateien aus dem Ordner `/Data/` herunter:

```
SettingsServer.xml
ModsConfig.xml
ServerRates.config
```

Dort stehen unter anderem deine Operatoren, die Zugriffslisten und die Spielraten.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
