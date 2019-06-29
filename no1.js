var orang = {
    name : "Siddiq",
    age : 18,
    address : "Jalan Mangunsucipto",
    hobbies : ["Ngoding", "Baca"],
    is_married : true,
    list_school : {
        name : "SMK Madinatul Quran",
        year_in : 2015,
        year_out : 2018,
        major : "RPL"
    },
    skills : {
        skill_name : "Futsal",
        level : "beginner"
    },
    interest_in_coding : true,
    test : function(){
        return orang;
    }
}
console.log((orang.test()));
