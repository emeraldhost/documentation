---
description: Connect a domain to a TeamSpeak server
---

# How to Connect Your Domain to a TeamSpeak Server

You can make your TeamSpeak server reachable via your own domain, so users can connect using e.g. `ts.yourdomain.com` or `yourdomain.com` — instead of an IP address.

## Requirements

- A domain with EmeraldHost
- The IP address and port of your TeamSpeak server (you can find these in the **dashboard** of your server)

## Connect with subdomain (e.g. ts.yourdomain.com)

1. <b>Open DNS settings</b><br>
   Open the management of your domain and click on **DNS Settings**.

2. <b>Create A record</b><br>
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | `ts` |
   | Target | Your server IP address |

3. <b>Create SRV record</b><br>
   Create a new record with type **SRV** so TeamSpeak can find the correct port:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_ts3` |
   | Protocol | `UDP` |
   | Name | `ts` |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your TeamSpeak server port |
   | Target | `ts.yourdomain.com` |

4. <b>Test connection</b><br>
   Wait a few minutes for the DNS changes to take effect, then connect in TeamSpeak using `ts.yourdomain.com`.

## Connect without subdomain (e.g. yourdomain.com)

1. <b>Open DNS settings</b><br>
   Open the management of your domain and click on **DNS Settings**.

2. <b>Create A record</b><br>
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | leave empty |
   | Target | Your server IP address |

3. <b>Create SRV record</b><br>
   Create a new record with type **SRV**:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_ts3` |
   | Protocol | `UDP` |
   | Name | leave empty |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your TeamSpeak server port |
   | Target | `yourdomain.com` |

4. <b>Test connection</b><br>
   Wait a few minutes for the DNS changes to take effect, then connect in TeamSpeak using `yourdomain.com`.

:::: info Note
DNS changes can take up to 24 hours to propagate worldwide. However, they are usually available within a few minutes.
::::

:::: tip Tip
If your TeamSpeak server uses the default port `9987`, the A record alone is sufficient. The SRV record is only needed if your server uses a different port.
::::
