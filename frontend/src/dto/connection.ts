import Base from '@/dto/base'
export default class Connection extends Base {

    Id?: number;
    Name: string;
    Address: string;
    Port: number;
    Username: string | null;
    Password: string | null;


    constructor(
        name: string,
        address: string,
        port = 6379,
        username: string | null,
        password: string | null,
        //TODO: add TLS and SSH options
    ) {
        super()
        this.Id = Math.random()
        this.Name = name
        this.Address = address
        this.Port = 6379
        this.Username = username
        this.Password = password
    }
}