---
description: Savegame von einem Nightingale Server herunterladen
---

# So lädst du das Savegame deines Nightingale Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Nightingale schreibt im laufenden Betrieb ständig in die Welt- und Charakterdaten – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

## Wo der Spielstand liegt

Der komplette Spielstand steckt im Ordner `Offline`. Darin liegen die Realms und die Charaktere getrennt voneinander:

| Verzeichnis | Inhalt |
|-------------|--------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | Die Realms deines Servers, also alle Welten samt Bauten |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | Die Charakterdaten eines Spielers. `<PlatformID>` ist die Steam- bzw. Epic-ID des jeweiligen Spielers – pro Spieler gibt es einen eigenen Ordner. |

:::: info Hinweis
Es gibt bei Nightingale **keinen Welt- oder Spielstandnamen**, den du irgendwo einträgst. Der Server lädt immer das, was in diesen Ordnern liegt.
::::

## Savegame herunterladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /NWX/Saved/
   ```

4. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner `Offline` mit allen Unterordnern auf deinen PC herunter:

   ```
   /NWX/Saved/Offline/
   ```

   :::: tip Tipp
   Lade Realms und Charaktere immer gemeinsam herunter. Ein Realm ohne den zugehörigen Charakter ist später nur eingeschränkt nutzbar.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Serverzustand mitsichern
Möchtest du auch den Serverzustand sichern – darunter die Liste der gebannten Spieler – lade zusätzlich diesen Ordner herunter:

```
/NWX/Saved/Config/
```
::::

:::: tip Konfiguration mitsichern
Die Servereinstellungen liegen in folgender Datei:

```
/NWX/Config/ServerSettings.ini
```

Beachte: Admin-Passwort, Server-Passwort und Schwierigkeit werden beim Serverstart aus der **Verwaltung** in diese Datei geschrieben. Zum Wiederherstellen dieser Werte brauchst du die Datei also nicht.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
