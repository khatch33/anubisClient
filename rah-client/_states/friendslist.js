const { atom } = require('recoil');

const friendsState = atom({
  key: 'friends',
  default: [
    { username: 'Kyle' },
    { username: 'David' },
    { username: 'Tony' },
    { username: 'Cihad' },
  ],
});

export { friendsState };
