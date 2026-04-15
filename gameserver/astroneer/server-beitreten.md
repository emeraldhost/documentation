---
description: Einem Astroneer Server beitreten
---

# So trittst du deinem Astroneer Server bei

Um deinem Server beizutreten, benötigst du die IP-Adresse und den Port deines Servers sowie – falls gesetzt – das Server-Passwort.

1. <b>Astroneer starten</b><br>
   Starte Astroneer über Steam.

2. <b>CO-OP auswählen</b><br>
   Wähle im Hauptmenü **CO-OP**.

3. <b>Dedicated Server wählen</b><br>
   Klicke auf **Dedicated Server**, um einem dedizierten Server beizutreten.

4. <b>Server-Adresse eingeben</b><br>
   Gib die IP-Adresse und den Port deines Servers im folgenden Format ein:

   ```
   123.45.67.89:8777
   ```

5. <b>Passwort eingeben (optional)</b><br>
   Falls auf deinem Server ein Passwort gesetzt ist, gib dieses ein.

6. <b>Beitreten</b><br>
   Bestätige, um deinem Server beizutreten.

## Verschlüsselung deaktivieren

Einige Clients — insbesondere unter Linux oder auf dem Steam Deck, gelegentlich aber auch unter Windows — können sich nicht direkt mit einem Astroneer-Dedicated-Server verbinden. In diesem Fall muss die Verschlüsselung sowohl auf dem Server als auch auf allen Clients deaktiviert werden.

### Auf dem Server

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Verschlüsselung deaktivieren</b><br>
   Aktiviere den Schalter **Deaktiviere Encryption**.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

### Auf dem Client

1. <b>Engine.ini öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %localappdata%\Astro\Saved\Config\WindowsNoEditor\Engine.ini
   ```

2. <b>Eintrag ergänzen</b><br>
   Füge am Ende der Datei folgenden Abschnitt ein:

   ```
   [SystemSettings]
   net.AllowEncryption=False
   ```

3. <b>Datei speichern</b><br>
   Speichere die Datei und starte Astroneer neu.

:::: warning Achtung
Das Deaktivieren der Verschlüsselung wird nicht empfohlen, da es die Sicherheit der Verbindung reduziert. Nutze diese Option nur, wenn es keine andere Möglichkeit gibt, eine Verbindung zum Server herzustellen.
::::
