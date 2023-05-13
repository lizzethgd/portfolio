import {useState, useEffect} from 'react'

const ProgressBar2 = ({percent, name}) => {

    const [width, setWidth] = useState(0);
    const [value, setValue] = useState('');

 useEffect(()=>{
    setWidth(percent) 
    setInterval(() => setValue(percent+'%'), 7500)
    },[percent]) 

    

return(
<>
    <div className="w3-light-grey w3-round-xlarge" style={{width: '100%'}}>
        <div className="w3-container w3-round-xlarge w3-teal" style={{width: `${width}%` , transition: '8s ease'}}>
            <div className="w3-left " ><b>{name}</b></div>
            <div className="w3-right "><b>{value}</b></div>
        </div>
    </div>
    <br/>
</>
)
}
export default ProgressBar2

