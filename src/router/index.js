import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";
import HorizontalLinearStepper from "../Pages/Forms";
import LifePolicies from "../Pages/LifePolicies";
import NonLifePolicies from "../Pages/NonLifePolicies";
import OurProduct from "../Pages/OurProduct";
import ProposalPage1 from "../Pages/ProposalPage1";
import ProposalPage2 from "../Pages/ProposalPage2";
import Question1 from "../Pages/Question1";
import Question2 from "../Pages/Question2";
import Question3 from "../Pages/Question3";
import Question4 from "../Pages/Question4";
import TeamInsurance from "../Pages/TeamInsurance";
import Forms from "../Pages/Forms";
import ReviewPay from "../Pages/ReviewPay";

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
    },
    {
        path : '/Question1',
        component : Question1
    },
    {
        path : '/Question2',
        component : Question2
    },
    {
        path : '/Question3',
        component : Question3
    },
    {
        path : '/Question4',
        component : Question4
    },
    {
        path : '/ProposalPage1',
        component : ProposalPage1
    },
    {
        path : '/ProposalPage2',
        component : ProposalPage2
    },
    {
        path : '/Forms',
        component : Forms
    },
    {
        path : '/ReviewPay',
        component : ReviewPay
    }
]