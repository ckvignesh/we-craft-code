import { FaGithub, FaDiscord, FaReddit, FaTwitter } from 'react-icons/fa'

export default function Header() {
  return (
    <div className='flex flex-row justify-center content-center text-[4.0rem] gap-5 py-[30px] pr-[30px] pl-[40px] bg-white'>
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
