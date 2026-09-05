---
slug: "config-dateien-bearbeiten"
language: "de"
title: "So bearbeitest Du die Konfigurationsdateien auf Deinem SCP: Secret Laboratory Server"
description: "Konfigurationsdateien auf einem SCP: Secret Laboratory Server bearbeiten"
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
short_title: "Config-Dateien bearbeiten"
sort: 2
related: ["gameserver/scp-secret-laboratory/configure-friendly-fire", "gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/install-exiled-plugins"]
---

Bei SCP: Secret Laboratory läuft die gesamte Server-Konfiguration über Textdateien. Diese Anleitung zeigt Dir, wo die Dateien liegen, welche Datei wofür zuständig ist und wie Du Änderungen sicher vornimmst.

## Wo liegen die Konfigurationsdateien?

Alle Spiel-Konfigurationsdateien liegen in folgendem Verzeichnis – ersetze `<Port>` durch den Game Port Deines Servers:

```text
/.config/SCP Secret Laboratory/config/<Port>/
```

Den Game Port findest Du in der Verwaltung unter **Übersicht**.

> [!WARNING]
> Der Game Port wird automatisch zugewiesen. Unter `/.config/SCP Secret Laboratory/config/` können deshalb mehrere Port-Ordner liegen, zum Beispiel von einer früheren Port-Zuweisung. Der Server liest ausschließlich den Ordner, dessen Name dem aktuellen Game Port entspricht – Änderungen in einem alten Port-Ordner haben keine Wirkung. Prüfe deshalb vor jeder Änderung den aktuellen Game Port in der **Übersicht** der Verwaltung.

## Welche Datei wofür?

| Datei | Zweck |
|-------|-------|
| `config_gameplay.txt` | Gameplay-Einstellungen des Servers, z.B. Spielregeln und Rundenverhalten |
| `config_remoteadmin.txt` | Ränge und Rechte – siehe [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks) |
| `UserIDWhitelist.txt` | Spieler auf der Whitelist – siehe [Whitelist einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) |

> [!NOTE]
> Plugin-Konfigurationen liegen nicht in diesem Verzeichnis. EXILED speichert die Configs seiner Plugins unter `/.config/EXILED/Configs/` – mehr dazu in der Anleitung [EXILED Plugins installieren](/tutorials/gameserver/scp-secret-laboratory/install-exiled-plugins).

## Aufbau der Dateien

Einstellungen stehen im Format `schlüssel: wert`, eine Einstellung pro Zeile. Zeilen, die mit `#` beginnen, sind Kommentare und werden vom Server ignoriert:

```text
# Diese Zeile ist ein Kommentar
friendly_fire: false
```

Ändere nur den Wert hinter dem Doppelpunkt und lass den Schlüsselnamen unverändert.

## Konfigurationsdatei bearbeiten

> [!IMPORTANT]
> Stoppe Deinen Server immer, bevor Du eine Konfigurationsdatei bearbeitest. Nur so ist sichergestellt, dass der Server Deine Änderungen beim nächsten Start zuverlässig übernimmt.

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Wechsle in folgendes Verzeichnis – ersetze `<Port>` durch Deinen Game Port – und öffne die gewünschte Datei:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

5. **Änderungen vornehmen**\
   Passe die gewünschten Werte im Format `schlüssel: wert` an und speichere die Datei.

6. **Server starten**\
   Starte Deinen Server über die Verwaltung. Die Änderungen greifen erst mit diesem Start.

> [!NOTE]
> Es gibt kein Hot-Reload – Änderungen an den Konfigurationsdateien werden erst nach einem Neustart über die Verwaltung übernommen.
