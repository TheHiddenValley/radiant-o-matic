const alpacaData = [
  {
    id: 0,
    label: "Background",
    directory: "Background",
    selected: true,
    items: [
      { id: 1, label: "RAD 1", filename: "Rad1", selected: true },
      { id: 2, label: "RAD 2", filename: "Rad2", selected: false },
    ],
  },
  {
    id: 1,
    label: "Skin",
    directory: "Skin",
    selected: false,
    items: [
      { id: 0,  label: "Mid", filename: "Mid", selected: true },
      { id: 1, label: "Pasty", filename: "Pasty", selected: false },
      { id: 2, label: "Tanned", filename: "Tanned", selected: false },
    ],
  },
  {
    id: 2,
    label: "Eyes",
    directory: "Eyes",
    selected: false,
    items: [
      { id: 0, label: "Glare", filename: "Glare", selected: true },
      { id: 1, label: "Eyepatch", filename: "Eyepatch", selected: false },
      { id: 2, label: "Fee Mask", filename: "fee mask", selected: false },
      { id: 3, label: "Fee Sunglasses", filename: "fee sunglasses", selected: false },
    ],
  },
  {
    id: 3,
    label: "Mouth",
    directory: "Mouth",
    selected: false,
    items: [
      { id: 0, label: "Shaved", filename: "Shaved", selected: true },
      { id: 1, label: "Beard", filename: "Beard", selected: false },
      { id: 2, label: "Moustache", filename: "Moustache", selected: false },
    ],
  },
  {
    id: 4,
    label: "Head",
    directory: "Head",
    selected: false,
    items: [
      { id: 0, label: "Bald", filename: "Bald", selected: true },
      { id: 1, label: "Cool Hat", filename: "CoolHat", selected: false },
      { id: 2, label: "Gladiator", filename: "Gladiator", selected: false },
      { id: 3, label: "Spiky", filename: "Spiky", selected: false },
      { id: 4, label: "Quiff", filename: "quiff", selected: false },
      { id: 5, label: "Top hat", filename: "top hat", selected: false }
      { id: 6, label: "Short Hair", filename: "short hair", selected: false },
      { id: 7, label: "Hat", filename: "hat", selected: false },
      { id: 8, label: "Long hair", filename: "long hair", selected: false },
      { id: 9, label: "Afro", filename: "afro", selected: false }, 
    ],
  },
  {
    id: 5,
    label: "Special",
    directory: "Special",
    selected: false,
    items: [
      { id: 0, label: "None", filename: "None", selected: true },
      { id: 1, label: "Alien", filename: "Alien", selected: false },
      { id: 2, label: "Batman", filename: "Batman", selected: false },
    ],
  },

];

export default alpacaData;
