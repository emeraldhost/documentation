---
description: OP-Rechte auf einem Minecraft Java Edition Server vergeben
---

# So vergibst du OP-Rechte auf einem Minecraft Java Server

## OP-Rechte über den Ingame-Chat vergeben

::: warning Achtung
Um diesen Befehl ausführen zu können, musst Du bereits OP-Rechte besitzen. Falls Du diese nicht hast, verwende stattdessen die [Konsole](#konsole) oder die [ops.json](#ops.json)-Methode.
:::

::: info Info
Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.
:::

1. **Logge dich auf Deinen Minecraft-Server ein.**

2. **Öffne den Chat. Standardmäßig mit der Taste `t`**

3. **Gib folgenden Befehl ein:**

    ```
    /op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Server-Konsole vergeben {#konsole}

::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
:::

::: info Info
Spieler erhalten beim Vergeben von OP-Rechten automatisch das OP-Level, das in der Datei `server.properties` unter dem Eintrag `op-permission-level` festgelegt ist.
:::

1. **Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.**

2. **Navigiere zur Server-Konsole unter dem Menüpunkt "Übersicht".**

3. **Gib folgenden Befehl ein:**

    ```
    op <spielername>     # Macht den Spieler zum Operator
    ```

## OP-Rechte über die Datei ops.json vergeben {#ops.json}

1. **Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `ops.json`.**

2. **Füge innerhalb der eckigen Klammern `[]` folgenden Eintrag ein:**

    ```
    {
        "uuid": "<spieleruuid>",
        "name": "<spielename>",
        "level": 4,
        "bypassesPlayerLimit": false
    }
    ```

3. **Speichere die Änderungen und starte den Server neu.**

::: info Info
Wenn Du mehrere Spieler eintragen möchtest, trenne die Einträge mit einem Komma `,`:

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

**Erklärung der OP-Level**

- **Level 1:** Kann geschützte Spawn-Bereiche verändern.
- **Level 2:** Kann Befehlsblöcke bearbeiten und grundlegende Befehle nutzen (ausgenommen Level 3-4 Befehle).
- **Level 3:** Darf Sanktionen wie `/kick`, `/ban` usw. ausführen.
- **Level 4:** Hat volle administrative Kontrolle, inkl. Serverbefehlen wie `/stop`.

::: info Info
`bypassesPlayerLimit` erlaubt es dem Spieler, auch dann dem Server beizutreten, wenn das Spielerlimit erreicht ist.
:::

::: tip Tipp
Die UUID eines Spielers kannst Du z.B. bei **NameMC** anhand seines Namens herausfinden.
:::
