import './Gallery.css'
import { ImagesProvider, URLEditor, ThumbnailOptionsProvider, Thumbnails } from "react-thumbnails";


function YogaGallery2(props) {
    const { imges } = props;
        const cellClick= (event) => {
        console.log(event);
        const { id } = event.target;
        console.log(event.target.currentSrc);
        //setGalleryCell(cellNumber);
    }
    return (
        <div onClick={cellClick} className="gallery"> 
            <ImagesProvider
                options={{ maxImagesCount: imges.length }}
                urls={
                    imges
                }
            >
                <ThumbnailOptionsProvider
                    // showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
                    defaults={{ size: 'small', shape: 'square', shadow: true, border: false }}
                >
                    <Thumbnails />
                </ThumbnailOptionsProvider>
            </ImagesProvider>
        </div>
    )
}

export default YogaGallery2