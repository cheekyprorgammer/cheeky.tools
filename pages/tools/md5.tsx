import type { NextPage } from 'next'
import md5 from 'md5'
 
const Page: NextPage = () => {
  return (
    <div className="p-5">
      Hello: {md5('Hello')}
    </div>
  )
}
  
export default Page