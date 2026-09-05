---
slug: "ssh-zugang-absichern"
language: "de"
title: "So sicherst Du den SSH-Zugang auf Deinem Linux Rootserver / vServer ab"
description: "SSH-Zugang auf einem Linux Rootserver / vServer absichern mit SSH-Keys, Root-Login deaktivieren und SSH-Port ändern"
tags: []
date: "2026-03-16"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "SSH-Zugang absichern"
sort: 3
related: ["rootserver/basic-configuration/change-root-password", "rootserver/basic-configuration/install-fail2ban", "rootserver/basic-configuration/install-ufw"]
---

Diese Anleitung zeigt Dir, wie Du Deinen Rootserver / vServer vor Angreifern schützt, indem Du SSH-Keys einrichtest, den Root-Login deaktivierst und den SSH-Port änderst.

> [!WARNING]
> Befolge die Schritte der Reihenfolge nach. Wenn Du die Passwort-Authentifizierung deaktivierst, bevor Du Deinen SSH-Key hinzugefügt hast, sperrst Du Dich aus dem Server aus.

## 1. SSH-Key erstellen

Erstelle zuerst ein SSH-Schlüsselpaar auf Deinem **lokalen PC**.

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

- `~/.ssh/id_ed25519` – Dein **privater Schlüssel** (diesen niemals teilen!)
- `~/.ssh/id_ed25519.pub` – Dein **öffentlicher Schlüssel** (dieser kommt auf den Server)

## 2. Public Key auf den Server hochladen

### Upload unter Linux / macOS

```bash
ssh-copy-id root@DEINE_SERVER_IP
```

### Upload unter Windows (PowerShell)

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh root@DEINE_SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

> [!TIP]
> **Test**
>
> Teste die Verbindung, bevor Du weitermachst:
>
> ```bash
> ssh root@DEINE_SERVER_IP
> ```
>
> Du solltest Dich **ohne Passworteingabe** einloggen können.

## 3. Neuen Benutzer anlegen (optional)

> [!NOTE]
> Dieser Schritt ist optional. Wenn Du keinen eigenen Benutzer anlegen möchtest, kannst Du diesen Punkt überspringen und weiterhin als Root arbeiten.

Optional kannst Du einen eigenen Benutzer erstellen, anstatt Dich als Root einzuloggen.

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

> [!TIP]
> **Test**
>
> Teste den Login mit dem neuen Benutzer, bevor Du weitermachst:
>
> ```bash
> ssh meinbenutzer@DEINE_SERVER_IP
> ```

## 4. Root-Login und Passwort-Authentifizierung deaktivieren

Öffne die SSH-Konfiguration:

```bash
sudo nano /etc/ssh/sshd_config
```

Suche und ändere die folgenden Zeilen:

```text
PasswordAuthentication no
```

Falls Du in Schritt 3 einen eigenen Benutzer angelegt hast, kannst Du zusätzlich den Root-Login deaktivieren:

```text
PermitRootLogin no
```

> [!IMPORTANT]
> Stelle sicher, dass Dein SSH-Key funktioniert und Du Dich per SSH-Key einloggen kannst, **bevor** Du diese Änderungen vornimmst. Sonst sperrst Du Dich aus!

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

```text
Port 2222
```

> [!NOTE]
> Wähle einen Port zwischen **1024** und **65535**, der nicht bereits in Verwendung ist. In diesem Beispiel verwenden wir **2222**.

Falls Du UFW verwendest, erlaube den neuen Port vor dem Neustart:

```bash
sudo ufw allow 2222/tcp
```

Starte den SSH-Dienst neu:

```bash
sudo systemctl restart sshd
```

Ab jetzt verbindest Du Dich mit:

```bash
ssh -p 2222 root@DEINE_SERVER_IP
```

> [!IMPORTANT]
> Schließe Deine aktuelle SSH-Sitzung **nicht**, bis Du Dich in einem neuen Terminal erfolgreich über den neuen Port verbunden hast!

## Zusammenfassung

| Maßnahme | Wirkung |
|----------|---------|
| SSH-Key | Sichere Authentifizierung ohne Passwörter |
| Neuer Benutzer | Kein direkter Root-Zugriff |
| Root-Login deaktivieren | Blockiert Root-Anmeldeversuche |
| Passwort-Auth deaktivieren | Verhindert Brute-Force-Angriffe |
| SSH-Port ändern | Reduziert automatisierte Angriffe |

> [!TIP]
> **Weitere Absicherung**
>
> Für zusätzlichen Schutz richte auch [Fail2Ban](/tutorials/rootserver/basic-configuration/install-fail2ban) und [UFW](/tutorials/rootserver/basic-configuration/install-ufw) ein.
