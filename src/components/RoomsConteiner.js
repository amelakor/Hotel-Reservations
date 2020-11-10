import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter.js";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsConteiner({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsConteiner);

// import React from "react";
// import RoomsList from "./RoomsList";
// import RoomsFilter from "./RoomsFilter.js";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsConteiner() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello fom Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
