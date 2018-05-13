var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonalData = /** @class */ (function () {
    function PersonalData(name, gender, dob, maritialStatus) {
        var _this = this;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.maritialStatus = maritialStatus;
        this.getName = function () {
            return _this.name;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getMariatalStatus = function () {
            return _this.maritialStatus;
        };
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.maritialStatus = maritialStatus;
    }
    return PersonalData;
}());
var Likes = /** @class */ (function (_super) {
    __extends(Likes, _super);
    function Likes(favActor, favActress, favPlace, favFilm, name, gender, dob, maritialStatus) {
        var _this = _super.call(this, name, gender, dob, maritialStatus) || this;
        _this.favActor = favActor;
        _this.favActress = favActress;
        _this.favPlace = favPlace;
        _this.favFilm = favFilm;
        _this.name = name;
        _this.gender = gender;
        _this.dob = dob;
        _this.maritialStatus = maritialStatus;
        _this.getActor = function () {
            return _this.favActor;
        };
        _this.getActress = function () {
            return _this.favActress;
        };
        _this.getFilm = function () {
            return _this.favFilm;
        };
        _this.getPlace = function () {
            return _this.favPlace;
        };
        _this.favActor;
        _this.favActress;
        _this.favFilm;
        _this.favPlace;
        return _this;
    }
    return Likes;
}(PersonalData));
var Facebook = /** @class */ (function (_super) {
    __extends(Facebook, _super);
    function Facebook(facebookId, name, gender, dob, maritialStatus, favActor, favActress, favPlace, favFilm) {
        var _this = _super.call(this, favActor, favActress, favFilm, favPlace, name, gender, dob, maritialStatus) || this;
        _this.facebookId = facebookId;
        _this.name = name;
        _this.gender = gender;
        _this.dob = dob;
        _this.maritialStatus = maritialStatus;
        _this.favActor = favActor;
        _this.favActress = favActress;
        _this.favPlace = favPlace;
        _this.favFilm = favFilm;
        _this.getFacebookId = function () {
            return _this.facebookId;
        };
        _this.facebookId = facebookId;
        return _this;
    }
    return Facebook;
}(Likes));
var user = new Facebook("1011ABD", "Yogen", "m", "1995/01/19", "Single", "syed Kapor", "priyanka", "Simla", "Doom");
console.log("The user Data is");
console.log("ID is ---->" + user.getFacebookId());
console.log("Name is ---->" + user.getName());
console.log("Gender is ---->" + user.getGender());
console.log("Date of Birth is ---->" + user.getDob());
console.log("Marital Status is ---->" + user.getMariatalStatus());
console.log("Fav Actor is ---->" + user.getActor());
console.log("Fav Actress is ---->" + user.getActress());
console.log("Fav Place is ---->" + user.getPlace());
console.log("Fav Movie is ---->" + user.getFilm());
