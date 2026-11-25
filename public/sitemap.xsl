<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s">

  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap · CodeNeeti</title>
        <style>
          *{box-sizing:border-box;margin:0;padding:0}
          body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#040915;color:#e8f4fe;min-height:100vh;padding:48px 20px;
            background-image:radial-gradient(circle at 15% 0%,rgba(141,93,255,.18),transparent 45%),radial-gradient(circle at 90% 100%,rgba(141,93,255,.10),transparent 40%)}
          .wrap{max-width:960px;margin:0 auto}
          header{margin-bottom:32px}
          .brand{font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#8d5dff;font-weight:700}
          h1{font-size:clamp(28px,5vw,40px);margin:8px 0 10px}
          p.sub{color:#8ca7c7;line-height:1.6;max-width:640px}
          p.sub a{color:#c3a8ff}
          .stats{display:flex;gap:12px;margin-top:20px;flex-wrap:wrap}
          .stat{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:12px 18px}
          .stat b{display:block;font-size:22px}
          .stat span{font-size:12px;color:#8ca7c7;text-transform:uppercase;letter-spacing:.08em}
          .card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden}
          table{width:100%;border-collapse:collapse}
          th{text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#8ca7c7;padding:14px 20px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.08)}
          td{padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.05);font-size:15px;vertical-align:middle}
          tr:last-child td{border-bottom:0}
          tbody tr{transition:background .15s}
          tbody tr:hover{background:rgba(141,93,255,.08)}
          td.n{color:#5d7391;width:48px;font-variant-numeric:tabular-nums}
          td a{color:#e8f4fe;text-decoration:none;word-break:break-all}
          td a:hover{color:#c3a8ff}
          td a .host{color:#5d7391}
          .tag{font-size:11px;padding:2px 8px;border-radius:999px;margin-left:8px;background:rgba(141,93,255,.18);color:#c3a8ff;white-space:nowrap}
          .pri{display:flex;align-items:center;gap:10px;width:130px}
          .bar{flex:1;height:6px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
          .bar i{display:block;height:100%;background:linear-gradient(90deg,#8d5dff,#c3a8ff);border-radius:99px}
          .pri span{font-variant-numeric:tabular-nums;color:#8ca7c7;font-size:13px;width:28px}
          footer{margin-top:24px;color:#5d7391;font-size:13px;text-align:center}
          @media (max-width:600px){td.n,th.n{display:none}td,th{padding:12px 14px}.pri{width:90px}}
        </style>
      </head>
      <body>
        <div class="wrap">
          <header>
            <div class="brand">CodeNeeti</div>
            <h1>XML Sitemap</h1>
            <p class="sub">This sitemap helps search engines like Google and Bing find every page on
              <a href="https://codeneeti.com/">codeneeti.com</a>. Learn more at
              <a href="https://www.sitemaps.org/" target="_blank" rel="noopener">sitemaps.org</a>.</p>
            <div class="stats">
              <div class="stat"><b><xsl:value-of select="count(s:urlset/s:url)"/></b><span>Total URLs</span></div>
              <div class="stat"><b><xsl:value-of select="count(s:urlset/s:url[contains(s:loc,'/blog/')])"/></b><span>Blog posts</span></div>
              <div class="stat"><b><xsl:value-of select="count(s:urlset/s:url[not(contains(s:loc,'/blog/'))])"/></b><span>Pages</span></div>
            </div>
          </header>

          <div class="card">
            <table>
              <thead>
                <tr><th class="n">#</th><th>URL</th><th>Priority</th></tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <xsl:sort select="s:priority" data-type="number" order="descending"/>
                  <xsl:variable name="p">
                    <xsl:choose>
                      <xsl:when test="s:priority"><xsl:value-of select="s:priority"/></xsl:when>
                      <xsl:otherwise>0.5</xsl:otherwise>
                    </xsl:choose>
                  </xsl:variable>
                  <tr>
                    <td class="n"><xsl:value-of select="position()"/></td>
                    <td>
                      <a href="{s:loc}">
                        <span class="host">codeneeti.com</span>
                        <xsl:value-of select="substring-after(s:loc,'codeneeti.com')"/>
                      </a>
                      <xsl:if test="contains(s:loc,'/blog/')"><span class="tag">Blog</span></xsl:if>
                    </td>
                    <td>
                      <div class="pri">
                        <div class="bar"><i style="width:{$p * 100}%"></i></div>
                        <span><xsl:value-of select="$p"/></span>
                      </div>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>© CodeNeeti · Generated sitemap view</footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
