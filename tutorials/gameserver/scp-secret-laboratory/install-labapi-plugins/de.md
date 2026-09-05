---
slug: "labapi-plugins-installieren"
language: "de"
title: "So installierst Du LabAPI Plugins auf Deinem SCP: Secret Laboratory Server"
description: "LabAPI Plugins auf einem SCP: Secret Laboratory Server installieren"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "LabAPI Plugins installieren"
sort: 6
related: ["gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/join-server", "gameserver/scp-secret-laboratory/kick-and-ban-players"]
---

LabAPI ist der offizielle Plugin-Loader von Northwood für SCP: Secret Laboratory. Er ist in jedem Dedicated-Server-Build bereits enthalten – Du musst nichts installieren und kannst direkt mit dem Hochladen von Plugins loslegen.

## LabAPI und EXILED

EXILED baut auf LabAPI auf: Der Exiled Loader wird selbst als LabAPI-Plugin geladen. Beide Systeme laufen deshalb problemlos parallel. EXILED-Plugins gehören aber weiterhin in ihre eigenen Verzeichnisse – siehe [EXILED Plugins installieren](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins).

> [!NOTE]
> Viele Plugins gibt es in getrennten Varianten für LabAPI und EXILED. Achte beim Download darauf, für welches Framework die `.dll`-Datei gebaut wurde – diese Anleitung gilt für LabAPI-Plugins.

## Wo liegen die LabAPI-Ordner?

LabAPI legt seine Ordner beim ersten Serverstart automatisch an. Ersetze `<Port>` durch den Game Port Deines Servers – Du findest ihn in der Verwaltung unter **Übersicht**:

| Verzeichnis | Zweck |
|-------------|-------|
| `/.config/SCP Secret Laboratory/LabAPI/plugins/global/` | Plugins, die der Server immer lädt |
| `/.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/` | Plugins, die nur mit diesem Game Port geladen werden |
| `/.config/SCP Secret Laboratory/LabAPI/dependencies/global/` | Zusätzliche Bibliotheken, die manche Plugins benötigen |
| `/.config/SCP Secret Laboratory/LabAPI/configs/` | Konfigurationsdateien der Plugins |

> [!TIP]
> Nutze für Deine Plugins den Ordner `plugins/global/`. Der Game Port wird automatisch zugewiesen und kann sich ändern – Plugins im `global`-Ordner sind davon nicht betroffen und werden immer geladen.

## Plugin installieren

1. **Plugin herunterladen**\
   Lade die `.dll`-Datei des gewünschten Plugins herunter – meist von der GitHub-Release-Seite des Plugin-Entwicklers. Lade auch alle Abhängigkeiten herunter, die das Plugin laut seiner Beschreibung benötigt.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Plugin hochladen**\
   Lade die `.dll`-Datei in folgendes Verzeichnis hoch:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   ```

5. **Abhängigkeiten hochladen**\
   Benötigt das Plugin zusätzliche Bibliotheken, lade diese in folgendes Verzeichnis hoch:

   ```text
   /.config/SCP Secret Laboratory/LabAPI/dependencies/global/
   ```

6. **Server starten**\
   Starte Deinen Server über die Verwaltung. LabAPI lädt das Plugin beim Start automatisch und meldet es im Start-Output der Konsole.

> [!WARNING]
> Nennt ein Plugin ein **anderes Plugin** als Abhängigkeit, gehört dieses trotzdem in den `plugins`-Ordner, nicht in den `dependencies`-Ordner. In den `dependencies`-Ordner kommen nur reine Bibliotheken.

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden erzeugt LabAPI für jedes Plugin einen eigenen Konfigurationsordner – ersetze `<Port>` durch den Game Port Deines Servers:

```text
/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/
```

Dort liegt immer eine `properties.yml`, über die Du das Plugin aktivieren oder deaktivieren kannst. Hat ein Plugin eigene Einstellungen, liegt dort zusätzlich seine Konfigurationsdatei – standardmäßig eine `config.yml`. Alle Dateien sind im YAML-Format.

1. **Konfiguration anpassen**\
   Öffne die Konfigurationsdatei Deines Plugins und passe die Werte nach Deinen Wünschen an. Achte darauf, dass die Datei gültiges YAML bleibt – sonst fällt das Plugin auf seine Standardwerte zurück oder lädt nicht.

2. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

> [!NOTE]
> Manche Plugins legen ihre Konfiguration stattdessen unter `/.config/SCP Secret Laboratory/LabAPI/configs/global/<Plugin-Name>/` ab – sie gilt dann unabhängig vom Game Port.

> [!WARNING]
> Die Version des Plugins muss zur LabAPI-Version Deines Servers passen. LabAPI wird zusammen mit dem Server-Build aktualisiert – ein Plugin, das für eine andere Hauptversion von LabAPI gebaut wurde, wird nicht geladen und die Konsole zeigt beim Start eine entsprechende Fehlermeldung.

> [!TIP]
> Installiere Plugins immer einzeln und beobachte nach jedem neuen Plugin die Konsole beim Serverstart. Fehler beim Laden erscheinen dort direkt am Anfang – so findest Du Konflikte oder Inkompatibilitäten deutlich schneller.
