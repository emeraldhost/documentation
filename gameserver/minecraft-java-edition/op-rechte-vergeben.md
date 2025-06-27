---
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Java Edition OP-Rechte über den Ingame-Chat, die Server-Konsole oder die ops.json-Datei vergibst.
---

# OP-Rechte in Minecraft Java Edition vergeben: Ingame-Chat, Server-Konsole & ops.json

## OP-Rechte über den Ingame-Chat vergeben

::: warning Achtung
Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [ops.json](#ops.json)-Methode.
:::

::: info Info
Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.
:::

1. <strong>Logge dich auf Deinen Minecraft-Server ein.</strong>

2. <strong>Öffne den Chat. Standardmäßig mit der Taste ```t```</strong>

3. <strong>Gib folgenden Befehl ein:</strong>

    ```
    /op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Server-Konsole vergeben {#konsole}

::: warning Achtung
In der Konsole müssen alle Befehle ohne ```/``` eingegeben werden!
:::

::: info Info
Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.
:::

1. <strong>Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.</strong>

2. <strong>Navigiere zur Server-Konsole unter dem Menüpunkt "Übersicht".</strong>

3. <strong>Gib folgenden Befehl ein:</strong>

    ```
    op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Datei ops.json vergeben {#ops.json}

1. <strong>Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.</strong>

2. <strong>Gehe zum Datei-Browser.</strong>

3. <strong>Öffne die Datei ```ops.json```.</strong>

4. <strong>Füge innerhalb der eckigen Klammern ```[]``` folgenden Eintrag ein:</strong>

    ```
    {
        "uuid": "<spieleruuid>",
        "name": "<spielename>",
        "level": 4,
        "bypassesPlayerLimit": false
    }
    ```

::: info Info
Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma ```,```:

```
{
    "uuid": "<spieler1uuid>",
    "name": "<spieler1name>",
    "level": 4,
    "bypassesPlayerLimit": false
},
{
    "uuid": "<spieler2uuid>",
    "name": "<spieler2name>",
    "level": 4,
    "bypassesPlayerLimit": false
}
```

:::

<strong>Erklärung der OP-Level</strong>

- <strong>Level 1:</strong> Kann geschützte Spawn-Bereiche verändern.
- <strong>Level 2:</strong> Kann Befehlsblöcke bearbeiten und grundlegende Befehle nutzen (ausgenommen Level 3–4 Befehle).
- <strong>Level 3:</strong> Darf Sanktionen wie ```/kick```, ```/ban``` usw. ausführen.
- <strong>Level 4:</strong> Hat volle administrative Kontrolle, inkl. Serverbefehlen wie ```/stop```.

::: info Info
```bypassesPlayerLimit``` erlaubt es dem Spieler, auch dann dem Server beizutreten, wenn das Spielerlimit erreicht ist.
:::

::: tip Tipp
Die UUID eines Spielers kannst Du z.B. bei <strong>NameMC</strong> anhand seines Namens herausfinden.
:::
