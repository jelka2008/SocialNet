let initialState = [
  { id: 1, name: "Профиль", adres: "Profile" },
  { id: 2, name: "Сообщения", adres: "Dialogs" },
  { id: 3, name: "Новости", adres: "News" },
  { id: 4, name: "Музыка", adres: "Musik" },
  { id: 5, name: "Люди", adres: "Users" },
  { id: 6, name: "Настройки", adres: "Setting" }
];

const navBarReducer = (state = initialState, action) => {
  return state;
};

export default navBarReducer;
