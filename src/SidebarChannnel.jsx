import React from "react";
import "./SidebarChannel.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./appSlice";

function SidebarChannnel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarchannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarchannel__hash"># {channelName}</span>
      </h4>
    </div>
  );
}

export default SidebarChannnel;
