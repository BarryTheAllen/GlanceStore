import { Routes, Route, Navigate, useParams } from 'react-router'
import Home from '../pages/HomeSection/home/Home.jsx'
import phonesCatalog from '../../data/catalogComponentData/phonesCatalog.js'
import GeneralLayout from './GeneralLayout.jsx'
import laptopsCatalogData from "../../data/catalogComponentData/laptopsCatalogData.js" 
import CatalogComponent from '../pages/CatalogSection/CatalogComponent.jsx'
import computersData from "../../data/catalogComponentData/computersData.js"
import tabletCatalog from '../../data/catalogComponentData/tabletData.js'
import tvCatalog from "../../data/catalogComponentData/tvCatalogData.js"
import speakerCatalog from "../../data/catalogComponentData/speakersCatalogData.js"
import Cart from "../pages/Cart/Cart.jsx"
import Registration from '../pages/Profile/Registration/Registration.jsx'
import CardOpen from '../pages/CardOpen/CardOpen.jsx'
import Login from '../pages/Profile/Login/Login.jsx'
import SearchResult from '../pages/SearchResult/SearchResult.jsx'


const catalogData = {
  Phones: {
    cardData: phonesCatalog,
  },
  Laptops: {
    cardData: laptopsCatalogData,
  },
  Computers: {
    cardData: computersData,
  },
  Tablets: {
    cardData: tabletCatalog,
  },
  Televisors: {
    cardData: tvCatalog,
  },
  Speakers: {
    cardData: speakerCatalog,
  }
}

const DynamicCatalog = () => {
  const { category } = useParams();
  const data = catalogData[category];
  
  if (!data) {
    return <Navigate to="/Home" replace />;
  }
  
  return (
    <CatalogComponent
      cardData={data.cardData}
      category={category}
    />
  );
}


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Navigate to="/Home" replace />} />
          <Route
            path="/Home"
            element={<Home cardData={phonesCatalog} category={"phones"} />}
          />
          <Route
            path="/:category"
            element={<DynamicCatalog />}
          />
          <Route
            path="/Cart"
            element={<Cart category="Cart" />}
          />
          <Route
          path='/Registration'
          element={<Registration/>}
          />
          <Route
          path='/Login'
          element={<Login/>}
          />
          <Route
            path='/carddescription'
            element={<CardOpen />}
          />
          <Route
           path='/searchresults'
           element={<SearchResult/>}
           />
        </Route>
      </Routes>
    </>
  )
}

export default Routing