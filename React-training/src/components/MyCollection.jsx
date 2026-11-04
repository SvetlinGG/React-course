import { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
const collectionAlbums = [];

export default function MyCollection() {

    

    const [selectAlbum, setSelectAlbum] = useState(collectionAlbums);

    useEffect((album) => {
        if (selectAlbum.find(item => item.id === album.id )){
            setSelectAlbum(selectAlbum.filter(item => item.id !== album.id))
            collectionAlbums.push(selectAlbum)
        }else{
            setSelectAlbum([...selectAlbum, album])
        }

    },[selectAlbum])


    return (
        <div >
        {collectionAlbums.map((album) => (
          <MusicCard key={album.id} {...album} />
        ))}
      </div>
    );
}