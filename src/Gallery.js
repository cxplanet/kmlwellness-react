import './Gallery.css';
import { useState } from 'react';

function YogaGallery() {
    const [galleryCell, setGalleryCell]=useState();
    const cellClick= (event) => {
        console.log(event);
        const { id } = event.target;
        alert(id);
        //setGalleryCell(cellNumber);
    }
    return (
      <div className="grid-container">
        <div className="grid-item" onClick={cellClick}>
            <img id="1" src="https://www.kml-wellness.com/img/kmlpose4-tn.webp" alt="kmlpose4" />
        </div>
        <div id="2" className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
    )
}

export default YogaGallery