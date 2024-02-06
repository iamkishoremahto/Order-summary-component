
import './App.scss'
import musicIcon from  '../public/images/icon-music.svg';

function App() {


  return (
    <>
     <div className="w-screen min-h-screen p-[25px] bg-Paleblue md:bg-[url('public/images/pattern-background-desktop.svg')] bg-no-repeat bg-contain bg-[url('public/images/pattern-background-mobile.svg')] md:bg-no-repeat md:bg-contain flex items-center justify-center">

      <div className='flex overflow-hidden  items-center justify-start flex-col w-[360px] h-[650px] rounded-[20px] bg-white'>

        <div className="imageSection  min-h-[180px]  min-w-full bg-[url('public/images/illustration-hero.svg')] bg-no-repeat bg-contain">

        </div>
        <div className="orderContent flex flex-col gap-8 p-10  min-h-full">
          <h1 className='text-center font-redHat text-[2rem] font-extrabold'>Order Summary</h1>
          <p className='text-center font-redHat text-Desaturatedblue'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

          <div className="planDetails bg-Verypaleblue px-3 h-[80px] rounded-[10px] flex justify-between items-center">
            <div className="plan flex items-center gap-4">
              <img src={ musicIcon } alt="musicIcon" className="musicIcon" />
              <div className="rupees">
                <h3 className='font-bold font-redHat'>Annual Plan</h3>
                <p className='text-[17px] font-redHat text-Desaturatedblue'>$59.99/year</p>
              </div>
            </div>
            <div className="cancelWrapper">
              <a href="#" className='text-Brightblue font-redHat text-decoration-line: underline font-[500]'>Cancel</a>
            </div>
          </div>
          <button className="processToPay shadow-xl hover:bg-fadedBlue duration-100 ease-in-out bg-Brightblue py-3 rounded-xl text-white font-redHat font-[500]">Process to Payment</button>

          <button className="cancel  font-redHat font-bold  text-Desaturatedblue">Cancel Order</button>

        </div>

      </div>

     </div>
    </>
  )
}

export default App
