import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andrew J Sauer Personal Website',
    short_name: 'AJS Personal Website',
    description: 'Welcome to my personal portfolio and CV. Explore my work, skills, and professional journey.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}