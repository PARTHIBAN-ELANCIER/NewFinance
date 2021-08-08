import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import LifePolicies from "../Pages/LifePolicies";
import NonLifePolicies from "../Pages/NonLifePolicies";
import OurProduct from "../Pages/OurProduct";
import TeamInsurance from "../Pages/TeamInsurance";

export default [
    {
        path : '/' ,
        component : Home ,
        exact : true
    },
    {
        path : '/AboutUs' ,
        component : AboutUs
    },
    {
        path : '/OurProduct' ,
        component : OurProduct
    },
    {
        path : '/LifePolicies',
        component : LifePolicies
    },
    {
        path : '/NonLifePolicies',
        component : NonLifePolicies
    },
    {
        path : '/TeamInsurance',
        component : TeamInsurance
    }
]