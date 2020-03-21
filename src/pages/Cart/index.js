import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-adaption-ocasion-masculino/42/KTM-0069-342/KTM-0069-342_zoom2.jpg?ts=1581340622&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$210,30</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#6666ff" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#6666ff" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$420,60</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={15} color="#6666ff" />
              </button>
            </td>
          </tr>
        </tbody>

      </ProductTable>

      <footer>
        <button type="button"> Finzalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
