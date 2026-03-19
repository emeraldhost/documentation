---
description: Docker auf einem Linux Rootserver / vServer installieren (Ubuntu/Debian)
---

# So installierst du Docker auf deinem Linux Rootserver / vServer

Docker ermöglicht es dir, Anwendungen in isolierten Containern auszuführen.

## Docker installieren

1. <b>System aktualisieren</b><br>
   Aktualisiere zunächst die Paketlisten:

   ```bash
   sudo apt update
   ```

2. <b>Abhängigkeiten installieren</b><br>
   Installiere die benötigten Pakete:

   ```bash
   sudo apt install ca-certificates curl gnupg -y
   ```

3. <b>GPG-Schlüssel hinzufügen</b><br>
   Füge den offiziellen Docker GPG-Schlüssel hinzu:

   ```bash
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

   :::: info Hinweis
   Für Debian ersetze `ubuntu` durch `debian` in der URL.
   ::::

4. <b>Repository hinzufügen</b><br>
   Füge das offizielle Docker-Repository hinzu:

   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. <b>Docker installieren</b><br>
   Aktualisiere die Paketlisten und installiere Docker:

   ```bash
   sudo apt update
   sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
   ```

6. <b>Installation prüfen</b><br>
   Überprüfe, ob Docker korrekt installiert wurde:

   ```bash
   sudo docker run hello-world
   ```

   Wenn die Installation erfolgreich war, wird eine Bestätigungsmeldung angezeigt.

## Nützliche Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `docker ps` | Laufende Container anzeigen |
| `docker ps -a` | Alle Container anzeigen |
| `docker images` | Heruntergeladene Images anzeigen |
| `docker start <Container>` | Container starten |
| `docker stop <Container>` | Container stoppen |
| `docker rm <Container>` | Container löschen |
| `docker compose up -d` | Docker Compose starten |
| `docker compose down` | Docker Compose stoppen |

:::: tip Tipp
Docker wird automatisch beim Systemstart gestartet. Du kannst den Status mit `sudo systemctl status docker` prüfen.
::::
