import {Pipe, PipeTransform} from "@angular/core";
interface addrLike{
  address: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country?: string;
}
@Pipe({
  name:"formatAddress"
})
export class FormatAddressPipe implements PipeTransform {
  transform(addr : addrLike) {
    return (
      addr.address +
      "" + addr.address2 +
      "" + addr.city +
        "" + addr.state +
        "" + addr.zip +
        "" + addr.country
    )
  }
}
