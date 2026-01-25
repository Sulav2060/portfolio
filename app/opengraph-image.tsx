import { ImageResponse } from 'next/og'
 
// export const runtime = 'edge'
export const dynamic = 'force-static'
 
export const alt = 'Sulav Acharya - Software Engineer'
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a', // slate-900
          position: 'relative',
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.15), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle at 90% 90%, rgba(129, 140, 248, 0.15), transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
            <div
                style={{
                    fontSize: 84,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    display: 'flex',
                    marginBottom: 20,
                    background: 'linear-gradient(to right, #38bdf8, #818cf8, #f472b6)',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}
            >
                Sulav Acharya
            </div>

            <div
                style={{
                    fontSize: 32,
                    color: '#94a3b8', // slate-400
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'flex',
                    marginTop: 10,
                }}
            >
                Software Engineer
            </div>
            
            {/* Divider */}
            <div
                style={{
                    width: '120px',
                    height: '4px',
                    background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                    marginTop: 40,
                    borderRadius: '2px',
                }}
            />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
