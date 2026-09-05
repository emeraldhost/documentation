---
slug: "server-abstuerze-beheben"
language: "de"
title: "So behebst Du Abstürze auf Deinem Minecraft Java Edition Server"
description: "Abstürze auf einem Minecraft Java Edition Server finden und beheben"
tags: []
date: "2026-08-20"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Abstürze beheben"
sort: 14
related: ["gameserver/minecraft/download-world", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/grant-op-rights", "gameserver/minecraft/improve-performance"]
---

Wenn Dein Minecraft Java Edition Server plötzlich abstürzt, ist das kein Grund zur Panik: Fast jeder Absturz hinterlässt Spuren in den Logs, mit denen sich die Ursache finden lässt. Diese Anleitung zeigt Dir Schritt für Schritt, wie Du den Verursacher eingrenzt und das Problem behebst.

## Absturz, Lag oder Startproblem?

Bevor Du mit der Fehlersuche beginnst, ordne kurz ein, was genau passiert:

- **Absturz (Crash)**: Der Server beendet sich plötzlich oder startet von selbst neu. Darum geht es in dieser Anleitung.
- **Lag**: Der Server läuft weiter, aber alles ruckelt und reagiert verzögert. Dann hilft Dir [Performance verbessern](/tutorials/gameserver/minecraft/improve-performance) weiter.
- **Server startet gar nicht erst**: Bricht jeder Start sofort ab, wirf einen Blick in die Konsole der Verwaltung. Häufige Ursachen sind eine noch nicht akzeptierte [Minecraft EULA](/tutorials/gameserver/minecraft/accept-minecraft-eula) oder eine Java-Version, die nicht zur Minecraft-Version passt (siehe Fehlertabelle unten).

## Die Logs lesen

Die Logs sind das wichtigste Werkzeug bei der Fehlersuche – hier steht fast immer, warum der Server abgestürzt ist.

### Wo Du die Logs findest

- **Konsole**: In der Verwaltung siehst Du die Ausgabe des Servers live. Die letzten Zeilen vor dem Absturz sind meist die entscheidenden.
- **Log-Datei**: Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server. Im Ordner `logs` liegt die Datei `latest.log` mit dem vollständigen Protokoll des letzten Starts. Ältere Logs liegen im selben Ordner als komprimierte `.log.gz`-Dateien.
- **Crash-Reports**: Bei vielen Abstürzen erzeugt der Server zusätzlich einen ausführlichen Bericht im Ordner `crash-reports` – mit Zeitstempel im Dateinamen, z.B. `crash-2026-08-20_14.30.05-server.txt`. Ist dort eine Datei mit dem Zeitpunkt Deines Absturzes, fang mit ihr an.

### Wie Du einen Crash-Report liest

Du musst keinen Java-Code verstehen, um einen Crash-Report zu nutzen:

1. **Kopf lesen**\
   Ganz oben nennt die Zeile `Description:` die Fehlerursache in Kurzform (z.B. `Ticking entity`), direkt darunter steht die eigentliche Fehlermeldung (z.B. `java.lang.OutOfMemoryError: Java heap space`).

2. **Stacktrace überfliegen**\
   Darunter folgt der sogenannte Stacktrace – viele Zeilen, die mit `at` beginnen. Sie zeigen, an welcher Stelle im Code der Fehler aufgetreten ist.

3. **Nach Plugin- und Mod-Namen suchen**\
   Taucht im Stacktrace der Name eines Deiner Plugins oder Mods auf, ist der Verursacher meist gefunden – weiter geht es im Abschnitt „Mods und Plugins als Ursache“.

### Typische Fehlermeldungen

| Fehlermeldung | Bedeutung | Lösung |
| ------------- | --------- | ------ |
| `java.lang.OutOfMemoryError: Java heap space` | Der Arbeitsspeicher des Servers ist voll. | Siehe „Wenn der RAM nicht reicht“ weiter unten. |
| `java.lang.UnsupportedClassVersionError` | Die Java-Version passt nicht zur Minecraft-Version. | Stelle die zu Deiner Minecraft-Version passende Java-Version ein – wie das geht, zeigt [Version ändern](/tutorials/gameserver/minecraft/change-version). |
| `Ticking entity` / `Ticking block entity` | Ein defektes Entity bzw. Blockentity bringt den Server beim Berechnen zum Absturz – häufig durch Mods verursacht. | Siehe „Wenn die Welt beschädigt ist“ weiter unten. |
| `Server attempted to load chunk saved with newer version` | Die Welt wurde bereits mit einer neueren Minecraft-Version geladen – ein Downgrade der Welt ist nicht möglich. | Wechsle zurück auf die neuere Version ([Version ändern](/tutorials/gameserver/minecraft/change-version)) oder stelle ein Backup von vor dem Update wieder her. |

> [!TIP]
> Wenn Du ein Support-Ticket erstellst, schicke die Datei `latest.log` bzw. den passenden Crash-Report direkt mit – so kann Dir das Team deutlich schneller helfen.

## Server-Software aktuell halten

Ältere Server-Versionen enthalten bekannte Fehler, die teils gezielt von Spielern ausgelöst werden können. Halte Deine Server-Software deshalb aktuell – über die Felder **Version** und **Build ID** in den Einstellungen der Verwaltung. Die einzelnen Schritte findest Du in [Version ändern](/tutorials/gameserver/minecraft/change-version).

> [!WARNING]
> Update nicht blind: Nach einem großen Minecraft-Update brauchen Deine Plugins und Mods oft selbst ein Update – sonst stürzt der Server gerade **wegen** des Updates ab. Prüfe vorher auf den Download-Seiten, ob alle Plugins und Mods Deine Ziel-Version unterstützen, und erstelle ein [Backup](/tutorials/gameserver/minecraft/create-backup).

## Mods und Plugins als Ursache

Fehlerhafte oder veraltete Plugins und Mods sind die häufigste Absturzursache überhaupt.

### Bekannte Probleme prüfen

Steht im Stacktrace ein Plugin- oder Mod-Name, sieh zuerst auf dessen Download-Seite nach ([Modrinth](https://modrinth.com/), [Hangar](https://hangar.papermc.io/), [CurseForge](https://www.curseforge.com/minecraft)):

- Ist das Plugin bzw. die Mod mit Deiner Minecraft-Version und Deiner Server-Software kompatibel?
- Gibt es eine neuere Version? Oft ist Dein Problem dort bereits behoben.

### Den Verursacher eingrenzen (Halbierungsverfahren)

Zeigt der Log keinen eindeutigen Verursacher, findest Du ihn durch systematisches Halbieren:

1. **Backup erstellen**\
   Erstelle zuerst ein [Backup](/tutorials/gameserver/minecraft/create-backup), damit Du jederzeit zum aktuellen Stand zurückkehren kannst.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Unterordner anlegen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) und erstelle im `plugins`- bzw. `mods`-Ordner einen Unterordner, z.B. `deaktiviert`.

4. **Die Hälfte verschieben**\
   Verschiebe die Hälfte der `.jar`-Dateien in den Unterordner – der Server lädt nur Dateien, die direkt im `plugins`- bzw. `mods`-Ordner liegen. Lösche nichts!

5. **Server starten und testen**\
   Starte den Server und prüfe, ob der Absturz weiterhin auftritt.

6. **Weiter halbieren**\
   Stürzt der Server weiter ab, steckt der Verursacher in der aktiven Hälfte – verschiebe davon erneut die Hälfte in den Unterordner. Läuft der Server stabil, steckt der Verursacher im Unterordner – hole die Hälfte davon zurück. Wiederhole das, bis nur noch eine Datei als Verursacher übrig ist.

7. **Verursacher beheben**\
   Aktualisiere das gefundene Plugin bzw. die Mod – oder entferne es dauerhaft, wenn es kein Update gibt. Verschiebe anschließend alle übrigen Dateien zurück.

> [!WARNING]
> Bei Mod-Servern hängt die Welt oft an den Mods: Entfernst Du eine Mod, deren Blöcke oder Items in der Welt verbaut sind, verschwinden diese Inhalte – das kann die Welt dauerhaft beschädigen. Teste das Halbierungsverfahren deshalb nur mit einem aktuellen [Backup](/tutorials/gameserver/minecraft/create-backup) in der Hinterhand.

## Wenn der RAM nicht reicht

Zeigt der Crash-Report `java.lang.OutOfMemoryError` oder stürzt der Server vor allem dann ab, wenn viele Spieler online sind oder viele Mods geladen werden, geht dem Server der Arbeitsspeicher aus:

- Entferne Plugins und Mods, die Du nicht wirklich brauchst – jedes einzelne kostet RAM.
- Senke die View-Distance und optimiere die Konfiguration – die wirksamsten Stellschrauben zeigt [Performance verbessern](/tutorials/gameserver/minecraft/improve-performance).
- Reicht das nicht, benötigen Deine Spieler, Plugins und Mods schlicht mehr Arbeitsspeicher – in diesem Fall solltest Du Deinen Server upgraden mit mehr RAM.

## Wenn die Welt beschädigt ist

Manchmal liegt die Ursache in der Welt selbst – etwa nach einem Absturz während des Speicherns oder durch ein defektes Entity.

### Ticking-Entity-Abstürze gezielt beheben

Bei einem `Ticking entity`-Absturz nennt der Crash-Report im Abschnitt `Entity being ticked` den Entity-Typ und die genauen Koordinaten. Nach einem Neustart läuft der Server oft zunächst wieder – entferne das defekte Entity dann möglichst schnell über die Konsole:

```text
kill @e[type=minecraft:villager,x=123,y=64,z=-45,distance=..3]
```

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

Ersetze dabei Typ und Koordinaten durch die Werte aus Deinem Crash-Report. Stürzt der Server sofort wieder ab, bleibt die Wiederherstellung eines Backups der sicherste Weg.

### Backup wiederherstellen

Der zuverlässigste Weg bei einer beschädigten Welt: Stelle ein Backup von einem Zeitpunkt vor dem ersten Absturz wieder her. Wie das Erstellen und Wiederherstellen funktioniert, zeigt [Backup erstellen](/tutorials/gameserver/minecraft/create-backup).

### Neue Welt als letzter Ausweg

Hilft auch kein Backup, bleibt als letzter Ausweg eine neue Welt – die einzelnen Schritte findest Du in [Welt löschen](/tutorials/gameserver/minecraft/delete-world).

> [!IMPORTANT]
> Beim Löschen der Welt gehen alle Bauwerke, Inventare und Fortschritte unwiderruflich verloren. Erstelle vorher ein [Backup](/tutorials/gameserver/minecraft/create-backup), falls Du die alte Welt später doch noch benötigst.

## Wenn nichts hilft

Du hast die Logs geprüft, Plugins und Mods eingegrenzt und die Welt ausgeschlossen – und der Server stürzt weiterhin ab? Dann erstelle ein Support-Ticket und schicke die Datei `latest.log` sowie den aktuellsten Crash-Report aus dem Ordner `crash-reports` mit. So kann sich das Team den Absturz direkt ansehen.
