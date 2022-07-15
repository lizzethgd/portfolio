import {useState, useEffect} from 'react'

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

    }, [stop, width])

    

return(
<>
    <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: width+'%'}}><div className="w3-left " ><b>{name}</b></div><div className="w3-right "><b>{width}%</b></div></div>
    </div>
    <br/>
</>
)
}
export default ProgressBar

