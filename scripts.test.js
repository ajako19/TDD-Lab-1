const translate = require("./scripts")

describe("testing the vowels", () => {
    test("apple should give back appleway", () => {
        expect(translate("apple")).toEqual("appleway");
    })
    test("elephant should give us back elephantway", () => {
        expect(translate("elephant")).toEqual("elephantway");
    })
    test ("ink should give us back inkway", () => {
        expect(translate("ink")).toEqual("inkway");
    })
    test ("octopus should give us back octopusway", () => {
        expect(translate("octopus")).toEqual("octopusway");
    })
    test ("underpants should give us back underpantsway", () => {
        expect(translate("underpants")).toEqual("underpantsway");
    })
})

describe("testing the constanants", () => {
    test("book should give back ookbay", () => {
        expect(translate("book")).toEqual("ookbay");
    })
    test("dance should give us back anceday", () => {
        expect(translate("dance")).toEqual("anceday");
    })
    test ("foot should give us back ootfay", () => {
        expect(translate("foot")).toEqual("ootfay");
    })
    test ("chicken should give us back ickenchay", () => {
        expect(translate("chicken")).toEqual("ickenchay");
    })
    test ("trains should give us back ainstray", () => {
        expect(translate("trains")).toEqual("ainstray");
    })
})