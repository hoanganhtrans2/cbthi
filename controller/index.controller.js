var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
var docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

module.exports.getAllSinhVien = async (req, res) => {
  try {
    const result = await getAllSinhVienFn();
    res.render("index", { listsv: result });
  } catch (error) {
    res.render("err");
  }
};

module.exports.getSinhVienById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await getSinhVienByIdFn(id);
    res.render("sinhvien", { sv: result });
  } catch (error) {
    res.render("err");
  }
};

let getAllSinhVienFn = async () => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: "sinhvien",
    };
    docClient.scan(params, function (err, data) {
      if (err) reject(err);
      else resolve(data.Items);
    });
  });
};

let getSinhVienByIdFn = (id) => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: "sinhvien",
      Key: {
        id: id,
      },
    };
    docClient.get(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
};
