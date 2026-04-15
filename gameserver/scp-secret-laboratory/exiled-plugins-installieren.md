---
description: "EXILED Plugins auf einem SCP: Secret Laboratory Server installieren"
---

# So installierst du EXILED Plugins auf deinem SCP: Secret Laboratory Server

EXILED ist das bekannteste Plugin-Framework für SCP: Secret Laboratory und muss installiert sein, bevor Plugins geladen werden können.

## Voraussetzung: EXILED

EXILED ist auf den meisten gehosteten Servern bereits vorinstalliert. Ist das auf deinem Server nicht der Fall, findest du die offizielle Installationsanleitung auf der [EXILED GitHub-Seite](https://github.com/Exiled-Team/EXILED).

## Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade die `.dll`-Datei des gewünschten Plugins herunter — meist von der GitHub-Release-Seite des Plugin-Entwicklers.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Plugin hochladen</b><br>
   Lade die `.dll`-Datei in folgendes Verzeichnis hoch:

   ```
   /.config/EXILED/Plugins/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. EXILED lädt das Plugin beim Start automatisch.

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden eines Plugins erzeugt EXILED die zugehörige Konfigurationsdatei automatisch unter:

```
/.config/EXILED/Configs/
```

1. <b>Konfiguration anpassen</b><br>
   Öffne die Konfigurationsdatei deines Plugins und passe die Werte nach deinen Wünschen an.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

:::: warning Achtung
Die Version des Plugins muss zur installierten EXILED-Version passen. Stimmen die Versionen nicht überein, wird das Plugin nicht geladen oder führt zu Fehlern beim Serverstart.
::::

:::: tip Tipp
Installiere Plugins immer einzeln und teste den Serverstart nach jedem neuen Plugin. So findest du Konflikte oder Inkompatibilitäten deutlich schneller.
::::
