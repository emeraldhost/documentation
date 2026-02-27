---
description: Admin auf einem Palworld Server hinzufügen
---

# So fügst du einen Admin auf deinem Palworld Server hinzu

Du kannst über ein Admin Passwort dir und anderen Spielern Admin-Rechte vergeben.

## Admin Passwort festlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Admin Passwort setzen</b><br>
   Trage das gewünschte Admin Passwort ein und speichere die Einstellung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

:::: warning Achtung
Setze das Admin Passwort nicht direkt in der `PalWorldSettings.ini`, da es beim nächsten Serverstart vom Webinterface überschrieben wird.
::::

## Als Admin anmelden

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei.

2. <b>Chat öffnen</b><br>
   Drücke `Enter`, um den Chat zu öffnen.

3. <b>Admin-Login</b><br>
   Gib folgenden Befehl ein:

   ```
   /AdminPassword DeinAdminPasswort
   ```

:::: info Hinweis
Die Admin-Anmeldung gilt nur für die aktuelle Sitzung. Nach einem Neuverbinden musst du den Befehl erneut eingeben.
::::

:::: tip Tipp
Teile das Admin Passwort nur mit vertrauenswürdigen Spielern. Jeder mit dem Passwort kann sich Admin-Rechte vergeben.
::::
