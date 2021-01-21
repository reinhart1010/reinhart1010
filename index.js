const yaml = require('js-yaml');
const fs   = require('fs');
const { exception } = require('console');
const { exit } = require('process');

// The data compiler
var rawData = {};
var finalText = {
  "bio-50": false,
  "bio-100": false,
  "bio-150": false,
  "bio-200": false,
  "bio-250": false,
  "bio-gitee": false,
  "bio-wechat": false,
  "email": false,
  "email-binus": false,
  "linkedin": false,
  "readme": false,
  "readme-id": false,
  "readme-zh": false,
  "mediawiki": false,
  "mediawiki-id": false,
  "richtext": false,
  "richtext-id": false,
  "youtube": false,
  "website": false
}

// Get document, or throw exception on error
try {
  rawData.bio = yaml.load(fs.readFileSync('config/bio.yml', 'utf8'));
  rawData.communities = yaml.load(fs.readFileSync('config/communities.yml', 'utf8'));
  rawData.projects = yaml.load(fs.readFileSync('config/projects.yml', 'utf8'));

  // Manifest version check
  if (rawData.bio > 1) throw(exception("Manifest version is higher for bio"));
  if (rawData.communities > 1) throw(exception("Manifest version is higher for communities"));
  if (rawData.projects > 1) throw(exception("Manifest version is higher for projects"));
} catch (e) {
  console.log(e);
  exit(1);
}

// First thing first, compile for bio-* format!
console.log("Compiling for target architecture \"bio-*\"...");
let tempBio = {
  "en-US": "",
  "id-ID": "",
  "zh-CN": ""
}, i;
for (i = 0; i < rawData.bio.data.length; i++){
  // Add string
  tempBio["en-US"] += rawData.bio.data[i]["en-US"] + " ";
  tempBio["id-ID"] += (rawData.bio.data[i]["id-ID"] || rawData.bio.data[i]["en-US"]) + " ";
  tempBio["zh-CN"] += (rawData.bio.data[i]["zh-CN"] || rawData.bio.data[i]["en-US"]) + " ";

  let enUSLength = tempBio["en-US"].length;

  if (enUSLength - 1 <= 50){
    finalText["bio-50"] = tempBio["en-US"].slice(0, -1);
  }
  if (enUSLength - 1 <= 100){
    finalText["bio-100"] = tempBio["en-US"].slice(0, -1);
  }
  if (enUSLength - 1 <= 150){
    finalText["bio-150"] = tempBio["en-US"].slice(0, -1);
  }
  if (enUSLength - 1 <= 200){
    finalText["bio-200"] = tempBio["en-US"].slice(0, -1);
  }
  if (enUSLength - 1 <= 250){
    finalText["bio-250"] = tempBio["en-US"].slice(0, -1);
  }

  let zhCNLength = tempBio["zh-CN"].length;

  if (zhCNLength - 1 <= 30){
    finalText["bio-wechat"] = tempBio["zh-CN"].slice(0, -1);
  }
  if (zhCNLength - 1 <= 100){
    finalText["bio-gitee"] = tempBio["zh-CN"].slice(0, -1);
  }
}

console.log(finalText)