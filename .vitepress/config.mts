import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dokumentation",
  description: "Zentralen Wissensdatenbank von EmeraldHost! Hier möchten wir Dir, als unserem Kunden, unsere Produkte näher bringen und Dir zeigen, wie Du sie bestmöglich nutzen kannst.",
  titleTemplate: ":title - EmeraldHost.de",
  head: [
    ['link', { rel: 'icon', sizes: '32x32', href: 'https://emeraldhost.de/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', href: 'https://emeraldhost.de/favicon-16x16.png' }],
  ],
  lang: 'de-DE',
  themeConfig: {
    logo: "https://emeraldhost.b-cdn.net/branding/icon.svg",
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      { text: 'Willkommen!', link: '/', },
      { text: 'Neukunden Rabatt sichern! 🎉', link: '/neukunden-rabatt-sichern' },
      {
        text: 'Gameserver',
        items: [
          {
            text: 'Minecraft Java Edition',
            link: '/gameserver/minecraft-java-edition',
            collapsed: true,
            items: [
              { text: 'Minecraft EULA akzeptieren', link: '/gameserver/minecraft-java-edition/minecraft-eula-akzeptieren'},
              { text: 'Sichtweite ändern', link: '/gameserver/minecraft-java-edition/sichtweite-aendern'},
              { text: 'MOTD ändern', link: '/gameserver/minecraft-java-edition/motd-aendern'},
              { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-java-edition/whitelist-aktivieren'},
              { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-java-edition/op-rechte-vergeben'},
              { text: 'Modpack ändern', link: '/gameserver/minecraft-java-edition/modpack-aendern'},
              { text: 'Version ändern', link: '/gameserver/minecraft-java-edition/version-aendern'},
            ]
          },
          {
            text: 'Minecraft Bedrock Edition',
            link: '/gameserver/minecraft-bedrock-edition',
            collapsed: true,
            items: [
              { text: 'Behavior und Resource Packs hinzufügen', link: '/gameserver/minecraft-bedrock-edition/behavior-und-resource-packs-hinzufuegen'},
              { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-bedrock-edition/whitelist-aktivieren'},
            ]
          },
          {
            text: 'Euro Truck Simulator 2',
            link: '/gameserver/euro-truck-simulator-2',
            collapsed: true,
            items: [
              { text: 'Mods hinzufügen', link: '/gameserver/euro-truck-simulator-2/mods-hinzufuegen'},
              { text: 'Admins hinzufügen', link: '/gameserver/euro-truck-simulator-2/admins-hinzufuegen'},
            ]
          },
          {
            text: 'American Truck Simulator',
            link: '/gameserver/american-truck-simulator',
            collapsed: true,
            items: [
              { text: 'Mods hinzufügen', link: '/gameserver/american-truck-simulator/mods-hinzufuegen'}
            ]
          },
          {
            text: 'Terraria: tModLoader',
            link: '/gameserver/terraria-tmodloader',
            collapsed: true,
            items: [
              { text: 'Mods hinzufügen', link: '/gameserver/terraria-tmodloader/mods-hinzufuegen'},
              { text: 'Welt hinzufügen', link: '/gameserver/terraria-tmodloader/welt-hinzufuegen'}
            ]
          },
          {
            text: 'Valheim',
            link: '/gameserver/valheim',
            collapsed: true,
            items: [
              { text: 'Savegame hinzufügen', link: '/gameserver/valheim/savegame-hinzufuegen'}
            ]
          },
          {
            text: 'Palworld',
            link: '/gameserver/palworld',
            collapsed: true,
            items: [
              { text: '🚨 Performance-Probleme auf Palworld Servern', link: '/gameserver/palworld/performance-probleme-auf-palworld-servern'},
              { text: 'Server beitreten', link: '/gameserver/palworld/server-beitreten'},
            ]
          },
          {
            text: 'Enshrouded',
            link: '/gameserver/enshrouded',
            collapsed: true,
            items: [
              { text: '🚨 Performance-Probleme auf Enshrouded Servern', link: '/gameserver/enshrouded/performance-probleme-auf-enshrouded-servern'},
              { text: 'Savegame hinzufügen', link: '/gameserver/enshrouded/savegame-hinzufuegen'},
            ]
          }
        ]
      },
      {
        text: 'Rootserver',
        items: [
          {
            text: 'Grundkonfiguration',
            collapsed: true,
            items: [
              { text: 'UFW installieren', link: '/rootserver/grundkonfiguration/ufw-installieren'},
              { text: 'Fail2Ban installieren', link: '/rootserver/grundkonfiguration/fail2ban-installieren'},
            ]
          },
          {
            text: 'Dienste & Tools',
            collapsed: true,
            items: [
              { text: 'phpMyAdmin, Apache2 und MySQL installieren', link: '/rootserver/dienste_tools/phpmyadmin-apache2-und-mysql'},
              { text: 'TeamSpeak 3 Server installieren', link: '/rootserver/dienste_tools/teamspeak-3-server-installieren'},
              { text: 'Minecraft Server installieren', link: '/rootserver/dienste_tools/minecraft-server-installieren'},
              { text: 'Docker installieren', link: '/rootserver/dienste_tools/docker-installieren'},
              { text: 'Webserver installieren', link: '/rootserver/dienste_tools/webserver-installieren'},
            ]
          },
          {
            text: 'Windows',
            collapsed: true,
            items: [
              { text: 'Windows Festplatte erweitern', link: '/rootserver/windows/windows-festplatte-erweitern'},
            ]
          },
          {
            text: 'Tipps & Fehlerbehebung',
            collapsed: true,
            items: [
              { text: 'Cronjobs erstellen', link: '/rootserver/tipps_fehlerbehebung/cronjobs-erstellen'},
            ]
          },
        ]
      },
      {
        text: 'Domains',
        items: [
          {
            text: 'DNS-Einträge',
            link: '/domains/dns-eintraege',
            collapsed: true,
            items: [
              { text: 'TeamSpeak Server', link: '/domains/dns-eintraege/teamspeak-server'},
            ]
          }
        ]
      },
      {
        text: 'TeamSpeak',
        items: [
          { text: 'ServerQuery Login', link: '/teamspeak/serverquery-login' }
        ]
      },
    ],

    nav: [
      { text: 'Website', link: 'https://emeraldhost.de' },
      { text: 'Support', link: 'https://emeraldhost.de/tickets' },
      { text: 'Impressum', link: 'https://emeraldhost.de/impressum' },
    ],

    footer: {
      copyright: '© 2016 - 2025 EmeraldHost — Alle Rechte vorbehalten.',
      message: 'Alle Preise verstehen sich in Euro und inklusive der gesetzlichen MwSt.'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/EmeraldHostDE' },
      { icon: 'instagram', link: 'https://www.instagram.com/emeraldhost.de/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
      { icon: 'discord', link: 'https://discord.com/invite/Gw38Ve3Nqr' },
      { icon: 'github', link: 'https://github.com/emeraldhost/' },
    ],

    search: {
      provider: 'local'
    }
  }
})
