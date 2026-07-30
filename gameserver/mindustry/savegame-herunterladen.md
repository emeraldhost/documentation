---
description: Savegame von einem Mindustry Server herunterladen
---

# So lädst du das Savegame deines Mindustry Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen. Ein Spielstand ist dabei immer genau eine Datei mit der Endung `.msav`.

## Aktuellen Stand speichern

Der Server schreibt die laufende Partie nicht dauerhaft auf die Festplatte. Sichere sie deshalb zuerst über die **Konsole** deiner Verwaltung:

1. <b>Konsole öffnen</b><br>
   Öffne in der Verwaltung die **Konsole** deines Servers.

2. <b>Spielstand speichern</b><br>
   Gib den folgenden Befehl ein und wähle einen kurzen Namen ohne Leerzeichen:

   ```
   save meinewelt
   ```

   Der Server bestätigt die Sicherung und legt die Datei unter `/config/saves/meinewelt.msav` ab.

## Datei herunterladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung, damit während des Downloads nicht in die Datei geschrieben wird.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /config/saves/
   ```

4. <b>Spielstand herunterladen</b><br>
   Lade die gewünschte `.msav`-Datei auf deinen PC herunter:

   ```
   meinewelt.msav
   ```

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Welche Spielstände auf deinem Server liegen, zeigt dir in der Konsole der Befehl `saves`. Er listet alle Slots ohne die Endung `.msav` auf.
::::

:::: tip Auto-Saves
Hast du automatische Speicherungen aktiviert, findest du im selben Ordner zusätzlich Dateien mit dem Präfix `auto_`, zum Beispiel `auto_Ground_Zero_....msav`. Auch diese kannst du herunterladen und später wieder laden.
::::

:::: tip Einstellungen und Karten mitsichern
Möchtest du mehr als nur den Spielstand sichern, lade zusätzlich folgende Dateien herunter:

| Pfad | Inhalt |
|------|--------|
| `/config/settings.bin` | Alle Servereinstellungen sowie Admin- und Bannliste |
| `/config/maps/` | Deine eigenen Karten |
| `/config/mods/` | Installierte Mods und Plugins |
::::

:::: warning Achtung
`settings.bin` ist eine Binärdatei. Sichere sie, aber bearbeite sie nicht mit einem Texteditor – dabei gehen Admins, Banns und Einstellungen verloren.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
