---
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Bedrock Edition OP-Rechte über den Ingame-Chat, die Server-Konsole oder die permissions.json-Datei vergibst.
---

# OP-Rechte in Minecraft Bedrock Edition vergeben: Ingame-Chat, Server-Konsole & permissions.json

## OP-Rechte über den Ingame-Chat vergeben

::: warning Achtung
Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [permissions.json](#permissions.json)-Methode.
:::

1. <strong>Logge dich auf Deinen Minecraft-Server ein.</strong>

2. <strong>Öffne den Chat mit der für Deine Plattform passenden Taste:</strong>
    
    - <strong>Windows 10:</strong> ```t```
    - <strong>PlayStation & Xbox:</strong> ```D-Pad Rechts```
    - <strong>Switch:</strong> ```→ auf dem Steuerkreuz```
    - <strong>Mobile (Android/IOS):</strong> ```Tippe auf das Chat-Symbol (Sprechblase)```

3. <strong>Gib folgenden Befehl ein:</strong>

    ```
    /op <spielername>     # Macht den Spieler zum Operator
    ```


## OP-Rechte über die Server-Konsole vergeben {#konsole}

::: warning Achtung
In der Konsole müssen alle Befehle ohne ```/``` eingegeben werden!
:::

1. <strong>Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.</strong>

2. <strong>Navigiere zur Server-Konsole unter dem Menüpunkt "Übersicht".</strong>

3. <strong>Gib folgenden Befehl ein:</strong>

    ```
    op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Datei permissions.json vergeben {#permissions.json}

1. <strong>Öffne Dein Dashboard und wähle Deinen Minecraft Bedrock Edition Server aus.</strong>

2. <strong>Gehe zum Datei-Browser.</strong>

3. <strong>Öffne die Datei ```permissions.json```.</strong>

4. <strong>Füge innerhalb der eckigen Klammern ```[]``` folgenden Eintrag ein:</strong>

    ```
    {
        "permission": "operator",
        "xuid": "<spielerxuid>"
    }
    ```

::: info Info
Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma ```,```:
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
:::

<strong>Rollen und Berechtigungen in Minecraft Bedrock</strong>

- <strong>Visitor:</strong> Kann die Welt nur betrachten - kein Bauen oder Interagieren.
- <strong>Member:</strong> Standardrolle - kann bauen, abbauen und craften.
- <strong>Operator:</strong> Hat vollständige administrative Rechte, inkl. Befehlsnutzung und Serververwaltung.

::: tip Tipp
Die XUID eines Spielers wird angezeigt, wenn der Spieler dem Server beitritt - du findest sie in der Konsole.
:::