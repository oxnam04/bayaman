import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import User from "./components/User"
import {IUserInterface} from "./interfaces/Userinterfaces";
import {IPhotoInterface} from "./interfaces/Photointerface"
import Photo from "./components/Photo";
import Album from "./components/Album";
import {IAlbumInterface} from "./interfaces/Albuminterface";

function App() {


    const [user, setUser] = useState<IUserInterface[]>([])
    const fetchingUsers = async () => {
        let responsive = await axios.get<IUserInterface[]>('https://jsonplaceholder.typicode.com/users')
        setUser(responsive.data)
    }

    const [photo, setPhoto] = useState<IPhotoInterface[]>([])
    const fetchingPhoto = async () => {
        let responsive = await axios.get<IPhotoInterface[]>('https://jsonplaceholder.typicode.com/photos')
        setPhoto(responsive.data)
    }
    const [album,setAlbum] = useState<IAlbumInterface[]>([])
    const fetchingAlbum = async () => {
        let responsive = await axios.get<IAlbumInterface[]>('https://jsonplaceholder.typicode.com/albums')
        setAlbum(responsive.data)
    }
    useEffect(() => {
        fetchingAlbum()
    },[])
    useEffect(() => {
        fetchingPhoto()
    }, [])
    useEffect(() => {
        fetchingUsers()
    }, [])

    return (
        <div className="App">
            {
                user.map(el => <User user={el}/>)
            }
            {
                photo.slice(0,10).map(el => <Photo photo={el}/>)
            }
            {
                album.slice(0,5).map(el => <Album album={el}/>)
            }

        </div>
    );
}

export default App;
