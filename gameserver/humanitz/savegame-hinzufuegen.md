---
description: Savegame auf einem HumanitZ Server hinzufügen
---

# So fügst du ein Savegame zu deinem HumanitZ Server hinzu

Der Spielstand eines HumanitZ Servers liegt in einer einzelnen Datei nach dem Muster `Save_<Name>.sav`. Welchen Namen dein Server lädt, bestimmt der Wert `SaveName` in der Konfigurationsdatei – Dateiname und Konfiguration müssen deshalb zusammenpassen.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

:::: info Projektordner
Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei dir vorhanden ist, und passe die Pfade entsprechend an.
::::

## Dateien des Spielstands

| Datei | Inhalt |
|-------|--------|
| `Save_<Name>.sav` | Der eigentliche Spielstand mit Welt, Basen, Fahrzeugen und Spielerdaten. Standardmäßig heißt die Datei `Save_DedicatedSaveMP.sav`. |
| `Save_ClanData.sav` | Die Clan- bzw. Gruppendaten des Servers |

Beide Dateien liegen im selben Ordner und gehören zusammen. Übertrage sie deshalb immer gemeinsam.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdatei.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /HumanitZServer/Saved/SaveGames/SaveList/Default/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Dateien hochladen</b><br>
   Lade deine `Save_<Name>.sav` und die zugehörige `Save_ClanData.sav` in dieses Verzeichnis hoch. Sind dort bereits Dateien mit demselben Namen vorhanden, überschreibst du sie – sichere sie vorher, falls du sie noch brauchst.

5. <b>SaveName eintragen</b><br>
   Öffne folgende Datei:

   ```
   /HumanitZServer/GameServerSettings.ini
   ```

   Trage im Abschnitt `[Host Settings]` den Namen deines Spielstands ein – **ohne** das führende `Save_` und **ohne** die Endung `.sav`:

   ```ini
   [Host Settings]
   SaveName="DedicatedSaveMP"
   ```

   :::: tip Beispiel
   | Datei auf dem Server | Eintrag in der Konfiguration |
   |----------------------|------------------------------|
   | `Save_DedicatedSaveMP.sav` | `SaveName="DedicatedSaveMP"` |
   | `Save_MeineWelt.sav` | `SaveName="MeineWelt"` |
   ::::

6. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Wichtig
Dateiname und `SaveName` müssen exakt zusammenpassen. Findet der Server keine passende Datei, erzeugt er unter diesem Namen eine **neue, leere Welt** – dein hochgeladener Spielstand wird dann nicht geladen. Achte auch auf Groß- und Kleinschreibung: Dein Server läuft unter Linux, dort wird sie unterschieden.
::::

:::: warning Achtung
Ein geänderter `SaveName` bedeutet immer einen anderen Spielstand. Möchtest du zwischen zwei Welten wechseln, kannst du beide `.sav`-Dateien im Ordner belassen und nur den `SaveName` umstellen.
::::

## Umzug auf einen anderen Server

Beim Umzug von einem anderen HumanitZ Server lädst du am einfachsten den kompletten Ordner `Default` herunter und auf dem neuen Server wieder hoch. Wie du ihn herunterlädst, steht unter [Savegame herunterladen](savegame-herunterladen.md).

:::: info Einzelspieler-Spielstand
Für die Übertragung eines Einzelspieler-Spielstands auf einen Dedicated Server gibt es **kein dokumentiertes Verfahren**. Weder das offizielle Wiki noch die Serverdokumentation beschreiben einen solchen Weg. Diese Anleitung bezieht sich deshalb ausschließlich auf Spielstände, die von einem Dedicated Server stammen.
::::
