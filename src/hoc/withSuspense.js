import React,{Suspense} from "react";
import Preloader from "../component/common/Preloader/Preloader";

export const withSuspense = (Component) => {

    return (props) => {
      return (
          <Suspense fallback={<div>Загрузка...</div>}>
              <Component {...props}/>
          </Suspense>
      )
    }
}
