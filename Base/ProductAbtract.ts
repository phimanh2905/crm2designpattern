import { Product } from "../Entiry/Product";

export class ProductAbtract {
  private product: Product = {
    ProductCode: "",
    StartDate: new Date(),
    EndDate: new Date(),
    OrderDescriptor: "",
  };

  private _productCode: string;
  constructor(productCode: string) {
    this._productCode = productCode;

    // switch (this._productCode) {
    //   case "AMIS":
    //     break;
    // }
  }

  public set SetStartDate(startDate: Date) {
    this.product.StartDate = startDate;
  }

  public set SetEndDate(endDate: Date) {
    this.product.EndDate = endDate;
  }

  private buildOrderDescriptor() {

this

  }

  build() {
    return this.product;
  }
}
