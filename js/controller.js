
////local
var url="http://vermajai95-001-site1.gtempurl.com/";



////online
//var url="http://getinfo.somee.com/";


function CtrlSetAlways($scope,$http,$window,$rootScope,$timeout) {
    //    alert("Setalways Runnign");



    var MessageBox=function(result,text)
    {
        var title='Success';
        var type='success';

        if(result!='custom')
        {
            if(result==101)
            {
                title='Not Registered';
                text='You Are Not Registered';
                type='warning';
            }
            else if(result==100)
            {
                title='Deactivated Account Found';
                text='Please Contact Admin To Reactivate Account';
                type='warning';
            }
            if(result==0)
            { 
                title='Error!';
                text='Something Went Wrong';
                type='error';
            }
        }
        else
        {
            title='Invalid!';              
            type='warning';  
        }
        swal({
            title: title,
            text: text,
            type: type,
            showCancelButton: false,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yeah!'
        });
    }



    };


function CtrlRegistration($scope,$http)
{
    //    alert('Contyroller loaded registration ');

    var errorCall=function(response)
    {
    }
    var MessageBox=function(result,text)
    {
        var title='Success';
        var type='success';

        if(result!='custom')
        {
            if(result==101)
            {
                title='Not Registered';
                text='You Are Not Registered';
                type='warning';
            }
            else if(result==100)
            {
                title='Deactivated Account Found';
                text='Please Contact Admin To Reactivate Account';
                type='warning';
            }
            else if(result==0)
            { 
                title='Error!';
                text='Something Went Wrong';
                type='error';
            }
        }
        else
        {
            title='Invalid!';              
            type='warning';  
        }
        swal({
            title: title,
            text: text,
            type: type,
            showCancelButton: false,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yeah!'
        });
    }




    var su_Insert_Users=function(response)
    {
        //        console.log("Success su_Insert_Users saysss ; ");    
        console.log(response.data);
        MessageBox(response.data.flag,"User Added Successfully");
        $scope.Load_All_Users();
    }

    $scope.User={};
    $scope.New_Registration=function()
    {
        //        alert('You Clicked submibt');

        if(!$scope.User.hasOwnProperty("NAME"))
        {
            MessageBox('custom','Please Enter Name');
        }
        else
        {
            if(!$scope.User.hasOwnProperty("PASSWORD"))
            {
                MessageBox('custom','Please Enter Password');
            }
            else
            {
                if(!$scope.User.hasOwnProperty("ADD1"))
                {
                    MessageBox('custom','Please Enter Line 1 Address');
                }
                else
                {
                    if(!$scope.User.hasOwnProperty("ADD2"))
                    {
                        MessageBox('custom','Please Enter Line 2 Address');
                    }
                    else
                    {
                        alert('Call Service To Add Data');

                        $http({
                            method:'GET',
                            params:{data1:$scope.User},
                            url:url+'demosite_services.asmx/Insert_Registration'
                        }).then(su_Insert_Users,errorCall);
                    }
                }

            }

        }



    }


    var su_Load_All_Users=function(response)
    {
        console.log("Success su_Load_AddFavMP3 saysss ; ");    
        console.log(response.data);
        $scope.result_Load_All_Users=response.data.data;
    }
    $scope.Load_All_Users=function()
    {
        $http({
            method:'GET',
            url:url+'demosite_services.asmx/Select_Registration_Details'
        }).then(su_Load_All_Users,errorCall);
    }

    var su_Delete_User=function(response)
    {
        console.log("Success su_Load_AddFavMP3 saysss ; ");    
        console.log(response.data);
        MessageBox(response.data.flag,"User Deleted Successfully");
        $scope.Load_All_Users();
    }
    $scope.Delete_User=function(item)
    {
        console.log(item);
        $http({
            method:'GET',
            params:{data1:item},
            url:url+'demosite_services.asmx/Delete_Registration'
        }).then(su_Delete_User,errorCall);
    }








}

angular
    .module('Spectral')
    .controller('CtrlRegistration', CtrlRegistration)
    .controller('CtrlSetAlways', CtrlSetAlways);