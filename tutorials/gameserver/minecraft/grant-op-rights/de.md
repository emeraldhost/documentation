---
slug: "op-rechte-vergeben"
language: "de"
title: "So vergibst Du OP-Rechte auf einem Minecraft Java Edition Server"
description: "OP-Rechte auf einem Minecraft Java Edition Server vergeben"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "OP-Rechte vergeben"
sort: 9
related: ["gameserver/minecraft/enable-whitelist", "gameserver/minecraft/fix-server-crashes", "gameserver/minecraft/improve-performance", "gameserver/minecraft/increase-slots"]
---

## OP-Rechte über den Ingame-Chat vergeben

> [!WARNING]
> Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [ops.json](#ops.json)-Methode.

> [!NOTE]
> Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.

1. **Server beitreten**\
   Logge Dich auf Deinen Minecraft-Server ein.

2. **Chat öffnen**\
   Öffne den Chat. Standardmäßig mit der Taste `t`.

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

   ```text
   /op <spielername>     # Macht den Spieler zum Operator
   ```

## OP-Rechte über die Server-Konsole vergeben {#konsole}

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

> [!NOTE]
> Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.

1. **Dashboard öffnen**\
   Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.

2. **Konsole aufrufen**\
   Navigiere zur Server-Konsole unter dem Menüpunkt „Übersicht“.

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

   ```text
   op <spielername>     # Macht den Spieler zum Operator
   ```

## OP-Rechte über die Datei ops.json vergeben {#ops.json}

1. **Datei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `ops.json`.

2. **Eintrag hinzufügen**\
   Füge innerhalb der eckigen Klammern `[]` folgenden Eintrag ein:

   ```text
   {
       "uuid": "<spieleruuid>",
       "name": "<spielename>",
       "level": 4,
       "bypassesPlayerLimit": false
   }
   ```

3. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

> [!NOTE]
> Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma `,`:
>
> ```text
> {
>     "uuid": "<spieler1uuid>",
>     "name": "<spieler1name>",
>     "level": 4,
>     "bypassesPlayerLimit": false
> },
> {
>     "uuid": "<spieler2uuid>",
>     "name": "<spieler2name>",
>     "level": 4,
>     "bypassesPlayerLimit": false
> }
> ```

### OP-Level

| Level | Beschreibung |
|-------|--------------|
| 1 | Kann geschützte Spawn-Bereiche verändern |
| 2 | Kann Befehlsblöcke bearbeiten und grundlegende Befehle nutzen (ausgenommen Level 3-4 Befehle) |
| 3 | Darf Sanktionen wie `/kick`, `/ban` usw. ausführen |
| 4 | Hat volle administrative Kontrolle, inkl. Serverbefehlen wie `/stop` |

> [!NOTE]
> `bypassesPlayerLimit` erlaubt es dem Spieler, auch dann dem Server beizutreten, wenn das Spielerlimit erreicht ist.

> [!TIP]
> Die UUID eines Spielers kannst Du z.B. bei **NameMC** anhand seines Namens herausfinden.
