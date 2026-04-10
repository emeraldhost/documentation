---
description: Speicher-Intervall auf einem Soulmask Server ändern
---

# So änderst du das Speicher-Intervall auf deinem Soulmask Server

Du kannst einstellen, wie oft der Server den Spielstand sichert. Es gibt zwei Intervalle:

- **Save Time Interval** — Wie oft der Server den Zustand der Welt in einer In-Memory-Datenbank sichert
- **Backup Interval** — Wie oft der Server die In-Memory-Datenbank in die Datei `world.db` auf der Festplatte speichert

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Intervalle anpassen</b><br>
   Passe die Werte in den folgenden Feldern an (Angabe in Sekunden):

   | Feld | Standard | Beschreibung |
   |------|----------|-------------|
   | **Save Time Interval** | `600` (10 Minuten) | Sichert den Weltzustand in der In-Memory-Datenbank |
   | **Backup Interval** | `900` (15 Minuten) | Speichert die Datenbank in die Datei `world.db` |

4. <b>Server neu starten</b><br>
   Speichere die Einstellungen und starte deinen Server neu.

:::: tip Tipp
Niedrigere Werte bedeuten häufigere Speicherung und weniger Datenverlust bei einem Absturz, können aber die Performance beeinflussen. Für die meisten Server sind die Standardwerte empfehlenswert.
::::
