---
description: "Fehlersuche, wenn Plugins auf einem SCP: Secret Laboratory Server nicht laden"
---

# Was tun, wenn Plugins auf deinem SCP: Secret Laboratory Server nicht laden

Ein Plugin ist installiert, aber im Spiel passiert nichts? Die Ursache steht fast immer im Konsolen-Output deines Servers. Diese Anleitung zeigt dir, wie du die passende Meldung findest und behebst die häufigsten Ursachen: falscher Ordner, Versionskonflikt, fehlende Dependencies und ein deaktiviertes Plugin.

Grundlagen zur Plugin-Installation findest du in den Anleitungen [EXILED Plugins installieren](exiled-plugins-installieren.md) und [LabAPI Plugins installieren](labapi-plugins-installieren.md).

## So findest du die Fehlermeldung

Die Konsole in der Verwaltung ist die LocalAdmin-Konsole deines Servers — mehr dazu in der Anleitung [Remote Admin nutzen](remote-admin-nutzen.md). Beim Serverstart melden EXILED und LabAPI dort jedes Plugin, das sie laden — inklusive aller Fehler.

1. <b>Server neu starten</b><br>
   Starte deinen Server über die Verwaltung neu. Plugins werden beim Start geladen, die relevanten Meldungen erscheinen also im Start-Output.

2. <b>Konsole beobachten</b><br>
   Öffne die Konsole der Verwaltung und lies den Start-Output. Suche nach dem Namen deines Plugins.

3. <b>Meldung zuordnen</b><br>
   Lädt ein Plugin erfolgreich, siehst du bei EXILED eine Zeile wie `Loaded plugin <Name>@<Version>`, bei LabAPI `[LOADER] Successfully loaded <Name>` gefolgt von `[LOADER] Successfully enabled '<Name>', ...`. Fehlt dein Plugin komplett oder steht dort ein Fehler, hilft dir die folgende Tabelle.

| Meldung (Auszug) | Bedeutung |
|------------------|-----------|
| Plugin taucht im Start-Output gar nicht auf | Die `.dll` liegt im falschen Ordner — siehe Ursache 1 |
| `Missing dependencies:` | Dem Plugin fehlen Abhängigkeits-DLLs — siehe Ursache 3 |
| `You're running an older version of Exiled (...)! <Name> won't be loaded!` | Das Plugin braucht eine neuere EXILED-Version — siehe Ursache 2 |
| `It was built for an outdated major version of LabAPI` bzw. `a newer major version of LabAPI` | Plugin- und LabAPI-Version passen nicht zusammen — siehe Ursache 2 |
| `SCP: SL is outdated. Update SCP: SL Dedicated Server to required version or downgrade Exiled.` bzw. `Exiled is outdated, ...` | EXILED und Spielversion passen nicht zusammen — EXILED lädt dann gar keine Plugins, siehe Ursache 2 |
| `Error while loading an assembly at <Pfad>` | Die Datei ist beschädigt oder keine gültige Plugin-DLL — lade die Datei neu herunter und lade sie erneut hoch |
| `Couldn't load the plugin inside '<Pfad>'` | LabAPI konnte die DLL nicht laden — die genaue Ursache steht direkt darunter, oft gefolgt von `Missing dependencies:` |
| `Plugin "<Name>" threw an exception while enabling` | Fehler im Plugin selbst beim Aktivieren — prüfe die Plugin-Konfiguration und melde den Fehler beim Entwickler |

## Ursache 1: Die DLL liegt im falschen Ordner

EXILED-Plugins gehören direkt in folgendes Verzeichnis:

```
/.config/EXILED/Plugins/
```

LabAPI-Plugins lädt der Server dagegen nur aus zwei Unterordnern — eine `.dll` direkt in `plugins/` wird ignoriert. Ersetze `<Port>` durch den Game Port deines Servers aus der **Übersicht** der Verwaltung:

```
/.config/SCP Secret Laboratory/LabAPI/plugins/global/
/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/
```

Der Ordner `global` gilt für alle Ports, der Port-Ordner nur für den jeweiligen Server.

:::: warning Achtung
Der Unterordner `/.config/EXILED/Plugins/dependencies/` ist ausschließlich für Abhängigkeits-DLLs gedacht — eine Plugin-DLL, die dort liegt, wird nicht als Plugin geladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und prüfe, wo die `.dll` tatsächlich liegt.

3. <b>Datei verschieben</b><br>
   Verschiebe die `.dll` in den passenden Ordner: EXILED-Plugins nach `/.config/EXILED/Plugins/`, LabAPI-Plugins nach `/.config/SCP Secret Laboratory/LabAPI/plugins/global/`.

4. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und prüfe den Start-Output erneut.

## Ursache 2: Versionen passen nicht zusammen

Drei Versionen müssen zueinander passen: die Spielversion, die Version des Frameworks (EXILED bzw. LabAPI) und die Version des Plugins.

- **Plugin ↔ EXILED**: Setzt ein Plugin eine neuere EXILED-Version voraus, verweigert EXILED das Laden mit der Meldung `You're running an older version of Exiled (...)! <Name> won't be loaded! Required version to load it: ...`. Aktualisiere EXILED oder lade von der Release-Seite des Plugins eine Version herunter, die zu deiner installierten EXILED-Version passt.
- **EXILED ↔ Spiel**: Nach einem Spiel-Update kann EXILED vorübergehend inkompatibel sein. In der Konsole steht dann `Exiled is outdated, a new version will be installed automatically as soon as it's available.` — bis dahin lädt EXILED gar keine Plugins. Erscheint stattdessen `SCP: SL is outdated. Update SCP: SL Dedicated Server to required version or downgrade Exiled.`, ist die installierte EXILED-Version neuer als die Spielversion des Servers.
- **Plugin ↔ LabAPI**: LabAPI vergleicht die Major-Version, für die das Plugin gebaut wurde, mit der installierten LabAPI-Version. Bei einer Abweichung wird das Plugin nicht aktiviert; die Fehlermeldung nennt beide Versionen (`Current LabAPI version` und `Required by plugin`). Nutze eine Plugin-Version, die zur installierten LabAPI-Version passt.

:::: warning Achtung
LabAPI kann inkompatible Plugins auf Wunsch trotzdem laden (`unsupported_loading` in der `properties.yml` des Plugins oder `load_unsupported_plugins` in der Datei `/.config/SCP Secret Laboratory/LabAPI/LabApi-<Port>.yml`). Die Fehlermeldung warnt dabei ausdrücklich vor eingeschränkter Funktionalität — nutze diese Option nur als letzten Ausweg.
::::

:::: tip Tipp
Prüfe nach jedem Spiel-Update zuerst, ob dein Plugin-Framework aktuell ist, und erst danach die einzelnen Plugins. Ein veraltetes Framework erklärt oft, warum plötzlich alle Plugins gleichzeitig fehlen.
::::

## Ursache 3: Fehlende Dependencies

Viele Plugins benötigen zusätzliche Bibliotheken, die als eigene `.dll`-Dateien mitgeliefert werden — meist zum Download auf der Release-Seite des Plugins. Fehlen sie, listet die Konsole sie unter der Meldung `Missing dependencies:` einzeln auf.

Abhängigkeits-DLLs gehören in diese Verzeichnisse:

- EXILED: `/.config/EXILED/Plugins/dependencies/`
- LabAPI: `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` oder `/.config/SCP Secret Laboratory/LabAPI/dependencies/<Port>/` — eine `.dll` direkt in `dependencies/` lädt LabAPI nicht

1. <b>Fehlende Dependencies notieren</b><br>
   Notiere dir die Namen aus der `Missing dependencies:`-Liste in der Konsole.

2. <b>Dependencies herunterladen</b><br>
   Lade die fehlenden `.dll`-Dateien herunter — die Release-Seite oder Installationsanleitung des Plugins nennt die benötigten Dependencies samt Download.

3. <b>Server stoppen und Dateien hochladen</b><br>
   Stoppe deinen Server, verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) und lade die Dateien in das passende Verzeichnis hoch.

4. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Die Meldung `Missing dependencies:` sollte jetzt verschwunden sein.

## Ursache 4: Das Plugin ist deaktiviert

Lädt ein Plugin laut Konsole erfolgreich, tut aber trotzdem nichts, ist es womöglich in seiner Konfiguration deaktiviert. Beide Frameworks legen dafür automatisch einen Schalter an:

- EXILED: `is_enabled` im Abschnitt des Plugins — je nach EXILED-Einstellung liegen die Plugin-Configs gesammelt in `/.config/EXILED/Configs/<Port>-config.yml` oder einzeln pro Plugin unter `/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml`; prüfe, welche der beiden Varianten auf deinem Server existiert
- LabAPI: `is_enabled` in der Datei `/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/properties.yml`

Setze den Wert auf `true` und starte deinen Server über die Verwaltung neu.

## Immer noch keine Lösung?

Installiere Plugins einzeln und teste den Serverstart nach jedem neuen Plugin — so grenzt du ein, welches Plugin das Problem verursacht. Hilft das alles nicht, melde dich beim Entwickler des Plugins und schicke ihm die genaue Fehlermeldung aus der Konsole mit.
