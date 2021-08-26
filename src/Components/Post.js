import React, {useState} from 'react';


import {Publication, Header, Photo, UserInfo, UserData, Name, Nickname, Date, UserContent, Image, BoxBotton, Likes, Comments, Share} from './Ui'

export default function Post (props) {
    const [likes, setLikes] = useState(+(`${Math.floor(Math.random() * 1000) + 1}`));
    const [changingLikes, setChangingLikes] = useState(false);

    const [coments, setComents] = useState(+(`${Math.floor(Math.random() * 500) + 1}`));
    const [changingComents, setChangingComents] = useState(false);

    const [shares, setShares] = useState(+(`${Math.floor(Math.random() * 100) + 1}`));
    const [changingShares, setChangingShares] = useState(false);
    
    const changeLikes = () => {
        if (changingLikes === false) {
            setLikes(likes + 1);
            setChangingLikes(true);
        } else {
            setLikes(likes - 1);
            setChangingLikes(false);
        }
    }
    const changeComents = () => {
        if (changingComents === false) {
            setComents(coments + 1)
            setChangingComents(true)
        } else {
            setComents(coments - 1)
            setChangingComents(false)
        }
    }
    const changeShares = () => {
        if (changingShares === false) {
            setShares(shares + 1)
            setChangingShares(true)
        }else {
            setShares(shares - 1)
            setChangingShares(false)
        }
    }

    return (
        <Publication>
        <Header>
          <><Photo src={props.photo} alt=""/></>
          <UserInfo>
            <UserData>
              <Name>{props.name}</Name>
              <Nickname>{props.nickname}</Nickname>
              <Date>{props.date}</Date>
            </UserData>
            <UserContent>{props.content}</UserContent>
          </UserInfo>
        </Header>
        <><Image src={props.image} alt=""/></>
        <BoxBotton>
          <Likes onClick={changeLikes}>&#9825; {likes}</Likes>
          <Comments onClick={changeComents}>&#9998; {coments}</Comments>
          <Share onClick={changeShares}>&#10150; {shares}</Share>
        </BoxBotton>
      </Publication>
    )
}