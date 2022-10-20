import React from 'react';
import Image from './Image'


const ImageList = ({images}) => {//map de döndürmk için

  const preparedImageList=images.map(image=>{//10 tane image vardı. her bir image i dönerek  bir const a atatık
      return(
      
         <Image key={image.id} image={image}/>//props oluşturduk ve image e gönderdik           
      )
  })
return (
  //preparedImageList i bastırmış olduk
  <div className="image-list-container">
    {preparedImageList}
  </div>
)
}
export default ImageList;
