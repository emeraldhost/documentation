---
description: Root-Passwort auf einem Linux Rootserver / vServer ändern
---

# So änderst du das Root-Passwort auf deinem Linux Rootserver / vServer

Mit dem Befehl `passwd` kannst du das Passwort deines aktuellen Benutzers – oder als Root auch das anderer Benutzer – direkt auf dem Server ändern.

## Als Root anmelden

1. <b>Per SSH verbinden</b><br>
   Verbinde dich per SSH mit deinem Server:

   ```bash
   ssh root@DEINE_SERVER_IP
   ```

## Eigenes Passwort ändern

Führe folgenden Befehl aus:

```bash
passwd
```

Du wirst nacheinander aufgefordert:

1. Dein **aktuelles Passwort** einzugeben (nur bei Nicht-Root-Nutzern).
2. Dein **neues Passwort** einzugeben.
3. Das neue Passwort zur Bestätigung **erneut einzugeben**.

:::: info Hinweis
Aus Sicherheitsgründen wird während der Eingabe nichts angezeigt – auch keine Sternchen. Tippe das Passwort blind ein und bestätige mit Enter.
::::

## Passwort eines anderen Benutzers ändern

Als Root kannst du das Passwort jedes anderen Benutzers setzen, ohne das alte zu kennen:

```bash
passwd BENUTZERNAME
```

Beispiel:

```bash
passwd meinbenutzer
```

## Tipps für sichere Passwörter

- Mindestens **16 Zeichen**.
- Mischung aus Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen.
- Kein Wort aus dem Wörterbuch und keine persönlichen Daten.
- Für jeden Dienst ein eigenes Passwort – idealerweise verwaltet in einem Passwortmanager.

:::: tip Tipp
Noch mehr Sicherheit gewinnst du, wenn du statt Passwörtern SSH-Keys nutzt. Die komplette Anleitung dazu findest du unter [SSH-Zugang absichern](ssh-zugang-absichern.md).
::::
