import React from 'react';
import {IAlbumInterface} from "../interfaces/Albuminterface";
interface IAlbum {
    album:IAlbumInterface
}
const Album = ({album}: IAlbum) => {
    return (
        <div>
            <h2>{album.title}</h2>
        </div>
    );
};

export default Album;