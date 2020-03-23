export function addToCart(product) {
  return { //<-- Propriedade do this.props que dispara as ACTIONS do Redux
    type: '@cart/ADD', //<-- O type é a única obrigatoriedade na Action
    product, //<-- Produto que quero adicionar no carrinho
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}