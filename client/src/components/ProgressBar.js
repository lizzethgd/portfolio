import {useState, useEffect} from 'react'
//import '../assets/css/progressBar.css'

const ProgressBar = ({start, stop, name}) => {
 
    let [width, setWith] = useState(start)

    useEffect(()=>{

        const move = () => {
            const frame = () => {
            if (width >= stop) {
              clearInterval();
          } else {
            ++width; 
              let newWith = width
              setWith(newWith)
          }
          }
          setInterval(frame, 100);
        }
         move()

    }, [])

    

return(
<>
    <div className="w3-light-grey w3-round-xlarge w3-bold">
        <div className="w3-container w3-center w3-round-xlarge w3-teal w3-text-black" style={{width: width+'%'}}><div className="w3-left " >{name}</div><div className="w3-right ">{width}%</div></div>
    </div>
    <br/>
</>
)
}
export default ProgressBar

