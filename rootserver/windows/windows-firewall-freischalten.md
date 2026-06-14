---
description: Ports in der Windows Firewall auf einem Windows Server freischalten
---

# So schaltest du die Windows Firewall auf deinem Windows Server frei

Damit Dienste wie Game- oder Webserver von außen erreichbar sind, musst du die benötigten **Ports** in der Windows Firewall freigeben. Diese Anleitung zeigt dir beide Wege — über die grafische Oberfläche und über PowerShell.

:::: info Hinweis
Du musst zuerst [mit deinem Windows Server verbunden](mit-windows-server-verbinden.md) sein, um die folgenden Schritte ausführen zu können.
::::

## Über die grafische Oberfläche

1. <b>Firewall öffnen</b><br>
   Drücke `Windows + R`, gib `wf.msc` ein und bestätige mit `Enter`. Es öffnet sich die **Windows Defender Firewall mit erweiterter Sicherheit**.

2. <b>Neue eingehende Regel erstellen</b><br>
   Klicke links auf **Eingehende Regeln** und anschließend rechts auf **Neue Regel…**.

3. <b>Regeltyp wählen</b><br>
   Wähle **Port** und klicke auf **Weiter**.

4. <b>Protokoll und Port angeben</b><br>
   Wähle **TCP** oder **UDP** und trage unter **Bestimmte lokale Ports** den gewünschten Port ein (z.B. `25565`). Klicke auf **Weiter**.

   :::: tip Tipp
   Mehrere Ports trennst du mit Komma (`25565,25566`), Bereiche mit Bindestrich (`27015-27020`). Benötigt dein Dienst sowohl TCP als auch UDP, lege für jedes Protokoll eine eigene Regel an.
   ::::

5. <b>Verbindung zulassen</b><br>
   Wähle **Verbindung zulassen** und klicke auf **Weiter**.

6. <b>Profile auswählen</b><br>
   Lasse alle Profile (**Domäne**, **Privat**, **Öffentlich**) aktiviert und klicke auf **Weiter**.

7. <b>Regel benennen</b><br>
   Vergib einen aussagekräftigen Namen (z.B. `Minecraft Server`) und klicke auf **Fertig stellen**.

## Über PowerShell

Alternativ kannst du einen Port direkt per PowerShell freigeben — das geht oft schneller.

1. <b>PowerShell als Administrator öffnen</b><br>
   Klicke mit der rechten Maustaste auf das Startmenü und wähle **Windows PowerShell (Administrator)** bzw. **Terminal (Administrator)**.

2. <b>Regel erstellen</b><br>
   Führe folgenden Befehl aus und passe Name, Port und Protokoll an:

   ```powershell
   New-NetFirewallRule -DisplayName "Minecraft Server" -Direction Inbound -LocalPort 25565 -Protocol TCP -Action Allow
   ```

   Für einen UDP-Port ersetze `TCP` durch `UDP`.

:::: warning Achtung
Gib nur Ports frei, die tatsächlich benötigt werden. Jeder offene Port vergrößert die Angriffsfläche deines Servers.
::::
