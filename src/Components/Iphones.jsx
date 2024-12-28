import React , {useState} from 'react'
import Iphone1 from '../images/iphone1.jpg'
import './Iphones.css'
import StarRating from './StarRating'
import { GrClose } from 'react-icons/gr'
import { MdDone } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'

function Iphones() {

  const [buy , setBuy] = useState(false)
  const [comfirmBuy , setComfirmBuy] = useState(false)
  const [youBuy , setSYouBuy] = useState(false)
  const [Cansel , setCansel] = useState(false)
  return (
    <div className='main-iphone' >
      {
        comfirmBuy && <div className='DoneBuy'>
          <h2><MdDone className='MdDone' />Successful</h2>
          <p>You Bought is Succssed ....</p>
          <p>During 3 days Your Iphone Will Be in Your Hand</p>
          <button onClick={() => {
            setComfirmBuy(prev => !prev)
            setSYouBuy(prev => !prev)
          }}>Ok</button>
        </div>
      }
      {
        Cansel && <div className='canselBuy'>
          <h2><CgClose className='MdDone' />Sorry</h2>
          <p>You Bought is Canseled ....</p>
          <p>Please Give us a feedback about What Happened</p>
          <button onClick={() => {
            setCansel(prev => !prev)
          }}>Ok</button>
        </div>
      }
   {  buy && <div className='buyCard'>
    <GrClose onClick={() => setBuy(prev =>!prev)} className='buyCardClose'/>
        <img src={Iphone1} alt = ""/>
        <div className='buyCard-partTow'>
          <h5>Iphone 13 Pro Max</h5>
          <form>
          <input className='name' type='text' placeholder='Type Your Name Here ...'/>
          <textarea className='textArea' name="" id="" placeholder='Type Your Notes Here'></textarea>
          <input className='name' type='email' placeholder='Type Your Bank Account ..'/>
          <input className='name' type='password' placeholder='Password ..'/>
          <button className='comfirm-buy' type='submit' onClick={() => {
            setBuy(prev =>!prev)
            setComfirmBuy(prev => !prev)
          }}>Comfirm</button>
          </form>
        </div>
      </div>}
    <div className='IphonesContainer'>
      <div className='IphonesContainer-1'>
        <img src={Iphone1} alt="Iphones" />
      </div>
      <div className='IphonesContainer-2'>
        <h2>Iphone 13 Pro Max</h2>
        <p><span>Description : </span>It is the most famous with four color ... There is alot of Iphones in ReStorEm just for Arab Countries like UA ....</p>
        <p><span>Note : </span>this Kind of Iphone For Arab just ...</p>
        <div className='Rating-Part'>
<StarRating/>
<div className='BuyButtonPart'>
  <button>Save To Card</button>
<button onClick={() => setBuy(prev =>!prev)}>{ youBuy ? "You Bought" : "Buy"}</button> 
  {
    youBuy && <button onClick={() => {
      setSYouBuy(prev =>!prev)
      setCansel(prev =>!prev)
    }
    }>Cansel</button>

  }
</div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Iphones
