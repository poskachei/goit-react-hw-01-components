import React from 'react';

import Profile from './components/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList';
import friends from './components/FriendList/friends.json';

import transactions from './components/Transactions/transactions.json';
import Transactions from './components/Transactions';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
