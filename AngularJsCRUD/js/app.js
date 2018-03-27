

var app = angular.module('stRegistration', []);

app.controller("regController", function($scope){
  var reg = this;
      
      reg.newStudent = {};
      reg.editStdInfo = {};
      reg.deletedStInfo = {};
      reg.flashMsg = "";
      reg.addModalTitle = "";
    

      reg.damoStDataList = [
          {name:'MD Imran Hossain', year:'2016', department:'CSE'},
          {name:'MD Rohim Madbar', year:'2017', department:'EEE'},
          {name:'MD Korim Madbar', year:'2015', department:'MBA'},
      ];

      reg.addStudent = function(){
          reg.addModalTitle = "Student registration from.";
      };

      reg.saveUser= function(){
         if(reg.name && reg.year && reg.department){
          var newStudent = {
            name: reg.name,
            year: reg.year,
            department: reg.department
          };
          reg.damoStDataList.push(newStudent);
           reg.flashMsg="Successfully registration completed.";
           console.log("Saved student msge");
         }else{
           reg.flashMsg="Require field is empty";
           console.log("Require field is empty");
         }
      };
      reg.editStudentInfo = function(student){
         reg.addModalTitle = "Student update form";
         reg.editInfo = student

      };
      reg.updateStudent = function(){
        reg.flashMsg="Successfully update completed.";
      };
      reg.delateStudent = function(student){
           reg.deletedStInfo = student;
      };
      reg.confirmDelete =function(){
           reg.damoStDataList.splice(reg.damoStDataList.indexOf(reg.deletedStInfo), 1);
           reg.flashMsg="Successfully delate your date";
           console.log("Successfully delate your date");
      };
      reg.clearMessage = function(){
         reg.flashMsg="";
        console.log("Cleared msge");
      };

});