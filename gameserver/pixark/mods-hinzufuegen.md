---
description: Mods auf einem PixARK Server hinzufügen
---

# So fügst du Mods zu deinem PixARK Server hinzu

Für PixARK gibt es einen Steam Workshop. Anders als bei ARK Survival Evolved lädt der Server die Mods aber **nicht** selbst herunter – es gibt kein Feld, in das du Mod-IDs einträgst. Du musst die Dateien selbst per SFTP auf den Server laden.

:::: danger Wichtig
Mods sind bei PixARK ein Sonderfall. Der Workshop wird seit Jahren kaum noch gepflegt, viele Einträge sind ausdrücklich als „Legacy" oder „Discontinued" markiert, und für den Serverbetrieb gibt es keine offizielle Dokumentation. Ob ein bestimmter Mod auf deinem Server läuft, lässt sich vorher nicht sagen. Erstelle deshalb **immer** vorher ein [Backup](backup-erstellen.md) und teste einen Mod nach dem anderen.
::::

## Voraussetzung

Die Mod-Dateien bekommst du nur über eine PixARK-Installation auf deinem eigenen PC: Steam lädt den Mod als Archiv herunter, entpackt wird er erst beim ersten Start des Spiels. Erst danach liegen die Dateien in einer Form vor, die du auf den Server laden kannst.

## Mod-Dateien beschaffen

1. <b>Mod abonnieren</b><br>
   Öffne den [Steam Workshop für PixARK](https://steamcommunity.com/app/593600/workshop/), suche den gewünschten Mod und abonniere ihn.

2. <b>PixARK starten</b><br>
   Starte PixARK einmal auf deinem PC und warte, bis du im Hauptmenü bist. Erst dabei entpackt das Spiel die Mod-Dateien.

3. <b>Mod-Ordner öffnen</b><br>
   Öffne auf deinem PC folgendes Verzeichnis:

   ```
   <Steam>\steamapps\common\PixARK\ShooterGame\Content\Mods
   ```

4. <b>Dateien heraussuchen</b><br>
   Zu jedem Mod gehören **zwei** Dinge:

   | Element | Beschreibung |
   |---------|--------------|
   | Ordner mit der Mod-ID | Ein Ordner, dessen Name aus der Zahlenfolge der Mod-ID besteht |
   | `<ModID>.mod` | Eine gleichnamige Datei direkt daneben |

   :::: warning Achtung
   Du brauchst beides. Lädst du nur den Ordner hoch und vergisst die `.mod`-Datei, erkennt der Server den Mod nicht.
   ::::

## Mod auf den Server laden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis. Existiert der Ordner `Mods` noch nicht, lege ihn an:

   ```
   /ShooterGame/Content/Mods/
   ```

4. <b>Dateien hochladen</b><br>
   Lade den Mod-Ordner **und** die zugehörige `.mod`-Datei in dieses Verzeichnis hoch.

5. <b>Server starten</b><br>
   Starte deinen Server. Lädt er nicht sauber durch oder stürzt er ab, entferne den Mod wieder und spiele dein Backup zurück.

## Mods aktualisieren

:::: info Hinweis
Der Server aktualisiert Mods nicht von selbst. Erscheint im Workshop eine neue Version, musst du sie auf deinem PC herunterladen, das Spiel einmal starten und die Dateien erneut auf den Server laden. Passen Server- und Client-Version eines Mods nicht zusammen, kommt es zu Fehlern beim Beitritt.
::::

:::: tip Tipp
Damit alle Mitspieler dieselben Mod-Dateien haben, sollten sie den Mod ebenfalls im Steam Workshop abonnieren und das Spiel einmal starten, bevor sie deinem Server beitreten.
::::
