---
description: Welt eines RuneScape Dragonwilds Servers zurücksetzen
---

# So setzt du die Welt deines RuneScape: Dragonwilds Servers zurück

In der Verwaltung gibt es keinen Knopf zum Zurücksetzen der Welt. Beim Start lädt der Server immer die neueste `.sav`-Datei aus dem Ordner `RSDragonwilds/Saved/SaveGames`. Findet er dort keine, legt er automatisch eine neue Standard-Welt an. Eine frische Welt bekommst du also, indem du diesen Ordner leerst.

:::: danger Wichtig
Beim Zurücksetzen ist deine bisherige Welt unwiederbringlich weg: alle Gebäude und platzierten Objekte und damit der gesamte Fortschritt in dieser Welt. Es gibt keine Rückgängig-Funktion. Erstelle deshalb **zuerst** ein Backup — ohne Sicherung kommst du an deinen alten Stand nie wieder heran.
::::

## Welt zurücksetzen

1. <b>Backup erstellen</b><br>
   Sichere deine aktuelle Welt, bevor du irgendetwas löschst: [Backup erstellen](backup-erstellen.md). Zusätzlich kannst du die `.sav`-Datei auf deinen PC herunterladen: [Savegame herunterladen](savegame-herunterladen.md).

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Ein laufender Server schreibt weiter in seine Speicherdatei — lösche die Dateien deshalb niemals im laufenden Betrieb.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne folgendes Verzeichnis:

   ```
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Spielstände löschen</b><br>
   Lösche alle Dateien in diesem Verzeichnis. Den Ordner `SaveGames` selbst lässt du stehen — lösche nur seinen Inhalt.

5. <b>Welt-Namen festlegen</b><br>
   Optional: Öffne die **Einstellungen** in der Verwaltung und trage im Feld **Server Name** den Namen ein, den die neue Welt bekommen soll. Lässt du das Feld unverändert, bekommt die neue Welt den Namen, der dort aktuell eingetragen ist.

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Beim Hochfahren legt er eine neue Standard-Welt mit diesem Namen an.

:::: warning Achtung
Lösche wirklich nur den Inhalt des Ordners `SaveGames`. Die Datei `DedicatedServer.ini` unter `RSDragonwilds/Saved/Config/LinuxServer/` enthält deine Serverkonfiguration — darunter Owner ID, Server-Passwort und Admin-Passwort. Lass sie unangetastet.
::::

## Was weg ist und was bleibt

| Weg | Bleibt |
|-----|--------|
| Die Welt mit allen Gebäuden und platzierten Objekten | Owner ID, Server-Passwort und Admin-Passwort |
| Der gesamte Fortschritt in dieser Welt | Die übrige Konfiguration in der `DedicatedServer.ini` |
| Alles, was du vorher nicht gesichert hast | Deine zuvor erstellten Backups und heruntergeladenen Savegames |

:::: tip Eigene Einstellungen für die neue Welt
Der Server erzeugt immer eine Welt mit Standard-Einstellungen. Soll die neue Welt mit eigenen Regeln laufen, erstelle sie lokal im Spiel und lade sie hoch: [Custom Welt erstellen](custom-welt-erstellen.md).
::::

## Andere Welt laden

Liegen mehrere `.sav`-Dateien im Ordner `SaveGames`, lädt der Server immer die **neueste** davon — das Feld **Server Name** allein reicht nicht, um zwischen vorhandenen Welten zu wechseln. Die gewünschte Welt muss allein im Ordner liegen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne das Verzeichnis `/RSDragonwilds/Saved/SaveGames/`.

3. <b>Andere Welten aus dem Ordner entfernen</b><br>
   Lade alle `.sav`-Dateien, die nicht geladen werden sollen, auf deinen PC herunter und lösche sie anschließend aus dem Ordner. Am Ende liegt nur noch die `.sav`-Datei der gewünschten Welt darin.

4. <b>Welt-Namen eintragen</b><br>
   Öffne die **Einstellungen** in der Verwaltung und trage im Feld **Server Name** den Dateinamen dieser Welt ohne die Endung `.sav` ein. So stimmt der Welt-Name in der Verwaltung mit der geladenen Welt überein.

5. <b>Server starten</b><br>
   Starte deinen Server. Er lädt nun die verbliebene Welt.

:::: warning Achtung
Benenne `.sav`-Dateien niemals um. Startet der Server mit einer umbenannten Datei, geht der darin gespeicherte Fortschritt verloren. Behalte immer den ursprünglichen Dateinamen bei.
::::

:::: tip Alte Welt zurückholen
Hast du vor dem Löschen ein Backup erstellt, stellst du es über die Verwaltung wieder her: [Backup erstellen](backup-erstellen.md). Hast du die `.sav`-Datei stattdessen auf deinen PC heruntergeladen, lädst du sie per SFTP wieder hoch: [Savegame hinzufügen](savegame-hinzufuegen.md).
::::
