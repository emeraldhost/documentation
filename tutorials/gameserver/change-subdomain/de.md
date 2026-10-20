---
slug: "subdomain-aendern"
language: "de"
title: "So änderst Du die Subdomain Deines Gameservers"
description: "Subdomain eines Gameservers kopieren, ändern oder löschen und Dich damit verbinden"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Subdomain ändern"
sort: 9
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/create-database"]
---

Jeder Gameserver bekommt bei EmeraldHost automatisch eine eigene Subdomain im Format `<name>.emerald.game`. Statt einer IP-Adresse können sich Deine Spieler mit dieser Adresse verbinden – sie ist leichter zu merken und einfacher weiterzugeben. Du kannst die Subdomain jederzeit ändern, eine andere Domain wählen oder sie löschen.

## Subdomain kopieren

Deine aktuelle Subdomain steht in der Verwaltung Deines Servers direkt unter dem Servernamen. Klicke darauf, um sie in die Zwischenablage zu kopieren. Du siehst dann die Meldung „Subdomain erfolgreich kopiert“.

Außerdem findest Du die Subdomain in der **Übersicht** im Bereich **Server Informationen** in der Zeile **Subdomain**.

## Subdomain ändern

1. **Übersicht öffnen**\
   Öffne die Verwaltung Deines Servers und klicke in der linken Seitenleiste auf **Übersicht**.

2. **Subdomain bearbeiten**\
   Klicke im Bereich **Server Informationen** in der Zeile **Subdomain** auf das Stift-Symbol. Es öffnet sich der Dialog **Subdomain verwalten**.

3. **Subdomain wählen**\
   Trage im Feld **Subdomain-Name** den gewünschten Namen ein. Ist der Name noch frei, siehst Du den Hinweis „Diese Subdomain ist verfügbar!“.

4. **Domain auswählen**\
   Wähle unter **Domain auswählen** die Domain, an die Dein Name angehängt wird. Zur Auswahl stehen:

   - `emerald.game`
   - `emerald-mc.de`
   - `emeraldserver.de`
   - `mygameservers.eu`
   - `mysmp.eu`

   Unter **So könnte Deine Subdomain aussehen** siehst Du eine Vorschau der fertigen Adresse. Klicke anschließend auf **Weiter**.

5. **Änderung bestätigen**\
   Prüfe in der **Übersicht** des Dialogs Deine neue Subdomain und bestätige die Änderung.

> [!TIP]
> Gib die neue Adresse nach der Änderung an Deine Spieler weiter, damit sie sich weiterhin verbinden können.

## Subdomain löschen

Möchtest Du die Subdomain nicht mehr nutzen, klicke in der **Übersicht** im Bereich **Server Informationen** in der Zeile **Subdomain** auf das Papierkorb-Symbol. Danach ist Dein Server nicht mehr über diese Subdomain erreichbar – Deine Spieler verbinden sich dann über die IP-Adresse.

## Mit der Subdomain verbinden

Deine Spieler geben die Subdomain im Spiel dort ein, wo sie sonst die IP-Adresse eintragen würden, z.B.:

```text
meinserver.emerald.game
```

> [!NOTE]
> Ob zusätzlich ein Port nötig ist, hängt vom Spiel ab. Läuft Dein Server nicht auf dem Standard-Port des Spiels, müssen Deine Spieler den Port eventuell mit einem Doppelpunkt anhängen, z.B. `meinserver.emerald.game:25570`.
