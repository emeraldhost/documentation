---
slug: "exiled-plugins-installieren"
language: "de"
title: "So installierst Du EXILED Plugins auf Deinem SCP: Secret Laboratory Server"
description: "EXILED Plugins auf einem SCP: Secret Laboratory Server installieren"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-08-24"
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

EXILED ist das bekannteste Plugin-Framework für SCP: Secret Laboratory und muss installiert sein, bevor Plugins geladen werden können.

## Voraussetzung: EXILED

EXILED ist auf den meisten gehosteten Servern bereits vorinstalliert. Ist das auf Deinem Server nicht der Fall, findest Du die offizielle Installationsanleitung auf der [EXILED GitHub-Seite](https://github.com/ExMod-Team/EXILED).

## Plugin installieren

1. **Plugin herunterladen**\
   Lade die `.dll`-Datei des gewünschten Plugins herunter – meist von der GitHub-Release-Seite des Plugin-Entwicklers.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Plugin hochladen**\
   Lade die `.dll`-Datei in folgendes Verzeichnis hoch:

   ```text
   /.config/EXILED/Plugins/
   ```

5. **Server starten**\
   Starte Deinen Server über die Verwaltung. EXILED lädt das Plugin beim Start automatisch.

## Plugin konfigurieren

Nach dem ersten erfolgreichen Laden eines Plugins erzeugt EXILED die zugehörige Konfigurationsdatei automatisch unter:

```text
/.config/EXILED/Configs/
```

1. **Konfiguration anpassen**\
   Öffne die Konfigurationsdatei Deines Plugins und passe die Werte nach Deinen Wünschen an.

2. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderungen übernommen werden.

> [!WARNING]
> Die Version des Plugins muss zur installierten EXILED-Version passen. Stimmen die Versionen nicht überein, wird das Plugin nicht geladen oder führt zu Fehlern beim Serverstart.

> [!TIP]
> Installiere Plugins immer einzeln und teste den Serverstart nach jedem neuen Plugin. So findest Du Konflikte oder Inkompatibilitäten deutlich schneller.
