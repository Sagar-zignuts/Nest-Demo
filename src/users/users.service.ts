export class UsersService{
    users: {id : number ,name : string , email : string , gender : string , isMarried : boolean}[] = [
        {id : 1 , name : 'john' ,email : "xyz@gmail.com", gender : 'male' ,isMarried : false},
        {id : 2 , name : 'mark' ,email : "abc@gmail.com", gender : 'male' ,isMarried : true},
    ]

    getALlUsers(){
        return this.users;
    }

    getUserById(id : number){
        return this.users.find(x => x.id === id)
    }

    createUser(user : {id : number ,name : string , email : string , gender : string , isMarried : boolean}){
        this.users.push(user);
    }
}