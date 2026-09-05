---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Minecraft Endstone Edition Server hinzu"
description: "Admin auf einem Minecraft Endstone Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/minecraft-endstone-edition/add-mods", "gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

Endstone bringt kein eigenes Admin-System mit, sondern nutzt die Operator-Stufen des Bedrock Dedicated Servers. Alle Admin-Befehle von Endstone – etwa `/ban` oder `/reload` – sind an die Stufe **Operator** gebunden.

## Rechte-Stufen im Überblick

| Stufe | Bedeutung |
|-------|-----------|
| `visitor` | Kann die Welt nur betrachten – kein Bauen und kein Interagieren |
| `member` | Standardstufe – kann bauen, abbauen und craften |
| `operator` | Vollständige Adminrechte inklusive aller Admin-Befehle |

> [!IMPORTANT]
> Damit Befehle **im Spiel-Chat** genutzt werden können, muss in der Datei `server.properties` im Hauptordner Deines Servers folgender Eintrag gesetzt sein:
>
> ```text
> allow-cheats=true
> ```
>
> Steht dort `false`, kann auch ein Spieler mit der Stufe Operator im Chat keine Befehle ausführen. In der Konsole Deines Servers stehen Dir die Befehle unabhängig von dieser Einstellung zur Verfügung.

## Admin über die Konsole hinzufügen

Das ist der übliche Weg, wenn Du selbst noch keine Operator-Rechte hast.

1. **Konsole öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zur Konsole.

2. **Befehl eingeben**\
   Gib folgenden Befehl mit dem Spielernamen ein:

   ```text
   op <Spielername>
   ```

3. **Bestätigung abwarten**\
   Der Server bestätigt die Vergabe. Ist der Spieler gerade online, erhält er seine Operator-Rechte sofort.

> [!NOTE]
> In der Konsole Deines Servers gibst Du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst Du sie mit `/`.

## Admin im Spiel hinzufügen

> [!WARNING]
> Um diesen Weg zu nutzen, musst Du selbst bereits Operator sein. Andernfalls nutze die Konsole.

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server.

2. **Chat öffnen**\
   Öffne den Chat mit der für Dein Gerät passenden Taste beziehungsweise über das Chat-Symbol.

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

   ```text
   /op <Spielername>
   ```

## Adminrechte entziehen

```text
/deop <Spielername>
```

Damit verliert der Spieler seine Operator-Rechte wieder.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/op <Spielername>` | Gibt dem angegebenen Spieler Operator-Rechte |
| `/deop <Spielername>` | Nimmt dem angegebenen Spieler die Operator-Rechte |

## Admin über die permissions.json eintragen

Alternativ trägst Du einen Spieler direkt in die Rechte-Datei ein. Verwendet wird dort die **XUID** des Spielers, nicht sein Name.

> [!TIP]
> Die XUID eines Spielers wird in der Konsole Deines Servers angezeigt, sobald der Spieler dem Server beitritt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **permissions.json öffnen**\
   Öffne im Hauptordner Deines Servers die Datei:

   ```text
   permissions.json
   ```

4. **Eintrag hinzufügen**\
   Füge innerhalb der eckigen Klammern folgenden Eintrag ein:

   ```json
   [
       {
           "permission": "operator",
           "xuid": "2535413418839840"
       }
   ]
   ```

   > [!NOTE]
   > Möchtest Du mehrere Spieler eintragen, trennst Du die Einträge mit einem Komma:
   >
   > ```json
   > [
   >     {
   >         "permission": "operator",
   >         "xuid": "2535413418839840"
   >     },
   >     {
   >         "permission": "member",
   >         "xuid": "2535413418839841"
   >     }
   > ]
   > ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Achte auf gültiges JSON: Jeder Eintrag steht in geschweiften Klammern, die Einträge werden durch Kommas getrennt, und nach dem letzten Eintrag steht **kein** Komma. Ist die Datei fehlerhaft, kann der Server sie nicht einlesen. Prüfe die Datei nach dem Bearbeiten deshalb mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/).

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/minecraft-endstone-edition/kick-ban-players).
