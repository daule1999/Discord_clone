import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./appSlice";
import { selectUser } from "./userSlice";
import db from "./firebase";
import firebase from "firebase";
function Chat() {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("channels")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [channelId]);
  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(firebase.firestore.FieldValue.serverTimestamp());
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="header">
        <Header channelName={channelName} />
      </div>
      <div className="Chat__messages">
        {messages.map((message) => {
          return (
            <Message
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
          );
        })}
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          ></input>
          <button
            className="chat__inputbutton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
