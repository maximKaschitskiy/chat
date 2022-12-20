import React from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { Typography } from "@mui/material";

import { AppWrapper } from './Styles/App';

import History from './Types/Message';
import User from './Types/User';

import Login from './Components/Login';
import Chat from './Components/Chat';
import Messenges from './Components/History';

function App() {

  const getStorage = (storage: Storage, key: string) => {
    const saved = storage.getItem(key);
    if (saved) {
      return JSON.parse(saved) || "";
    }
  }

  const setStorage = (storage: Storage, key: string, item: History | User, single: boolean) => {
    if (getStorage(storage, key)) {
      storage.setItem(
        key,
        JSON.stringify(single ? item : [...getStorage(storage, key), item])
      );
    } else {
      storage.setItem(
        key,
        JSON.stringify(single ? item : [item])
      );
    }
  }

  const [history, setHistory] = React.useState<History[]>(getStorage(localStorage, "history"));
  const [user, setUser] = React.useState<User>(getStorage(sessionStorage, "user"));

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      setHistory(getStorage(localStorage, "history"));
      setUser(getStorage(sessionStorage, "user"));
    });
    return () => {
      window.removeEventListener('storage', () => {
        setHistory(getStorage(localStorage, "history"));
        setUser(getStorage(sessionStorage, "user"));
      });
    }
  }, []);

  return (
    <AppWrapper>
      <Typography variant="h5" component="h5">
        Myself chat
      </Typography>
      <Login
        handleSubmit={
          (value: User) => {
            setStorage(sessionStorage, "user", value, true);
            window.dispatchEvent(new Event('storage'));
          }
        }
        handleLogout={
          () => {
            sessionStorage.removeItem("user")
            window.dispatchEvent(new Event('storage'));
          }
        }
        user={user}
      />
      <Messenges messages={history} />
      <Chat
        handleSubmit={
          (value: History) => {
            const message = {
              user: user.userName,
              time: moment(),
              text: value.text,
              id: nanoid()
            }
            setStorage(localStorage, "history", message, false);
            window.dispatchEvent(new Event('storage'));
          }
        }
        user={user}
      />


    </AppWrapper>
  );
}

export default App;