const addItem = [];

const addItems = (state = addItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      
      // Checar se o produto já existe
      const exist = state.find((x) => x.codigo === product.codigo);
      if (exist) {
        // Adicionar quantidade
        return state.map((x) =>
          x.codigo === product.codigo ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.codigo === product.codigo);
      if (exist1.qty === 1) {
        return state.filter((x) => x.codigo !== exist1.codigo);
      } else {
        return state.map((x) =>
          x.codigo === product.codigo ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default addItems;
