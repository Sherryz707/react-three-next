import Scene from '@/components/canvas/Scene'
import '@/styles/index.css'

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head></head>
      <body>
        <div className='absolute top-0 left-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900 text-gray-50'>
          {children}
          <Scene />
        </div>
      </body>
    </html>
  )
}
