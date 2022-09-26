import Image from 'next/image'
import bot from '../../public/bot.png'

export default function Header() {
    return (
      <header>
        <div className="p-2 flex items-center">
            <div className="w-1/12">        
                <Image 
                src={bot}
                alt="Cheeky Tools"
                />
            </div>
            <div className="w-10/12">2</div>
            <div className="w-2/12">3</div>
        </div>
      </header>
    );
  }
