---
description: SSH-Zugang auf einem Linux Rootserver / vServer absichern mit SSH-Keys, Root-Login deaktivieren und SSH-Port ändern
---

# So sicherst du den SSH-Zugang auf deinem Linux Rootserver / vServer ab

Diese Anleitung zeigt dir, wie du deinen Rootserver / vServer vor Angreifern schützt, indem du SSH-Keys einrichtest, den Root-Login deaktivierst und den SSH-Port änderst.

:::: warning Achtung
Befolge die Schritte der Reihenfolge nach. Wenn du die Passwort-Authentifizierung deaktivierst, bevor du deinen SSH-Key hinzugefügt hast, sperrst du dich aus dem Server aus.
::::

## 1. SSH-Key erstellen

Erstelle zuerst ein SSH-Schlüsselpaar auf deinem **lokalen PC**.

### Windows (PowerShell)

```powershell
ssh-keygen -t ed25519
```

### Linux / macOS (Terminal)

```bash
ssh-keygen -t ed25519
```

Bestätige den Standardpfad mit `Enter` und lege optional eine Passphrase für zusätzlichen Schutz fest.

Zwei Dateien werden erstellt:
- `~/.ssh/id_ed25519` — dein **privater Schlüssel** (diesen niemals teilen!)
- `~/.ssh/id_ed25519.pub` — dein **öffentlicher Schlüssel** (dieser kommt auf den Server)

## 2. Public Key auf den Server hochladen

### Linux / macOS

```bash
ssh-copy-id root@DEINE_SERVER_IP
```

### Windows (PowerShell)

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh root@DEINE_SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

:::: tip Test
Teste die Verbindung, bevor du weitermachst:

```bash
ssh root@DEINE_SERVER_IP
```

Du solltest dich **ohne Passworteingabe** einloggen können.
::::

## 3. Neuen Benutzer anlegen (optional)

:::: info Hinweis
Dieser Schritt ist optional. Wenn du keinen eigenen Benutzer anlegen möchtest, kannst du diesen Punkt überspringen und weiterhin als Root arbeiten.
::::

Optional kannst du einen eigenen Benutzer erstellen, anstatt dich als Root einzuloggen.

```bash
adduser meinbenutzer
```

Vergib dem Benutzer sudo-Rechte:

```bash
usermod -aG sudo meinbenutzer
```

Kopiere den SSH-Key zum neuen Benutzer:

```bash
mkdir -p /home/meinbenutzer/.ssh
cp ~/.ssh/authorized_keys /home/meinbenutzer/.ssh/authorized_keys
chown -R meinbenutzer:meinbenutzer /home/meinbenutzer/.ssh
chmod 700 /home/meinbenutzer/.ssh
chmod 600 /home/meinbenutzer/.ssh/authorized_keys
```

:::: tip Test
Teste den Login mit dem neuen Benutzer, bevor du weitermachst:

```bash
ssh meinbenutzer@DEINE_SERVER_IP
```
::::

## 4. Root-Login und Passwort-Authentifizierung deaktivieren

Öffne die SSH-Konfiguration:

```bash
sudo nano /etc/ssh/sshd_config
```

Suche und ändere die folgenden Zeilen:

```
PasswordAuthentication no
```

Falls du in Schritt 3 einen eigenen Benutzer angelegt hast, kannst du zusätzlich den Root-Login deaktivieren:

```
PermitRootLogin no
```

:::: danger Wichtig
Stelle sicher, dass dein SSH-Key funktioniert und du dich per SSH-Key einloggen kannst, **bevor** du diese Änderungen vornimmst. Sonst sperrst du dich aus!
::::

Speichere mit `Strg + O`, schließe mit `Strg + X` und starte den SSH-Dienst neu:

```bash
sudo systemctl restart sshd
```

## 5. SSH-Port ändern

Standardmäßig läuft SSH auf Port **22**. Durch das Ändern des Ports werden automatisierte Brute-Force-Angriffe reduziert.

Öffne die SSH-Konfiguration:

```bash
sudo nano /etc/ssh/sshd_config
```

Suche die Zeile `#Port 22` und ändere sie zu:

```
Port 2222
```

:::: info Hinweis
Wähle einen Port zwischen **1024** und **65535**, der nicht bereits in Verwendung ist. In diesem Beispiel verwenden wir **2222**.
::::

Falls du UFW verwendest, erlaube den neuen Port vor dem Neustart:

```bash
sudo ufw allow 2222/tcp
```

Starte den SSH-Dienst neu:

```bash
sudo systemctl restart sshd
```

Ab jetzt verbindest du dich mit:

```bash
ssh -p 2222 root@DEINE_SERVER_IP
```

:::: danger Wichtig
Schließe deine aktuelle SSH-Sitzung **nicht**, bis du dich in einem neuen Terminal erfolgreich über den neuen Port verbunden hast!
::::

## Zusammenfassung

| Maßnahme | Wirkung |
|----------|---------|
| SSH-Key | Sichere Authentifizierung ohne Passwörter |
| Neuer Benutzer | Kein direkter Root-Zugriff |
| Root-Login deaktivieren | Blockiert Root-Anmeldeversuche |
| Passwort-Auth deaktivieren | Verhindert Brute-Force-Angriffe |
| SSH-Port ändern | Reduziert automatisierte Angriffe |

:::: tip Weitere Absicherung
Für zusätzlichen Schutz richte auch [Fail2Ban](fail2ban-installieren.md) und [UFW](ufw-installieren.md) ein.
::::
