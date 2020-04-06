import produce from 'immer';

// Todos os REDUCERS ouvem todas as ACTIONS
export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS': //"case" <-- O REDUCER de carrinho quer ouvir todas as ACTIONS que são relacionadas apenas do carrinho
      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}