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


