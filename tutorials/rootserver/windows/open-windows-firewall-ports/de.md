---
slug: "windows-firewall-freischalten"
language: "de"
title: "So schaltest Du die Windows Firewall auf Deinem Windows Server frei"
description: "Ports in der Windows Firewall auf einem Windows Server freischalten"
tags: []
date: "2026-06-14"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Windows Firewall freischalten"
sort: 3
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/windows-hard-drive-expand"]
---

Damit Dienste wie Game- oder Webserver von außen erreichbar sind, musst Du die benötigten **Ports** in der Windows Firewall freigeben. Diese Anleitung zeigt Dir beide Wege – über die grafische Oberfläche und über PowerShell.

> [!NOTE]
> Du musst zuerst [mit Deinem Windows Server verbunden](/tutorials/rootserver/windows/connect-to-windows-server) sein, um die folgenden Schritte ausführen zu können.

## Über die grafische Oberfläche

1. **Firewall öffnen**\
   Drücke `Windows + R`, gib `wf.msc` ein und bestätige mit `Enter`. Es öffnet sich die **Windows Defender Firewall mit erweiterter Sicherheit**.

2. **Neue eingehende Regel erstellen**\
   Klicke links auf **Eingehende Regeln** und anschließend rechts auf **Neue Regel…**.

3. **Regeltyp wählen**\
   Wähle **Port** und klicke auf **Weiter**.

4. **Protokoll und Port angeben**\
   Wähle **TCP** oder **UDP** und trage unter **Bestimmte lokale Ports** den gewünschten Port ein (z.B. `25565`). Klicke auf **Weiter**.

   > [!TIP]
   > Mehrere Ports trennst Du mit Komma (`25565,25566`), Bereiche mit Bindestrich (`27015-27020`). Benötigt Dein Dienst sowohl TCP als auch UDP, lege für jedes Protokoll eine eigene Regel an.

5. **Verbindung zulassen**\
   Wähle **Verbindung zulassen** und klicke auf **Weiter**.

6. **Profile auswählen**\
   Lasse alle Profile (**Domäne**, **Privat**, **Öffentlich**) aktiviert und klicke auf **Weiter**.

7. **Regel benennen**\
   Vergib einen aussagekräftigen Namen (z.B. `Minecraft Server`) und klicke auf **Fertig stellen**.

## Über PowerShell

Alternativ kannst Du einen Port direkt per PowerShell freigeben – das geht oft schneller.

1. **PowerShell als Administrator öffnen**\
   Klicke mit der rechten Maustaste auf das Startmenü und wähle **Windows PowerShell (Administrator)** bzw. **Terminal (Administrator)**.

2. **Regel erstellen**\
   Führe folgenden Befehl aus und passe Name, Port und Protokoll an:

   ```powershell
   New-NetFirewallRule -DisplayName "Minecraft Server" -Direction Inbound -LocalPort 25565 -Protocol TCP -Action Allow
   ```

   Für einen UDP-Port ersetze `TCP` durch `UDP`.

> [!WARNING]
> Gib nur Ports frei, die tatsächlich benötigt werden. Jeder offene Port vergrößert die Angriffsfläche Deines Servers.
