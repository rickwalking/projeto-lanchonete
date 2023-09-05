namespace Payment {

  interface Data {
    id: number
    pedido_id: string 
    provedor_id: string
    provedor: string
    criado_em: Date 
    atualizado_em: Date 
  }

  namespace Create {
    interface Response {
      id: number;
      status: number | string;
      status_detail: string;
      transaction_details: {
        net_received_amount: number;
        total_paid_amount: number;
        overpaid_amount: number;
        external_resource_url: string | null;
        installment_amount: number;
        financial_institution: string | null;
      };
      point_of_interaction: {
        type: string;
        sub_type: string | null;
        application_data: {
          name: string;
          version: string;
        };
        transaction_data: {
          qr_code_base64: string;
          qr_code: string;
          ticket_url: string;
        };
      };
    }
  }

  namespace Get {
    interface Response {
      id: number;
      date_created: string;
      date_approved: string;
      date_last_updated: string;
      money_release_date: string;
      payment_method_id: string;
      payment_type_id: string;
      status: number | string;
      status_detail: string;
      currency_id: string;
      description: string;
      collector_id: number;
      payer: {
        id: number;
        email: string;
        identification: {
          type: string;
          number: number;
        };
        type: string;
      };
      metadata: Record<string, any>;
      additional_info: Record<string, any>;
      transaction_amount: number;
      transaction_amount_refunded: number;
      coupon_amount: number;
      transaction_details: {
        net_received_amount: number;
        total_paid_amount: number;
        overpaid_amount: number;
        installment_amount: number;
      };
      installments: number;
      card: Record<string, any>;
    }
  }
}
