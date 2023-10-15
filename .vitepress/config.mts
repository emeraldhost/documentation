import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dokumentation",
  description: "A VitePress Site",
  titleTemplate: "EmeraldHost",
  themeConfig: {
    logo: "https://emeraldhost.b-cdn.net/branding/icon.svg",
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Willkommen!',
        link: '/',
      },
      {
        text: 'Gameserver',
        items: [
          {
            text: 'Minecraft Java Edition',
            link: '/gameserver/minecraft-java-edition',
            collapsed: true,
            items: [
              { text: 'Sichtweite ändern', link: '/gameserver/minecraft-java-edition/sichtweite-aendern'},
              { text: 'MOTD ändern', link: '/gameserver/minecraft-java-edition/motd-aendern'},
              { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-java-edition/whitelist-aktivieren'},
              { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-java-edition/op-rechte-vergeben'},
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
          }
        ]
      },
      {
        text: 'Rootserver',
        items: [
          {
            text: 'Installationshilfe',
            link: '/rootserver/installationshilfe',
            collapsed: true,
            items: [
              { text: 'Docker installieren', link: '/rootserver/installationshilfe/docker-installieren'},
              { text: 'Fail2Ban installieren', link: '/rootserver/installationshilfe/fail2ban-installieren'},
              { text: 'Minecraft Server installieren', link: '/rootserver/installationshilfe/minecraft-server-installieren'},
              { text: 'phpMyAdmin, Apache2 und MySQL installieren', link: '/rootserver/installationshilfe/phpmyadmin-apache2-und-mysql'},
              { text: 'TeamSpeak 3 Server installieren', link: '/rootserver/installationshilfe/teamspeak-3-server-installieren'},
            ]
          },
          {
            text: 'Konfigurationshilfe',
            collapsed: true,
            items: [
              { text: 'Cronjobs erstellen', link: '/rootserver/konfigurationshilfe/cronjobs-erstellen'},
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
          {
            text: 'ServerQuery Login',
            link: '/teamspeak/serverquery-login'
          }
        ]
      },
      {
        text: 'TeamSpeak',
        items: [
          {
            text: 'ServerQuery Login',
            link: '/teamspeak/serverquery-login'
          }
        ]
      }
    ],

    nav: [
      { text: 'Website', link: 'https://emeraldhost.de' },
      { text: 'Support', link: 'https://emeraldhost.de/tickets' },
      { text: 'Impressum', link: 'https://emeraldhost.de/impressum' },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/EmeraldHostDE' },
      { icon: 'instagram', link: 'https://www.instagram.com/emeraldhost.de/' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCQ0wYYCFdmQher2eGNbGpFw' },
      { icon: 'discord', link: 'https://discord.com/invite/Gw38Ve3Nqr' },
      { icon: 'github', link: 'https://github.com/emeraldhost/docs.emeraldhost.de' },
    ]
  }
})
