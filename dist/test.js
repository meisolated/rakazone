/*!
 * Copyright (C) 2022 Vivek Mudgal - All Rights Reserved 
 * You may use, distribute and modify this code under the
 * terms of the license.
 *
 * You should have received a copy of the license with
 * this file. If not, please write to: isolatedbot@gmail.com,
 * 
 * RakaZone v0.1.1
 * Homepage: https://raka.zone
 * Copyright 2022 Vivek Mudgal
 * Author: Vivek Mudgal (https://github.com/meisolated)
 * Date: 7/16/2022
 * Time: 7:35:32 PM
 * */

let x = {
    Home: {
        name: "Home",
        path: "/",
        active: false,
    },
    Explore: {
        name: "Explore",
        path: "/Explore",
        active: false,
    },
    Shop: {
        name: "Shop",
        path: "/Shop",
        active: false,
    },
    Profile: {
        name: "Profile",
        path: "/profile",
        active: false,
    },
}

for (let key in x) {
    console.log(x[key])
}


