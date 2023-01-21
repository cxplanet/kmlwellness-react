import './Gallery.css';
import { useState } from 'react';

function YogaGallery() {
    const [galleryCell, setGalleryCell]=useState();
    const cellClick= (event) => {
        const { id } = event.target;
        alert(id);
        //setGalleryCell(cellNumber);
    }
    return (
      <div className="grid-container">
        <div id="1" className="grid-item" onClick={cellClick}>1</div>
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