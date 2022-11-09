// Para adicionar itens ao carrinho
export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Para deletar itens do carrinho
export const delItem= (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
