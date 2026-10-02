---
slug: "exiled-plugins-installieren"
language: "de"
title: "So installierst Du EXILED Plugins auf Deinem SCP: Secret Laboratory Server"
description: "EXILED Plugins auf einem SCP: Secret Laboratory Server installieren"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-10-02"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "EXILED Plugins installieren"
sort: 3
related: ["gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-labapi-plugins", "gameserver/scp-secret-laboratory/join-server"]
---

EXILED ist ein Plugin-Framework für SCP: Secret Laboratory. Mit EXILED-Plugins erweiterst Du Deinen Server, zum Beispiel um eigene Rollen, Items oder Admin-Funktionen.

## Voraussetzung: EXILED

EXILED muss auf Deinem Server installiert sein, bevor Du EXILED-Plugins nutzen kannst. Wie Du es installierst, erfährst Du in der Anleitung [EXILED installieren](/tutorials/gameserver/scp-secret-laboratory/install-exiled).

> [!NOTE]
> Viele Plugins gibt es in getrennten Varianten für EXILED und für LabAPI. Achte beim Download darauf, für welches Framework die `.dll`-Datei gebaut wurde. Diese Anleitung gilt für EXILED-Plugins. Für LabAPI-Plugins nutzt Du die Anleitung [LabAPI Plugins installieren](/tutorials/gameserver/scp-secret-laboratory/install-labapi-plugins).

## Wo liegen die EXILED-Ordner?

| Verzeichnis | Zweck |
|-------------|-------|
| `/.config/EXILED/Plugins/` | EXILED-Plugins (`.dll`-Dateien) |
| `/.config/EXILED/Plugins/dependencies/` | Zusätzliche Bibliotheken, die manche Plugins benötigen |
| `/.config/EXILED/Configs/` | Konfigurationsdateien der Plugins |

## Plugin installieren

1. **Plugin herunterladen**\
   Lade die `.dll`-Datei des gewünschten Plugins herunter, meist von der GitHub-Release-Seite des Plugin-Entwicklers. Lade auch alle Abhängigkeiten herunter, die das Plugin laut seiner Beschreibung benötigt.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Plugin hochladen**\
   Lade die `.dll`-Datei des Plugins in folgendes Verzeichnis hoch:

   ```text
   /.config/EXILED/Plugins/
   ```

5. **Abhängigkeiten hochladen**\
   Benötigt das Plugin zusätzliche Bibliotheken, lade diese in folgendes Verzeichnis hoch:

   ```text
   /.config/EXILED/Plugins/dependencies/
   ```

   > [!WARNING]
   > In den Ordner `dependencies` gehören nur reine Bibliotheken. Eine Plugin-`.dll` in diesem Ordner wird nicht als Plugin geladen. Nennt ein Plugin ein anderes Plugin als Voraussetzung, gehört dieses ebenfalls nach `/.config/EXILED/Plugins/`.

6. **Server starten**\
   Starte Deinen Server über die Verwaltung.

7. **Laden prüfen**\
   Öffne die Konsole in der Verwaltung. Für jedes erfolgreich geladene Plugin meldet EXILED beim Start eine Zeile wie:

   ```text
   Loaded plugin BeispielPlugin@1.0.0
   ```

   Fehlt das Plugin oder erscheint ein Fehler, hilft Dir die Anleitung [Plugins laden nicht](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading) weiter.

> [!WARNING]
> Die Version des Plugins muss zur installierten EXILED-Version passen. Setzt ein Plugin eine neuere EXILED-Version voraus, lädt EXILED es nicht.

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden legt EXILED für jedes Plugin automatisch eine Konfigurationsdatei an. Standardmäßig bekommt jedes Plugin eine eigene Datei. Ersetze `<Port>` durch den Game Port Deines Servers, Du findest ihn in der Verwaltung unter **Übersicht**:

```text
/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml
```

Texte und Übersetzungen eines Plugins liegen getrennt davon unter:

```text
/.config/EXILED/Configs/Translations/<Plugin-Name>/<Port>.yml
```

> [!NOTE]
> EXILED kann die Configs auch gesammelt in einer Datei ablegen. Dann findest Du alle Plugin-Einstellungen in `/.config/EXILED/Configs/<Port>-config.yml` und alle Texte in `/.config/EXILED/Configs/<Port>-translations.yml`. Prüfe, welche der beiden Varianten auf Deinem Server existiert.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfiguration anpassen**\
   Öffne die Konfigurationsdatei Deines Plugins per [SFTP](/tutorials/gameserver/establish-sftp-connection) und passe die Werte an. Über `is_enabled` schaltest Du das Plugin ein (`true`) oder aus (`false`).

3. **Server starten**\
   Speichere die Datei und starte Deinen Server, damit die Änderungen übernommen werden.

> [!IMPORTANT]
> Die Dateien sind im YAML-Format. Achte auf die Einrückung mit Leerzeichen und verwende keine Tabs. Ist eine Datei fehlerhaft, kann EXILED die Einstellungen des Plugins nicht laden.

## Plugin entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugin löschen**\
   Lösche die `.dll`-Datei des Plugins per [SFTP](/tutorials/gameserver/establish-sftp-connection) aus `/.config/EXILED/Plugins/`.

3. **Server starten**\
   Starte Deinen Server über die Verwaltung.

> [!TIP]
> Möchtest Du ein Plugin nur vorübergehend abschalten, setze in seiner Konfiguration `is_enabled` auf `false`, statt die Datei zu löschen. Installiere neue Plugins außerdem immer einzeln und prüfe den Start nach jedem Plugin. So findest Du Konflikte deutlich schneller.
