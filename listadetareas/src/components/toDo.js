// export default function Todo({ item }) {
//   const { isEdit, setIsEdit } = useState(false);
//   return (
//     <div className="todo">
//       {isEdit ? <div>Modo Editar</div> : 
//       <div>
//          {item.title} <button onClick={() => setIsEdit(true)}>Edite</button>
//          <button>Delete</button>
//       </div>}
//     </div>
//   )
//   const FormEdit = () => {
//     return (
//       <form>
//         <input type="text" />
//         <button>Save</button>
//       </form>
//     );
//   };

//   const TodoElement = () => {
//     return (
//       <div>
//          {item.title} <button onClick={() => setIsEdit(true)}>Edite</button>
//          <button>Delete</button>
//       </div>

  
//   return (
//     <div className="todo">
//       {isEdit ? <div>Modo Editar</div> : <div>{item.title}</div>}
//     </div>
//     // <div>
//     //     {item.title} <button onClick={() => setIsEdit(true)}>Edite</button>
//     //     <button>Delete</button>
//     // </div>
//   );
// }
