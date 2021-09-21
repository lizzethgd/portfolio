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
    <div className="w3-light-grey w3-round-xlarge w3-bold ">
        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: width+'%'}}><div className="w3-left w3-teal" >{name}</div><div className="w3-right w3-teal">{width}%</div></div>
    </div>
    <br/>
</>
)
}

export default ProgressBar

