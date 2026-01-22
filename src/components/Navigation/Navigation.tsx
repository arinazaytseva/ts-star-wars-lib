import { Route, Routes } from "react-router";
import { Main, People, Home } from '../../components';

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
      </Route>
    </Routes>
  )
};