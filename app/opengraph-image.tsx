import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Sulav Acharya Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 20 }}>Sulav Acharya</div>
        <div style={{ fontSize: 40, color: '#666' }}>Full Stack Developer</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
