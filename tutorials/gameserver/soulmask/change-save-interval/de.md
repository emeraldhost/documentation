---
slug: "speicher-intervall-aendern"
language: "de"
title: "So änderst Du das Speicher-Intervall auf Deinem Soulmask Server"
description: "Speicher-Intervall auf einem Soulmask Server ändern"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Speicher-Intervall ändern"
sort: 15
related: ["gameserver/soulmask/kick-ban-players", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password", "gameserver/soulmask/setup-shifting-sands"]
---

Du kannst einstellen, wie oft der Server den Spielstand sichert. Es gibt zwei Intervalle:

- **Save Time Interval** – Wie oft der Server den Zustand der Welt in einer In-Memory-Datenbank sichert
- **Backup Interval** – Wie oft der Server die In-Memory-Datenbank in die Datei `world.db` auf der Festplatte speichert

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Intervalle anpassen**\
   Passe die Werte in den folgenden Feldern an (Angabe in Sekunden):

   | Feld | Standard | Beschreibung |
   |------|----------|-------------|
   | **Save Time Interval** | `600` (10 Minuten) | Sichert den Weltzustand in der In-Memory-Datenbank |
   | **Backup Interval** | `900` (15 Minuten) | Speichert die Datenbank in die Datei `world.db` |

4. **Server neu starten**\
   Speichere die Einstellungen und starte Deinen Server neu.

> [!TIP]
> Niedrigere Werte bedeuten häufigere Speicherung und weniger Datenverlust bei einem Absturz, können aber die Performance beeinflussen. Für die meisten Server sind die Standardwerte empfehlenswert.
