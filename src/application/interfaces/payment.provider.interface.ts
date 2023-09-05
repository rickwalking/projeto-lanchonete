export interface IPaymentProvider {
  create(
    order_id: number,
    value: number,
    email: string,
  ): Promise<Partial<Payment.Create.Response>>;
  get(id: number): Promise<Partial<Payment.Get.Response>>;
}
