---
slug: "op-rechte-vergeben"
language: "de"
title: "So vergibst Du OP-Rechte auf Deinem Minecraft Bedrock Server"
description: "Schritt-für-Schritt-Anleitung, wie Du in Minecraft Bedrock Edition OP-Rechte über den Ingame-Chat, die Server-Konsole oder die permissions.json-Datei vergibst."
tags: []
date: "2025-06-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "OP-Rechte vergeben"
sort: 7
related: ["gameserver/minecraft-bedrock/download-world", "gameserver/minecraft-bedrock/enable-allowlist", "gameserver/minecraft-bedrock/increase-slots", "gameserver/minecraft-bedrock/join-server"]
---

## OP-Rechte über den Ingame-Chat vergeben

> [!WARNING]
> Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [permissions.json](#permissions.json)-Methode.

1. **Server beitreten**\
   Logge Dich auf Deinen Minecraft-Server ein.

2. **Chat öffnen**\
   Öffne den Chat mit der für Deine Plattform passenden Taste:

    - **Windows 10:** `t`
    - **PlayStation & Xbox:** `D-Pad Rechts`
    - **Switch:** `→ auf dem Steuerkreuz`
    - **Mobile (Android/iOS):** `Tippe auf das Chat-Symbol (Sprechblase)`

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

    ```text
    /op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Server-Konsole vergeben {#konsole}

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

1. **Server auswählen**\
   Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.

2. **Konsole öffnen**\
   Navigiere zur Server-Konsole unter dem Menüpunkt „Übersicht“.

3. **Befehl eingeben**\
   Gib folgenden Befehl ein:

    ```text
    op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Datei permissions.json vergeben {#permissions.json}

1. **Server auswählen**\
   Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.

2. **Datei-Browser öffnen**\
   Gehe zum Datei-Browser.

3. **Datei öffnen**\
   Öffne die Datei `permissions.json`.

4. **Eintrag hinzufügen**\
   Füge innerhalb der eckigen Klammern `[]` folgenden Eintrag ein:

    ```text
    {
        "permission": "operator",
        "xuid": "<spielerxuid>"
    }
    ```

> [!NOTE]
> Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma `,`:
>
> ```text
>     {
>         "permission": "operator",
>         "xuid": "<spieler1xuid>"
>     },
>     {
>         "permission": "operator",
>         "xuid": "<spieler2xuid>"
>     }
> ```

**Rollen und Berechtigungen in Minecraft Bedrock**

- **Visitor:** Kann die Welt nur betrachten - kein Bauen oder Interagieren.
- **Member:** Standardrolle - kann bauen, abbauen und craften.
- **Operator:** Hat vollständige administrative Rechte, inkl. Befehlsnutzung und Serververwaltung.

> [!TIP]
> Die XUID eines Spielers wird angezeigt, wenn der Spieler dem Server beitritt - Du findest sie in der Konsole.
