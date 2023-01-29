
import { ImagesProvider, URLEditor, ThumbnailOptionsProvider, Thumbnails } from "react-thumbnails";


function YogaGallery2() {
    const tnImges = [
        "https://www.kml-wellness.com/img/kmlpose1-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose2-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose3-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose4-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose5-th.webp",
        "https://www.kml-wellness.com/img/kmlpose6-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose7-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose8-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose9-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose10-tn.webp",
        "https://www.kml-wellness.com/img/kmlpose11-tn.webp"

    ]
    const cellClick= (event) => {
        console.log(event);
        const { id } = event.target;
        console.log(event.target.currentSrc);
        //setGalleryCell(cellNumber);
    }
    return (
        <div onClick={cellClick}> 
            <ImagesProvider
                options={{ maxImagesCount: 11 }}
                urls={
                    tnImges
                }
            >
                <ThumbnailOptionsProvider
                    showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
                    defaults={{ size: 'medium', shape: 'circle', shadow: true, border: true }}
                >
                    <Thumbnails />
                </ThumbnailOptionsProvider>
            </ImagesProvider>
        </div>
    )
}

export default YogaGallery2