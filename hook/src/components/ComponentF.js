import React from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <ChannelContext.Consumer>
            {(channel) => (
              <div>
                User Context Value {user} and {channel}
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
