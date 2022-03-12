import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa'

export default function Heading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: '4.0rem',
        gap: '20px',
        padding: '30px 30px 30px 40px',
        backgroundColor: 'white',
      }}
    >
      <a href="https://github.com/we-craft-code" target="_blank">
        <FaGithub style={{ color: '#333' }} />
      </a>
      <a href="https://discord.com/invite/kp3NQNKW9J" target="_blank">
        <FaDiscord style={{ color: '#5865F2' }} />
      </a>
      <a href="https://www.reddit.com/r/wecraftcode/" target="_blank">
        <FaReddit style={{ color: '#ff4500' }} />
      </a>
      <a href="https://twitter.com/we_craft_code" target="_blank">
        <FaTwitter style={{ color: '#00acee' }} />
      </a>
    </div>
  )
}
