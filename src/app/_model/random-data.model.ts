export interface IfcRdmRoot {
    gender: string;
    name: IfcRdmName;
    location: Location;
    email: string;
    login: IfcRdmLogin;
    dob: IfcRdmDob;
    registered: IfcRdmRegistered;
    phone: string;
    cell: string;
    id: IfcRdmId;
    picture: IfcRdmPicture;
    nat: string;
}

export interface IfcRdmName {
    title: string;
    first: string;
    last: string;
}

export interface IfcRdmLocation {
    street: IfcRdmStreet;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: IfcRdmCoordinates;
    timezone: IfcRdmTimezone;
}

export interface IfcRdmStreet {
    number: number;
    name: string;
}

export interface IfcRdmCoordinates {
    latitude: string;
    longitude: string;
}

export interface IfcRdmTimezone {
    offset: string;
    description: string;
}

export interface IfcRdmLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface IfcRdmDob {
    date: string;
    age: number;
}

export interface IfcRdmRegistered {
    date: string;
    age: number;
}

export interface IfcRdmId {
    name: string;
    value: string;
}

export interface IfcRdmPicture {
    large: string;
    medium: string;
    thumbnail: string;
}




export class RandomData {
    constructor() { }
}
