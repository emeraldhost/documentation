---
slug: "serverquery-login"
language: "de"
title: "ServerQuery Login"
description: "ServerQuery-Zugang auf Deinem TeamSpeak-Server anlegen und mit YaTQA verbinden."
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-09-05"
cta: "teamspeak"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "ServerQuery Login"
sort: 2
related: ["teamspeak/teamspeak-6-server-availability"]
---

Um Deinen Server via Query zu verwalten, empfehlen wir das Programm [YaTQA](https://yat.qa/herunterladen/).\
Zusätzlich benötigst Du Server-Adminrechte auf dem TeamSpeak, um einen Query-Zugang anzulegen.

## Schritte

1. **Mit dem Server verbinden**\
   Verbinde Dich mit dem TeamSpeak-Client mit Deinem Server.

2. **ServerQuery Login öffnen**\
   Klicke in Deiner oberen Leiste auf Extras -> ServerQuery Login.

3. **Namen festlegen**\
   Lege einen Namen für Deinen Admin-Account fest und bestätige ihn mit „OK“.

4. **Zugangsdaten notieren**\
   Notiere Dir den Benutzernamen und das Passwort.

   > [!WARNING]
   > Diese Logindaten können nicht erneut angezeigt werden, speichere sie Dir daher gut ab!

5. **Server im Dashboard öffnen**\
   Gehe in unser Dashboard und wähle den TeamSpeak aus, auf dem Du den ServerQuery Login erstellt hast.

6. **Adresse und Ports notieren**\
   Notiere Dir die IP-Adresse (z.B. 203.0.113.10), den Port hinter Deiner IP-Adresse (z.B. 9001) sowie den darunter stehenden Query-Port (z.B. 9152).

7. **YaTQA installieren**\
   Installiere [YaTQA](https://yat.qa/herunterladen/) und öffne das Programm.

8. **Nicht-Standard-Queryport erlauben**\
   Klicke in der linken Spalte auf „Einstellungen“ und setze einen Haken unter „Hinweise“ -> „Verbinden zu nicht-Standard-Queryport zulassen“. Danach kannst Du die Einstellungen schließen.

9. **Verbindung herstellen**\
   Trage die notierten Daten in die folgenden Felder ein:

   - Deine IP-Adresse in „Server-Adresse (ohne Port):“
   - Deinen Query-Port in „Queryport:“
   - Deinen Benutzernamen in „Benutzer (optional):“
   - Dein Passwort in „Passwort (optional):“

   Bestätige Deine Eingaben anschließend mit „Verbinden“.

10. **Server auswählen**\
    Um den Server zu verwalten, gehe auf den Reiter „Server“ und dort auf die Option „Server mithilfe des Ports suchen...“. Gib dort den notierten Port ein, der hinter Deiner IP-Adresse stand.
