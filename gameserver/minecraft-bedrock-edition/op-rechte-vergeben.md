---
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Bedrock Edition OP-Rechte über den Ingame-Chat, die Server-Konsole oder die permissions.json-Datei vergibst.
---

# OP-Rechte in Minecraft Bedrock Edition vergeben: Ingame-Chat, Server-Konsole & permissions.json

## OP-Rechte über den Ingame-Chat vergeben

:::: warning Achtung
Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [permissions.json](#permissions.json)-Methode.
::::

1. <b>Server beitreten</b><br>
   Logge dich auf Deinen Minecraft-Server ein.

2. <b>Chat öffnen</b><br>
   Öffne den Chat mit der für Deine Plattform passenden Taste:

    - **Windows 10:** `t`
    - **PlayStation & Xbox:** `D-Pad Rechts`
    - **Switch:** `→ auf dem Steuerkreuz`
    - **Mobile (Android/IOS):** `Tippe auf das Chat-Symbol (Sprechblase)`

3. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

    ```
    /op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Server-Konsole vergeben {#konsole}

:::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
::::

1. <b>Server auswählen</b><br>
   Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.

2. <b>Konsole öffnen</b><br>
   Navigiere zur Server-Konsole unter dem Menüpunkt "Übersicht".

3. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

    ```
    op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Datei permissions.json vergeben {#permissions.json}

1. <b>Server auswählen</b><br>
   Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.

2. <b>Datei-Browser öffnen</b><br>
   Gehe zum Datei-Browser.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `permissions.json`.

4. <b>Eintrag hinzufügen</b><br>
   Füge innerhalb der eckigen Klammern `[]` folgenden Eintrag ein:

    ```
    {
        "permission": "operator",
        "xuid": "<spielerxuid>"
    }
    ```

:::: info Info
Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma `,`:

```
    {
        "permission": "operator",
        "xuid": "<spieler1xuid>"
    },
    {
        "permission": "operator",
        "xuid": "<spieler2xuid>"
    }
```

::::

**Rollen und Berechtigungen in Minecraft Bedrock**

- **Visitor:** Kann die Welt nur betrachten - kein Bauen oder Interagieren.
- **Member:** Standardrolle - kann bauen, abbauen und craften.
- **Operator:** Hat vollständige administrative Rechte, inkl. Befehlsnutzung und Serververwaltung.

:::: tip Tipp
Die XUID eines Spielers wird angezeigt, wenn der Spieler dem Server beitritt - du findest sie in der Konsole.
::::
