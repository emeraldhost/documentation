---
description: Schritt-für-Schritt-Anleitung, wie du deinen Minecraft Java Edition Server per Ingame-Chat oder Konsole moderierst.
---

# Minecraft Java Edition Server moderieren

:::: warning Achtung
Stelle sicher, dass Du die notwendigen Rechte besitzt, um den Befehl auszuführen! Hier findest Du eine Anleitung, wie Du Dir OP-Rechte gibst: [Anleitung](../op-rechte-vergeben.md)
::::

## Server über den Ingame-Chat moderieren

1. <b>Chat öffnen</b><br>
   Öffne den Chat. Standardmäßig mit der Taste `t`.

2. <b>Befehl eingeben</b><br>
   Nutze einen der folgenden Moderations-Befehle im Chat:

    ```
    /ban <spieler> [<grund>]    # Bannt den Spieler vom Server
    /ban-ip <spieler | IP-Addresse> [<grund>]    # Bannt die Spieler-IP vom Server
    /pardon <spieler>    # Entbannt den Spieler vom Server
    /pardon-ip <IP-Addresse>    # Entbannt die Spieler-IP vom Server
    /kick <spieler> [<grund>]    # Kickt den gewünschten Spieler vom Server
    ```

## Server über die Server-Konsole moderieren

:::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
::::

1. <b>Server auswählen</b><br>
   Öffne Dein Dashboard und wähle Deinen Minecraft Java Edition Server aus.

2. <b>Konsole öffnen</b><br>
   Navigiere zur Server-Konsole unter dem Menüpunkt "Übersicht".

3. <b>Befehl eingeben</b><br>
   Verwende einen der folgenden Moderations-Befehle in der Konsole:

    ```
    ban <spieler> [<grund>]    # Bannt den Spieler vom Server
    ban-ip <spieler | IP-Addresse> [<grund>]    # Bannt die Spieler-IP vom Server
    pardon <spieler>    # Entbannt den Spieler vom Server
    pardon-ip <IP-Addresse>    # Entbannt die Spieler-IP vom Server
    kick <spieler> [<grund>]    # Kickt den gewünschten Spieler vom Server
    ```
