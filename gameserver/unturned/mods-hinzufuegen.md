---
description: Mods auf einem Unturned Server hinzufügen
---

# So fügst du Mods zu deinem Unturned Server hinzu

Unturned besitzt ein eigenes Download-System für den Steam Workshop: Du trägst die File IDs der gewünschten Mods und Karten in die Datei `WorkshopDownloadConfig.json` ein, und dein Server lädt sie beim Start selbstständig herunter.

:::: tip Das Beste daran
Deine Mitspieler müssen **nichts** manuell installieren und auch nichts abonnieren. Beim Verbinden lädt der Client alle Mods deines Servers automatisch herunter.
::::

## File ID herausfinden

1. <b>Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Unturned](https://steamcommunity.com/app/304930/workshop/) und suche den gewünschten Mod oder die gewünschte Karte.

2. <b>File ID kopieren</b><br>
   Die File ID findest du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   :::: tip Beispiel
   In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=2136497468` ist die File ID `2136497468`.
   ::::

## Mods zum Server hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Servers/<ServerID>/WorkshopDownloadConfig.json
   ```

   :::: info Welcher Ordner ist meiner?
   `<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter deines Servers – in der Regel liegt dort genau ein Ordner.
   ::::

4. <b>File IDs eintragen</b><br>
   Trage die IDs im Bereich `File_IDs` ein, mehrere durch Komma getrennt:

   ```json
   "File_IDs":
   [
       2136497468,
       1497352180
   ],
   ```

   :::: warning Achtung
   Ändere nur den Bereich `File_IDs` und lass die übrigen Einträge der Datei unangetastet. Hinter der letzten ID darf **kein** Komma stehen, sonst ist die Datei ungültig und dein Server startet nicht.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start werden alle eingetragenen Mods samt ihrer Abhängigkeiten heruntergeladen und aktualisiert.

## Workshop-Karte verwenden

Eine Karte aus dem Workshop braucht zwei Einträge: die File ID zum Herunterladen und den Kartennamen, damit der Server sie auch lädt.

1. <b>File ID eintragen</b><br>
   Trage die File ID der Karte wie oben beschrieben in die `WorkshopDownloadConfig.json` ein.

2. <b>Karte auswählen</b><br>
   Öffne die Datei

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   und trage den Namen der Karte ein – eine Anweisung pro Zeile:

   ```
   Map Elver
   ```

3. <b>Server starten</b><br>
   Speichere beide Dateien und starte deinen Server.

:::: danger Wichtig
Bei einem Kartenwechsel beginnt die Welt von vorn. Erstelle vorher ein [Backup](backup-erstellen.md) deines bisherigen Spielstands.
::::

### File IDs beliebter Karten

| Karte | File ID |
|-------|---------|
| Elver | `2136497468` |
| Carpat | `1497352180` |
| Hawaii | `1753134636` |
| Greece | `1702240229` |
| Arid | `2683620106` |
| Buak | `3000549606` |
| A6 Polaris | `2898548949` |
| Escalation | `3251926587` |
| France | `1975500516` |
| Ireland | `1411633953` |
| Belgium | `1727125581` |
| Kuwait | `2483365750` |
| California | `1905768396` |
| Rio de Janeiro | `3416057692` |

## Weitere Einstellungen der Datei

| Eintrag | Bedeutung |
|---------|-----------|
| `File_IDs` | Die Liste der Mods und Karten, die dein Server herunterlädt |
| `Ignore_Children_File_IDs` | Abhängigkeiten, die bewusst **nicht** mit heruntergeladen werden sollen |
| `Use_Cached_Downloads` | Bereits heruntergeladene Dateien erneut verwenden |
| `Should_Monitor_Updates` | Der Server überwacht, ob es für einen Mod ein Update gibt |
| `Shutdown_Update_Detected_Timer` | Wartezeit in Sekunden bis zum Herunterfahren nach einem erkannten Update (Standard `600`) |
| `Shutdown_Update_Detected_Message` | Nachricht, die die Spieler bei einem erkannten Update sehen |
| `Shutdown_Kick_Message` | Nachricht beim Trennen der Spieler |

:::: info Automatische Update-Überwachung
Erkennt dein Server ein Workshop-Update, warnt er die Spieler und fährt nach Ablauf des Timers herunter, damit der Mod beim nächsten Start aktualisiert wird. Startet dein Server nach einem Mod-Update also von selbst neu, ist das kein Fehler.
::::

## Mods entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Eintrag löschen</b><br>
   Entferne die File ID aus dem Bereich `File_IDs` und achte darauf, dass hinter der letzten verbleibenden ID kein Komma steht.

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Entfernst du einen Mod, verschwinden auch alle Gegenstände, Fahrzeuge und Objekte aus diesem Mod, die in deiner Welt platziert wurden. Erstelle vorher ein [Backup](backup-erstellen.md).
::::

## Häufige Probleme

:::: warning Mod wird nicht heruntergeladen
Workshop-Inhalte, die seit dem Engine-Wechsel in Version 3.28 nicht mehr aktualisiert wurden, werden vom Server nicht heruntergeladen. Prüfe auf der Workshop-Seite, wann der Mod zuletzt aktualisiert wurde, und weiche notfalls auf eine gepflegte Alternative aus.
::::

:::: danger Mods nicht von Hand hochladen
Lade Mods nicht manuell per SFTP in den `Workshop`-Ordner. Automatisch heruntergeladen werden bei deinen Mitspielern nur die Mods, die in der `WorkshopDownloadConfig.json` eingetragen sind – von Hand hochgeladene Mods fehlen den Clients und der Beitritt scheitert. Trage Mods deshalb ausschließlich in der `WorkshopDownloadConfig.json` ein.
::::
