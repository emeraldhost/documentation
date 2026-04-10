---
description: Admin auf einem Terraria tModLoader Server hinzufügen
---

# So fügst du einen Admin auf deinem Terraria tModLoader Server hinzu

Admins werden in Terraria tModLoader über einen Authentifizierungscode vergeben, der beim Serverstart in der Serverkonsole angezeigt wird.

## Admin über Auth-Code einrichten

1. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

2. <b>Auth-Code auslesen</b><br>
   Öffne die Serverkonsole in der Verwaltung. Beim Start wird ein Authentifizierungscode angezeigt, z.B.:

   ```
   To enable cheats, type in the command 'auth <code>'
   ```

   Notiere dir diesen Code.

3. <b>Server beitreten</b><br>
   Tritt deinem Server als Spieler bei.

4. <b>Auth-Befehl eingeben</b><br>
   Gib im Ingame-Chat folgenden Befehl ein:

   ```
   /auth <code>
   ```

   Ersetze `<code>` durch den Auth-Code aus der Serverkonsole.

5. <b>Passwort festlegen (optional)</b><br>
   Nach erfolgreicher Authentifizierung kannst du ein dauerhaftes Passwort festlegen:

   ```
   /password <neues_passwort>
   ```

   Mit diesem Passwort kannst du dich in Zukunft direkt als Admin einloggen, ohne den Auth-Code zu benötigen.

:::: info Hinweis
Der Auth-Code ändert sich bei jedem Serverneustart. Wenn du ein dauerhaftes Passwort festgelegt hast, kannst du dich mit `/auth <passwort>` einloggen.
::::

:::: tip Tipp
Um weiteren Spielern Admin-Rechte zu geben, teile ihnen den aktuellen Auth-Code mit oder richte ein dauerhaftes Passwort ein, das sie verwenden können.
::::

:::: warning Hinweis
Das Auth-Code-System ist eine Funktion von tModLoader. Vanilla-Terraria-Server verwenden stattdessen die Serverkonsole direkt fuer Admin-Befehle und haben kein Auth-System. Wenn du Vanilla Terraria ohne tModLoader nutzt, benoetigst du ein Mod wie Hero's Mod oder TShock, um ein Ingame-Admin-System zu erhalten.
::::
