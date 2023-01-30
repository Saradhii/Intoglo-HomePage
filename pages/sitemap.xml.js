const EXTERNAL_DATA_URL = 'https://metacargo.io/backend/getsections/sections_chapters';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://metacargo.io</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>https://metacargo.io/hscode</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>https://metacargo.io/hscode/us</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>https://metacargo.io/hscode/in</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
     ${posts.hits.hits.map((e)=>{
      return `
    <sitemap>
      <loc>https://metacargo.io/hscode/us#${e._source.section_level}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      ${e._source.chapters.map((l)=>{
        return`
        <sitemap>
         <loc>https://metacargo.io/hscode/us/${l.chapter_no}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
        `
      }).join('')}
      <loc>https://metacargo.io/hscode/in#${e._source.section_level}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      ${e._source.chapters.map((l)=>{
        return`
        <sitemap>
         <loc>https://metacargo.io/hscode/in/${l.chapter_no}</loc>
         <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
        `
      }).join('')}
    </sitemap>
      `
     }).join('')}
</sitemapindex>`
}

function SiteMap() {
}

export async function getServerSideProps({ res }) {
  
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();
  const sitemap = generateSiteMap(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    props: {}
  };
}

export default SiteMap;