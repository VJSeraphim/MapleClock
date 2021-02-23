

let xml =
       `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
        <GetCharacterInfoByAccountID xmlns="http://gnxsoap.nexon.com/soap/">
        <AccountID> AccountID[32bit Int Data] </AccountID>
        </GetCharacterInfoByAccountID>
        </soap:Body>
        </soap:Envelope>
        `
   const url = "http://api.maplestory.nexon.com/soap/maplestory.asmx?wsdl";
   const sampleHeaders = {
      'Content-Type':'text/xml; charset=utf-8',
      'Content-Length':xml.length,
      'SOAPAction':"http://gnxsoap.nexon.com/soap/GetCharacterInfoByAccountID"
   };

   const getUserData = async(callBack) => {
    try{
       const { response } = await soapRequest({
          url : url,
          headers : sampleHeaders,
          xml : xml,
          timeout : 1000
       });
       const { header, body, statusCode } = response;
       console.log(`header : ${header}`);
       console.log(`body : ${body}`);
       console.log(`statusCode : ${statusCode}`);

       var xmlToJson = convert.xml2json(body, {compact: true, spaces: 4});

       callBack(xmlToJson);
    } catch (error){
       console.error(error);
    }
 }

 getUserData( (userXML) => {
    const jsonData = JSON.parse(userXML)['soap:Envelope']['soap:Body']['GetCharacterInfoByAccountIDResponse']['GetCharacterInfoByAccountIDResult']['diffgr:diffgram']['NewDataSet']['UserInfo'];
    console.log("##############################################");
    console.log(jsonData.AvatarImgURL._text);
    console.log(jsonData.WorldName._text);
    console.log(jsonData.CharacterName._text);
    console.log(jsonData.Lev._text);
    console.log(jsonData.Exp._text);
    console.log(jsonData.JobDetail._text);
    console.log(jsonData.TotRank._text);
    console.log(jsonData.WorldRank._text);
    console.log("##############################################");
    res.json(jsonData);
 });