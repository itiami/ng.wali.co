export class User {
    fname?: String;
    lname?: String;
    dob?: Date;
    contact?: String;
    addressType?: String;
    isBillingAddress?: Boolean;
    isDeliveryAddress?: Boolean;
    address?: {
        streetNameNum?: String;
        city?: String;
        coutry?: String;
    };
    profileImg?: String;
    userId?: String;
    order?: [];
}
