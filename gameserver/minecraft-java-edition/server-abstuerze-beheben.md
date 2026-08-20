---
description: Abstürze auf einem Minecraft Java Edition Server finden und beheben
---

# So behebst du Abstürze auf deinem Minecraft Java Edition Server

Wenn dein Minecraft Java Edition Server plötzlich abstürzt, ist das kein Grund zur Panik: Fast jeder Absturz hinterlässt Spuren in den Logs, mit denen sich die Ursache finden lässt. Diese Anleitung zeigt dir Schritt für Schritt, wie du den Verursacher eingrenzt und das Problem behebst.

## Absturz, Lag oder Startproblem?

Bevor du mit der Fehlersuche beginnst, ordne kurz ein, was genau passiert:

- **Absturz (Crash)**: Der Server beendet sich plötzlich oder startet von selbst neu. Darum geht es in dieser Anleitung.
- **Lag**: Der Server läuft weiter, aber alles ruckelt und reagiert verzögert. Dann hilft dir [Performance verbessern](performance-verbessern.md) weiter.
- **Server startet gar nicht erst**: Bricht jeder Start sofort ab, wirf einen Blick in die Konsole der Verwaltung. Häufige Ursachen sind eine noch nicht akzeptierte [Minecraft EULA](minecraft-eula-akzeptieren.md) oder eine Java-Version, die nicht zur Minecraft-Version passt (siehe Fehlertabelle unten).

## Die Logs lesen

Die Logs sind das wichtigste Werkzeug bei der Fehlersuche — hier steht fast immer, warum der Server abgestürzt ist.

### Wo du die Logs findest

- **Konsole**: In der Verwaltung siehst du die Ausgabe des Servers live. Die letzten Zeilen vor dem Absturz sind meist die entscheidenden.
- **Log-Datei**: Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server. Im Ordner `logs` liegt die Datei `latest.log` mit dem vollständigen Protokoll des letzten Starts. Ältere Logs liegen im selben Ordner als komprimierte `.log.gz`-Dateien.
- **Crash-Reports**: Bei vielen Abstürzen erzeugt der Server zusätzlich einen ausführlichen Bericht im Ordner `crash-reports` — mit Zeitstempel im Dateinamen, z.B. `crash-2026-08-20_14.30.05-server.txt`. Ist dort eine Datei mit dem Zeitpunkt deines Absturzes, fang mit ihr an.

### Wie du einen Crash-Report liest

Du musst keinen Java-Code verstehen, um einen Crash-Report zu nutzen:

1. <b>Kopf lesen</b><br>
   Ganz oben nennt die Zeile `Description:` die Fehlerursache in Kurzform (z.B. `Ticking entity`), direkt darunter steht die eigentliche Fehlermeldung (z.B. `java.lang.OutOfMemoryError: Java heap space`).

2. <b>Stacktrace überfliegen</b><br>
   Darunter folgt der sogenannte Stacktrace — viele Zeilen, die mit `at` beginnen. Sie zeigen, an welcher Stelle im Code der Fehler aufgetreten ist.

3. <b>Nach Plugin- und Mod-Namen suchen</b><br>
   Taucht im Stacktrace der Name eines deiner Plugins oder Mods auf, ist der Verursacher meist gefunden — weiter geht es im Abschnitt "Mods und Plugins als Ursache".

### Typische Fehlermeldungen

| Fehlermeldung | Bedeutung | Lösung |
| ------------- | --------- | ------ |
| `java.lang.OutOfMemoryError: Java heap space` | Der Arbeitsspeicher des Servers ist voll. | Siehe "Wenn der RAM nicht reicht" weiter unten. |
| `java.lang.UnsupportedClassVersionError` | Die Java-Version passt nicht zur Minecraft-Version. | Stelle die zu deiner Minecraft-Version passende Java-Version ein — wie das geht, zeigt [Version ändern](version-aendern.md). |
| `Ticking entity` / `Ticking block entity` | Ein defektes Entity bzw. Blockentity bringt den Server beim Berechnen zum Absturz — häufig durch Mods verursacht. | Siehe "Wenn die Welt beschädigt ist" weiter unten. |
| `Server attempted to load chunk saved with newer version` | Die Welt wurde bereits mit einer neueren Minecraft-Version geladen — ein Downgrade der Welt ist nicht möglich. | Wechsle zurück auf die neuere Version ([Version ändern](version-aendern.md)) oder stelle ein Backup von vor dem Update wieder her. |

:::: tip Tipp
Wenn du ein Support-Ticket erstellst, schicke die Datei `latest.log` bzw. den passenden Crash-Report direkt mit — so kann dir das Team deutlich schneller helfen.
::::

## Server-Software aktuell halten

Ältere Server-Versionen enthalten bekannte Fehler, die teils gezielt von Spielern ausgelöst werden können. Halte deine Server-Software deshalb aktuell — über die Felder **Version** und **Build ID** in den Einstellungen der Verwaltung. Die einzelnen Schritte findest du in [Version ändern](version-aendern.md).

:::: warning Achtung
Update nicht blind: Nach einem großen Minecraft-Update brauchen deine Plugins und Mods oft selbst ein Update — sonst stürzt der Server gerade **wegen** des Updates ab. Prüfe vorher auf den Download-Seiten, ob alle Plugins und Mods deine Ziel-Version unterstützen, und erstelle ein [Backup](backup-erstellen.md).
::::

## Mods und Plugins als Ursache

Fehlerhafte oder veraltete Plugins und Mods sind die häufigste Absturzursache überhaupt.

### Bekannte Probleme prüfen

Steht im Stacktrace ein Plugin- oder Mod-Name, sieh zuerst auf dessen Download-Seite nach ([Modrinth](https://modrinth.com/), [Hangar](https://hangar.papermc.io/), [CurseForge](https://www.curseforge.com/minecraft)):

- Ist das Plugin bzw. die Mod mit deiner Minecraft-Version und deiner Server-Software kompatibel?
- Gibt es eine neuere Version? Oft ist dein Problem dort bereits behoben.

### Den Verursacher eingrenzen (Halbierungsverfahren)

Zeigt der Log keinen eindeutigen Verursacher, findest du ihn durch systematisches Halbieren:

1. <b>Backup erstellen</b><br>
   Erstelle zuerst ein [Backup](backup-erstellen.md), damit du jederzeit zum aktuellen Stand zurückkehren kannst.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Unterordner anlegen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) und erstelle im `plugins`- bzw. `mods`-Ordner einen Unterordner, z.B. `deaktiviert`.

4. <b>Die Hälfte verschieben</b><br>
   Verschiebe die Hälfte der `.jar`-Dateien in den Unterordner — der Server lädt nur Dateien, die direkt im `plugins`- bzw. `mods`-Ordner liegen. Lösche nichts!

5. <b>Server starten und testen</b><br>
   Starte den Server und prüfe, ob der Absturz weiterhin auftritt.

6. <b>Weiter halbieren</b><br>
   Stürzt der Server weiter ab, steckt der Verursacher in der aktiven Hälfte — verschiebe davon erneut die Hälfte in den Unterordner. Läuft der Server stabil, steckt der Verursacher im Unterordner — hole die Hälfte davon zurück. Wiederhole das, bis nur noch eine Datei als Verursacher übrig ist.

7. <b>Verursacher beheben</b><br>
   Aktualisiere das gefundene Plugin bzw. die Mod — oder entferne es dauerhaft, wenn es kein Update gibt. Verschiebe anschließend alle übrigen Dateien zurück.

:::: warning Achtung
Bei Mod-Servern hängt die Welt oft an den Mods: Entfernst du eine Mod, deren Blöcke oder Items in der Welt verbaut sind, verschwinden diese Inhalte — das kann die Welt dauerhaft beschädigen. Teste das Halbierungsverfahren deshalb nur mit einem aktuellen [Backup](backup-erstellen.md) in der Hinterhand.
::::

## Wenn der RAM nicht reicht

Zeigt der Crash-Report `java.lang.OutOfMemoryError` oder stürzt der Server vor allem dann ab, wenn viele Spieler online sind oder viele Mods geladen werden, geht dem Server der Arbeitsspeicher aus:

- Entferne Plugins und Mods, die du nicht wirklich brauchst — jedes einzelne kostet RAM.
- Senke die View-Distance und optimiere die Konfiguration — die wirksamsten Stellschrauben zeigt [Performance verbessern](performance-verbessern.md).
- Reicht das nicht, benötigen deine Spieler, Plugins und Mods schlicht mehr Arbeitsspeicher — in diesem Fall solltest du deinen Server upgraden mit mehr RAM.

## Wenn die Welt beschädigt ist

Manchmal liegt die Ursache in der Welt selbst — etwa nach einem Absturz während des Speicherns oder durch ein defektes Entity.

### Ticking-Entity-Abstürze gezielt beheben

Bei einem `Ticking entity`-Absturz nennt der Crash-Report im Abschnitt `Entity being ticked` den Entity-Typ und die genauen Koordinaten. Nach einem Neustart läuft der Server oft zunächst wieder — entferne das defekte Entity dann möglichst schnell über die Konsole:

```
kill @e[type=minecraft:villager,x=123,y=64,z=-45,distance=..3]
```

:::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
::::

Ersetze dabei Typ und Koordinaten durch die Werte aus deinem Crash-Report. Stürzt der Server sofort wieder ab, bleibt die Wiederherstellung eines Backups der sicherste Weg.

### Backup wiederherstellen

Der zuverlässigste Weg bei einer beschädigten Welt: Stelle ein Backup von einem Zeitpunkt vor dem ersten Absturz wieder her. Wie das Erstellen und Wiederherstellen funktioniert, zeigt [Backup erstellen](backup-erstellen.md).

### Neue Welt als letzter Ausweg

Hilft auch kein Backup, bleibt als letzter Ausweg eine neue Welt — die einzelnen Schritte findest du in [Welt löschen](welt-loeschen.md).

:::: danger Wichtig
Beim Löschen der Welt gehen alle Bauwerke, Inventare und Fortschritte unwiderruflich verloren. Erstelle vorher ein [Backup](backup-erstellen.md), falls du die alte Welt später doch noch benötigst.
::::

## Wenn nichts hilft

Du hast die Logs geprüft, Plugins und Mods eingegrenzt und die Welt ausgeschlossen — und der Server stürzt weiterhin ab? Dann erstelle ein Support-Ticket und schicke die Datei `latest.log` sowie den aktuellsten Crash-Report aus dem Ordner `crash-reports` mit. So kann sich das Team den Absturz direkt ansehen.
