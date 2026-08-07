---
description: Steam Web API Key auf einem FiveM Server hinterlegen
---

# So hinterlegst du den Steam Web API Key auf deinem FiveM Server

Mit einem **Steam Web API Key** kann dein FiveM Server den Steam-Identifier deiner Spieler auslesen (z.B. `steam:110000100000000`). Viele Skripte greifen auf diesen Identifier zurück, etwa für Whitelists, Bans oder die Spielerverwaltung.

Der Key ist optional. Ohne ihn läuft dein Server ganz normal, deine Spieler erhalten dann lediglich keinen Steam-Identifier.

:::: info Hinweis
Im Feld **Steam Web API Key** steht standardmäßig `none`. Mit diesem Wert überspringt dein Server die Steam-Authentifizierung vollständig. Trage nur dann einen Key ein, wenn eines deiner Skripte den Steam-Identifier benötigt.
::::

## Steam Web API Key erstellen

1. <b>Steam-Seite öffnen</b><br>
   Öffne die Seite [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) und melde dich mit deinem Steam-Konto an.

2. <b>Domain angeben</b><br>
   Steam fragt nach einem Domainnamen, der dem Key zugeordnet wird. Trage hier die Domain deines Projekts ein.

   :::: info Hinweis
   Ein eingeschränktes Steam-Konto (limited account) kann keinen Steam Web API Key erstellen. Wie du diese Einschränkung aufhebst, beschreibt der [Steam Support](https://help.steampowered.com/de/faqs/view/71D3-35C2-AD96-AA3A).
   ::::

3. <b>Key kopieren</b><br>
   Bestätige die Nutzungsbedingungen, registriere den Key und kopiere ihn.

## Steam Web API Key hinterlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Key eintragen</b><br>
   Trage den kopierten Key im Feld **Steam Web API Key** ein.

   :::: info Hinweis
   Das Feld darf nicht leer bleiben. Trage entweder einen gültigen Key oder `none` ein.
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Der Wert aus diesem Feld wird bei jedem Serverstart als `set steam_webApiKey` in die `server.cfg` geschrieben. Änderst du diese Zeile stattdessen per [SFTP](../sftp-verbindung-herstellen.md), geht deine Änderung beim nächsten Start verloren.
::::

:::: warning Achtung
Behandle den Key wie ein Passwort. Er gehört zu deinem Steam-Konto, gib ihn also niemals weiter und veröffentliche ihn nicht in Screenshots oder Auszügen deiner `server.cfg`.
::::

:::: tip Tipp
Änderst du dein Steam-Passwort oder deine Steam Guard Einstellungen, kann der Key ungültig werden. In der Server-Konsole erscheint dann ein Hinweis, dass dein Steam Web API Key ungültig sein könnte. Erstelle in diesem Fall einen neuen Key und hinterlege ihn erneut.
::::
