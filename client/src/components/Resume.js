const Resume = () => {

    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

return (
<section id="resume" className="w3-light-grey">
    <div className="bgimg-1 w3-display-container " style={Parallax}>
        <div className="w3-display-middle">
            <span className="w3-xxlarge w3-text-white w3-wide">RESUME</span>
        </div>
    </div>
</section> 
)
}

export default Resume
