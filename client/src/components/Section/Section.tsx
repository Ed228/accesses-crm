import React, {ReactChild, ReactElement, ReactNode} from "react";
import {ActiveNavLinkState} from "../../store/types";
import {useSelector} from "react-redux";
import CreateAccesses from "../СreateAccesses/CreateAccesses";

interface SectionProps {
  children: ReactNode
}

export default function Section({children}: SectionProps) {

  // interface RootNavLinkState {
  //   navLink: ActiveNavLinkState
  // }
  // const activeLinkIndex =
  //   useSelector((state: RootNavLinkState) => state.navLink.activeLinkIndex )

  return (
      <section>
        <div className='container'>
          <div className="row">
            <div className='col-xs-12'>
              {children}
            </div>
          </div>
        </div>
      </section>
  )
}

