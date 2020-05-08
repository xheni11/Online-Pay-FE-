import { ProductOrder } from 'src/app/core/models/requests/product-order.model';
import { Observable } from 'rxjs';

let productOrder:Observable<ProductOrder>;
export function setProductOrder(current:Observable<ProductOrder>){
productOrder=current;
}
export function getProductOrder():Observable<ProductOrder>{
    return productOrder;
}