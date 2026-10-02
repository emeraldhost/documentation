---
description: "EXILED Plugins auf einem SCP: Secret Laboratory Server installieren"
---

# So installierst du EXILED Plugins auf deinem SCP: Secret Laboratory Server

EXILED ist ein Plugin-Framework für SCP: Secret Laboratory. Mit EXILED-Plugins erweiterst du deinen Server, zum Beispiel um eigene Rollen, Items oder Admin-Funktionen.

## Voraussetzung: EXILED

EXILED muss auf deinem Server installiert sein, bevor du EXILED-Plugins nutzen kannst. Wie du es installierst, erfährst du in der Anleitung [EXILED installieren](exiled-installieren.md).

:::: info Hinweis
Viele Plugins gibt es in getrennten Varianten für EXILED und für LabAPI. Achte beim Download darauf, für welches Framework die `.dll`-Datei gebaut wurde. Diese Anleitung gilt für EXILED-Plugins. Für LabAPI-Plugins nutzt du die Anleitung [LabAPI Plugins installieren](labapi-plugins-installieren.md).
::::

## Wo liegen die EXILED-Ordner?

| Verzeichnis | Zweck |
|-------------|-------|
| `/.config/EXILED/Plugins/` | EXILED-Plugins (`.dll`-Dateien) |
| `/.config/EXILED/Plugins/dependencies/` | Zusätzliche Bibliotheken, die manche Plugins benötigen |
| `/.config/EXILED/Configs/` | Konfigurationsdateien der Plugins |

## Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade die `.dll`-Datei des gewünschten Plugins herunter, meist von der GitHub-Release-Seite des Plugin-Entwicklers. Lade auch alle Abhängigkeiten herunter, die das Plugin laut seiner Beschreibung benötigt.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Plugin hochladen</b><br>
   Lade die `.dll`-Datei des Plugins in folgendes Verzeichnis hoch:

   ```
   /.config/EXILED/Plugins/
   ```

5. <b>Abhängigkeiten hochladen</b><br>
   Benötigt das Plugin zusätzliche Bibliotheken, lade diese in folgendes Verzeichnis hoch:

   ```
   /.config/EXILED/Plugins/dependencies/
   ```

   :::: warning Achtung
   In den Ordner `dependencies` gehören nur reine Bibliotheken. Eine Plugin-`.dll` in diesem Ordner wird nicht als Plugin geladen. Nennt ein Plugin ein anderes Plugin als Voraussetzung, gehört dieses ebenfalls nach `/.config/EXILED/Plugins/`.
   ::::

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

7. <b>Laden prüfen</b><br>
   Öffne die Konsole in der Verwaltung. Für jedes erfolgreich geladene Plugin meldet EXILED beim Start eine Zeile wie:

   ```
   Loaded plugin BeispielPlugin@1.0.0
   ```

   Fehlt das Plugin oder erscheint ein Fehler, hilft dir die Anleitung [Plugins laden nicht](plugins-laden-nicht.md) weiter.

:::: warning Achtung
Die Version des Plugins muss zur installierten EXILED-Version passen. Setzt ein Plugin eine neuere EXILED-Version voraus, lädt EXILED es nicht.
::::

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden legt EXILED für jedes Plugin automatisch eine Konfigurationsdatei an. Standardmäßig bekommt jedes Plugin eine eigene Datei. Ersetze `<Port>` durch den Game Port deines Servers, du findest ihn in der Verwaltung unter **Übersicht**:

```
/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml
```

Texte und Übersetzungen eines Plugins liegen getrennt davon unter:

```
/.config/EXILED/Configs/Translations/<Plugin-Name>/<Port>.yml
```

:::: info Hinweis
EXILED kann die Configs auch gesammelt in einer Datei ablegen. Dann findest du alle Plugin-Einstellungen in `/.config/EXILED/Configs/<Port>-config.yml` und alle Texte in `/.config/EXILED/Configs/<Port>-translations.yml`. Prüfe, welche der beiden Varianten auf deinem Server existiert.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfiguration anpassen</b><br>
   Öffne die Konfigurationsdatei deines Plugins per [SFTP](../sftp-verbindung-herstellen.md) und passe die Werte an. Über `is_enabled` schaltest du das Plugin ein (`true`) oder aus (`false`).

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server, damit die Änderungen übernommen werden.

:::: danger Wichtig
Die Dateien sind im YAML-Format. Achte auf die Einrückung mit Leerzeichen und verwende keine Tabs. Ist eine Datei fehlerhaft, kann EXILED die Einstellungen des Plugins nicht laden.
::::

## Plugin entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin löschen</b><br>
   Lösche die `.dll`-Datei des Plugins per [SFTP](../sftp-verbindung-herstellen.md) aus `/.config/EXILED/Plugins/`.

3. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

:::: tip Tipp
Möchtest du ein Plugin nur vorübergehend abschalten, setze in seiner Konfiguration `is_enabled` auf `false`, statt die Datei zu löschen. Installiere neue Plugins außerdem immer einzeln und prüfe den Start nach jedem Plugin. So findest du Konflikte deutlich schneller.
::::
