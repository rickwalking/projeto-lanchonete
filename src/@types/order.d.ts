import { Decimal } from '@prisma/client/runtime/library';
import { Product } from './product';

namespace Order {
  interface Data {
    id?: number;
    pedido_id: string;
    total?: Decimal;
    status?: Steps;
    usuario_id?: number;
    produtos?: Partial<Product.Data>[];
    criado_em: Date;
    atualizado_em: Date;
  }

  type Steps = 'RECEBIDO' | 'EM_PREPARO' | 'PRONTO' | 'FINALIZADO';
}
