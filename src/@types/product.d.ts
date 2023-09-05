import { Decimal } from '@prisma/client/runtime/library';

namespace Product {
  interface Data {
    id?: number;
    nome: string;
    preco: Decimal | any;
    descricao: string;
    quantidade: number;
    categoria_id: number;
    criado_em: Date;
    atualizado_em: Date;
  }
}
