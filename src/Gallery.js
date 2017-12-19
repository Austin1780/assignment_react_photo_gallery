import React, { Component } from "react";
//Display login and avatar

const Gallery = ({ users }) => {
  const newUsers = users.map(profile => {
    const { login, avatar_url } = profile;

    return (
      <div className="col-sm-4 user-box">
        <img src={profile.avatar_url} height="150" />
        <p>
          <strong>{profile.login}</strong>
        </p>
      </div>
    );
  });
  return (
    <div className="usersDisplay container">
      <div className="row">{newUsers}</div>
    </div>
  );
};

export default Gallery;

// class Display extends Component {
//   render() {
//     return (
//       <div>
//         <UserList items={categories[0]} category="Appetizer" />
//       </div>
//     );
//   }
// }
//
// const UserList = ({ items, category }) => {
//   return (
//     <div id="menu" className="container">
//       <div className="menu">
//         <div class="row nav nav-tabs bg-success">{category}</div>
//         {items.map(item => {
//           return (
//             <div className="row rows_same">
//               <div class="col-md-3">{item.name}</div>
//               <div class="col-md-3">{item.description}</div>
//               <div class="col-md-3">{item.price}</div>
//               <div class="col-md-3">
//                 <img height="200" width="200" src={item.img} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
