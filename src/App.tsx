import { LanguageVariant } from 'typescript';
import './App.css';
import { useState } from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6'

function App() {
  const cm:number = 2.54
  const inches:number = 0.393701

  const [cent, setCent] = useState<number>(0)
  const [inch, setInch] = useState<number>(0)
  const [toggle, setToogle] = useState<boolean>(true)

  const handleConvertCm = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setCent(parseFloat(e.target.value)*cm)
    return 
  }

  const handleConvertInch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInch(parseFloat(e.target.value)*inches)
    return
  }

  function handleChange(){
    setToogle(!toggle)
  }
  return (
    <div>
      <main className='main-container'>
        
        <span className='title'>Converter</span>
        
        <span className='subtitle-container'>
          Choose between inches or centimeters
        </span>
        {toggle ? (
          <div className='content-container'>
            <div className='convert-container'>
              <span className='span-first'>
                <span className='span-measure-left'>
                  <label htmlFor="inches">I n</label>
                </span>
                <span className='input-measure-container'>
                  <input  type="number" 
                          id="inches"
                          onChange={(e)=>handleConvertCm(e)}
                          className='input-measure'/>
                  Inches
                </span>

              </span>
              <button className='switch-button'>
                <FaArrowRightArrowLeft onClick={handleChange}/>
              </button>
              <span className='span-second'>
                <span className='span-measure-right'>
                  <label htmlFor="cent">C m</label>
                </span>
                <span className='input-measure-container'>
                  <input  type="number" 
                          id="cent"
                          value={cent}
                          className='input-measure'/>
                  Centimeters
                </span>

              </span>
            </div>
            <div className='pic-container'>

            </div>
          </div>
        ):(
          <div className='content-container'>
            <div className='convert-container'>
              <span className='span-first'>
                <span className='span-measure-left'>
                  <label htmlFor="cent">C m</label>
                </span>
                <span className='input-measure-container'>
                  <input  type="number" 
                          id="cent"
                          onChange={(e)=>handleConvertInch(e)}
                          className='input-measure'/>
                  Centimeters
                </span>
              </span>
              <button className='switch-button'>
                <FaArrowRightArrowLeft onClick={handleChange}/>
              </button>
              

              <span className='span-second'>
                <span className='span-measure-right'>
                  <label htmlFor="inches">I n</label> 
                </span>
                <span className='input-measure-container'>
                  <input  type="number" 
                          id="inches"
                          value={inch}
                          className='input-measure'/>
                  Inches
                </span>
              </span>
            </div>
            <div className='pic-container'>
            
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
