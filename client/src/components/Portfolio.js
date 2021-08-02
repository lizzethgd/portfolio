import '../assets/css/portfolio.scss'
import '../assets/css/modal.scss'
import { CgClose } from "react-icons/cg";
import { FaTags } from "react-icons/fa";

const Portfolio = () => {
    const content= [
        { id: 0, 
          img: 'https://source.unsplash.com/450x336/?wave',
          title :  'Card title 01',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.' 
        },
        { id: 1,
          img: 'https://source.unsplash.com/450x336/?beach',
          title :  'Card title 02',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 2,
          img: 'https://source.unsplash.com/450x336/?mountain',
          title :  'Card title 03',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 3,
          img: 'https://source.unsplash.com/450x336/?field',
          title :  'Card title 04',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 4, 
          img: 'https://source.unsplash.com/450x336/?water',
          title :  'Card title 05',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 5, 
          img: 'https://source.unsplash.com/450x336/?river',
          title :  'Card title 06',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 6,
          img: 'https://source.unsplash.com/450x336/?kite',
          title :  'Card title 07',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 7,
          img: 'https://source.unsplash.com/450x336/?underwater',
          title :  'Card title 08',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        },
        { id: 8,
          img: 'https://source.unsplash.com/450x336/?desert',
          title :  'Card title 09',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices sagittis orci a scelerisque. Ultricies mi eget mauris pharetra. At lectus urna duis convallis convallis tellus id. Semper auctor neque vitae tempus quam pellentesque. Tortor dignissim convallis aenean et tortor. Egestas congue quisque egestas diam in arcu cursus. Massa eget egestas purus viverra accumsan in nisl. Id aliquet lectus proin nibh. Cursus sit amet dictum sit amet justo donec enim. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Porta nibh venenatis cras sed. Orci a scelerisque purus semper eget duis at tellus at. Felis bibendum ut tristique et egestas quis ipsum. Maecenas pharetra convallis posuere morbi leo urna molestie. Aliquam sem fringilla ut morbi tincidunt augue.'
        }
      ]

    const Parallax = {
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const onCardClick = (id) => {
        //e.preventDefault()
        document.getElementById("imagen").src = content[id].img; 
        document.getElementById("title").innerHTML = content[id].title;
        document.getElementById("description").innerHTML = content[id].description;
        document.getElementById("modal").style.display = "block";
      } 
      
      const onClouseFullSizeImage = () => {
        document.getElementById("modal").style.display='none'
      }
      
      
      const cards = content.map(card => (
              
        <div className="card__" key={card.id} onClick={() => onCardClick(card.id)} 
        >
          <div className="card__image-holder">
          <img className="card__image" src={card.img} alt={card.title} />
          </div>
          <div className="card__title">
          <h3>{card.title}</h3>
          <small><FaTags/> Image from unsplash.com</small>
          </div>
        </div>
      
      ))   
    return (   
<section id="portfolio" className="w3-light-grey">
{/* <!-- Second Parallax Image with Portfolio Text --> */}
<div className="bgimg-2 w3-display-container " style={Parallax}>
    <div className="w3-display-middle">
        <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
    </div>
    </div>

{/* <!-- Container (Portfolio Section) --> */}
<div id="cards__container">
    {cards}
</div> 

{/* <!-- Modal for full size images on click--> */}
 <div id="modal" className="w3-modal w3-gray" >
 <button className="w3-button w3-red w3-large  w3-display-topright" title="Close Modal Image" onClick={onClouseFullSizeImage} ><CgClose /></button>
 <div className="_wrapper">
        <div className="_card">
            <img id='imagen' src="" />
            <div className="_descriptions">
                <h3 id='title'></h3>
                <h5 style={{float: 'left'}}> <FaTags/> </h5>
                <p id='description'></p>
               < a href="" >Go there!</a> 
            </div>
        </div>      
    </div>
</div>
&nbsp;
</section>       
    
    )
}

export default Portfolio
