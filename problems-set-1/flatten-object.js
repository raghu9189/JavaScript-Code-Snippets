const user = {
    name: "raghu",
    rollNo: 34,
    address: {
        doorNo: "5-93/3",
        pincode: "505331",
    },
    teckStack: {
        language: "javascript",
        framework: {
            name: "React",
            version: "18"
        }
    }
}

const flattenObject = (obj) => {
    const result = {}
    for(const i in obj){
        if(typeof obj[i] === "object" && !Array.isArray(obj[i])){
            const temp = flattenObject(obj[i]);
            for(const j in temp){
                result[i + "." + j] = temp[j];
            }
        }else{
            result[i] = obj[i];
        }
    }
    return result;
}

console.log(flattenObject(user))