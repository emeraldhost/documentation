---
description: Welt-Modifikatoren auf einem Valheim Server ändern
---

# So änderst du die Welt-Modifikatoren auf deinem Valheim Server

Mit den Welt-Modifikatoren passt du den Schwierigkeitsgrad deiner Welt an, zum Beispiel die Stärke der Gegner, die Strafe beim Tod, die Menge an Ressourcen, die Häufigkeit von Überfällen oder die Regeln für Portale. Die Modifikatoren werden in der Welt selbst gespeichert. Du kannst sie direkt im Spiel über die Konsole ändern oder eine Welt lokal mit den gewünschten Modifikatoren vorbereiten und auf deinen Server hochladen.

:::: info Hinweis
Erstelle vor dem Ändern ein [Backup](backup-erstellen.md), damit du jederzeit zum vorherigen Stand zurückkehren kannst.
::::

## Modifikatoren im Spiel per Konsole ändern

Auf diesem Weg änderst du die Modifikatoren deiner bestehenden Welt, während der Server läuft. Die Änderung wirkt sofort und wird mit der nächsten Speicherung der Welt dauerhaft übernommen.

1. <b>Admin werden</b><br>
   Trage dich als Admin auf deinem Server ein, siehe [Admin hinzufügen](admin-hinzufuegen.md). Nur Admins dürfen diese Befehle auf dem Server ausführen.

2. <b>Konsole aktivieren</b><br>
   Aktiviere die Entwicklerkonsole in den Einstellungen des Spiels, falls sie noch nicht aktiv ist.

3. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server, siehe [Server beitreten](server-beitreten.md).

4. <b>Befehl eingeben</b><br>
   Öffne die Konsole mit `F5`, gib einen der folgenden Befehle ein und bestätige mit Enter. Groß- und Kleinschreibung spielt dabei keine Rolle.

### Preset festlegen

```
setworldpreset <Preset>
```

Mögliche Presets sind `Normal`, `Casual`, `Easy`, `Hard`, `Hardcore`, `Immersive` und `Hammer`. Beispiel:

```
setworldpreset Hard
```

Ein Preset ersetzt alle bisher gesetzten Welt-Modifikatoren.

### Einzelnen Modifikator ändern

```
setworldmodifier <Modifikator> <Wert>
```

| Modifikator | Bedeutung | Mögliche Werte |
|-------------|-----------|----------------|
| `Combat` | Kampfschwierigkeit | `VeryEasy`, `Easy`, `Hard`, `VeryHard` |
| `DeathPenalty` | Strafe beim Tod | `Casual`, `VeryEasy`, `Easy`, `Hard`, `Hardcore` |
| `Resources` | Menge an Ressourcen | `MuchLess`, `Less`, `More`, `MuchMore`, `Most` |
| `Raids` | Häufigkeit von Überfällen | `None`, `MuchLess`, `Less`, `More`, `MuchMore` |
| `Portals` | Regeln für Portale | `Casual`, `Hard`, `VeryHard` |

Beispiel:

```
setworldmodifier Combat Hard
```

### Alle Modifikatoren zurücksetzen

```
resetworldkeys
```

Setzt alle Welt-Modifikatoren auf den Standard zurück.

:::: warning Achtung
`setworldpreset` und `resetworldkeys` setzen alle Welt-Modifikatoren zurück, auch Schalter wie keine Karte oder keine Baukosten, die in deiner Welt aktiv sind. Dein Fortschritt bei den Bossen bleibt dabei erhalten.
::::

:::: tip Tipp
Einen einzelnen Modifikator kannst du mit `setworldmodifier` nicht auf den Normalwert zurücksetzen, da `Normal` kein gültiger Wert ist. Setze in diesem Fall mit `resetworldkeys` alle Modifikatoren zurück und lege die gewünschten Modifikatoren danach neu fest. Schalter wie keine Karte stellst du anschließend über das Menü der Welt-Modifikatoren wieder ein, siehe [Welt mit Modifikatoren vorbereiten und hochladen](#welt-mit-modifikatoren-vorbereiten-und-hochladen).
::::

:::: info Hinweis
Die Befehle werden auf dem Server ausgeführt, daher erhältst du im Spiel keine Bestätigung. Rückmeldungen des Servers erscheinen in der Konsole in der Verwaltung, bei ungültigen Eingaben zum Beispiel `Invalid preset` oder `Invalid input, possible valid values are: ...`. Bist du nicht als Admin eingetragen, meldet das Spiel `You are not admin`.
::::

## Welt mit Modifikatoren vorbereiten und hochladen

Auf diesem Weg legst du die Modifikatoren im Menü der Welt-Modifikatoren des Spiels fest. Hier stehen dir auch Schalter wie keine Karte oder keine Baukosten zur Verfügung, die du mit `setworldpreset` und `setworldmodifier` nicht einzeln setzen kannst. Die Modifikatoren werden in der Welt gespeichert und von deinem Server beim Laden übernommen.

1. <b>Welt lokal erstellen</b><br>
   Starte Valheim, wähle deinen Charakter und erstelle in der Weltauswahl eine neue Welt, zum Beispiel mit dem Namen `MeineWelt`.

2. <b>Welt-Modifikatoren festlegen</b><br>
   Wähle die Welt in der Weltauswahl aus und öffne das Menü der Welt-Modifikatoren. Wähle ein Preset oder stelle die einzelnen Modifikatoren und Schalter ein und bestätige deine Auswahl.

3. <b>Welt einmal betreten</b><br>
   Starte die Welt einmal lokal und verlasse sie wieder, damit alle Weltdateien angelegt werden.

4. <b>Welt hochladen</b><br>
   Lade die Welt auf deinen Server hoch und trage ihren Namen im Feld **Welt Name** ein, wie in [Savegame hinzufügen](savegame-hinzufuegen.md) beschrieben.

5. <b>Server starten</b><br>
   Starte deinen Server. Er lädt die Welt mit den gewählten Modifikatoren.

:::: tip Tipp
Auf dieselbe Weise kannst du auch die Modifikatoren deiner bestehenden Server-Welt ändern: Lade den Weltordner mit [Savegame herunterladen](savegame-herunterladen.md) auf deinen PC herunter, kopiere ihn in das lokale Verzeichnis `%userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local`, passe die Modifikatoren in der Weltauswahl an und lade die Welt anschließend wieder hoch.
::::

:::: warning Achtung
Starte deinen Server nach dem Herunterladen erst wieder, wenn du die geänderte Welt hochgeladen hast. Sonst geht alles verloren, was in der Zwischenzeit auf dem Server passiert. Liegt in deinem lokalen Verzeichnis `worlds_local` bereits eine Welt mit demselben Namen, verschiebe sie vorher an einen anderen Ort, damit du sie nicht überschreibst.
::::
