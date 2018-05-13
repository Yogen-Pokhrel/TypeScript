class PersonalData {
    constructor(protected name:string,protected gender:string,protected dob:string,protected maritialStatus:string){
        this.name=name
        this.gender=gender
        this.dob=dob
        this.maritialStatus=maritialStatus

    }
    getName= ()=> {
        return this.name
    }
    getGender =() =>{
        return this.gender
    }
    getDob =() =>{
        return this.dob
    }
    getMariatalStatus =() =>{
        return this.maritialStatus
    }
}

class Likes extends PersonalData{
    constructor(protected favActor:string, protected favActress:string, protected favPlace:string, protected favFilm:string,protected name:string,protected gender:string,protected dob:string,protected maritialStatus:string)
    {
        super(name,gender,dob,maritialStatus)
        this.favActor
        this.favActress
        this.favFilm
        this.favPlace

    }
    getActor=()  =>{
        return this.favActor
    }
    getActress =() =>{
        return this.favActress
    }
    getFilm =()=>{
        return this.favFilm
    }
    getPlace =()=>{
        return this.favPlace
    }

}

class Facebook extends Likes {
    constructor(protected facebookId:string,protected name:string,protected gender:string,protected dob:string,protected maritialStatus:string,protected favActor:string, protected favActress:string, protected favPlace:string, protected favFilm:string ){
        super(favActor,favActress,favFilm,favPlace,name, gender,dob,maritialStatus)
        this.facebookId=facebookId
    }
    getFacebookId =()=>{
        return this.facebookId
    }
}

let user= new Facebook("1011ABD","Yogen","m","1995/01/19","Single","syed Kapor","priyanka","Simla","Doom")

console.log("The user Data is");
console.log("ID is ---->"+ user.getFacebookId());
console.log("Name is ---->"+ user.getName());
console.log("Gender is ---->"+ user.getGender());
console.log("Date of Birth is ---->"+ user.getDob());
console.log("Marital Status is ---->"+ user.getMariatalStatus());
console.log("Fav Actor is ---->"+ user.getActor());
console.log("Fav Actress is ---->"+ user.getActress());
console.log("Fav Place is ---->"+ user.getPlace());
console.log("Fav Movie is ---->"+ user.getFilm());

