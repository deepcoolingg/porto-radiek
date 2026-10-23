import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://radiek.online"

  return {
    rules: {
      userAgent: '*', 
      allow: '/',     
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Arahin robot ke sitemap yang lu bikin tadi
  }
}