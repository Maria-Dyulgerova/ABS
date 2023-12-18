// import expect from "expect";
import * as artistService from "./artistService";

test('artistService test', () => {
    const inputData = {
        DOB: "1979-11-01",
        PDNum: "767987",
        POB: "Burgas",
        accidentInsuranceNum: "456456",
        artistName: "Gogo Pogo",
        authority: "MVR BG",
        city:"София",
        country: "Bulgaria",
        details: "some street Number",
        email: "mimato@gbg.bg",
        gender: "f",
        imageUrl: "https://w7.pngwing.com/pngs/940/645/png-transparent-musician-guitarist-musical-ensemble-guitar-microphone-musician-guitarist-thumbnail.png",
        instrument: "flute",
        issueDate: "2022-01-01",
        medAttestToDate: "456456",
        nextToKinAddress: "address line 1",
        nextToKinEmail: "mimato@gbg.bg",
        nextToKinName: "Мария Дюлгерова",
        nextToKinPhone: "+359888390241",
        nickName: "Gopo",
        number: "5876978907",
        phone: "+359888390244",
        postCode: "1619",
        role: "musician",
        selfEmplTaxNum: "4564564",
        startedAt: "2022-01-01",
        validityDate: "2025-01-01",
    };
    const result = artistService.buildJsonBody(inputData);

    const output_json = {
        artistName: 'Gogo Pogo',
        nickName: 'Gopo',
        DOB: '1979-11-01',
        POB: 'Burgas',
        gender: 'f',
        imageUrl: 'https://w7.pngwing.com/pngs/940/645/png-transparent-musician-guitarist-musical-ensemble-guitar-microphone-musician-guitarist-thumbnail.png',
        role: 'musician',
        instrument: 'flute',
        startedAt: '2022-01-01',
        contact: {
          email: 'mimato@gbg.bg',
          phone: '+359888390244',
          address: {
            country: 'Bulgaria',
            city: 'София',
            postCode: '1619',
            details: 'some street Number'
          }
        },
        passport: {
          number: '5876978907',
          authority: 'MVR BG',
          issueDate: '2022-01-01',
          validityDate: '2025-01-01'
        },
        documents: {
          PDNum: '767987',
          selfEmplTaxNum: '4564564',
          medAttestToDate: '456456',
          accidentInsuranceNum: '456456'
        },
        nextOfKin: {
          nextToKinName: 'Мария Дюлгерова',
          nextToKinAddress: 'address line 1',
          nextToKinEmail: 'mimato@gbg.bg',
          nextToKinPhone: '+359888390241'
        }
      }
    // console.log(result);
    expect(result).toStrictEqual(output_json);
});