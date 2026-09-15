---
description: Spieler auf einem RuneScape Dragonwilds Server entbannen
---

# So entbannst du Spieler auf deinem RuneScape: Dragonwilds Server

Gebannte Spieler kannst du über das Ingame-Menü **Server Management** wieder entbannen. Das ist allerdings nur als **Owner** deines Servers möglich, nicht als Admin.

## Owner und Admin

Auf deinem Server gibt es zwei Rollen mit unterschiedlichen Rechten:

| Rolle | Voraussetzung | Bannen (online) | Bannen (offline) | Entbannen |
|-------|---------------|-----------------|------------------|-----------|
| Owner | Player ID stimmt mit der [Owner ID](owner-id-setzen.md) in der Verwaltung überein | Ja | Ja | Ja |
| Admin | Hat das [Admin Passwort](admin-passwort-setzen.md) im Server Management eingegeben | Ja (nur normale Spieler) | Nein | Nein |

## Spieler entbannen

1. <b>Als Owner beitreten</b><br>
   [Tritt deinem Server bei](server-beitreten.md) mit dem Account, dessen Player ID als Owner ID hinterlegt ist.

2. <b>Pausemenü öffnen</b><br>
   Drücke die Pause-Taste, um das Menü zu öffnen.

3. <b>Server Management öffnen</b><br>
   Navigiere zu **Settings** und wähle **Server Management** aus. Gib das Admin Passwort ein, falls du dazu aufgefordert wirst.

4. <b>Spieler entbannen</b><br>
   Wähle den Spieler in der Liste der gebannten Spieler aus und wähle die Option zum Entbannen. Der Spieler kann deinem Server danach wieder beitreten.

:::: warning Achtung
Als Admin kannst du Spieler **nicht entbannen**. Hat ein Admin einen Spieler versehentlich gebannt, muss der Owner den Bann aufheben.
::::

:::: info Hinweis
Gebannte Spieler erhalten derzeit **keine Meldung** über den Bann. Sie können deinem Server lediglich nicht mehr beitreten und erfahren nicht, warum.
::::

:::: tip Admin-Rechte entziehen
Admin-Rechte sind nicht an einzelne Spieler gebunden, sondern gelten für alle, die das Admin Passwort eingegeben haben – so lange, bis es geändert wird. Um allen bisherigen Admins die Rechte zu entziehen, ändere das [Admin Passwort](admin-passwort-setzen.md) in der Verwaltung und starte deinen Server neu.
::::
