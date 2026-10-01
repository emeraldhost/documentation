---
description: GSL Token (Steam Game Server Login Token) auf einem Garry's Mod Server setzen
---

# So setzt du den GSL Token auf deinem Garry's Mod Server

Der GSL Token (Steam Game Server Login Token, kurz GSLT) verknüpft deinen Server mit einem Steam-Konto. Seit dem Update im Mai 2020 sollte jeder Garry's Mod Server einen solchen Token haben – Server ohne Token werden in der Serverliste stark abgewertet und dadurch kaum noch gefunden. Die direkte Verbindung über IP und Port ([Server beitreten](server-beitreten.md)) funktioniert auch ohne Token.

## Voraussetzungen für dein Steam-Konto

Damit du einen Token erstellen kannst, muss dein Steam-Konto folgende Bedingungen erfüllen:

- Das Konto ist weder in der Community gebannt noch gesperrt.
- Das Konto ist kein eingeschränktes Konto („limited account“).
- Im Konto ist eine gültige Telefonnummer hinterlegt.
- Du besitzt Garry's Mod auf diesem Konto.

## Token erstellen

1. <b>Steam-Game-Server-Seite öffnen</b><br>
   Öffne [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und melde dich mit deinem Steam-Konto an.

2. <b>App-ID eintragen</b><br>
   Trage im Feld für die App-ID des Basisspiels **4000** (Garry's Mod) ein.

   :::: warning Achtung
   Verwende immer die App-ID `4000`. Die App-ID `4020` gehört zum Dedicated-Server-Tool und ist hier falsch.
   ::::

3. <b>Token erstellen und kopieren</b><br>
   Erstelle den Token und kopiere ihn. Er erscheint anschließend in der Liste deiner Game Server Accounts.

   :::: tip Beispiel
   So ähnlich sieht ein Token aus (Beispielwert, nicht verwendbar):

   ```
   BEISPIELTOKEN0000000000000000000
   ```
   ::::

:::: danger Wichtig
Jeder Server benötigt einen **eigenen** Token. Erscheint in der Konsole die Meldung `Connection to Steam servers lost. (Steam error code 6)` und werden Spieler getrennt, liegt das meist daran, dass derselbe Token auf mehreren Servern genutzt wird.
::::

## Token in der Verwaltung hinterlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Token eintragen</b><br>
   Füge den Token im Feld **Steam Account Token** ein. Das Feld erwartet genau 32 Zeichen aus Buchstaben und Ziffern. Der Server startet damit mit dem Parameter:

   ```
   +sv_setsteamaccount BEISPIELTOKEN0000000000000000000
   ```

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu, damit der Token übernommen wird.

## Token überprüfen

1. <b>Konsole öffnen</b><br>
   Öffne in der Verwaltung deines Servers die Konsole und beobachte den Start.

2. <b>Start kontrollieren</b><br>
   Ein ungültiger oder abgelaufener Token verhindert, dass der Server startet. Startet dein Server nicht, prüfe den Token im Feld **Steam Account Token** auf Tippfehler und Leerzeichen und vergleiche ihn mit dem Token in der Liste unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers).

## Token erneuern

Ist dein Token in falsche Hände geraten oder funktioniert er nicht mehr, erstellst du einfach einen neuen.

1. <b>Token neu generieren</b><br>
   Öffne erneut [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und wähle beim betroffenen Token **Regenerate token**. Der alte Token wird damit ungültig.

2. <b>Neuen Token eintragen</b><br>
   Trage den neuen Token wie oben beschrieben im Feld **Steam Account Token** ein, speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Änderst du das Passwort deines Steam-Kontos oder wird es zurückgesetzt, werden alle deine bisherigen Tokens ungültig. Tokens, mit denen sich lange Zeit kein Server anmeldet, laufen außerdem ab. Generiere in beiden Fällen einen neuen Token und trage ihn erneut in der Verwaltung ein.
::::

:::: warning Achtung
Gib deinen Token niemals an Dritte weiter. Hast du ihn doch weitergegeben, lösche ihn unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers). Wird ein Game Server Account gesperrt, kann dein Steam-Konto beim Spielen von Garry's Mod eingeschränkt werden.
::::
