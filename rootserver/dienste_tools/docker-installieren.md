---
description: Docker auf einem Rootserver installieren (Ubuntu/Debian)
---

# Docker installieren

## Inoffizielles apt Paket

::: info :information_source: Wichtig
Hier wird ein inoffizielles Paket von Docker installiert. Trotzdem funktioniert es super, es spricht nichts gegen eine Nutzung.
:::

1. Aktualisiere zunächst das System deines Linux-Servers. Dazu öffne die Konsole und gib den folgenden Befehl ein.

    ```
    apt update
    ```

2. Installiere das Paket "docker.io", indem Du folgenden Befehl in der Konsole eingibst:

    ```
    apt install docker.io
    ```

3. Starte den Docker-Dienst mit folgendem Befehl:

    ```
    sudo systemctl start docker
    ```

4. Konfiguriere den Docker-Dienst, um automatisch gestartet zu werden, wenn das System hochgefahren wird, indem Du folgenden Befehl eingibst:

    ```
    sudo systemctl enable docker
    ```

4. Überprüfe, ob Docker ordnungsgemäß installiert wurde, mit folgendem Befehl:&#x20;

    ```
    sudo docker run hello-world
    ```

5. Wenn Docker ordnungsgemäß installiert wurde, wird das Hello-World-Beispiel ausgeführt und eine Bestätigungsmeldung angezeigt.

## Offizielles Skript

::: info :information_source: Wichtig
Diese Variante ist offiziell von Docker bereitgestellt allerdings sollte sie nur für Test- und Entwicklungsumgebungen verwendet werden.
:::

1. Aktualisiere zunächst das System deines Linux-Servers und installiere Curl. Gib diesen Befehl in die Konsole deines Servers ein:

    ```
    apt update && apt install curl -y
    ```

2. Installiere nun Docker mithilfe des Skripts. Gib dafür diese Befehle ein:

    ```
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    ```
    
3. Überprüfe, ob Docker ordnungsgemäß installiert wurde, mit folgendem Befehl:&#x20;

    ```
    sudo docker run hello-world
    ```

4. Wenn Docker ordnungsgemäß installiert wurde, wird das Hello-World-Beispiel ausgeführt und eine Bestätigungsmeldung angezeigt.


Nun ist Docker erfolgreich auf deinem Linux-Server installiert und Du kannst Container ausführen und verwalten. Um weitere Docker-Befehle zu lernen, kannst Du die Docker-Dokumentation lesen oder Online-Ressourcen nutzen.
