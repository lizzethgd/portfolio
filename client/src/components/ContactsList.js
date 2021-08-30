const ContactsList = () => {
    
    return (
        <>
       <div className="w3-container w3-text-white"  style={{padding:"64px"}}>ContatcsList</div>
        </>
    )
}

export default ContactsList

/* const [user,setUser] = useState(null);
const [isAuthenticated,setIsAuthenticated] = useState(false);

const [data, setData] = useState()

const getData = async() => {
    
    await authenticated()
    .then(data => {
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);
    });
}

useEffect(()=>{
    
    getData()
}
,[]);

console.log(user)
console.log(isAuthenticated)
return (
    <>
    <NavAdmin/>
    <div className="w3-container w3-text-white"  style={{padding:"64px"}}>ContactsList </div>
    </>
) */