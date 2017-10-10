import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

  // const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
        <NavLink to="/albums" activeClassName='active'>Go to Albums</NavLink>
        </h4>
      </section>
      <section>
      <h4 className="menu-item">
        <NavLink to="/artists" activeClassName='active'>Go to Artists</NavLink>
      </h4>
    </section>
    </sidebar>
  );
}

export default Sidebar;
