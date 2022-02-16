import { FaGithub, FaDiscord, FaReddit } from 'react-icons/fa'

export default function Heading() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'right',
          alignContent: 'center',
          fontSize: '2.5rem',
          gap: '20px',
          padding: '25px 25px 25px 25px',
          backgroundColor: 'black',
        }}
      >
        <a
          color="white"
          href="https://github.com/we-craft-code"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          color=" #5865F2"
          href="https://discord.com/invite/kp3NQNKW9J"
          target="_blank"
        >
          <FaDiscord />
        </a>
        <a
          color="red"
          href="https://www.reddit.com/r/wecraftcode/"
          target="_blank"
        >
          <FaReddit />
        </a>
      </div>
    </div>
  )
}
