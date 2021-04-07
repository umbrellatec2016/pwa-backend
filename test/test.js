
const chai = require('chai')
const chaiHttp = require('chai-http')
dummypl={
    data: '[{\\"gender\\":\\"female\\",\\"name\\":{\\"title\\":\\"Miss\\",\\"first\\":\\"Louane\\",\\"last\\":\\"Vidal\\"},\\"location\\":{\\"street\\":{\\"number\\":2479,\\"name\\":\\"Place du 8 Février 1962\\"},\\"city\\":\\"Avignon\\",\\"state\\":\\"Vendée\\",\\"country\\":\\"France\\",\\"postcode\\":78276,\\"coordinates\\":{\\"latitude\\":\\"2.0565\\",\\"longitude\\":\\"95.2422\\"},\\"timezone\\":{\\"offset\\":\\"+1:00\\",\\"description\\":\\"Brussels, Copenhagen, Madrid, Paris\\"}},\\"email\\":\\"louane.vidal@example.com\\",\\"login\\":{\\"uuid\\":\\"9f07341f-c7e6-45b7-bab0-af6de5a4582d\\",\\"username\\":\\"angryostrich988\\",\\"password\\":\\"r2d2\\",\\"salt\\":\\"B5ywSDUM\\",\\"md5\\":\\"afce5fbe8f32bcec1a918f75617ab654\\",\\"sha1\\":\\"1a5b1afa1d9913cf491af64ce78946d18fea6b04\\",\\"sha256\\":\\"0124895aa1e6e5fb0596fad4c413602e0922e8a8c2dc758bbdb3fa070ad25a07\\"},\\"dob\\":{\\"date\\":\\"1966-06-26T11:50:25.558Z\\",\\"age\\":55},\\"registered\\":{\\"date\\":\\"2016-08-11T06:51:52.086Z\\",\\"age\\":5},\\"phone\\":\\"02-62-35-18-98\\",\\"cell\\":\\"06-07-80-83-11\\",\\"id\\":{\\"name\\":\\"INSEE\\",\\"value\\":\\"2NNaN01776236 16\\"},\\"picture\\":{\\"large\\":\\"https://randomuser.me/api/portraits/women/88.jpg\\",\\"medium\\":\\"https://randomuser.me/api/portraits/med/women/88.jpg\\",\\"thumbnail\\":\\"https://randomuser.me/api/portraits/thumb/women/88.jpg\\"},\\"nat\\":\\"FR\\"},{\\"gender\\":\\"female\\",\\"name\\":{\\"title\\":\\"Miss\\",\\"first\\":\\"Aubrey\\",\\"last\\":\\"Martin\\"},\\"location\\":{\\"street\\":{\\"number\\":8675,\\"name\\":\\"Duke St\\"},\\"city\\":\\"Princeton\\",\\"state\\":\\"Nova Scotia\\",\\"country\\":\\"Canada\\",\\"postcode\\":\\"B7G 4G1\\",\\"coordinates\\":{\\"latitude\\":\\"-18.3929\\",\\"longitude\\":\\"-5.5054\\"},\\"timezone\\":{\\"offset\\":\\"-2:00\\",\\"description\\":\\"Mid-Atlantic\\"}},\\"email\\":\\"aubrey.martin@example.com\\",\\"login\\":{\\"uuid\\":\\"b7e527c8-3ca5-430c-ba83-711d6ad98773\\",\\"username\\":\\"smallzebra743\\",\\"password\\":\\"0007\\",\\"salt\\":\\"6XyMek6M\\",\\"md5\\":\\"2c16eb746095f838d9f3bbd28048150b\\",\\"sha1\\":\\"7c056b18ad1392267f86253286b40138fd24527b\\",\\"sha256\\":\\"2a66257c19e251353bebc11b7b8dd7ef1c43f7417e738e10b60b559e8f097ee1\\"},\\"dob\\":{\\"date\\":\\"1955-04-29T11:58:30.868Z\\",\\"age\\":66},\\"registered\\":{\\"date\\":\\"2019-03-24T01:09:31.327Z\\",\\"age\\":2},\\"phone\\":\\"394-561-2795\\",\\"cell\\":\\"710-388-7246\\",\\"id\\":{\\"name\\":\\"\\",\\"value\\":null},\\"picture\\":{\\"large\\":\\"https://randomuser.me/api/portraits/women/18.jpg\\",\\"medium\\":\\"https://randomuser.me/api/portraits/med/women/18.jpg\\",\\"thumbnail\\":\\"https://randomuser.me/api/portraits/thumb/women/18.jpg\\"},\\"nat\\":\\"CA\\"},{\\"gender\\":\\"male\\",\\"name\\":{\\"title\\":\\"Mr\\",\\"first\\":\\"Ali\\",\\"last\\":\\"Karadaş\\"},\\"location\\":{\\"street\\":{\\"number\\":4888,\\"name\\":\\"Maçka Cd\\"},\\"city\\":\\"Muğla\\",\\"state\\":\\"Kırşehir\\",\\"country\\":\\"Turkey\\",\\"postcode\\":98428,\\"coordinates\\":{\\"latitude\\":\\"-87.5972\\",\\"longitude\\":\\"-67.8460\\"},\\"timezone\\":{\\"offset\\":\\"+2:00\\",\\"description\\":\\"Kaliningrad, South Africa\\"}},\\"email\\":\\"ali.karadas@example.com\\",\\"login\\":{\\"uuid\\":\\"5a886101-04c5-425f-a9d3-9bfb2bfbadcc\\",\\"username\\":\\"ticklishfish230\\",\\"password\\":\\"micro\\",\\"salt\\":\\"T8Bw1xSh\\",\\"md5\\":\\"7105c6778b7de3b6c9478234ea4366d3\\",\\"sha1\\":\\"2f549696d2c16d4baed5af0f85069c0245c93c2a\\",\\"sha256\\":\\"864d85a963c5de8220128ce89cf89c461546cc1eed0e2cac19476760112ebbcb\\"},\\"dob\\":{\\"date\\":\\"1963-06-25T06:50:57.808Z\\",\\"age\\":58},\\"registered\\":{\\"date\\":\\"2015-04-13T02:16:54.428Z\\",\\"age\\":6},\\"phone\\":\\"(154)-099-1124\\",\\"cell\\":\\"(759)-116-5532\\",\\"id\\":{\\"name\\":\\"\\",\\"value\\":null},\\"picture\\":{\\"large\\":\\"https://randomuser.me/api/portraits/men/62.jpg\\",\\"medium\\":\\"https://randomuser.me/api/portraits/med/men/62.jpg\\",\\"thumbnail\\":\\"https://randomuser.me/api/portraits/thumb/men/62.jpg\\"},\\"nat\\":\\"TR\\"}]',
    nickname: 'nickname'
  }
chai.use(chaiHttp);
const expect = require('chai').expect;
const url= 'http://localhost:5005';
describe("test favorites : ", function() {
    describe("Save Favorites : ", function() {
        it("can save: ", 
         (done)=>{
             chai.request(url)
            .post('/favorites')
            .send(dummypl)
            .end((err,res)=>{
               expect(res.statusCode).eq(200)
               done()
            })
         })
         it("Retrieve error on bad payload: ", 
         (done)=>{
             chai.request(url)
            .post('/favorites')
            .send({})
            .end((err,res)=>{
                console.log(res.statusCode)
                expect(res.statusCode).eq(400)
                done()
            })
         })
    })
    describe("Load Favorites : ", function() {
        it("Load with nickname: ", 
         (done)=>{
            chai.request(url)
            .post('/retrieve')
            .send({nickname:'nickname'})
            .end((err,res)=>{
                console.log(res.statusCode)
                expect(res.statusCode).eq(200)
                done()
            })
         })
        })
})
