
$projectDir = "D:\JavaScript\Node_Frameworks\ngular\src\app";
$dir = @(
    "modules", "guards", "interceptor"
);
if (Test-Path $projectDir) {
    Set-Location -Path $projectDir;
    foreach ($x in $dir) {
        if (-not(Test-Path -Path $x)) {
            mkdir $x;
        }
    } 
    Set-Location -Path "D:\JavaScript\Node_Frameworks\ngular";
    # Here the params 
    # 1. --routing create a routing file for the modules
    # 2. --module is use to link the url to the closest Module. 
    # As here is App so it modify teh app.module.ts file to route this module
    ng generate module modules/admin --routing --module app;
    ng generate module modules/user-profile --routing --module app;
    ng generate module modules/product --routing --module app;
    ng generate module modules/checkout --routing --module app;
    ng generate module modules/order --routing --module app;
    ng generate module modules/auth --routing --module app;
    ng generate module modules/cart --routing --module app;
    ng generate module modules/shared --routing --module app;

    ng generate component modules/shared/header;
    ng generate component modules/shared/footer;
    ng generate component modules/auth/login;
    ng generate component modules/auth/register;

    ng generate component modules/product/product-list
    ng generate component modules/product/product-detail
    ng generate component modules/product/search-bar
    
    ng generate component modules/cart/component;
    ng generate component modules/checkout/checkout;
    ng generate component modules/checkout/payment;
    ng generate component modules/checkout/configmation;
    ng generate component modules/user-profile/user;

    ng generate service modules/auth/services/auth;
    ng generate service modules/cart/services/cart;
    ng generate service modules/checkout/services/checkout;
    ng generate service modules/user-profile/services/user;


    # to run the server using ipaddress and custom port then open in default browser..
    ng serve --host 192.168.1.235 --port 999 --open --disable-host-check
    
}
else {
    Write-Host "Please Install Angular and set the src folder as root dir..!!"
}
