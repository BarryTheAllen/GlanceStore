import { Routes, Route, Navigate, useParams } from 'react-router'
import Home from '../pages/HomeSection/home/Home'
import phonesCatalog from '../../data/catalogComponentData/phonesCatalog'
import GeneralLayout from './GeneralLayout'
import laptopsCatalogData from "../../data/catalogComponentData/laptopsCatalogData" 
import CatalogComponent from '../pages/CatalogSection/CatalogComponent'
import computersData from "../../data/catalogComponentData/computersData"
import tabletCatalog from '../../data/catalogComponentData/tabletData'
import tvCatalog from "../../data/catalogComponentData/tvCatalogData"
import speakerCatalog from "../../data/catalogComponentData/speakersCatalogData"
import Cart from "../pages/Cart/Cart"
import Registration from '../pages/Profile/Registration/Registration'
import CardOpen from '../pages/CardOpen/CardOpen'
import Login from '../pages/Profile/Login/Login.jsx'

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
            element={<Home cardData={phonesCatalog} />}
            category="phones"
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
        </Route>
      </Routes>
    </>
  )
}

export default Routing