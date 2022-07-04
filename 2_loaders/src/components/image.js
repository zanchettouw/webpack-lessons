import War from '../img/war.jpg'

class Image {

  insertImage() {
    const img = document.createElement('img');
    img.src=War;
    img.width=200;

    document.querySelector('body').appendChild(img);
  }

}

export default Image;