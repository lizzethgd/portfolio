import '../assets/css/timeline02.scss'

const Timeline02 = () => {

    const divClick = (e) => {
        e.preventDefault();
   
        let card = e.currentTarget

        let oldCard= document.querySelector('.active')
        oldCard.classList.remove("active") 
        
        card.classList.add("active")

    }

    return (
        
<div className="timeline-wrapper clearfix">
    <div className="timeline-content-day">
        <div className="timeline-line"></div>
        
        <div className="timeline-content-item active" data-timeline="hour-8" onMouseOver={divClick}>
            <span >8 AM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=1" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-9" onMouseOver={divClick}>
            <span>9 AM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=2" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-10"onMouseOver={divClick}>
            <span>10 AM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=3" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-11" onMouseOver={divClick}>
            <span>11 AM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=4" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-12" onMouseOver={divClick}>
            <span>12 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=5" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-13" onMouseOver={divClick}>
            <span>1 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=6" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-14" onMouseOver={divClick}>
            <span>2 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=7" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-15" onMouseOver={divClick}>
            <span>3 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=8" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-16" onMouseOver={divClick}>
            <span>4 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=9" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-17"onMouseOver={divClick}>
            <span>5 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=10" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-18" onMouseOver={divClick}>
            <span>6 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=11" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-19" onMouseOver={divClick}>
            <span>7 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=12" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-20" onMouseOver={divClick}>
            <span>8 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=13" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-21" onMouseOver={divClick}>
            <span>9 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=14" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-22" onMouseOver={divClick}>
            <span>10 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=15" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>

        <div className="timeline-content-item" data-timeline="hour-23" onMouseOver={divClick}>
            <span>11 PM</span>
            <div className="timeline-content-item-reveal">
                <a href="#">
                    <img src="https://picsum.photos/1920?random=16" />
                    <span>Lorem Ipsum</span>
                </a>
            </div>
        </div>
    </div>
</div>
    )
}

export default Timeline02
