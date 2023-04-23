import React from 'react';
import {IPhotoInterface} from "../interfaces/Photointerface";
interface IPhoto{
    photo: IPhotoInterface
}
const Photo = ({photo}:IPhoto) => {

    return (
        <div>
            <img width={200} src={photo.url} alt=""/>
        </div>
    );
};

export default Photo;