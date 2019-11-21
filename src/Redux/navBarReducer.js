let initialState = [
  { id: 1, name: "Профиль", adres: "/profile" },
  { id: 2, name: "Сообщения", adres: "/dialogs" },
  { id: 3, name: "Новости", adres: "/news" },
  { id: 4, name: "Музыка", adres: "/musik" },
  { id: 5, name: "Люди", adres: "/users" },
  { id: 6, name: "Настройки", adres: "/setting" }
];

const navBarReducer = (state = initialState, action) => {
  return state;
};

export default navBarReducer;
