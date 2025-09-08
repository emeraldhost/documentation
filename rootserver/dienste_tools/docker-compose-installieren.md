---
description: Docker Compose auf einem Rootserver installieren (Ubuntu/Debian)
---

# Docker Compse installieren

1. Aktualisiere zunächst das System deines Linux-Servers. Dazu öffne die Konsole und gib den folgenden Befehl ein.

    ```
    apt update
    ```
2. Falls du die offizielle Version von Docker schon mithilfe von apt installiert hast, kannst Du ganz einfach den [Docker Compose plugin installieren](#Docker-Compose-plugin-installieren).
   Falls diese Version von Docker nicht installiert ist, muss [Docker Compose seperat installiert werden (standalone)](#Docker-Compose-einzeln-installieren-standalone).

## Docker Compse plugin installieren

1. Gib dafür einfach diesen Befehl ein:

    ```
    apt install docker-compose-plugin
    ```

2. Teste nun mit diesem Befehl ob Docker Compose richtig installiert ist:

    ```
    docker compose version
    ```

3. Wenn Docker Compose richtig installiert wurde wird nun eine Version angezeigt.
   
## Docker Compose einzeln installieren (standalone)

1. Du kasnnst nun mit diesen Befehlen Docker Compose herunterladen und installieren:

    ```
    apt install curl
    curl -SL https://github.com/docker/compose/releases/download/v2.39.2/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
    ```

2. Jetzt müssen noch die Berechtigungen mit diesem Befehl richtig gesetzt werden:

    ```
    chmod +x /usr/local/bin/docker-compose
    ```

3. Teste nun mit diesem Befehl ob Docker Compose richtig installiert ist:

    ```
    docker-compose version
    ```

4. Wenn Docker Compose richtig installiert wurde wird nun eine Version angezeigt.

Nun ist Docker Compose auf deinem Linux-Server installiert und Du kannst Docker Compse Programme ausführen. Um mehr über Docker und Docker Compose zu lernen, kannst Du die Docker-Dokumentation lesen oder Online-Ressourcen nutzen.
