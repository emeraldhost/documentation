---
description: Savegame auf einem The Lord of the Rings Return to Moria Server hinzufügen
---

# So fügst du ein Savegame zu deinem The Lord of the Rings Return to Moria Server hinzu

Eine Welt in Return to Moria ist eine einzelne Datei mit dem Präfix `MW_` und der Endung `.sav`, zum Beispiel `MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav`. Du lädst diese Datei auf deinen Server hoch und trägst anschließend in der Konfiguration ein, welche Welt geladen werden soll.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %localappdata%\Moria\Saved
   ```

2. <b>Ordner deiner Plattform wählen</b><br>
   Öffne den Ordner deiner Plattform: `SaveGamesSteam` bei Steam, `SaveGamesEpic` beim Epic Games Store.

3. <b>Weltdatei auswählen</b><br>
   Darin liegen deine Welten als einzelne `MW_*.sav`-Dateien. Wähle die Datei der Welt aus, die du auf den Server übertragen möchtest.

:::: info Hinweis
Übertragen lassen sich nur Welten vom PC (Steam oder Epic Games Store). Für Spielstände von PlayStation 5 oder Xbox gibt es keinen dokumentierten Weg, sie auf einen Server zu bringen.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Der Server speichert beim Stoppen und beendet sich sauber – solange er läuft, schreibt er laufend in die Weltdatei.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Moria/Saved/SaveGamesDedicated/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal vollständig, damit die Ordnerstruktur und die Konfigurationsdateien angelegt werden. Stoppe ihn anschließend wieder, bevor du die Datei hochlädst.
   ::::

4. <b>Weltdatei hochladen</b><br>
   Lade deine `MW_*.sav`-Datei in dieses Verzeichnis hoch. Behalte den Dateinamen unverändert bei – liegt dort bereits eine Datei mit demselben Namen, benenne eine der beiden vorher um.

5. <b>Welt in der Konfiguration eintragen</b><br>
   Öffne im Hauptverzeichnis deines Servers die Datei `MoriaServerConfig.ini` und trage im Abschnitt `[World]` ein, welche Welt geladen werden soll:

   ```
   [World]
   OptionalWorldFilename=MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav
   ```

   Damit lädt der Server gezielt genau diese Datei – inklusive der Endung `.sav`.

   :::: info Hinweis
   Fehlt die Zeile `OptionalWorldFilename` in deiner Konfiguration, ergänze sie einfach unterhalb von `[World]`.
   ::::

6. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

## Warum du den Weltnamen nicht verwenden solltest

Im Abschnitt `[World]` steht zusätzlich der Eintrag `Name`. Darüber lässt sich eine Welt zwar ebenfalls auswählen, für deinen Server ist das aber nicht der richtige Weg.

:::: warning Achtung
Der Eintrag `Name` wird bei jedem Start automatisch aus den Servereinstellungen deines Servers übernommen. Eine Änderung direkt in der `MoriaServerConfig.ini` bleibt deshalb nicht bestehen. Nutze zum Laden eines hochgeladenen Spielstands immer `OptionalWorldFilename`.
::::

:::: danger Wichtig
Findet der Server unter dem eingetragenen Weltnamen keine Welt, legt er automatisch eine **neue** Welt mit den Werten aus dem Abschnitt `[World.Create]` an – also mit dem dort eingetragenen Spielmodus, Seed und Schwierigkeitsgrad. Dein hochgeladener Spielstand bleibt dann zwar auf der Platte liegen, wird aber nicht geladen.
::::

:::: tip Tipp
`OptionalWorldFilename` ist auch dann die richtige Wahl, wenn du mehrere Welten mit demselben Namen im Ordner liegen hast. Trage dort immer den exakten Dateinamen inklusive `.sav` ein.
::::

## Wichtige Hinweise

:::: warning Achtung
Änderungen an der `MoriaServerConfig.ini` werden erst beim nächsten Start eingelesen. Bearbeite die Datei deshalb immer bei gestopptem Server und starte ihn anschließend neu.
::::

:::: warning Achtung
Stoppe deinen Server ausschließlich über die Verwaltung. Nur so wird der aktuelle Stand gespeichert und der Server sauber beendet. Ein erzwungener Abbruch kann Fortschritt kosten und die Online-Session hängen lassen, sodass der nächste Start mehrere Minuten dauert.
::::

:::: info Hinweis
Zwischen der Welt auf deinem PC und der Welt auf dem Server gibt es keine automatische Synchronisation. Änderungen auf dem Server landen also nicht in deinem lokalen Spielstand und umgekehrt – für einen erneuten Abgleich musst du die Datei jedes Mal manuell übertragen.
::::
