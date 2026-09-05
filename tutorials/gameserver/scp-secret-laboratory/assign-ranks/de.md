---
slug: "raenge-vergeben"
language: "de"
title: "So vergibst Du Ränge auf Deinem SCP: Secret Laboratory Server"
description: "Ränge auf einem SCP: Secret Laboratory Server vergeben"
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
short_title: "Ränge vergeben"
sort: 8
related: ["gameserver/scp-secret-laboratory/adjust-gameplay-settings", "gameserver/scp-secret-laboratory/configure-friendly-fire", "gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/edit-config-files"]
---

Über die Datei `config_remoteadmin.txt` kannst Du Spielern Admin-, Moderator- oder Eigentümer-Rechte zuweisen.

> [!WARNING]
> Der Pfad zur Konfigurationsdatei enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt`. Ersetze `<Port>` durch den tatsächlichen Port Deines Servers. Den Port findest Du in der Verwaltung unter **Übersicht**.

## Rang zuweisen

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt
   ```

5. **Eintrag im Members-Abschnitt hinzufügen**\
   Suche den Abschnitt `Members:` und füge Deinen Spieler im folgenden Format hinzu:

   ```text
   Members:
   - '76561198012345678@steam: owner'
   ```

   Ersetze die SteamID64 durch die Deines Spielers und setze den passenden Rang (z.B. `owner`, `admin`, `moderator`). Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) kannst Du über die verlinkte Anleitung herausfinden.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

## Standard-Rollen

| Rolle | Beschreibung |
|-------|--------------|
| `owner` | Voller Zugriff auf alle Funktionen |
| `admin` | Umfassende Admin-Rechte |
| `moderator` | Eingeschränkte Moderations-Rechte |

> [!WARNING]
> Die Datei `config_remoteadmin.txt` reagiert empfindlich auf falsche Formatierung. Achte auf die korrekte Einrückung, Anführungszeichen und Bindestriche bei jedem Eintrag, sonst lädt der Server die Datei nicht korrekt.

> [!NOTE]
> Änderungen an der Rang-Konfiguration werden erst nach einem Neustart des Servers übernommen – es gibt kein Hot-Reload.
