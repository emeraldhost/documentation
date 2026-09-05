---
slug: "admin-werden"
language: "de"
title: "So wirst Du Admin auf Deinem Squad 44 Server"
description: "Admin auf einem Squad 44 Server werden"
tags: []
date: "2026-04-28"
visibility: "public"
cta: "gameserver"
product_keys: ["squad-44"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin werden"
sort: 1
related: ["gameserver/squad-44/allow-team-change", "gameserver/squad-44/change-max-players", "gameserver/squad-44/change-server-name", "gameserver/squad-44/create-backup"]
---

Über die Datei `Admins.cfg` kannst Du Spielern Admin- oder Moderator-Rechte zuweisen. Admins werden in Squad 44 immer einer **Gruppe** zugeordnet, die festlegt, welche Rechte sie haben.

## Admin hinzufügen

1. **SteamID64 herausfinden**\
   Notiere Dir die [SteamID64](/tutorials/gameserver/steamid64-find-out) des Spielers, dem Du Admin-Rechte geben möchtest.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Admins.cfg öffnen**\
   Navigiere zu folgender Datei und öffne sie:

   ```text
   /PostScriptum/ServerConfig/Admins.cfg
   ```

5. **Admin-Eintrag hinzufügen**\
   Füge am Ende der Datei eine neue Zeile im folgenden Format hinzu:

   ```text
   Admin=SteamID64:Gruppe
   ```

   Beispiel:

   ```text
   Admin=76561198000000000:Admin
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

## Standard-Gruppen

Squad 44 liefert in der `Admins.cfg` bereits vordefinierte Gruppen mit, die Du direkt verwenden kannst:

| Gruppe | Beschreibung |
|--------|--------------|
| `Admin` | Voller Zugriff auf alle Admin-Funktionen |
| `Moderator` | Eingeschränkte Moderations-Rechte (z.B. Kick, Ban, Chat) |
| `Whitelist` | Reservierter Slot ohne Admin-Rechte |

## Eigene Gruppe erstellen

Du kannst auch eigene Gruppen mit individuellen Rechten anlegen. Ergänze dazu eine Zeile im folgenden Format:

```text
Group=GruppenName:Recht1,Recht2,Recht3
```

Beispiel:

```text
Group=Helper:kick,ban,chat
```

Anschließend kannst Du Spielern diese Gruppe zuweisen:

```text
Admin=76561198000000000:Helper
```

> [!WARNING]
> Achte auf die exakte Schreibweise der Gruppen- und Rechte-Namen. Tippfehler führen dazu, dass der Server die Datei nicht korrekt lädt.

> [!NOTE]
> Änderungen an der `Admins.cfg` werden erst nach einem Neustart des Servers übernommen.
