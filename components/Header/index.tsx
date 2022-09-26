import Image from 'next/image'
import bot from '../../public/bot.png'

export default function Header() {
    return (
      <header>
        <div className="h-12">
            <div>        
                <Image 
                src={bot}
                alt="Cheeky Tools"
                layout="responsive"
                width={100}
                height={100}
                />
            </div>
            <div>Cheeky Tools</div>
            <div></div>
        </div>
      </header>
    );
  }