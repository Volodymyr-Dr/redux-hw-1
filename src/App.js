import React, {useState} from 'react';

import Post from './Components/Post';
import {useDispatch, useSelector} from  'react-redux';
import './App.css';

function App() {
  const  postStore = useSelector(store => store.postInfo);
  const dispatch = useDispatch()

  const [addText, setAddText] = useState('A genius, billionaire, playboy, philanthroist!');
  const [addImage, setAddImage] = useState("https://i.ytimg.com/vi/W54Y0cn78NY/maxresdefault.jpg");
  const [addName, setAddName] = useState('Tony Stark');

  const addNewPost = {
    type: 'ADD-POST',
    newPost: {
      addText,
      addImage,
      addName,
    }
  }

  return (
    <div className="App">
      <form>
        <input 
          type="text" 
          placeholder="Write your text"
          value={addText}
          onChange={(e) => {setAddText(e.target.value)}}/>
        <input 
          type="text" 
          placeholder="Insert link to image"
          value={addImage}
          onChange={(e) => {setAddImage(e.target.value)}}/>
        <select 
          value={addName}
          onChange={(e) => {setAddName(e.target.value)}}>
          <option>
            Tony Stark
          </option>
          <option>
            Dr. Strange
          </option>
          <option>
            Frank Castle
          </option>
        </select>
        <button type="button" onClick={() => dispatch(addNewPost)} >Додати</button>
      </form>
      <div>
        {postStore.map(post => <Post {...post} key = {post.id}/>)}
      </div>
    </div>
  );
}

export default App;
