import './Gallery.css';

function Gallery() {
  return (
    <div className="galleryContainer">
        <div className="gallery">
          <img src="https://images.pexels.com/photos/15136288/pexels-photo-15136288/free-photo-of-lovverk-grona-lov-vertikalt-skott-narbild.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dark green leaves"/>
        </div>
  
        <div className="gallery">
            <img src="https://images.pexels.com/photos/19571550/pexels-photo-19571550/free-photo-of-skola-simning-undervattens-vilda-djur-och-vaxter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="jellyfish" />
        </div>
  
        <div className="gallery">
            <img src="https://images.pexels.com/photos/29500254/pexels-photo-29500254/free-photo-of-klassisk-stationsklocka-i-inomhusmiljo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="clock"/>
          </div>
    </div>
  );
}
  
  export default Gallery;