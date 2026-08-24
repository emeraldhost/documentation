---
description: "LabAPI Plugins auf einem SCP: Secret Laboratory Server installieren"
---

# So installierst du LabAPI Plugins auf deinem SCP: Secret Laboratory Server

LabAPI ist der offizielle Plugin-Loader von Northwood für SCP: Secret Laboratory. Er ist in jedem Dedicated-Server-Build bereits enthalten — du musst nichts installieren und kannst direkt mit dem Hochladen von Plugins loslegen.

## LabAPI und EXILED

EXILED baut auf LabAPI auf: Der Exiled Loader wird selbst als LabAPI-Plugin geladen. Beide Systeme laufen deshalb problemlos parallel. EXILED-Plugins gehören aber weiterhin in ihre eigenen Verzeichnisse — siehe [EXILED Plugins installieren](exiled-plugins-installieren.md).

:::: info Hinweis
Viele Plugins gibt es in getrennten Varianten für LabAPI und EXILED. Achte beim Download darauf, für welches Framework die `.dll`-Datei gebaut wurde — diese Anleitung gilt für LabAPI-Plugins.
::::

## Wo liegen die LabAPI-Ordner?

LabAPI legt seine Ordner beim ersten Serverstart automatisch an. Ersetze `<Port>` durch den Game Port deines Servers — du findest ihn in der Verwaltung unter **Übersicht**:

| Verzeichnis | Zweck |
|-------------|-------|
| `/.config/SCP Secret Laboratory/LabAPI/plugins/global/` | Plugins, die der Server immer lädt |
| `/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/` | Plugins, die nur mit diesem Game Port geladen werden |
| `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` | Zusätzliche Bibliotheken, die manche Plugins benötigen |
| `/.config/SCP Secret Laboratory/LabAPI/configs/` | Konfigurationsdateien der Plugins |

:::: tip Tipp
Nutze für deine Plugins den Ordner `plugins/global/`. Der Game Port wird automatisch zugewiesen und kann sich ändern — Plugins im `global`-Ordner sind davon nicht betroffen und werden immer geladen.
::::

## Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade die `.dll`-Datei des gewünschten Plugins herunter — meist von der GitHub-Release-Seite des Plugin-Entwicklers. Lade auch alle Abhängigkeiten herunter, die das Plugin laut seiner Beschreibung benötigt.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Plugin hochladen</b><br>
   Lade die `.dll`-Datei in folgendes Verzeichnis hoch:

   ```
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. <b>Abhängigkeiten hochladen</b><br>
   Benötigt das Plugin zusätzliche Bibliotheken, lade diese in folgendes Verzeichnis hoch:

   ```
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. LabAPI lädt das Plugin beim Start automatisch und meldet es im Start-Output der Konsole.

:::: warning Achtung
Nennt ein Plugin ein <b>anderes Plugin</b> als Abhängigkeit, gehört dieses trotzdem in den `plugins`-Ordner, nicht in den `dependencies`-Ordner. In den `dependencies`-Ordner kommen nur reine Bibliotheken.
::::

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden erzeugt LabAPI für jedes Plugin einen eigenen Konfigurationsordner — ersetze `<Port>` durch den Game Port deines Servers:

```
/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/
```

Dort liegt immer eine `properties.yml`, über die du das Plugin aktivieren oder deaktivieren kannst. Hat ein Plugin eigene Einstellungen, liegt dort zusätzlich seine Konfigurationsdatei — standardmäßig eine `config.yml`. Alle Dateien sind im YAML-Format.

1. <b>Konfiguration anpassen</b><br>
   Öffne die Konfigurationsdatei deines Plugins und passe die Werte nach deinen Wünschen an. Achte darauf, dass die Datei gültiges YAML bleibt — sonst fällt das Plugin auf seine Standardwerte zurück oder lädt nicht.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

:::: info Hinweis
Manche Plugins legen ihre Konfiguration stattdessen unter `/.config/SCP Secret Laboratory/LabAPI/configs/global/<Plugin-Name>/` ab — sie gilt dann unabhängig vom Game Port.
::::

:::: warning Achtung
Die Version des Plugins muss zur LabAPI-Version deines Servers passen. LabAPI wird zusammen mit dem Server-Build aktualisiert — ein Plugin, das für eine andere Hauptversion von LabAPI gebaut wurde, wird nicht geladen und die Konsole zeigt beim Start eine entsprechende Fehlermeldung.
::::

:::: tip Tipp
Installiere Plugins immer einzeln und beobachte nach jedem neuen Plugin die Konsole beim Serverstart. Fehler beim Laden erscheinen dort direkt am Anfang — so findest du Konflikte oder Inkompatibilitäten deutlich schneller.
::::
